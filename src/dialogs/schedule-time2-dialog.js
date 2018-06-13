module.exports = function(bot) {
    bot.dialog('ScheduleTime2Dialog',
        (session) => {
            session.send('Would tomorrow at 9 am work?');
            session.endDialog();
        }
    ).triggerAction({
        matches: 'Schedule-Time-2'
    });
};