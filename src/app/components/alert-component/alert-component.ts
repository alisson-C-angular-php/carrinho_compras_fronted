import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert-component',
   standalone: true,
  imports: [  CommonModule],
  templateUrl: './alert-component.html',
  styleUrl: './alert-component.scss'
})

export class AlertComponent {
  @Input() message: string = '';
  @Input() type: 'success' | 'danger' | 'warning' | 'info' = 'info';
  @Input() show: boolean = false;

  closeAlert() {
    this.show = false;
  }
}
