module.exports = function(bot) {
    bot.dialog('IssuesDialog',
        (session) => {
            setTimeout('', 1000);
            session.send('I am sorry to hear that you are facing issues. How can i help');
            session.endDialog();
        }
    ).triggerAction({
        matches: 'Issues'
    });
};