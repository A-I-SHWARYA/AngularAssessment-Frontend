import { Component } from '@angular/core';
import { PagefieldService } from '../Service/pagefield.service';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';
import { Field } from '../Models/Field';

@Component({
  selector: 'app-editfield',
  templateUrl: './editfield.component.html',
  styleUrls: ['./editfield.component.css']
})
export class EditfieldComponent {
  
selectedType:any
  
data:any=[{}]
update :any={
  
};
domaindata:any=[{}]
selectedForm:any={}

Formrecords:any=[{}]

showAdditionalContent:any
tabledataid:any

domaintablename:any
tabledata:any=[{}]



constructor(private sharedService: SharedService,private route: ActivatedRoute, private fieldService: PagefieldService) {

}
  

globalId:any
columnname:any

  


ngOnInit(): void {
  this.globalId = this.sharedService.getGlobalId();
  this.columnname= this.sharedService.getname();
  this.fetchdata();
  this.fetchFormData();
    }
  



fetchdata(){

  this.fieldService.viewFieldRecord(this.globalId).subscribe({
    next:(res)=>{
      this.data=res;
     
      this.data.forEach((field) => {

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




  fetchTableData(selectedType){
    if (selectedType === 'Radio' || selectedType === 'Radio-Vertical' || selectedType === 'Select') {
    this.fieldService.getTableName().subscribe(
      (response:any) => {               
        this.tabledata = response;         
        this.domaintablename=this.tabledata.name                          
      },
      (error: any) => {
        console.error('An error occurred:', error);                  
      }                             
    )
    }
  }


  fetchDomaindata() {    
              
    this.fieldService.getDomainTableData(this.tabledataid).subscribe(
      (result: any) => {
        this.domaindata = result;                
        this.update.domainTableId = this.domaindata[0].id;                        
      },
      (error: any) => {
        console.error('An error occurred:', error);                  
      }
    );
    }



updateField(data:any){
  
  
  data.quoteReadOnly = data.quoteReadOnly ? 1 : 0; 
  data.quoteRequired = data.quoteRequired ? 1 : 0;
  data.quoteDisplay = data.quoteDisplay ? 1 : 0;
  

  if (this.selectedForm && this.selectedForm.id !== undefined) {
    data.formId=this.selectedForm.id     
  }
  if (this.update.domainTableId !== undefined) {
    data.domainTableId=this.update.domainTableId    
  }


  


  if ( data.sequence === null ) {
    alert('Fill the required fields'); 
    return; 
  }
  if (data.type === null){
    alert('Fill the required fields'); 
    return; 
  }
  
  


  this.fieldService.editFieldRecord(data).subscribe({
    next:(res)=>{    
      alert("Field Updated Successfully")
    },
    error: (e) => {
      alert("Updation Unsuccessful")
    
  }
  })
  
};



}
