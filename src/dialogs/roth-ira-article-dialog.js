module.exports = function(bot) {
    bot.dialog('RothIRADialog',
        (session) => {
            setTimeout('', 1000);
            session.send('I see you liked our article on "why you should consider a roth IRA"');
            session.endDialog();
        }
    ).triggerAction({
        matches: 'Roth-IRA-Article'
    });
};