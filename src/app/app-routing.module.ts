import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogComponent } from './components/blog/blog.component';

const routes: Routes = [
    { path: '', component: HomeContentComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'blogs', component: BlogsComponent},
    { path: 'blog', component: BlogComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
