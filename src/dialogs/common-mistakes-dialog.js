module.exports = function(bot) {
    bot.dialog('CommonMistakesDialog',
        (session) => {
            setTimeout('', 1000);
            session.send('Was the article helpful?');
            session.endDialog();
        }
    ).triggerAction({
        matches: 'Common-Mistakes'
    });
};