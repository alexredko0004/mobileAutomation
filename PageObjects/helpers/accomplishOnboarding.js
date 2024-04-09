class Onboarding {
    async accomplishOnboarding(){
        await $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_deny_button"]').click()
        await $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]').click()
    }
    async openApp(){
        await $('//android.widget.TextView[@content-desc="ColorNote"]').click()
    }
}

module.exports = new Onboarding()