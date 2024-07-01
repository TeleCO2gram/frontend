import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../app/models/message';

@Injectable({
  providedIn: 'root'
})
export class FetchServiceService {

  private messages?: Message;
  private apiUrl = 'http://localhost:8000/api/messages/get_messages';

  constructor(private http: HttpClient) { }

getAllMessage():Observable<Message[]>{
  return this.http.get<Message[]>(this.apiUrl);
}

}
