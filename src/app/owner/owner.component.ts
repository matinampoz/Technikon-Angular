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

  owner:any;

  ngOnInit():void {
    this.service.getOwners().subscribe({
      next: responce => this.owner = responce,
      error: err => console.error('something is wrong ${err}')
    });
  }

}
