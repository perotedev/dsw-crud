import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastrarComponent } from "./cadastrar/cadastrar.component";
import { CursosFicComponent } from "./cursos-fic.component";
import { ListarComponent } from "./listar/listar.component";

const routes: Routes = [
    {
        path:'',
        component: CursosFicComponent,
        data: {
            title: 'CURSOS PAINEL'
        }
    },
    {
        path: 'listar-cursos',
        component: ListarComponent,
        data: {
            title: 'LISTAR PAINEL'
        }
    },
    {
        path: 'cadastrar-cursos',
        component: CadastrarComponent,
        data: {
            title: 'CADASTRAR PAINEL'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CursosFicRoutingModule { }