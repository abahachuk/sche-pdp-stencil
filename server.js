const express = require('express');
const stencil = require('@stencil/core/server');
const { Renderer } = require('@stencil/core/server');
const fs = require('fs');
const path = require('path');

// create the express app
const app = express();
const port = 3030;

// load the stencil config
const config = stencil.loadConfig(__dirname);
config.flags = {ssr: false}
// create the renderer
const renderer = new Renderer(config);


const componentsMap = {
  a: '<product-list></product-list>',
  b: '<product-details></product-details>',
  c: '<product-component></product-component>'
};


app.get('/', (req, res) => {
  let srcIndexHtml = renderer.fs.readFileSync(config.srcIndexHtml, 'utf-8');
  console.log(1)
  if (req.query.comp) {
    // let componentsList = req.query.comp.split(',');
    // let renderComponents = componentsList.map(item => {
    //   return componentsMap[item];
    // }).join(' ');
    // console.log(srcIndexHtml)
    console.log(111111111)
    // srcIndexHtml = srcIndexHtml.replace('<product-component></product-component>', renderComponents);
    // console.log(srcIndexHtml)
  }
    renderer.hydrate({
      html: srcIndexHtml
    }).then(results => {
    
      // console log any diagnostics
      results.diagnostics.forEach(d => {
        console.log(d.messageText);
      });
    
      // respond with the hydrated html
      res.send(results.html);
    });
});
// serve-side render html pages
// app.use(stencil.ssrPathRegex, stencil.ssrMiddleware({ config }));

// serve all static files from www directory
app.use(express.static(path.join(__dirname, 'www')));

// start the server
app.listen(port, () => config.logger.info(`server started at http://localhost:${ port }/`));

