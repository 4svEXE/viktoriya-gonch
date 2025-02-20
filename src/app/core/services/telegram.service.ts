// telegram.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TelegramService {
  private readonly BOT_TOKEN = '8064054685:AAHkBHQCAQEMJm2F-Pp8HwJ0AWKuzBDkQO0';
  // private readonly CHAT_ID = '-1002238918828';
  private readonly CHAT_ID = '-1002372043803'; // дебаг чат
  private readonly API_URL = `https://api.telegram.org/bot${this.BOT_TOKEN}/sendMessage`;
  // private readonly API_URL = `https://api.telegram.org/bot8064054685:AAHkBHQCAQEMJm2F-Pp8HwJ0AWKuzBDkQO0/getUpdates`;


  constructor(private http: HttpClient) {}

  sendMessage(msg: string): Observable<any> {

    return this.http.post(this.API_URL, {
      chat_id: this.CHAT_ID,
      msg,
    });
  }
}
