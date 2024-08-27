import { Component, Input } from "@angular/core";
import { TimeFormatPipe } from "src/app/commons/pipes/time.pipe";
import { IonButton, IonItem, IonInput, IonLabel } from "@ionic/angular/standalone";
import { CommonModule } from "@angular/common";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
    selector: 'app-booking',
    templateUrl: './booking.component.html',
    styleUrls: ['./booking.component.scss'],
    standalone: true,
    imports: [TimeFormatPipe, IonButton, CommonModule, IonItem, IonInput, IonLabel, ReactiveFormsModule],
    
})
export class BookingComponent {
    @Input() trip: any;
    people: number = 1;
    isSecondFormActived: boolean = false;
    totalPrice: number = 0;

    form = new FormGroup({
        name0: new FormControl(''),
        lastName0: new FormControl(''),
        email0: new FormControl(''),
    });

    constructor(){}

    incrementPeople() {
        this.people = this.people + 1;
    }

    decrementPeople() {
       if(this.people > 1) {
           this.people = this.people - 1;
       }
    }

    continueToSecondForm(){
        this.totalPrice = this.people * this.trip.price;
        console.log(this.totalPrice);
        this.isSecondFormActived = true;
    }

    
    onSubmit(){
        console.log('Formulario Enviado');
        console.log(`Total a pagar: ${this.totalPrice}`);
    }
}