import { Component, inject } from '@angular/core';
import { OwnerService } from '../service/owner.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-owner',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './owner.component.html',
  styleUrl: './owner.component.css'
})
export class OwnerComponent {
  service = inject(OwnerService);

  owner: any;
  ownerById: any;
  ownerByVat: any;
  ownerByEmail: any;

  ngOnInit():void {

    //getOwners
    this.service.getOwners().subscribe({
      next: responce => this.owner = responce,
      error: err => console.error('something is wrong ${err}')
    });

    //getOwnerById
    this.service.getOwnerById().subscribe({
      next: responce => this.ownerById = responce,
      error: err => console.error('Error fetching by Id ${err}')
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

}
