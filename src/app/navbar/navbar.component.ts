import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
 
  
  constructor(/*private http:HttpClient,*/ private myRouter:Router) { }

  /*logout=()=>{
    
    this.myRouter.navigate(["/"])


  }*/

  ngOnInit(): void {
  }

}
