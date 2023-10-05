import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { PagefieldService } from "../Service/pagefield.service";
import { Field } from "../Models/Field";
import { SharedService } from "../shared.service";
import { Observable } from 'rxjs';


@Component({
  selector: 'app-view-field',
  templateUrl: './view-field.component.html',
  styleUrls: ['./view-field.component.css']
})
export class ViewFieldComponent implements OnInit {
  newField : any=[{
      Id : null,
      FormId :null,
      columnId :null,
      DomainTableId :null,
      Default:null,
      Sequence :null, 
      label:'',
      Type:null,
      condition:null,
      QuoteReadOnly:null,
      QuoteRequired:null,
      QuoteDisplay:null ,
      formName:null,
      domainTableName :null,
  }];

  constructor(private sharedService: SharedService,private route: ActivatedRoute, private fieldService: PagefieldService) {

  }
    
  
  globalId:any
  columnname:any
  

  ngOnInit(): void {
    this.globalId = this.sharedService.getGlobalId();
    this.columnname= this.sharedService.getname();
    this.fetchdata();
    

    }
    

  fetchdata(){

    this.fieldService.viewFieldRecord(this.globalId).subscribe({
      next:(res)=>{
        this.newField=res;
       
        this.newField.forEach((field) => {

          if (field.formId !== null) {

            this.fieldService.getFormNameInView(field.formId).subscribe((result) => {
              field.formName = result[0].name; 
            },
            (error) => {
              console.error('Error fetching form name:', error);
           
            }
            );

          }

          if (field.domainTableId !== null){

            this.fieldService.getDomainNameInView(field.domainTableId ).subscribe((result) => {
              field.domainTableName = result[0].name; 
            },
            (error) => {
              console.error('Error fetching domain table name:', error);
              
            }
            );

          }

        })
        
      },
      error: (error) => {
        console.error('Error fetching field records:', error);
       
      }
    
    });
      
    }

  }

        

           

  

