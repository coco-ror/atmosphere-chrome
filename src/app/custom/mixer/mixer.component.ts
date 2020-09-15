import { Component, OnInit, EventEmitter, ElementRef, Input, Output } from '@angular/core';
declare var jQuery:any;
@Component({
  selector: 'app-mixer',
  templateUrl: './mixer.component.html',
  styleUrls: ['./mixer.component.css']
})
export class MixerComponent implements OnInit {
  @Output() valueChanged = new EventEmitter<number>();
  public slider:any;
  public _value:number = 0;
  public _option : any;
  constructor(private elementRef: ElementRef) {
    this._option = { min: -50, max: 50, step: 1, orientation : 'horizontal', tooltip : 'hide' };
  }

  ngOnInit() {
    let option = this._option;
    let me = this;
    option.value = this._value;
    this.slider = jQuery(this.elementRef.nativeElement).find('input.slider').slider(option);//new Slider("input.slider" + i, { min : option.min, max : option.max, step : option.step, value : this.value, orientation : option.orientation, tooltip : option.tooltip });
    this.slider.change(function(event){
      let newval = event.value.newValue;
      let oldValue = event.value.oldValue;
      me.valueChanged.emit(newval);
      me._value = newval;
    });
  }
  @Input()
  set value (value: number) {
    this._value = value;
    if(this.slider != null)
      this.slider.slider('setValue', value);
  }
  @Input()
  set option (option: any) {
    this._option = option;
  }
  get value () {
    return this._value;
  }
}
