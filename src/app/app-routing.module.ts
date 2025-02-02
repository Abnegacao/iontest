import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';

const routes: Routes = [

  // Rota padrão. Deve ser sempre a primeira rota desta lista.
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  // Rota modelo do Ionic. Pode ser apagada posteriormente.
  {
    path: 'folder/:id',
    title: environment.appName + ' - Página de Teste',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'home',
    title: environment.appName + ' - ' + environment.appSlogan,
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'contacts',
    title: environment.appName + ' - Faça Contato',
    loadChildren: () => import('./pages/contacts/contacts.module').then(m => m.ContactsPageModule)
  },
  {
    path: 'about',
    title: environment.appName + ' - Sobre',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutPageModule)
  },
  {
    path: 'policies',
    title: environment.appName + ' - Políticas de Privacidade',
    loadChildren: () => import('./pages/policies/policies.module').then(m => m.PoliciesPageModule)
  },
  {
    path: 'e404',
    title: environment.appName + ' - Erro 404',
    loadChildren: () => import('./pages/e404/e404.module').then(m => m.E404PageModule)
  },
  {
    path: 'author',
    title: environment.appName + ' - Sobre os Autores',
    loadChildren: () => import('./pages/author/author.module').then(m => m.AuthorPageModule)
  },
  {
    path: 'login',
    title: environment.appName + ' - Login / Entrar',
    loadChildren: () => import('./user/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'profile',
    title: environment.appName + ' - Perfil do Usuário',
    loadChildren: () => import('./user/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'create',
    title: environment.appName + ' - (Re)Cria Banco de Dados',
    loadChildren: () => import('./db/create/create.module').then(m => m.CreatePageModule)
  },
  {
    path: 'view/:id',
    title: environment.appName + ' - Exibe um Documento',
    loadChildren: () => import('./pages/view/view.module').then(m => m.ViewPageModule)
  },
  {
    path: 'device',
    title: environment.appName + ' - Testes com Device',
    loadChildren: () => import('./tests/device/device.module').then(m => m.DevicePageModule)
  },
  {
    path: 'new',
    title: environment.appName + ' - Novo Documento',
    loadChildren: () => import('./pages/document/document.module').then( m => m.DocumentPageModule)
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./pages/document/document.module').then( m => m.DocumentPageModule)
  },

  // Rota curinga. Deve ser sempre a última rota desta lista.
  {
    path: '**',
    redirectTo: 'e404',
    pathMatch: 'full'
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
