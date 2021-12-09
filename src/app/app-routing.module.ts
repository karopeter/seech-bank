import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { TransactionTransferComponent } from './transaction/transaction-transfer/transaction-transfer.component';
import { TransactionRecievedComponent } from './transaction/transaction-recieved/transaction-recieved.component';

const routes: Routes = [
  { path: '', redirectTo: '/seech', pathMatch: 'full' },
  { path: 'seech', component: DetailComponent },
  { path: 'transfer', component: TransactionTransferComponent },
  { path: 'recieved', component: TransactionRecievedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
