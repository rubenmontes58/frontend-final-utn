import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Figuritas } from '../model/Figuritas';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url : string = 'https://backend-final-utn-production.up.railway.app/figuritas';




  constructor(private http : HttpClient) { }

  // get all figus
  
  getAllFiguritas() : Observable<Figuritas[]> {
    return this.http.get<Figuritas[]>(this.url);
  }



  // get figus of id
  getFigusById(id : string) : Observable<Figuritas> {
    return this.http.get<Figuritas>(this.url+'/'+id);
  }


  // delete figus of id
  deleteFiguritaById(id : string) : Observable<Figuritas> {
    return this.http.delete<Figuritas>(this.url+'/'+id);
  }


  // update figurita
  updateFiguritas(id : string, figurita : Figuritas) : Observable<Figuritas> {
    return this.http.put<Figuritas>(this.url+'/'+id, figurita);
  }

  // create figurita
  createFiguritas(figu : Figuritas) : Observable<Figuritas> {
    return this.http.post<Figuritas>(this.url, figu);


  }
  //edit figurita
  editFiguritas(id : string, figu : Figuritas) : Observable<Figuritas> {
    return this.http.put<Figuritas>(this.url+'/'+id, figu);
  }
  

}




