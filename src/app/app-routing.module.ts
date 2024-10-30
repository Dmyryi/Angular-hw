import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvComponent } from './tv/tv.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', component: TvComponent},
  {path: 'tv', component: TvComponent},
  {path: 'tv/:storeid', component: TvComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
