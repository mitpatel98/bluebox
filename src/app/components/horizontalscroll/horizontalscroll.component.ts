import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-horizontalscroll',
  templateUrl: './horizontalscroll.component.html',
  styleUrls: ['./horizontalscroll.component.scss'],
})
export class HorizontalscrollComponent implements OnInit {
  dataset: any = [
    {
      "name": "ABCD pate",
      "age": "24",
      "profileImage": "https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png",
      "department": "IT",
      "email": "test78@gmail.com",
      "Emp_id": "23490"
    },
    {
      "name": "ABCD pate",
      "age": "24",
      "profileImage": "https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png",
      "department": "IT",
      "email": "test78@gmail.com",
      "Emp_id": "23490"
    },
    {
      "name": "ABCD pate",
      "age": "24",
      "profileImage": "https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png",
      "department": "IT",
      "email": "test78@gmail.com",
      "Emp_id": "23490"
    },
    {
      "name": "ABCD pate",
      "age": "24",
      "profileImage": "https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png",
      "department": "IT",
      "email": "test78@gmail.com",
      "Emp_id": "23490"
    },
   
  ]

  config = {
    spaceBetween: 0,
    centeredSlides: true,
    slidesPerView: 1
  }
  constructor() {
    console.log('const  component')
  }

  ngOnInit() {
    console.log('const  onInit')
  }

}
