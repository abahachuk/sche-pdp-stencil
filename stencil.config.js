// https://stenciljs.com/docs/config

exports.config = {
  namespace: 'app',
  outputTargets: [
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: {}
    },
  ],
  copy: [
    { src: 'mocks' }
  ]
};
