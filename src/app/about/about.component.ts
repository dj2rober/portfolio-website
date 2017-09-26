import {Component} from '@angular/core';
import {AboutService} from './about.service'

@Component({
	selector: 'about',
	templateUrl: 'app/about/about.component.html',
	styleUrls: ['app/about/about.component.css']
})

export class AboutComponent{
	cards: Object[];
 
   constructor(private _AboutService : AboutService)
    {
    	this._AboutService.getCards()
            .subscribe(
            (res) => {
                this.cards = res.cards;
            },
            (error) => console.log("error : " + error)
        );
    
    }
}