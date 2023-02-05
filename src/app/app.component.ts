
import { Component } from '@angular/core';
import { NasaService } from './nasa.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'challengeNasaService';

    imgOfTheDay: any;

    constructor(private nasaService: NasaService) { this.image() }
    image() {
        this.nasaService.getImageOfTheDay().subscribe({
            next: (datasFromApi: any) => {
                this.imgOfTheDay = datasFromApi;
                console.log(datasFromApi);
            },
            error: (err: string) => console.error('Observer a reçu une erreur: ' + err),
            complete: () => console.log('Observer a reçu notification complete'),
        })
    }
}