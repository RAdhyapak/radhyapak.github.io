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
    BlogListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
