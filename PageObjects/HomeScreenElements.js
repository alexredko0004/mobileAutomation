class HomeScreenElements {
    get plusBtn(){
        return $('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]');
    }
    get textOption(){
        return $('//android.widget.ListView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/select_dialog_listview"]/android.widget.LinearLayout[1]')
    }
    get checklistOption(){
        return $('//android.widget.ListView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/select_dialog_listview"]/android.widget.LinearLayout[2]')
    }
    get mainList(){
        return $('//android.widget.ListView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/note_list"]')
    }
    
}

module.exports = new HomeScreenElements()