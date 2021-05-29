$(window).on('load', function() {
    $(document).click(function(e) {
            var $target = $(e.target);
            if ($target.is($target.closest('.w3-modal'))) {
                    $target.hide();
            }
    });
});

$(document).keypress(function(e) {
    if (e.keyCode == 27) {
            $('.w3-modal').filter(':visible').hide();
    }
});

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