module.exports = function(bot) {
    bot.dialog('CustomerZipDialog',
        (session) => {
            setTimeout('', 1000);
            session.send('Could you please tell me your zip code');
            session.endDialog();
        }
    ).triggerAction({
        matches: 'Customer-Zip'
    })
};