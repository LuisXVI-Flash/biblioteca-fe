import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";

const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'administration', loadChildren: () => import('./components/sidebar/sidebar.module').then(m => m.SidebarModule)}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}