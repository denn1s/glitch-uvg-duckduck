import '/src/components/footer/Footer.css'

this.DDG.templates.hp_onboarding_education = Handlebars.template((function(s, e, t, a, i) {
    this.compilerInfo = [4, ">= 1.0.0"],
    t = this.merge(t, s.helpers),
    i = i || {};
    var l, o = "", c = this;
    return o += '<div class="onboarding-ed js-onboarding-ed ' + (0,
    this.escapeExpression)("function" == typeof (l = e && e.extraClass) ? l.apply(e) : l) + '">',
    ((l = t.lp.call(e, "homepage onboarding", "We don’t store your personal information. Ever.", {
        hash: {},
        data: i
    })) || 0 === l) && (o += l),
    o += '</h1><p class="onboarding-ed__subtitle js-onboarding-ed-balance-text">',
    ((l = t.lp.call(e, "homepage onboarding", "Our privacy policy is simple: we don’t collect or share any of your personal information.", {
        hash: {},
        data: i
    })) || 0 === l) && (o += l),
    o += '</p><div class="js-onboarding-ed-button-small-1"></div></div><div class="onboarding-ed__image-container js-onboarding-ed-image-container-1">'
}
))