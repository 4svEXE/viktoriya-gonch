require('dotenv').config();
const ftp = require('basic-ftp');

const localDirectory = './dist/static';
const remoteDirectory = '/viktoriehonc.com.ua/www';

async function deploy() {
  const client = new ftp.Client();
  client.ftp.verbose = true;

  try {
    console.log('Перевірка доступу до сервера через FTP...');
    await client.access({
      host: process.env.FTP_HOST,
      user: process.env.FTP_USER,
      password: process.env.FTP_PASSWORD,
      port: process.env.FTP_PORT
    });
    console.log('Підключення до сервера через FTP встановлено.');

    console.log('Завантаження файлів...');
    await client.uploadFromDir(localDirectory, remoteDirectory);
    console.log('Файли успішно завантажені!');

  } catch (error) {
    console.error('Помилка FTP-з’єднання або завантаження:', error);
  } finally {
    client.close();
    console.log('FTP-з’єднання закрите.');
  }
}

// Виконання функції
deploy();
