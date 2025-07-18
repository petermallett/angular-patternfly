import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-masthead',
  imports: [],
  templateUrl: './masthead.component.html',
  styleUrl: './masthead.component.css',
})
export class MastheadComponent {
  @Input() sidebarCollapsed!: boolean;
  @Output() sidebarCollapsedChange = new EventEmitter<boolean>();

  sidebarCollapsedToggle() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
    this.sidebarCollapsedChange.emit(this.sidebarCollapsed);
  }
}
