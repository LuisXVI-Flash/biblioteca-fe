import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DataTablesModule } from "angular-datatables/src/angular-datatables.module";
import { SidebarComponent } from "./sidebar.component";
import { UsersComponent } from './users/users.component';

const routes: Routes = [
    { path: '', component: SidebarComponent, 
      children : [
        { path: 'users', component: UsersComponent}
      ]
    }
]

@NgModule({
    declarations: [
        SidebarComponent,
        UsersComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        DataTablesModule
    ]
})
export class SidebarModule {}