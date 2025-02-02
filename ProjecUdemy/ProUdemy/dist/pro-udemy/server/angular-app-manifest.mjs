
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/Registrarse"
  },
  {
    "renderMode": 2,
    "route": "/Iniciar-sesion"
  },
  {
    "renderMode": 2,
    "route": "/InicioPrivado"
  },
  {
    "renderMode": 2,
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24309, hash: 'a497bb77ef892caae58e72d6f0e14602a4dac0972c3c686f299e62898073d142', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17883, hash: 'b81c5b458e7c25e3cde63964b8b6294507faf623ecc3645f0d4520409fab7556', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'Iniciar-sesion/index.html': {size: 46584, hash: '30ac8e8bfff90d6789d3f99ef0927be5ff4756cacdf7f9a4413705937dfb57c7', text: () => import('./assets-chunks/Iniciar-sesion_index_html.mjs').then(m => m.default)},
    'Registrarse/index.html': {size: 49433, hash: 'df8604f6b793be15c9ddf3dd5b4cd8db1383e3b947e010e380847917ebf53e63', text: () => import('./assets-chunks/Registrarse_index_html.mjs').then(m => m.default)},
    'index.html': {size: 44301, hash: 'ed898230283c9431c3c42f9f83a5145b443dbab1d71978d1c740fe67caa1dca3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'InicioPrivado/index.html': {size: 44223, hash: '4803b822b34ae87c3fdf192537b8b6630c7cd227f168a0dfc22946d9bc4bf545', text: () => import('./assets-chunks/InicioPrivado_index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
