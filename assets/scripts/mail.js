import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();
const db = admin.firestore();

//sendgrid config
import * as sgMail from '@sendgrid/mail';
import { getMaxListeners } from 'cluster';

const API_KEY = functions.config().sendgrid.key;
const TEMPLATE_ID = functions.config().sendgrid.template;
sgMail.setAPIKey(API_KEY);


//sends email to user after signup

export const welcomeEmail = functions.auth.user().onCreate(user=>{
    const msg = {
        to: user.email,
        from: 'ayushs136@gmail.com',
        templateId: TEMPLATE_ID,
        dynamic_template_data: {
            subject: 'Welcome to DSC RJIT',
            name:user.email,
            
        },
    };
    return sgMail.send(msg);
});

export const genericEmail = functions.https.onCall(async (data, context)=>{
    if (!context.auth && !context.auth.token.email){
        throw new functions.https.HttpsError('failed-precondition', 'Must be logged with email');

    };

    const msg = {
        to: context.auth.token.io,
        from: 'ayushs136@gmail.com',
        templateId: TEMPLATE_ID,
        dynamic_template_data: {
            subject: data.subject,
            name: data.text,
        },
    };

    await sgMail.send(mdg);

    return {sucess: true};

});



// send a summary email to all users
export const weeklySummary = functions.pubsub.schedule('every friday 05:00').onRun(async context=>{
    const userSnapshots = await admin.firestore().collection('users').get();
    const emails = userSnapshots.docs.map(snap => snap.data().email);

    const msg = {
        to: emails,
        from: 'ayushs136@gmail.com',
        templateId: TEMPLATE_ID,
        dynamic_template_data: {
            subject: 'Your Weekly Summary',
            text: 'something just happened...',
        },
    };

    return sgMail.send(msg);

});