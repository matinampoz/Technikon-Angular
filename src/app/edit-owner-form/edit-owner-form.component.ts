import { Component, inject } from '@angular/core';
import { OwnerService } from '../service/owner.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-owner-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit-owner-form.component.html',
  styleUrl: './edit-owner-form.component.css'
})
export class EditOwnerFormComponent {
  service = inject(OwnerService);
  edit!: FormGroup;
  fb = inject(FormBuilder);
  ownerById: any;
  ownerId: number = 1;


  ngOnInit(): void {

    console.log('Owner ID is fixed to:', this.ownerId);  
    this.getOwnerById(this.ownerId); 


    this.edit = this.fb.group({
      vatNumber:  ['', [Validators.required]],
      name:  ['', [Validators.required]],
      surname:  ['', [Validators.required]],
      address:  ['', [Validators.required]],
      phoneNumber:  ['', [Validators.required]],
      email:  ['', [Validators.required]]

    })
  }

  getOwnerById(ownerId: number){

  this.service.getOwnerById(this.ownerId).subscribe({
    next: (owner) => {
      this.edit.patchValue(owner);
    },
    error: (error) => {
      console.error('Error fetching owner data:', error);
    }
  });
}

editOwner() {
  if (this.edit.valid) {
    console.log(this.ownerId);
    console.log('Updating owner with ID:', this.ownerId);
    this.service.updateOwner(this.ownerId, this.edit.value).subscribe({
      next: (response) => {
        console.log('Owner updated successfully:', response);
      },
      error: (error) => {
        console.error('Error updating owner:', error);
      }
    });
  } else {
    console.log('Form is invalid');
  }
}

}
