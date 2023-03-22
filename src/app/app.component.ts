import { Component, OnInit } from '@angular/core';
import { PersonService } from './services/personne.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'monProjet';
  personnes:any;

  constructor(public personService: PersonService){}

  ngOnInit(): void {
    this.personnes = this.personService.person;
  }
}
