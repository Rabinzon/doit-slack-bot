![xQNBz0U.png](http://i.imgur.com/xQNBz0U.png)
### doit-slack-bot

This is slack bot. Bot is able to respond to the trigger words with answers from trigger.json.
You can configure your own triggers. One of the possible examples is provided in the file trigger.json.

How to run:
```
$ npm i
```
And put your `.config.json` in the same directory as `index.js`
Configure file should contain `token` and bot `name` fields.

Example:

```
{
  "name": "mybotname",
  "token": "asx-345asdasd-SSDdfswrERFCdfjnsd"
}
```
After that:

```
$ npm start
```

Also you can turn on a bot in docker container with docker-compose. In this case you only need to create `.config.json` without `npm i` and `npm start`.

```
$ docker-compose up -d
```

