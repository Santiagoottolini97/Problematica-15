class Menu {
    get btnMenuOptions() {
        return $('button[id="react-burger-menu-btn"]').click();
    }
    get btnAllItems() {
        return $('a[id="inventory_sidebar_link"]').click();
    }
    get btnAbout() {
        return $('a[id="about_sidebar_link"]').click();
    }
    get btnResetAppState() {
        return $('a[id="reset_sidebar_link"]').click();
    }
    get btnLogout() {
        return $('a[id="logout_sidebar_link"]').click();
    }
}

module.exports = new Menu();
