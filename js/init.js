
function arlo_tm_popup_news() {
  'use strict';
  var e = jQuery('.arlo_tm_news .news_inner ul li'),
    t = jQuery('.arlo_tm_popup_news'),
    r = t.find('.news_inner'),
    o = t.find('.closer');
  jQuery(window).width() >= 1040 &&
    (e.each(function () {
      var e = jQuery(this),
        o = e.find('.link,.title a'),
        a = e.html(),
        n = e.find('.image .main'),
        l = n.data('img-url'),
        i = e.find('.title'),
        s = i.find('a').html();
      o.on('click', function () {
        return (
          t.addClass('opened'),
          r.html(a),
          (n = r.find('.image .main')).css({
            backgroundImage: 'url(' + l + ')',
          }),
          (i = r.find('.title')).html(s),
          !1
        );
      });
    }),
    o.on('click', function () {
      return t.removeClass('opened'), r.html(''), !1;
    }));
}
function arlo_tm_popupscroll() {
  'use strict';
  var e = jQuery(window).height(),
    t = jQuery('.arlo_tm_popup_news.scrollable');
  jQuery('.arlo_tm_popup_news').css({ height: e - 100 }),
    t.each(function () {
      var e = jQuery(this),
        t = jQuery(window).height();
      e.css({ height: t }),
        e.niceScroll({
          touchbehavior: !1,
          cursorwidth: 0,
          autohidemode: !0,
          cursorborder: '0px solid #fff',
        });
    });
}
function arlo_tm_popup() {
  'use strict';
  jQuery('.gallery_zoom').each(function () {
    jQuery(this).magnificPopup({
      delegate: 'a.zoom',
      type: 'image',
      gallery: { enabled: !0 },
      removalDelay: 300,
      mainClass: 'mfp-fade',
    });
  }),
    jQuery('.popup-youtube').each(function () {
      jQuery(this).magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1,
      });
    });
}
function arlo_tm_anchor() {
  'use strict';
  jQuery(
    '.arlo_tm_leftpart .inner .menu ul li a,.arlo_tm_topbar .dropdown .dropdown_inner ul li a'
  )
    .off()
    .on('click', function (e) {
      e.stopPropagation();
      var t = jQuery(this).attr('href');
      return (
        '#' !== t &&
          '#' === t.charAt(0) &&
          $('html, body').animate({ scrollTop: $(t).offset().top }, 1e3),
        !1
      );
    }),
    jQuery('.arlo_tm_classic_menu .inner .menu ul li a')
      .off()
      .on('click', function (e) {
        e.stopPropagation();
        var t = jQuery(this).attr('href');
        return (
          '#' !== t &&
            '#' === t.charAt(0) &&
            $('html, body').animate({ scrollTop: $(t).offset().top - 90 }, 1e3),
          !1
        );
      });
}
function arlo_tm_down() {
  'use strict';
  jQuery('.arlo_tm_arrow_wrap a').on('click', function () {
    return (
      '#' !== $.attr(this, 'href') &&
        $('html, body').animate(
          { scrollTop: $($.attr(this, 'href')).offset().top },
          1e3
        ),
      !1
    );
  }),
    jQuery('.arlo_tm_arrow_classic a').on('click', function () {
      return (
        '#' !== $.attr(this, 'href') &&
          $('html, body').animate(
            { scrollTop: $($.attr(this, 'href')).offset().top - 90 },
            1e3
          ),
        !1
      );
    }),
    jQuery('.arlo_tm_extra_hero_content .button_two a').on(
      'click',
      function () {
        return (
          '#' !== $.attr(this, 'href') &&
            $('html, body').animate(
              { scrollTop: $($.attr(this, 'href')).offset().top },
              1e3
            ),
          !1
        );
      }
    );
}
function arlo_tm_imgtosvg() {
  'use strict';
  jQuery('img.svg').each(function () {
    var e = jQuery(this),
      t = e.attr('class'),
      r = e.attr('src');
    jQuery.get(
      r,
      function (r) {
        var o = jQuery(r).find('svg');
        void 0 !== t && (o = o.attr('class', t + ' replaced-svg')),
          (o = o.removeAttr('xmlns:a')),
          e.replaceWith(o);
      },
      'xml'
    );
  });
}
function arlo_tm_kenburn_slider() {
  'use strict';
  jQuery(function () {
    jQuery('.arlo_tm_hero_header .overlay_slider').vegas({
      timer: !1,
      animation: ['kenburnsUp', 'kenburnsLeft', 'kenburnsRight'],
      delay: 7e3,
      slides: [
        { src: 'img/slider/4.jpeg' },
        { src: 'img/slider/5.jpg' },
        { src: 'img/slider/6.jpg' },
      ],
    });
  });
}
function arlo_tm_scrollable() {
  'use strict';
  var e = jQuery(window).height(),
    t = jQuery('.arlo_tm_leftpart .inner .menu.scrollable'),
    r = jQuery('.arlo_tm_leftpart .inner .menu'),
    o = jQuery('.arlo_tm_leftpart .inner .logo').outerHeight(),
    a = jQuery('.arlo_tm_leftpart .inner .bottom').outerHeight() + 100;
  r.css({ height: e - o - a }),
    t.each(function () {
      jQuery(this)
        .css({ height: e - o - a })
        .niceScroll({
          touchbehavior: !1,
          cursorwidth: 0,
          autohidemode: !0,
          cursorborder: '0px solid #eee',
        });
    });
}
function arlo_tm_switcher() {
  'use strict';
  var e = jQuery('.arlo_tm_leftpart .inner .resize'),
    t = jQuery('.arlo_tm_leftpart .inner .resize a span'),
    r = jQuery('.arlo_tm_leftpart'),
    o = jQuery('.arlo_tm_rightpart'),
    a = jQuery(window).width();
  e.on('click', function () {
    return (
      a >= 1600
        ? e.hasClass('opened')
          ? (e.removeClass('opened'),
            t.removeClass('opened'),
            r.removeClass('opened'),
            o.removeClass('opened'))
          : (e.addClass('opened'),
            t.addClass('opened'),
            r.addClass('opened'),
            o.addClass('opened'))
        : e.hasClass('opened')
        ? (e.removeClass('opened'),
          t.removeClass('opened'),
          r.removeClass('opened2'),
          o.removeClass('opened'))
        : (e.addClass('opened'),
          t.addClass('opened'),
          r.addClass('opened2'),
          o.addClass('opened')),
      
      jQuery('.jarallax').length &&
        (jQuery('.jarallax').jarallax('destroy'),
        setTimeout(function () {
          arlo_tm_jarallax();
        }, 300)),
      !1
    );
  });
}
function arlo_mobile_menu() {
  'use strict';
  var e = jQuery('.arlo_tm_topbar .topbar_inner .trigger'),
    t = e.find('a .close'),
    r = e.find('a .menu'),
    o = jQuery('.arlo_tm_topbar .dropdown');
  e.on('click', function () {
    var e = jQuery(this);
    return (
      e.hasClass('opened')
        ? (e.removeClass('opened'),
          r.removeClass('closed'),
          t.removeClass('opened'),
          o.slideUp())
        : (e.addClass('opened'),
          r.addClass('closed'),
          t.addClass('opened'),
          o.slideDown()),
      !1
    );
  });
}
function arlo_tm_data_images() {
  'use strict';
  jQuery('*[data-img-url]').each(function () {
    var e = jQuery(this),
      t = e.data('img-url');
    e.css({ backgroundImage: 'url(' + t + ')' });
  });
}
function arlo_tm_animate_text() {
  'use strict';
  jQuery('.arlo_tm_animation_text_word').typed({
    strings: ['Freelancer', 'Web Developer', 'Photographer'],
    loop: !0,
    startDelay: 1e3,
    backDelay: 2e3,
  });
}
function arlo_tm_jarallax() {
  'use strict';
  jQuery('.jarallax').each(function () {
    var e = jQuery(this),
      t = e.data('speed');
    (t = 'undefined' !== t && '' !== t ? t : 0.5),
      e.jarallax({ speed: t, automaticResize: !0 });
  });
}
function tdProgress(e) {
  'use strict';
  e.find('.progress_inner').each(function () {
    var e = jQuery(this),
      t = parseInt(e.data('value'), 10),
      r = e.data('color'),
      o = e.find('.bar');
    e.find('.bar_in').css({ width: t + '%', backgroundColor: r }),
      setTimeout(function () {
        o.addClass('open');
      });
  });
}
function arlo_tm_portfolio() {
  'use strict';
  if (jQuery().isotope) {
    var e = jQuery('.arlo_tm_portfolio .portfolio_list ul'),
      t = jQuery('.arlo_tm_portfolio .portfolio_filter ul');
    t.length &&
      (t.find('a').on('click', function () {
        var t = jQuery(this).attr('data-filter');
        return (
          e.isotope({
            filter: t,
            animationOptions: { duration: 750, easing: 'linear', queue: !1 },
          }),
          !1
        );
      }),
      t.find('a').on('click', function () {
        return (
          t.find('a').removeClass('current'),
          jQuery(this).addClass('current'),
          !1
        );
      }));
  }
}
function arlo_tm_projects() {
  'use strict';
  jQuery('.arlo_tm_portfolio_animation_wrap').each(function () {
    jQuery(this)
      .on('mouseenter', function () {
        jQuery(this).data('title') &&
          (jQuery('.arlo_tm_portfolio_titles').html(
            jQuery(this).data('title') +
              '<span class="work__cat">' +
              jQuery(this).data('category') +
              '</span>'
          ),
          jQuery('.arlo_tm_portfolio_titles').addClass('visible')),
          jQuery(document).on('mousemove', function (e) {
            jQuery('.arlo_tm_portfolio_titles').css({
              left: e.clientX - 10,
              top: e.clientY + 25,
            });
          });
      })
      .on('mouseleave', function () {
        jQuery('.arlo_tm_portfolio_titles').removeClass('visible');
      });
  });
}
function arlo_tm_contact_form() {
  'use strict';
  jQuery('.contact_form #send_message').on('click', function () {
    var e = jQuery('.contact_form #name').val(),
      t = jQuery('.contact_form #email').val(),
      r = jQuery('.contact_form #message').val(),
      o = jQuery('.contact_form #subject').val(),
      a = jQuery('.contact_form .returnmessage').data('success');
    return (
      jQuery('.contact_form .returnmessage').empty(),
      '' === e || '' === t || '' === r
        ? jQuery('div.empty_notice').slideDown(500).delay(2e3).slideUp(500)
        : jQuery.post(
            'modal/contact.php',
            { ajax_name: e, ajax_email: t, ajax_message: r, ajax_subject: o },
            function (e) {
              jQuery('.contact_form .returnmessage').append(e),
                jQuery('.contact_form .returnmessage span.contact_error').length
                  ? jQuery('.contact_form .returnmessage')
                      .slideDown(500)
                      .delay(2e3)
                      .slideUp(500)
                  : (jQuery('.contact_form .returnmessage').append(
                      "<span class='contact_success'>" + a + '</span>'
                    ),
                    jQuery('.contact_form .returnmessage')
                      .slideDown(500)
                      .delay(4e3)
                      .slideUp(500)),
                '' === e && jQuery('#contact_form')[0].reset();
            }
          ),
      !1
    );
  });
}
function arlo_tm_location() {
  jQuery('.href_location').on('click', function () {
    var e = jQuery(this).text();
    e = e.replace(/\ /g, '+');
    return window.open('https://maps.google.com?q=' + e), !1;
  });
}
function arlo_tm_totop() {
  'use strict';
  jQuery('.arlo_tm_footer .footer_inner .top a').on('click', function (e) {
    return (
      e.preventDefault(),
      jQuery('html, body').animate({ scrollTop: 0 }, 'slow'),
      !1
    );
  });
}
function arlo_tm_about_animation() {
  'use strict';
  if ($('.parallax').length > 0) {
    var e = $('.parallax').get(0);
    new Parallax(e, {
      relativeInput: !0,
      onReady: function () {
        console.log('ready!');
      },
    });
  }
}
jQuery(document).ready(function () {
  'use strict';
  arlo_tm_popup_news(),
    arlo_tm_popupscroll(),
    arlo_tm_popup(),
    arlo_tm_anchor(),
    arlo_tm_down(),
    arlo_tm_imgtosvg(),
    arlo_tm_scrollable(),
    arlo_tm_switcher(),
    arlo_mobile_menu(),
    arlo_tm_kenburn_slider(),
    arlo_tm_data_images(),
    arlo_tm_animate_text(),
    arlo_tm_jarallax(),
    arlo_tm_portfolio(),
    arlo_tm_projects(),
    arlo_tm_contact_form(),
    arlo_tm_location(),
    arlo_tm_totop(),
    arlo_tm_about_animation(),
    jQuery(window).on('resize', function () {
      arlo_tm_scrollable();
    }),
    jQuery(window).on('scroll', function () {
      arlo_tm_popupscroll();
    }),
    jQuery(window).load('body', function () {
      setTimeout(function () {
        jQuery('.arlo_tm_preloader').addClass('loaded');
      }, 1e3);
    });
}),
  new WOW().init(),
  jQuery('.arlo_progress').each(function () {
    'use strict';
    var e = jQuery(this);
    e.waypoint({
      handler: function () {
        tdProgress(e);
      },
      offset: '90%',
    });
  });
!(function (t) {
  if ('object' == typeof exports && 'undefined' != typeof module)
    module.exports = t();
  else if ('function' == typeof define && define.amd) define([], t);
  else {
    ('undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : 'undefined' != typeof self
      ? self
      : this
    ).Parallax = t();
  }
})(function () {
  return (function t(e, i, n) {
    function o(r, a) {
      if (!i[r]) {
        if (!e[r]) {
          var l = 'function' == typeof require && require;
          if (!a && l) return l(r, !0);
          if (s) return s(r, !0);
          var h = new Error("Cannot find module '" + r + "'");
          throw ((h.code = 'MODULE_NOT_FOUND'), h);
        }
        var u = (i[r] = { exports: {} });
        e[r][0].call(
          u.exports,
          function (t) {
            var i = e[r][1][t];
            return o(i || t);
          },
          u,
          u.exports,
          t,
          e,
          i,
          n
        );
      }
      return i[r].exports;
    }
    for (
      var s = 'function' == typeof require && require, r = 0;
      r < n.length;
      r++
    )
      o(n[r]);
    return o;
  })(
    {
      1: [
        function (t, e, i) {
          'use strict';
          function n(t) {
            if (null === t || void 0 === t)
              throw new TypeError(
                'Object.assign cannot be called with null or undefined'
              );
            return Object(t);
          }
          var o = Object.getOwnPropertySymbols,
            s = Object.prototype.hasOwnProperty,
            r = Object.prototype.propertyIsEnumerable;
          e.exports = (function () {
            try {
              if (!Object.assign) return !1;
              var t = new String('abc');
              if (((t[5] = 'de'), '5' === Object.getOwnPropertyNames(t)[0]))
                return !1;
              for (var e = {}, i = 0; i < 10; i++)
                e['_' + String.fromCharCode(i)] = i;
              if (
                '0123456789' !==
                Object.getOwnPropertyNames(e)
                  .map(function (t) {
                    return e[t];
                  })
                  .join('')
              )
                return !1;
              var n = {};
              return (
                'abcdefghijklmnopqrst'.split('').forEach(function (t) {
                  n[t] = t;
                }),
                'abcdefghijklmnopqrst' ===
                  Object.keys(Object.assign({}, n)).join('')
              );
            } catch (t) {
              return !1;
            }
          })()
            ? Object.assign
            : function (t, e) {
                for (var i, a, l = n(t), h = 1; h < arguments.length; h++) {
                  i = Object(arguments[h]);
                  for (var u in i) s.call(i, u) && (l[u] = i[u]);
                  if (o) {
                    a = o(i);
                    for (var c = 0; c < a.length; c++)
                      r.call(i, a[c]) && (l[a[c]] = i[a[c]]);
                  }
                }
                return l;
              };
        },
        {},
      ],
      2: [
        function (t, e, i) {
          (function (t) {
            (function () {
              var i, n, o, s, r, a;
              'undefined' != typeof performance &&
              null !== performance &&
              performance.now
                ? (e.exports = function () {
                    return performance.now();
                  })
                : void 0 !== t && null !== t && t.hrtime
                ? ((e.exports = function () {
                    return (i() - r) / 1e6;
                  }),
                  (n = t.hrtime),
                  (s = (i = function () {
                    var t;
                    return 1e9 * (t = n())[0] + t[1];
                  })()),
                  (a = 1e9 * t.uptime()),
                  (r = s - a))
                : Date.now
                ? ((e.exports = function () {
                    return Date.now() - o;
                  }),
                  (o = Date.now()))
                : ((e.exports = function () {
                    return new Date().getTime() - o;
                  }),
                  (o = new Date().getTime()));
            }.call(this));
          }.call(this, t('_process')));
        },
        { _process: 3 },
      ],
      3: [
        function (t, e, i) {
          function n() {
            throw new Error('setTimeout has not been defined');
          }
          function o() {
            throw new Error('clearTimeout has not been defined');
          }
          function s(t) {
            if (c === setTimeout) return setTimeout(t, 0);
            if ((c === n || !c) && setTimeout)
              return (c = setTimeout), setTimeout(t, 0);
            try {
              return c(t, 0);
            } catch (e) {
              try {
                return c.call(null, t, 0);
              } catch (e) {
                return c.call(this, t, 0);
              }
            }
          }
          function r(t) {
            if (d === clearTimeout) return clearTimeout(t);
            if ((d === o || !d) && clearTimeout)
              return (d = clearTimeout), clearTimeout(t);
            try {
              return d(t);
            } catch (e) {
              try {
                return d.call(null, t);
              } catch (e) {
                return d.call(this, t);
              }
            }
          }
          function a() {
            v &&
              p &&
              ((v = !1),
              p.length ? (f = p.concat(f)) : (y = -1),
              f.length && l());
          }
          function l() {
            if (!v) {
              var t = s(a);
              v = !0;
              for (var e = f.length; e; ) {
                for (p = f, f = []; ++y < e; ) p && p[y].run();
                (y = -1), (e = f.length);
              }
              (p = null), (v = !1), r(t);
            }
          }
          function h(t, e) {
            (this.fun = t), (this.array = e);
          }
          function u() {}
          var c,
            d,
            m = (e.exports = {});
          !(function () {
            try {
              c = 'function' == typeof setTimeout ? setTimeout : n;
            } catch (t) {
              c = n;
            }
            try {
              d = 'function' == typeof clearTimeout ? clearTimeout : o;
            } catch (t) {
              d = o;
            }
          })();
          var p,
            f = [],
            v = !1,
            y = -1;
          (m.nextTick = function (t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
              for (var i = 1; i < arguments.length; i++)
                e[i - 1] = arguments[i];
            f.push(new h(t, e)), 1 !== f.length || v || s(l);
          }),
            (h.prototype.run = function () {
              this.fun.apply(null, this.array);
            }),
            (m.title = 'browser'),
            (m.browser = !0),
            (m.env = {}),
            (m.argv = []),
            (m.version = ''),
            (m.versions = {}),
            (m.on = u),
            (m.addListener = u),
            (m.once = u),
            (m.off = u),
            (m.removeListener = u),
            (m.removeAllListeners = u),
            (m.emit = u),
            (m.prependListener = u),
            (m.prependOnceListener = u),
            (m.listeners = function (t) {
              return [];
            }),
            (m.binding = function (t) {
              throw new Error('process.binding is not supported');
            }),
            (m.cwd = function () {
              return '/';
            }),
            (m.chdir = function (t) {
              throw new Error('process.chdir is not supported');
            }),
            (m.umask = function () {
              return 0;
            });
        },
        {},
      ],
      4: [
        function (t, e, i) {
          (function (i) {
            for (
              var n = t('performance-now'),
                o = 'undefined' == typeof window ? i : window,
                s = ['moz', 'webkit'],
                r = 'AnimationFrame',
                a = o['request' + r],
                l = o['cancel' + r] || o['cancelRequest' + r],
                h = 0;
              !a && h < s.length;
              h++
            )
              (a = o[s[h] + 'Request' + r]),
                (l = o[s[h] + 'Cancel' + r] || o[s[h] + 'CancelRequest' + r]);
            if (!a || !l) {
              var u = 0,
                c = 0,
                d = [];
              (a = function (t) {
                if (0 === d.length) {
                  var e = n(),
                    i = Math.max(0, 1e3 / 60 - (e - u));
                  (u = i + e),
                    setTimeout(function () {
                      var t = d.slice(0);
                      d.length = 0;
                      for (var e = 0; e < t.length; e++)
                        if (!t[e].cancelled)
                          try {
                            t[e].callback(u);
                          } catch (t) {
                            setTimeout(function () {
                              throw t;
                            }, 0);
                          }
                    }, Math.round(i));
                }
                return d.push({ handle: ++c, callback: t, cancelled: !1 }), c;
              }),
                (l = function (t) {
                  for (var e = 0; e < d.length; e++)
                    d[e].handle === t && (d[e].cancelled = !0);
                });
            }
            (e.exports = function (t) {
              return a.call(o, t);
            }),
              (e.exports.cancel = function () {
                l.apply(o, arguments);
              }),
              (e.exports.polyfill = function () {
                (o.requestAnimationFrame = a), (o.cancelAnimationFrame = l);
              });
          }.call(
            this,
            'undefined' != typeof global
              ? global
              : 'undefined' != typeof self
              ? self
              : 'undefined' != typeof window
              ? window
              : {}
          ));
        },
        { 'performance-now': 2 },
      ],
      5: [
        function (t, e, i) {
          'use strict';
          function n(t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          }
          var o = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var n = e[i];
                  (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    'value' in n && (n.writable = !0),
                    Object.defineProperty(t, n.key, n);
                }
              }
              return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e;
              };
            })(),
            s = t('raf'),
            r = t('object-assign'),
            a = {
              propertyCache: {},
              vendors: [
                null,
                ['-webkit-', 'webkit'],
                ['-moz-', 'Moz'],
                ['-o-', 'O'],
                ['-ms-', 'ms'],
              ],
              clamp: function (t, e, i) {
                return e < i
                  ? t < e
                    ? e
                    : t > i
                    ? i
                    : t
                  : t < i
                  ? i
                  : t > e
                  ? e
                  : t;
              },
              data: function (t, e) {
                return a.deserialize(t.getAttribute('data-' + e));
              },
              deserialize: function (t) {
                return (
                  'true' === t ||
                  ('false' !== t &&
                    ('null' === t
                      ? null
                      : !isNaN(parseFloat(t)) && isFinite(t)
                      ? parseFloat(t)
                      : t))
                );
              },
              camelCase: function (t) {
                return t.replace(/-+(.)?/g, function (t, e) {
                  return e ? e.toUpperCase() : '';
                });
              },
              accelerate: function (t) {
                a.css(t, 'transform', 'translate3d(0,0,0) rotate(0.0001deg)'),
                  a.css(t, 'transform-style', 'preserve-3d'),
                  a.css(t, 'backface-visibility', 'hidden');
              },
              transformSupport: function (t) {
                for (
                  var e = document.createElement('div'),
                    i = !1,
                    n = null,
                    o = !1,
                    s = null,
                    r = null,
                    l = 0,
                    h = a.vendors.length;
                  l < h;
                  l++
                )
                  if (
                    (null !== a.vendors[l]
                      ? ((s = a.vendors[l][0] + 'transform'),
                        (r = a.vendors[l][1] + 'Transform'))
                      : ((s = 'transform'), (r = 'transform')),
                    void 0 !== e.style[r])
                  ) {
                    i = !0;
                    break;
                  }
                switch (t) {
                  case '2D':
                    o = i;
                    break;
                  case '3D':
                    if (i) {
                      var u = document.body || document.createElement('body'),
                        c = document.documentElement,
                        d = c.style.overflow,
                        m = !1;
                      document.body ||
                        ((m = !0),
                        (c.style.overflow = 'hidden'),
                        c.appendChild(u),
                        (u.style.overflow = 'hidden'),
                        (u.style.background = '')),
                        u.appendChild(e),
                        (e.style[r] = 'translate3d(1px,1px,1px)'),
                        (o =
                          void 0 !==
                            (n = window
                              .getComputedStyle(e)
                              .getPropertyValue(s)) &&
                          n.length > 0 &&
                          'none' !== n),
                        (c.style.overflow = d),
                        u.removeChild(e),
                        m &&
                          (u.removeAttribute('style'),
                          u.parentNode.removeChild(u));
                    }
                }
                return o;
              },
              css: function (t, e, i) {
                var n = a.propertyCache[e];
                if (!n)
                  for (var o = 0, s = a.vendors.length; o < s; o++)
                    if (
                      ((n =
                        null !== a.vendors[o]
                          ? a.camelCase(a.vendors[o][1] + '-' + e)
                          : e),
                      void 0 !== t.style[n])
                    ) {
                      a.propertyCache[e] = n;
                      break;
                    }
                t.style[n] = i;
              },
            },
            l = {
              relativeInput: !1,
              clipRelativeInput: !1,
              inputElement: null,
              hoverOnly: !1,
              calibrationThreshold: 100,
              calibrationDelay: 500,
              supportDelay: 500,
              calibrateX: !1,
              calibrateY: !0,
              invertX: !0,
              invertY: !0,
              limitX: !1,
              limitY: !1,
              scalarX: 10,
              scalarY: 10,
              frictionX: 0.1,
              frictionY: 0.1,
              originX: 0.5,
              originY: 0.5,
              pointerEvents: !1,
              precision: 1,
              onReady: null,
              selector: null,
            },
            h = (function () {
              function t(e, i) {
                n(this, t), (this.element = e);
                var o = {
                  calibrateX: a.data(this.element, 'calibrate-x'),
                  calibrateY: a.data(this.element, 'calibrate-y'),
                  invertX: a.data(this.element, 'invert-x'),
                  invertY: a.data(this.element, 'invert-y'),
                  limitX: a.data(this.element, 'limit-x'),
                  limitY: a.data(this.element, 'limit-y'),
                  scalarX: a.data(this.element, 'scalar-x'),
                  scalarY: a.data(this.element, 'scalar-y'),
                  frictionX: a.data(this.element, 'friction-x'),
                  frictionY: a.data(this.element, 'friction-y'),
                  originX: a.data(this.element, 'origin-x'),
                  originY: a.data(this.element, 'origin-y'),
                  pointerEvents: a.data(this.element, 'pointer-events'),
                  precision: a.data(this.element, 'precision'),
                  relativeInput: a.data(this.element, 'relative-input'),
                  clipRelativeInput: a.data(
                    this.element,
                    'clip-relative-input'
                  ),
                  hoverOnly: a.data(this.element, 'hover-only'),
                  inputElement: document.querySelector(
                    a.data(this.element, 'input-element')
                  ),
                  selector: a.data(this.element, 'selector'),
                };
                for (var s in o) null === o[s] && delete o[s];
                r(this, l, o, i),
                  this.inputElement || (this.inputElement = this.element),
                  (this.calibrationTimer = null),
                  (this.calibrationFlag = !0),
                  (this.enabled = !1),
                  (this.depthsX = []),
                  (this.depthsY = []),
                  (this.raf = null),
                  (this.bounds = null),
                  (this.elementPositionX = 0),
                  (this.elementPositionY = 0),
                  (this.elementWidth = 0),
                  (this.elementHeight = 0),
                  (this.elementCenterX = 0),
                  (this.elementCenterY = 0),
                  (this.elementRangeX = 0),
                  (this.elementRangeY = 0),
                  (this.calibrationX = 0),
                  (this.calibrationY = 0),
                  (this.inputX = 0),
                  (this.inputY = 0),
                  (this.motionX = 0),
                  (this.motionY = 0),
                  (this.velocityX = 0),
                  (this.velocityY = 0),
                  (this.onMouseMove = this.onMouseMove.bind(this)),
                  (this.onDeviceOrientation = this.onDeviceOrientation.bind(
                    this
                  )),
                  (this.onDeviceMotion = this.onDeviceMotion.bind(this)),
                  (this.onOrientationTimer = this.onOrientationTimer.bind(
                    this
                  )),
                  (this.onMotionTimer = this.onMotionTimer.bind(this)),
                  (this.onCalibrationTimer = this.onCalibrationTimer.bind(
                    this
                  )),
                  (this.onAnimationFrame = this.onAnimationFrame.bind(this)),
                  (this.onWindowResize = this.onWindowResize.bind(this)),
                  (this.windowWidth = null),
                  (this.windowHeight = null),
                  (this.windowCenterX = null),
                  (this.windowCenterY = null),
                  (this.windowRadiusX = null),
                  (this.windowRadiusY = null),
                  (this.portrait = !1),
                  (this.desktop = !navigator.userAgent.match(
                    /(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i
                  )),
                  (this.motionSupport =
                    !!window.DeviceMotionEvent && !this.desktop),
                  (this.orientationSupport =
                    !!window.DeviceOrientationEvent && !this.desktop),
                  (this.orientationStatus = 0),
                  (this.motionStatus = 0),
                  this.initialise();
              }
              return (
                o(t, [
                  {
                    key: 'initialise',
                    value: function () {
                      void 0 === this.transform2DSupport &&
                        ((this.transform2DSupport = a.transformSupport('2D')),
                        (this.transform3DSupport = a.transformSupport('3D'))),
                        this.transform3DSupport && a.accelerate(this.element),
                        'static' ===
                          window
                            .getComputedStyle(this.element)
                            .getPropertyValue('position') &&
                          (this.element.style.position = 'relative'),
                        this.pointerEvents ||
                          (this.element.style.pointerEvents = 'none'),
                        this.updateLayers(),
                        this.updateDimensions(),
                        this.enable(),
                        this.queueCalibration(this.calibrationDelay);
                    },
                  },
                  {
                    key: 'doReadyCallback',
                    value: function () {
                      this.onReady && this.onReady();
                    },
                  },
                  {
                    key: 'updateLayers',
                    value: function () {
                      this.selector
                        ? (this.layers = this.element.querySelectorAll(
                            this.selector
                          ))
                        : (this.layers = this.element.children),
                        this.layers.length ||
                          console.warn(
                            'ParallaxJS: Your scene does not have any layers.'
                          ),
                        (this.depthsX = []),
                        (this.depthsY = []);
                      for (var t = 0; t < this.layers.length; t++) {
                        var e = this.layers[t];
                        this.transform3DSupport && a.accelerate(e),
                          (e.style.position = t ? 'absolute' : 'relative'),
                          (e.style.display = 'block'),
                          (e.style.left = 0),
                          (e.style.top = 0);
                        var i = a.data(e, 'depth') || 0;
                        this.depthsX.push(a.data(e, 'depth-x') || i),
                          this.depthsY.push(a.data(e, 'depth-y') || i);
                      }
                    },
                  },
                  {
                    key: 'updateDimensions',
                    value: function () {
                      (this.windowWidth = window.innerWidth),
                        (this.windowHeight = window.innerHeight),
                        (this.windowCenterX = this.windowWidth * this.originX),
                        (this.windowCenterY = this.windowHeight * this.originY),
                        (this.windowRadiusX = Math.max(
                          this.windowCenterX,
                          this.windowWidth - this.windowCenterX
                        )),
                        (this.windowRadiusY = Math.max(
                          this.windowCenterY,
                          this.windowHeight - this.windowCenterY
                        ));
                    },
                  },
                  {
                    key: 'updateBounds',
                    value: function () {
                      (this.bounds = this.inputElement.getBoundingClientRect()),
                        (this.elementPositionX = this.bounds.left),
                        (this.elementPositionY = this.bounds.top),
                        (this.elementWidth = this.bounds.width),
                        (this.elementHeight = this.bounds.height),
                        (this.elementCenterX =
                          this.elementWidth * this.originX),
                        (this.elementCenterY =
                          this.elementHeight * this.originY),
                        (this.elementRangeX = Math.max(
                          this.elementCenterX,
                          this.elementWidth - this.elementCenterX
                        )),
                        (this.elementRangeY = Math.max(
                          this.elementCenterY,
                          this.elementHeight - this.elementCenterY
                        ));
                    },
                  },
                  {
                    key: 'queueCalibration',
                    value: function (t) {
                      clearTimeout(this.calibrationTimer),
                        (this.calibrationTimer = setTimeout(
                          this.onCalibrationTimer,
                          t
                        ));
                    },
                  },
                  {
                    key: 'enable',
                    value: function () {
                      this.enabled ||
                        ((this.enabled = !0),
                        this.orientationSupport
                          ? ((this.portrait = !1),
                            window.addEventListener(
                              'deviceorientation',
                              this.onDeviceOrientation
                            ),
                            (this.detectionTimer = setTimeout(
                              this.onOrientationTimer,
                              this.supportDelay
                            )))
                          : this.motionSupport
                          ? ((this.portrait = !1),
                            window.addEventListener(
                              'devicemotion',
                              this.onDeviceMotion
                            ),
                            (this.detectionTimer = setTimeout(
                              this.onMotionTimer,
                              this.supportDelay
                            )))
                          : ((this.calibrationX = 0),
                            (this.calibrationY = 0),
                            (this.portrait = !1),
                            window.addEventListener(
                              'mousemove',
                              this.onMouseMove
                            ),
                            this.doReadyCallback()),
                        window.addEventListener('resize', this.onWindowResize),
                        (this.raf = s(this.onAnimationFrame)));
                    },
                  },
                  {
                    key: 'disable',
                    value: function () {
                      this.enabled &&
                        ((this.enabled = !1),
                        this.orientationSupport
                          ? window.removeEventListener(
                              'deviceorientation',
                              this.onDeviceOrientation
                            )
                          : this.motionSupport
                          ? window.removeEventListener(
                              'devicemotion',
                              this.onDeviceMotion
                            )
                          : window.removeEventListener(
                              'mousemove',
                              this.onMouseMove
                            ),
                        window.removeEventListener(
                          'resize',
                          this.onWindowResize
                        ),
                        s.cancel(this.raf));
                    },
                  },
                  {
                    key: 'calibrate',
                    value: function (t, e) {
                      (this.calibrateX = void 0 === t ? this.calibrateX : t),
                        (this.calibrateY = void 0 === e ? this.calibrateY : e);
                    },
                  },
                  {
                    key: 'invert',
                    value: function (t, e) {
                      (this.invertX = void 0 === t ? this.invertX : t),
                        (this.invertY = void 0 === e ? this.invertY : e);
                    },
                  },
                  {
                    key: 'friction',
                    value: function (t, e) {
                      (this.frictionX = void 0 === t ? this.frictionX : t),
                        (this.frictionY = void 0 === e ? this.frictionY : e);
                    },
                  },
                  {
                    key: 'scalar',
                    value: function (t, e) {
                      (this.scalarX = void 0 === t ? this.scalarX : t),
                        (this.scalarY = void 0 === e ? this.scalarY : e);
                    },
                  },
                  {
                    key: 'limit',
                    value: function (t, e) {
                      (this.limitX = void 0 === t ? this.limitX : t),
                        (this.limitY = void 0 === e ? this.limitY : e);
                    },
                  },
                  {
                    key: 'origin',
                    value: function (t, e) {
                      (this.originX = void 0 === t ? this.originX : t),
                        (this.originY = void 0 === e ? this.originY : e);
                    },
                  },
                  {
                    key: 'setInputElement',
                    value: function (t) {
                      (this.inputElement = t), this.updateDimensions();
                    },
                  },
                  {
                    key: 'setPosition',
                    value: function (t, e, i) {
                      (e = e.toFixed(this.precision) + 'px'),
                        (i = i.toFixed(this.precision) + 'px'),
                        this.transform3DSupport
                          ? a.css(
                              t,
                              'transform',
                              'translate3d(' + e + ',' + i + ',0)'
                            )
                          : this.transform2DSupport
                          ? a.css(
                              t,
                              'transform',
                              'translate(' + e + ',' + i + ')'
                            )
                          : ((t.style.left = e), (t.style.top = i));
                    },
                  },
                  {
                    key: 'onOrientationTimer',
                    value: function () {
                      this.orientationSupport && 0 === this.orientationStatus
                        ? (this.disable(),
                          (this.orientationSupport = !1),
                          this.enable())
                        : this.doReadyCallback();
                    },
                  },
                  {
                    key: 'onMotionTimer',
                    value: function () {
                      this.motionSupport && 0 === this.motionStatus
                        ? (this.disable(),
                          (this.motionSupport = !1),
                          this.enable())
                        : this.doReadyCallback();
                    },
                  },
                  {
                    key: 'onCalibrationTimer',
                    value: function () {
                      this.calibrationFlag = !0;
                    },
                  },
                  {
                    key: 'onWindowResize',
                    value: function () {
                      this.updateDimensions();
                    },
                  },
                  {
                    key: 'onAnimationFrame',
                    value: function () {
                      this.updateBounds();
                      var t = this.inputX - this.calibrationX,
                        e = this.inputY - this.calibrationY;
                      (Math.abs(t) > this.calibrationThreshold ||
                        Math.abs(e) > this.calibrationThreshold) &&
                        this.queueCalibration(0),
                        this.portrait
                          ? ((this.motionX = this.calibrateX ? e : this.inputY),
                            (this.motionY = this.calibrateY ? t : this.inputX))
                          : ((this.motionX = this.calibrateX ? t : this.inputX),
                            (this.motionY = this.calibrateY ? e : this.inputY)),
                        (this.motionX *=
                          this.elementWidth * (this.scalarX / 100)),
                        (this.motionY *=
                          this.elementHeight * (this.scalarY / 100)),
                        isNaN(parseFloat(this.limitX)) ||
                          (this.motionX = a.clamp(
                            this.motionX,
                            -this.limitX,
                            this.limitX
                          )),
                        isNaN(parseFloat(this.limitY)) ||
                          (this.motionY = a.clamp(
                            this.motionY,
                            -this.limitY,
                            this.limitY
                          )),
                        (this.velocityX +=
                          (this.motionX - this.velocityX) * this.frictionX),
                        (this.velocityY +=
                          (this.motionY - this.velocityY) * this.frictionY);
                      for (var i = 0; i < this.layers.length; i++) {
                        var n = this.layers[i],
                          o = this.depthsX[i],
                          r = this.depthsY[i],
                          l = this.velocityX * (o * (this.invertX ? -1 : 1)),
                          h = this.velocityY * (r * (this.invertY ? -1 : 1));
                        this.setPosition(n, l, h);
                      }
                      this.raf = s(this.onAnimationFrame);
                    },
                  },
                  {
                    key: 'rotate',
                    value: function (t, e) {
                      var i = (t || 0) / 30,
                        n = (e || 0) / 30,
                        o = this.windowHeight > this.windowWidth;
                      this.portrait !== o &&
                        ((this.portrait = o), (this.calibrationFlag = !0)),
                        this.calibrationFlag &&
                          ((this.calibrationFlag = !1),
                          (this.calibrationX = i),
                          (this.calibrationY = n)),
                        (this.inputX = i),
                        (this.inputY = n);
                    },
                  },
                  {
                    key: 'onDeviceOrientation',
                    value: function (t) {
                      var e = t.beta,
                        i = t.gamma;
                      null !== e &&
                        null !== i &&
                        ((this.orientationStatus = 1), this.rotate(e, i));
                    },
                  },
                  {
                    key: 'onDeviceMotion',
                    value: function (t) {
                      var e = t.rotationRate.beta,
                        i = t.rotationRate.gamma;
                      null !== e &&
                        null !== i &&
                        ((this.motionStatus = 1), this.rotate(e, i));
                    },
                  },
                  {
                    key: 'onMouseMove',
                    value: function (t) {
                      var e = t.clientX,
                        i = t.clientY;
                      if (
                        this.hoverOnly &&
                        (e < this.elementPositionX ||
                          e > this.elementPositionX + this.elementWidth ||
                          i < this.elementPositionY ||
                          i > this.elementPositionY + this.elementHeight)
                      )
                        return (this.inputX = 0), void (this.inputY = 0);
                      this.relativeInput
                        ? (this.clipRelativeInput &&
                            ((e = Math.max(e, this.elementPositionX)),
                            (e = Math.min(
                              e,
                              this.elementPositionX + this.elementWidth
                            )),
                            (i = Math.max(i, this.elementPositionY)),
                            (i = Math.min(
                              i,
                              this.elementPositionY + this.elementHeight
                            ))),
                          this.elementRangeX &&
                            this.elementRangeY &&
                            ((this.inputX =
                              (e -
                                this.elementPositionX -
                                this.elementCenterX) /
                              this.elementRangeX),
                            (this.inputY =
                              (i -
                                this.elementPositionY -
                                this.elementCenterY) /
                              this.elementRangeY)))
                        : this.windowRadiusX &&
                          this.windowRadiusY &&
                          ((this.inputX =
                            (e - this.windowCenterX) / this.windowRadiusX),
                          (this.inputY =
                            (i - this.windowCenterY) / this.windowRadiusY));
                    },
                  },
                  {
                    key: 'destroy',
                    value: function () {
                      this.disable(),
                        clearTimeout(this.calibrationTimer),
                        clearTimeout(this.detectionTimer),
                        this.element.removeAttribute('style');
                      for (var t = 0; t < this.layers.length; t++)
                        this.layers[t].removeAttribute('style');
                      delete this.element, delete this.layers;
                    },
                  },
                  {
                    key: 'version',
                    value: function () {
                      return '3.1.0';
                    },
                  },
                ]),
                t
              );
            })();
          e.exports = h;
        },
        { 'object-assign': 1, raf: 4 },
      ],
    },
    {},
    [5]
  )(5);
});
