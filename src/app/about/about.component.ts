import {Component} from '@angular/core';
import {AboutService} from './about.service'
import {Card} from './card'

@Component({
	selector: 'about',
	templateUrl: 'app/about/about.component.html',
	styleUrls: ['app/about/about.component.css']
})

export class AboutComponent{
	cards:Card[] = new Array<Card>();
 
   constructor(private _AboutService : AboutService)
    {
    	this._AboutService.getCards()
            .subscribe(
            (res) => {
                this.cards = (Object.keys(res).map((key) => {return res[key]}))[0];
            },
            (error) => console.log("error : " + error)
        );
    
    }
}