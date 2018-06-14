module.exports = function(bot) {
    bot.dialog('NoTimeDialog',
        (session) => {
            session.send('No problem. Someone will be in touch with you soon.');
            session.endDialog();
        }
    ).triggerAction({
        matches: 'No-Time'
    });
};