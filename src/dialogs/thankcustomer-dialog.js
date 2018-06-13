module.exports = function(bot) {
    bot.dialog('ThankCustomerDialog',
        (session) => {
            session.send('Thank you for being our customer. We greatly appreciate your business');
            session.endDialog();
        }
    ).triggerAction({
        matches: 'Thank-Customer'
    });
};