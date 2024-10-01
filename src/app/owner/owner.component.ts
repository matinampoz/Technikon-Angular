import { Component, inject , OnInit} from '@angular/core';
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

  //tha allaksei se forma
  submitData() {
    const data = {
      "vatNumber": "1986445697",
      "name": "John2",
      "surname": "Doe",
      "address": "123 Main St, Anytown, USA",
      "phoneNumber": 1234567890,
      "email": "john.doe2@example.com",
      "password": "securepassword",
      "userType": "OWNER"
  }

  this.service.addOwner(data).subscribe({
    next: response => this.answer = response,
    error: err => console.error(`Something is wrong... ${err}`),
  });
  }
}
