module.exports = function(bot) {
    bot.dialog('FindRepDialog',
        (session) => {
            setTimeout('', 1000);
            session.send('I noticed you are an existing customer. Your rep is Jerry Megatron, right?');
            session.endDialog();
        }
    ).triggerAction({
        matches: 'Find-Rep'
    });
};