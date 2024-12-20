import { Component } from '@angular/core';
import { YoutubeVideoComponent } from '../youtube-video/youtube-video.component';
import { ImageComponent } from '../image/image.component';

@Component({
  selector: 'app-timeline',
  imports: [YoutubeVideoComponent, ImageComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  constructor() { }

}
