import { Directive,ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appValidator]'
})
export class ValidatorDirective {
  @Input('appValidator') highlightColor;
  constructor(private eR : ElementRef) { }
  ngOnInit(){

  }
@HostListener('keyup') onkeydown(){
  if(this.eR.nativeElement.value.length < 5){
    this.eR.nativeElement.style.backgroundColor = this.highlightColor;
  }
  else{
    this.eR.nativeElement.style.backgroundColor = "cyan";
  }
}
}