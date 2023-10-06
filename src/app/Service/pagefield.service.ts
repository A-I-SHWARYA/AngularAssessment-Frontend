import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';
import { Form } from '../Models/Form';
import { Aotable } from '../Models/Aotable';
import { Field } from '../Models/Field';
import { Aocolumn } from '../Models/Aocolum';
import { DomainTable } from '../Models/DomainTable';




@Injectable({
  providedIn: 'root'
})
export class PagefieldService {
  //apiUrl:string=environment.baseApiUrl;
  private apiUrl:any = environment.apiUrls
  
  constructor(private http:HttpClient) { }
  
  getColumns(searchTerm: string) {
    return this.http.get<Aocolumn>(this.apiUrl.getColumns+searchTerm);
  }


  

  editFieldRecord(data:Field){
   
    return this.http.put(this.apiUrl.editFieldRecord,data);
  }






  addFieldRecord (data:Field){   
    return this.http.post<Field>(this.apiUrl.addFieldRecord,data)
  }

  getDomainTableData(id:DomainTable){
    return this.http.get<DomainTable>(this.apiUrl.getDomainTableData+id);
  }

  getTableName(){
    return this.http.get<Aotable>(this.apiUrl.getTableName);
  }

  getFormName(){
    return this.http.get<Form>(this.apiUrl.getFormName);
  }









  viewFieldRecord(id:Aocolumn){
    return this.http.get<Field>(this.apiUrl.viewFieldRecord+id);
  
  }
  
  getFormNameInView(id:Form){
    return this.http.get<Form>(this.apiUrl.getFormNameInView+id);
  }

  getDomainNameInView(id:DomainTable){
      return this.http.get<Aotable>(this.apiUrl.getDomainNameInView+id);
    }
  }

