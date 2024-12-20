import { Component, OnInit } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { ImageComponent } from '../image/image.component';
import { TimelineComponent } from '../timeline/timeline.component';
import { ToastComponent } from '../toast/toast.component'; 

@Component({
  selector: 'app-home-content',
  imports: [HeroComponent, ImageComponent, TimelineComponent, ToastComponent],
  templateUrl: './home-content.component.html',
  styleUrl: './home-content.component.css'
})
export class HomeContentComponent implements OnInit  {
  constructor() { }

  ngOnInit() {
  }
}
