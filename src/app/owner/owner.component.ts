import { Component, inject , OnInit} from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { OwnerService } from '../service/owner.service';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-owner',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './owner.component.html',
  styleUrl: './owner.component.css'
})
export class OwnerComponent implements OnInit {

  service = inject(OwnerService);

  owner: any;
  ownerById: any;
  ownerByVat: any;
  ownerByEmail: any;

  ngOnInit():void {

    //getOwners
    this.service.getOwners().subscribe({
      next: responce => this.owner = responce,
      error: err => console.error(`Something is wrong ${err}`)
    });

    //getOwnerById
    this.service.getOwnerById().subscribe({
      next: responce => this.ownerById = responce,
      error: err => console.error(`Error fetching by Id ${err}`)
    });

     //getOwnerByVat
     this.service.getOwnerByVat().subscribe({
      next: response => this.ownerByVat = response,
      error: err => console.error(`Error fetching by VAT: ${err}`)
    });

    //getOwnerByEmail
    this.service.getOwnerByEmail().subscribe({
      next: response => this.ownerByEmail = response,
      error: err => console.error(`Error fetching by Email: ${err}`)
    });
  }



  answer: any;
  add!: FormGroup;

 
  submitData() {
    if (this.add.valid) {
      const data = this.add.getRawValue(); 
      this.service.addOwner(data).subscribe({
        next: response => console.log('onwr added successfully', response),
        error: err => console.error(`something is wrong${err}`),
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
