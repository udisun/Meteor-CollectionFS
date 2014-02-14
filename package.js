Package.describe({
  summary: 'CollectionFS, Base package'
});

Package.on_use(function(api) {
  api.use(['deps', 'underscore', 'ejson', 'check']);

  if (api.export) {
    api.export('FS');
    api.export('_Utility', { testOnly: true });
  }

  api.add_files([
    'shared.js',
    'argParser.js'
  ], ['client', 'server']);
});

Package.on_test(function (api) {
  api.use('cfs-base-package');
  api.use('test-helpers', 'server');
  api.use(['tinytest', 'underscore', 'ejson', 'ordered-dict',
           'random', 'deps']);

  api.add_files('tests/common-tests.js', 'server');
});
