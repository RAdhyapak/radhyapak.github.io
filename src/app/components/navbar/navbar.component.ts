import { Component, OnInit, HostListener, ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { Location } from '@angular/common';
import { Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  @ViewChildren('myStory') myStory: QueryList<ElementRef>;

  constructor(private location: Location, private router: Router) { }

  ngOnInit() {
    const element = document.querySelector('.navbar');
    this.router.events.subscribe(event => {
      if (event instanceof RoutesRecognized) {
        if (event.url !== '/') {
          element.classList.add('bg-dark');
        }
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.outerWidth > 600 && this.location.isCurrentPathEqualTo('/')) {
    const element = document.querySelector('.navbar');
    const scrolledOverElement = document.querySelector('.home_hero .heading');
    const sectionOneOptions = {
      rootMargin: '-120px 0px 0px 0px'
    };
    const sectionOneObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          element.classList.add('bg-dark');
        } else {
          element.classList.remove('bg-dark');
        }
      });
    }, sectionOneOptions);

    sectionOneObserver.observe(scrolledOverElement);
    }
  }

  scrollToStory() {
    let element = document.querySelector('#my-story');
    if (element === null) {
      this.router.navigateByUrl('/').then(() => {
        element = document.querySelector('#my-story');
        element.scrollIntoView({behavior: 'smooth', inline: 'start'});
      });
    } else {
      element.scrollIntoView({behavior: 'smooth', inline: 'start'});
    }
  }
}
