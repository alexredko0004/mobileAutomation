const Onboarding = require('../PageObjects/helpers/accomplishOnboarding')
const HomeScreen = require('../PageObjects/HomeScreen')
const EditNoteScreen = require('../PageObjects/EditNoteScreen')
const HomeScreenElements = require('../PageObjects/HomeScreenElements')

describe ('Tests using POM', ()=>{
    it('Verify that new text note can be added', async()=>{
        await Onboarding.openApp()
        const itemsBeforeAdding = await HomeScreenElements.mainList.$$('//android.widget.RelativeLayout').length
        console.log(itemsBeforeAdding)
        await HomeScreen.addNewText()
        await EditNoteScreen.addNewText('BIG note')
        await EditNoteScreen.changeTitle('Title 1')
        await EditNoteScreen.saveChanges()
        await EditNoteScreen.saveChanges()
        const itemsAfterAdding = await HomeScreenElements.mainList.$$('//android.widget.RelativeLayout').length
        console.log(itemsAfterAdding)
        expect(itemsAfterAdding).to.equal(itemsBeforeAdding+1);
    })
})