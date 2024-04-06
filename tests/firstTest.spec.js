describe ('Some mobile tests', ()=>{
    it('Verify that OS module has specific list items', async()=>{
        const osBtn = await $('//android.widget.TextView[@content-desc="OS"]');
        await osBtn.click();
        const listMorseCode = await $('(//android.widget.TextView[@content-desc])[1]');
        const listRotationVector = await $('(//android.widget.TextView[@content-desc])[2]');
        const listSensors = await $('(//android.widget.TextView[@content-desc])[3]');
        const listSMS = await $('(//android.widget.TextView[@content-desc])[4]');
        await expect(listMorseCode).toHaveText('Morse Code');
        await expect(listRotationVector).toHaveText('Rotation Vector');
        await expect(listSensors).toHaveText('Sensors');
        await expect(listSMS).toHaveText('SMS Messaging');
    })
})