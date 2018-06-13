module.exports = function(bot) {
    bot.dialog('ScheduleTime1Dialog',
        (session) => {
            setTimeout('', 1000);
            session.send('Would you like to schedule a time to talk with Jerry about opening a Roth IRA?');
            session.endDialog();
        }
    ).triggerAction({
        matches: 'Schedule-Time-1'
    });
};