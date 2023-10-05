import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewFieldComponent } from './view-field/view-field.component';
import { SearchfieldComponent } from './searchfield/searchfield.component';
import { EditfieldComponent } from './editfield/editfield.component';
import { AddfieldComponent } from './addfield/addfield.component';

const routes: Routes = [
  
  { path: '', component: SearchfieldComponent },
  { path: 'addfields', component: AddfieldComponent },
   { path: 'viewfields', component: ViewFieldComponent },
{ path: 'editfields', component: EditfieldComponent },
  
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
