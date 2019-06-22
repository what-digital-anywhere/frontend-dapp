import {Component, Input, OnInit} from '@angular/core';
import {Web3Service} from '../../../services/web3.service';
import {ToastController} from '@ionic/angular';

@Component({
    selector: 'app-current-trip',
    templateUrl: './current-trip.component.html',
    styleUrls: ['./current-trip.component.scss'],
})
export class CurrentTripComponent implements OnInit {
    @Input() tripData = {};
    @Output()

    constructor(private web3Service: Web3Service, private toastController: ToastController) {
    }

    ngOnInit() {
    }

    async presentToastWithOptions() {
        const toast = await this.toastController.create({
            message: 'Check out was successful',
            position: 'bottom',
            buttons: [
                // {
                //     side: 'start',
                //     icon: 'star',
                //     text: 'Favorite',
                //     handler: () => {
                //         console.log('Favorite clicked');
                //     }
                // },
                {
                    text: 'Done',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        toast.present();
    }


    public async checkOut() {
        this.presentToastWithOptions();
        const result = await this.web3Service.contract.methods.checkOut().send({
            from: this.web3Service.accountAddress,
            gas: 3000000
        });
        console.log(result);
        // TODO: toast a success message and trigger a re-fetch of the trips
    }

}
