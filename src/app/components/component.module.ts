import { ItemdetailsComponent } from './itemdetails/itemdetails.component';
import { HorizontalscrollComponent } from './horizontalscroll/horizontalscroll.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {NgModule} from '@angular/core' 
@NgModule({
    declarations:[ ItemdetailsComponent,HorizontalscrollComponent],
    exports:[ ItemdetailsComponent,HorizontalscrollComponent],
    imports:[
       IonicModule,
       CommonModule
    ]
})

export class Component {

}
