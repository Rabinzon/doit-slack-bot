![xQNBz0U.png](http://i.imgur.com/xQNBz0U.png)
### doit-slack-bot

This is slack bot. Bot able to respond to the trigger words, with answers from trigger.json.
You can configure your own triggers, example in trigger.json.

How to run:
```
$ npm i
```
And put your `.config.json` beside `index.js`.
Config should contains `token` and bot `name` fields.

Example:

```
{
  "name": "mybotname",
  "token": "asx-345asdasd-SSDdfswrERFCdfjnsd"
}
```
after that:

```
$ npm start
```
