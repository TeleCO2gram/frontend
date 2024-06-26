import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-table-message',
    standalone: true,
    templateUrl: './table-message.component.html',
    styleUrl: './table-message.component.css',
    imports: []
})
export class TableMessageComponent implements AfterViewInit   {

  @ViewChild("titolo") titolo!: ElementRef;
  @ViewChild("table") table!: ElementRef;
  @ViewChild("table2") table2!: ElementRef;
  
  //@ViewChild("mostra1") mostra1!: ElementRef;
  //@ViewChild("mostra2") mostra2!: ElementRef;


  
  constructor(){

  }
  ngAfterViewInit(): void {
    //let pulsante2 = document.querySelector('.mostra2');

    this.table.nativeElement.style.display = 'Block';
    this.table2.nativeElement.style.display = 'Block';
  }

  ngOnInit() {
    //this.table.nativeElement.style.display = 'None';
  }

  


}
