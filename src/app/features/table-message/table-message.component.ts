import { AfterViewInit, Component, ElementRef, NgModule, OnInit, ViewChild } from '@angular/core';
import { FetchServiceService } from '../../service/fetch-service.service';
import { Message } from '../../models/message';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavBarComponent } from '../../core/components/nav-bar/nav-bar.component';




@Component({
    selector: 'app-table-message',
    standalone: true,
    templateUrl: './table-message.component.html',
    styleUrl: './table-message.component.css',
    imports: [
      CommonModule,
      RouterModule,
      NavBarComponent
    ]
})
export class TableMessageComponent implements AfterViewInit, OnInit  {

  @ViewChild("titolo") titolo!: ElementRef;
  @ViewChild("table") table!: ElementRef;
  @ViewChild("table2") table2!: ElementRef;
  
  //@ViewChild("mostra1") mostra1!: ElementRef;
  //@ViewChild("mostra2") mostra2!: ElementRef;
  /* messages: Message[] = []; */
  /* constructor(private fetchService:FetchServiceService){
  } */

  data:any[] = [];

  constructor(private http:HttpClient){}
  
  ngOnInit() {
/** Get data from file named db.json  */
    this.http.get<any[]>('./assets/db.json').subscribe({ 
      next: response => {
      console.log('Data loaded:', response); // Log per il debug
      this.data = response;
    },
      error: error => {
      console.error('Error loading data:', error); // Log in caso di errore
      alert('An error occurred while fetching data details');
    }
   });
  }

  getKeys(item:any): string[] {
    return item ? Object.keys(item) : [];
  }

    /* this.fetchService.getAllMessage().subscribe({
      next: (data: Message[]) => {
        console.log('Messages received:', data);  // Log for test
        this.messages = data;
      },
        error: (error) => {
        console.error(error);
        alert('An error occurred while fetching user details');
      }
    }); */

  

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

