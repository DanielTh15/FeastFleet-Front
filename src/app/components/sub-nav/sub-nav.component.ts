import { Component } from '@angular/core';

@Component({
  selector: 'app-sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: ['./sub-nav.component.css']
})
export class SubNavComponent {
<<<<<<< HEAD
  currentIndex = 0;
  cardItems = [
    // ... tus datos
  ];

  showSlide(direction: number) {
    const totalItems = this.cardItems.length;
    this.currentIndex = (this.currentIndex + direction + totalItems) % totalItems;
  }
=======
>>>>>>> 4336b708d84b81430a5c224cbfb6a430860c3512

}
