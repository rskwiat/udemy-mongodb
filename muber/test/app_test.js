const assert = require('assert');
const request = require('supertest'); //yarn supertest
const app = require('../app');

describe('Express App', () => {
  it('handles a GET request to /api', (done) => {
    request(app)
      .get('/api')
      .end((err, response) => {
        assert(response.body.hi === 'there');
        done();
      });
  });
});
