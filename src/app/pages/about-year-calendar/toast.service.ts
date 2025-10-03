import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {

  show(message: string, duration = 10000) {
    // Створюємо контейнер тоста
    const toast = document.createElement('div');
    toast.innerHTML = `
      <span>${message}</span>
      <button class="toast-close">x</button>
    `;

    // Стилі тоста
    Object.assign(toast.style, {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: '#202020',
      color: '#fff',
      padding: '16px 24px',
      borderRadius: '8px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
      zIndex: '9999',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      fontSize: '16px',
      width: '90%',
      maxWidth: '420px'
    });

    // Стилі кнопки закриття
    const btn = toast.querySelector('button') as HTMLButtonElement;
    Object.assign(btn.style, {
      background: 'transparent',
      border: 'none',
      color: '#f12345',
      cursor: 'pointer',
      fontWeight: 'bold'
    });

    // Закриття при кліку
    btn.addEventListener('click', () => {
      document.body.removeChild(toast);
    });

    // Додаємо на сторінку
    document.body.appendChild(toast);

    // Автоматично зникає через duration
    setTimeout(() => {
      if (document.body.contains(toast)) {
        document.body.removeChild(toast);
      }
    }, duration);
  }
}
