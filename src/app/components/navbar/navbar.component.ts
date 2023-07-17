import { Component, OnInit, HostListener, ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { Location } from '@angular/common';
import { Router, RoutesRecognized } from '@angular/router';
import { faHome, faPhone, faBookOpen, faAddressCard, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  @ViewChildren('myStory') myStory: QueryList<ElementRef>;
  faHome = faHome;
  faStory = faBookOpen;
  faSkills = faLaptopCode;
  faContact = faPhone;
  faResume = faAddressCard;

  constructor(private location: Location, private router: Router, public toastService: ToastService) { }

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


  scrollToId(id: string) {
    let element = document.querySelector(id);
    if (element === null) {
      this.router.navigateByUrl('/').then(() => {
        element = document.querySelector(id);
        element.scrollIntoView({behavior: 'smooth', inline: 'start'});
      });
    } else {
      element.scrollIntoView({behavior: 'smooth', inline: 'start'});
    }

    if (id === '#contact-me') {
      this.toastService.show('Hey there! Please feel free to reach out to me on LinkedIn or send me an email');
    }
  }

}
