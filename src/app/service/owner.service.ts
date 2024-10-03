import { HttpClient , HttpHeaders} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, retry, Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  http = inject(HttpClient);

  

  getOwners(){
    const url = 'http://localhost:8080/Technikon/resources/owner/owners';
    return this.http.get(url);
  }

  getOwnerById(ownerId: number){
    const url = 'http://localhost:8080/Technikon/resources/owner/id/1';
    return this.http.get(url);
  }

  getOwnerByVat(){
    const url = 'http://localhost:8080/Technikon/resources/owner/vat/1986445697';
    return this.http.get(url);
  }

  getOwnerByEmail(){
    const url = 'http://localhost:8080/Technikon/resources/owner/email/john.doe2example.com';
    return this.http.get(url);
  }

  addOwner(data: any) {

    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json');

    const url = 'http://localhost:8080/Technikon/resources/owner/add';
    console.log(`Sending POST request to: ${url}`);
    console.log(data);
    return this.http.post(url, JSON.stringify(data), { headers })
    .pipe(
      
      catchError(error => throwError(() => 'something went wrong'))
    );
  }


  deleteOwner(ownerId: number) {
    const url = `http://localhost:8080/Technikon/resources/owner/delete/${ownerId}`;
    return this.http.delete(url)
      .pipe(
        retry(1),
        catchError(error => throwError(() => 'Error deleting owner: ${error}'))
      );
  }


  updateOwner(ownerId: number, data: any) {
    const url = `http://localhost:8080/Technikon/resources/owner/edit/${ownerId}`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    console.log(`Sending PUT request to: ${url}`);
    console.log(data);
    return this.http.put(url, JSON.stringify(data), { headers }).pipe(
      catchError(error => throwError(() => 'Error updating owner: ' + error))
    );
  }
  
}