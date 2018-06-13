module.exports = function(bot) {
    bot.dialog('FrListDialog',
        (session) => {
            setTimeout('', 1000);
            session.send('Thank you for the information. Here is the list of Advisors near you');
            window.open("https://www.northwesternmutual.com/financial-professionals/?address=53202%20North%20Milwaukee%20Street%2C%20Milwaukee%2C%20WI%2C%20USA&lat=43.0389005&lng=-87.90751940000001");
            setTimeout('', 1000);
            session.send('Is there anything else i can help you with?');
            session.endDialog();
        }
    ).triggerAction({
        matches: 'FR-List'
    })
};