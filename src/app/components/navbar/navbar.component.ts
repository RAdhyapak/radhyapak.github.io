import { Component, OnInit, HostListener, ElementRef, ViewChild, ViewChildren, QueryList, TemplateRef } from '@angular/core';
import { Location } from '@angular/common';
import { Router, RoutesRecognized } from '@angular/router';
import { faHome, faPhone, faBookOpen, faAddressCard, faLaptopCode, faCertificate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastService } from '../..//services/toast.service';

@Component({
  selector: 'app-navbar',
  imports: [FontAwesomeModule],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  @ViewChildren('myStory') myStory: QueryList<ElementRef>;
  faHome = faHome;
  faStory = faBookOpen;
  faSkills = faLaptopCode;
  faCerts = faCertificate;
  faContact = faPhone;
  faResume = faAddressCard;

  constructor(private location: Location, private router: Router, public toastService: ToastService) { }

  ngOnInit() {
    const element = document.querySelector('.navbar');
    this.router.events.subscribe(event => {
      if (event instanceof RoutesRecognized) {
        if (event.url !== '/') {
          element?.classList.add('bg-dark');
        }
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e: any) {
    if (window.outerWidth > 600 && this.location.isCurrentPathEqualTo('/')) {
    const element = document.querySelector('.navbar');
    const scrolledOverElement = document.querySelector('.home_hero .heading');
    const sectionOneOptions = {
      rootMargin: '-120px 0px 0px 0px'
    };
    const sectionOneObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          element?.classList.add('bg-dark');
        } else {
          element?.classList.remove('bg-dark');
        }
      });
    }, sectionOneOptions);

    if (scrolledOverElement) {
      sectionOneObserver.observe(scrolledOverElement);
    }
    }
  }


  scrollToId(id: string) {
    let element = document.querySelector(id);
    if (element === null) {
      this.router.navigateByUrl('/').then(() => {
        element = document.querySelector(id);
        element?.scrollIntoView({behavior: 'smooth', inline: 'start'});
      });
    } else {
      element.scrollIntoView({behavior: 'smooth', inline: 'start'});
    }

    // if (id === '#contact-me') {
    //   this.toastService.show('Hey there! Please feel free to reach out to me on LinkedIn or send me an email');
    // }
  }

  showStandard(template: TemplateRef<any>) {
    this.toastService.show({ template });
  }

}