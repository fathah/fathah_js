# fathah
Lightweight NLP preprocessing package for Arabic language

## Installation
```sh
npm i fathah
```



## Get Started
```js
const fathah = require('fathah');

const text = 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ الله وَبَرَكَاتُهُ';
fathah.removeDiacritics(text); 
// السلام عليكم ورحمة الله وبركاته
```
