import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  config={
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 1.6
  }
  dataset:any= [
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
    }
  ]

  constructor() { }

}
