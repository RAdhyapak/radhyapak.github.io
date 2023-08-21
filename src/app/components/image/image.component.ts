import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  @Input() imgSrc: string;
  @Input() imgCaption: string;
  @Input() imgHref: string;
  @Input() imgHeight: string = "60";
  @Input() imgWidth: string = "60";

  constructor() { }

  ngOnInit() {
  }

}
