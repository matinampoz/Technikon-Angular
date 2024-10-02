import { Component, inject , OnInit} from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { OwnerService } from '../service/owner.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { AddOwnerFormComponent } from '../add-owner-form/add-owner-form.component';

@Component({
  selector: 'app-owner',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, AddOwnerFormComponent],
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

  //   //getOwners
  //   this.service.getOwners().subscribe({
  //     next: responce => this.owner = responce,
  //     error: err => console.error(`Something is wrong ${err}`)
  //   });

  //   //getOwnerById
  //   this.service.getOwnerById().subscribe({
  //     next: responce => this.ownerById = responce,
  //     error: err => console.error(`Error fetching by Id ${err}`)
  //   });

  //    //getOwnerByVat
  //    this.service.getOwnerByVat().subscribe({
  //     next: response => this.ownerByVat = response,
  //     error: err => console.error(`Error fetching by VAT: ${err}`)
  //   });

  //   //getOwnerByEmail
  //   this.service.getOwnerByEmail().subscribe({
  //     next: response => this.ownerByEmail = response,
  //     error: err => console.error(`Error fetching by Email: ${err}`)
  //   });
  // }

  //   deleteOwner(ownerId: number) {
  //     this.service.deleteOwner(ownerId).subscribe({
  //       next: response => console.log('Owner deleted successfully', response),
  //       error: err => console.error(`Error deleting owner: ${err}`)
  //     });
  //   }
  

  }

}
