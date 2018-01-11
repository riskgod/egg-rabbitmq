'use strict';

const mock = require('egg-mock');

describe('test/egg-rabbitmq.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/egg-rabbitmq-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, eggRabbitmq')
      .expect(200);
  });
});
