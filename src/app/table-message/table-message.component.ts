import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FetchServiceService } from '../service/fetch-service.service';
import { Message } from '../models/message';


@Component({
    selector: 'app-table-message',
    standalone: true,
    templateUrl: './table-message.component.html',
    styleUrl: './table-message.component.css',
    imports: []
})
export class TableMessageComponent implements AfterViewInit, OnInit  {

  @ViewChild("titolo") titolo!: ElementRef;
  @ViewChild("table") table!: ElementRef;
  @ViewChild("table2") table2!: ElementRef;
  
  //@ViewChild("mostra1") mostra1!: ElementRef;
  //@ViewChild("mostra2") mostra2!: ElementRef;

  
  messages: Message[] = [];

  constructor(private fetchService:FetchServiceService){

  }

  
  ngOnInit() {
  
    this.fetchService.getAllMessage().subscribe({
      next: (data: Message[]) => {
        this.messages = data;
      },
        error: (error) => {
        console.error(error);
        alert('An error occurred while fetching user details');
      }
    });

  }

  ngAfterViewInit(): void {
    //let pulsante2 = document.querySelector('.mostra2');

    /* this.table.nativeElement.style.display = 'Block';
    this.table2.nativeElement.style.display = 'Block'; */

    if(this.table){
      this.table.nativeElement.style.display = 'Block';
    }
    if(this.table2){
      this.table2.nativeElement.style.display = 'Block';
    }


  }



}

