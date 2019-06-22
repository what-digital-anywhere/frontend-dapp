import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Web3Service} from '../../../services/web3.service';
import {ToastController} from '@ionic/angular';
import Web3 from 'web3'

@Component({
    selector: 'app-current-trip',
    templateUrl: './current-trip.component.html',
    styleUrls: ['./current-trip.component.scss'],
})
export class CurrentTripComponent implements OnInit {
    @Input() tripData = {};
    @Output() updateCheckOutStatus = new EventEmitter();
    
    private web3: Web3

    constructor(private web3Service: Web3Service, private toastController: ToastController) {
        this.web3 = web3Service.web3 as Web3
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
                    }
                }
            ]
        });
        toast.present();
    }
    
    public generateTicketString(): string {
        let web3: Web3 = this.web3Service.web3 as Web3
        const privateKey = localStorage.getItem('PRIVATE_KEY');
        let txHash = `tx hash 0x5077cb8488a849bc87a5996e730a07d3ddda29949ad6d7a5461ae0e6659876a5`
        let sig_obj = web3.eth.accounts.sign(txHash, privateKey)
        return JSON.stringify(sig_obj)
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
