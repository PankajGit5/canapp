import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccordionComponent } from './accordion/accordion.component';
import { BannerComponent } from './banner/banner.component';
import { TestComponent } from './test/test.component';
import { ScoresComponent } from './scores/scores.component';
import { DetailsComponent } from './details/details.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DownloadsComponent } from './downloads/downloads.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccordionComponent,
    BannerComponent,
    TestComponent,
    ScoresComponent,
    DetailsComponent,
    CarouselComponent,
    DownloadsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
