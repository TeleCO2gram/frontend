import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FetchServiceService } from '../fetch-service.service';
import { Message } from 'postcss';

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

  message: Message = {
      id: 0,
      type: '',
      date: '',
      weight: 0,
      user_id: 0
  };
  
  messages: Message[] = [];

  constructor(private fetchService:FetchServiceService){

  }

  
  ngOnInit() {
    //this.table.nativeElement.style.display = 'None';
    //throw new Error('Function not implemented.');

    this.fetchService.getAllMessage().subscribe({
      next: (data:Message) => {
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

    this.table.nativeElement.style.display = 'Block';
    this.table2.nativeElement.style.display = 'Block';
  }

  




}

