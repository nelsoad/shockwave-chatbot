module.exports = function(bot) {
    bot.dialog('PlannerDialog',
        (session) => {
            session.send('Have you ever worked with a financial planner for advise');
            session.endDialog();
        }
    ).triggerAction({
        matches: 'Planner'
    })
};