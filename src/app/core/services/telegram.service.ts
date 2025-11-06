// telegram.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TelegramService {
  private readonly BOT_TOKEN = '8423501769:AAGtsKsQA2SDCS1FQI0a6VECYrfuq39Yj3o';
  private readonly CHAT_ID = '-1003231044132'; // тг канал
  private readonly API_URL = `https://api.telegram.org/bot${this.BOT_TOKEN}/sendMessage`;
  // https://api.telegram.org/bot8423501769:AAGtsKsQA2SDCS1FQI0a6VECYrfuq39Yj3o/getUpdates


  constructor(private http: HttpClient) {}

  sendMessage(msg: string): Observable<any> {

    return this.http.post(this.API_URL, {
      chat_id: this.CHAT_ID,
      text: msg,
    });
  }
}
