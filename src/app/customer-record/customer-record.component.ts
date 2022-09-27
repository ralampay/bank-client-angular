import { 
  Component, 
  OnInit,
  Input
} from '@angular/core';

import { Customer } from '../Customer';

@Component({
  selector: 'app-customer-record',
  templateUrl: './customer-record.component.html',
  styleUrls: ['./customer-record.component.scss']
})
export class CustomerRecordComponent implements OnInit {
  @Input() customer: Customer;

  constructor() { }

  ngOnInit(): void {
  }

}
