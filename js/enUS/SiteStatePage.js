
// PUTImport //

async function putimportSiteState($formValues, pk, success, error) {
	var json = $formValues.find('.PUTImport_list').val();
	if(json != null && json !== '')
		putimportSiteStateVals(JSON.parse(json), success, error);
}

function putimportSiteStateVals(json, success, error) {
	$.ajax({
		url: '/api/state/import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTMerge //

async function putmergeSiteState($formValues, pk, success, error) {
	var json = $formValues.find('.PUTMerge_list').val();
	if(json != null && json !== '')
		putmergeSiteStateVals(JSON.parse(json), success, error);
}

function putmergeSiteStateVals(json, success, error) {
	$.ajax({
		url: '/api/state/merge'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTCopy //

async function putcopySiteState($formValues, pk, success, error) {
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

	var valueStateName = $formValues.find('.valueStateName').val();
	if(valueStateName != null && valueStateName !== '')
		vals['stateName'] = valueStateName;

	var valueStateAbbreviation = $formValues.find('.valueStateAbbreviation').val();
	if(valueStateAbbreviation != null && valueStateAbbreviation !== '')
		vals['stateAbbreviation'] = valueStateAbbreviation;

	var valueImageLeft = $formValues.find('.valueImageLeft').val();
	if(valueImageLeft != null && valueImageLeft !== '')
		vals['imageLeft'] = valueImageLeft;

	var valueImageTop = $formValues.find('.valueImageTop').val();
	if(valueImageTop != null && valueImageTop !== '')
		vals['imageTop'] = valueImageTop;

	var valueAgencyKeys = $formValues.find('input.valueAgencyKeys:checked').val();
	var valueAgencyKeysClear = $formValues.find('input.agencyKeys_clear:checked').val();
	if(valueAgencyKeysClear != null && valueAgencyKeysClear)
		vals['agencyKeys'] = null;
	else if(valueAgencyKeys != null && valueAgencyKeys)
		vals['agencyKeys'] = [valueAgencyKeys];

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	if(valueInheritPk != null && valueInheritPk !== '')
		vals['inheritPk'] = valueInheritPk;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	putcopySiteStateVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function putcopySiteStateVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/state/copy?' + $.param(filters)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify({patch: vals})
		, success: success
		, error: error
	});
}

// POST //

async function postSiteState($formValues, success, error) {
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

	var valueStateName = $formValues.find('.valueStateName').val();
	if(valueStateName != null && valueStateName !== '')
		vals['stateName'] = valueStateName;

	var valueStateAbbreviation = $formValues.find('.valueStateAbbreviation').val();
	if(valueStateAbbreviation != null && valueStateAbbreviation !== '')
		vals['stateAbbreviation'] = valueStateAbbreviation;

	var valueImageLeft = $formValues.find('.valueImageLeft').val();
	if(valueImageLeft != null && valueImageLeft !== '')
		vals['imageLeft'] = valueImageLeft;

	var valueImageTop = $formValues.find('.valueImageTop').val();
	if(valueImageTop != null && valueImageTop !== '')
		vals['imageTop'] = valueImageTop;

	var valueAgencyKeys = [];
	$formValues.find('input.valueAgencyKeys:checked').each(function(index) {
		valueAgencyKeys.push($(this).val());
	});
	if(valueAgencyKeys.length > 0)
		vals['agencyKeys'] = valueAgencyKeys;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	if(valueInheritPk != null && valueInheritPk !== '')
		vals['inheritPk'] = valueInheritPk;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	$.ajax({
		url: '/api/state'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postSiteStateVals(vals, success, error) {
	$.ajax({
		url: '/api/state'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PATCH //

async function patchSiteState($formFilters, $formValues, pk, success, error) {
	var filters = patchSiteStateFilters($formFilters);

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

	var valueStateName = $formValues.find('.valueStateName').val();
	var removeStateName = $formValues.find('.removeStateName').val() === 'true';
	var setStateName = removeStateName ? null : $formValues.find('.setStateName').val();
	var addStateName = $formValues.find('.addStateName').val();
	if(removeStateName || setStateName != null && setStateName !== '')
		vals['setStateName'] = setStateName;
	if(addStateName != null && addStateName !== '')
		vals['addStateName'] = addStateName;
	var removeStateName = $formValues.find('.removeStateName').val();
	if(removeStateName != null && removeStateName !== '')
		vals['removeStateName'] = removeStateName;

	var valueStateAbbreviation = $formValues.find('.valueStateAbbreviation').val();
	var removeStateAbbreviation = $formValues.find('.removeStateAbbreviation').val() === 'true';
	var setStateAbbreviation = removeStateAbbreviation ? null : $formValues.find('.setStateAbbreviation').val();
	var addStateAbbreviation = $formValues.find('.addStateAbbreviation').val();
	if(removeStateAbbreviation || setStateAbbreviation != null && setStateAbbreviation !== '')
		vals['setStateAbbreviation'] = setStateAbbreviation;
	if(addStateAbbreviation != null && addStateAbbreviation !== '')
		vals['addStateAbbreviation'] = addStateAbbreviation;
	var removeStateAbbreviation = $formValues.find('.removeStateAbbreviation').val();
	if(removeStateAbbreviation != null && removeStateAbbreviation !== '')
		vals['removeStateAbbreviation'] = removeStateAbbreviation;

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

	var valueAgencyKeys = $formValues.find('input.valueAgencyKeys:checked').val();
	if(valueAgencyKeys != null && valueAgencyKeys !== '')
		vals['addAgencyKeys'] = valueAgencyKeys;

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

	patchSiteStateVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchSiteStateFilters($formFilters) {
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

		var filterStateName = $formFilters.find('.valueStateName').val();
		if(filterStateName != null && filterStateName !== '')
			filters.push({ name: 'fq', value: 'stateName:' + filterStateName });

		var filterStateAbbreviation = $formFilters.find('.valueStateAbbreviation').val();
		if(filterStateAbbreviation != null && filterStateAbbreviation !== '')
			filters.push({ name: 'fq', value: 'stateAbbreviation:' + filterStateAbbreviation });

		var filterImageLeft = $formFilters.find('.valueImageLeft').val();
		if(filterImageLeft != null && filterImageLeft !== '')
			filters.push({ name: 'fq', value: 'imageLeft:' + filterImageLeft });

		var filterImageTop = $formFilters.find('.valueImageTop').val();
		if(filterImageTop != null && filterImageTop !== '')
			filters.push({ name: 'fq', value: 'imageTop:' + filterImageTop });

		var filterAgencyKeys = $formFilters.find('.valueAgencyKeys').val();
		if(filterAgencyKeys != null && filterAgencyKeys !== '')
			filters.push({ name: 'fq', value: 'agencyKeys:' + filterAgencyKeys });

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

		var filterStateKey = $formFilters.find('.valueStateKey').val();
		if(filterStateKey != null && filterStateKey !== '')
			filters.push({ name: 'fq', value: 'stateKey:' + filterStateKey });

		var filterStateCompleteName = $formFilters.find('.valueStateCompleteName').val();
		if(filterStateCompleteName != null && filterStateCompleteName !== '')
			filters.push({ name: 'fq', value: 'stateCompleteName:' + filterStateCompleteName });
	}
	return filters;
}

function patchSiteStateVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchSiteStateVals(filters, vals, success, error);
}

function patchSiteStateVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/state?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getSiteState(pk) {
	$.ajax({
		url: '/api/state/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Search //

async function searchSiteState($formFilters, success, error) {
	var filters = searchSiteStateFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchSiteStateVals(filters, success, error);
}

function searchSiteStateFilters($formFilters) {
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

		var filterStateName = $formFilters.find('.valueStateName').val();
		if(filterStateName != null && filterStateName !== '')
			filters.push({ name: 'fq', value: 'stateName:' + filterStateName });

		var filterStateAbbreviation = $formFilters.find('.valueStateAbbreviation').val();
		if(filterStateAbbreviation != null && filterStateAbbreviation !== '')
			filters.push({ name: 'fq', value: 'stateAbbreviation:' + filterStateAbbreviation });

		var filterImageLeft = $formFilters.find('.valueImageLeft').val();
		if(filterImageLeft != null && filterImageLeft !== '')
			filters.push({ name: 'fq', value: 'imageLeft:' + filterImageLeft });

		var filterImageTop = $formFilters.find('.valueImageTop').val();
		if(filterImageTop != null && filterImageTop !== '')
			filters.push({ name: 'fq', value: 'imageTop:' + filterImageTop });

		var filterAgencyKeys = $formFilters.find('.valueAgencyKeys').val();
		if(filterAgencyKeys != null && filterAgencyKeys !== '')
			filters.push({ name: 'fq', value: 'agencyKeys:' + filterAgencyKeys });

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

		var filterStateKey = $formFilters.find('.valueStateKey').val();
		if(filterStateKey != null && filterStateKey !== '')
			filters.push({ name: 'fq', value: 'stateKey:' + filterStateKey });

		var filterStateCompleteName = $formFilters.find('.valueStateCompleteName').val();
		if(filterStateCompleteName != null && filterStateCompleteName !== '')
			filters.push({ name: 'fq', value: 'stateCompleteName:' + filterStateCompleteName });
	}
	return filters;
}

function searchSiteStateVals(filters, success, error) {


	filters.push({ name: 'sort', value: 'stateName asc' });
	$.ajax({
		url: '/api/state?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestSiteStateAgencyKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-road ');
			var $span = $('<span>').attr('class', '').text(o['agencyCompleteName']);
			var $a = $('<span>');
			$a.append($i);
			$a.append($span);
			var val = o['stateKey'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_agencyKeys_' + pk + '_stateKey_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueAgencyKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_agencyKeys_" + pk + "_stateKey_" + o['pk'] + "'); patchSiteStateVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'AgencyKeys']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#SiteStateForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSiteAgencyVals(filters, success, error);
}

// AdminSearch //

async function adminsearchSiteState($formFilters, success, error) {
	var filters = adminsearchSiteStateFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	adminsearchSiteStateVals(filters, success, error);
}

function adminsearchSiteStateFilters($formFilters) {
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

		var filterStateName = $formFilters.find('.valueStateName').val();
		if(filterStateName != null && filterStateName !== '')
			filters.push({ name: 'fq', value: 'stateName:' + filterStateName });

		var filterStateAbbreviation = $formFilters.find('.valueStateAbbreviation').val();
		if(filterStateAbbreviation != null && filterStateAbbreviation !== '')
			filters.push({ name: 'fq', value: 'stateAbbreviation:' + filterStateAbbreviation });

		var filterImageLeft = $formFilters.find('.valueImageLeft').val();
		if(filterImageLeft != null && filterImageLeft !== '')
			filters.push({ name: 'fq', value: 'imageLeft:' + filterImageLeft });

		var filterImageTop = $formFilters.find('.valueImageTop').val();
		if(filterImageTop != null && filterImageTop !== '')
			filters.push({ name: 'fq', value: 'imageTop:' + filterImageTop });

		var filterAgencyKeys = $formFilters.find('.valueAgencyKeys').val();
		if(filterAgencyKeys != null && filterAgencyKeys !== '')
			filters.push({ name: 'fq', value: 'agencyKeys:' + filterAgencyKeys });

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

		var filterStateKey = $formFilters.find('.valueStateKey').val();
		if(filterStateKey != null && filterStateKey !== '')
			filters.push({ name: 'fq', value: 'stateKey:' + filterStateKey });

		var filterStateCompleteName = $formFilters.find('.valueStateCompleteName').val();
		if(filterStateCompleteName != null && filterStateCompleteName !== '')
			filters.push({ name: 'fq', value: 'stateCompleteName:' + filterStateCompleteName });
	}
	return filters;
}

function adminsearchSiteStateVals(filters, success, error) {


	filters.push({ name: 'sort', value: 'stateName asc' });
	$.ajax({
		url: '/api/admin/state?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestSiteStateAgencyKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-road ');
			var $span = $('<span>').attr('class', '').text(o['agencyCompleteName']);
			var $a = $('<span>');
			$a.append($i);
			$a.append($span);
			var val = o['stateKey'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_agencyKeys_' + pk + '_stateKey_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueAgencyKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_agencyKeys_" + pk + "_stateKey_" + o['pk'] + "'); patchSiteStateVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'AgencyKeys']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#SiteStateForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSiteAgencyVals(filters, success, error);
}

async function websocketSiteState(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketSiteState', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pkPage = $('#SiteStateForm :input[name=pk]').val();
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = parseInt(json['numFound']);
			var numPATCH = parseInt(json['numPATCH']);
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-quarter box-' + id + ' ').attr('id', 'box-' + id).attr('data-numPATCH', numPATCH);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-pale-blue ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'far fa-globe-americas w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modify states' + id);
			var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
			var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
			var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
			var $progress = $('<div>').attr('class', 'w3-pale-blue ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
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

		window.eventBus.registerHandler('websocketSiteAgency', function (error, message) {
			$('#Page_agencyKeys').trigger('oninput');
			$('#Page_agencyKeys_add').text('add a agency');
			$('#Page_agencyKeys_add').removeClass('w3-disabled');
			$('#Page_agencyKeys_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketSiteAgency', function (error, message) {
			$('#Page_agencyKeys').trigger('oninput');
			$('#Page_agencyKeys_add').text('add a agency');
			$('#Page_agencyKeys_add').removeClass('w3-disabled');
			$('#Page_agencyKeys_add').attr('disabled', false);
		});
	}
}
async function websocketSiteStateInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchSiteStateVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['pk'];
			if(vars.includes('pk')) {
				$('.inputSiteState' + pk + 'Pk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteState' + pk + 'Pk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteState' + pk + 'Pk'));
			}
			var val = o['created'];
			if(vars.includes('created')) {
				$('.inputSiteState' + pk + 'Created').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteState' + pk + 'Created').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteState' + pk + 'Created'));
			}
			var val = o['modified'];
			if(vars.includes('modified')) {
				$('.inputSiteState' + pk + 'Modified').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteState' + pk + 'Modified').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteState' + pk + 'Modified'));
			}
			var val = o['stateName'];
			if(vars.includes('stateName')) {
				$('.inputSiteState' + pk + 'StateName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteState' + pk + 'StateName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteState' + pk + 'StateName'));
			}
			var val = o['stateAbbreviation'];
			if(vars.includes('stateAbbreviation')) {
				$('.inputSiteState' + pk + 'StateAbbreviation').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteState' + pk + 'StateAbbreviation').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteState' + pk + 'StateAbbreviation'));
			}
			var val = o['imageLeft'];
			if(vars.includes('imageLeft')) {
				$('.inputSiteState' + pk + 'ImageLeft').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteState' + pk + 'ImageLeft').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteState' + pk + 'ImageLeft'));
			}
			var val = o['imageTop'];
			if(vars.includes('imageTop')) {
				$('.inputSiteState' + pk + 'ImageTop').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteState' + pk + 'ImageTop').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteState' + pk + 'ImageTop'));
			}
			var val = o['agencyKeys'];
			if(vars.includes('agencyKeys')) {
				$('.inputSiteState' + pk + 'AgencyKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteState' + pk + 'AgencyKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteState' + pk + 'AgencyKeys'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputSiteState' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteState' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteState' + pk + 'InheritPk'));
			}
			var val = o['id'];
			if(vars.includes('id')) {
				$('.inputSiteState' + pk + 'Id').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteState' + pk + 'Id').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteState' + pk + 'Id'));
			}
			var val = o['classCanonicalName'];
			if(vars.includes('classCanonicalName')) {
				$('.inputSiteState' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteState' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteState' + pk + 'ClassCanonicalName'));
			}
			var val = o['classSimpleName'];
			if(vars.includes('classSimpleName')) {
				$('.inputSiteState' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteState' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteState' + pk + 'ClassSimpleName'));
			}
			var val = o['classCanonicalNames'];
			if(vars.includes('classCanonicalNames')) {
				$('.inputSiteState' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteState' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteState' + pk + 'ClassCanonicalNames'));
			}
			var val = o['saves'];
			if(vars.includes('saves')) {
				$('.inputSiteState' + pk + 'Saves').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteState' + pk + 'Saves').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteState' + pk + 'Saves'));
			}
			var val = o['objectTitle'];
			if(vars.includes('objectTitle')) {
				$('.inputSiteState' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteState' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteState' + pk + 'ObjectTitle'));
			}
			var val = o['objectId'];
			if(vars.includes('objectId')) {
				$('.inputSiteState' + pk + 'ObjectId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteState' + pk + 'ObjectId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteState' + pk + 'ObjectId'));
			}
			var val = o['stateKey'];
			if(vars.includes('stateKey')) {
				$('.inputSiteState' + pk + 'StateKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteState' + pk + 'StateKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteState' + pk + 'StateKey'));
			}
			var val = o['stateCompleteName'];
			if(vars.includes('stateCompleteName')) {
				$('.inputSiteState' + pk + 'StateCompleteName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteState' + pk + 'StateCompleteName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteState' + pk + 'StateCompleteName'));
			}
		});
	}
}
