module.exports = function(bot) {
    bot.dialog('ScheduleTime3Dialog',
        (session) => {
            setTimeout('', 1000);
            session.send('How about Friday at 11 am?');
            session.endDialog();
        }
    ).triggerAction({
        matches: 'Schedule-Time-3'
    });
};