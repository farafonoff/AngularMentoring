import { Directive, Input, ElementRef, Renderer2, SimpleChanges, OnInit } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { SimpleChange } from '@angular/core/src/change_detection/change_detection_util';
import * as moment from 'moment';

@Directive({
  selector: '[appFreshness]'
})
export class FreshnessDirective implements OnChanges {
  @Input() appFreshness: Date;
  @Input() appThresholdDays = 14;


  constructor(private elem: ElementRef, private renderer: Renderer2) {

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(moment(this.appFreshness).format(), moment().format());
    if (moment(this.appFreshness).diff(moment()) > 0) {
      // upcoming
      this.renderer.setStyle(this.elem.nativeElement, 'border-color', 'blue');
    } else
    if (moment(this.appFreshness).diff(moment(), 'days') > -14) {
      // fresh
      this.renderer.setStyle(this.elem.nativeElement, 'border-color', 'green');
    } else {
      this.renderer.removeStyle(this.elem.nativeElement, 'border-color');
    }
  }

}
