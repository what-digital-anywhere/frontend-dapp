import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {
    balance: any;
  walletAddress: any = 'dsadasdasda';

  constructor() { }

  ngOnInit() {
  }

}
