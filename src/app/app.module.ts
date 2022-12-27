import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LottieAnimationModule } from '../lottie-animation/lottie-animation.module';

@NgModule({
  imports: [BrowserModule, FormsModule, LottieAnimationModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
