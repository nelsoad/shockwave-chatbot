module.exports = function(bot) {
    bot.dialog('RIODialog',
        (session) => {
            setTimeout('', 1000);
            session.send('I see you have a Retail Investment accont with us. And it has $50,000. How much were you looking to get');
            session.endDialog();
        }
    ).triggerAction({
        matches: 'Retail-Investment-Account'
    });
};