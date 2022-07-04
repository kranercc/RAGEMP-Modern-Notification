mp.events.add('setDiscordStatus', (serverName, status) => {
    mp.discord.update(serverName, status)
});
browser = mp.browsers.new('package://krane_notificaton/index.html');

mp.events.add("Notify", ( data ) => {
    browser.execute(`Send_Notification({
        name: '${data.name}',
        contents: '${data.text}',
        duration: 5, // this is such a joke since it doesnt work lmao
        });
    `);
});

