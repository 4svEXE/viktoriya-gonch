import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalOpenSubject = new BehaviorSubject<boolean>(false);
  private modalDataSubject = new BehaviorSubject<any>(null);

  get modalStatus$(): Observable<boolean> {
    return this.modalOpenSubject.asObservable();
  }

  get data$(): Observable<any> {
    return this.modalDataSubject.asObservable();
  }

  close() {
    this.modalOpenSubject.next(false);
  }

  open() {
    this.modalOpenSubject.next(true);
  }

  setData(data: any) {
    this.modalDataSubject.next(data);
  }
}
