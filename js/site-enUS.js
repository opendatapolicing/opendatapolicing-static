$(window).on('load', function() {
    $(document).click(function(e) {
            var $target = $(e.target);
            if ($target.is($target.closest('.w3-modal'))) {
                    $target.hide();
            }
    });
});

$(document).ready(function() {
    $('.datepicker').datePicker({
    weekDays: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
    , months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            , readValue: function(element) {
                    if (!element.value) {
                            var d = new Date();
                            var s = moment(d).format('YYYY-MM-DD'); 
                            return s; // initial time if empty
                    }
                    var result = moment(element.value, 'MM/DD/YYYY').format('YYYY-MM-DD');
                    return result; // triggers default behavior
            }
            , renderValue: function(container, element, value) {
                    element.value = moment(value, 'YYYY-MM-DD').format('MM/DD/YYYY');
            }
    });
    $('.timepicker').datePicker({
            timeFormat: "HH:mm a"
            , readValue: function(element) {
                    if (!element.value) {
                            return moment().format('h:mm a'); // initial time if empty
                    }
                    return element.value; // triggers default behavior
            }
    });
});

$(document).keypress(function(e) {
    if (e.keyCode == 27) {
            $('.w3-modal').filter(':visible').hide();
    }
});

/*
* http://blog.stevenlevithan.com/archives/date-time-format Date Format 1.2.3
* (c) 2007-2009 Steven Levithan <stevenlevithan.com> MIT license
* 
* Includes enhancements by Scott Trenda <scott.trenda.net> and Kris Kowal
* <cixar.com/~kris.kowal/>
* 
* Accepts a date, a mask, or a date and a mask. Returns a formatted version of
* the given date. The date defaults to the current date/time. The mask defaults
* to dateFormat.masks.default.
*/

var dateFormat = function () {
    var     token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
            timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
            timezoneClip = /[^-+\dA-Z]/g,
            pad = function (val, len) {
                    val = String(val);
                    len = len || 2;
                    while (val.length < len) val = "0" + val;
                    return val;
            };

    // Regexes and supporting functions are cached through closure
    return function (date, mask, utc) {
            var dF = dateFormat;

            // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
            if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
                    mask = date;
                    date = undefined;
            }

            // Passing date through Date applies Date.parse, if necessary
            date = date ? new Date(date) : new Date;
            if (isNaN(date)) throw SyntaxError("invalid date");

            mask = String(dF.masks[mask] || mask || dF.masks["default"]);

            // Allow setting the utc argument via the mask
            if (mask.slice(0, 4) == "UTC:") {
                    mask = mask.slice(4);
                    utc = true;
            }

            var     _ = utc ? "getUTC" : "get",
                    d = date[_ + "Date"](),
                    D = date[_ + "Day"](),
                    m = date[_ + "Month"](),
                    y = date[_ + "FullYear"](),
                    H = date[_ + "Hours"](),
                    M = date[_ + "Minutes"](),
                    s = date[_ + "Seconds"](),
                    L = date[_ + "Milliseconds"](),
                    o = utc ? 0 : date.getTimezoneOffset(),
                    flags = {
                            d:    d,
                            dd:   pad(d),
                            ddd:  dF.i18n.dayNames[D],
                            dddd: dF.i18n.dayNames[D + 7],
                            m:    m + 1,
                            mm:   pad(m + 1),
                            mmm:  dF.i18n.monthNames[m],
                            mmmm: dF.i18n.monthNames[m + 12],
                            yy:   String(y).slice(2),
                            yyyy: y,
                            h:    H % 12 || 12,
                            hh:   pad(H % 12 || 12),
                            H:    H,
                            HH:   pad(H),
                            M:    M,
                            MM:   pad(M),
                            s:    s,
                            ss:   pad(s),
                            l:    pad(L, 3),
                            L:    pad(L > 99 ? Math.round(L / 10) : L),
                            t:    H < 12 ? "a"  : "p",
                            tt:   H < 12 ? "am" : "pm",
                            T:    H < 12 ? "A"  : "P",
                            TT:   H < 12 ? "AM" : "PM",
                            Z:    utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
                            o:    (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
                            S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
                    };

            return mask.replace(token, function ($0) {
                    return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
            });
    };
}();

//Some common format strings
dateFormat.masks = {
    "default":      "ddd mmm dd yyyy HH:MM:ss",
    shortDate:      "m/d/yy",
    mediumDate:     "mmm d, yyyy",
    longDate:       "mmmm d, yyyy",
    fullDate:       "dddd, mmmm d, yyyy",
    shortTime:      "h:MM TT",
    mediumTime:     "h:MM:ss TT",
    longTime:       "h:MM:ss TT Z",
    isoDate:        "yyyy-mm-dd",
    isoTime:        "HH:MM:ss",
    isoDateTime:    "yyyy-mm-dd'T'HH:MM:ss",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};

//Internationalization strings
dateFormat.i18n = {
    dayNames: [
            "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
            "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ],
    monthNames: [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
            "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ]
};

function parseTime(timeString) {
    if (timeString == '') return null;
    var d = new Date();
    var time = timeString.match(/(\d+)(:(\d\d))?\s*([Pp]?)/);
    d.setHours( parseInt(time[1]) + ( ( parseInt(time[1]) < 12 && time[4] ) ? 12 : 0) );
    d.setMinutes( parseInt(time[3]) || 0 );
    d.setSeconds(0, 0);
    return d;
}

function addGlow($input) {
    $input.addClass('glowSuccess');
    $input.removeClass('glowError');
}

function removeGlow($input) {
    $input.removeClass('glowSuccess');
    $input.removeClass('glowError');
}

function addError($input) {
    $input.removeClass('glowSuccess');
    $input.addClass('glowError');
}

function ajouterRemplacer($input) {
    var idListe = $input.attr('data-id'); 
            $liste = null; 
    if(idListe != null) {
    }
    $form = $input.closest('form');
    $icone = $input.prev('i');
    $icone.addClass('w3-spin-fast');
    $icone.show();
    $.ajax({
            url: $form.attr('action')
            , type: 'GET'
            , timeout: 10000
            , contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
            , data: $form.serialize()
            , success: function(json, statusText, xhr, $form) { 
                    for (var key in json) {
                            if (data.hasOwnProperty(key)) {
                                    var str = data[key];
                                    $elem = $('#' + idListe); 
                                    if($elem != null) {
                                            $elem.replaceWith(str); 
                                    }
                            }
                    }
                    $icone.removeClass('w3-spin-fast');
            } 
            , error: function()  { 
                    $icone.removeClass('w3-spin-fast');
            } 
    }); 
    return false; 
}

function rechercher($input) {
    $form = $input.closest('form');
    $icone = $input.prev('i');
    $icone.addClass('w3-spin-fast');
    $icone.show();
    window.location.href = $form.attr('action') + '?q=' + encodeURIComponent($input.attr('name') + ':' + encodeURIComponent($input.val()));
    return false; 
}

function suggere($input) {
    var idListe = $input.attr('data-id'); 
            $liste = null; 
    if(idListe != null) {
            $liste = $('#' + idListe); 
    }
    $form = $input.closest('form');
    $icone = $input.prev('i');
    $icone.addClass('w3-spin-fast');
    $icone.show();
    $.ajax({
            url: $form.attr('action')
            , type: 'GET'
            , timeout: 5000
            , contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
            , data: $form.serialize()
            , success: function(json, statusText, xhr, $form) { 
                    for (var id in json) {
                            if (json.hasOwnProperty(id)) {
                                    var str = json[id];
                                    $elem = $('#' + id); 
                                    if($elem != null) {
                                            $elem.replaceWith(str); 
                                    }
                            }
                    }
//                  if($liste != null) {
//                          $liste.replaceWith(responseText); 
//                  }
                    $icone.removeClass('w3-spin-fast');
            } 
            , error: function()  { 
                    $icone.removeClass('w3-spin-fast');
            } 
    }); 
    return false; 
}

function envoyerFormulaire($inputEnfant, $lueur) {
    $form = $inputEnfant.closest('form');
    $icone = $form.prev('i');
    $icone.addClass('w3-spin-fast');
    $icone.removeClass('w3-hide');
    $.ajax({
            url: $form.attr('action')
            , type: 'POST'
            , contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
            , data: $form.serialize()
            , success: function(json, statusText, xhr, $form) { 
                    for (var id in json) {
                            if (json.hasOwnProperty(id)) {
                                    var str = json[id];
                                    $elem = $('#' + id); 
                                    if($elem != null) {
                                            $elem.replaceWith(str); 
                                    }
                            }
                    }

//                  var idParent = $inputEnfant.attr('data-idParent'); 
//                  if(idParent != null) {
//                          $inputParent = $('#' + idParent); 
//                          if(idParent != null) {
//                                  $inputEnfant.prop('checked', $inputEnfant.prop('checked')); 
//                                  envoyerFormulaire($inputParent, $lueur); 
//                          }
//                  }
//                  else if($lueur != null)
                            $lueur.addClass('glowSuccess');
                            $icone.removeClass('w3-spin-fast');
                            $icone.addClass('w3-hide');
            } 
            , error: function()  { 
                    $lueur.addClass('glowError');
                    document.getElementById('modalError').style.display='block'; 
                    $icone.removeClass('w3-spin-fast');
                    $icone.addClass('w3-hide');
            } 
    }); 
    return false; 
}

//Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction(s) {
    var x = document.getElementById(s);
    if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
    } else {
            x.className = x.className.replace(" w3-show", "");
    }
}

function patchSiteUserBase($formFilters, $formValues) {
    var filters = [];

    var filterCreated = $formFilters.find('.valueCreated').val();
    if(filterCreated != null && filterCreated !== '')
            filters.push({ name: 'fq', value: 'created:' + filterCreated });

    var filterModified = $formFilters.find('.valueModified').val();
    if(filterModified != null && filterModified !== '')
            filters.push({ name: 'fq', value: 'modified:' + filterModified });

    var filterUserId = $formFilters.find('.valueUserId').val();
    if(filterUserId != null && filterUserId !== '')
            filters.push({ name: 'fq', value: 'userId:' + filterUserId });

    var filterSeeArchived = $formFilters.find('.valueSeeArchived').prop('checked');
    if(filterSeeArchived != null && filterSeeArchived === true)
            filters.push({ name: 'fq', value: 'seeArchived:' + filterSeeArchived });

    var filterSeeDeleted = $formFilters.find('.valueSeeDeleted').prop('checked');
    if(filterSeeDeleted != null && filterSeeDeleted === true)
            filters.push({ name: 'fq', value: 'seeDeleted:' + filterSeeDeleted });

    var filterPk = $formFilters.find('.valuePk').val();
    if(filterPk != null && filterPk !== '')
            filters.push({ name: 'fq', value: 'pk:' + filterPk });

    var filterId = $formFilters.find('.valueId').val();
    if(filterId != null && filterId !== '')
            filters.push({ name: 'fq', value: 'id:' + filterId });

    var filterArchived = $formFilters.find('.valueArchived').prop('checked');
    if(filterArchived != null && filterArchived === true)
            filters.push({ name: 'fq', value: 'archived:' + filterArchived });

    var filterDeleted = $formFilters.find('.valueDeleted').prop('checked');
    if(filterDeleted != null && filterDeleted === true)
            filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

    var filterClassCanonicalName = $formFilters.find('.valueClassCanonicalName').val();
    if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
            filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

    var filterClassSimpleName = $formFilters.find('.valueClassSimpleName').val();
    if(filterClassSimpleName != null && filterClassSimpleName !== '')
            filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

    var filterClassCanonicalNames = $formFilters.find('.valueClassCanonicalNames').val();
    if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
            filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

    var filterUserName = $formFilters.find('.valueUserName').val();
    if(filterUserName != null && filterUserName !== '')
            filters.push({ name: 'fq', value: 'userName:' + filterUserName });

    var filterUserEmail = $formFilters.find('.valueUserEmail').val();
    if(filterUserEmail != null && filterUserEmail !== '')
            filters.push({ name: 'fq', value: 'userEmail:' + filterUserEmail });

    var filterUserFirstName = $formFilters.find('.valueUserFirstName').val();
    if(filterUserFirstName != null && filterUserFirstName !== '')
            filters.push({ name: 'fq', value: 'userFirstName:' + filterUserFirstName });

    var filterUserLastName = $formFilters.find('.valueUserLastName').val();
    if(filterUserLastName != null && filterUserLastName !== '')
            filters.push({ name: 'fq', value: 'userLastName:' + filterUserLastName });

    var filterUserFullName = $formFilters.find('.valueUserFullName').val();
    if(filterUserFullName != null && filterUserFullName !== '')
            filters.push({ name: 'fq', value: 'userFullName:' + filterUserFullName });

    var filterUserSite = $formFilters.find('.valueUserSite').val();
    if(filterUserSite != null && filterUserSite !== '')
            filters.push({ name: 'fq', value: 'userSite:' + filterUserSite });

    var filterUserReceiveEmails = $formFilters.find('.valueUserReceiveEmails').prop('checked');
    if(filterUserReceiveEmails != null && filterUserReceiveEmails === true)
            filters.push({ name: 'fq', value: 'userReceiveEmails:' + filterUserReceiveEmails });

    var values = {};

    var setCreated = $formValues.find('.setCreated').val();
    if(setCreated != null && setCreated !== '')
            values['setCreated'] = setCreated;
    var addCreated = $formValues.find('.addCreated').val();
    if(addCreated != null && addCreated !== '')
            values['addCreated'] = addCreated;
    var removeCreated = $formValues.find('.removeCreated').val();
    if(removeCreated != null && removeCreated !== '')
            values['removeCreated'] = removeCreated;

    var setModified = $formValues.find('.setModified').val();
    if(setModified != null && setModified !== '')
            values['setModified'] = setModified;
    var addModified = $formValues.find('.addModified').val();
    if(addModified != null && addModified !== '')
            values['addModified'] = addModified;
    var removeModified = $formValues.find('.removeModified').val();
    if(removeModified != null && removeModified !== '')
            values['removeModified'] = removeModified;

    var setUserId = $formValues.find('.setUserId').val();
    if(setUserId != null && setUserId !== '')
            values['setUserId'] = setUserId;
    var addUserId = $formValues.find('.addUserId').val();
    if(addUserId != null && addUserId !== '')
            values['addUserId'] = addUserId;
    var removeUserId = $formValues.find('.removeUserId').val();
    if(removeUserId != null && removeUserId !== '')
            values['removeUserId'] = removeUserId;

    var setSeeArchived = $formValues.find('.setSeeArchived').prop('checked');
    if(setSeeArchived != null && setSeeArchived !== '')
            values['setSeeArchived'] = setSeeArchived;
    var addSeeArchived = $formValues.find('.addSeeArchived').prop('checked');
    if(addSeeArchived != null && addSeeArchived !== '')
            values['addSeeArchived'] = addSeeArchived;
    var removeSeeArchived = $formValues.find('.removeSeeArchived').prop('checked');
    if(removeSeeArchived != null && removeSeeArchived !== '')
            values['removeSeeArchived'] = removeSeeArchived;

    var setSeeDeleted = $formValues.find('.setSeeDeleted').prop('checked');
    if(setSeeDeleted != null && setSeeDeleted !== '')
            values['setSeeDeleted'] = setSeeDeleted;
    var addSeeDeleted = $formValues.find('.addSeeDeleted').prop('checked');
    if(addSeeDeleted != null && addSeeDeleted !== '')
            values['addSeeDeleted'] = addSeeDeleted;
    var removeSeeDeleted = $formValues.find('.removeSeeDeleted').prop('checked');
    if(removeSeeDeleted != null && removeSeeDeleted !== '')
            values['removeSeeDeleted'] = removeSeeDeleted;

    $.ajax({
            url: '/enUS/api/user?' + $.param(filters)
            , dataType: 'json'
            , type: 'PATCH'
            , contentType: 'application/json; charset=utf-8'
            , data: JSON.stringify(values)
            , success: function( data, textStatus, jQxhr ) {
                    $.each( values, function( key, value ) {
                            $formValues.find('.' + key).removeClass('glowError');
                            $formValues.find('.' + key).addClass('glowSuccess');
                    });
            }
            , error: function( jqXhr, textStatus, errorThrown ) {
                    $.each( values, function( key, value ) {
                            $formValues.find('.' + key).removeClass('glowSuccess');
                            $formValues.find('.' + key).addClass('glowError');
                    });
            }
    });
}

function patchClusterBase($formulaireFiltres, $formulaireValeurs) {
    var filtres = [];

    var filtreCree = $formulaireFiltres.find('.valeurCree').val();
    if(filtreCree != null && filtreCree !== '')
            filtres.push({ name: 'fq', value: 'cree:' + filtreCree });

    var filtreModifie = $formulaireFiltres.find('.valeurModifie').val();
    if(filtreModifie != null && filtreModifie !== '')
            filtres.push({ name: 'fq', value: 'modifie:' + filtreModifie });

    var filtrePk = $formulaireFiltres.find('.valeurPk').val();
    if(filtrePk != null && filtrePk !== '')
            filtres.push({ name: 'fq', value: 'pk:' + filtrePk });

    var filtreId = $formulaireFiltres.find('.valeurId').val();
    if(filtreId != null && filtreId !== '')
            filtres.push({ name: 'fq', value: 'id:' + filtreId });

    var filtreArchive = $formulaireFiltres.find('.valeurArchive').prop('checked');
    if(filtreArchive != null && filtreArchive === true)
            filtres.push({ name: 'fq', value: 'archive:' + filtreArchive });

    var filtreSupprime = $formulaireFiltres.find('.valeurSupprime').prop('checked');
    if(filtreSupprime != null && filtreSupprime === true)
            filtres.push({ name: 'fq', value: 'supprime:' + filtreSupprime });

    var filtreClasseNomCanonique = $formulaireFiltres.find('.valeurClasseNomCanonique').val();
    if(filtreClasseNomCanonique != null && filtreClasseNomCanonique !== '')
            filtres.push({ name: 'fq', value: 'classeNomCanonique:' + filtreClasseNomCanonique });

    var filtreClasseNomSimple = $formulaireFiltres.find('.valeurClasseNomSimple').val();
    if(filtreClasseNomSimple != null && filtreClasseNomSimple !== '')
            filtres.push({ name: 'fq', value: 'classeNomSimple:' + filtreClasseNomSimple });

    var filtreClasseNomsCanoniques = $formulaireFiltres.find('.valeurClasseNomsCanoniques').val();
    if(filtreClasseNomsCanoniques != null && filtreClasseNomsCanoniques !== '')
            filtres.push({ name: 'fq', value: 'classeNomsCanoniques:' + filtreClasseNomsCanoniques });

    var valeurs = {};

    var setCree = $formulaireValeurs.find('.setCree').val();
    if(setCree != null && setCree !== '')
            valeurs['setCree'] = setCree;
    var addCree = $formulaireValeurs.find('.addCree').val();
    if(addCree != null && addCree !== '')
            valeurs['addCree'] = addCree;
    var removeCree = $formulaireValeurs.find('.removeCree').val();
    if(removeCree != null && removeCree !== '')
            valeurs['removeCree'] = removeCree;

    var setModifie = $formulaireValeurs.find('.setModifie').val();
    if(setModifie != null && setModifie !== '')
            valeurs['setModifie'] = setModifie;
    var addModifie = $formulaireValeurs.find('.addModifie').val();
    if(addModifie != null && addModifie !== '')
            valeurs['addModifie'] = addModifie;
    var removeModifie = $formulaireValeurs.find('.removeModifie').val();
    if(removeModifie != null && removeModifie !== '')
            valeurs['removeModifie'] = removeModifie;

    $.ajax({
            url: '/frFR/api/cluster?' + $.param(filtres)
            , dataType: 'json'
            , type: 'PATCH'
            , contentType: 'application/json; charset=utf-8'
            , data: JSON.stringify(valeurs)
            , success: function( data, textStatus, jQxhr ) {
                    $.each( valeurs, function( key, value ) {
                            $formulaireValeurs.find('.' + key).removeClass('lueurErreur');
                            $formulaireValeurs.find('.' + key).addClass('lueurSucces');
                    });
            }
            , error: function( jqXhr, textStatus, errorThrown ) {
                    $.each( valeurs, function( key, value ) {
                            $formulaireValeurs.find('.' + key).removeClass('lueurSucces');
                            $formulaireValeurs.find('.' + key).addClass('lueurErreur');
                    });
            }
    });
}

/*
jQuery deparam is an extraction of the deparam method from Ben Alman's jQuery BBQ
http://benalman.com/projects/jquery-bbq-plugin/
*/
(function ($) {
$.deparam = function (params, coerce) {
var obj = [],
  coerce_types = { 'true': !0, 'false': !1, 'null': null };

// Iterate over all name=value pairs.
$.each(params.replace(/\+/g, ' ').split('&'), function (j,v) {
var param = v.split('='),
    key = decodeURIComponent(param[0]),
    val,
    cur = obj,
    i = 0,
      
    // If key is more complex than 'foo', like 'a[]' or 'a[b][c]', split it
    // into its component parts.
    keys = key.split(']['),
    keys_last = keys.length - 1;
  
// Basic 'foo' style key.
keys_last = 0;

// Are we dealing with a name=value pair, or just a name?
if (param.length === 2) {
  val = decodeURIComponent(param[1]);
    
  // Coerce values.
  if (coerce) {
    val = val && !isNaN(val)              ? +val              // number
        : val === 'undefined'             ? undefined         // undefined
        : coerce_types[val] !== undefined ? coerce_types[val] // true, false, null
        : val;                                                // string
  }

  // Simple key, even simpler rules, since only scalars and shallow
  // arrays are allowed.

  // val is a scalar.
  obj.push({name: key, 'value': val});
} else if (key) {
  // No value was defined, so set something meaningful.
  obj.push({name: key, value: (coerce ? undefined : '')});
}
});

return obj;
};
})(jQuery);