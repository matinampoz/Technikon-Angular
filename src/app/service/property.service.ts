import { inject, Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  http = inject(HttpClient);

  getProperties(){
    const url = 'http://localhost:8080/Technikon/resources/property/properties';
    return this.http.get(url);
  }
}
