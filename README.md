# public-webhooks

This application was created with the [create jambonz command](https://www.npmjs.com/package/create-jambonz-app).  It provides some  simple [jambonz](https://jambonz.org) webhook applications that you can use to test your account setup on jambonz.org, or on your own self-hosted jambonz platform.

After creating an account on [jambonz.org](https://jambonz.org), you should first configure your voice carriers and speech services.  Once you have done that, you can create a couple of applications referencing these webhooks:

- 'hello-world' is available via HTTP POST at https://public-apps.jambonz.us/hello-world, and will play a simple greeting to the caller using your configured text-to-speech speech credentials.  By routing a DID from your carrier to this application, you can test both that inbound calling is working and that your text-to-speech credentials are working.
- 'dial-time' is available via HTTP POST at https://public-apps.jambonz.us/dial-time and will place an outbound call to the [NRC talking clock](https://en.wikipedia.org/wiki/National_Research_Council_Time_Signal).  By routing a DID to this application, you can verify that outbound calling through your carrier is working.

You can also send call status events via HTTP POST to https://public-apps.jambonz.us/call-status if you like, or you can create your own webhook application to receive them.

Enjoy!

## Endpoints

This application listens by default on port 3010 (can be changed by modifying the [ecosystem.config.js](./ecosystem.config.js) exposes the following HTTP endpoints:

### POST /hello-world
Answers incoming call and plays a greeting using text-speech

### POST /dial-time
Dials out through your configured Carrier to a Canadian phone number that speaks the current Eastern Time every 10 seconds

### POST /call-status
Receives call-status events.


