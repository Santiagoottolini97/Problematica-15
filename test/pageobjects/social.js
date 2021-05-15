class Social {
    get linkTwitter() {
        return $('li[class="social_twitter"] > a').getAttribute('href');
    }
    get linkFacebook() {
        return $('li[class="social_facebook"] > a').getAttribute('href');
    }
    get linkLinkedin() {
        return $('li[class="social_linkedin"]>a').getAttribute('href');
    }
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
