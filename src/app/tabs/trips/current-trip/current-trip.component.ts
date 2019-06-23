import {TripService} from 'app/services/trip-verification/trip-verification.service';
import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {Web3Service} from 'app/services/web3/web3.service';
import {ToastController} from '@ionic/angular';
import Web3 from 'web3';
import {JourneyService} from '../../../services/journey/journey.service';


@Component({
    selector: 'app-current-trip',
    templateUrl: './current-trip.component.html',
    styleUrls: ['./current-trip.component.scss'],
})
export class CurrentTripComponent implements OnChanges {
    @Input() tripData: any = {};
    @Output() updateCheckOutStatus = new EventEmitter();

    private web3: Web3;

    constructor(
        private web3Service: Web3Service,
        private journeyService: JourneyService,
        private toastController: ToastController,
        private tripService: TripService,
    ) {
        this.web3 = web3Service.web3 as Web3;
    }

    ngOnChanges(changes): void {
        console.log(changes);
    }

    async presentToastWithOptions() {
        const toast = await this.toastController.create({
            message: 'Check out was successful',
            position: 'bottom',
            duration: 1000,
        });
        toast.present();
    }

    public generateTicketString(): string {
        const privateKey = localStorage.getItem('PRIVATE_KEY');
        const signatureObj = this.web3.eth.accounts.sign(
            new Date(this.tripService.getTrip().start).getTime().toString(),
            privateKey
        );
        return `${signatureObj.signature},${signatureObj.message}`;
    }

    public async checkOut() {
        this.journeyService.isJourneyStarted.next(false);
        this.presentToastWithOptions();
        const result = await this.web3Service.contract.methods.checkOut(false).send({
            from: this.web3Service.accountAddress,
            gas: 3000000
        }, () => this.updateCheckOutStatus.emit(true));
        console.log(result);
        // TODO: toast a success message and trigger a re-fetch of the trips
    }

    public async endJourney() {
        this.journeyService.isJourneyStarted.next(true);
        const result = await this.web3Service.contract.methods.checkOut(true).send({
            from: this.web3Service.accountAddress,
            gas: 3000000
        }, () => {
            this.journeyService.isJourneyStarted.next(false);
            this.updateCheckOutStatus.emit(true);
        });
        console.log(result);
        // TODO: toast a success message and trigger a re-fetch of the trips
    }
}
