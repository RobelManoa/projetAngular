import { Component, Input, OnInit } from '@angular/core';
import { PersonService } from '../services/personne.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() personnes!: any[];

  constructor(private personService: PersonService){}

  ngOnInit(): void {}

  getcolor(couleur: string){
    switch (couleur) {
      case "Bleu":
        return "#0000ff";
    
      case "violet":
        return "#6f42c1";

      case "rose":
        return "#d63384";
    
      default:
        return "#198754";
    }
  }

  showAll(){
    this.personnes = this.personService.person;
  }

  clearAll(){
    this.personnes.length = 0;
    this.showAll();
  }

  delete(index:number){
    this.personService.removePerson(index);
  }

  modification(index: number) {
    const person = this.personService.findPerson(index);
    if (person !== undefined) {
      this.personService.tab = person;
    }
  }
   
  
}
