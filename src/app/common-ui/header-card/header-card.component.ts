import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-card',
  standalone: true, // Делаем компонент standalone
  templateUrl: './header-card.component.html',
  styleUrls: ['./header-card.component.scss'],
})
export class HeaderCardComponent {
  [x: string]: any;
  @Input() report: any;
}
