module.exports = function(bot) {
    bot.dialog('FrListDialog',
        (session) => {
            session.send('Thank you for the information. <a href="https://www.northwesternmutual.com/financial-professionals/?address=53202%20North%20Milwaukee%20Street%2C%20Milwaukee%2C%20WI%2C%20USA&lat=43.0389005&lng=-87.90751940000001" target="_blank">Here is the list</a> of Advisors near you. Is there anything else i can help you with?');
            session.endDialog();
        }
    ).triggerAction({
        matches: 'FR-List'
    })
};