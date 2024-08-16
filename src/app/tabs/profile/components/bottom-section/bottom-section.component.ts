import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bottom-section',
  templateUrl: './bottom-section.component.html',
  styleUrls: ['./bottom-section.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class BottomSectionComponent {
@Input() info: any;


  constructor() { }


}
