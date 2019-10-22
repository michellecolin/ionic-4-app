import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  placeBooking() {
    // this.router.navigateByUrl('/places');
    // this.navCtrl.pop();
    // this.navCtrl.navigateBack('/places');
    this.modalCtrl.create({component: CreateBookingComponent})
    .then(modalEl => {
      modalEl.present();
    });
  }

}
