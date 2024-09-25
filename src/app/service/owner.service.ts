import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  http = inject(HttpClient);

  url = 'http://localhost:8080/Technikon/resources/owner/id/1';

  getOwners(){
    
    return this.http.get(this.url);
  }
}
