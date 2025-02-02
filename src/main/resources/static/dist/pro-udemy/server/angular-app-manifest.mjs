
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
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
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/**"
  }
],
  assets: {
    'index.csr.html': {size: 24309, hash: 'fbeb4ab805dcece0f7f3d69700f87480f8e2b19320eb8e8a70d0ff6170c837b5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17883, hash: 'de4561a38819fd480a1a058827710c8830caa70837f2831486634cbff0234658', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'Iniciar-sesion/index.html': {size: 46617, hash: '815dfa2314e81a2371b78c9b0c904814b52b6821d92b120b4aaf8a9b3ac9d029', text: () => import('./assets-chunks/Iniciar-sesion_index_html.mjs').then(m => m.default)},
    'Registrarse/index.html': {size: 49466, hash: '41ba4e1736bb4d9ea73357c05b3e6f24f38d34f5c95f018fe02cd53096bb0d4a', text: () => import('./assets-chunks/Registrarse_index_html.mjs').then(m => m.default)},
    'InicioPrivado/index.html': {size: 44256, hash: '2de3b31c00af83f1fa03ce234b2e5096d983f800fa28565f4c78745aacc8800a', text: () => import('./assets-chunks/InicioPrivado_index_html.mjs').then(m => m.default)},
    'index.html': {size: 44334, hash: 'da65dccfdebce6e05b2cbff60bae398bba69ecedcd45e4298e91e7f2a16d11ca', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
