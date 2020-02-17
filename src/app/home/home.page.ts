import { DataGetterService } from './../services/dataGetter/data-getter.service';
import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  config = {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 1.6
  }
  page = 0;
  totalPage = 0;
  dataset: any = []
  datasetHZ: any = [];
  constructor(public datagetter: DataGetterService, public loadingController: LoadingController) { }

  ionViewDidEnter() {
    this.getUser();
  }

  async getUser(event?) {
    const loading = await this.loadingController.create({
      message: 'Please wait While faching data..',
    });
    await loading.present()
    this.datagetter.getUser(this.page).subscribe((respons: any) => {
      loading.dismiss();
      this.totalPage = respons.total_pages;
      if (this.page === 0) {
        this.page++;
        this.datasetHZ = respons.data;
        this.getUser();
      } else {
        this.dataset = this.dataset.concat(respons.data);
      }
      if (event) {
        event.target.complete()
      }
    }, (error: any) => {
      loading.dismiss();
      alert('error in geting respons');
    });

  }
  loadInfiniteData(event) {
    this.page++;
    this.getUser(event);
    if (this.page === this.totalPage) {
      event.target.disabled = true
    }
  }

}
