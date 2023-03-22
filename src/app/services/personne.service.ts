export class PersonService {
    person = [
        {id: 1, nom: "Robel", prenom:"Manoa", sexe: "Homme", color:"Bleu"}
      ];

    test:any;
    
    tab = {
        nom:"",
        prenom:"",
        sexe:"Homme",
        color:"Bleu"
    }

    addPersonne(parms: any){
        this.person.push({id:this.person.length+1, nom:parms.nom, prenom:parms.prenom, sexe:parms.sexe, color:parms.color})
    }

    clear(){
        this.person = [];
    }

    removePerson(index:number){
        this.test = this.person.map(function(e){
            return e.id
        }).indexOf(index);
        this.person.splice(this.test, 1);
    }

    findPerson(index:number){
        this.person.forEach(element=>{
            if (element.id == index) {
                this.test = element;
            }
            return this.test;
        })
    }
}