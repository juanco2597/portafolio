import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'proyectos',
    loadChildren: () => import ("./proyectos/proyectos.module").then(m => m.ProyectosModule)
  },
  {
    path:'contacto',
    loadChildren: () => import("./contacto/contacto.module").then(m => m.ContactoModule)
  },
  {
    path: 'about',
    loadChildren: () => import("./about/about.module").then(m => m.AboutModule)
  },
  //Esta ultima ruta es para redireccionar a una pagina de error a index
  {
    path:'**',
    redirectTo: 'proyectos'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
