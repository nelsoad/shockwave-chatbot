module.exports = function(bot) {
    bot.dialog('CommonMistakesDialog',
        (session) => {
            session.send('Was the article helpful?');
            session.endDialog();
        }
    ).triggerAction({
        matches: 'Common-Mistakes'
    });
};