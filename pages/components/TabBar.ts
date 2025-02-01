class TabBar {

    async openLogin () {
        await $('~Login').click();
    }

}

export default new TabBar()