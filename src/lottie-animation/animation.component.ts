import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  NgZone,
  OnInit,
} from '@angular/core';
import { AnimationItem, AnimationSegment } from 'lottie-web';

@Component({
  template: ` <div class="container">
    <ng-lottie
      [options]="options"
      [width]="width"
      [height]="height"
      (animationCreated)="animationCreated($event)"
      (complete)="onSceneCompleted()"
    ></ng-lottie>
  </div>`,
  selector: 'axc-lottie-animation',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimationComponent implements OnInit {
  options: any;

  @Input() height = '300px';
  @Input() width = '300px';

  animationItem: AnimationItem | null = null;

  constructor(private ngZone: NgZone, private ref: ChangeDetectorRef) {}

  ngOnInit() {
    if (!this.options) {
      this.options = {
        path: '/assets/logo.animation.json',
        autoplay: false,
        loop: false,
      };
    }
  }

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }

  onSceneCompleted() {
    console.log('scene completed');
  }

  playLogoToHome() {
    this.animationItem.goToAndPlay('logo');
  }

  playHomeToLogo() {
    this.animationItem.setSpeed(3);
    this.animationItem.goToAndPlay('home-to-logo');
  }

  playRainbow() {
    this.animationItem.goToAndPlay('rainbow');
  }
}
