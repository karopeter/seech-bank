import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
    loadedFeature = 'transfer';
  constructor() { }

  ngOnInit(): void {
  }


  onNavigate(feature: string): void {
    this.loadedFeature = feature;
  }
}
