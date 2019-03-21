import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './component/parent/parent.component';
import { Parent1Component } from './component/parent1/parent1.component';

const routes: Routes = [
  { path: "", component: ParentComponent },
  
  { path: "task1", component: ParentComponent },
  { path: "task2", component: Parent1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
