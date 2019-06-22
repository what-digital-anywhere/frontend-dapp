import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Web3Service} from 'app/services/web3/web3.service';
import {ToastController} from '@ionic/angular';
import Web3 from 'web3'
import {TripService} from 'app/services/trip-verification/trip-verification.service'

@Component({
    selector: 'app-current-trip',
    templateUrl: './current-trip.component.html',
    styleUrls: ['./current-trip.component.scss'],
})
export class CurrentTripComponent {
    @Input() tripData: any = {};
    @Output() updateCheckOutStatus = new EventEmitter();

    private web3: Web3;

    constructor(
        private web3Service: Web3Service,
        private toastController: ToastController,
        private tripService: TripService,
    ) {
        this.web3 = web3Service.web3 as Web3;
    }

    async presentToastWithOptions() {
        const toast = await this.toastController.create({
            message: 'Check out was successful',
            position: 'bottom',
            buttons: [
                {
                    text: 'Done',
                    role: 'cancel',
                    handler: () => {
                    }
                }
            ]
        });
        toast.present();
    }

    public generateTicketString(): string {
        const privateKey = localStorage.getItem('PRIVATE_KEY')
        const signatureObj = this.web3.eth.accounts.sign(
            this.tripService.currentTrip.start.toString(),
            privateKey
        );
        return JSON.stringify(signatureObj)
    }

    public async checkOut() {
        this.presentToastWithOptions();
        const result = await this.web3Service.contract.methods.checkOut().send({
            from: this.web3Service.accountAddress,
            gas: 3000000
        }, () => this.updateCheckOutStatus.emit(true));
        console.log(result);
        // TODO: toast a success message and trigger a re-fetch of the trips
    }

}
