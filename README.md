# assetCDN

### The CDN for tdpain.net's scripts and CSS

[![jsDelvr badge](https://img.shields.io/badge/Powered%20by-jsDelivr-%23ff5627.svg?style=flat-square)](https://www.jsdelivr.com)
![Hits/month](https://data.jsdelivr.com/v1/package/gh/codemicro/assetCDN/badge)

Scripts and CSS used by [tdpain.net](https://www.tdpain.net) powered by [jsDelivr](https://www.jsdelivr.com).

### Index of items

**CSS**

| File name             | Version | Description                                                  |
| --------------------- | ------- | ------------------------------------------------------------ |
| tmain.css             | 2.4.2   | Contains house styling for entire website (bar index). Imports bootstrap.css from the CDN also. |
| main.css              | 1.0.0   | Homepage stuff only                                          |
| **External items**    |         |                                                              |
| bootstrap.css         | 4.3.1   | https://www.getbootstrap.com                                 |
| cookieconsent.min.css | n/a     | Old version of https://cookieconsent.osano.com/... I'm suspicious of what it's turned into. |
| font-awesome.min.css  | 4.7.0   | https://fontawesome.com/?from=io                             |

**Javascript**

| File name               | Version   | Description                                                  |
| ----------------------- | --------- | ------------------------------------------------------------ |
| checkWebp.js            | 1.0.0     | Replaces all WebP images with JPEG images if a user's browser doesn't support WebP. Requires modernizr.js. |
| emailRedirect.js        | 1.0.4     | Redirection for my contact form, going to Formspree form - should prevent getting my email spammed with fake blackmail again. It's worked so far. |
| remCookies.js           | 1.0.0     | Contains a function to remove all website cookies.           |
| showReadme.js           | 1.0.2     | Basis of the project index at [https://www.dotmicron.com/projects/](https://www.dotmicron.com/projects/) |
| **External items**      |           |                                                              |
| bootstrap.bundle.min.js | 4.3.1     | https://www.getbootstrap.com                                 |
| breakpoints.min.js      | 1.0       | Made by [ajlkn](https://github.com/ajlkn), used by [Read Only](https://html5up.net/read-only) |
| browser.min.js          | 1.0       | Made by [ajlkn](https://github.com/ajlkn), used by [Read Only](https://html5up.net/read-only) |
| cookieconsent.min.js    | n/a       | See above https://cookieconsent.osano.com/                   |
| jquery.js               | 3.4.1     | https://www.jquery.org                                       |
| jquery.scrollex.min.js  | 0.2.1     | [This](https://github.com/ajlkn/jquery.scrollex) thing here, made by [ajlkn](https://github.com/ajlkn), used by [Read Only](https://html5up.net/read-only) |
| jquery.scrolly.min.js   | 1.0.0-dev | Made by [ajlkn](https://github.com/ajlkn)                    |
| main.js                 | n/a       | Part of Read Only - http://html5up.net                       |
| marked.min.js           | 0.7.0     | [markedjs/marked](https://www.github.com/markedjs/marked) - used in showReadme.js |
| modernizr.js            | 3.6.0     | Custom build of [Modernizr](https://modernizr.com/), using the WebP component only. |
| ~~parseMD.js~~          | ~~1.9.0~~ | ~~[showdownjs/showdown](https://www.github.com/showdownjs/showdown) - used in showReadme.js~~ *Depreciated!* Replaced by marked.min.js |
| util.js                 | n/a       | Part of Read Only - http://html5up.net                       |
| typed.js                | 2.0.11    | [Typed.JS](https://mattboldt.github.io/typed.js/) by [mattboldt](https://github.com/mattboldt) |
