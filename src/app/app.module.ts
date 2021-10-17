import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VerticalSpaceComponent } from './components/vertical-space/vertical-space.component';
import { FooterComponent } from './components/footer/footer.component';
import { ImageComponent } from './components/image/image.component';
import { YoutubeVideoComponent } from './components/youtube-video/youtube-video.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { ContactComponent } from './components/contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroComponent } from './components/hero/hero.component';
import { SubmitSuccessComponent } from './components/submit-success/submit-success.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ToastComponent } from './components/toast/toast.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    VerticalSpaceComponent,
    FooterComponent,
    ImageComponent,
    YoutubeVideoComponent,
    HomeContentComponent,
    ContactComponent,
    HeroComponent,
    SubmitSuccessComponent,
    BlogComponent,
    BlogsComponent,
    BlogListComponent,
    TimelineComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
