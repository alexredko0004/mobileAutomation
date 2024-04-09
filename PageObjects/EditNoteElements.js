class EditNoteElements {
    get textField(){
        return $('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
    }
    get titleField(){
        return $('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
    }
    get doneBtn(){
        return $('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/back_btn"]')
    }
    
}

module.exports = new EditNoteElements()