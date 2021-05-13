class Social {
    get btnTwitter() {
        return $('a[href="https://twitter.com/saucelabs"]').click();
    }
    get btnFacebook() {
        return $('a[href="https://www.facebook.com/saucelabs"]').click();
    }
    get btnLinkedin() {
        return $('a[href="https://www.linkedin.com/company/sauce-labs/"]').click();
    }
}

module.exports = new Social();
