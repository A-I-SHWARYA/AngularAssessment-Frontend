import { Component } from '@angular/core';
import { PagefieldService } from '../Service/pagefield.service';
import { ToastrService } from 'ngx-toastr';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-addfield',
  templateUrl: './addfield.component.html',
  styleUrls: ['./addfield.component.css']
})
export class AddfieldComponent {

  constructor(private sharedService: SharedService,private fieldService: PagefieldService) {}


  ngOnInit(): void {
    this.columnid = this.sharedService.getGlobalId();
    this.columnname= this.sharedService.getname();    
    this.fetchFormData();
    this.fetchTableData();    
  }

 

tabledata:any=[{ 
}];

tabledataid:any

domaindata:any=[{  
}];

Formrecords:any=[{
id:null
}];

selectedForm:any=[{
}];

selectedType: any='';

formData:any={  
  };

  columnname:any
  columnid:any

  

  onSubmit() {
    this.formData.ColumnId=this.columnid;      
    this.formData.FormId=this.selectedForm.id;   
    this.formData.type=this.selectedType
   

    this.formData.QuoteReadOnly = this.formData.QuoteReadOnly ? 1 : 0;
    this.formData.QuoteRequired = this.formData.QuoteRequired ? 1 : 0;
    this.formData.QuoteDisplay = this.formData.QuoteDisplay ? 1 : 0;
    

    if ( this.formData.Sequence === null ) {
      alert('Fill the required fields'); 
      return; // Exit the function without making the API call
    }
     if (!this.selectedType || this.selectedType.trim() === '') {
      
      alert('Fill the required fields'); 
       return;
    }

  this.fieldService.addFieldRecord(this.formData).subscribe({
      next:(response)=>{        
        alert("Field Added Successfully")        
      },
      
      error: (e) => {
        alert("Error in Adding New Form Page")      
    }
    })      
  }


            fetchTableData(){
              if (this.selectedType === 'Radio' || this.selectedType === 'Radio-Vertical' || this.selectedType === 'Select') {
              this.fieldService.getTableName().subscribe(
                (response:any) => {               
                  this.tabledata = response;                                 
                },
                (error: any) => {
                  console.error('An error occurred:', error);                  
                }
                                         
              )
              }
            }


            fetchFormData(){
              this.fieldService.getFormName().subscribe(
                (response:any) => {                 
                  this.Formrecords = response;                  
                },
                (error: any) => {
                  console.error('An error occurred:', error);                  
                }
              )

            }
            
            fetchDomaindata() {                             
              this.fieldService.getDomainTableData(this.tabledataid).subscribe(
                (result: any) => {
                  this.domaindata = result;                
                  this.formData.domainTableId = this.domaindata[0].id;               
                },
                (error: any) => {
                  console.error('An error occurred:', error);                  
                }
              );
              }
}

