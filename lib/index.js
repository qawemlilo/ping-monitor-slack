"use strict";

const notify = require("./notify");

class SlackChannel {
  constructor(options) {
    this.options = {
      messages: {
        up: `Up and Running! 👍`,
        down: `Downtime Incidence 🛑`,
        stopped: `Monitoring Stopped ❌`,
        error: `Error/Downtime Incidence 🛑`,
        timeout: `Connection Timed Out ⏰`,
      },
      ...options,
    };
  }

  name = "slacker";

  async up(res, state) {
    notify({
      ...this.options,
      website: res.website,
      status_code: res.statusCode,
      message: this.options.messages.up,
    });
    console.log(`#${this.name}: ${res.website} is up`);
  }

  async down(res, state) {
    notify({
      ...this.options,
      website: res.website,
      status_code: res.statusCode,
      message: this.options.messages.down,
    });

    console.log(`#${this.name}: ${res.website} is down`);
  }

  async stop(res, state) {
    notify({
      ...this.options,
      website: res.website,
      status_code: res.statusCode,
      message: this.options.messages.stop,
    });

    console.log(`#${this.name}: ${res.website} has stopped`);
  }

  async error(error, res) {
    notify({
      ...this.options,
      website: res.website,
      status_code: res.statusCode,
      message: this.options.messages.error,
    });

    console.log(`#${this.name}:`, error);
  }

  async timeout(error, res) {
    notify({
      ...this.options,
      website: res.website,
      status_code: res.statusCode,
      message: this.options.messages.timeout,
    });

    console.log(`#${this.name}:`, error);
  }
}

module.exports = SlackChannel;
