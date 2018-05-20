import {Component} from '@angular/core'; 

@Component({
	selector: 'navbars',
	templateUrl: 'app/nav/nav.component.html',
	styleUrls: ['app/nav/nav.component.css']
})

export class NavComponent{
	toggleMenu = false;

	onToggleMenu() {
		this.toggleMenu = !this.toggleMenu;
		console.log(this.toggleMenu);
	}
}


