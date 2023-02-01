'use strict';

const expect = require('chai').expect;
const SlackChannel = require('../index');


describe('SlackChannel', function () {
  it('#1 should have required methods and properties', function (done) {

    let channel = new SlackChannel({
      webhook_url: ''
    });

    expect(channel.name).to.be.a('string');
    expect(channel.up).to.be.a('function');
    expect(channel.down).to.be.a('function');
    expect(channel.stop).to.be.a('function');
    expect(channel.error).to.be.a('function');
    expect(channel.timeout).to.be.a('function');

    done();
  });
});
