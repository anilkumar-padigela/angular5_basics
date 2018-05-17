import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title: String = 'Angular 5 App';
  private technologies: String[] = ['Java', 'Python', 'Angular', 'AI', 'Hadoop'];
  headings: string[] = ['Anilmals', 'Stationary', 'Electronic item'];
  childdata: String[][] = [
    ['Lion', 'Elephent', 'dog'],
    ['Pendrive', 'Paper', 'Book', 'Pencil'],
    ['Pen drive', 'hard Disk', 'RAM']
  ];

  // tslint:disable-next-line:use-life-cycle-interface
  ngDoCheck() {
      console.log('Parent Version... !');
  }
  receiveItem(data, childcount) {
    this.childdata[childcount].push(data);
  }

}
