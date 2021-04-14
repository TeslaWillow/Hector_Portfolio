import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SkillComponent } from './shared/skill/skill.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './shared/content/content.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ProyectsComponent } from './shared/proyects/proyects.component';
import { ScrollToTopComponent } from './shared/scroll-to-top/scroll-to-top.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SkillComponent,
    FooterComponent,
    ContentComponent,
    LandingPageComponent,
    ProyectsComponent,
    ScrollToTopComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
