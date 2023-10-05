import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Aocolumn } from '../Models/Aocolum';
import { PagefieldService } from '../Service/pagefield.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { PaginationInstance } from 'ngx-pagination';
import { SharedService } from '../shared.service';
import { ActivatedRoute } from '@angular/router';


    

@Component({
  selector: 'app-searchfield',
  templateUrl: './searchfield.component.html',
  styleUrls: ['./searchfield.component.css']
})
export class SearchfieldComponent  {

 

  colname:any='';
  col: any ;
  page:number=1;
  pageSize: number = 10;
  slNumberStart: number = 1;

  
  constructor(private sharedService: SharedService,private pagefieldService: PagefieldService,private route: ActivatedRoute,) {
    
  }

  ngOnInit(){
    this.reactiveform= new FormGroup({
      searchvalue:new FormControl(null)
    })
   
  }

    handlePageChange(newPage: number): void {
    this.slNumberStart = (newPage - 1) * this.pageSize + 1;
    this.page = newPage;
  }

  navigateToView(id: string,name:string): void {
    this.sharedService.setGlobalId(id);
    this.sharedService.setname(name);
  }

  navigateToEdit(id: string,name:string): void {
    this.sharedService.setGlobalId(id);
    this.sharedService.setname(name);
  }

  navigateToAdd(id: string,name:string): void {
    this.sharedService.setGlobalId(id);
    this.sharedService.setname(name);
  }



  reactiveform:FormGroup;

  search(event:any){
    this.reactiveform.get("searchvalue").valueChanges.subscribe(value=>{
      
      this.pagefieldService.getColumns(value).subscribe((res: any) => {
        this.col = res;
      },
      (error: any) => {
        console.error('An error occurred:', error);                  
      }
      );      
    })}

  

  searchColumns() {    
      this.pagefieldService.getColumns(this.colname).subscribe((res: any) => {
        this.col = res;
      },
      (error: any) => {
        console.error('An error occurred:', error);                  
      });    
}
}

  


