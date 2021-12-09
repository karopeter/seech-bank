import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-transaction-header',
  templateUrl: './transaction-header.component.html',
  styleUrls: ['./transaction-header.component.scss']
})
export class TransactionHeaderComponent implements OnInit {
   @Output() featureSelected = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(feature: string): void {
    this.featureSelected.emit(feature);
  }
}
