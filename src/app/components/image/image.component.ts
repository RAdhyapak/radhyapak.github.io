import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  imports: [],
  templateUrl: './image.component.html',
  styleUrl: './image.component.css'
})
export class ImageComponent {
  @Input() imgSrc: string;
  @Input() imgCaption: string;
  @Input() imgHref: string;
  @Input() imgHeight: number = 60;
  @Input() imgWidth: number = 60;

  constructor() { }

  ngOnInit() {
  }
}
