import { Component } from '@angular/core';
import { GoogleSheetsService } from '../../core/services/google-sheets.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  sheetsData: any[] = [];
  isAuthenticated = false;

  constructor(private googleSheetsService: GoogleSheetsService) {}

  ngOnInit(): void {
    this.googleSheetsService.loadGoogleAPI(); // Завантаження Google API при ініціалізації компонента
  }

  // Отримання даних з Google Sheets
  public getDataFromSheet(): void {
    this.googleSheetsService.getDataFromSheet().then((data) => {
      this.sheetsData = data;
      console.log('Data from Google Sheets:', data);
    }).catch((error) => {
      console.error('Error retrieving data: ', error);
    });
  }
}
