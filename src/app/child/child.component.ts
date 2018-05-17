import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
 // tslint:disable-next-line:no-input-rename
 @Input('title') info: String;
 unit: String = 'unit1';
// tslint:disable-next-line:no-input-rename
@Input('items') items: string[];
current: String;
// tslint:disable-next-line:no-output-rename
@Output('send') emitdata: EventEmitter<String> =  new EventEmitter<String>();
  constructor() {
console.log('Executing the constructor');
console.log('Inside constructor ifo value' + this.info);

   }

  ngOnInit() {
    console.log('Executed the constructor');
console.log('Inside ngOninit ifo value' + this.info);
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngDoCheck() {
    // tslint:disable-next-line:max-line-length
    // Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    // Add 'implements DoCheck' to the class.
    console.log('Instance member changed');
  }

  changeColor() {
    if (this.unit === 'unit1') {
      this.unit = 'unit2';
    } else {
    this.unit = 'unit1';
    }
  }

  addItem() {

      this.emitdata.emit(this.current);

  }
}
