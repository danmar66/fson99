/*
----- Starting with Node.js 20.11/21.2, -----
-----  you can use import.meta.dirname  -----

const __dirname = import.meta.dirname;
*/

import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('..', import.meta.url));

export default __dirname;
