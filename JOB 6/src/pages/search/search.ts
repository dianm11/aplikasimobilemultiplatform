import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';
import { AlertProvider } from '../../providers/alert/alert';
import { DetailproductPage } from '../detailproduct/detailproduct';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  products=[];

  constructor(public navCtrl: NavController, private productProvider: ProductProvider, private alertProvider: AlertProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  search(event) {
    this.products = [];
    let searchQuery = event.target.value;

    if (searchQuery == "") {
      this.products = [];
    }
    else if (searchQuery.length >= 3) {
      this.productProvider.searchProduct(searchQuery).subscribe(
        (result: any[]) => {
          this.products = result;
        },
        error => {
          console.log("errornya: " + error);
        }
      )
    }
  }

  openDetail(id) {
    this.navCtrl.push(DetailproductPage, {id:id});
  }
}
