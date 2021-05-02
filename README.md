# public-webhooks

This application was created with the [create jambonz command](https://www.npmjs.com/package/create-jambonz-app).  It provides some very simple [jambonz](https://jambonz.org) webhook applications that anyone can use to test their account setup for inbound and outbound calls.

After creating an account on [jambonz.org](https://jambonz.org), you should configure your Carriers and Speech Services.  Once you have done that, you can test your configuration by using these apps:

- 'hello-world' can be reached at the URL https://public-apps.jambonz.us/hello-world and will play a greeting using text-to-speech with your configured speech credentials, and
- 'dial-time' can be reached at the URL https://public-apps.jambonz.us/dial-time and will place an outbound call to the [NRC talking clock](https://en.wikipedia.org/wiki/National_Research_Council_Time_Signal).

Using these applications, you can test both inbound and outbound calls with your Carrier and confirm that your speech credentials are properly configured.

Enjoy!

## Endpoints

Based on the options that you have chosen, this application exposes the following HTTP endpoints:

### /hello-world
Answers incoming call and plays a greeting using text-speech

### /dial-time
Dials out through your configured Carrier to a Canadian phone number that speaks the current Eastern Time every 10 seconds


