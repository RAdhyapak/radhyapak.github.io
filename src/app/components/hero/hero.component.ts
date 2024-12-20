import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {
  @Input() heading!: string;
  @Input() subheading!: string;
  @Input() subinfo!: string;
  @Input() img!: string;

  constructor(private location: Location) { }

  ngOnInit() {
    // (document.querySelector('#heroContainer') as HTMLElement).style.backgroundImage =
    // 'url("assets/images/' + this.img + '")';
   }

}

