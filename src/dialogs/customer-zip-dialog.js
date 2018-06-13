module.exports = function(bot) {
    bot.dialog('CustomerZipDialog',
        (session) => {
            session.send('Could you please tell me your zip code');
            session.endDialog();
        }
    ).triggerAction({
        matches: 'Customer-Zip'
    })
};