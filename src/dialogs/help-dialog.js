module.exports = function(bot) {
    bot.dialog('HelpDialog',
        (session) => {
            session.send('It seems like you need help. Can i help you?');
            session.endDialog();
        }
    ).triggerAction({
        matches: 'Help'
    });
}