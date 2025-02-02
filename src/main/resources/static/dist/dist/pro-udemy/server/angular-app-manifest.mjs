
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
    'index.csr.html': {size: 24309, hash: '5b247fee5215a75601f790aecb20099942b4af551bd312cf375586e71617d4e7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17883, hash: '015c9286cf722f26709b0cc116a4eb33171d409a0454afce9533dde7e6cda1e0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'Registrarse/index.html': {size: 49433, hash: '4282c0c1d2202e263f072fa147f0a2b7a57855de3899b2c62a51eadbd054792f', text: () => import('./assets-chunks/Registrarse_index_html.mjs').then(m => m.default)},
    'Iniciar-sesion/index.html': {size: 46584, hash: '0bd978bae3af44885afe6535f5f5e1bc2210f2532d0911edf80fe68767356fa1', text: () => import('./assets-chunks/Iniciar-sesion_index_html.mjs').then(m => m.default)},
    'index.html': {size: 44301, hash: '36f43ed7fc7f991f2fb38ab3089686a20373cf4d863805727334b91418d0412d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'InicioPrivado/index.html': {size: 44223, hash: 'efd2874995045ad6049ef52e504732e91360f092dbeb5e9508047628e3cc26c0', text: () => import('./assets-chunks/InicioPrivado_index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
