import { Component, inject, OnInit } from '@angular/core';
import {  FormGroup, ReactiveFormsModule, FormBuilder, Validators} from '@angular/forms';
import { OwnerService } from '../service/owner.service';

@Component({
  selector: 'app-add-owner-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-owner-form.component.html',
  styleUrl: './add-owner-form.component.css'
})
export class AddOwnerFormComponent implements OnInit{

  service = inject(OwnerService);
  add!: FormGroup;
  fb = inject(FormBuilder);

  ngOnInit(): void {
    this.add = this.fb.group({
      vat:  ['', [Validators.required]],
      fName:  ['', [Validators.required]],
      lName:  ['', [Validators.required]],
      address:  ['', [Validators.required]],
      phone:  ['', [Validators.required]],
      email:  ['', [Validators.required]],
      password:  ['', [Validators.required]],
      type:  ['OWNER']

    })
  }

  

  addOwner() {
    if (this.add.valid) {
      const formData = this.add.getRawValue(); 
      this.service.addOwner(formData).subscribe({
        next: response => console.log('Owner added successfully', response),
        error: err => console.error(`something went wrong ${err}`)
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
