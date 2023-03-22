import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PersonService } from '../services/personne.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor(public personService: PersonService){ }

  ngOnInit(): void{

  }

  onSubmit(form: NgForm){ // Modifié 'ngSubmit' en 'onSubmit'
    this.personService.addPersonne(form.value);
  }
  
}
