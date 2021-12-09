import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DetailComponent } from './detail/detail.component';
import { TransactionComponent } from './transaction/transaction.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { TransactionHeaderComponent } from './transaction/transaction-header.component';
import { TransactionTransferComponent } from './transaction/transaction-transfer/transaction-transfer.component';
import { TransferListComponent } from './transaction/transaction-transfer/transfer-list.component';
import { TransactionRecievedComponent } from './transaction/transaction-recieved/transaction-recieved.component';
import { RecipientComponent } from './transaction/recipient/recipient.component';
import { RecievedComponent } from './transaction/transaction-recieved/recieved.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DetailComponent,
    TransactionComponent,
    DropdownDirective,
    TransactionHeaderComponent,
    TransactionTransferComponent,
    TransferListComponent,
    TransactionRecievedComponent,
    RecipientComponent,
    RecievedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
