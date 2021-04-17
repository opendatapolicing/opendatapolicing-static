
// PUTImport //

async function putimportSiteAgency($formValues, pk, success, error) {
	var json = $formValues.find('.PUTImport_list').val();
	if(json != null && json !== '')
		putimportSiteAgencyVals(JSON.parse(json), success, error);
}

function putimportSiteAgencyVals(json, success, error) {
	$.ajax({
		url: '/api/agency/import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTMerge //

async function putmergeSiteAgency($formValues, pk, success, error) {
	var json = $formValues.find('.PUTMerge_list').val();
	if(json != null && json !== '')
		putmergeSiteAgencyVals(JSON.parse(json), success, error);
}

function putmergeSiteAgencyVals(json, success, error) {
	$.ajax({
		url: '/api/agency/merge'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTCopy //

async function putcopySiteAgency($formValues, pk, success, error) {
	var vals = {};

	var valuePk = $formValues.find('.valuePk').val();
	if(valuePk != null && valuePk !== '')
		vals['pk'] = valuePk;

	var valueCreated = $formValues.find('.valueCreated').val();
	if(valueCreated != null && valueCreated !== '')
		vals['created'] = valueCreated;

	var valueModified = $formValues.find('.valueModified').val();
	if(valueModified != null && valueModified !== '')
		vals['modified'] = valueModified;

	var valueAgencyName = $formValues.find('.valueAgencyName').val();
	if(valueAgencyName != null && valueAgencyName !== '')
		vals['agencyName'] = valueAgencyName;

	var valueImageLeft = $formValues.find('.valueImageLeft').val();
	if(valueImageLeft != null && valueImageLeft !== '')
		vals['imageLeft'] = valueImageLeft;

	var valueImageTop = $formValues.find('.valueImageTop').val();
	if(valueImageTop != null && valueImageTop !== '')
		vals['imageTop'] = valueImageTop;

	var valueImageCoords = $formValues.find('.valueImageCoords').val();
	if(valueImageCoords != null && valueImageCoords !== '')
		vals['imageCoords'] = valueImageCoords;

	var valueStateKey = $formValues.find('input.valueStateKey:checked').val();
	var valueStateKeyClear = $formValues.find('input.stateKey_clear:checked').val();
	if(valueStateKeyClear != null && valueStateKeyClear)
		vals['stateKey'] = null;
	else if(valueStateKey != null && valueStateKey)
		vals['stateKey'] = valueStateKey;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	if(valueInheritPk != null && valueInheritPk !== '')
		vals['inheritPk'] = valueInheritPk;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	putcopySiteAgencyVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function putcopySiteAgencyVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/agency/copy?' + $.param(filters)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify({patch: vals})
		, success: success
		, error: error
	});
}

// POST //

async function postSiteAgency($formValues, success, error) {
	var vals = {};
	if(success == null) {
		success = function( data, textStatus, jQxhr ) {
			addGlow($formValues.next('button'));
		};
	}
	if(error == null) {
		error = function( jqXhr, textStatus, errorThrown ) {
			addError($formValues.next('button'));
		};
	}

	var valuePk = $formValues.find('.valuePk').val();
	if(valuePk != null && valuePk !== '')
		vals['pk'] = valuePk;

	var valueCreated = $formValues.find('.valueCreated').val();
	if(valueCreated != null && valueCreated !== '')
		vals['created'] = valueCreated;

	var valueModified = $formValues.find('.valueModified').val();
	if(valueModified != null && valueModified !== '')
		vals['modified'] = valueModified;

	var valueAgencyName = $formValues.find('.valueAgencyName').val();
	if(valueAgencyName != null && valueAgencyName !== '')
		vals['agencyName'] = valueAgencyName;

	var valueImageLeft = $formValues.find('.valueImageLeft').val();
	if(valueImageLeft != null && valueImageLeft !== '')
		vals['imageLeft'] = valueImageLeft;

	var valueImageTop = $formValues.find('.valueImageTop').val();
	if(valueImageTop != null && valueImageTop !== '')
		vals['imageTop'] = valueImageTop;

	var valueImageCoords = $formValues.find('.valueImageCoords').val();
	if(valueImageCoords != null && valueImageCoords !== '')
		vals['imageCoords'] = valueImageCoords;

	var valueStateKey = $formValues.find('.valueStateKey').val();
	if(valueStateKey != null && valueStateKey !== '')
		vals['stateKey'] = valueStateKey;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	if(valueInheritPk != null && valueInheritPk !== '')
		vals['inheritPk'] = valueInheritPk;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	$.ajax({
		url: '/api/agency'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postSiteAgencyVals(vals, success, error) {
	$.ajax({
		url: '/api/agency'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PATCH //

async function patchSiteAgency($formFilters, $formValues, pk, success, error) {
	var filters = patchSiteAgencyFilters($formFilters);

	var vals = {};

	var valuePk = $formValues.find('.valuePk').val();
	var removePk = $formValues.find('.removePk').val() === 'true';
	var setPk = removePk ? null : $formValues.find('.setPk').val();
	var addPk = $formValues.find('.addPk').val();
	if(removePk || setPk != null && setPk !== '')
		vals['setPk'] = setPk;
	if(addPk != null && addPk !== '')
		vals['addPk'] = addPk;
	var removePk = $formValues.find('.removePk').val();
	if(removePk != null && removePk !== '')
		vals['removePk'] = removePk;

	var valueCreated = $formValues.find('.valueCreated').val();
	var removeCreated = $formValues.find('.removeCreated').val() === 'true';
	var setCreated = removeCreated ? null : $formValues.find('.setCreated').val();
	var addCreated = $formValues.find('.addCreated').val();
	if(removeCreated || setCreated != null && setCreated !== '')
		vals['setCreated'] = setCreated;
	if(addCreated != null && addCreated !== '')
		vals['addCreated'] = addCreated;
	var removeCreated = $formValues.find('.removeCreated').val();
	if(removeCreated != null && removeCreated !== '')
		vals['removeCreated'] = removeCreated;

	var valueModified = $formValues.find('.valueModified').val();
	var removeModified = $formValues.find('.removeModified').val() === 'true';
	var setModified = removeModified ? null : $formValues.find('.setModified').val();
	var addModified = $formValues.find('.addModified').val();
	if(removeModified || setModified != null && setModified !== '')
		vals['setModified'] = setModified;
	if(addModified != null && addModified !== '')
		vals['addModified'] = addModified;
	var removeModified = $formValues.find('.removeModified').val();
	if(removeModified != null && removeModified !== '')
		vals['removeModified'] = removeModified;

	var valueAgencyName = $formValues.find('.valueAgencyName').val();
	var removeAgencyName = $formValues.find('.removeAgencyName').val() === 'true';
	var setAgencyName = removeAgencyName ? null : $formValues.find('.setAgencyName').val();
	var addAgencyName = $formValues.find('.addAgencyName').val();
	if(removeAgencyName || setAgencyName != null && setAgencyName !== '')
		vals['setAgencyName'] = setAgencyName;
	if(addAgencyName != null && addAgencyName !== '')
		vals['addAgencyName'] = addAgencyName;
	var removeAgencyName = $formValues.find('.removeAgencyName').val();
	if(removeAgencyName != null && removeAgencyName !== '')
		vals['removeAgencyName'] = removeAgencyName;

	var valueImageLeft = $formValues.find('.valueImageLeft').val();
	var removeImageLeft = $formValues.find('.removeImageLeft').val() === 'true';
	var setImageLeft = removeImageLeft ? null : $formValues.find('.setImageLeft').val();
	var addImageLeft = $formValues.find('.addImageLeft').val();
	if(removeImageLeft || setImageLeft != null && setImageLeft !== '')
		vals['setImageLeft'] = setImageLeft;
	if(addImageLeft != null && addImageLeft !== '')
		vals['addImageLeft'] = addImageLeft;
	var removeImageLeft = $formValues.find('.removeImageLeft').val();
	if(removeImageLeft != null && removeImageLeft !== '')
		vals['removeImageLeft'] = removeImageLeft;

	var valueImageTop = $formValues.find('.valueImageTop').val();
	var removeImageTop = $formValues.find('.removeImageTop').val() === 'true';
	var setImageTop = removeImageTop ? null : $formValues.find('.setImageTop').val();
	var addImageTop = $formValues.find('.addImageTop').val();
	if(removeImageTop || setImageTop != null && setImageTop !== '')
		vals['setImageTop'] = setImageTop;
	if(addImageTop != null && addImageTop !== '')
		vals['addImageTop'] = addImageTop;
	var removeImageTop = $formValues.find('.removeImageTop').val();
	if(removeImageTop != null && removeImageTop !== '')
		vals['removeImageTop'] = removeImageTop;

	var valueImageCoords = $formValues.find('.valueImageCoords').val();
	var removeImageCoords = $formValues.find('.removeImageCoords').val() === 'true';
	var setImageCoords = removeImageCoords ? null : $formValues.find('.setImageCoords').val();
	var addImageCoords = $formValues.find('.addImageCoords').val();
	if(removeImageCoords || setImageCoords != null && setImageCoords !== '')
		vals['setImageCoords'] = setImageCoords;
	if(addImageCoords != null && addImageCoords !== '')
		vals['addImageCoords'] = addImageCoords;
	var removeImageCoords = $formValues.find('.removeImageCoords').val();
	if(removeImageCoords != null && removeImageCoords !== '')
		vals['removeImageCoords'] = removeImageCoords;

	var valueStateKey = $formValues.find('input.valueStateKey:checked').val();
	if(valueStateKey != null && valueStateKey !== '')
		vals['setStateKey'] = valueStateKey;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	var removeInheritPk = $formValues.find('.removeInheritPk').val() === 'true';
	var setInheritPk = removeInheritPk ? null : $formValues.find('.setInheritPk').val();
	var addInheritPk = $formValues.find('.addInheritPk').val();
	if(removeInheritPk || setInheritPk != null && setInheritPk !== '')
		vals['setInheritPk'] = setInheritPk;
	if(addInheritPk != null && addInheritPk !== '')
		vals['addInheritPk'] = addInheritPk;
	var removeInheritPk = $formValues.find('.removeInheritPk').val();
	if(removeInheritPk != null && removeInheritPk !== '')
		vals['removeInheritPk'] = removeInheritPk;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	var removeObjectTitle = $formValues.find('.removeObjectTitle').val() === 'true';
	var setObjectTitle = removeObjectTitle ? null : $formValues.find('.setObjectTitle').val();
	var addObjectTitle = $formValues.find('.addObjectTitle').val();
	if(removeObjectTitle || setObjectTitle != null && setObjectTitle !== '')
		vals['setObjectTitle'] = setObjectTitle;
	if(addObjectTitle != null && addObjectTitle !== '')
		vals['addObjectTitle'] = addObjectTitle;
	var removeObjectTitle = $formValues.find('.removeObjectTitle').val();
	if(removeObjectTitle != null && removeObjectTitle !== '')
		vals['removeObjectTitle'] = removeObjectTitle;

	patchSiteAgencyVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchSiteAgencyFilters($formFilters) {
	var filters = [];
	if($formFilters) {

		var filterPk = $formFilters.find('.valuePk').val();
		if(filterPk != null && filterPk !== '')
			filters.push({ name: 'fq', value: 'pk:' + filterPk });

		var filterCreated = $formFilters.find('.valueCreated').val();
		if(filterCreated != null && filterCreated !== '')
			filters.push({ name: 'fq', value: 'created:' + filterCreated });

		var filterModified = $formFilters.find('.valueModified').val();
		if(filterModified != null && filterModified !== '')
			filters.push({ name: 'fq', value: 'modified:' + filterModified });

		var filterAgencyName = $formFilters.find('.valueAgencyName').val();
		if(filterAgencyName != null && filterAgencyName !== '')
			filters.push({ name: 'fq', value: 'agencyName:' + filterAgencyName });

		var filterImageLeft = $formFilters.find('.valueImageLeft').val();
		if(filterImageLeft != null && filterImageLeft !== '')
			filters.push({ name: 'fq', value: 'imageLeft:' + filterImageLeft });

		var filterImageTop = $formFilters.find('.valueImageTop').val();
		if(filterImageTop != null && filterImageTop !== '')
			filters.push({ name: 'fq', value: 'imageTop:' + filterImageTop });

		var filterImageCoords = $formFilters.find('.valueImageCoords').val();
		if(filterImageCoords != null && filterImageCoords !== '')
			filters.push({ name: 'fq', value: 'imageCoords:' + filterImageCoords });

		var filterStateKey = $formFilters.find('.valueStateKey').val();
		if(filterStateKey != null && filterStateKey !== '')
			filters.push({ name: 'fq', value: 'stateKey:' + filterStateKey });

		var filterInheritPk = $formFilters.find('.valueInheritPk').val();
		if(filterInheritPk != null && filterInheritPk !== '')
			filters.push({ name: 'fq', value: 'inheritPk:' + filterInheritPk });

		var filterId = $formFilters.find('.valueId').val();
		if(filterId != null && filterId !== '')
			filters.push({ name: 'fq', value: 'id:' + filterId });

		var filterClassCanonicalName = $formFilters.find('.valueClassCanonicalName').val();
		if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
			filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

		var filterClassSimpleName = $formFilters.find('.valueClassSimpleName').val();
		if(filterClassSimpleName != null && filterClassSimpleName !== '')
			filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

		var filterClassCanonicalNames = $formFilters.find('.valueClassCanonicalNames').val();
		if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
			filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

		var filterSaves = $formFilters.find('.valueSaves').val();
		if(filterSaves != null && filterSaves !== '')
			filters.push({ name: 'fq', value: 'saves:' + filterSaves });

		var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
		if(filterObjectTitle != null && filterObjectTitle !== '')
			filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

		var filterObjectId = $formFilters.find('.valueObjectId').val();
		if(filterObjectId != null && filterObjectId !== '')
			filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

		var filterAgencyKey = $formFilters.find('.valueAgencyKey').val();
		if(filterAgencyKey != null && filterAgencyKey !== '')
			filters.push({ name: 'fq', value: 'agencyKey:' + filterAgencyKey });

		var filterStateId = $formFilters.find('.valueStateId').val();
		if(filterStateId != null && filterStateId !== '')
			filters.push({ name: 'fq', value: 'stateId:' + filterStateId });

		var filterStateName = $formFilters.find('.valueStateName').val();
		if(filterStateName != null && filterStateName !== '')
			filters.push({ name: 'fq', value: 'stateName:' + filterStateName });

		var filterStateAbbreviation = $formFilters.find('.valueStateAbbreviation').val();
		if(filterStateAbbreviation != null && filterStateAbbreviation !== '')
			filters.push({ name: 'fq', value: 'stateAbbreviation:' + filterStateAbbreviation });

		var filterAgencyOnlyName = $formFilters.find('.valueAgencyOnlyName').val();
		if(filterAgencyOnlyName != null && filterAgencyOnlyName !== '')
			filters.push({ name: 'fq', value: 'agencyOnlyName:' + filterAgencyOnlyName });

		var filterAgencyCompleteName = $formFilters.find('.valueAgencyCompleteName').val();
		if(filterAgencyCompleteName != null && filterAgencyCompleteName !== '')
			filters.push({ name: 'fq', value: 'agencyCompleteName:' + filterAgencyCompleteName });
	}
	return filters;
}

function patchSiteAgencyVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchSiteAgencyVals(filters, vals, success, error);
}

function patchSiteAgencyVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/agency?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getSiteAgency(pk) {
	$.ajax({
		url: '/api/agency/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Search //

async function searchSiteAgency($formFilters, success, error) {
	var filters = searchSiteAgencyFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchSiteAgencyVals(filters, success, error);
}

function searchSiteAgencyFilters($formFilters) {
	var filters = [];
	if($formFilters) {

		var filterPk = $formFilters.find('.valuePk').val();
		if(filterPk != null && filterPk !== '')
			filters.push({ name: 'fq', value: 'pk:' + filterPk });

		var filterCreated = $formFilters.find('.valueCreated').val();
		if(filterCreated != null && filterCreated !== '')
			filters.push({ name: 'fq', value: 'created:' + filterCreated });

		var filterModified = $formFilters.find('.valueModified').val();
		if(filterModified != null && filterModified !== '')
			filters.push({ name: 'fq', value: 'modified:' + filterModified });

		var filterAgencyName = $formFilters.find('.valueAgencyName').val();
		if(filterAgencyName != null && filterAgencyName !== '')
			filters.push({ name: 'fq', value: 'agencyName:' + filterAgencyName });

		var filterImageLeft = $formFilters.find('.valueImageLeft').val();
		if(filterImageLeft != null && filterImageLeft !== '')
			filters.push({ name: 'fq', value: 'imageLeft:' + filterImageLeft });

		var filterImageTop = $formFilters.find('.valueImageTop').val();
		if(filterImageTop != null && filterImageTop !== '')
			filters.push({ name: 'fq', value: 'imageTop:' + filterImageTop });

		var filterImageCoords = $formFilters.find('.valueImageCoords').val();
		if(filterImageCoords != null && filterImageCoords !== '')
			filters.push({ name: 'fq', value: 'imageCoords:' + filterImageCoords });

		var filterStateKey = $formFilters.find('.valueStateKey').val();
		if(filterStateKey != null && filterStateKey !== '')
			filters.push({ name: 'fq', value: 'stateKey:' + filterStateKey });

		var filterInheritPk = $formFilters.find('.valueInheritPk').val();
		if(filterInheritPk != null && filterInheritPk !== '')
			filters.push({ name: 'fq', value: 'inheritPk:' + filterInheritPk });

		var filterId = $formFilters.find('.valueId').val();
		if(filterId != null && filterId !== '')
			filters.push({ name: 'fq', value: 'id:' + filterId });

		var filterClassCanonicalName = $formFilters.find('.valueClassCanonicalName').val();
		if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
			filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

		var filterClassSimpleName = $formFilters.find('.valueClassSimpleName').val();
		if(filterClassSimpleName != null && filterClassSimpleName !== '')
			filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

		var filterClassCanonicalNames = $formFilters.find('.valueClassCanonicalNames').val();
		if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
			filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

		var filterSaves = $formFilters.find('.valueSaves').val();
		if(filterSaves != null && filterSaves !== '')
			filters.push({ name: 'fq', value: 'saves:' + filterSaves });

		var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
		if(filterObjectTitle != null && filterObjectTitle !== '')
			filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

		var filterObjectId = $formFilters.find('.valueObjectId').val();
		if(filterObjectId != null && filterObjectId !== '')
			filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

		var filterAgencyKey = $formFilters.find('.valueAgencyKey').val();
		if(filterAgencyKey != null && filterAgencyKey !== '')
			filters.push({ name: 'fq', value: 'agencyKey:' + filterAgencyKey });

		var filterStateId = $formFilters.find('.valueStateId').val();
		if(filterStateId != null && filterStateId !== '')
			filters.push({ name: 'fq', value: 'stateId:' + filterStateId });

		var filterStateName = $formFilters.find('.valueStateName').val();
		if(filterStateName != null && filterStateName !== '')
			filters.push({ name: 'fq', value: 'stateName:' + filterStateName });

		var filterStateAbbreviation = $formFilters.find('.valueStateAbbreviation').val();
		if(filterStateAbbreviation != null && filterStateAbbreviation !== '')
			filters.push({ name: 'fq', value: 'stateAbbreviation:' + filterStateAbbreviation });

		var filterAgencyOnlyName = $formFilters.find('.valueAgencyOnlyName').val();
		if(filterAgencyOnlyName != null && filterAgencyOnlyName !== '')
			filters.push({ name: 'fq', value: 'agencyOnlyName:' + filterAgencyOnlyName });

		var filterAgencyCompleteName = $formFilters.find('.valueAgencyCompleteName').val();
		if(filterAgencyCompleteName != null && filterAgencyCompleteName !== '')
			filters.push({ name: 'fq', value: 'agencyCompleteName:' + filterAgencyCompleteName });
	}
	return filters;
}

function searchSiteAgencyVals(filters, success, error) {


	filters.push({ name: 'sort', value: 'agencyName asc' });
	$.ajax({
		url: '/api/agency?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestSiteAgencyStateKey(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-globe-americas ');
			var $span = $('<span>').attr('class', '').text(o['stateCompleteName']);
			var $a = $('<span>');
			$a.append($i);
			$a.append($span);
			var val = o['agencyKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_stateKey_' + pk + '_agencyKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueStateKey w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_stateKey_" + pk + "_agencyKeys_" + o['pk'] + "'); patchSiteAgencyVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'StateKey']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'removeGlow($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(attribute)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#SiteAgencyForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSiteStateVals(filters, success, error);
}

// AdminSearch //

async function adminsearchSiteAgency($formFilters, success, error) {
	var filters = adminsearchSiteAgencyFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	adminsearchSiteAgencyVals(filters, success, error);
}

function adminsearchSiteAgencyFilters($formFilters) {
	var filters = [];
	if($formFilters) {

		var filterPk = $formFilters.find('.valuePk').val();
		if(filterPk != null && filterPk !== '')
			filters.push({ name: 'fq', value: 'pk:' + filterPk });

		var filterCreated = $formFilters.find('.valueCreated').val();
		if(filterCreated != null && filterCreated !== '')
			filters.push({ name: 'fq', value: 'created:' + filterCreated });

		var filterModified = $formFilters.find('.valueModified').val();
		if(filterModified != null && filterModified !== '')
			filters.push({ name: 'fq', value: 'modified:' + filterModified });

		var filterAgencyName = $formFilters.find('.valueAgencyName').val();
		if(filterAgencyName != null && filterAgencyName !== '')
			filters.push({ name: 'fq', value: 'agencyName:' + filterAgencyName });

		var filterImageLeft = $formFilters.find('.valueImageLeft').val();
		if(filterImageLeft != null && filterImageLeft !== '')
			filters.push({ name: 'fq', value: 'imageLeft:' + filterImageLeft });

		var filterImageTop = $formFilters.find('.valueImageTop').val();
		if(filterImageTop != null && filterImageTop !== '')
			filters.push({ name: 'fq', value: 'imageTop:' + filterImageTop });

		var filterImageCoords = $formFilters.find('.valueImageCoords').val();
		if(filterImageCoords != null && filterImageCoords !== '')
			filters.push({ name: 'fq', value: 'imageCoords:' + filterImageCoords });

		var filterStateKey = $formFilters.find('.valueStateKey').val();
		if(filterStateKey != null && filterStateKey !== '')
			filters.push({ name: 'fq', value: 'stateKey:' + filterStateKey });

		var filterInheritPk = $formFilters.find('.valueInheritPk').val();
		if(filterInheritPk != null && filterInheritPk !== '')
			filters.push({ name: 'fq', value: 'inheritPk:' + filterInheritPk });

		var filterId = $formFilters.find('.valueId').val();
		if(filterId != null && filterId !== '')
			filters.push({ name: 'fq', value: 'id:' + filterId });

		var filterClassCanonicalName = $formFilters.find('.valueClassCanonicalName').val();
		if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
			filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

		var filterClassSimpleName = $formFilters.find('.valueClassSimpleName').val();
		if(filterClassSimpleName != null && filterClassSimpleName !== '')
			filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

		var filterClassCanonicalNames = $formFilters.find('.valueClassCanonicalNames').val();
		if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
			filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

		var filterSaves = $formFilters.find('.valueSaves').val();
		if(filterSaves != null && filterSaves !== '')
			filters.push({ name: 'fq', value: 'saves:' + filterSaves });

		var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
		if(filterObjectTitle != null && filterObjectTitle !== '')
			filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

		var filterObjectId = $formFilters.find('.valueObjectId').val();
		if(filterObjectId != null && filterObjectId !== '')
			filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

		var filterAgencyKey = $formFilters.find('.valueAgencyKey').val();
		if(filterAgencyKey != null && filterAgencyKey !== '')
			filters.push({ name: 'fq', value: 'agencyKey:' + filterAgencyKey });

		var filterStateId = $formFilters.find('.valueStateId').val();
		if(filterStateId != null && filterStateId !== '')
			filters.push({ name: 'fq', value: 'stateId:' + filterStateId });

		var filterStateName = $formFilters.find('.valueStateName').val();
		if(filterStateName != null && filterStateName !== '')
			filters.push({ name: 'fq', value: 'stateName:' + filterStateName });

		var filterStateAbbreviation = $formFilters.find('.valueStateAbbreviation').val();
		if(filterStateAbbreviation != null && filterStateAbbreviation !== '')
			filters.push({ name: 'fq', value: 'stateAbbreviation:' + filterStateAbbreviation });

		var filterAgencyOnlyName = $formFilters.find('.valueAgencyOnlyName').val();
		if(filterAgencyOnlyName != null && filterAgencyOnlyName !== '')
			filters.push({ name: 'fq', value: 'agencyOnlyName:' + filterAgencyOnlyName });

		var filterAgencyCompleteName = $formFilters.find('.valueAgencyCompleteName').val();
		if(filterAgencyCompleteName != null && filterAgencyCompleteName !== '')
			filters.push({ name: 'fq', value: 'agencyCompleteName:' + filterAgencyCompleteName });
	}
	return filters;
}

function adminsearchSiteAgencyVals(filters, success, error) {


	filters.push({ name: 'sort', value: 'agencyName asc' });
	$.ajax({
		url: '/api/admin/agency?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestSiteAgencyStateKey(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-globe-americas ');
			var $span = $('<span>').attr('class', '').text(o['stateCompleteName']);
			var $a = $('<span>');
			$a.append($i);
			$a.append($span);
			var val = o['agencyKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_stateKey_' + pk + '_agencyKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueStateKey w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_stateKey_" + pk + "_agencyKeys_" + o['pk'] + "'); patchSiteAgencyVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'StateKey']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'removeGlow($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(attribute)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#SiteAgencyForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSiteStateVals(filters, success, error);
}

async function websocketSiteAgency(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketSiteAgency', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pkPage = $('#SiteAgencyForm :input[name=pk]').val();
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = parseInt(json['numFound']);
			var numPATCH = parseInt(json['numPATCH']);
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-quarter box-' + id + ' ').attr('id', 'box-' + id).attr('data-numPATCH', numPATCH);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-pale-yellow ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'far fa-road w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modify agencies' + id);
			var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
			var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
			var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
			var $progress = $('<div>').attr('class', 'w3-pale-yellow ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
			$card.append($header);
			$header.append($i);
			$header.append($headerSpan);
			$header.append($x);
			$body.append($bar);
			$bar.append($progress);
			$card.append($body);
			$box.append($margin);
			$margin.append($card);
			if(numPATCH < numFound) {
				var $old_box = $('.box-' + id);
				if(!$old_box.size()) {
					$('.top-box').append($box);
				} else if($old_box && $old_box.attr('data-numPATCH') < numFound) {
					$('.box-' + id).html($margin);
				}
			} else {
				$('.box-' + id).remove();
			}
			if(pk && pkPage && pk == pkPage) {
				if(success)
					success(json);
			}
		});

		window.eventBus.registerHandler('websocketSiteState', function (error, message) {
			$('#Page_stateKey').trigger('oninput');
			$('#Page_stateKey_add').text('add a state');
			$('#Page_stateKey_add').removeClass('w3-disabled');
			$('#Page_stateKey_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketSiteState', function (error, message) {
			$('#Page_stateKey').trigger('oninput');
			$('#Page_stateKey_add').text('add a state');
			$('#Page_stateKey_add').removeClass('w3-disabled');
			$('#Page_stateKey_add').attr('disabled', false);
		});
	}
}
async function websocketSiteAgencyInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchSiteAgencyVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['pk'];
			if(vars.includes('pk')) {
				$('.inputSiteAgency' + pk + 'Pk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteAgency' + pk + 'Pk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteAgency' + pk + 'Pk'));
			}
			var val = o['created'];
			if(vars.includes('created')) {
				$('.inputSiteAgency' + pk + 'Created').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteAgency' + pk + 'Created').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteAgency' + pk + 'Created'));
			}
			var val = o['modified'];
			if(vars.includes('modified')) {
				$('.inputSiteAgency' + pk + 'Modified').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteAgency' + pk + 'Modified').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteAgency' + pk + 'Modified'));
			}
			var val = o['agencyName'];
			if(vars.includes('agencyName')) {
				$('.inputSiteAgency' + pk + 'AgencyName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteAgency' + pk + 'AgencyName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteAgency' + pk + 'AgencyName'));
			}
			var val = o['imageLeft'];
			if(vars.includes('imageLeft')) {
				$('.inputSiteAgency' + pk + 'ImageLeft').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteAgency' + pk + 'ImageLeft').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteAgency' + pk + 'ImageLeft'));
			}
			var val = o['imageTop'];
			if(vars.includes('imageTop')) {
				$('.inputSiteAgency' + pk + 'ImageTop').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteAgency' + pk + 'ImageTop').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteAgency' + pk + 'ImageTop'));
			}
			var val = o['imageCoords'];
			if(vars.includes('imageCoords')) {
				$('.inputSiteAgency' + pk + 'ImageCoords').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteAgency' + pk + 'ImageCoords').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteAgency' + pk + 'ImageCoords'));
			}
			var val = o['stateKey'];
			if(vars.includes('stateKey')) {
				$('.inputSiteAgency' + pk + 'StateKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteAgency' + pk + 'StateKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteAgency' + pk + 'StateKey'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputSiteAgency' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteAgency' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteAgency' + pk + 'InheritPk'));
			}
			var val = o['id'];
			if(vars.includes('id')) {
				$('.inputSiteAgency' + pk + 'Id').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteAgency' + pk + 'Id').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteAgency' + pk + 'Id'));
			}
			var val = o['classCanonicalName'];
			if(vars.includes('classCanonicalName')) {
				$('.inputSiteAgency' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteAgency' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteAgency' + pk + 'ClassCanonicalName'));
			}
			var val = o['classSimpleName'];
			if(vars.includes('classSimpleName')) {
				$('.inputSiteAgency' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteAgency' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteAgency' + pk + 'ClassSimpleName'));
			}
			var val = o['classCanonicalNames'];
			if(vars.includes('classCanonicalNames')) {
				$('.inputSiteAgency' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteAgency' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteAgency' + pk + 'ClassCanonicalNames'));
			}
			var val = o['saves'];
			if(vars.includes('saves')) {
				$('.inputSiteAgency' + pk + 'Saves').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteAgency' + pk + 'Saves').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteAgency' + pk + 'Saves'));
			}
			var val = o['objectTitle'];
			if(vars.includes('objectTitle')) {
				$('.inputSiteAgency' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteAgency' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteAgency' + pk + 'ObjectTitle'));
			}
			var val = o['objectId'];
			if(vars.includes('objectId')) {
				$('.inputSiteAgency' + pk + 'ObjectId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteAgency' + pk + 'ObjectId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteAgency' + pk + 'ObjectId'));
			}
			var val = o['agencyKey'];
			if(vars.includes('agencyKey')) {
				$('.inputSiteAgency' + pk + 'AgencyKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteAgency' + pk + 'AgencyKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteAgency' + pk + 'AgencyKey'));
			}
			var val = o['stateId'];
			if(vars.includes('stateId')) {
				$('.inputSiteAgency' + pk + 'StateId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteAgency' + pk + 'StateId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteAgency' + pk + 'StateId'));
			}
			var val = o['stateName'];
			if(vars.includes('stateName')) {
				$('.inputSiteAgency' + pk + 'StateName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteAgency' + pk + 'StateName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteAgency' + pk + 'StateName'));
			}
			var val = o['stateAbbreviation'];
			if(vars.includes('stateAbbreviation')) {
				$('.inputSiteAgency' + pk + 'StateAbbreviation').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteAgency' + pk + 'StateAbbreviation').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteAgency' + pk + 'StateAbbreviation'));
			}
			var val = o['agencyOnlyName'];
			if(vars.includes('agencyOnlyName')) {
				$('.inputSiteAgency' + pk + 'AgencyOnlyName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteAgency' + pk + 'AgencyOnlyName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteAgency' + pk + 'AgencyOnlyName'));
			}
			var val = o['agencyCompleteName'];
			if(vars.includes('agencyCompleteName')) {
				$('.inputSiteAgency' + pk + 'AgencyCompleteName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteAgency' + pk + 'AgencyCompleteName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteAgency' + pk + 'AgencyCompleteName'));
			}
		});
	}
}
