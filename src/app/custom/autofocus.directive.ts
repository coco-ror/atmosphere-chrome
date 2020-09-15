import { Directive, ElementRef, HostListener, Input } from '@angular/core';
declare var jQuery:any;
@Directive({
  selector: '[app-autofocus]'
})
export class AutoFocusDirective {

  constructor(private el: ElementRef) { }

  @Input()
  set show_focus(isShown: boolean){
    //if isShown is false make element invisible
    //if isShown is true make element visible and its child textarea to focus
    if(isShown){
      this.el.nativeElement.style.display = "block";
      jQuery(this.el.nativeElement).focus();
      jQuery(this.el.nativeElement).find('textarea').focus();
    }
    else
      this.el.nativeElement.style.display = "none";
  }

}
