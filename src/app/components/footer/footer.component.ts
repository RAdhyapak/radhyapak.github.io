import { Component, OnInit } from '@angular/core';
import { faLinkedin, faFacebookSquare, faGithubSquare, faGithub, faAngular, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-footer',
  imports: [FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit  {
  faLinkedin = faLinkedin;
  faFacebook = faFacebookSquare;
  faEnvelope = faEnvelopeSquare;
  faGithub = faGithubSquare;
  faGithubO = faGithub;
  faAngular = faAngular;
  constructor() { }

  ngOnInit() {
  }

}
