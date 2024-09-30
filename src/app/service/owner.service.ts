import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  http = inject(HttpClient);

  

  getOwners(){
    const url = `http://localhost:8080/Technikon/resources/owner/id/1`;
    return this.http.get(url);
  }

  getOwnerById(){
    const url = `http://localhost:8080/Technikon/resources/owner/id/1`;
    return this.http.get(url);
  }

  getOwnerByVat(){
    const url = `http://localhost:8080/Technikon/resources/owner/vat/12345`;
    return this.http.get(url);
  }

  getOwnerByEmail(){
    const url = `http://localhost:8080/Technikon/resources/owner/email/tade`;
    return this.http.get(url);
  }
}
