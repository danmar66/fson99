// import fs from 'node:fs/promises';

/*
------------------------- Sync method -------------------------
*/
// const content = fs.readFileSync('src/files/data.json');
// fs.writeFileSync('src/files/output.txt', content);

// const entry = JSON.parse(content.toString());
// console.log(entry.message);

/*
------------------------- Callback method -------------------------
*/
// fs.readFile('src/files/data.json', (err, content) => {
//     fs.writeFile('src/files/output.txt', content, (err) => {
//         console.log('write');
//     });
//     console.log('read');
// });

// console.log('finish');

/*
------------------------- Async method -------------------------
*/
// const content = await fs.readFile('src/files/data.json');
// await fs.writeFile('src/files/output.txt', content);

// console.log(content.toString());


/*
------------------------- File operations -------------------------
*/
import fs from 'node:fs/promises';

const filePath = 'src/files/data.txt';

const fileOperation = async ({ action, data, path }) => {
  switch (action) {
    case 'read': {
      const result = await fs.readFile(filePath, 'utf8');
      console.log(JSON.parse(result).message);
      break;
    }
    case 'add': {
      const append = await fs.appendFile(filePath, data);
      console.log(append);
      break;
    }
    case 'replace': {
        const replace = await fs.writeFile(filePath, data);
        console.log(replace);
        break;
    }
    case 'rename': {
        // fs.rename(filePath, `${filePath}smth`);
        fs.rename('test.txt', `newtest.txt`);
        break;
    }
    case 'delete': {
        fs.unlink(path);
        break;
    }

    default:
      console.log('Unkwnow action');
      break;
  }
};

fileOperation({ action: 'read' });
// fileOperation({action: "add", data: "\n Daniel"});
// fileOperation({action: 'replace', data: 'New data'});
// fileOperation({action: 'rename'});
// fileOperation({action: 'delete', path: 'src/files/data.txtsmth'});
