import { Route } from "@angular/router";
import { LayoutComponent } from "./components/layout/layout.component";
import { HomeComponent } from "./pages/home/home.component";
import { ProjectComponent } from "./pages/project/project.component";

export default [
    {
        path:'',
        component:LayoutComponent,
        children:[
            {path:'home', component:HomeComponent},
            {path:'project/:id', component:ProjectComponent},            
            {path:'', redirectTo:'/home', pathMatch:'full'},
            
        ]
    }
] as Route[];