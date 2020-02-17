import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-horizontalscroll',
  templateUrl: './horizontalscroll.component.html',
  styleUrls: ['./horizontalscroll.component.scss'],
})
export class HorizontalscrollComponent implements OnInit {
 

  config = {
    spaceBetween: 0,
    centeredSlides: true,
    slidesPerView: 1
  }
  constructor() {
  
  }

  ngOnInit() {
    console.log('const  onInit')
  }

}
