import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ChaptersService } from './services/chapters.service'
import { Chapter } from './models/chapter';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cover',
    pathMatch: 'full'
  },
  {
    path: 'cover',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'toc', loadChildren: './toc/toc.module#TocPageModule' },
  // Chapters
  { path: 'chapter1', loadChildren: './chapter1/chapter1.module#Chapter1PageModule' },
  { path: 'chapter2', loadChildren: './chapter2/chapter2.module#Chapter2PageModule' },
  { path: 'chapter3', loadChildren: './chapter3/chapter3.module#Chapter3PageModule' }

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
