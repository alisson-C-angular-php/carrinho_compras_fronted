import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { AuthGuard } from './services/auth-guard';
import { CadastroUsuario } from './pages/cadastro-usuario/cadastro-usuario';
import { ProductCreate } from './pages/product-create/product-create';
import { ProductList } from './pages/product-list/product-list';
import { ProductDetail } from './pages/product-detail/product-detail';
import { Cart } from './pages/cart/cart';


export const routes: Routes = [
  { path: '', component: Login },
  { path: 'home', component: ProductList, canActivate: [AuthGuard] },
  { path: 'cadastrousuario', component: CadastroUsuario },
  { path: 'cadastro', component: ProductCreate, canActivate: [AuthGuard] },
  { path: 'product/:id', component: ProductDetail, canActivate: [AuthGuard] },
  { path: 'cart', component: Cart, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
