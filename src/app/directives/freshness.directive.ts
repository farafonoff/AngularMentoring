import { Directive, Input, ElementRef, Renderer2, SimpleChanges, OnInit } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { SimpleChange } from '@angular/core/src/change_detection/change_detection_util';

@Directive({
  selector: '[appFreshness]'
})
export class FreshnessDirective implements OnChanges {
  @Input() appFreshness: Date;
  @Input() appThresholdDays = 14;


  constructor(private elem: ElementRef, private renderer: Renderer2) {

  }

  ngOnChanges(changes: SimpleChanges) {
    const now = new Date();
    if (now.getDate() < this.appFreshness.getDate()) {
      // upcoming
      this.renderer.setStyle(this.elem.nativeElement, 'border-color', 'blue');
    } else
    if (now.getDate() - this.appThresholdDays < this.appFreshness.getDate()) {
      // fresh
      this.renderer.setStyle(this.elem.nativeElement, 'border-color', 'green');
    } else {
      this.renderer.removeStyle(this.elem.nativeElement, 'border-color');
    }
  }

}
