import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-private-key-input',
    templateUrl: './private-key-input.page.html',
    styleUrls: ['./private-key-input.page.scss'],
})
export class PrivateKeyInputPage implements OnInit {
    public privateKey = '';

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    updateKey(ev: any) {
        this.privateKey = ev.detail.value;
    }

    submit() {
        localStorage.setItem('PRIVATE_KEY', this.privateKey);
        this.router.navigate(['/tabs/trips']);
    }
}
