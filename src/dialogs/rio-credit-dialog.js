module.exports = function(bot) {
    bot.dialog('RIOCreditDialog',
        (session) => {
            session.send('Thank you. Your request has been submitted. Your funds will be credited to your account within the next 24 hours. Is there anything else i can help you with');
            session.endDialog();
        }
    ).triggerAction({
        matches: 'Retail-Investment-Credit'
    });
};