const EditNoteElements = require('./EditNoteElements')

class EditNoteScreen {
    async addNewText(text){
        await EditNoteElements.textField.clearValue()
        await EditNoteElements.textField.addValue(text)
    }
    async changeTitle(text){
        await EditNoteElements.titleField.clearValue()
        await EditNoteElements.titleField.addValue(text)
    }
    async saveChanges(){
        await EditNoteElements.doneBtn.click()
    }
    
}

module.exports = new EditNoteScreen()