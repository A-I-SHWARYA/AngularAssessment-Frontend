export const environment = {
    production: false,
    baseApiUrl:'https://localhost:7184/'
//   apiUrls: {
//     /*getForms: "https://localhost:7235/api/Form",
//    getTablenames:"https://localhost:7235/api/Table/getAllTableNames",
//     addForm: "https://localhost:7235/api/Form",
//     deleteForm: "https://localhost:7235/api/Form/",
//     editForm: "https://localhost:7235/api/Form/",
//     getTable:'https://localhost:7235/api/Table/',
//     getForm:'https://localhost:7235/api/Form/'*/

//     searchColumns:"https://localhost:7184/api/Field/GetColumnsByWord",
//     AddFieldRecord:"https://localhost:7184/api/Field",
//     ViewFieldRecord:"https://localhost:7184/api/Field/ViewFieldRecord",
//     GetFieldsByDomainTableId:"https://localhost:7184/api/Field/ViewDomainTableRecord",
//     EditFieldRecord:"https://localhost:7184/api/Field/",
//     GetDomainTableNames:"https://localhost:7184/api/Field/GetDomainTableName",
//     GetFormNames:"https://localhost:7184/api/Field/GetFormName",
//     formNamesForView:"https://localhost:7184/api/Field/ViewFormsForView",
//     DomainNamesForView:"https://localhost:7184/api/Field/ViewDomainForView"

//   }
};

/*searchColumns(searchTerm: string): Observable<any> {
    return this.http.get<any>(`https://localhost:7184/api/Field/GetColumnsByWord?searchWord=${searchTerm}`);
  }


  AddFieldRecord (data:any):Observable<any>{   
    return this.http.post<any>('https://localhost:7184/api/Field',data)
  }

  
  ViewFieldRecord(id:any){
    return this.http.get<any>('https://localhost:7184/api/Field/ViewFieldRecord?id='+id);
  
  }
  GetFieldsByDomainTableId(id:any){
    //const idtobepassed ='7b8a3fe9-5950-419d-a3e1-c56000fac2fa'
    return this.http.get<any>('https://localhost:7184/api/Field/ViewDomainTableRecord?tableid='+id);
  }


  EditFieldRecord(data:any):Observable<any>{
   
      return this.http.put('https://localhost:7184/api/Field/' , data);
    }


    GetDomainTableNames():Observable<any>{
      return this.http.get<any>('https://localhost:7184/api/Field/GetDomainTableName');
    }
    

    GetFormNames():Observable<any>{
      return this.http.get<any>('https://localhost:7184/api/Field/GetFormName');
    }


    formNamesForView(id:any):Observable<any>{
      return this.http.get<any>('https://localhost:7184/api/Field/ViewFormsForView?formid='+id);
    }


    DomainNamesForView(id:any):Observable<any>{
      return this.http.get<any>('https://localhost:7184/api/Field/ViewDomainForView?domainid='+id);
    }*/
