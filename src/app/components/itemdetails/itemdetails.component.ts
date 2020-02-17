import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-itemdetails',
  templateUrl: './itemdetails.component.html',
  styleUrls: ['./itemdetails.component.scss'],
})
export class ItemdetailsComponent implements OnInit {
  @Input() email:any;
  @Input() name:any;
  @Input() prifileImage:any;

  constructor() { 
   
    
  }

  ngOnInit() {

  }

}
