function InfoBox(a) {
    google.maps.OverlayView.call(this), this.latlng_ = a.latlng, this.map_ = a.map, this.offsetVertical_ = -82, this.offsetHorizontal_ = -34, this.height_ = 68, this.width_ = 132, this.content = a.content, this.subcontent = a.subcontent, this.address = a.address, this.color = a.color, this.icon = a.icon;
    var b = this;
    this.boundsChangedListener_ = google.maps.event.addListener(this.map_, "bounds_changed", function () {
        return b.panMap.apply(b)
    }), this.setMap(this.map_)
}
!function (a) {
    "use strict";
    var b = {
        i18n: {
            bg: {
                months: ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"],
                dayOfWeek: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]
            },
            fa: {
                months: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
                dayOfWeek: ["یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"]
            },
            ru: {
                months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
                dayOfWeek: ["Вск", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]
            },
            en: {
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                dayOfWeek: ["Su", "M", "T", "W", "Th", "F", "S"]
            },
            el: {
                months: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"],
                dayOfWeek: ["Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"]
            },
            de: {
                months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
                dayOfWeek: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"]
            },
            nl: {
                months: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
                dayOfWeek: ["zo", "ma", "di", "wo", "do", "vr", "za"]
            },
            tr: {
                months: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
                dayOfWeek: ["Paz", "Pts", "Sal", "Çar", "Per", "Cum", "Cts"]
            },
            fr: {
                months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
                dayOfWeek: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"]
            },
            es: {
                months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                dayOfWeek: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]
            },
            th: {
                months: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"],
                dayOfWeek: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."]
            },
            pl: {
                months: ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"],
                dayOfWeek: ["nd", "pn", "wt", "śr", "cz", "pt", "sb"]
            },
            pt: {
                months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                dayOfWeek: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]
            },
            ch: {
                months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                dayOfWeek: ["日", "一", "二", "三", "四", "五", "六"]
            },
            se: {
                months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
                dayOfWeek: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"]
            },
            kr: {
                months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
                dayOfWeek: ["일", "월", "화", "수", "목", "금", "토"]
            },
            it: {
                months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
                dayOfWeek: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"]
            },
            da: {
                months: ["January", "Februar", "Marts", "April", "Maj", "Juni", "July", "August", "September", "Oktober", "November", "December"],
                dayOfWeek: ["Søn", "Man", "Tir", "ons", "Tor", "Fre", "lør"]
            },
            no: {
                months: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"],
                dayOfWeek: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"]
            },
            ja: {
                months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                dayOfWeek: ["日", "月", "火", "水", "木", "金", "土"]
            },
            vi: {
                months: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
                dayOfWeek: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"]
            },
            sl: {
                months: ["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"],
                dayOfWeek: ["Ned", "Pon", "Tor", "Sre", "Čet", "Pet", "Sob"]
            },
            cs: {
                months: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"],
                dayOfWeek: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"]
            },
            hu: {
                months: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"],
                dayOfWeek: ["Va", "Hé", "Ke", "Sze", "Cs", "Pé", "Szo"]
            }
        },
        value: "",
        lang: "en",
        format: "Y/m/d H:i",
        formatTime: "H:i",
        formatDate: "Y/m/d",
        startDate: !1,
        step: 60,
        monthChangeSpinner: !0,
        closeOnDateSelect: !1,
        closeOnWithoutClick: !0,
        closeOnInputClick: !0,
        timepicker: !0,
        datepicker: !0,
        defaultTime: !1,
        defaultDate: !1,
        minDate: !1,
        maxDate: !1,
        minTime: !1,
        maxTime: !1,
        allowTimes: [],
        opened: !1,
        initTime: !0,
        inline: !1,
        onSelectDate: function () {
        },
        onSelectTime: function () {
        },
        onChangeMonth: function () {
        },
        onChangeDateTime: function () {
        },
        onShow: function () {
        },
        onClose: function () {
        },
        onGenerate: function () {
        },
        withoutCopyright: !0,
        inverseButton: !1,
        hours12: !1,
        next: "xdsoft_next",
        prev: "xdsoft_prev",
        dayOfWeekStart: 0,
        timeHeightInTimePicker: 25,
        timepickerScrollbar: !0,
        todayButton: !0,
        defaultSelect: !0,
        scrollMonth: !0,
        scrollTime: !0,
        scrollInput: !0,
        lazyInit: !1,
        mask: !1,
        validateOnBlur: !0,
        allowBlank: !0,
        yearStart: 1950,
        yearEnd: 2050,
        style: "",
        id: "",
        fixed: !1,
        roundTime: "round",
        className: "",
        weekends: [],
        yearOffset: 0,
        beforeShowDay: null
    };
    Array.prototype.indexOf || (Array.prototype.indexOf = function (a, b) {
        for (var c = b || 0, d = this.length; d > c; c++)if (this[c] === a)return c;
        return -1
    }), Date.prototype.countDaysInMonth = function () {
        return new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate()
    }, a.fn.xdsoftScroller = function (b) {
        return this.each(function () {
            var c = a(this);
            if (!a(this).hasClass("xdsoft_scroller_box")) {
                var d = function (a) {
                    var b = {x: 0, y: 0};
                    if ("touchstart" == a.type || "touchmove" == a.type || "touchend" == a.type || "touchcancel" == a.type) {
                        var c = a.originalEvent.touches[0] || a.originalEvent.changedTouches[0];
                        b.x = c.pageX, b.y = c.pageY
                    } else("mousedown" == a.type || "mouseup" == a.type || "mousemove" == a.type || "mouseover" == a.type || "mouseout" == a.type || "mouseenter" == a.type || "mouseleave" == a.type) && (b.x = a.pageX, b.y = a.pageY);
                    return b
                }, e = 0, f = c.children().eq(0), g = c[0].clientHeight, h = f[0].offsetHeight, i = a('<div class="xdsoft_scrollbar"></div>'), j = a('<div class="xdsoft_scroller"></div>'), k = 100, l = !1;
                i.append(j), c.addClass("xdsoft_scroller_box").append(i), j.on("mousedown.xdsoft_scroller", function (d) {
                    g || c.trigger("resize_scroll.xdsoft_scroller", [b]);
                    var f = d.pageY, h = parseInt(j.css("margin-top")), l = i[0].offsetHeight;
                    a(document.body).addClass("xdsoft_noselect"), a([document.body, window]).on("mouseup.xdsoft_scroller", function m() {
                        a([document.body, window]).off("mouseup.xdsoft_scroller", m).off("mousemove.xdsoft_scroller", e).removeClass("xdsoft_noselect")
                    }), a(document.body).on("mousemove.xdsoft_scroller", e = function (a) {
                        var b = a.pageY - f + h;
                        0 > b && (b = 0), b + j[0].offsetHeight > l && (b = l - j[0].offsetHeight), c.trigger("scroll_element.xdsoft_scroller", [k ? b / k : 0])
                    })
                }), c.on("scroll_element.xdsoft_scroller", function (a, b) {
                    g || c.trigger("resize_scroll.xdsoft_scroller", [b, !0]), b = b > 1 ? 1 : 0 > b || isNaN(b) ? 0 : b, j.css("margin-top", k * b), f.css("marginTop", -parseInt((h - g) * b))
                }).on("resize_scroll.xdsoft_scroller", function (a, b, d) {
                    g = c[0].clientHeight, h = f[0].offsetHeight;
                    var e = g / h, l = e * i[0].offsetHeight;
                    e > 1 ? j.hide() : (j.show(), j.css("height", parseInt(l > 10 ? l : 10)), k = i[0].offsetHeight - j[0].offsetHeight, d !== !0 && c.trigger("scroll_element.xdsoft_scroller", [b ? b : Math.abs(parseInt(f.css("marginTop"))) / (h - g)]))
                }), c.mousewheel && c.mousewheel(function (a, b) {
                    var d = Math.abs(parseInt(f.css("marginTop")));
                    return c.trigger("scroll_element.xdsoft_scroller", [(d - 20 * b) / (h - g)]), a.stopPropagation(), !1
                }), c.on("touchstart", function (a) {
                    l = d(a)
                }), c.on("touchmove", function (a) {
                    if (l) {
                        var b = d(a), e = Math.abs(parseInt(f.css("marginTop")));
                        c.trigger("scroll_element.xdsoft_scroller", [(e - (b.y - l.y)) / (h - g)]), a.stopPropagation(), a.preventDefault(), l = d(a)
                    }
                }), c.on("touchend touchcancel", function () {
                    l = !1
                })
            }
            c.trigger("resize_scroll.xdsoft_scroller", [b])
        })
    }, a.fn.datetimepicker = function (c) {
        var d = 48, e = 57, f = 96, g = 105, h = 17, i = 46, j = 13, k = 27, l = 8, m = 37, n = 38, o = 39, p = 40, q = 9, r = 116, s = 65, t = 67, u = 86, v = 90, w = 89, x = !1, y = a.isPlainObject(c) || !c ? a.extend(!0, {}, b, c) : a.extend({}, b), z = 0, A = function (a) {
            a.on("open.xdsoft focusin.xdsoft mousedown.xdsoft", function b() {
                a.is(":disabled") || a.is(":hidden") || !a.is(":visible") || a.data("xdsoft_datetimepicker") || (clearTimeout(z), z = setTimeout(function () {
                    a.data("xdsoft_datetimepicker") || B(a), a.off("open.xdsoft focusin.xdsoft mousedown.xdsoft", b).trigger("open.xdsoft")
                }, 100))
            })
        }, B = function (b) {
            function c() {
                var a = !1;
                return y.startDate ? a = L.strToDateTime(y.startDate) : (a = y.value ? y.value : b && b.val && b.val() ? b.val() : "", a = Date.parseDate(a, y.format)), a && L.isValidDate(a) ? z.data("changed", !0) : a = "", a ? a : 0
            }

            var z = a("<div " + (y.id ? 'id="' + y.id + '"' : "") + " " + (y.style ? 'style="' + y.style + '"' : "") + ' class="xdsoft_datetimepicker xdsoft_noselect ' + y.className + '"></div>'), A = a('<div class="xdsoft_copyright"><a target="_blank" href="http://xdsoft.net/jqplugins/datetimepicker/">xdsoft.net</a></div>'), B = a('<div class="xdsoft_datepicker active"></div>'), C = a('<div class="xdsoft_mounthpicker"><button type="button" class="xdsoft_prev"></button><button type="button" class="xdsoft_today_button"></button><div class="xdsoft_label xdsoft_month"><span></span></div><div class="xdsoft_label xdsoft_year"><span></span></div><button type="button" class="xdsoft_next"></button></div>'), D = a('<div class="xdsoft_calendar"></div>'), E = a('<div class="xdsoft_timepicker active"><button type="button" class="xdsoft_prev"></button><div class="xdsoft_time_box"></div><button type="button" class="xdsoft_next"></button></div>'), F = E.find(".xdsoft_time_box").eq(0), G = a('<div class="xdsoft_time_variant"></div>'), H = a('<div class="xdsoft_scrollbar"></div>'), I = (a('<div class="xdsoft_scroller"></div>'), a('<div class="xdsoft_select xdsoft_monthselect"><div></div></div>')), J = a('<div class="xdsoft_select xdsoft_yearselect"><div></div></div>');
            C.find(".xdsoft_month span").after(I), C.find(".xdsoft_year span").after(J), C.find(".xdsoft_month,.xdsoft_year").on("mousedown.xdsoft", function (b) {
                C.find(".xdsoft_select").hide();
                var c = a(this).find(".xdsoft_select").eq(0), d = 0, e = 0;
                L.currentTime && (d = L.currentTime[a(this).hasClass("xdsoft_month") ? "getMonth" : "getFullYear"]()), c.show();
                for (var f = c.find("div.xdsoft_option"), g = 0; g < f.length && f.eq(g).data("value") != d; g++)e += f[0].offsetHeight;
                return c.xdsoftScroller(e / (c.children()[0].offsetHeight - c[0].clientHeight)), b.stopPropagation(), !1
            }), C.find(".xdsoft_select").xdsoftScroller().on("mousedown.xdsoft", function (a) {
                a.stopPropagation(), a.preventDefault()
            }).on("mousedown.xdsoft", ".xdsoft_option", function () {
                L && L.currentTime && L.currentTime[a(this).parent().parent().hasClass("xdsoft_monthselect") ? "setMonth" : "setFullYear"](a(this).data("value")), a(this).parent().parent().hide(), z.trigger("xchange.xdsoft"), y.onChangeMonth && y.onChangeMonth.call && y.onChangeMonth.call(z, L.currentTime, z.data("input"))
            }), z.setOptions = function (c) {
                if (y = a.extend(!0, {}, y, c), c.allowTimes && a.isArray(c.allowTimes) && c.allowTimes.length && (y.allowTimes = a.extend(!0, [], c.allowTimes)), c.weekends && a.isArray(c.weekends) && c.weekends.length && (y.weekends = a.extend(!0, [], c.weekends)), !y.open && !y.opened || y.inline || b.trigger("open.xdsoft"), y.inline && (O = !0, z.addClass("xdsoft_inline"), b.after(z).hide()), y.inverseButton && (y.next = "xdsoft_prev", y.prev = "xdsoft_next"), y.datepicker ? B.addClass("active") : B.removeClass("active"), y.timepicker ? E.addClass("active") : E.removeClass("active"), y.value && (b && b.val && b.val(y.value), L.setCurrentTime(y.value)), y.dayOfWeekStart = isNaN(y.dayOfWeekStart) || parseInt(y.dayOfWeekStart) < 0 || parseInt(y.dayOfWeekStart) > 6 ? 0 : parseInt(y.dayOfWeekStart), y.timepickerScrollbar || H.hide(), y.minDate && /^-(.*)$/.test(y.minDate) && (y.minDate = L.strToDateTime(y.minDate).dateFormat(y.formatDate)), y.maxDate && /^\+(.*)$/.test(y.maxDate) && (y.maxDate = L.strToDateTime(y.maxDate).dateFormat(y.formatDate)), C.find(".xdsoft_today_button").css("visibility", y.todayButton ? "visible" : "hidden"), y.mask) {
                    var A = function (a) {
                        try {
                            if (document.selection && document.selection.createRange) {
                                var b = document.selection.createRange();
                                return b.getBookmark().charCodeAt(2) - 2
                            }
                            if (a.setSelectionRange)return a.selectionStart
                        } catch (c) {
                            return 0
                        }
                    }, D = function (a, b) {
                        if (a = "string" == typeof a || a instanceof String ? document.getElementById(a) : a, !a)return !1;
                        if (a.createTextRange) {
                            var c = a.createTextRange();
                            return c.collapse(!0), c.moveEnd(b), c.moveStart(b), c.select(), !0
                        }
                        return a.setSelectionRange ? (a.setSelectionRange(b, b), !0) : !1
                    }, F = function (a, b) {
                        var c = a.replace(/([\[\]\/\{\}\(\)\-\.\+]{1})/g, "\\$1").replace(/_/g, "{digit+}").replace(/([0-9]{1})/g, "{digit$1}").replace(/\{digit([0-9]{1})\}/g, "[0-$1_]{1}").replace(/\{digit[\+]\}/g, "[0-9_]{1}");
                        return RegExp(c).test(b)
                    };
                    switch (b.off("keydown.xdsoft"), !0) {
                        case y.mask === !0:
                            y.mask = y.format.replace(/Y/g, "9999").replace(/F/g, "9999").replace(/m/g, "19").replace(/d/g, "39").replace(/H/g, "29").replace(/i/g, "59").replace(/s/g, "59");
                        case"string" == a.type(y.mask):
                            F(y.mask, b.val()) || b.val(y.mask.replace(/[0-9]/g, "_")), b.on("keydown.xdsoft", function (c) {
                                var z = this.value, B = c.which;
                                switch (!0) {
                                    case B >= d && e >= B || B >= f && g >= B || B == l || B == i:
                                        var C = A(this), E = B != l && B != i ? String.fromCharCode(B >= f && g >= B ? B - d : B) : "_";
                                        for (B != l && B != i || !C || (C--, E = "_"); /[^0-9_]/.test(y.mask.substr(C, 1)) && C < y.mask.length && C > 0;)C += B == l || B == i ? -1 : 1;
                                        if (z = z.substr(0, C) + E + z.substr(C + 1), "" == a.trim(z)) z = y.mask.replace(/[0-9]/g, "_"); else if (C == y.mask.length)break;
                                        for (C += B == l || B == i ? 0 : 1; /[^0-9_]/.test(y.mask.substr(C, 1)) && C < y.mask.length && C > 0;)C += B == l || B == i ? -1 : 1;
                                        F(y.mask, z) ? (this.value = z, D(this, C)) : "" == a.trim(z) ? this.value = y.mask.replace(/[0-9]/g, "_") : b.trigger("error_input.xdsoft");
                                        break;
                                    case!!~[s, t, u, v, w].indexOf(B) && x:
                                    case!!~[k, n, p, m, o, r, h, q, j].indexOf(B):
                                        return !0
                                }
                                return c.preventDefault(), !1
                            })
                    }
                }
                y.validateOnBlur && b.off("blur.xdsoft").on("blur.xdsoft", function () {
                    y.allowBlank && !a.trim(a(this).val()).length ? (a(this).val(null), z.data("xdsoft_datetime").empty()) : Date.parseDate(a(this).val(), y.format) ? z.data("xdsoft_datetime").setCurrentTime(a(this).val()) : (a(this).val(L.now().dateFormat(y.format)), z.data("xdsoft_datetime").setCurrentTime(a(this).val())), z.trigger("changedatetime.xdsoft")
                }), y.dayOfWeekStartPrev = 0 == y.dayOfWeekStart ? 6 : y.dayOfWeekStart - 1, z.trigger("xchange.xdsoft").trigger("afterOpen.xdsoft")
            }, z.data("options", y).on("mousedown.xdsoft", function (a) {
                return a.stopPropagation(), a.preventDefault(), J.hide(), I.hide(), !1
            });
            var K = E.find(".xdsoft_time_box");
            K.append(G), K.xdsoftScroller(), z.on("afterOpen.xdsoft", function () {
                K.xdsoftScroller()
            }), z.append(B).append(E), y.withoutCopyright !== !0 && z.append(A), B.append(C).append(D), a("body").append(z);
            var L = new function () {
                var a = this;
                a.now = function (b) {
                    var c = new Date;
                    if (!b && y.defaultDate) {
                        var d = a.strtodate(y.defaultDate);
                        c.setFullYear(d.getFullYear()), c.setMonth(d.getMonth()), c.setDate(d.getDate())
                    }
                    if (y.yearOffset && c.setFullYear(c.getFullYear() + y.yearOffset), !b && y.defaultTime) {
                        var e = a.strtotime(y.defaultTime);
                        c.setHours(e.getHours()), c.setMinutes(e.getMinutes())
                    }
                    return c
                }, a.isValidDate = function (a) {
                    return "[object Date]" !== Object.prototype.toString.call(a) ? !1 : !isNaN(a.getTime())
                }, a.setCurrentTime = function (b) {
                    a.currentTime = "string" == typeof b ? a.strToDateTime(b) : a.isValidDate(b) ? b : a.now(), z.trigger("xchange.xdsoft")
                }, a.empty = function () {
                    a.currentTime = null
                }, a.getCurrentTime = function () {
                    return a.currentTime
                }, a.nextMonth = function () {
                    var b = a.currentTime.getMonth() + 1;
                    return 12 == b && (a.currentTime.setFullYear(a.currentTime.getFullYear() + 1), b = 0), a.currentTime.setDate(Math.min(Date.daysInMonth[b], a.currentTime.getDate())), a.currentTime.setMonth(b), y.onChangeMonth && y.onChangeMonth.call && y.onChangeMonth.call(z, L.currentTime, z.data("input")), z.trigger("xchange.xdsoft"), b
                }, a.prevMonth = function () {
                    var b = a.currentTime.getMonth() - 1;
                    return -1 == b && (a.currentTime.setFullYear(a.currentTime.getFullYear() - 1), b = 11), a.currentTime.setDate(Math.min(Date.daysInMonth[b], a.currentTime.getDate())), a.currentTime.setMonth(b), y.onChangeMonth && y.onChangeMonth.call && y.onChangeMonth.call(z, L.currentTime, z.data("input")), z.trigger("xchange.xdsoft"), b
                }, a.strToDateTime = function (b) {
                    if (b && b instanceof Date && a.isValidDate(b))return b;
                    var c, d, e = [];
                    return (e = /^(\+|\-)(.*)$/.exec(b)) && (e[2] = Date.parseDate(e[2], y.formatDate)) ? (c = e[2].getTime() - 6e4 * e[2].getTimezoneOffset(), d = new Date(L.now().getTime() + parseInt(e[1] + "1") * c)) : d = b ? Date.parseDate(b, y.format) : a.now(), a.isValidDate(d) || (d = a.now()), d
                }, a.strtodate = function (b) {
                    if (b && b instanceof Date && a.isValidDate(b))return b;
                    var c = b ? Date.parseDate(b, y.formatDate) : a.now(!0);
                    return a.isValidDate(c) || (c = a.now(!0)), c
                }, a.strtotime = function (b) {
                    if (b && b instanceof Date && a.isValidDate(b))return b;
                    var c = b ? Date.parseDate(b, y.formatTime) : a.now();
                    return a.isValidDate(c) || (c = a.now(!0)), c
                }, a.str = function () {
                    return a.currentTime.dateFormat(y.format)
                }, a.currentTime = this.now()
            };
            C.find(".xdsoft_today_button").on("mousedown.xdsoft", function () {
                z.data("changed", !0), L.setCurrentTime(0), z.trigger("afterOpen.xdsoft")
            }).on("dblclick.xdsoft", function () {
                b.val(L.str()), z.trigger("close.xdsoft")
            }), C.find(".xdsoft_prev,.xdsoft_next").on("mousedown.xdsoft", function () {
                var b = a(this), c = 0, d = !1;
                !function e(a) {
                    L.currentTime.getMonth();
                    b.hasClass(y.next) ? L.nextMonth() : b.hasClass(y.prev) && L.prevMonth(), y.monthChangeSpinner && !d && (c = setTimeout(e, a ? a : 100))
                }(500), a([document.body, window]).on("mouseup.xdsoft", function f() {
                    clearTimeout(c), d = !0, a([document.body, window]).off("mouseup.xdsoft", f)
                })
            }), E.find(".xdsoft_prev,.xdsoft_next").on("mousedown.xdsoft", function () {
                var b = a(this), c = 0, d = !1, e = 110;
                !function f(a) {
                    var g = F[0].clientHeight, h = G[0].offsetHeight, i = Math.abs(parseInt(G.css("marginTop")));
                    b.hasClass(y.next) && h - g - y.timeHeightInTimePicker >= i ? G.css("marginTop", "-" + (i + y.timeHeightInTimePicker) + "px") : b.hasClass(y.prev) && i - y.timeHeightInTimePicker >= 0 && G.css("marginTop", "-" + (i - y.timeHeightInTimePicker) + "px"), F.trigger("scroll_element.xdsoft_scroller", [Math.abs(parseInt(G.css("marginTop")) / (h - g))]), e = e > 10 ? 10 : e - 10, !d && (c = setTimeout(f, a ? a : e))
                }(500), a([document.body, window]).on("mouseup.xdsoft", function g() {
                    clearTimeout(c), d = !0, a([document.body, window]).off("mouseup.xdsoft", g)
                })
            });
            var M = 0;
            z.on("xchange.xdsoft", function (b) {
                clearTimeout(M), M = setTimeout(function () {
                    for (var b = "", c = new Date(L.currentTime.getFullYear(), L.currentTime.getMonth(), 1, 12, 0, 0), d = 0, e = L.now(); c.getDay() != y.dayOfWeekStart;)c.setDate(c.getDate() - 1);
                    b += "<table><thead><tr>";
                    for (var f = 0; 7 > f; f++)b += "<th>" + y.i18n[y.lang].dayOfWeek[f + y.dayOfWeekStart > 6 ? 0 : f + y.dayOfWeekStart] + "</th>";
                    b += "</tr></thead>", b += "<tbody><tr>";
                    var g = !1, h = !1;
                    y.maxDate !== !1 && (g = L.strtodate(y.maxDate), g = new Date(g.getFullYear(), g.getMonth(), g.getDate(), 23, 59, 59, 999)), y.minDate !== !1 && (h = L.strtodate(y.minDate), h = new Date(h.getFullYear(), h.getMonth(), h.getDate()));
                    for (var i, j, k, l, m = []; d < L.currentTime.countDaysInMonth() || c.getDay() != y.dayOfWeekStart || L.currentTime.getMonth() == c.getMonth();)m = [], d++, i = c.getDate(), j = c.getFullYear(), k = c.getMonth(), m.push("xdsoft_date"), l = y.beforeShowDay && y.beforeShowDay.call ? y.beforeShowDay.call(z, c) : null, (g !== !1 && c > g || h !== !1 && h > c || l && l[0] === !1) && m.push("xdsoft_disabled"), l && "" != l[1] && m.push(l[1]), L.currentTime.getMonth() != k && m.push("xdsoft_other_month"), (y.defaultSelect || z.data("changed")) && L.currentTime.dateFormat(y.formatDate) == c.dateFormat(y.formatDate) && m.push("xdsoft_current"), e.dateFormat(y.formatDate) == c.dateFormat(y.formatDate) && m.push("xdsoft_today"), (0 == c.getDay() || 6 == c.getDay() || ~y.weekends.indexOf(c.dateFormat(y.formatDate))) && m.push("xdsoft_weekend"), y.beforeShowDay && "function" == typeof y.beforeShowDay && m.push(y.beforeShowDay(c)), b += '<td data-date="' + i + '" data-month="' + k + '" data-year="' + j + '" class="xdsoft_date xdsoft_day_of_week' + c.getDay() + " " + m.join(" ") + '"><div>' + i + "</div></td>", c.getDay() == y.dayOfWeekStartPrev && (b += "</tr>"), c.setDate(i + 1);
                    b += "</tbody></table>", D.html(b), C.find(".xdsoft_label span").eq(0).text(y.i18n[y.lang].months[L.currentTime.getMonth()]), C.find(".xdsoft_label span").eq(1).text(L.currentTime.getFullYear());
                    var n = "", o = "", k = "", p = function (a, b) {
                        var c = L.now();
                        c.setHours(a), a = parseInt(c.getHours()), c.setMinutes(b), b = parseInt(c.getMinutes()), m = [], (y.maxTime !== !1 && L.strtotime(y.maxTime).getTime() < c.getTime() || y.minTime !== !1 && L.strtotime(y.minTime).getTime() > c.getTime()) && m.push("xdsoft_disabled"), (y.initTime || y.defaultSelect || z.data("changed")) && parseInt(L.currentTime.getHours()) == parseInt(a) && (y.step > 59 || Math[y.roundTime](L.currentTime.getMinutes() / y.step) * y.step == parseInt(b)) && (y.defaultSelect || z.data("changed") ? m.push("xdsoft_current") : y.initTime && m.push("xdsoft_init_time")), parseInt(e.getHours()) == parseInt(a) && parseInt(e.getMinutes()) == parseInt(b) && m.push("xdsoft_today"), n += '<div class="xdsoft_time ' + m.join(" ") + '" data-hour="' + a + '" data-minute="' + b + '">' + c.dateFormat(y.formatTime) + "</div>"
                    };
                    if (y.allowTimes && a.isArray(y.allowTimes) && y.allowTimes.length)for (var d = 0; d < y.allowTimes.length; d++)o = L.strtotime(y.allowTimes[d]).getHours(), k = L.strtotime(y.allowTimes[d]).getMinutes(), p(o, k); else for (var d = 0, f = 0; d < (y.hours12 ? 12 : 24); d++)for (f = 0; 60 > f; f += y.step)o = (10 > d ? "0" : "") + d, k = (10 > f ? "0" : "") + f, p(o, k);
                    G.html(n);
                    var q = "", d = 0;
                    for (d = parseInt(y.yearStart, 10) + y.yearOffset; d <= parseInt(y.yearEnd, 10) + y.yearOffset; d++)q += '<div class="xdsoft_option ' + (L.currentTime.getFullYear() == d ? "xdsoft_current" : "") + '" data-value="' + d + '">' + d + "</div>";
                    for (J.children().eq(0).html(q), d = 0, q = ""; 11 >= d; d++)q += '<div class="xdsoft_option ' + (L.currentTime.getMonth() == d ? "xdsoft_current" : "") + '" data-value="' + d + '">' + y.i18n[y.lang].months[d] + "</div>";
                    I.children().eq(0).html(q), a(z).trigger("generate.xdsoft")
                }, 10), b.stopPropagation()
            }).on("afterOpen.xdsoft", function () {
                if (y.timepicker) {
                    var a;
                    if (G.find(".xdsoft_current").length ? a = ".xdsoft_current" : G.find(".xdsoft_init_time").length && (a = ".xdsoft_init_time"), a) {
                        var b = F[0].clientHeight, c = G[0].offsetHeight, d = G.find(a).index() * y.timeHeightInTimePicker + 1;
                        d > c - b && (d = c - b), F.trigger("scroll_element.xdsoft_scroller", [parseInt(d) / (c - b)])
                    } else F.trigger("scroll_element.xdsoft_scroller", [0])
                }
            });
            var N = 0;
            D.on("click.xdsoft", "td", function (c) {
                c.stopPropagation(), N++;
                var d = a(this), e = L.currentTime;
                return (void 0 === e || null === e) && (L.currentTime = L.now(), e = L.currentTime), d.hasClass("xdsoft_disabled") ? !1 : (e.setDate(1), e.setFullYear(d.data("year")), e.setMonth(d.data("month")), e.setDate(d.data("date")), z.trigger("select.xdsoft", [e]), b.val(L.str()), (N > 1 || y.closeOnDateSelect === !0 || 0 === y.closeOnDateSelect && !y.timepicker) && !y.inline && z.trigger("close.xdsoft"), y.onSelectDate && y.onSelectDate.call && y.onSelectDate.call(z, L.currentTime, z.data("input")), z.data("changed", !0), z.trigger("xchange.xdsoft"), z.trigger("changedatetime.xdsoft"), setTimeout(function () {
                        N = 0
                    }, 200), void 0)
            }), G.on("click.xdsoft", "div", function (b) {
                b.stopPropagation();
                var c = a(this), d = L.currentTime;
                return (void 0 === d || null === d) && (L.currentTime = L.now(), d = L.currentTime), c.hasClass("xdsoft_disabled") ? !1 : (d.setHours(c.data("hour")), d.setMinutes(c.data("minute")), z.trigger("select.xdsoft", [d]), z.data("input").val(L.str()), !y.inline && z.trigger("close.xdsoft"), y.onSelectTime && y.onSelectTime.call && y.onSelectTime.call(z, L.currentTime, z.data("input")), z.data("changed", !0), z.trigger("xchange.xdsoft"), z.trigger("changedatetime.xdsoft"), void 0)
            }), z.mousewheel && B.mousewheel(function (a, b) {
                return y.scrollMonth ? (0 > b ? L.nextMonth() : L.prevMonth(), !1) : !0
            }), z.mousewheel && F.unmousewheel().mousewheel(function (a, b) {
                if (!y.scrollTime)return !0;
                var c = F[0].clientHeight, d = G[0].offsetHeight, e = Math.abs(parseInt(G.css("marginTop"))), f = !0;
                return 0 > b && d - c - y.timeHeightInTimePicker >= e ? (G.css("marginTop", "-" + (e + y.timeHeightInTimePicker) + "px"), f = !1) : b > 0 && e - y.timeHeightInTimePicker >= 0 && (G.css("marginTop", "-" + (e - y.timeHeightInTimePicker) + "px"), f = !1), F.trigger("scroll_element.xdsoft_scroller", [Math.abs(parseInt(G.css("marginTop")) / (d - c))]), a.stopPropagation(), f
            });
            var O = !1;
            z.on("changedatetime.xdsoft", function () {
                if (y.onChangeDateTime && y.onChangeDateTime.call) {
                    var a = z.data("input");
                    y.onChangeDateTime.call(z, L.currentTime, a), a.trigger("change")
                }
            }).on("generate.xdsoft", function () {
                y.onGenerate && y.onGenerate.call && y.onGenerate.call(z, L.currentTime, z.data("input")), O && (z.trigger("afterOpen.xdsoft"), O = !1)
            }).on("click.xdsoft", function (a) {
                a.stopPropagation()
            });
            var P = 0;
            b.mousewheel && b.mousewheel(function (a, c, d, e) {
                return y.scrollInput ? !y.datepicker && y.timepicker ? (P = G.find(".xdsoft_current").length ? G.find(".xdsoft_current").eq(0).index() : 0, P + c >= 0 && P + c < G.children().length && (P += c), G.children().eq(P).length && G.children().eq(P).trigger("mousedown"), !1) : y.datepicker && !y.timepicker ? (B.trigger(a, [c, d, e]), b.val && b.val(L.str()), z.trigger("changedatetime.xdsoft"), !1) : void 0 : !0
            });
            var Q = function () {
                var b = z.data("input").offset(), c = b.top + z.data("input")[0].offsetHeight - 1, d = b.left, e = "absolute";
                y.fixed ? (c -= a(window).scrollTop(), d -= a(window).scrollLeft(), e = "fixed") : (c + z[0].offsetHeight > a(window).height() + a(window).scrollTop() && (c = b.top - z[0].offsetHeight + 1), 0 > c && (c = 0), d + z[0].offsetWidth > a(window).width() && (d = b.left - z[0].offsetWidth + z.data("input")[0].offsetWidth)), z.css({
                    left: d,
                    top: c,
                    position: e
                })
            };
            z.on("open.xdsoft", function () {
                var b = !0;
                y.onShow && y.onShow.call && (b = y.onShow.call(z, L.currentTime, z.data("input"))), b !== !1 && (z.show(), Q(), a(window).off("resize.xdsoft", Q).on("resize.xdsoft", Q), y.closeOnWithoutClick && a([document.body, window]).on("mousedown.xdsoft", function c() {
                    z.trigger("close.xdsoft"), a([document.body, window]).off("mousedown.xdsoft", c)
                }))
            }).on("close.xdsoft", function (a) {
                var b = !0;
                y.onClose && y.onClose.call && (b = y.onClose.call(z, L.currentTime, z.data("input"))), b === !1 || y.opened || y.inline || z.hide(), a.stopPropagation()
            }).data("input", b);
            var R = 0;
            z.data("xdsoft_datetime", L), z.setOptions(y), L.setCurrentTime(c()), b.data("xdsoft_datetimepicker", z).on("open.xdsoft focusin.xdsoft mousedown.xdsoft", function () {
                b.is(":disabled") || b.is(":hidden") || !b.is(":visible") || b.data("xdsoft_datetimepicker").is(":visible") && y.closeOnInputClick || (clearTimeout(R), R = setTimeout(function () {
                    b.is(":disabled") || b.is(":hidden") || !b.is(":visible") || (O = !0, L.setCurrentTime(c()), z.trigger("open.xdsoft"))
                }, 100))
            }).on("keydown.xdsoft", function (b) {
                var c = (this.value, b.which);
                switch (!0) {
                    case!!~[j].indexOf(c):
                        var d = a("input:visible,textarea:visible");
                        return z.trigger("close.xdsoft"), d.eq(d.index(this) + 1).focus(), !1;
                    case!!~[q].indexOf(c):
                        return z.trigger("close.xdsoft"), !0
                }
            })
        }, C = function (b) {
            var c = b.data("xdsoft_datetimepicker");
            c && (c.data("xdsoft_datetime", null), c.remove(), b.data("xdsoft_datetimepicker", null).off("open.xdsoft focusin.xdsoft focusout.xdsoft mousedown.xdsoft blur.xdsoft keydown.xdsoft"), a(window).off("resize.xdsoft"), a([window, document.body]).off("mousedown.xdsoft"), b.unmousewheel && b.unmousewheel())
        };
        return a(document).off("keydown.xdsoftctrl keyup.xdsoftctrl").on("keydown.xdsoftctrl", function (a) {
            a.keyCode == h && (x = !0)
        }).on("keyup.xdsoftctrl", function (a) {
            a.keyCode == h && (x = !1)
        }), this.each(function () {
            var b;
            if (b = a(this).data("xdsoft_datetimepicker")) {
                if ("string" === a.type(c))switch (c) {
                    case"show":
                        a(this).select().focus(), b.trigger("open.xdsoft");
                        break;
                    case"hide":
                        b.trigger("close.xdsoft");
                        break;
                    case"destroy":
                        C(a(this));
                        break;
                    case"reset":
                        this.value = this.defaultValue, this.value && b.data("xdsoft_datetime").isValidDate(Date.parseDate(this.value, y.format)) || b.data("changed", !1), b.data("xdsoft_datetime").setCurrentTime(this.value)
                } else b.setOptions(c);
                return 0
            }
            "string" !== a.type(c) && (!y.lazyInit || y.open || y.inline ? B(a(this)) : A(a(this)))
        })
    }, a.fn.datetimepicker.defaults = b
}(jQuery), function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function (a) {
    function b(b) {
        var e, f = b || window.event, g = [].slice.call(arguments, 1), h = 0, i = 0, j = 0, k = 0, l = 0;
        return b = a.event.fix(f), b.type = "mousewheel", f.wheelDelta && (h = f.wheelDelta), f.detail && (h = -1 * f.detail), f.deltaY && (j = -1 * f.deltaY, h = j), f.deltaX && (i = f.deltaX, h = -1 * i), void 0 !== f.wheelDeltaY && (j = f.wheelDeltaY), void 0 !== f.wheelDeltaX && (i = -1 * f.wheelDeltaX), k = Math.abs(h), (!c || c > k) && (c = k), l = Math.max(Math.abs(j), Math.abs(i)), (!d || d > l) && (d = l), e = h > 0 ? "floor" : "ceil", h = Math[e](h / c), i = Math[e](i / d), j = Math[e](j / d), g.unshift(b, h, i, j), (a.event.dispatch || a.event.handle).apply(this, g)
    }

    var c, d, e = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], f = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"];
    if (a.event.fixHooks)for (var g = e.length; g;)a.event.fixHooks[e[--g]] = a.event.mouseHooks;
    a.event.special.mousewheel = {
        setup: function () {
            if (this.addEventListener)for (var a = f.length; a;)this.addEventListener(f[--a], b, !1); else this.onmousewheel = b
        }, teardown: function () {
            if (this.removeEventListener)for (var a = f.length; a;)this.removeEventListener(f[--a], b, !1); else this.onmousewheel = null
        }
    }, a.fn.extend({
        mousewheel: function (a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        }, unmousewheel: function (a) {
            return this.unbind("mousewheel", a)
        }
    })
}), Date.parseFunctions = {count: 0}, Date.parseRegexes = [], Date.formatFunctions = {count: 0}, Date.prototype.dateFormat = function (a) {
    if ("unixtime" == a)return parseInt(this.getTime() / 1e3);
    null == Date.formatFunctions[a] && Date.createNewFormat(a);
    var b = Date.formatFunctions[a];
    return this[b]()
}, Date.createNewFormat = function (format) {
    var funcName = "format" + Date.formatFunctions.count++;
    Date.formatFunctions[format] = funcName;
    for (var code = "Date.prototype." + funcName + " = function() {return ", special = !1, ch = "", i = 0; i < format.length; ++i)ch = format.charAt(i), special || "\\" != ch ? special ? (special = !1, code += "'" + String.escape(ch) + "' + ") : code += Date.getFormatCode(ch) : special = !0;
    eval(code.substring(0, code.length - 3) + ";}")
}, Date.getFormatCode = function (a) {
    switch (a) {
        case"d":
            return "String.leftPad(this.getDate(), 2, '0') + ";
        case"D":
            return "Date.dayNames[this.getDay()].substring(0, 3) + ";
        case"j":
            return "this.getDate() + ";
        case"l":
            return "Date.dayNames[this.getDay()] + ";
        case"S":
            return "this.getSuffix() + ";
        case"w":
            return "this.getDay() + ";
        case"z":
            return "this.getDayOfYear() + ";
        case"W":
            return "this.getWeekOfYear() + ";
        case"F":
            return "Date.monthNames[this.getMonth()] + ";
        case"m":
            return "String.leftPad(this.getMonth() + 1, 2, '0') + ";
        case"M":
            return "Date.monthNames[this.getMonth()].substring(0, 3) + ";
        case"n":
            return "(this.getMonth() + 1) + ";
        case"t":
            return "this.getDaysInMonth() + ";
        case"L":
            return "(this.isLeapYear() ? 1 : 0) + ";
        case"Y":
            return "this.getFullYear() + ";
        case"y":
            return "('' + this.getFullYear()).substring(2, 4) + ";
        case"a":
            return "(this.getHours() < 12 ? 'am' : 'pm') + ";
        case"A":
            return "(this.getHours() < 12 ? 'AM' : 'PM') + ";
        case"g":
            return "((this.getHours() %12) ? this.getHours() % 12 : 12) + ";
        case"G":
            return "this.getHours() + ";
        case"h":
            return "String.leftPad((this.getHours() %12) ? this.getHours() % 12 : 12, 2, '0') + ";
        case"H":
            return "String.leftPad(this.getHours(), 2, '0') + ";
        case"i":
            return "String.leftPad(this.getMinutes(), 2, '0') + ";
        case"s":
            return "String.leftPad(this.getSeconds(), 2, '0') + ";
        case"O":
            return "this.getGMTOffset() + ";
        case"T":
            return "this.getTimezone() + ";
        case"Z":
            return "(this.getTimezoneOffset() * -60) + ";
        default:
            return "'" + String.escape(a) + "' + "
    }
}, Date.parseDate = function (a, b) {
    if ("unixtime" == b)return new Date(isNaN(parseInt(a)) ? 0 : 1e3 * parseInt(a));
    null == Date.parseFunctions[b] && Date.createParser(b);
    var c = Date.parseFunctions[b];
    return Date[c](a)
}, Date.createParser = function (format) {
    var funcName = "parse" + Date.parseFunctions.count++, regexNum = Date.parseRegexes.length, currentGroup = 1;
    Date.parseFunctions[format] = funcName;
    for (var code = "Date." + funcName + " = function(input) {\nvar y = -1, m = -1, d = -1, h = -1, i = -1, s = -1, z = -1;\nvar d = new Date();\ny = d.getFullYear();\nm = d.getMonth();\nd = d.getDate();\nvar results = input.match(Date.parseRegexes[" + regexNum + "]);\nif (results && results.length > 0) {", regex = "", special = !1, ch = "", i = 0; i < format.length; ++i)ch = format.charAt(i), special || "\\" != ch ? special ? (special = !1, regex += String.escape(ch)) : (obj = Date.formatCodeToRegex(ch, currentGroup), currentGroup += obj.g, regex += obj.s, obj.g && obj.c && (code += obj.c)) : special = !0;
    code += "if (y > 0 && z > 0){\nvar doyDate = new Date(y,0);\ndoyDate.setDate(z);\nm = doyDate.getMonth();\nd = doyDate.getDate();\n}", code += "if (y > 0 && m >= 0 && d > 0 && h >= 0 && i >= 0 && s >= 0)\n{return new Date(y, m, d, h, i, s);}\nelse if (y > 0 && m >= 0 && d > 0 && h >= 0 && i >= 0)\n{return new Date(y, m, d, h, i);}\nelse if (y > 0 && m >= 0 && d > 0 && h >= 0)\n{return new Date(y, m, d, h);}\nelse if (y > 0 && m >= 0 && d > 0)\n{return new Date(y, m, d);}\nelse if (y > 0 && m >= 0)\n{return new Date(y, m);}\nelse if (y > 0)\n{return new Date(y);}\n}return null;}", Date.parseRegexes[regexNum] = new RegExp("^" + regex + "$"), eval(code)
}, Date.formatCodeToRegex = function (a, b) {
    switch (a) {
        case"D":
            return {g: 0, c: null, s: "(?:Sun|Mon|Tue|Wed|Thu|Fri|Sat)"};
        case"j":
        case"d":
            return {g: 1, c: "d = parseInt(results[" + b + "], 10);\n", s: "(\\d{1,2})"};
        case"l":
            return {g: 0, c: null, s: "(?:" + Date.dayNames.join("|") + ")"};
        case"S":
            return {g: 0, c: null, s: "(?:st|nd|rd|th)"};
        case"w":
            return {g: 0, c: null, s: "\\d"};
        case"z":
            return {g: 1, c: "z = parseInt(results[" + b + "], 10);\n", s: "(\\d{1,3})"};
        case"W":
            return {g: 0, c: null, s: "(?:\\d{2})"};
        case"F":
            return {
                g: 1,
                c: "m = parseInt(Date.monthNumbers[results[" + b + "].substring(0, 3)], 10);\n",
                s: "(" + Date.monthNames.join("|") + ")"
            };
        case"M":
            return {
                g: 1,
                c: "m = parseInt(Date.monthNumbers[results[" + b + "]], 10);\n",
                s: "(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)"
            };
        case"n":
        case"m":
            return {g: 1, c: "m = parseInt(results[" + b + "], 10) - 1;\n", s: "(\\d{1,2})"};
        case"t":
            return {g: 0, c: null, s: "\\d{1,2}"};
        case"L":
            return {g: 0, c: null, s: "(?:1|0)"};
        case"Y":
            return {g: 1, c: "y = parseInt(results[" + b + "], 10);\n", s: "(\\d{4})"};
        case"y":
            return {
                g: 1,
                c: "var ty = parseInt(results[" + b + "], 10);\ny = ty > Date.y2kYear ? 1900 + ty : 2000 + ty;\n",
                s: "(\\d{1,2})"
            };
        case"a":
            return {
                g: 1,
                c: "if (results[" + b + "] == 'am') {\nif (h == 12) { h = 0; }\n} else { if (h < 12) { h += 12; }}",
                s: "(am|pm)"
            };
        case"A":
            return {
                g: 1,
                c: "if (results[" + b + "] == 'AM') {\nif (h == 12) { h = 0; }\n} else { if (h < 12) { h += 12; }}",
                s: "(AM|PM)"
            };
        case"g":
        case"G":
        case"h":
        case"H":
            return {g: 1, c: "h = parseInt(results[" + b + "], 10);\n", s: "(\\d{1,2})"};
        case"i":
            return {g: 1, c: "i = parseInt(results[" + b + "], 10);\n", s: "(\\d{2})"};
        case"s":
            return {g: 1, c: "s = parseInt(results[" + b + "], 10);\n", s: "(\\d{2})"};
        case"O":
            return {g: 0, c: null, s: "[+-]\\d{4}"};
        case"T":
            return {g: 0, c: null, s: "[A-Z]{3}"};
        case"Z":
            return {g: 0, c: null, s: "[+-]\\d{1,5}"};
        default:
            return {g: 0, c: null, s: String.escape(a)}
    }
}, Date.prototype.getTimezone = function () {
    return this.toString().replace(/^.*? ([A-Z]{3}) [0-9]{4}.*$/, "$1").replace(/^.*?\(([A-Z])[a-z]+ ([A-Z])[a-z]+ ([A-Z])[a-z]+\)$/, "$1$2$3")
}, Date.prototype.getGMTOffset = function () {
    return (this.getTimezoneOffset() > 0 ? "-" : "+") + String.leftPad(Math.floor(Math.abs(this.getTimezoneOffset()) / 60), 2, "0") + String.leftPad(Math.abs(this.getTimezoneOffset()) % 60, 2, "0")
}, Date.prototype.getDayOfYear = function () {
    var a = 0;
    Date.daysInMonth[1] = this.isLeapYear() ? 29 : 28;
    for (var b = 0; b < this.getMonth(); ++b)a += Date.daysInMonth[b];
    return a + this.getDate()
}, Date.prototype.getWeekOfYear = function () {
    var a = this.getDayOfYear() + (4 - this.getDay()), b = new Date(this.getFullYear(), 0, 1), c = 7 - b.getDay() + 4;
    return String.leftPad(Math.ceil((a - c) / 7) + 1, 2, "0")
}, Date.prototype.isLeapYear = function () {
    var a = this.getFullYear();
    return 0 == (3 & a) && (a % 100 || a % 400 == 0 && a)
}, Date.prototype.getFirstDayOfMonth = function () {
    var a = (this.getDay() - (this.getDate() - 1)) % 7;
    return 0 > a ? a + 7 : a
}, Date.prototype.getLastDayOfMonth = function () {
    var a = (this.getDay() + (Date.daysInMonth[this.getMonth()] - this.getDate())) % 7;
    return 0 > a ? a + 7 : a
}, Date.prototype.getDaysInMonth = function () {
    return Date.daysInMonth[1] = this.isLeapYear() ? 29 : 28, Date.daysInMonth[this.getMonth()]
}, Date.prototype.getSuffix = function () {
    switch (this.getDate()) {
        case 1:
        case 21:
        case 31:
            return "st";
        case 2:
        case 22:
            return "nd";
        case 3:
        case 23:
            return "rd";
        default:
            return "th"
    }
}, String.escape = function (a) {
    return a.replace(/('|\\)/g, "\\$1")
}, String.leftPad = function (a, b, c) {
    var d = new String(a);
    for (null == c && (c = " "); d.length < b;)d = c + d;
    return d
}, Date.daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Date.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], Date.dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], Date.y2kYear = 50, Date.monthNumbers = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11
}, Date.patterns = {
    ISO8601LongPattern: "Y-m-d H:i:s",
    ISO8601ShortPattern: "Y-m-d",
    ShortDatePattern: "n/j/Y",
    LongDatePattern: "l, F d, Y",
    FullDateTimePattern: "l, F d, Y g:i:s A",
    MonthDayPattern: "F d",
    ShortTimePattern: "g:i A",
    LongTimePattern: "g:i:s A",
    SortableDateTimePattern: "Y-m-d\\TH:i:s",
    UniversalSortableDateTimePattern: "Y-m-d H:i:sO",
    YearMonthPattern: "F, Y"
}, function (a) {
    a.fn.fitToFill = function (b) {
        function c() {
            g.each(function () {
                var b = a(this).width(), c = a(this).height(), b = a(this).attr("width"), c = a(this).attr("height"), d = a(this).parent(), e = d.width() / d.height();
                if (b / c > e) {
                    var f = d.height() / c, g = b * f;
                    a(this).css({height: d.height() + "px", width: g + "px", "max-width": b * f + "px"})
                } else {
                    var f = d.width() / b, h = c * f;
                    a(this).css({height: h + "px", width: d.width() + "px", "max-width": d.width() + "px"})
                }
                a(this).css({"margin-top": -a(this).height() / 2 + "px", "margin-left": -a(this).width() / 2 + "px"})
            })
        }

        function d() {
            g.parent().each(function () {
                var b = Math.floor(a(this).parent().outerWidth() * f.aspect) + 1, c = Math.floor(a(this).parent().outerWidth()) + 1;
                a(this).css({width: c + "px", height: b + "px"})
            })
        }

        var e = {container: '<div class="img-frame"></div>', aspect: 1}, f = a.extend({}, e, b), g = a(this);
        g.wrap(f.container), g.parent().css({overflow: "hidden", position: "relative"}), g.css({
            position: "absolute",
            top: "50%",
            left: "50%"
        }), a(window).load(function () {
            d(), c()
        }), a(window).resize(function () {
            d(), c()
        })
    }
}(jQuery);
var sc = {};
sc = {
    page: "",
    mobile: !1,
    mobileSafari: !1,
    mobileNav: !1,
    wh: $(window).height(),
    ww: $(window).width(),
    gallery: {hidden: !0, odd: !0, reverse: !1, loaded: !1},
    initAccordion: function () {
        $(".two-columns").css({height: $(".two-columns").height()});
        var a;
        $(".accordion-header").click(function () {
            a = $(this).next(), sc.toggleAccordian(a), $(this).toggleClass("selected")
        })
    },
    toggleAccordian: function (a) {
        var b = a.hasClass("collapsed") ? a[0].scrollHeight : 0;
        a.css({height: b + "px"}), a.toggleClass("collapsed"), a.parent().find(".plus").toggleClass("plus-bar")
    },
    updateAccordion: function (a) {
        a.css({height: a[0].scrollHeight})
    },
    addMap: function (a) {
        var b, c, d, e, f = a.attr("id"), g = a.attr("data-lat"), h = a.attr("data-lng"), d = parseInt(a.attr("data-zoom")) || 8, c = parseInt(a.attr("data-mobile-zoom")) || 1, e = sc.mobile ? c : d;
        if (console.log(a.attr("data-markers")), mapCenter = new google.maps.LatLng(g, h), mapOptions = {
                zoom: e,
                maxZoom: 16,
                minZoom: 1,
                disableDefaultUI: !1,
                panControl: !1,
                zoomControl: !1,
                zoomControlOptions: {style: google.maps.ZoomControlStyle.LARGE},
                scaleControl: !1,
                scrollwheel: !1,
                navigationControl: !0,
                mapTypeControl: !1,
                draggable: !sc.mobile,
                center: mapCenter,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }, map = new google.maps.Map(document.getElementById(f), mapOptions), a.attr("data-markers")) {
            var i = $.parseJSON(a.attr("data-markers"));
            if (i.length) {
                var j = new google.maps.MarkerImage("/assets/img/icon/sc-map-marker.png", null, null, new google.maps.Point(25, 25), new google.maps.Size(50, 50));
                $.each(i, function (a, c) {
                    var d = new google.maps.Marker({
                        position: new google.maps.LatLng(c.lat, c.lng),
                        icon: j,
                        map: map
                    }), e = "";
                    e = c.url.length > 0 ? '<a href="' + c.url + '">' + c.title + "</a>" : c.title;
                    var f = new google.maps.InfoWindow({content: e});
                    google.maps.event.addListener(d, "click", function () {
                        void 0 !== b && b.close(), f.open(map, d), b = f
                    }), google.maps.event.addListener(map, "click", function () {
                        f.close()
                    })
                })
            }
        }
        google.maps.event.addDomListener(window, "load", map)
    },
    initMobile: function () {
        $(".btn-mobile").click(function () {
            sc.openMobileNav()
        }), $(".btn-close").click(function () {
            sc.closeMobileNav()
        }), $(window).resize(function () {
            $(window).width() >= 641 ? sc.mobileNav ? (sc.closeMobileNav(), $(".btn-mobile").hide(), $(".nav").css({display: "inline-block"}), $(".nav").show()) : ($(".nav").css({display: "inline-block"}), $(".btn-mobile").hide()) : $(window).width() <= 640 && (sc.mobileNav ? sc.openMobileNav() : ($(".nav").css({display: "none"}), $(".btn-mobile").show()))
        })
    },
    openMobileNav: function () {
        var a = $(window).scrollTop();
        $(".logo-mobile").hide(), $(".btn-mobile").hide(), $(".navbar").addClass("navbar-mobile"), $(".navbar-inner").addClass("navbar-mobile"), $(".navbar-inner").css({top: a}), $(".nav").fadeIn(), $(".mobile-follow").fadeIn(), $(".btn-close").fadeIn(), document.ontouchmove = function (a) {
            a.preventDefault()
        }, sc.mobileNav = !0
    },
    closeMobileNav: function () {
        $(".navbar").fadeOut(function () {
            $(".navbar").removeClass("navbar-mobile"), $(".navbar-inner").removeClass("navbar-mobile"), $(".nav").hide(), $(".btn-close").hide(), $(".mobile-follow").hide(), $(".btn-mobile").show(), $(".logo-mobile").show(), $(".navbar").fadeIn()
        }), document.ontouchmove = function () {
            return !0
        }, sc.mobileNav = !1
    },
    initGallery: function () {
        $(".grid-image").fitToFill({aspect: 1}), $("#gallery-scroll>.thumbnail>img.lazy").each(function () {
            sc.updateScrollImage($(this))
        }), $("#menu").click(function () {
            $(".gallery-slide").toggleClass("slide-expanded"), $(".gallery-navbar").toggleClass("gallery-navbar-expanded")
        }), $(".scroll-to-top").click(function () {
            window.scrollTo(0, 1)
        }), $(".switch-view").click(function () {
            $(this).toggleClass("gal-nav-grid").toggleClass("gal-nav-list"), sc.gallery.hidden ? ($("#gallery-grid").show(), $("#gallery-scroll").hide(), $(".scroll-to-top").hide(), sc.gallery.loaded, sc.gallery.hidden = !1, sc.gallery.loaded = !0) : ($("#gallery-grid").hide(), $("#gallery-scroll").show(), $(".scroll-to-top").show(), sc.gallery.hidden = !0), $("img.lazy").trigger("switch")
        });
        var a;
        $(".lightbox-trigger").click(function (b) {
            b.preventDefault(), a = $(this).parent().find("img"), $("#lightbox-content").html('<img src="' + a.attr("data-full") + '" />'), $("#lightbox").show()
        }), $("#lightbox .lb-close").click(function () {
            $("#lightbox").hide()
        }), $("#lightbox .lb-arrow-left").click(function () {
            var b;
            b = a.parent().parent().is(".thumbnail:first-child") ? $("#gallery-grid .thumbnail:last-child").find("img") : a.parent().parent().prev().find("img"), $("#lightbox-content").html('<img src="' + b.attr("src") + '" />'), a = b
        }), $("#lightbox .lb-arrow-right, #lightbox-content").click(function () {
            var b;
            b = a.parent().parent().is(".thumbnail:last-child") ? $("#gallery-grid .thumbnail:first-child").find("img") : a.parent().parent().next().find("img"), $("#lightbox-content").html('<img src="' + b.attr("src") + '" />'), a = b
        });
        var b;
        $(window).resize(function () {
            sc.gallery.hidden || (clearTimeout(b), b = setTimeout(sc.updateGridImage($("#gallery-grid>.thumbnail>img.lazy")), 100))
        })
    },
    updateScrollImage: function (a) {
        var b = parseInt(a.attr("width")), c = parseInt(a.attr("height")), d = a.parent().prev(), e = d.children("img.lazy"), f = b / c > c / b ? !0 : !1;
        if (!f || sc.gallery.reverse) {
            var g = $(window).innerWidth(), h = parseInt(e.attr("width")), i = parseInt(e.attr("height"));
            if (i / h > h / i && !sc.gallery.reverse)return sc.gallery.reverse = !0, sc.gallery.odd = !sc.gallery.odd, void 0;
            sc.gallery.reverse = !1;
            var j = c / i, k = g / (b + h * j), l = b * k / g * 100;
            a.parent().css({width: l + "%"}), d.css({width: 100 - l + "%"}), d.prev().hasClass("right-thumb") || d.prev().hasClass("left-thumb") || (sc.gallery.odd ? d.addClass("right-thumb") : d.addClass("left-thumb")), sc.gallery.odd = !sc.gallery.odd
        }
    },
    initForms: function () {
        $(".select").click(function () {
            return $(this).children("ul").slideToggle(150), $(this).hasClass("open") ? ($(this).removeClass("open"), !1) : ($(this).addClass("open"), !1)
        }).hover(function () {
        }, function () {
            $(this).children("ul").slideUp(150), $(this).removeClass("open")
        }), $(".select ul li").click(function () {
            var a = $(this).html(), b = $(this).attr("id");
            $(this).siblings("li").removeClass("selected"), $(this).addClass("selected"), $(this).parent("ul").siblings("span.value").html(a), $(this).parent("ul").siblings("span.value").addClass("selected"), $(this).parent("ul").siblings("input").val(b)
        }), $(".checkbox > .text").bind("click", function () {
            var a = $(this).parent().find("input");
            a.prop("checked") ? a.prop("checked", !1) : a.prop("checked", !0)
        }), $("#cabinForm button").click(function (a) {
            form = $("#cabinForm"), button = form.find("button"), inputs = form.find("input[type=text]");
            var b = !1;
            $.each(inputs, function () {
                console.log($(this).val()), "" != $(this).val() && "0" != $(this).val() && (b = !0)
            }), b ? form.submit() : (a.preventDefault(), button.text("Please select cabins"))
        }), $("#passForm").submit(function (a) {
            form = $(this), button = form.find("button"), form.find(".validateName").each(function () {
                "" == $(this).val() && (a.preventDefault(), button.text("Please check passengers"))
            })
        }), $("#contactForm").submit(function (a) {
            a.preventDefault(), form = $(this), button = form.find("button"), $.ajax({
                url: "/includes/mail.php",
                data: form.serialize(),
                beforeSend: function () {
                    button.text("Sending...")
                },
                success: function (a) {
                    resp = $.parseJSON(a), button.text(resp.msg), $("input, textarea,select").removeClass("error"), resp.err && $.each(resp.err, function (a, b) {
                        form.find("[name=" + b + "]").addClass("error")
                    })
                }
            })
        })
    },
    init: function () {
        var a = window.navigator.userAgent;
        (a.match(/iPad/i) || a.match(/iPhone/i)) && (sc.mobileSafari = !0), sc.mobile = window.mobilecheck(), sc.mobileSafari && (sc.wh += 60), $("img.lazy").lazyload({
            effect: "fadeIn",
            event: "scroll switch",
            threshold: 712
        }), sc.mobile || $("img.img-fill").fitToFill({aspect: .7}), $("#newsForm").submit(function (a) {
            a.preventDefault(), form = $(this), input = form.find("input"), $.ajax({
                url: "/includes/newsletter.php",
                data: form.serialize(),
                beforeSend: function () {
                    input.val("Sending...")
                },
                success: function (a) {
                    resp = $.parseJSON(a), input.val(resp.msg)
                }
            })
        }), $(".banner").ready(function () {
            setTimeout(function () {
                $(".banner").css({opacity: 1}), $(".loading").css({opacity: 0})
            }, 500)
        })
    },
    initHome: function () {
        $(".logo").data("opacity");
        $(".logo").toggleClass("fadeinA"), $(".siteName").toggleClass("fadeinB"), $(".action").toggleClass("fadeinC"), $("#menu").click(function () {
            $(".nav").toggleClass("navbarA")
        }), $(window).resize(function () {
            $(window).height() > 650 && $(".banner-home").height($(window).height())
        }).resize(), $(window).scroll(function () {
            offset = $(window).scrollTop();
            var a = $(".navbar");
            0 == offset || 1 > offset ? a.hasClass("navbar-inverse") || a.addClass("navbar-inverse") : offset > 0 && a.hasClass("navbar-inverse") && a.removeClass("navbar-inverse")
        }), $(".action").removeClass("trans").addClass("trans3"), sc.addMap($(".map"))
    },
    initJourney: function () {
        $(".map").each(function () {
            $(this).attr("data-lat").length > 0 && $(this).attr("data-lng").length > 0 && sc.addMap($(this))
        }), $(".journey-dropdowns select").change(function () {
            window.location = $(this).find("option:selected").attr("data-href")
        })
    },
    initBoats: function () {
        $(".viewBoats").click(function () {
            "View Boats" == $(this).text() ? $(this).text("Close Boats") : $(this).text("View Boats"), $(".boatContainer").slideToggle(150)
        }), $(".infoTextBlock .infoTitle").click(function (a) {
            a.preventDefault(), $(this).parent().parent().find(".infoText").slideToggle(150), $(this).siblings().toggleClass("plus-bar")
        }), $("#cabinForm .cabinOptions").hover(function () {
            idx = $(this).data("idx"), $(this).parent().find(".cabinPhoto img[data-idx=" + idx + "]").show()
        }, function () {
            $(this).parent().find(".cabinPhoto img[data-idx=" + idx + "]").hide()
        }), $("#cabinForm .addOns .addon-container").hover(function () {
            idx = $(this).data("idx"), console.log(idx), $(this).parent().parent().parent().find(".longDescription div[data-idx=" + idx + "]").show()
        }, function () {
            $(this).parent().parent().parent().find(".longDescription div[data-idx=" + idx + "]").hide()
        })
    }
}, $(function () {
    switch (sc.init(), sc.initMobile(), $("body").attr("class")) {
        case"home":
            sc.initHome();
            break;
        case"booking":
            sc.initAccordion(), sc.initForms();
            break;
        case"booking-cabin":
            sc.initAccordion(), sc.initForms(), sc.initBoats();
            break;
        case"booking-passengers":
            sc.initAccordion(), sc.initForms(), $("#cabin").click(function (a) {
                a.preventDefault(), window.location = $(this).data("href")
            });
            break;
        case"booking-billing":
            sc.initAccordion(), sc.initForms(), $("#cabin").click(function (a) {
                a.preventDefault(), window.location = $(this).data("href")
            }), $("#passengers").click(function (a) {
                a.preventDefault(), window.location = $(this).data("href")
            });
            break;
        case"booking-payment":
            sc.initAccordion(), sc.initForms(), $("#cabin").click(function (a) {
                a.preventDefault(), window.location = $(this).data("href")
            }), $("#passengers").click(function (a) {
                a.preventDefault(), window.location = $(this).data("href")
            }), $("#billing").click(function (a) {
                a.preventDefault(), window.location = $(this).data("href")
            });
            break;
        case"contact":
            sc.initForms();
            break;
        case"galleries":
            break;
        case"gallery":
            sc.ww >= 640 && sc.initGallery();
            break;
        case"information":
            sc.initAccordion(), sc.initForms();
            break;
        case"journey":
            sc.initJourney(), sc.initAccordion();
            break;
        case"thankyou":
    }
}), window.mobilecheck = function () {
    var a = !1;
    return function (b) {
        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(b) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0, 4))) && (a = !0)
    }(navigator.userAgent || navigator.vendor || window.opera), a
}, function (a) {
    a.fn.mockup = function (b) {
        var c = {}, d = a(this);
        return this.each(function () {
            function e(a) {
                a.preventDefault(), i = parseInt(a.clientX - r), j = parseInt(a.clientY - s), p = i - n, q = j - o, m = !0
            }

            function f(a) {
                a.preventDefault(), i = parseInt(a.clientX - r), j = parseInt(a.clientY - s), n = i - p, o = j - q, m = !1
            }

            function g(a) {
                a.preventDefault(), i = parseInt(a.clientX - r), j = parseInt(a.clientY - s), m = !1
            }

            function h(a) {
                a.preventDefault(), i = parseInt(a.clientX - r), j = parseInt(a.clientY - s), m && k.offset({
                    top: -1 * (q - j),
                    left: -1 * (p - i)
                })
            }

            b && a.extend(c, b), a(window).keydown(function (a) {
                68 === a.keyCode && (console.log(d), window.resizeTo(1200, window.innerHeight), d.toggleClass("hide")), 49 === a.keyCode && (d.find("img").addClass("hide"), d.find("img.d1").removeClass("hide"), reset(".d1")), 50 === a.keyCode && (d.find("img").addClass("hide"), d.find("img.d2").removeClass("hide"), reset(".d2")), 51 === a.keyCode && (d.find("img").addClass("hide"), d.find("img.d3").removeClass("hide"), reset(".d3")), 52 === a.keyCode && (d.find("img").addClass("hide"), d.find("img.d4").removeClass("hide"), reset(".d4")), 53 === a.keyCode && (d.find("img").addClass("hide"), d.find("img.d5").removeClass("hide"), reset(".d5"))
            }), reset = function (b) {
                k = a(b), l = k.offset(), m = !1, n = 0, o = 0, p = n, q = o, r = l.left, s = l.top
            };
            var i, j, k = a(".d1"), l = k.offset(), m = !1, n = 0, o = 0, p = n, q = o, r = l.left, s = l.top;
            d.mousedown(function (a) {
                e(a)
            }), d.mousemove(function (a) {
                h(a)
            }), d.mouseup(function (a) {
                f(a)
            }), d.mouseout(function (a) {
                g(a)
            })
        })
    }
}(jQuery), InfoBox.prototype = new google.maps.OverlayView, InfoBox.prototype.remove = function () {
    this.div_ && (this.div_.parentNode.removeChild(this.div_), this.div_ = null)
}, InfoBox.prototype.draw = function () {
    if (this.createElement(), this.div_) {
        var a = this.getProjection().fromLatLngToDivPixel(this.latlng_);
        a && (this.div_.style.width = this.div_.offsetWidth + "px", this.div_.style.left = a.x + this.offsetHorizontal_ + "px", this.div_.style.height = this.height_ + "px", this.div_.style.top = a.y + this.offsetVertical_ + "px", this.div_.style.display = "block")
    }
}, InfoBox.prototype.createElement = function () {
    var a = this.getPanes(), b = this.div_;
    if (b) b.parentNode != a.floatPane && (b.parentNode.removeChild(b), a.floatPane.appendChild(b)); else {
        b = this.div_ = document.createElement("div"), b.setAttribute("class", "info-box"), b.style.border = "2px #fff solid", b.style.position = "absolute", b.style.height = this.height_ + "px";
        var c = document.createElement("div");
        c.style.padding = "4px 5px", c.setAttribute("class", "info-content"), c.innerHTML = "<b>" + this.content + "</b>";
        var d = document.createElement("div");
        b.style.background = this.color, d.style.background = this.color, d.setAttribute("class", "arrow-down"), b.appendChild(c), b.appendChild(d), a.floatPane.appendChild(b), this.panMap()
    }
}, InfoBox.prototype.panMap = function () {
    var a = this.map_, b = a.getBounds();
    if (b) {
        var c = this.latlng_, d = this.width_, e = this.height_, f = this.offsetHorizontal_, g = this.offsetVertical_, h = 40, i = 40, j = a.getDiv(), k = j.offsetWidth, l = j.offsetHeight, m = b.toSpan(), n = m.lng(), o = m.lat(), p = n / k, q = o / l, r = b.getSouthWest().lng(), s = b.getNorthEast().lng(), t = b.getNorthEast().lat(), u = b.getSouthWest().lat(), v = c.lng() + (f - h) * p, w = c.lng() + (f + d + h) * p, x = c.lat() - (g - i) * q, y = c.lat() - (g + e + i) * q, z = (r > v ? r - v : 0) + (w > s ? s - w : 0), A = (x > t ? t - x : 0) + (u > y ? u - y : 0), B = a.getCenter(), C = B.lng() - z, D = B.lat() - A;
        a.setCenter(new google.maps.LatLng(D, C)), google.maps.event.removeListener(this.boundsChangedListener_), this.boundsChangedListener_ = null
    }
};
//# sourceMappingURL=js/sc.min.js.map

/**
 * Created by Елена on 28.03.2018.
 */
