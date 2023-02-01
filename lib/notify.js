"use strict";

const SlackNotify = require("slack-notify");

const notify = ({
  webhook_url,
  icon_url,
  slack_channel,
  website,
  status_code,
  message = "Ping Monitor",
  notification_color = "#FF0000",
}) => {
  if (!webhook_url) {
    throw new Error("Webhook Url not provided");
  }

  const slack = SlackNotify(webhook_url);

  try {
    slack.alert({
      channel: slack_channel,
      icon_url: icon_url,
      text: `${website} ${message}`,
      attachments: [
        {
          color: notification_color,
          blocks: [
            {
              type: "header",
              text: {
                type: "plain_text",
                text: message,
                emoji: true,
              },
            },
            {
              type: "divider",
            },
            {
              type: "context",
              elements: [
                {
                  type: "mrkdwn",
                  text: `*URL: * ${website}`,
                },
                {
                  type: "mrkdwn",
                  text: `*Status Code: * ${status_code}`,
                },
              ],
            },
            {
              type: "section",
              text: {
                type: "mrkdwn",
                text: `*Message: * ${message}`,
              },
            },
          ],
        },
      ],
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = notify;
