import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent {

@Input() img: string = '';
imgDefault: string = './assets/img/default.png';

@Output() loaded = new EventEmitter<string>();

imgError() {
  this.img = this.imgDefault;

}

imgLoaded() {
  this.loaded.emit(this.img);
}

}
