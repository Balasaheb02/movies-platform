import { Component } from '@angular/core';
import link from '../app/home/modal/link.json'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  links:{link:string, label:string}[] = link;
}
