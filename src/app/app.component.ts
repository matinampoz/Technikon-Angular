import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OwnerComponent } from './owner/owner.component';
import { AddOwnerFormComponent } from './add-owner-form/add-owner-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OwnerComponent, AddOwnerFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'technikon-angular';
}
