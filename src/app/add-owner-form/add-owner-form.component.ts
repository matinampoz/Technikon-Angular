import { Component, inject, OnInit } from '@angular/core';
import {  FormGroup, ReactiveFormsModule, FormBuilder, Validators} from '@angular/forms';
import { OwnerService } from '../service/owner.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-owner-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-owner-form.component.html',
  styleUrl: './add-owner-form.component.css'
})
export class AddOwnerFormComponent implements OnInit{

  service = inject(OwnerService);
  add!: FormGroup;
  fb = inject(FormBuilder);
  ownerById: any;
  successMessage: string | null = null;
  errorMessage: string | null = null;
  

  ngOnInit(): void {
    this.add = this.fb.group({
      vatNumber:  ['', [Validators.required]],
      name:  ['', [Validators.required]],
      surname:  ['', [Validators.required]],
      address:  ['', [Validators.required]],
      phoneNumber:  ['', [Validators.required]],
      email:  ['', [Validators.required]],
      password:  ['', [Validators.required]]

    })
  }

  

  addOwner() {
    if (this.add.valid) {
      console.log(this.add.value);
      this.service.addOwner(this.add.value).subscribe({
        next: (response) => {
          console.log('Owner added successfully:', response);
          this.successMessage = 'Owner added successfully';
        },
        error: (error) => {
          console.error('Error adding owner:', error);
          this.errorMessage = 'Error adding owner.';
        }
      });
    } else {
      console.log('Form is invalid');
      this.errorMessage = 'Form is invalid.';
    }
  }
  
}