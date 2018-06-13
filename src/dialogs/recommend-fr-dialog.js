module.exports = function(bot) {
    bot.dialog('RecommendFRDialog',
        (session) => {
            session.send('Can i recommend you one?');
            setTimeout('', 2000);
            session.send('I can suggest some advisors based on your specific needs');
            setTimeout('', 5000);
            session.send('And the advise is free :-)');
            session.endDialog();
        }
    ).triggerAction({
        matches: 'Recommend-FR'
    })
};