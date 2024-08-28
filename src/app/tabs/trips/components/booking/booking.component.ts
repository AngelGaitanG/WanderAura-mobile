import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { TimeFormatPipe } from "src/app/commons/pipes/time.pipe";
import { IonButton, IonItem, IonInput, IonLabel, IonRadioGroup, IonRadio } from "@ionic/angular/standalone";
import { CommonModule } from "@angular/common";
import { FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
    selector: 'app-booking',
    templateUrl: './booking.component.html',
    styleUrls: ['./booking.component.scss'],
    standalone: true,
    imports: [TimeFormatPipe, IonButton, CommonModule, IonItem, IonInput, IonLabel, ReactiveFormsModule, IonRadioGroup, IonRadio, FormsModule],
    
})
export class BookingComponent {
    @Input() trip: any;
    people: number = 1;
    isSecondFormActived: boolean = false;
    isThirdFormActived: boolean = false;
    totalPrice: number = 0;
    travelers: any[] = [];
    actualTraveler: number = 1;
    bodyPaymentRequest: any;

    paymentForm = new FormGroup({
        paymentMethod: new FormControl('', [Validators.required]),
      });      

    travelersForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        lastname: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        birthdate: new FormControl('', [Validators.required]),
        passportNumber: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{6}$/)]),
        passportExpiration: new FormControl('', [Validators.required]),
    });

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

    submitTravelersForm() {
        if(this.travelersForm.valid) {
        this.travelers.push(this.travelersForm.value);
        this.travelersForm.reset();
        if(this.actualTraveler <= this.people) {
            this.actualTraveler++;
        }
       
    }   
    }

    submitToThirdForm(){
        this.isThirdFormActived = true;
        this.isSecondFormActived = false;
    }
    

    submitPayment(){
        this.bodyPaymentRequest = {
            tripId: this.trip.id,
            travelers: this.travelers,
            totalPrice: this.totalPrice,
            currency: "USD",
        }

        console.log(this.bodyPaymentRequest);
    }
}