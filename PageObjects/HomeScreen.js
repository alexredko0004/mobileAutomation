const HomeScreenElements = require('./HomeScreenElements')

class HomeScreen {
    async addNewText(){
        await HomeScreenElements.plusBtn.click()
        await HomeScreenElements.textOption.click()
    }
    async addNewChecklist(){
        await HomeScreenElements.plusBtn.click()
        await HomeScreenElements.checklistOption.click()
    }
}

module.exports = new HomeScreen()


