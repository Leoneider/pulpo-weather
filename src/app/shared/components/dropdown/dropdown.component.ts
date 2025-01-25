import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownPanel } from './dropdown-panel';

@Component({
  selector: 'ds-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html'
})
export class DropdownComponent implements DropdownPanel {
  @ViewChild(TemplateRef) templateRef!: TemplateRef<any>;
  @Output() closed = new EventEmitter<void>();

  @Input() isMultiple = false;

  close(): void {
    if (!this.isMultiple) {
      this.closed.emit();
    }
  }
}
