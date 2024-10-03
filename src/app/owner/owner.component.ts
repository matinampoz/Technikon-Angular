import { Component, inject , OnInit} from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { OwnerService } from '../service/owner.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-owner',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, ReactiveFormsModule, CommonModule],
  templateUrl: './owner.component.html',
  styleUrl: './owner.component.css'
})
export class OwnerComponent implements OnInit {

  service = inject(OwnerService);

  owner: any;
  ownerById: any;
  ownerByVat: any;
  ownerByEmail: any;
  owners: any[] = [];
  

  ngOnInit():void {
    this.getOwnerById(1);
  }

  //   //getOwners
  //   this.service.getOwners().subscribe({
  //     next: responce => this.owner = responce,
  //     error: err => console.error(`Something is wrong ${err}`)
  //   });

  getOwnerById(ownerId: number): void {
    this.service.getOwnerById(ownerId).subscribe({
      next: response => this.ownerById = response,
      error: err => console.error(`Error fetching by Id ${err}`)
    });
  }

    deleteOwner(ownerId: number) {
      this.service.deleteOwner(ownerId).subscribe({
        next: response => {
          console.log('owner deleted successfully', response);
          this.owners = this.owners.filter(owner => owner.id !== ownerId);
        },
        error: err => console.error(`Error deleting owner: ${err}`)
      });
    }

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
  

  }

