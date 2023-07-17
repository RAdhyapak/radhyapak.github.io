import { Component, OnInit } from '@angular/core';
import { faLinkedin, faFacebookSquare, faGithubSquare, faGithub, faAngular, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
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
