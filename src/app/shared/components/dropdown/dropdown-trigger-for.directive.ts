import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  Output,
  ViewContainerRef,
} from '@angular/core';
import { DropdownPanel } from './dropdown-panel';
import { ConnectedPosition, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { merge, Observable, Subscription } from 'rxjs';

@Directive({
  standalone: true,
  selector: '[dropdownTriggerFor]',
})
export class DropdownTriggerForDirective implements OnDestroy {
  public isDropdownOpen = false;
  private overlayRef!: OverlayRef;
  private dropdownClosingActionsSub = Subscription.EMPTY;

  connectedPosition: ConnectedPosition = {
    originX: 'start',
    originY: 'bottom',
    overlayX: 'start',
    overlayY: 'top',
    offsetX: -17,
    offsetY: 17,
  };

  @Input('dropdownTriggerFor') public dropdownPanel!: DropdownPanel;
  @Input() set position(value: ConnectedPosition) {
    this.connectedPosition = value;
  }
  @Output() dropdownOpen = new EventEmitter<boolean>();

  @HostListener('click')
  toggleDropdown(): void {
    this.isDropdownOpen ? this.destroyDropdown() : this.openDropdown();
  }

  constructor(
    private readonly overlay: Overlay,
    private readonly elementRef: ElementRef<HTMLElement>,
    private readonly viewContainerRef: ViewContainerRef
  ) { }

  openDropdown(): void {
    this.isDropdownOpen = true;
    this.dropdownOpen.emit(this.isDropdownOpen);
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      scrollStrategy: this.overlay.scrollStrategies.close(),
      positionStrategy: this.overlay
        .position()
        .flexibleConnectedTo(this.elementRef)
        .withPositions([this.connectedPosition]),
    });



    const templatePortal = new TemplatePortal(
      this.dropdownPanel.templateRef,
      this.viewContainerRef
    );
    this.overlayRef.attach(templatePortal);

    this.dropdownClosingActionsSub = this.dropdownClosingActions().subscribe(
      () => {
        this.destroyDropdown();
      }
    );
  }

  private dropdownClosingActions(): Observable<MouseEvent | void> {
    const backdropClick$ = this.overlayRef.backdropClick();
    const detachment$ = this.overlayRef.detachments();
    const dropdownClosed = this.dropdownPanel.closed;
    return merge(backdropClick$, detachment$, dropdownClosed);
  }

  private destroyDropdown(): void {
    if (!this.overlayRef || !this.isDropdownOpen) {
      return;
    }

    this.dropdownClosingActionsSub.unsubscribe();
    this.isDropdownOpen = false;
    this.dropdownOpen.emit(this.isDropdownOpen);
    this.overlayRef.detach();
  }

  ngOnDestroy(): void {
    if (this.overlayRef) {
      this.overlayRef.dispose();
    }
  }
}
