import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalOpenSubject = new Subject<boolean>();
  private modalDataSubject = new Subject<any>();

  get modalStatus$(): Observable<boolean> {
    return this.modalOpenSubject.asObservable();
  }

  close() {
    this.modalOpenSubject.next(false)
  }

  open() {
    this.modalOpenSubject.next(true)
  }

  setData(data: any) {
    this.modalDataSubject.next(data);
  }

  get data$(): Observable<any> {
    return this.modalDataSubject.asObservable();
  }

}
