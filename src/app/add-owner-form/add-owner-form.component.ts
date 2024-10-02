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
      this.service.addOwner(this.add.value)
    } else {
      console.log('Form is invalid');
    }
  }

  // showOwnerById() {
  //   this.service.getOwnerById().subscribe({
  //     next: response => {
  //       this.ownerById = response;
  //       console.log('owner found successfully', response);
  //     },
  //     error: err => console.error('error finding owner with ID', err)
  //   });
  // }

  
}