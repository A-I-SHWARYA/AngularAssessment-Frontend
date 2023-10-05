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
  apiUrl:string=environment.baseApiUrl;
  
  constructor(private http:HttpClient) { }
  
  getColumns(searchTerm: string) {
    return this.http.get<Aocolumn>(this.apiUrl+"api/Field/getColumns/"+searchTerm);
  }


  

  editFieldRecord(data:Field){
   
    return this.http.put(this.apiUrl+"api/Field/",data);
  }






  addFieldRecord (data:Field){   
    return this.http.post<Field>(this.apiUrl+"api/Field",data)
  }

  getDomainTableData(id:DomainTable){
    return this.http.get<DomainTable>(this.apiUrl+"api/Field/getDomain/"+id);
  }

  getTableName(){
    return this.http.get<Aotable>(this.apiUrl+"api/Field/getTable");
  }

  getFormName(){
    return this.http.get<Form>(this.apiUrl+"api/Field/GetForm");
  }









  viewFieldRecord(id:Aocolumn){
    return this.http.get<Field>(this.apiUrl+"api/Field/viewRecords/"+id);
  
  }
  
  getFormNameInView(id:Form){
    return this.http.get<Form>(this.apiUrl+"api/Field/getFormsView/"+id);
  }

  getDomainNameInView(id:DomainTable){
      return this.http.get<Aotable>(this.apiUrl+"api/Field/getDomainView/"+id);
    }
  }

