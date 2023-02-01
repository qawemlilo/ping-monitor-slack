# @ping-monitor/slack

## Options

```
{
    webhook_url: "", // Slack webhook url
    icon_url: "", // Slack notification icon url
    slack_channel: "", // Slack channel
    notification_color: "", // default: "#FF0000" , Custom color for notifications
    messages: {
        up: "", // default: `Up and Running! 👍`
        down: "", // default: `Downtime Incidence 🛑`
        stopped: "", // default: `Monitoring Stopped ❌`
        error: "", // default: `Error/Downtime Incidence 🛑`
        timeout: "", // default: `Connection Timed Out ⏰`
    }
}
```
