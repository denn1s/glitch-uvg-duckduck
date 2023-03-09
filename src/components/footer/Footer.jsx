import '/src/components/footer/Footer.css'

this.DDG.templates.hp_onboarding_education = Handlebars.template((function(s, e, t, a, i) {
    this.compilerInfo = [4, ">= 1.0.0"],
    t = this.merge(t, s.helpers),
    i = i || {};
    var l, o = "", c = this;
    function n(s, e) {
        return '<img data-src="/assets/onboarding/bathroomguy/1-monster-v2--pre-animation.svg" class="onboarding-ed__image--placeholder js-hp-lazysvg" width="1200" height="460" loading="lazy" />',
        '<img data-src="/assets/onboarding/bathroomguy/1-monster-v2--pre-animation.svg" class="onboarding-ed__image--placeholder js-hp-lazysvg" width="1200" height="460" loading="lazy" />'
    }
    function r(s, e) {
        return '<img data-src="/assets/onboarding/bathroomguy/1-monster-v2--no-animation.svg" class="onboarding-ed__image--placeholder js-hp-lazysvg" width="1200" height="460" loading="lazy" />'
    }
    return o += '<div class="onboarding-ed js-onboarding-ed ' + (0,
    this.escapeExpression)("function" == typeof (l = e && e.extraClass) ? l.apply(e) : l) + '">',
    ((l = t.if.call(e, e && e.doRenderTeaserArrow, {
        hash: {},
        inverse: c.noop,
        fn: c.program(1, (function(s, e) {
            return ' <a class="onboarding-ed__arrow-teaser js-onboarding-ed-teaser"><img class="onboarding-ed__arrow-teaser__alpinist" src="/assets/onboarding/bathroomguy/teaser-2@2x.png" loading="lazy" width="80" height="64" /><div class="onboarding-ed__arrow-teaser__arrow-wrapper"><img class="onboarding-ed__arrow-teaser__arrow" src="/assets/onboarding/arrow.svg" loading="lazy" width="16" height="16" /></div></a>'
        }
        ), i),
        data: i
    })) || 0 === l) && (o += l),
    o += '<a class="onboarding-ed__arrow js-onboarding-ed-arrow"><img src="/assets/onboarding/arrow.svg" loading="lazy" width="24" height="24" /></a><div class="onboarding-ed__slide onboarding-ed__slide-1 js-onboarding-ed-slide js-onboarding-ed-slide-1"><div class="onboarding-ed__content"><h1 class="onboarding-ed__title js-onboarding-ed-balance-text">',
    ((l = t.lp.call(e, "homepage onboarding", "We don’t store your personal information. Ever.", {
        hash: {},
        data: i
    })) || 0 === l) && (o += l),
    o += '</h1><p class="onboarding-ed__subtitle js-onboarding-ed-balance-text">',
    ((l = t.lp.call(e, "homepage onboarding", "Our privacy policy is simple: we don’t collect or share any of your personal information.", {
        hash: {},
        data: i
    })) || 0 === l) && (o += l),
    o += '</p><div class="js-onboarding-ed-button-small-1"></div></div><div class="onboarding-ed__image-container js-onboarding-ed-image-container-1">',
    l = t.if.call(e, e && e.preventAnimation, {
        hash: {},
        inverse: c.program(5, (function(s, e) {
            var a;
            return (a = t.if.call(s, null == (a = s && s.model) || !1 === a ? a : a.isSVGAnimated, {
                hash: {},
                inverse: c.program(6, r, e),
                fn: c.program(3, n, e),
                data: e
            })) || 0 === a ? a : ""
        }
        ), i),
        fn: c.program(3, n, i),
        data: i
    }),
    (l || 0 === l) && (o += l),
    o += '</div></div><div class="onboarding-ed__slide onboarding-ed__slide-2 js-onboarding-ed-slide js-onboarding-ed-slide-2"><div class="onboarding-ed__content onboarding-ed__content--more-shadow"><h1 class="onboarding-ed__title js-onboarding-ed-balance-text">',
    ((l = t.lp.call(e, "homepage onboarding", "We don’t follow you around with ads.", {
        hash: {},
        data: i
    })) || 0 === l) && (o += l),
    o += '</h1><p class="onboarding-ed__subtitle js-onboarding-ed-balance-text">',
    ((l = t.lp.call(e, "homepage onboarding", "We don’t store your search history. We therefore have nothing to sell to advertisers that track you across the Internet.", {
        hash: {},
        data: i
    })) || 0 === l) && (o += l),
    o += '</p><div class="js-onboarding-ed-button-small-2"></div></div><div class="onboarding-ed__image-container js-onboarding-ed-image-container-2"><img data-src="/assets/onboarding/bathroomguy/2-ghost-v2.svg" class="onboarding-ed__image--placeholder js-hp-lazysvg" width="1200" height="460" loading="lazy" /></div></div><div class="onboarding-ed__slide onboarding-ed__slide-3 js-onboarding-ed-slide js-onboarding-ed-slide-3"><div class="onboarding-ed__content"><h1 class="onboarding-ed__title js-onboarding-ed-balance-text">',
    ((l = t.lp.call(e, "homepage onboarding", "We don’t track you in or out of private browsing mode.", {
        hash: {},
        data: i
    })) || 0 === l) && (o += l),
    o += '</h1><p class="onboarding-ed__subtitle js-onboarding-ed-balance-text">',
    ((l = t.lp.call(e, "homepage onboarding", "Other search engines track your searches even when you’re in private browsing mode. We don’t track you &mdash; period.", {
        hash: {},
        data: i
    })) || 0 === l) && (o += l),
    o += '</p><div class="js-onboarding-ed-button-small-3"></div></div><div class="onboarding-ed__image-container js-onboarding-ed-image-container-3">',
    ((l = t.if.call(e, null == (l = e && e.model) || !1 === l ? l : l.isSVGAnimated, {
        hash: {},
        inverse: c.program(10, (function(s, e) {
            return '<img data-src="/assets/onboarding/bathroomguy/3-bathtub-v2--no-animation.svg" class="onboarding-ed__image--placeholder js-hp-lazysvg" width="1200" height="460" loading="lazy" />'
        }
        ), i),
        fn: c.program(8, (function(s, e) {
            return '<img data-src="/assets/onboarding/bathroomguy/3-bathtub-v2--pre-animation.svg" class="onboarding-ed__image--placeholder js-hp-lazysvg" width="1200" height="460" loading="lazy" />'
        }
        ), i),
        data: i
    })) || 0 === l) && (o += l),
    o += '</div></div><div class="onboarding-ed__slide onboarding-ed__slide-4 js-onboarding-ed-slide js-onboarding-ed-slide-4"><div class="onboarding-ed__close"><span class="js-onboarding-ed-dismiss onboarding-ed__close-dismiss">',
    ((l = t.l.call(e, "Dismiss forever", {
        hash: {},
        data: i
    })) || 0 === l) && (o += l),
    o += '</span><span class="ddgsi onboarding-ed__close-divider">|</span> <span class="onboarding-ed__close-back js-onboarding-ed-back-to-search">',
    ((l = t.lp.call(e, "homepage onboarding", "Back to search", {
        hash: {},
        data: i
    })) || 0 === l) && (o += l),
    o += '</span> </div><div class="onboarding-ed__content js-onboarding-ed-install"><h1 class="onboarding-ed__title js-onboarding-ed-balance-text">',
    ((l = t.lp.call(e, "homepage onboarding", "Switch to DuckDuckGo and take back your privacy!", {
        hash: {},
        data: i
    })) || 0 === l) && (o += l),
    o += '</h1><p class="onboarding-ed__subtitle js-onboarding-ed-balance-text">',
    ((l = t.lp.call(e, "homepage onboarding", "No tracking, no ad targeting, just searching.", {
        hash: {},
        data: i
    })) || 0 === l) && (o += l),
    o += '</p><div class="js-onboarding-ed-button"></div></div><div class="onboarding-ed__content js-onboarding-ed-spread" style="display:none"><h1 class="onboarding-ed__title js-onboarding-ed-balance-text">',
    ((l = t.lp.call(e, "homepage onboarding", "Already a fan?", {
        hash: {},
        data: i
    })) || 0 === l) && (o += l),
    o += "<br>",
    l = t.if.call(e, e && e.newCTAs, {
        hash: {},
        inverse: c.program(14, (function(s, e) {
            var a;
            return (a = t.lp.call(s, "homepage onboarding", "Invite friends to the Duck Side!", {
                hash: {},
                data: e
            })) || 0 === a ? a : ""
        }
        ), i),
        fn: c.program(12, (function(s, e) {
            var a;
            return (a = t.lp.call(s, "onboarding_slide", "Don't let friends get tracked!", {
                hash: {},
                data: e
            })) || 0 === a ? a : ""
        }
        ), i),
        data: i
    }),
    (l || 0 === l) && (o += l),
    o += '</h1><p class="onboarding-ed__subtitle js-onboarding-ed-balance-text">',
    ((l = t.lp.call(e, "homepage onboarding", "Share DuckDuckGo and help friends take their privacy back!", {
        hash: {},
        data: i
    })) || 0 === l) && (o += l),
    o += "</p><div>",
    l = t.if.call(e, e && e.newCTAs, {
        hash: {},
        inverse: c.program(18, (function(s, e) {
            return '<a class="btn onboarding-ed__button onboarding-ed__tweet-button js-onboarding-ed-tweet-button" target="_blank" href="https://twitter.com/?status=DuckDuckGo%20is%20my%20search%20engine%20of%20choice.%20%23ComeToTheDuckSide%20-%20we%20have%20privacy.%20https%3A%2F%2Fduckduckgo.com%2F%231">Tweet #ComeToTheDuckSide</a>'
        }
        ), i),
        fn: c.program(16, (function(s, e) {
            var a, i = "";
            return i += '<a class="btn onboarding-ed__button onboarding-ed__tweet-button js-onboarding-ed-spread-button" href="https://duckduckgo.com/spread">',
            ((a = t.lp.call(s, "Mobile footer, homepage tagline", "Help Spread DuckDuckGo!", {
                hash: {},
                data: e
            })) || 0 === a) && (i += a),
            i += "</a>"
        }
        ), i),
        data: i
    }),
    (l || 0 === l) && (o += l),
    o += '</div></div><div class="onboarding-ed__image-container js-onboarding-ed-image-container-4"><img data-src="/assets/onboarding/bathroomguy/4-alpinist-v2.svg" class="onboarding-ed__image--placeholder js-hp-lazysvg" width="1200" height="460" loading="lazy" /></div></div></div>'
}
));