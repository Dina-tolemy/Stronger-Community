# Stronger-Community
It's an app to help the vulnerable in our community to get help with the basic and daily needs at this time.

Built with  MERN (MongoDb-Express.js-Reactjs-Nodejs).

Packages:

(validator, jsonwebtoken, passport-jwt, bcryptjs, body-parser)  for user authentication.

(@tippy.js/react) for tootips in the side nav.

(@sendgrid/mail, cors, dotenv ) for using sendgrid API to send emails to the helper from the user.


The app has two sides the helper side of the app and the in need side of the app, it depends on what the user chooses to sign up as.


The helper sign in and see the names of all the in-need people in the app at the moment, and to access the information and see what he/she can help with the user has to search his suburb, then he/she will be able to view the details of the people in his suburb and see what he/she can help with.
The in-need person signs in and can add any number of requests and can delete it any time he/she wants to.
both users have the option to see their profile and delete it any time they want to.

Deployed link :https://stronger-community.herokuapp.com/

You can either sign up or user 
Help@test.om as a helper account, and vulnerable@test.com as an in-need account 

password for both accounts is : 123456

node server.js & npm start  to run in development.
