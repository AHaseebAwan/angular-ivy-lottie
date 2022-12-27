import { NgModule } from '@angular/core';
import player from 'lottie-web';
import { LottieModule } from 'ngx-lottie';
import { AnimationComponent } from './animation.component';

export function playerFactory() {
  return player;
}

@NgModule({
  exports: [AnimationComponent],
  declarations: [AnimationComponent],
  imports: [LottieModule.forRoot({ player: playerFactory })],
})
export class LottieAnimationModule {}
