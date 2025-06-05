import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart-component/cart.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { LoginComponent } from './components/login-component/login-component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCreateComponet } from './components/product-create-componet/product-create-componet';
import { AuthGuard } from './services/auth-guard';
import { CadastroUsuarioComponent } from './components/cadastro-usuario-component/cadastro-usuario-component';


export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: ProductListComponent, canActivate: [AuthGuard] },
  { path: 'cadastrousuario', component: CadastroUsuarioComponent },
  { path: 'cadastro', component: ProductCreateComponet, canActivate: [AuthGuard] },
  { path: 'product/:id', component: ProductDetailComponent, canActivate: [AuthGuard] },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
