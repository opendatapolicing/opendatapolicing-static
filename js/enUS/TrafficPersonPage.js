
// PUTImport //

async function putimportTrafficPerson($formValues, pk, success, error) {
	var json = $formValues.find('.PUTImport_list').val();
	if(json != null && json !== '')
		putimportTrafficPersonVals(JSON.parse(json), success, error);
}

function putimportTrafficPersonVals(json, success, error) {
	$.ajax({
		url: '/api/person/import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTMerge //

async function putmergeTrafficPerson($formValues, pk, success, error) {
	var json = $formValues.find('.PUTMerge_list').val();
	if(json != null && json !== '')
		putmergeTrafficPersonVals(JSON.parse(json), success, error);
}

function putmergeTrafficPersonVals(json, success, error) {
	$.ajax({
		url: '/api/person/merge'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTCopy //

async function putcopyTrafficPerson($formValues, pk, success, error) {
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

	var valueTrafficStopKey = $formValues.find('input.valueTrafficStopKey:checked').val();
	var valueTrafficStopKeyClear = $formValues.find('input.trafficStopKey_clear:checked').val();
	if(valueTrafficStopKeyClear != null && valueTrafficStopKeyClear)
		vals['trafficStopKey'] = null;
	else if(valueTrafficStopKey != null && valueTrafficStopKey)
		vals['trafficStopKey'] = valueTrafficStopKey;

	var valueTrafficSearchKeys = $formValues.find('input.valueTrafficSearchKeys:checked').val();
	var valueTrafficSearchKeysClear = $formValues.find('input.trafficSearchKeys_clear:checked').val();
	if(valueTrafficSearchKeysClear != null && valueTrafficSearchKeysClear)
		vals['trafficSearchKeys'] = null;
	else if(valueTrafficSearchKeys != null && valueTrafficSearchKeys)
		vals['trafficSearchKeys'] = [valueTrafficSearchKeys];

	var valuePersonAge = $formValues.find('.valuePersonAge').val();
	if(valuePersonAge != null && valuePersonAge !== '')
		vals['personAge'] = valuePersonAge;

	var valuePersonTypeTitle = $formValues.find('.valuePersonTypeTitle').val();
	if(valuePersonTypeTitle != null && valuePersonTypeTitle !== '')
		vals['personTypeTitle'] = valuePersonTypeTitle;

	var valuePersonGenderTitle = $formValues.find('.valuePersonGenderTitle').val();
	if(valuePersonGenderTitle != null && valuePersonGenderTitle !== '')
		vals['personGenderTitle'] = valuePersonGenderTitle;

	var valuePersonEthnicityTitle = $formValues.find('.valuePersonEthnicityTitle').val();
	if(valuePersonEthnicityTitle != null && valuePersonEthnicityTitle !== '')
		vals['personEthnicityTitle'] = valuePersonEthnicityTitle;

	var valuePersonRaceTitle = $formValues.find('.valuePersonRaceTitle').val();
	if(valuePersonRaceTitle != null && valuePersonRaceTitle !== '')
		vals['personRaceTitle'] = valuePersonRaceTitle;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	if(valueInheritPk != null && valueInheritPk !== '')
		vals['inheritPk'] = valueInheritPk;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	var valuePersonTypeId = $formValues.find('.valuePersonTypeId').val();
	if(valuePersonTypeId != null && valuePersonTypeId !== '')
		vals['personTypeId'] = valuePersonTypeId;

	var valuePersonGenderId = $formValues.find('.valuePersonGenderId').val();
	if(valuePersonGenderId != null && valuePersonGenderId !== '')
		vals['personGenderId'] = valuePersonGenderId;

	var valuePersonEthnicityId = $formValues.find('.valuePersonEthnicityId').val();
	if(valuePersonEthnicityId != null && valuePersonEthnicityId !== '')
		vals['personEthnicityId'] = valuePersonEthnicityId;

	var valuePersonRaceId = $formValues.find('.valuePersonRaceId').val();
	if(valuePersonRaceId != null && valuePersonRaceId !== '')
		vals['personRaceId'] = valuePersonRaceId;

	putcopyTrafficPersonVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function putcopyTrafficPersonVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/person/copy?' + $.param(filters)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify({patch: vals})
		, success: success
		, error: error
	});
}

// POST //

async function postTrafficPerson($formValues, success, error) {
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

	var valueTrafficStopKey = $formValues.find('.valueTrafficStopKey').val();
	if(valueTrafficStopKey != null && valueTrafficStopKey !== '')
		vals['trafficStopKey'] = valueTrafficStopKey;

	var valueTrafficSearchKeys = [];
	$formValues.find('input.valueTrafficSearchKeys:checked').each(function(index) {
		valueTrafficSearchKeys.push($(this).val());
	});
	if(valueTrafficSearchKeys.length > 0)
		vals['trafficSearchKeys'] = valueTrafficSearchKeys;

	var valuePersonAge = $formValues.find('.valuePersonAge').val();
	if(valuePersonAge != null && valuePersonAge !== '')
		vals['personAge'] = valuePersonAge;

	var valuePersonTypeTitle = $formValues.find('.valuePersonTypeTitle').val();
	if(valuePersonTypeTitle != null && valuePersonTypeTitle !== '')
		vals['personTypeTitle'] = valuePersonTypeTitle;

	var valuePersonGenderTitle = $formValues.find('.valuePersonGenderTitle').val();
	if(valuePersonGenderTitle != null && valuePersonGenderTitle !== '')
		vals['personGenderTitle'] = valuePersonGenderTitle;

	var valuePersonEthnicityTitle = $formValues.find('.valuePersonEthnicityTitle').val();
	if(valuePersonEthnicityTitle != null && valuePersonEthnicityTitle !== '')
		vals['personEthnicityTitle'] = valuePersonEthnicityTitle;

	var valuePersonRaceTitle = $formValues.find('.valuePersonRaceTitle').val();
	if(valuePersonRaceTitle != null && valuePersonRaceTitle !== '')
		vals['personRaceTitle'] = valuePersonRaceTitle;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	if(valueInheritPk != null && valueInheritPk !== '')
		vals['inheritPk'] = valueInheritPk;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	var valuePersonTypeId = $formValues.find('.valuePersonTypeId').val();
	if(valuePersonTypeId != null && valuePersonTypeId !== '')
		vals['personTypeId'] = valuePersonTypeId;

	var valuePersonGenderId = $formValues.find('.valuePersonGenderId').val();
	if(valuePersonGenderId != null && valuePersonGenderId !== '')
		vals['personGenderId'] = valuePersonGenderId;

	var valuePersonEthnicityId = $formValues.find('.valuePersonEthnicityId').val();
	if(valuePersonEthnicityId != null && valuePersonEthnicityId !== '')
		vals['personEthnicityId'] = valuePersonEthnicityId;

	var valuePersonRaceId = $formValues.find('.valuePersonRaceId').val();
	if(valuePersonRaceId != null && valuePersonRaceId !== '')
		vals['personRaceId'] = valuePersonRaceId;

	$.ajax({
		url: '/api/person'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postTrafficPersonVals(vals, success, error) {
	$.ajax({
		url: '/api/person'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PATCH //

async function patchTrafficPerson($formFilters, $formValues, pk, success, error) {
	var filters = patchTrafficPersonFilters($formFilters);

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

	var valueTrafficStopKey = $formValues.find('input.valueTrafficStopKey:checked').val();
	if(valueTrafficStopKey != null && valueTrafficStopKey !== '')
		vals['setTrafficStopKey'] = valueTrafficStopKey;

	var valueTrafficSearchKeys = $formValues.find('input.valueTrafficSearchKeys:checked').val();
	if(valueTrafficSearchKeys != null && valueTrafficSearchKeys !== '')
		vals['addTrafficSearchKeys'] = valueTrafficSearchKeys;

	var valuePersonAge = $formValues.find('.valuePersonAge').val();
	var removePersonAge = $formValues.find('.removePersonAge').val() === 'true';
	var setPersonAge = removePersonAge ? null : $formValues.find('.setPersonAge').val();
	var addPersonAge = $formValues.find('.addPersonAge').val();
	if(removePersonAge || setPersonAge != null && setPersonAge !== '')
		vals['setPersonAge'] = setPersonAge;
	if(addPersonAge != null && addPersonAge !== '')
		vals['addPersonAge'] = addPersonAge;
	var removePersonAge = $formValues.find('.removePersonAge').val();
	if(removePersonAge != null && removePersonAge !== '')
		vals['removePersonAge'] = removePersonAge;

	var valuePersonTypeTitle = $formValues.find('.valuePersonTypeTitle').val();
	var removePersonTypeTitle = $formValues.find('.removePersonTypeTitle').val() === 'true';
	var setPersonTypeTitle = removePersonTypeTitle ? null : $formValues.find('.setPersonTypeTitle').val();
	var addPersonTypeTitle = $formValues.find('.addPersonTypeTitle').val();
	if(removePersonTypeTitle || setPersonTypeTitle != null && setPersonTypeTitle !== '')
		vals['setPersonTypeTitle'] = setPersonTypeTitle;
	if(addPersonTypeTitle != null && addPersonTypeTitle !== '')
		vals['addPersonTypeTitle'] = addPersonTypeTitle;
	var removePersonTypeTitle = $formValues.find('.removePersonTypeTitle').val();
	if(removePersonTypeTitle != null && removePersonTypeTitle !== '')
		vals['removePersonTypeTitle'] = removePersonTypeTitle;

	var valuePersonGenderTitle = $formValues.find('.valuePersonGenderTitle').val();
	var removePersonGenderTitle = $formValues.find('.removePersonGenderTitle').val() === 'true';
	var setPersonGenderTitle = removePersonGenderTitle ? null : $formValues.find('.setPersonGenderTitle').val();
	var addPersonGenderTitle = $formValues.find('.addPersonGenderTitle').val();
	if(removePersonGenderTitle || setPersonGenderTitle != null && setPersonGenderTitle !== '')
		vals['setPersonGenderTitle'] = setPersonGenderTitle;
	if(addPersonGenderTitle != null && addPersonGenderTitle !== '')
		vals['addPersonGenderTitle'] = addPersonGenderTitle;
	var removePersonGenderTitle = $formValues.find('.removePersonGenderTitle').val();
	if(removePersonGenderTitle != null && removePersonGenderTitle !== '')
		vals['removePersonGenderTitle'] = removePersonGenderTitle;

	var valuePersonEthnicityTitle = $formValues.find('.valuePersonEthnicityTitle').val();
	var removePersonEthnicityTitle = $formValues.find('.removePersonEthnicityTitle').val() === 'true';
	var setPersonEthnicityTitle = removePersonEthnicityTitle ? null : $formValues.find('.setPersonEthnicityTitle').val();
	var addPersonEthnicityTitle = $formValues.find('.addPersonEthnicityTitle').val();
	if(removePersonEthnicityTitle || setPersonEthnicityTitle != null && setPersonEthnicityTitle !== '')
		vals['setPersonEthnicityTitle'] = setPersonEthnicityTitle;
	if(addPersonEthnicityTitle != null && addPersonEthnicityTitle !== '')
		vals['addPersonEthnicityTitle'] = addPersonEthnicityTitle;
	var removePersonEthnicityTitle = $formValues.find('.removePersonEthnicityTitle').val();
	if(removePersonEthnicityTitle != null && removePersonEthnicityTitle !== '')
		vals['removePersonEthnicityTitle'] = removePersonEthnicityTitle;

	var valuePersonRaceTitle = $formValues.find('.valuePersonRaceTitle').val();
	var removePersonRaceTitle = $formValues.find('.removePersonRaceTitle').val() === 'true';
	var setPersonRaceTitle = removePersonRaceTitle ? null : $formValues.find('.setPersonRaceTitle').val();
	var addPersonRaceTitle = $formValues.find('.addPersonRaceTitle').val();
	if(removePersonRaceTitle || setPersonRaceTitle != null && setPersonRaceTitle !== '')
		vals['setPersonRaceTitle'] = setPersonRaceTitle;
	if(addPersonRaceTitle != null && addPersonRaceTitle !== '')
		vals['addPersonRaceTitle'] = addPersonRaceTitle;
	var removePersonRaceTitle = $formValues.find('.removePersonRaceTitle').val();
	if(removePersonRaceTitle != null && removePersonRaceTitle !== '')
		vals['removePersonRaceTitle'] = removePersonRaceTitle;

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

	var valuePersonTypeId = $formValues.find('.valuePersonTypeId').val();
	var removePersonTypeId = $formValues.find('.removePersonTypeId').val() === 'true';
	var setPersonTypeId = removePersonTypeId ? null : $formValues.find('.setPersonTypeId').val();
	var addPersonTypeId = $formValues.find('.addPersonTypeId').val();
	if(removePersonTypeId || setPersonTypeId != null && setPersonTypeId !== '')
		vals['setPersonTypeId'] = setPersonTypeId;
	if(addPersonTypeId != null && addPersonTypeId !== '')
		vals['addPersonTypeId'] = addPersonTypeId;
	var removePersonTypeId = $formValues.find('.removePersonTypeId').val();
	if(removePersonTypeId != null && removePersonTypeId !== '')
		vals['removePersonTypeId'] = removePersonTypeId;

	var valuePersonGenderId = $formValues.find('.valuePersonGenderId').val();
	var removePersonGenderId = $formValues.find('.removePersonGenderId').val() === 'true';
	var setPersonGenderId = removePersonGenderId ? null : $formValues.find('.setPersonGenderId').val();
	var addPersonGenderId = $formValues.find('.addPersonGenderId').val();
	if(removePersonGenderId || setPersonGenderId != null && setPersonGenderId !== '')
		vals['setPersonGenderId'] = setPersonGenderId;
	if(addPersonGenderId != null && addPersonGenderId !== '')
		vals['addPersonGenderId'] = addPersonGenderId;
	var removePersonGenderId = $formValues.find('.removePersonGenderId').val();
	if(removePersonGenderId != null && removePersonGenderId !== '')
		vals['removePersonGenderId'] = removePersonGenderId;

	var valuePersonEthnicityId = $formValues.find('.valuePersonEthnicityId').val();
	var removePersonEthnicityId = $formValues.find('.removePersonEthnicityId').val() === 'true';
	var setPersonEthnicityId = removePersonEthnicityId ? null : $formValues.find('.setPersonEthnicityId').val();
	var addPersonEthnicityId = $formValues.find('.addPersonEthnicityId').val();
	if(removePersonEthnicityId || setPersonEthnicityId != null && setPersonEthnicityId !== '')
		vals['setPersonEthnicityId'] = setPersonEthnicityId;
	if(addPersonEthnicityId != null && addPersonEthnicityId !== '')
		vals['addPersonEthnicityId'] = addPersonEthnicityId;
	var removePersonEthnicityId = $formValues.find('.removePersonEthnicityId').val();
	if(removePersonEthnicityId != null && removePersonEthnicityId !== '')
		vals['removePersonEthnicityId'] = removePersonEthnicityId;

	var valuePersonRaceId = $formValues.find('.valuePersonRaceId').val();
	var removePersonRaceId = $formValues.find('.removePersonRaceId').val() === 'true';
	var setPersonRaceId = removePersonRaceId ? null : $formValues.find('.setPersonRaceId').val();
	var addPersonRaceId = $formValues.find('.addPersonRaceId').val();
	if(removePersonRaceId || setPersonRaceId != null && setPersonRaceId !== '')
		vals['setPersonRaceId'] = setPersonRaceId;
	if(addPersonRaceId != null && addPersonRaceId !== '')
		vals['addPersonRaceId'] = addPersonRaceId;
	var removePersonRaceId = $formValues.find('.removePersonRaceId').val();
	if(removePersonRaceId != null && removePersonRaceId !== '')
		vals['removePersonRaceId'] = removePersonRaceId;

	patchTrafficPersonVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchTrafficPersonFilters($formFilters) {
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

		var filterTrafficStopKey = $formFilters.find('.valueTrafficStopKey').val();
		if(filterTrafficStopKey != null && filterTrafficStopKey !== '')
			filters.push({ name: 'fq', value: 'trafficStopKey:' + filterTrafficStopKey });

		var filterTrafficSearchKeys = $formFilters.find('.valueTrafficSearchKeys').val();
		if(filterTrafficSearchKeys != null && filterTrafficSearchKeys !== '')
			filters.push({ name: 'fq', value: 'trafficSearchKeys:' + filterTrafficSearchKeys });

		var filterPersonAge = $formFilters.find('.valuePersonAge').val();
		if(filterPersonAge != null && filterPersonAge !== '')
			filters.push({ name: 'fq', value: 'personAge:' + filterPersonAge });

		var filterPersonTypeTitle = $formFilters.find('.valuePersonTypeTitle').val();
		if(filterPersonTypeTitle != null && filterPersonTypeTitle !== '')
			filters.push({ name: 'fq', value: 'personTypeTitle:' + filterPersonTypeTitle });

		var filterPersonGenderTitle = $formFilters.find('.valuePersonGenderTitle').val();
		if(filterPersonGenderTitle != null && filterPersonGenderTitle !== '')
			filters.push({ name: 'fq', value: 'personGenderTitle:' + filterPersonGenderTitle });

		var filterPersonEthnicityTitle = $formFilters.find('.valuePersonEthnicityTitle').val();
		if(filterPersonEthnicityTitle != null && filterPersonEthnicityTitle !== '')
			filters.push({ name: 'fq', value: 'personEthnicityTitle:' + filterPersonEthnicityTitle });

		var filterPersonRaceTitle = $formFilters.find('.valuePersonRaceTitle').val();
		if(filterPersonRaceTitle != null && filterPersonRaceTitle !== '')
			filters.push({ name: 'fq', value: 'personRaceTitle:' + filterPersonRaceTitle });

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

		var filterPersonKey = $formFilters.find('.valuePersonKey').val();
		if(filterPersonKey != null && filterPersonKey !== '')
			filters.push({ name: 'fq', value: 'personKey:' + filterPersonKey });

		var filterAgencyTitle = $formFilters.find('.valueAgencyTitle').val();
		if(filterAgencyTitle != null && filterAgencyTitle !== '')
			filters.push({ name: 'fq', value: 'agencyTitle:' + filterAgencyTitle });

		var filterStopDateTime = $formFilters.find('.valueStopDateTime').val();
		if(filterStopDateTime != null && filterStopDateTime !== '')
			filters.push({ name: 'fq', value: 'stopDateTime:' + filterStopDateTime });

		var filterStopPurposeNum = $formFilters.find('.valueStopPurposeNum').val();
		if(filterStopPurposeNum != null && filterStopPurposeNum !== '')
			filters.push({ name: 'fq', value: 'stopPurposeNum:' + filterStopPurposeNum });

		var filterStopPurposeTitle = $formFilters.find('.valueStopPurposeTitle').val();
		if(filterStopPurposeTitle != null && filterStopPurposeTitle !== '')
			filters.push({ name: 'fq', value: 'stopPurposeTitle:' + filterStopPurposeTitle });

		var filterStopActionNum = $formFilters.find('.valueStopActionNum').val();
		if(filterStopActionNum != null && filterStopActionNum !== '')
			filters.push({ name: 'fq', value: 'stopActionNum:' + filterStopActionNum });

		var filterStopActionTitle = $formFilters.find('.valueStopActionTitle').val();
		if(filterStopActionTitle != null && filterStopActionTitle !== '')
			filters.push({ name: 'fq', value: 'stopActionTitle:' + filterStopActionTitle });

		var $filterStopDriverArrestCheckbox = $formFilters.find('input.valueStopDriverArrest[type = "checkbox"]');
		var $filterStopDriverArrestSelect = $formFilters.find('select.valueStopDriverArrest');
		var filterStopDriverArrest = $filterStopDriverArrestSelect.length ? $filterStopDriverArrestSelect.val() : $filterStopDriverArrestCheckbox.prop('checked');
		var filterStopDriverArrestSelectVal = $formFilters.find('select.filterStopDriverArrest').val();
		var filterStopDriverArrest = null;
		if(filterStopDriverArrestSelectVal !== '')
			filterStopDriverArrest = filterStopDriverArrestSelectVal == 'true';
		if(filterStopDriverArrest != null && filterStopDriverArrest === true)
			filters.push({ name: 'fq', value: 'stopDriverArrest:' + filterStopDriverArrest });

		var $filterStopPassengerArrestCheckbox = $formFilters.find('input.valueStopPassengerArrest[type = "checkbox"]');
		var $filterStopPassengerArrestSelect = $formFilters.find('select.valueStopPassengerArrest');
		var filterStopPassengerArrest = $filterStopPassengerArrestSelect.length ? $filterStopPassengerArrestSelect.val() : $filterStopPassengerArrestCheckbox.prop('checked');
		var filterStopPassengerArrestSelectVal = $formFilters.find('select.filterStopPassengerArrest').val();
		var filterStopPassengerArrest = null;
		if(filterStopPassengerArrestSelectVal !== '')
			filterStopPassengerArrest = filterStopPassengerArrestSelectVal == 'true';
		if(filterStopPassengerArrest != null && filterStopPassengerArrest === true)
			filters.push({ name: 'fq', value: 'stopPassengerArrest:' + filterStopPassengerArrest });

		var $filterStopEncounterForceCheckbox = $formFilters.find('input.valueStopEncounterForce[type = "checkbox"]');
		var $filterStopEncounterForceSelect = $formFilters.find('select.valueStopEncounterForce');
		var filterStopEncounterForce = $filterStopEncounterForceSelect.length ? $filterStopEncounterForceSelect.val() : $filterStopEncounterForceCheckbox.prop('checked');
		var filterStopEncounterForceSelectVal = $formFilters.find('select.filterStopEncounterForce').val();
		var filterStopEncounterForce = null;
		if(filterStopEncounterForceSelectVal !== '')
			filterStopEncounterForce = filterStopEncounterForceSelectVal == 'true';
		if(filterStopEncounterForce != null && filterStopEncounterForce === true)
			filters.push({ name: 'fq', value: 'stopEncounterForce:' + filterStopEncounterForce });

		var $filterStopEngageForceCheckbox = $formFilters.find('input.valueStopEngageForce[type = "checkbox"]');
		var $filterStopEngageForceSelect = $formFilters.find('select.valueStopEngageForce');
		var filterStopEngageForce = $filterStopEngageForceSelect.length ? $filterStopEngageForceSelect.val() : $filterStopEngageForceCheckbox.prop('checked');
		var filterStopEngageForceSelectVal = $formFilters.find('select.filterStopEngageForce').val();
		var filterStopEngageForce = null;
		if(filterStopEngageForceSelectVal !== '')
			filterStopEngageForce = filterStopEngageForceSelectVal == 'true';
		if(filterStopEngageForce != null && filterStopEngageForce === true)
			filters.push({ name: 'fq', value: 'stopEngageForce:' + filterStopEngageForce });

		var $filterStopOfficerInjuryCheckbox = $formFilters.find('input.valueStopOfficerInjury[type = "checkbox"]');
		var $filterStopOfficerInjurySelect = $formFilters.find('select.valueStopOfficerInjury');
		var filterStopOfficerInjury = $filterStopOfficerInjurySelect.length ? $filterStopOfficerInjurySelect.val() : $filterStopOfficerInjuryCheckbox.prop('checked');
		var filterStopOfficerInjurySelectVal = $formFilters.find('select.filterStopOfficerInjury').val();
		var filterStopOfficerInjury = null;
		if(filterStopOfficerInjurySelectVal !== '')
			filterStopOfficerInjury = filterStopOfficerInjurySelectVal == 'true';
		if(filterStopOfficerInjury != null && filterStopOfficerInjury === true)
			filters.push({ name: 'fq', value: 'stopOfficerInjury:' + filterStopOfficerInjury });

		var $filterStopDriverInjuryCheckbox = $formFilters.find('input.valueStopDriverInjury[type = "checkbox"]');
		var $filterStopDriverInjurySelect = $formFilters.find('select.valueStopDriverInjury');
		var filterStopDriverInjury = $filterStopDriverInjurySelect.length ? $filterStopDriverInjurySelect.val() : $filterStopDriverInjuryCheckbox.prop('checked');
		var filterStopDriverInjurySelectVal = $formFilters.find('select.filterStopDriverInjury').val();
		var filterStopDriverInjury = null;
		if(filterStopDriverInjurySelectVal !== '')
			filterStopDriverInjury = filterStopDriverInjurySelectVal == 'true';
		if(filterStopDriverInjury != null && filterStopDriverInjury === true)
			filters.push({ name: 'fq', value: 'stopDriverInjury:' + filterStopDriverInjury });

		var $filterStopPassengerInjuryCheckbox = $formFilters.find('input.valueStopPassengerInjury[type = "checkbox"]');
		var $filterStopPassengerInjurySelect = $formFilters.find('select.valueStopPassengerInjury');
		var filterStopPassengerInjury = $filterStopPassengerInjurySelect.length ? $filterStopPassengerInjurySelect.val() : $filterStopPassengerInjuryCheckbox.prop('checked');
		var filterStopPassengerInjurySelectVal = $formFilters.find('select.filterStopPassengerInjury').val();
		var filterStopPassengerInjury = null;
		if(filterStopPassengerInjurySelectVal !== '')
			filterStopPassengerInjury = filterStopPassengerInjurySelectVal == 'true';
		if(filterStopPassengerInjury != null && filterStopPassengerInjury === true)
			filters.push({ name: 'fq', value: 'stopPassengerInjury:' + filterStopPassengerInjury });

		var filterStopOfficerId = $formFilters.find('.valueStopOfficerId').val();
		if(filterStopOfficerId != null && filterStopOfficerId !== '')
			filters.push({ name: 'fq', value: 'stopOfficerId:' + filterStopOfficerId });

		var filterStopLocationId = $formFilters.find('.valueStopLocationId').val();
		if(filterStopLocationId != null && filterStopLocationId !== '')
			filters.push({ name: 'fq', value: 'stopLocationId:' + filterStopLocationId });

		var filterStopCityId = $formFilters.find('.valueStopCityId').val();
		if(filterStopCityId != null && filterStopCityId !== '')
			filters.push({ name: 'fq', value: 'stopCityId:' + filterStopCityId });

		var filterPersonTypeId = $formFilters.find('.valuePersonTypeId').val();
		if(filterPersonTypeId != null && filterPersonTypeId !== '')
			filters.push({ name: 'fq', value: 'personTypeId:' + filterPersonTypeId });

		var $filterPersonTypeDriverCheckbox = $formFilters.find('input.valuePersonTypeDriver[type = "checkbox"]');
		var $filterPersonTypeDriverSelect = $formFilters.find('select.valuePersonTypeDriver');
		var filterPersonTypeDriver = $filterPersonTypeDriverSelect.length ? $filterPersonTypeDriverSelect.val() : $filterPersonTypeDriverCheckbox.prop('checked');
		var filterPersonTypeDriverSelectVal = $formFilters.find('select.filterPersonTypeDriver').val();
		var filterPersonTypeDriver = null;
		if(filterPersonTypeDriverSelectVal !== '')
			filterPersonTypeDriver = filterPersonTypeDriverSelectVal == 'true';
		if(filterPersonTypeDriver != null && filterPersonTypeDriver === true)
			filters.push({ name: 'fq', value: 'personTypeDriver:' + filterPersonTypeDriver });

		var $filterPersonTypePassengerCheckbox = $formFilters.find('input.valuePersonTypePassenger[type = "checkbox"]');
		var $filterPersonTypePassengerSelect = $formFilters.find('select.valuePersonTypePassenger');
		var filterPersonTypePassenger = $filterPersonTypePassengerSelect.length ? $filterPersonTypePassengerSelect.val() : $filterPersonTypePassengerCheckbox.prop('checked');
		var filterPersonTypePassengerSelectVal = $formFilters.find('select.filterPersonTypePassenger').val();
		var filterPersonTypePassenger = null;
		if(filterPersonTypePassengerSelectVal !== '')
			filterPersonTypePassenger = filterPersonTypePassengerSelectVal == 'true';
		if(filterPersonTypePassenger != null && filterPersonTypePassenger === true)
			filters.push({ name: 'fq', value: 'personTypePassenger:' + filterPersonTypePassenger });

		var filterPersonGenderId = $formFilters.find('.valuePersonGenderId').val();
		if(filterPersonGenderId != null && filterPersonGenderId !== '')
			filters.push({ name: 'fq', value: 'personGenderId:' + filterPersonGenderId });

		var $filterPersonGenderFemaleCheckbox = $formFilters.find('input.valuePersonGenderFemale[type = "checkbox"]');
		var $filterPersonGenderFemaleSelect = $formFilters.find('select.valuePersonGenderFemale');
		var filterPersonGenderFemale = $filterPersonGenderFemaleSelect.length ? $filterPersonGenderFemaleSelect.val() : $filterPersonGenderFemaleCheckbox.prop('checked');
		var filterPersonGenderFemaleSelectVal = $formFilters.find('select.filterPersonGenderFemale').val();
		var filterPersonGenderFemale = null;
		if(filterPersonGenderFemaleSelectVal !== '')
			filterPersonGenderFemale = filterPersonGenderFemaleSelectVal == 'true';
		if(filterPersonGenderFemale != null && filterPersonGenderFemale === true)
			filters.push({ name: 'fq', value: 'personGenderFemale:' + filterPersonGenderFemale });

		var $filterPersonGenderMaleCheckbox = $formFilters.find('input.valuePersonGenderMale[type = "checkbox"]');
		var $filterPersonGenderMaleSelect = $formFilters.find('select.valuePersonGenderMale');
		var filterPersonGenderMale = $filterPersonGenderMaleSelect.length ? $filterPersonGenderMaleSelect.val() : $filterPersonGenderMaleCheckbox.prop('checked');
		var filterPersonGenderMaleSelectVal = $formFilters.find('select.filterPersonGenderMale').val();
		var filterPersonGenderMale = null;
		if(filterPersonGenderMaleSelectVal !== '')
			filterPersonGenderMale = filterPersonGenderMaleSelectVal == 'true';
		if(filterPersonGenderMale != null && filterPersonGenderMale === true)
			filters.push({ name: 'fq', value: 'personGenderMale:' + filterPersonGenderMale });

		var filterPersonEthnicityId = $formFilters.find('.valuePersonEthnicityId').val();
		if(filterPersonEthnicityId != null && filterPersonEthnicityId !== '')
			filters.push({ name: 'fq', value: 'personEthnicityId:' + filterPersonEthnicityId });

		var filterPersonRaceId = $formFilters.find('.valuePersonRaceId').val();
		if(filterPersonRaceId != null && filterPersonRaceId !== '')
			filters.push({ name: 'fq', value: 'personRaceId:' + filterPersonRaceId });
	}
	return filters;
}

function patchTrafficPersonVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchTrafficPersonVals(filters, vals, success, error);
}

function patchTrafficPersonVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/person?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getTrafficPerson(pk) {
	$.ajax({
		url: '/api/person/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Search //

async function searchTrafficPerson($formFilters, success, error) {
	var filters = searchTrafficPersonFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchTrafficPersonVals(filters, success, error);
}

function searchTrafficPersonFilters($formFilters) {
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

		var filterTrafficStopKey = $formFilters.find('.valueTrafficStopKey').val();
		if(filterTrafficStopKey != null && filterTrafficStopKey !== '')
			filters.push({ name: 'fq', value: 'trafficStopKey:' + filterTrafficStopKey });

		var filterTrafficSearchKeys = $formFilters.find('.valueTrafficSearchKeys').val();
		if(filterTrafficSearchKeys != null && filterTrafficSearchKeys !== '')
			filters.push({ name: 'fq', value: 'trafficSearchKeys:' + filterTrafficSearchKeys });

		var filterPersonAge = $formFilters.find('.valuePersonAge').val();
		if(filterPersonAge != null && filterPersonAge !== '')
			filters.push({ name: 'fq', value: 'personAge:' + filterPersonAge });

		var filterPersonTypeTitle = $formFilters.find('.valuePersonTypeTitle').val();
		if(filterPersonTypeTitle != null && filterPersonTypeTitle !== '')
			filters.push({ name: 'fq', value: 'personTypeTitle:' + filterPersonTypeTitle });

		var filterPersonGenderTitle = $formFilters.find('.valuePersonGenderTitle').val();
		if(filterPersonGenderTitle != null && filterPersonGenderTitle !== '')
			filters.push({ name: 'fq', value: 'personGenderTitle:' + filterPersonGenderTitle });

		var filterPersonEthnicityTitle = $formFilters.find('.valuePersonEthnicityTitle').val();
		if(filterPersonEthnicityTitle != null && filterPersonEthnicityTitle !== '')
			filters.push({ name: 'fq', value: 'personEthnicityTitle:' + filterPersonEthnicityTitle });

		var filterPersonRaceTitle = $formFilters.find('.valuePersonRaceTitle').val();
		if(filterPersonRaceTitle != null && filterPersonRaceTitle !== '')
			filters.push({ name: 'fq', value: 'personRaceTitle:' + filterPersonRaceTitle });

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

		var filterPersonKey = $formFilters.find('.valuePersonKey').val();
		if(filterPersonKey != null && filterPersonKey !== '')
			filters.push({ name: 'fq', value: 'personKey:' + filterPersonKey });

		var filterAgencyTitle = $formFilters.find('.valueAgencyTitle').val();
		if(filterAgencyTitle != null && filterAgencyTitle !== '')
			filters.push({ name: 'fq', value: 'agencyTitle:' + filterAgencyTitle });

		var filterStopDateTime = $formFilters.find('.valueStopDateTime').val();
		if(filterStopDateTime != null && filterStopDateTime !== '')
			filters.push({ name: 'fq', value: 'stopDateTime:' + filterStopDateTime });

		var filterStopPurposeNum = $formFilters.find('.valueStopPurposeNum').val();
		if(filterStopPurposeNum != null && filterStopPurposeNum !== '')
			filters.push({ name: 'fq', value: 'stopPurposeNum:' + filterStopPurposeNum });

		var filterStopPurposeTitle = $formFilters.find('.valueStopPurposeTitle').val();
		if(filterStopPurposeTitle != null && filterStopPurposeTitle !== '')
			filters.push({ name: 'fq', value: 'stopPurposeTitle:' + filterStopPurposeTitle });

		var filterStopActionNum = $formFilters.find('.valueStopActionNum').val();
		if(filterStopActionNum != null && filterStopActionNum !== '')
			filters.push({ name: 'fq', value: 'stopActionNum:' + filterStopActionNum });

		var filterStopActionTitle = $formFilters.find('.valueStopActionTitle').val();
		if(filterStopActionTitle != null && filterStopActionTitle !== '')
			filters.push({ name: 'fq', value: 'stopActionTitle:' + filterStopActionTitle });

		var $filterStopDriverArrestCheckbox = $formFilters.find('input.valueStopDriverArrest[type = "checkbox"]');
		var $filterStopDriverArrestSelect = $formFilters.find('select.valueStopDriverArrest');
		var filterStopDriverArrest = $filterStopDriverArrestSelect.length ? $filterStopDriverArrestSelect.val() : $filterStopDriverArrestCheckbox.prop('checked');
		var filterStopDriverArrestSelectVal = $formFilters.find('select.filterStopDriverArrest').val();
		var filterStopDriverArrest = null;
		if(filterStopDriverArrestSelectVal !== '')
			filterStopDriverArrest = filterStopDriverArrestSelectVal == 'true';
		if(filterStopDriverArrest != null && filterStopDriverArrest === true)
			filters.push({ name: 'fq', value: 'stopDriverArrest:' + filterStopDriverArrest });

		var $filterStopPassengerArrestCheckbox = $formFilters.find('input.valueStopPassengerArrest[type = "checkbox"]');
		var $filterStopPassengerArrestSelect = $formFilters.find('select.valueStopPassengerArrest');
		var filterStopPassengerArrest = $filterStopPassengerArrestSelect.length ? $filterStopPassengerArrestSelect.val() : $filterStopPassengerArrestCheckbox.prop('checked');
		var filterStopPassengerArrestSelectVal = $formFilters.find('select.filterStopPassengerArrest').val();
		var filterStopPassengerArrest = null;
		if(filterStopPassengerArrestSelectVal !== '')
			filterStopPassengerArrest = filterStopPassengerArrestSelectVal == 'true';
		if(filterStopPassengerArrest != null && filterStopPassengerArrest === true)
			filters.push({ name: 'fq', value: 'stopPassengerArrest:' + filterStopPassengerArrest });

		var $filterStopEncounterForceCheckbox = $formFilters.find('input.valueStopEncounterForce[type = "checkbox"]');
		var $filterStopEncounterForceSelect = $formFilters.find('select.valueStopEncounterForce');
		var filterStopEncounterForce = $filterStopEncounterForceSelect.length ? $filterStopEncounterForceSelect.val() : $filterStopEncounterForceCheckbox.prop('checked');
		var filterStopEncounterForceSelectVal = $formFilters.find('select.filterStopEncounterForce').val();
		var filterStopEncounterForce = null;
		if(filterStopEncounterForceSelectVal !== '')
			filterStopEncounterForce = filterStopEncounterForceSelectVal == 'true';
		if(filterStopEncounterForce != null && filterStopEncounterForce === true)
			filters.push({ name: 'fq', value: 'stopEncounterForce:' + filterStopEncounterForce });

		var $filterStopEngageForceCheckbox = $formFilters.find('input.valueStopEngageForce[type = "checkbox"]');
		var $filterStopEngageForceSelect = $formFilters.find('select.valueStopEngageForce');
		var filterStopEngageForce = $filterStopEngageForceSelect.length ? $filterStopEngageForceSelect.val() : $filterStopEngageForceCheckbox.prop('checked');
		var filterStopEngageForceSelectVal = $formFilters.find('select.filterStopEngageForce').val();
		var filterStopEngageForce = null;
		if(filterStopEngageForceSelectVal !== '')
			filterStopEngageForce = filterStopEngageForceSelectVal == 'true';
		if(filterStopEngageForce != null && filterStopEngageForce === true)
			filters.push({ name: 'fq', value: 'stopEngageForce:' + filterStopEngageForce });

		var $filterStopOfficerInjuryCheckbox = $formFilters.find('input.valueStopOfficerInjury[type = "checkbox"]');
		var $filterStopOfficerInjurySelect = $formFilters.find('select.valueStopOfficerInjury');
		var filterStopOfficerInjury = $filterStopOfficerInjurySelect.length ? $filterStopOfficerInjurySelect.val() : $filterStopOfficerInjuryCheckbox.prop('checked');
		var filterStopOfficerInjurySelectVal = $formFilters.find('select.filterStopOfficerInjury').val();
		var filterStopOfficerInjury = null;
		if(filterStopOfficerInjurySelectVal !== '')
			filterStopOfficerInjury = filterStopOfficerInjurySelectVal == 'true';
		if(filterStopOfficerInjury != null && filterStopOfficerInjury === true)
			filters.push({ name: 'fq', value: 'stopOfficerInjury:' + filterStopOfficerInjury });

		var $filterStopDriverInjuryCheckbox = $formFilters.find('input.valueStopDriverInjury[type = "checkbox"]');
		var $filterStopDriverInjurySelect = $formFilters.find('select.valueStopDriverInjury');
		var filterStopDriverInjury = $filterStopDriverInjurySelect.length ? $filterStopDriverInjurySelect.val() : $filterStopDriverInjuryCheckbox.prop('checked');
		var filterStopDriverInjurySelectVal = $formFilters.find('select.filterStopDriverInjury').val();
		var filterStopDriverInjury = null;
		if(filterStopDriverInjurySelectVal !== '')
			filterStopDriverInjury = filterStopDriverInjurySelectVal == 'true';
		if(filterStopDriverInjury != null && filterStopDriverInjury === true)
			filters.push({ name: 'fq', value: 'stopDriverInjury:' + filterStopDriverInjury });

		var $filterStopPassengerInjuryCheckbox = $formFilters.find('input.valueStopPassengerInjury[type = "checkbox"]');
		var $filterStopPassengerInjurySelect = $formFilters.find('select.valueStopPassengerInjury');
		var filterStopPassengerInjury = $filterStopPassengerInjurySelect.length ? $filterStopPassengerInjurySelect.val() : $filterStopPassengerInjuryCheckbox.prop('checked');
		var filterStopPassengerInjurySelectVal = $formFilters.find('select.filterStopPassengerInjury').val();
		var filterStopPassengerInjury = null;
		if(filterStopPassengerInjurySelectVal !== '')
			filterStopPassengerInjury = filterStopPassengerInjurySelectVal == 'true';
		if(filterStopPassengerInjury != null && filterStopPassengerInjury === true)
			filters.push({ name: 'fq', value: 'stopPassengerInjury:' + filterStopPassengerInjury });

		var filterStopOfficerId = $formFilters.find('.valueStopOfficerId').val();
		if(filterStopOfficerId != null && filterStopOfficerId !== '')
			filters.push({ name: 'fq', value: 'stopOfficerId:' + filterStopOfficerId });

		var filterStopLocationId = $formFilters.find('.valueStopLocationId').val();
		if(filterStopLocationId != null && filterStopLocationId !== '')
			filters.push({ name: 'fq', value: 'stopLocationId:' + filterStopLocationId });

		var filterStopCityId = $formFilters.find('.valueStopCityId').val();
		if(filterStopCityId != null && filterStopCityId !== '')
			filters.push({ name: 'fq', value: 'stopCityId:' + filterStopCityId });

		var filterPersonTypeId = $formFilters.find('.valuePersonTypeId').val();
		if(filterPersonTypeId != null && filterPersonTypeId !== '')
			filters.push({ name: 'fq', value: 'personTypeId:' + filterPersonTypeId });

		var $filterPersonTypeDriverCheckbox = $formFilters.find('input.valuePersonTypeDriver[type = "checkbox"]');
		var $filterPersonTypeDriverSelect = $formFilters.find('select.valuePersonTypeDriver');
		var filterPersonTypeDriver = $filterPersonTypeDriverSelect.length ? $filterPersonTypeDriverSelect.val() : $filterPersonTypeDriverCheckbox.prop('checked');
		var filterPersonTypeDriverSelectVal = $formFilters.find('select.filterPersonTypeDriver').val();
		var filterPersonTypeDriver = null;
		if(filterPersonTypeDriverSelectVal !== '')
			filterPersonTypeDriver = filterPersonTypeDriverSelectVal == 'true';
		if(filterPersonTypeDriver != null && filterPersonTypeDriver === true)
			filters.push({ name: 'fq', value: 'personTypeDriver:' + filterPersonTypeDriver });

		var $filterPersonTypePassengerCheckbox = $formFilters.find('input.valuePersonTypePassenger[type = "checkbox"]');
		var $filterPersonTypePassengerSelect = $formFilters.find('select.valuePersonTypePassenger');
		var filterPersonTypePassenger = $filterPersonTypePassengerSelect.length ? $filterPersonTypePassengerSelect.val() : $filterPersonTypePassengerCheckbox.prop('checked');
		var filterPersonTypePassengerSelectVal = $formFilters.find('select.filterPersonTypePassenger').val();
		var filterPersonTypePassenger = null;
		if(filterPersonTypePassengerSelectVal !== '')
			filterPersonTypePassenger = filterPersonTypePassengerSelectVal == 'true';
		if(filterPersonTypePassenger != null && filterPersonTypePassenger === true)
			filters.push({ name: 'fq', value: 'personTypePassenger:' + filterPersonTypePassenger });

		var filterPersonGenderId = $formFilters.find('.valuePersonGenderId').val();
		if(filterPersonGenderId != null && filterPersonGenderId !== '')
			filters.push({ name: 'fq', value: 'personGenderId:' + filterPersonGenderId });

		var $filterPersonGenderFemaleCheckbox = $formFilters.find('input.valuePersonGenderFemale[type = "checkbox"]');
		var $filterPersonGenderFemaleSelect = $formFilters.find('select.valuePersonGenderFemale');
		var filterPersonGenderFemale = $filterPersonGenderFemaleSelect.length ? $filterPersonGenderFemaleSelect.val() : $filterPersonGenderFemaleCheckbox.prop('checked');
		var filterPersonGenderFemaleSelectVal = $formFilters.find('select.filterPersonGenderFemale').val();
		var filterPersonGenderFemale = null;
		if(filterPersonGenderFemaleSelectVal !== '')
			filterPersonGenderFemale = filterPersonGenderFemaleSelectVal == 'true';
		if(filterPersonGenderFemale != null && filterPersonGenderFemale === true)
			filters.push({ name: 'fq', value: 'personGenderFemale:' + filterPersonGenderFemale });

		var $filterPersonGenderMaleCheckbox = $formFilters.find('input.valuePersonGenderMale[type = "checkbox"]');
		var $filterPersonGenderMaleSelect = $formFilters.find('select.valuePersonGenderMale');
		var filterPersonGenderMale = $filterPersonGenderMaleSelect.length ? $filterPersonGenderMaleSelect.val() : $filterPersonGenderMaleCheckbox.prop('checked');
		var filterPersonGenderMaleSelectVal = $formFilters.find('select.filterPersonGenderMale').val();
		var filterPersonGenderMale = null;
		if(filterPersonGenderMaleSelectVal !== '')
			filterPersonGenderMale = filterPersonGenderMaleSelectVal == 'true';
		if(filterPersonGenderMale != null && filterPersonGenderMale === true)
			filters.push({ name: 'fq', value: 'personGenderMale:' + filterPersonGenderMale });

		var filterPersonEthnicityId = $formFilters.find('.valuePersonEthnicityId').val();
		if(filterPersonEthnicityId != null && filterPersonEthnicityId !== '')
			filters.push({ name: 'fq', value: 'personEthnicityId:' + filterPersonEthnicityId });

		var filterPersonRaceId = $formFilters.find('.valuePersonRaceId').val();
		if(filterPersonRaceId != null && filterPersonRaceId !== '')
			filters.push({ name: 'fq', value: 'personRaceId:' + filterPersonRaceId });
	}
	return filters;
}

function searchTrafficPersonVals(filters, success, error) {
	$.ajax({
		url: '/api/person?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestTrafficPersonTrafficStopKey(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-newspaper ');
			var $span = $('<span>').attr('class', '').text(o['objectTitle']);
			var $a = $('<span>');
			$a.append($i);
			$a.append($span);
			var val = o['personKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_trafficStopKey_' + pk + '_personKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueTrafficStopKey w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_trafficStopKey_" + pk + "_personKeys_" + o['pk'] + "'); patchTrafficPersonVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'TrafficStopKey']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#TrafficPersonForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchTrafficStopVals(filters, success, error);
}

function suggestTrafficPersonTrafficSearchKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-newspaper ');
			var $span = $('<span>').attr('class', '').text(o['objectTitle']);
			var $a = $('<span>');
			$a.append($i);
			$a.append($span);
			var val = o['personKey'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_trafficSearchKeys_' + pk + '_personKey_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueTrafficSearchKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_trafficSearchKeys_" + pk + "_personKey_" + o['pk'] + "'); patchTrafficPersonVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'TrafficSearchKeys']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#TrafficPersonForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchTrafficSearchVals(filters, success, error);
}

// AdminSearch //

async function adminsearchTrafficPerson($formFilters, success, error) {
	var filters = adminsearchTrafficPersonFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	adminsearchTrafficPersonVals(filters, success, error);
}

function adminsearchTrafficPersonFilters($formFilters) {
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

		var filterTrafficStopKey = $formFilters.find('.valueTrafficStopKey').val();
		if(filterTrafficStopKey != null && filterTrafficStopKey !== '')
			filters.push({ name: 'fq', value: 'trafficStopKey:' + filterTrafficStopKey });

		var filterTrafficSearchKeys = $formFilters.find('.valueTrafficSearchKeys').val();
		if(filterTrafficSearchKeys != null && filterTrafficSearchKeys !== '')
			filters.push({ name: 'fq', value: 'trafficSearchKeys:' + filterTrafficSearchKeys });

		var filterPersonAge = $formFilters.find('.valuePersonAge').val();
		if(filterPersonAge != null && filterPersonAge !== '')
			filters.push({ name: 'fq', value: 'personAge:' + filterPersonAge });

		var filterPersonTypeTitle = $formFilters.find('.valuePersonTypeTitle').val();
		if(filterPersonTypeTitle != null && filterPersonTypeTitle !== '')
			filters.push({ name: 'fq', value: 'personTypeTitle:' + filterPersonTypeTitle });

		var filterPersonGenderTitle = $formFilters.find('.valuePersonGenderTitle').val();
		if(filterPersonGenderTitle != null && filterPersonGenderTitle !== '')
			filters.push({ name: 'fq', value: 'personGenderTitle:' + filterPersonGenderTitle });

		var filterPersonEthnicityTitle = $formFilters.find('.valuePersonEthnicityTitle').val();
		if(filterPersonEthnicityTitle != null && filterPersonEthnicityTitle !== '')
			filters.push({ name: 'fq', value: 'personEthnicityTitle:' + filterPersonEthnicityTitle });

		var filterPersonRaceTitle = $formFilters.find('.valuePersonRaceTitle').val();
		if(filterPersonRaceTitle != null && filterPersonRaceTitle !== '')
			filters.push({ name: 'fq', value: 'personRaceTitle:' + filterPersonRaceTitle });

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

		var filterPersonKey = $formFilters.find('.valuePersonKey').val();
		if(filterPersonKey != null && filterPersonKey !== '')
			filters.push({ name: 'fq', value: 'personKey:' + filterPersonKey });

		var filterAgencyTitle = $formFilters.find('.valueAgencyTitle').val();
		if(filterAgencyTitle != null && filterAgencyTitle !== '')
			filters.push({ name: 'fq', value: 'agencyTitle:' + filterAgencyTitle });

		var filterStopDateTime = $formFilters.find('.valueStopDateTime').val();
		if(filterStopDateTime != null && filterStopDateTime !== '')
			filters.push({ name: 'fq', value: 'stopDateTime:' + filterStopDateTime });

		var filterStopPurposeNum = $formFilters.find('.valueStopPurposeNum').val();
		if(filterStopPurposeNum != null && filterStopPurposeNum !== '')
			filters.push({ name: 'fq', value: 'stopPurposeNum:' + filterStopPurposeNum });

		var filterStopPurposeTitle = $formFilters.find('.valueStopPurposeTitle').val();
		if(filterStopPurposeTitle != null && filterStopPurposeTitle !== '')
			filters.push({ name: 'fq', value: 'stopPurposeTitle:' + filterStopPurposeTitle });

		var filterStopActionNum = $formFilters.find('.valueStopActionNum').val();
		if(filterStopActionNum != null && filterStopActionNum !== '')
			filters.push({ name: 'fq', value: 'stopActionNum:' + filterStopActionNum });

		var filterStopActionTitle = $formFilters.find('.valueStopActionTitle').val();
		if(filterStopActionTitle != null && filterStopActionTitle !== '')
			filters.push({ name: 'fq', value: 'stopActionTitle:' + filterStopActionTitle });

		var $filterStopDriverArrestCheckbox = $formFilters.find('input.valueStopDriverArrest[type = "checkbox"]');
		var $filterStopDriverArrestSelect = $formFilters.find('select.valueStopDriverArrest');
		var filterStopDriverArrest = $filterStopDriverArrestSelect.length ? $filterStopDriverArrestSelect.val() : $filterStopDriverArrestCheckbox.prop('checked');
		var filterStopDriverArrestSelectVal = $formFilters.find('select.filterStopDriverArrest').val();
		var filterStopDriverArrest = null;
		if(filterStopDriverArrestSelectVal !== '')
			filterStopDriverArrest = filterStopDriverArrestSelectVal == 'true';
		if(filterStopDriverArrest != null && filterStopDriverArrest === true)
			filters.push({ name: 'fq', value: 'stopDriverArrest:' + filterStopDriverArrest });

		var $filterStopPassengerArrestCheckbox = $formFilters.find('input.valueStopPassengerArrest[type = "checkbox"]');
		var $filterStopPassengerArrestSelect = $formFilters.find('select.valueStopPassengerArrest');
		var filterStopPassengerArrest = $filterStopPassengerArrestSelect.length ? $filterStopPassengerArrestSelect.val() : $filterStopPassengerArrestCheckbox.prop('checked');
		var filterStopPassengerArrestSelectVal = $formFilters.find('select.filterStopPassengerArrest').val();
		var filterStopPassengerArrest = null;
		if(filterStopPassengerArrestSelectVal !== '')
			filterStopPassengerArrest = filterStopPassengerArrestSelectVal == 'true';
		if(filterStopPassengerArrest != null && filterStopPassengerArrest === true)
			filters.push({ name: 'fq', value: 'stopPassengerArrest:' + filterStopPassengerArrest });

		var $filterStopEncounterForceCheckbox = $formFilters.find('input.valueStopEncounterForce[type = "checkbox"]');
		var $filterStopEncounterForceSelect = $formFilters.find('select.valueStopEncounterForce');
		var filterStopEncounterForce = $filterStopEncounterForceSelect.length ? $filterStopEncounterForceSelect.val() : $filterStopEncounterForceCheckbox.prop('checked');
		var filterStopEncounterForceSelectVal = $formFilters.find('select.filterStopEncounterForce').val();
		var filterStopEncounterForce = null;
		if(filterStopEncounterForceSelectVal !== '')
			filterStopEncounterForce = filterStopEncounterForceSelectVal == 'true';
		if(filterStopEncounterForce != null && filterStopEncounterForce === true)
			filters.push({ name: 'fq', value: 'stopEncounterForce:' + filterStopEncounterForce });

		var $filterStopEngageForceCheckbox = $formFilters.find('input.valueStopEngageForce[type = "checkbox"]');
		var $filterStopEngageForceSelect = $formFilters.find('select.valueStopEngageForce');
		var filterStopEngageForce = $filterStopEngageForceSelect.length ? $filterStopEngageForceSelect.val() : $filterStopEngageForceCheckbox.prop('checked');
		var filterStopEngageForceSelectVal = $formFilters.find('select.filterStopEngageForce').val();
		var filterStopEngageForce = null;
		if(filterStopEngageForceSelectVal !== '')
			filterStopEngageForce = filterStopEngageForceSelectVal == 'true';
		if(filterStopEngageForce != null && filterStopEngageForce === true)
			filters.push({ name: 'fq', value: 'stopEngageForce:' + filterStopEngageForce });

		var $filterStopOfficerInjuryCheckbox = $formFilters.find('input.valueStopOfficerInjury[type = "checkbox"]');
		var $filterStopOfficerInjurySelect = $formFilters.find('select.valueStopOfficerInjury');
		var filterStopOfficerInjury = $filterStopOfficerInjurySelect.length ? $filterStopOfficerInjurySelect.val() : $filterStopOfficerInjuryCheckbox.prop('checked');
		var filterStopOfficerInjurySelectVal = $formFilters.find('select.filterStopOfficerInjury').val();
		var filterStopOfficerInjury = null;
		if(filterStopOfficerInjurySelectVal !== '')
			filterStopOfficerInjury = filterStopOfficerInjurySelectVal == 'true';
		if(filterStopOfficerInjury != null && filterStopOfficerInjury === true)
			filters.push({ name: 'fq', value: 'stopOfficerInjury:' + filterStopOfficerInjury });

		var $filterStopDriverInjuryCheckbox = $formFilters.find('input.valueStopDriverInjury[type = "checkbox"]');
		var $filterStopDriverInjurySelect = $formFilters.find('select.valueStopDriverInjury');
		var filterStopDriverInjury = $filterStopDriverInjurySelect.length ? $filterStopDriverInjurySelect.val() : $filterStopDriverInjuryCheckbox.prop('checked');
		var filterStopDriverInjurySelectVal = $formFilters.find('select.filterStopDriverInjury').val();
		var filterStopDriverInjury = null;
		if(filterStopDriverInjurySelectVal !== '')
			filterStopDriverInjury = filterStopDriverInjurySelectVal == 'true';
		if(filterStopDriverInjury != null && filterStopDriverInjury === true)
			filters.push({ name: 'fq', value: 'stopDriverInjury:' + filterStopDriverInjury });

		var $filterStopPassengerInjuryCheckbox = $formFilters.find('input.valueStopPassengerInjury[type = "checkbox"]');
		var $filterStopPassengerInjurySelect = $formFilters.find('select.valueStopPassengerInjury');
		var filterStopPassengerInjury = $filterStopPassengerInjurySelect.length ? $filterStopPassengerInjurySelect.val() : $filterStopPassengerInjuryCheckbox.prop('checked');
		var filterStopPassengerInjurySelectVal = $formFilters.find('select.filterStopPassengerInjury').val();
		var filterStopPassengerInjury = null;
		if(filterStopPassengerInjurySelectVal !== '')
			filterStopPassengerInjury = filterStopPassengerInjurySelectVal == 'true';
		if(filterStopPassengerInjury != null && filterStopPassengerInjury === true)
			filters.push({ name: 'fq', value: 'stopPassengerInjury:' + filterStopPassengerInjury });

		var filterStopOfficerId = $formFilters.find('.valueStopOfficerId').val();
		if(filterStopOfficerId != null && filterStopOfficerId !== '')
			filters.push({ name: 'fq', value: 'stopOfficerId:' + filterStopOfficerId });

		var filterStopLocationId = $formFilters.find('.valueStopLocationId').val();
		if(filterStopLocationId != null && filterStopLocationId !== '')
			filters.push({ name: 'fq', value: 'stopLocationId:' + filterStopLocationId });

		var filterStopCityId = $formFilters.find('.valueStopCityId').val();
		if(filterStopCityId != null && filterStopCityId !== '')
			filters.push({ name: 'fq', value: 'stopCityId:' + filterStopCityId });

		var filterPersonTypeId = $formFilters.find('.valuePersonTypeId').val();
		if(filterPersonTypeId != null && filterPersonTypeId !== '')
			filters.push({ name: 'fq', value: 'personTypeId:' + filterPersonTypeId });

		var $filterPersonTypeDriverCheckbox = $formFilters.find('input.valuePersonTypeDriver[type = "checkbox"]');
		var $filterPersonTypeDriverSelect = $formFilters.find('select.valuePersonTypeDriver');
		var filterPersonTypeDriver = $filterPersonTypeDriverSelect.length ? $filterPersonTypeDriverSelect.val() : $filterPersonTypeDriverCheckbox.prop('checked');
		var filterPersonTypeDriverSelectVal = $formFilters.find('select.filterPersonTypeDriver').val();
		var filterPersonTypeDriver = null;
		if(filterPersonTypeDriverSelectVal !== '')
			filterPersonTypeDriver = filterPersonTypeDriverSelectVal == 'true';
		if(filterPersonTypeDriver != null && filterPersonTypeDriver === true)
			filters.push({ name: 'fq', value: 'personTypeDriver:' + filterPersonTypeDriver });

		var $filterPersonTypePassengerCheckbox = $formFilters.find('input.valuePersonTypePassenger[type = "checkbox"]');
		var $filterPersonTypePassengerSelect = $formFilters.find('select.valuePersonTypePassenger');
		var filterPersonTypePassenger = $filterPersonTypePassengerSelect.length ? $filterPersonTypePassengerSelect.val() : $filterPersonTypePassengerCheckbox.prop('checked');
		var filterPersonTypePassengerSelectVal = $formFilters.find('select.filterPersonTypePassenger').val();
		var filterPersonTypePassenger = null;
		if(filterPersonTypePassengerSelectVal !== '')
			filterPersonTypePassenger = filterPersonTypePassengerSelectVal == 'true';
		if(filterPersonTypePassenger != null && filterPersonTypePassenger === true)
			filters.push({ name: 'fq', value: 'personTypePassenger:' + filterPersonTypePassenger });

		var filterPersonGenderId = $formFilters.find('.valuePersonGenderId').val();
		if(filterPersonGenderId != null && filterPersonGenderId !== '')
			filters.push({ name: 'fq', value: 'personGenderId:' + filterPersonGenderId });

		var $filterPersonGenderFemaleCheckbox = $formFilters.find('input.valuePersonGenderFemale[type = "checkbox"]');
		var $filterPersonGenderFemaleSelect = $formFilters.find('select.valuePersonGenderFemale');
		var filterPersonGenderFemale = $filterPersonGenderFemaleSelect.length ? $filterPersonGenderFemaleSelect.val() : $filterPersonGenderFemaleCheckbox.prop('checked');
		var filterPersonGenderFemaleSelectVal = $formFilters.find('select.filterPersonGenderFemale').val();
		var filterPersonGenderFemale = null;
		if(filterPersonGenderFemaleSelectVal !== '')
			filterPersonGenderFemale = filterPersonGenderFemaleSelectVal == 'true';
		if(filterPersonGenderFemale != null && filterPersonGenderFemale === true)
			filters.push({ name: 'fq', value: 'personGenderFemale:' + filterPersonGenderFemale });

		var $filterPersonGenderMaleCheckbox = $formFilters.find('input.valuePersonGenderMale[type = "checkbox"]');
		var $filterPersonGenderMaleSelect = $formFilters.find('select.valuePersonGenderMale');
		var filterPersonGenderMale = $filterPersonGenderMaleSelect.length ? $filterPersonGenderMaleSelect.val() : $filterPersonGenderMaleCheckbox.prop('checked');
		var filterPersonGenderMaleSelectVal = $formFilters.find('select.filterPersonGenderMale').val();
		var filterPersonGenderMale = null;
		if(filterPersonGenderMaleSelectVal !== '')
			filterPersonGenderMale = filterPersonGenderMaleSelectVal == 'true';
		if(filterPersonGenderMale != null && filterPersonGenderMale === true)
			filters.push({ name: 'fq', value: 'personGenderMale:' + filterPersonGenderMale });

		var filterPersonEthnicityId = $formFilters.find('.valuePersonEthnicityId').val();
		if(filterPersonEthnicityId != null && filterPersonEthnicityId !== '')
			filters.push({ name: 'fq', value: 'personEthnicityId:' + filterPersonEthnicityId });

		var filterPersonRaceId = $formFilters.find('.valuePersonRaceId').val();
		if(filterPersonRaceId != null && filterPersonRaceId !== '')
			filters.push({ name: 'fq', value: 'personRaceId:' + filterPersonRaceId });
	}
	return filters;
}

function adminsearchTrafficPersonVals(filters, success, error) {
	$.ajax({
		url: '/api/admin/person?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestTrafficPersonTrafficStopKey(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-newspaper ');
			var $span = $('<span>').attr('class', '').text(o['objectTitle']);
			var $a = $('<span>');
			$a.append($i);
			$a.append($span);
			var val = o['personKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_trafficStopKey_' + pk + '_personKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueTrafficStopKey w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_trafficStopKey_" + pk + "_personKeys_" + o['pk'] + "'); patchTrafficPersonVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'TrafficStopKey']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#TrafficPersonForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchTrafficStopVals(filters, success, error);
}

function suggestTrafficPersonTrafficSearchKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-newspaper ');
			var $span = $('<span>').attr('class', '').text(o['objectTitle']);
			var $a = $('<span>');
			$a.append($i);
			$a.append($span);
			var val = o['personKey'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_trafficSearchKeys_' + pk + '_personKey_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueTrafficSearchKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_trafficSearchKeys_" + pk + "_personKey_" + o['pk'] + "'); patchTrafficPersonVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'TrafficSearchKeys']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#TrafficPersonForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchTrafficSearchVals(filters, success, error);
}

async function websocketTrafficPerson(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketTrafficPerson', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pkPage = $('#TrafficPersonForm :input[name=pk]').val();
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = parseInt(json['numFound']);
			var numPATCH = parseInt(json['numPATCH']);
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-quarter box-' + id + ' ').attr('id', 'box-' + id).attr('data-numPATCH', numPATCH);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-pale-green ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'far fa-newspaper w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modify people' + id);
			var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
			var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
			var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
			var $progress = $('<div>').attr('class', 'w3-pale-green ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
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

		window.eventBus.registerHandler('websocketTrafficStop', function (error, message) {
			$('#Page_trafficStopKey').trigger('oninput');
			$('#Page_trafficStopKey_add').text('add a traffic stop');
			$('#Page_trafficStopKey_add').removeClass('w3-disabled');
			$('#Page_trafficStopKey_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketTrafficSearch', function (error, message) {
			$('#Page_trafficSearchKeys').trigger('oninput');
			$('#Page_trafficSearchKeys_add').text('add a traffic search');
			$('#Page_trafficSearchKeys_add').removeClass('w3-disabled');
			$('#Page_trafficSearchKeys_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketTrafficStop', function (error, message) {
			$('#Page_trafficStopKey').trigger('oninput');
			$('#Page_trafficStopKey_add').text('add a traffic stop');
			$('#Page_trafficStopKey_add').removeClass('w3-disabled');
			$('#Page_trafficStopKey_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketTrafficSearch', function (error, message) {
			$('#Page_trafficSearchKeys').trigger('oninput');
			$('#Page_trafficSearchKeys_add').text('add a traffic search');
			$('#Page_trafficSearchKeys_add').removeClass('w3-disabled');
			$('#Page_trafficSearchKeys_add').attr('disabled', false);
		});
	}
}
async function websocketTrafficPersonInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchTrafficPersonVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['pk'];
			if(vars.includes('pk')) {
				$('.inputTrafficPerson' + pk + 'Pk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficPerson' + pk + 'Pk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficPerson' + pk + 'Pk'));
			}
			var val = o['created'];
			if(vars.includes('created')) {
				$('.inputTrafficPerson' + pk + 'Created').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficPerson' + pk + 'Created').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficPerson' + pk + 'Created'));
			}
			var val = o['modified'];
			if(vars.includes('modified')) {
				$('.inputTrafficPerson' + pk + 'Modified').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficPerson' + pk + 'Modified').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficPerson' + pk + 'Modified'));
			}
			var val = o['trafficStopKey'];
			if(vars.includes('trafficStopKey')) {
				$('.inputTrafficPerson' + pk + 'TrafficStopKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficPerson' + pk + 'TrafficStopKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficPerson' + pk + 'TrafficStopKey'));
			}
			var val = o['trafficSearchKeys'];
			if(vars.includes('trafficSearchKeys')) {
				$('.inputTrafficPerson' + pk + 'TrafficSearchKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficPerson' + pk + 'TrafficSearchKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficPerson' + pk + 'TrafficSearchKeys'));
			}
			var val = o['personAge'];
			if(vars.includes('personAge')) {
				$('.inputTrafficPerson' + pk + 'PersonAge').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficPerson' + pk + 'PersonAge').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficPerson' + pk + 'PersonAge'));
			}
			var val = o['personTypeTitle'];
			if(vars.includes('personTypeTitle')) {
				$('.inputTrafficPerson' + pk + 'PersonTypeTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficPerson' + pk + 'PersonTypeTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficPerson' + pk + 'PersonTypeTitle'));
			}
			var val = o['personGenderTitle'];
			if(vars.includes('personGenderTitle')) {
				$('.inputTrafficPerson' + pk + 'PersonGenderTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficPerson' + pk + 'PersonGenderTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficPerson' + pk + 'PersonGenderTitle'));
			}
			var val = o['personEthnicityTitle'];
			if(vars.includes('personEthnicityTitle')) {
				$('.inputTrafficPerson' + pk + 'PersonEthnicityTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficPerson' + pk + 'PersonEthnicityTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficPerson' + pk + 'PersonEthnicityTitle'));
			}
			var val = o['personRaceTitle'];
			if(vars.includes('personRaceTitle')) {
				$('.inputTrafficPerson' + pk + 'PersonRaceTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficPerson' + pk + 'PersonRaceTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficPerson' + pk + 'PersonRaceTitle'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputTrafficPerson' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficPerson' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficPerson' + pk + 'InheritPk'));
			}
			var val = o['id'];
			if(vars.includes('id')) {
				$('.inputTrafficPerson' + pk + 'Id').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficPerson' + pk + 'Id').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficPerson' + pk + 'Id'));
			}
			var val = o['classCanonicalName'];
			if(vars.includes('classCanonicalName')) {
				$('.inputTrafficPerson' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficPerson' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficPerson' + pk + 'ClassCanonicalName'));
			}
			var val = o['classSimpleName'];
			if(vars.includes('classSimpleName')) {
				$('.inputTrafficPerson' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficPerson' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficPerson' + pk + 'ClassSimpleName'));
			}
			var val = o['classCanonicalNames'];
			if(vars.includes('classCanonicalNames')) {
				$('.inputTrafficPerson' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficPerson' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficPerson' + pk + 'ClassCanonicalNames'));
			}
			var val = o['saves'];
			if(vars.includes('saves')) {
				$('.inputTrafficPerson' + pk + 'Saves').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficPerson' + pk + 'Saves').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficPerson' + pk + 'Saves'));
			}
			var val = o['objectTitle'];
			if(vars.includes('objectTitle')) {
				$('.inputTrafficPerson' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficPerson' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficPerson' + pk + 'ObjectTitle'));
			}
			var val = o['objectId'];
			if(vars.includes('objectId')) {
				$('.inputTrafficPerson' + pk + 'ObjectId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficPerson' + pk + 'ObjectId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficPerson' + pk + 'ObjectId'));
			}
			var val = o['personKey'];
			if(vars.includes('personKey')) {
				$('.inputTrafficPerson' + pk + 'PersonKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficPerson' + pk + 'PersonKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficPerson' + pk + 'PersonKey'));
			}
			var val = o['agencyTitle'];
			if(vars.includes('agencyTitle')) {
				$('.inputTrafficPerson' + pk + 'AgencyTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficPerson' + pk + 'AgencyTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficPerson' + pk + 'AgencyTitle'));
			}
			var val = o['stopDateTime'];
			if(vars.includes('stopDateTime')) {
				$('.inputTrafficPerson' + pk + 'StopDateTime').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficPerson' + pk + 'StopDateTime').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficPerson' + pk + 'StopDateTime'));
			}
			var val = o['stopPurposeNum'];
			if(vars.includes('stopPurposeNum')) {
				$('.inputTrafficPerson' + pk + 'StopPurposeNum').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficPerson' + pk + 'StopPurposeNum').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficPerson' + pk + 'StopPurposeNum'));
			}
			var val = o['stopPurposeTitle'];
			if(vars.includes('stopPurposeTitle')) {
				$('.inputTrafficPerson' + pk + 'StopPurposeTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficPerson' + pk + 'StopPurposeTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficPerson' + pk + 'StopPurposeTitle'));
			}
			var val = o['stopActionNum'];
			if(vars.includes('stopActionNum')) {
				$('.inputTrafficPerson' + pk + 'StopActionNum').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficPerson' + pk + 'StopActionNum').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficPerson' + pk + 'StopActionNum'));
			}
			var val = o['stopActionTitle'];
			if(vars.includes('stopActionTitle')) {
				$('.inputTrafficPerson' + pk + 'StopActionTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficPerson' + pk + 'StopActionTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficPerson' + pk + 'StopActionTitle'));
			}
			var val = o['stopDriverArrest'];
			if(vars.includes('stopDriverArrest')) {
				$('.inputTrafficPerson' + pk + 'StopDriverArrest').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficPerson' + pk + 'StopDriverArrest').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficPerson' + pk + 'StopDriverArrest'));
			}
			var val = o['stopPassengerArrest'];
			if(vars.includes('stopPassengerArrest')) {
				$('.inputTrafficPerson' + pk + 'StopPassengerArrest').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficPerson' + pk + 'StopPassengerArrest').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficPerson' + pk + 'StopPassengerArrest'));
			}
			var val = o['stopEncounterForce'];
			if(vars.includes('stopEncounterForce')) {
				$('.inputTrafficPerson' + pk + 'StopEncounterForce').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficPerson' + pk + 'StopEncounterForce').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficPerson' + pk + 'StopEncounterForce'));
			}
			var val = o['stopEngageForce'];
			if(vars.includes('stopEngageForce')) {
				$('.inputTrafficPerson' + pk + 'StopEngageForce').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficPerson' + pk + 'StopEngageForce').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficPerson' + pk + 'StopEngageForce'));
			}
			var val = o['stopOfficerInjury'];
			if(vars.includes('stopOfficerInjury')) {
				$('.inputTrafficPerson' + pk + 'StopOfficerInjury').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficPerson' + pk + 'StopOfficerInjury').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficPerson' + pk + 'StopOfficerInjury'));
			}
			var val = o['stopDriverInjury'];
			if(vars.includes('stopDriverInjury')) {
				$('.inputTrafficPerson' + pk + 'StopDriverInjury').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficPerson' + pk + 'StopDriverInjury').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficPerson' + pk + 'StopDriverInjury'));
			}
			var val = o['stopPassengerInjury'];
			if(vars.includes('stopPassengerInjury')) {
				$('.inputTrafficPerson' + pk + 'StopPassengerInjury').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficPerson' + pk + 'StopPassengerInjury').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficPerson' + pk + 'StopPassengerInjury'));
			}
			var val = o['stopOfficerId'];
			if(vars.includes('stopOfficerId')) {
				$('.inputTrafficPerson' + pk + 'StopOfficerId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficPerson' + pk + 'StopOfficerId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficPerson' + pk + 'StopOfficerId'));
			}
			var val = o['stopLocationId'];
			if(vars.includes('stopLocationId')) {
				$('.inputTrafficPerson' + pk + 'StopLocationId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficPerson' + pk + 'StopLocationId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficPerson' + pk + 'StopLocationId'));
			}
			var val = o['stopCityId'];
			if(vars.includes('stopCityId')) {
				$('.inputTrafficPerson' + pk + 'StopCityId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficPerson' + pk + 'StopCityId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficPerson' + pk + 'StopCityId'));
			}
			var val = o['personTypeId'];
			if(vars.includes('personTypeId')) {
				$('.inputTrafficPerson' + pk + 'PersonTypeId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficPerson' + pk + 'PersonTypeId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficPerson' + pk + 'PersonTypeId'));
			}
			var val = o['personTypeDriver'];
			if(vars.includes('personTypeDriver')) {
				$('.inputTrafficPerson' + pk + 'PersonTypeDriver').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficPerson' + pk + 'PersonTypeDriver').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficPerson' + pk + 'PersonTypeDriver'));
			}
			var val = o['personTypePassenger'];
			if(vars.includes('personTypePassenger')) {
				$('.inputTrafficPerson' + pk + 'PersonTypePassenger').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficPerson' + pk + 'PersonTypePassenger').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficPerson' + pk + 'PersonTypePassenger'));
			}
			var val = o['personGenderId'];
			if(vars.includes('personGenderId')) {
				$('.inputTrafficPerson' + pk + 'PersonGenderId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficPerson' + pk + 'PersonGenderId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficPerson' + pk + 'PersonGenderId'));
			}
			var val = o['personGenderFemale'];
			if(vars.includes('personGenderFemale')) {
				$('.inputTrafficPerson' + pk + 'PersonGenderFemale').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficPerson' + pk + 'PersonGenderFemale').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficPerson' + pk + 'PersonGenderFemale'));
			}
			var val = o['personGenderMale'];
			if(vars.includes('personGenderMale')) {
				$('.inputTrafficPerson' + pk + 'PersonGenderMale').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficPerson' + pk + 'PersonGenderMale').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficPerson' + pk + 'PersonGenderMale'));
			}
			var val = o['personEthnicityId'];
			if(vars.includes('personEthnicityId')) {
				$('.inputTrafficPerson' + pk + 'PersonEthnicityId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficPerson' + pk + 'PersonEthnicityId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficPerson' + pk + 'PersonEthnicityId'));
			}
			var val = o['personRaceId'];
			if(vars.includes('personRaceId')) {
				$('.inputTrafficPerson' + pk + 'PersonRaceId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficPerson' + pk + 'PersonRaceId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficPerson' + pk + 'PersonRaceId'));
			}
		});
	}
}
