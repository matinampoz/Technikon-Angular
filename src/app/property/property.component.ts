import { Component, OnInit, inject } from '@angular/core';
import { PropertyService } from '../service/property.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-property',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './property.component.html',
  styleUrl: './property.component.css'
})
export class PropertyComponent implements OnInit{

  service = inject(PropertyService);
  properties: any[] = [];

  ngOnInit(): void {
    this.getProperties();
  }

  getProperties(): void {
    this.service.getProperties().subscribe({
      next: response => {
        this.properties = Array.isArray(response) ? response : [];
        console.log('Properties loaded:', this.properties);
      },
      error: err => console.error(`Error fetching properties: ${err}`)
    });
  }
}
