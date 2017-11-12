/**
 *1. ¿Qué necesitamos para hacer el routing?
 *2. ¿Qué archivos nuevos debemos crear?
 *3. ¿Qué paquetes necesitamos importar?
 *4. ¿De donde necesitamos importar dichos paquetes?
 *5. ¿En que otros archivos necesitamos hacer modificaciones?
 *  
 * 
 * 1. Un nuevo archivo llamado app.routes.ts
 * 2. Debemos crear una archivo que contendrá una constante que tiene un arreglos
 *    todas las rutas qeu crearemos.
 * 3. Lo paquetes que debemos importar son RouterModule, Routes y 
 *    cada compnente al que lo trataremos con una ruta.
 * 4. Los paquetes principales los encontraremos en @angular/router
 * 5. Necesitamos modificar y agregar [RouterLink] donde 
 *    queremos hacer un ancla hacia otras partes.
 *    Debemos agregar el <router-outlet></router-outlet> en 
 *    app.component.html ya que este permitira mostrar;
 *    Necesitamos también modificar el app.module.ts y agregar la constante 
 */

 import { RouterModule, Routes } from "@angular/router";
 import { AboutComponent }       from "./components/about/about.component";
 import { HomeComponent }        from "./components/home/home.component";
 import { ScientistsComponent }  from "./components/scientists/scientists.component";
 import { QuotesComponent }      from "./components/quotes/quotes.component";
 import { ScientistComponent }   from "./components/scientist/scientist.component";
 import { SearchComponent }      from "./components/search/search.component";

 const APP_ROUTES:Routes = [
     { path:'home',          component:HomeComponent },
     { path:'about',         component:AboutComponent },
     { path:'scientists',    component:ScientistsComponent },
     { path:'scientist/:id', component:ScientistComponent },
     { path:'quotes',        component:QuotesComponent },
     { path:'search/:text',  component:SearchComponent },
     { path:'**', pathMatch:'full', redirectTo:'home' }
    ];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);