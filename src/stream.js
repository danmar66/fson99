import fs from 'node:fs';
import zlib from 'node:zlib';

const readStream = fs.createReadStream('src/files/text.txt');
const writeStream = fs.createWriteStream('src/files/new-text.txt');
const compressStream = zlib.createGzip();
const unzipStream = zlib.createGunzip();

/*
readStream.on('data', (chunk) => {
    writeStream.write("\nCHUNK START ------- \n");
    writeStream.write(chunk);
    writeStream.write("\nCHUNK END ------- \n");
});
*/

const handleError = () => {
    console.log('Error');
    readStream.destroy();
    writeStream.end('Finished with error...');
};

readStream
    .on('error', handleError)
    .pipe(compressStream)
    .pipe(unzipStream)
    .pipe(writeStream)
    .on('error', handleError);







