require('dotenv').config();
const ftp = require('basic-ftp');
const fs = require('fs');
const path = require('path');

const localDirectory = './dist/viktoriya-gonch';
const remoteDirectory = '/viktoriehonc.com.ua/www';

// Масив файлів/папок, які ігноруємо
const ignoreList = ['.git', '.env', 'node_modules', 'public', 'assets'];

async function uploadDir(client, localDir, remoteDir) {
    const files = fs.readdirSync(localDir);

    for (const file of files) {
        if (ignoreList.includes(file)) continue; // пропускаємо ігноровані файли/папки

        const localPath = path.join(localDir, file);
        const remotePath = path.posix.join(remoteDir, file);

        const stats = fs.statSync(localPath);
        if (stats.isDirectory()) {
            // Створюємо каталог на сервері, якщо його немає
            try { await client.ensureDir(remotePath); } catch (e) { }
            await uploadDir(client, localPath, remotePath); // рекурсія для папки
            await client.cdup(); // повертаємося на один рівень назад
        } else if (stats.isFile()) {
            console.log(`Завантажую: ${file}`);
            await client.uploadFrom(localPath, remotePath);
        }
    }
}

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
        console.log('Підключення до сервера встановлено.');

        console.log('Завантаження файлів...');
        await client.ensureDir(remoteDirectory);
        await uploadDir(client, localDirectory, remoteDirectory);
        console.log('Файли успішно завантажені!');

    } catch (error) {
        console.error('Помилка FTP-з’єднання або завантаження:', error);
    } finally {
        client.close();
        console.log('FTP-з’єднання закрите.');
    }
}

deploy();
