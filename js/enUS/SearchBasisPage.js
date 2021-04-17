
// PUTImport //

async function putimportSearchBasis($formValues, pk, success, error) {
	var json = $formValues.find('.PUTImport_list').val();
	if(json != null && json !== '')
		putimportSearchBasisVals(JSON.parse(json), success, error);
}

function putimportSearchBasisVals(json, success, error) {
	$.ajax({
		url: '/api/search-basis/import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTMerge //

async function putmergeSearchBasis($formValues, pk, success, error) {
	var json = $formValues.find('.PUTMerge_list').val();
	if(json != null && json !== '')
		putmergeSearchBasisVals(JSON.parse(json), success, error);
}

function putmergeSearchBasisVals(json, success, error) {
	$.ajax({
		url: '/api/search-basis/merge'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTCopy //

async function putcopySearchBasis($formValues, pk, success, error) {
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

	var valueSearchBasisTitle = $formValues.find('.valueSearchBasisTitle').val();
	if(valueSearchBasisTitle != null && valueSearchBasisTitle !== '')
		vals['searchBasisTitle'] = valueSearchBasisTitle;

	var valueSearchKey = $formValues.find('input.valueSearchKey:checked').val();
	var valueSearchKeyClear = $formValues.find('input.searchKey_clear:checked').val();
	if(valueSearchKeyClear != null && valueSearchKeyClear)
		vals['searchKey'] = null;
	else if(valueSearchKey != null && valueSearchKey)
		vals['searchKey'] = valueSearchKey;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	if(valueInheritPk != null && valueInheritPk !== '')
		vals['inheritPk'] = valueInheritPk;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	var valueSearchBasisId = $formValues.find('.valueSearchBasisId').val();
	if(valueSearchBasisId != null && valueSearchBasisId !== '')
		vals['searchBasisId'] = valueSearchBasisId;

	putcopySearchBasisVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function putcopySearchBasisVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/search-basis/copy?' + $.param(filters)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify({patch: vals})
		, success: success
		, error: error
	});
}

// POST //

async function postSearchBasis($formValues, success, error) {
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

	var valueSearchBasisTitle = $formValues.find('.valueSearchBasisTitle').val();
	if(valueSearchBasisTitle != null && valueSearchBasisTitle !== '')
		vals['searchBasisTitle'] = valueSearchBasisTitle;

	var valueSearchKey = $formValues.find('.valueSearchKey').val();
	if(valueSearchKey != null && valueSearchKey !== '')
		vals['searchKey'] = valueSearchKey;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	if(valueInheritPk != null && valueInheritPk !== '')
		vals['inheritPk'] = valueInheritPk;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	var valueSearchBasisId = $formValues.find('.valueSearchBasisId').val();
	if(valueSearchBasisId != null && valueSearchBasisId !== '')
		vals['searchBasisId'] = valueSearchBasisId;

	$.ajax({
		url: '/api/search-basis'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postSearchBasisVals(vals, success, error) {
	$.ajax({
		url: '/api/search-basis'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PATCH //

async function patchSearchBasis($formFilters, $formValues, pk, success, error) {
	var filters = patchSearchBasisFilters($formFilters);

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

	var valueSearchBasisTitle = $formValues.find('.valueSearchBasisTitle').val();
	var removeSearchBasisTitle = $formValues.find('.removeSearchBasisTitle').val() === 'true';
	var setSearchBasisTitle = removeSearchBasisTitle ? null : $formValues.find('.setSearchBasisTitle').val();
	var addSearchBasisTitle = $formValues.find('.addSearchBasisTitle').val();
	if(removeSearchBasisTitle || setSearchBasisTitle != null && setSearchBasisTitle !== '')
		vals['setSearchBasisTitle'] = setSearchBasisTitle;
	if(addSearchBasisTitle != null && addSearchBasisTitle !== '')
		vals['addSearchBasisTitle'] = addSearchBasisTitle;
	var removeSearchBasisTitle = $formValues.find('.removeSearchBasisTitle').val();
	if(removeSearchBasisTitle != null && removeSearchBasisTitle !== '')
		vals['removeSearchBasisTitle'] = removeSearchBasisTitle;

	var valueSearchKey = $formValues.find('input.valueSearchKey:checked').val();
	if(valueSearchKey != null && valueSearchKey !== '')
		vals['setSearchKey'] = valueSearchKey;

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

	var valueSearchBasisId = $formValues.find('.valueSearchBasisId').val();
	var removeSearchBasisId = $formValues.find('.removeSearchBasisId').val() === 'true';
	var setSearchBasisId = removeSearchBasisId ? null : $formValues.find('.setSearchBasisId').val();
	var addSearchBasisId = $formValues.find('.addSearchBasisId').val();
	if(removeSearchBasisId || setSearchBasisId != null && setSearchBasisId !== '')
		vals['setSearchBasisId'] = setSearchBasisId;
	if(addSearchBasisId != null && addSearchBasisId !== '')
		vals['addSearchBasisId'] = addSearchBasisId;
	var removeSearchBasisId = $formValues.find('.removeSearchBasisId').val();
	if(removeSearchBasisId != null && removeSearchBasisId !== '')
		vals['removeSearchBasisId'] = removeSearchBasisId;

	patchSearchBasisVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchSearchBasisFilters($formFilters) {
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

		var filterSearchBasisTitle = $formFilters.find('.valueSearchBasisTitle').val();
		if(filterSearchBasisTitle != null && filterSearchBasisTitle !== '')
			filters.push({ name: 'fq', value: 'searchBasisTitle:' + filterSearchBasisTitle });

		var filterSearchKey = $formFilters.find('.valueSearchKey').val();
		if(filterSearchKey != null && filterSearchKey !== '')
			filters.push({ name: 'fq', value: 'searchKey:' + filterSearchKey });

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

		var filterSearchBasisKey = $formFilters.find('.valueSearchBasisKey').val();
		if(filterSearchBasisKey != null && filterSearchBasisKey !== '')
			filters.push({ name: 'fq', value: 'searchBasisKey:' + filterSearchBasisKey });

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

		var filterPersonAge = $formFilters.find('.valuePersonAge').val();
		if(filterPersonAge != null && filterPersonAge !== '')
			filters.push({ name: 'fq', value: 'personAge:' + filterPersonAge });

		var filterPersonTypeId = $formFilters.find('.valuePersonTypeId').val();
		if(filterPersonTypeId != null && filterPersonTypeId !== '')
			filters.push({ name: 'fq', value: 'personTypeId:' + filterPersonTypeId });

		var filterPersonTypeTitle = $formFilters.find('.valuePersonTypeTitle').val();
		if(filterPersonTypeTitle != null && filterPersonTypeTitle !== '')
			filters.push({ name: 'fq', value: 'personTypeTitle:' + filterPersonTypeTitle });

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

		var filterPersonGenderTitle = $formFilters.find('.valuePersonGenderTitle').val();
		if(filterPersonGenderTitle != null && filterPersonGenderTitle !== '')
			filters.push({ name: 'fq', value: 'personGenderTitle:' + filterPersonGenderTitle });

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

		var filterPersonEthnicityTitle = $formFilters.find('.valuePersonEthnicityTitle').val();
		if(filterPersonEthnicityTitle != null && filterPersonEthnicityTitle !== '')
			filters.push({ name: 'fq', value: 'personEthnicityTitle:' + filterPersonEthnicityTitle });

		var filterPersonRaceId = $formFilters.find('.valuePersonRaceId').val();
		if(filterPersonRaceId != null && filterPersonRaceId !== '')
			filters.push({ name: 'fq', value: 'personRaceId:' + filterPersonRaceId });

		var filterPersonRaceTitle = $formFilters.find('.valuePersonRaceTitle').val();
		if(filterPersonRaceTitle != null && filterPersonRaceTitle !== '')
			filters.push({ name: 'fq', value: 'personRaceTitle:' + filterPersonRaceTitle });

		var filterTrafficStopKey = $formFilters.find('.valueTrafficStopKey').val();
		if(filterTrafficStopKey != null && filterTrafficStopKey !== '')
			filters.push({ name: 'fq', value: 'trafficStopKey:' + filterTrafficStopKey });

		var filterSearchTypeNum = $formFilters.find('.valueSearchTypeNum').val();
		if(filterSearchTypeNum != null && filterSearchTypeNum !== '')
			filters.push({ name: 'fq', value: 'searchTypeNum:' + filterSearchTypeNum });

		var filterSearchTypeTitle = $formFilters.find('.valueSearchTypeTitle').val();
		if(filterSearchTypeTitle != null && filterSearchTypeTitle !== '')
			filters.push({ name: 'fq', value: 'searchTypeTitle:' + filterSearchTypeTitle });

		var $filterSearchVehicleCheckbox = $formFilters.find('input.valueSearchVehicle[type = "checkbox"]');
		var $filterSearchVehicleSelect = $formFilters.find('select.valueSearchVehicle');
		var filterSearchVehicle = $filterSearchVehicleSelect.length ? $filterSearchVehicleSelect.val() : $filterSearchVehicleCheckbox.prop('checked');
		var filterSearchVehicleSelectVal = $formFilters.find('select.filterSearchVehicle').val();
		var filterSearchVehicle = null;
		if(filterSearchVehicleSelectVal !== '')
			filterSearchVehicle = filterSearchVehicleSelectVal == 'true';
		if(filterSearchVehicle != null && filterSearchVehicle === true)
			filters.push({ name: 'fq', value: 'searchVehicle:' + filterSearchVehicle });

		var $filterSearchDriverCheckbox = $formFilters.find('input.valueSearchDriver[type = "checkbox"]');
		var $filterSearchDriverSelect = $formFilters.find('select.valueSearchDriver');
		var filterSearchDriver = $filterSearchDriverSelect.length ? $filterSearchDriverSelect.val() : $filterSearchDriverCheckbox.prop('checked');
		var filterSearchDriverSelectVal = $formFilters.find('select.filterSearchDriver').val();
		var filterSearchDriver = null;
		if(filterSearchDriverSelectVal !== '')
			filterSearchDriver = filterSearchDriverSelectVal == 'true';
		if(filterSearchDriver != null && filterSearchDriver === true)
			filters.push({ name: 'fq', value: 'searchDriver:' + filterSearchDriver });

		var $filterSearchPassengerCheckbox = $formFilters.find('input.valueSearchPassenger[type = "checkbox"]');
		var $filterSearchPassengerSelect = $formFilters.find('select.valueSearchPassenger');
		var filterSearchPassenger = $filterSearchPassengerSelect.length ? $filterSearchPassengerSelect.val() : $filterSearchPassengerCheckbox.prop('checked');
		var filterSearchPassengerSelectVal = $formFilters.find('select.filterSearchPassenger').val();
		var filterSearchPassenger = null;
		if(filterSearchPassengerSelectVal !== '')
			filterSearchPassenger = filterSearchPassengerSelectVal == 'true';
		if(filterSearchPassenger != null && filterSearchPassenger === true)
			filters.push({ name: 'fq', value: 'searchPassenger:' + filterSearchPassenger });

		var $filterSearchPropertyCheckbox = $formFilters.find('input.valueSearchProperty[type = "checkbox"]');
		var $filterSearchPropertySelect = $formFilters.find('select.valueSearchProperty');
		var filterSearchProperty = $filterSearchPropertySelect.length ? $filterSearchPropertySelect.val() : $filterSearchPropertyCheckbox.prop('checked');
		var filterSearchPropertySelectVal = $formFilters.find('select.filterSearchProperty').val();
		var filterSearchProperty = null;
		if(filterSearchPropertySelectVal !== '')
			filterSearchProperty = filterSearchPropertySelectVal == 'true';
		if(filterSearchProperty != null && filterSearchProperty === true)
			filters.push({ name: 'fq', value: 'searchProperty:' + filterSearchProperty });

		var $filterSearchVehicleSiezedCheckbox = $formFilters.find('input.valueSearchVehicleSiezed[type = "checkbox"]');
		var $filterSearchVehicleSiezedSelect = $formFilters.find('select.valueSearchVehicleSiezed');
		var filterSearchVehicleSiezed = $filterSearchVehicleSiezedSelect.length ? $filterSearchVehicleSiezedSelect.val() : $filterSearchVehicleSiezedCheckbox.prop('checked');
		var filterSearchVehicleSiezedSelectVal = $formFilters.find('select.filterSearchVehicleSiezed').val();
		var filterSearchVehicleSiezed = null;
		if(filterSearchVehicleSiezedSelectVal !== '')
			filterSearchVehicleSiezed = filterSearchVehicleSiezedSelectVal == 'true';
		if(filterSearchVehicleSiezed != null && filterSearchVehicleSiezed === true)
			filters.push({ name: 'fq', value: 'searchVehicleSiezed:' + filterSearchVehicleSiezed });

		var $filterSearchPersonalPropertySiezedCheckbox = $formFilters.find('input.valueSearchPersonalPropertySiezed[type = "checkbox"]');
		var $filterSearchPersonalPropertySiezedSelect = $formFilters.find('select.valueSearchPersonalPropertySiezed');
		var filterSearchPersonalPropertySiezed = $filterSearchPersonalPropertySiezedSelect.length ? $filterSearchPersonalPropertySiezedSelect.val() : $filterSearchPersonalPropertySiezedCheckbox.prop('checked');
		var filterSearchPersonalPropertySiezedSelectVal = $formFilters.find('select.filterSearchPersonalPropertySiezed').val();
		var filterSearchPersonalPropertySiezed = null;
		if(filterSearchPersonalPropertySiezedSelectVal !== '')
			filterSearchPersonalPropertySiezed = filterSearchPersonalPropertySiezedSelectVal == 'true';
		if(filterSearchPersonalPropertySiezed != null && filterSearchPersonalPropertySiezed === true)
			filters.push({ name: 'fq', value: 'searchPersonalPropertySiezed:' + filterSearchPersonalPropertySiezed });

		var $filterSearchOtherPropertySiezedCheckbox = $formFilters.find('input.valueSearchOtherPropertySiezed[type = "checkbox"]');
		var $filterSearchOtherPropertySiezedSelect = $formFilters.find('select.valueSearchOtherPropertySiezed');
		var filterSearchOtherPropertySiezed = $filterSearchOtherPropertySiezedSelect.length ? $filterSearchOtherPropertySiezedSelect.val() : $filterSearchOtherPropertySiezedCheckbox.prop('checked');
		var filterSearchOtherPropertySiezedSelectVal = $formFilters.find('select.filterSearchOtherPropertySiezed').val();
		var filterSearchOtherPropertySiezed = null;
		if(filterSearchOtherPropertySiezedSelectVal !== '')
			filterSearchOtherPropertySiezed = filterSearchOtherPropertySiezedSelectVal == 'true';
		if(filterSearchOtherPropertySiezed != null && filterSearchOtherPropertySiezed === true)
			filters.push({ name: 'fq', value: 'searchOtherPropertySiezed:' + filterSearchOtherPropertySiezed });

		var filterSearchBasisId = $formFilters.find('.valueSearchBasisId').val();
		if(filterSearchBasisId != null && filterSearchBasisId !== '')
			filters.push({ name: 'fq', value: 'searchBasisId:' + filterSearchBasisId });
	}
	return filters;
}

function patchSearchBasisVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchSearchBasisVals(filters, vals, success, error);
}

function patchSearchBasisVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/search-basis?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getSearchBasis(pk) {
	$.ajax({
		url: '/api/search-basis/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Search //

async function searchSearchBasis($formFilters, success, error) {
	var filters = searchSearchBasisFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchSearchBasisVals(filters, success, error);
}

function searchSearchBasisFilters($formFilters) {
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

		var filterSearchBasisTitle = $formFilters.find('.valueSearchBasisTitle').val();
		if(filterSearchBasisTitle != null && filterSearchBasisTitle !== '')
			filters.push({ name: 'fq', value: 'searchBasisTitle:' + filterSearchBasisTitle });

		var filterSearchKey = $formFilters.find('.valueSearchKey').val();
		if(filterSearchKey != null && filterSearchKey !== '')
			filters.push({ name: 'fq', value: 'searchKey:' + filterSearchKey });

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

		var filterSearchBasisKey = $formFilters.find('.valueSearchBasisKey').val();
		if(filterSearchBasisKey != null && filterSearchBasisKey !== '')
			filters.push({ name: 'fq', value: 'searchBasisKey:' + filterSearchBasisKey });

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

		var filterPersonAge = $formFilters.find('.valuePersonAge').val();
		if(filterPersonAge != null && filterPersonAge !== '')
			filters.push({ name: 'fq', value: 'personAge:' + filterPersonAge });

		var filterPersonTypeId = $formFilters.find('.valuePersonTypeId').val();
		if(filterPersonTypeId != null && filterPersonTypeId !== '')
			filters.push({ name: 'fq', value: 'personTypeId:' + filterPersonTypeId });

		var filterPersonTypeTitle = $formFilters.find('.valuePersonTypeTitle').val();
		if(filterPersonTypeTitle != null && filterPersonTypeTitle !== '')
			filters.push({ name: 'fq', value: 'personTypeTitle:' + filterPersonTypeTitle });

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

		var filterPersonGenderTitle = $formFilters.find('.valuePersonGenderTitle').val();
		if(filterPersonGenderTitle != null && filterPersonGenderTitle !== '')
			filters.push({ name: 'fq', value: 'personGenderTitle:' + filterPersonGenderTitle });

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

		var filterPersonEthnicityTitle = $formFilters.find('.valuePersonEthnicityTitle').val();
		if(filterPersonEthnicityTitle != null && filterPersonEthnicityTitle !== '')
			filters.push({ name: 'fq', value: 'personEthnicityTitle:' + filterPersonEthnicityTitle });

		var filterPersonRaceId = $formFilters.find('.valuePersonRaceId').val();
		if(filterPersonRaceId != null && filterPersonRaceId !== '')
			filters.push({ name: 'fq', value: 'personRaceId:' + filterPersonRaceId });

		var filterPersonRaceTitle = $formFilters.find('.valuePersonRaceTitle').val();
		if(filterPersonRaceTitle != null && filterPersonRaceTitle !== '')
			filters.push({ name: 'fq', value: 'personRaceTitle:' + filterPersonRaceTitle });

		var filterTrafficStopKey = $formFilters.find('.valueTrafficStopKey').val();
		if(filterTrafficStopKey != null && filterTrafficStopKey !== '')
			filters.push({ name: 'fq', value: 'trafficStopKey:' + filterTrafficStopKey });

		var filterSearchTypeNum = $formFilters.find('.valueSearchTypeNum').val();
		if(filterSearchTypeNum != null && filterSearchTypeNum !== '')
			filters.push({ name: 'fq', value: 'searchTypeNum:' + filterSearchTypeNum });

		var filterSearchTypeTitle = $formFilters.find('.valueSearchTypeTitle').val();
		if(filterSearchTypeTitle != null && filterSearchTypeTitle !== '')
			filters.push({ name: 'fq', value: 'searchTypeTitle:' + filterSearchTypeTitle });

		var $filterSearchVehicleCheckbox = $formFilters.find('input.valueSearchVehicle[type = "checkbox"]');
		var $filterSearchVehicleSelect = $formFilters.find('select.valueSearchVehicle');
		var filterSearchVehicle = $filterSearchVehicleSelect.length ? $filterSearchVehicleSelect.val() : $filterSearchVehicleCheckbox.prop('checked');
		var filterSearchVehicleSelectVal = $formFilters.find('select.filterSearchVehicle').val();
		var filterSearchVehicle = null;
		if(filterSearchVehicleSelectVal !== '')
			filterSearchVehicle = filterSearchVehicleSelectVal == 'true';
		if(filterSearchVehicle != null && filterSearchVehicle === true)
			filters.push({ name: 'fq', value: 'searchVehicle:' + filterSearchVehicle });

		var $filterSearchDriverCheckbox = $formFilters.find('input.valueSearchDriver[type = "checkbox"]');
		var $filterSearchDriverSelect = $formFilters.find('select.valueSearchDriver');
		var filterSearchDriver = $filterSearchDriverSelect.length ? $filterSearchDriverSelect.val() : $filterSearchDriverCheckbox.prop('checked');
		var filterSearchDriverSelectVal = $formFilters.find('select.filterSearchDriver').val();
		var filterSearchDriver = null;
		if(filterSearchDriverSelectVal !== '')
			filterSearchDriver = filterSearchDriverSelectVal == 'true';
		if(filterSearchDriver != null && filterSearchDriver === true)
			filters.push({ name: 'fq', value: 'searchDriver:' + filterSearchDriver });

		var $filterSearchPassengerCheckbox = $formFilters.find('input.valueSearchPassenger[type = "checkbox"]');
		var $filterSearchPassengerSelect = $formFilters.find('select.valueSearchPassenger');
		var filterSearchPassenger = $filterSearchPassengerSelect.length ? $filterSearchPassengerSelect.val() : $filterSearchPassengerCheckbox.prop('checked');
		var filterSearchPassengerSelectVal = $formFilters.find('select.filterSearchPassenger').val();
		var filterSearchPassenger = null;
		if(filterSearchPassengerSelectVal !== '')
			filterSearchPassenger = filterSearchPassengerSelectVal == 'true';
		if(filterSearchPassenger != null && filterSearchPassenger === true)
			filters.push({ name: 'fq', value: 'searchPassenger:' + filterSearchPassenger });

		var $filterSearchPropertyCheckbox = $formFilters.find('input.valueSearchProperty[type = "checkbox"]');
		var $filterSearchPropertySelect = $formFilters.find('select.valueSearchProperty');
		var filterSearchProperty = $filterSearchPropertySelect.length ? $filterSearchPropertySelect.val() : $filterSearchPropertyCheckbox.prop('checked');
		var filterSearchPropertySelectVal = $formFilters.find('select.filterSearchProperty').val();
		var filterSearchProperty = null;
		if(filterSearchPropertySelectVal !== '')
			filterSearchProperty = filterSearchPropertySelectVal == 'true';
		if(filterSearchProperty != null && filterSearchProperty === true)
			filters.push({ name: 'fq', value: 'searchProperty:' + filterSearchProperty });

		var $filterSearchVehicleSiezedCheckbox = $formFilters.find('input.valueSearchVehicleSiezed[type = "checkbox"]');
		var $filterSearchVehicleSiezedSelect = $formFilters.find('select.valueSearchVehicleSiezed');
		var filterSearchVehicleSiezed = $filterSearchVehicleSiezedSelect.length ? $filterSearchVehicleSiezedSelect.val() : $filterSearchVehicleSiezedCheckbox.prop('checked');
		var filterSearchVehicleSiezedSelectVal = $formFilters.find('select.filterSearchVehicleSiezed').val();
		var filterSearchVehicleSiezed = null;
		if(filterSearchVehicleSiezedSelectVal !== '')
			filterSearchVehicleSiezed = filterSearchVehicleSiezedSelectVal == 'true';
		if(filterSearchVehicleSiezed != null && filterSearchVehicleSiezed === true)
			filters.push({ name: 'fq', value: 'searchVehicleSiezed:' + filterSearchVehicleSiezed });

		var $filterSearchPersonalPropertySiezedCheckbox = $formFilters.find('input.valueSearchPersonalPropertySiezed[type = "checkbox"]');
		var $filterSearchPersonalPropertySiezedSelect = $formFilters.find('select.valueSearchPersonalPropertySiezed');
		var filterSearchPersonalPropertySiezed = $filterSearchPersonalPropertySiezedSelect.length ? $filterSearchPersonalPropertySiezedSelect.val() : $filterSearchPersonalPropertySiezedCheckbox.prop('checked');
		var filterSearchPersonalPropertySiezedSelectVal = $formFilters.find('select.filterSearchPersonalPropertySiezed').val();
		var filterSearchPersonalPropertySiezed = null;
		if(filterSearchPersonalPropertySiezedSelectVal !== '')
			filterSearchPersonalPropertySiezed = filterSearchPersonalPropertySiezedSelectVal == 'true';
		if(filterSearchPersonalPropertySiezed != null && filterSearchPersonalPropertySiezed === true)
			filters.push({ name: 'fq', value: 'searchPersonalPropertySiezed:' + filterSearchPersonalPropertySiezed });

		var $filterSearchOtherPropertySiezedCheckbox = $formFilters.find('input.valueSearchOtherPropertySiezed[type = "checkbox"]');
		var $filterSearchOtherPropertySiezedSelect = $formFilters.find('select.valueSearchOtherPropertySiezed');
		var filterSearchOtherPropertySiezed = $filterSearchOtherPropertySiezedSelect.length ? $filterSearchOtherPropertySiezedSelect.val() : $filterSearchOtherPropertySiezedCheckbox.prop('checked');
		var filterSearchOtherPropertySiezedSelectVal = $formFilters.find('select.filterSearchOtherPropertySiezed').val();
		var filterSearchOtherPropertySiezed = null;
		if(filterSearchOtherPropertySiezedSelectVal !== '')
			filterSearchOtherPropertySiezed = filterSearchOtherPropertySiezedSelectVal == 'true';
		if(filterSearchOtherPropertySiezed != null && filterSearchOtherPropertySiezed === true)
			filters.push({ name: 'fq', value: 'searchOtherPropertySiezed:' + filterSearchOtherPropertySiezed });

		var filterSearchBasisId = $formFilters.find('.valueSearchBasisId').val();
		if(filterSearchBasisId != null && filterSearchBasisId !== '')
			filters.push({ name: 'fq', value: 'searchBasisId:' + filterSearchBasisId });
	}
	return filters;
}

function searchSearchBasisVals(filters, success, error) {
	$.ajax({
		url: '/api/search-basis?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestSearchBasisSearchKey(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-newspaper ');
			var $span = $('<span>').attr('class', '').text(o['objectTitle']);
			var $a = $('<span>');
			$a.append($i);
			$a.append($span);
			var val = o['searchBasisKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_searchKey_' + pk + '_searchBasisKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueSearchKey w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_searchKey_" + pk + "_searchBasisKeys_" + o['pk'] + "'); patchSearchBasisVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'SearchKey']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#SearchBasisForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchTrafficSearchVals(filters, success, error);
}

// AdminSearch //

async function adminsearchSearchBasis($formFilters, success, error) {
	var filters = adminsearchSearchBasisFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	adminsearchSearchBasisVals(filters, success, error);
}

function adminsearchSearchBasisFilters($formFilters) {
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

		var filterSearchBasisTitle = $formFilters.find('.valueSearchBasisTitle').val();
		if(filterSearchBasisTitle != null && filterSearchBasisTitle !== '')
			filters.push({ name: 'fq', value: 'searchBasisTitle:' + filterSearchBasisTitle });

		var filterSearchKey = $formFilters.find('.valueSearchKey').val();
		if(filterSearchKey != null && filterSearchKey !== '')
			filters.push({ name: 'fq', value: 'searchKey:' + filterSearchKey });

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

		var filterSearchBasisKey = $formFilters.find('.valueSearchBasisKey').val();
		if(filterSearchBasisKey != null && filterSearchBasisKey !== '')
			filters.push({ name: 'fq', value: 'searchBasisKey:' + filterSearchBasisKey });

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

		var filterPersonAge = $formFilters.find('.valuePersonAge').val();
		if(filterPersonAge != null && filterPersonAge !== '')
			filters.push({ name: 'fq', value: 'personAge:' + filterPersonAge });

		var filterPersonTypeId = $formFilters.find('.valuePersonTypeId').val();
		if(filterPersonTypeId != null && filterPersonTypeId !== '')
			filters.push({ name: 'fq', value: 'personTypeId:' + filterPersonTypeId });

		var filterPersonTypeTitle = $formFilters.find('.valuePersonTypeTitle').val();
		if(filterPersonTypeTitle != null && filterPersonTypeTitle !== '')
			filters.push({ name: 'fq', value: 'personTypeTitle:' + filterPersonTypeTitle });

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

		var filterPersonGenderTitle = $formFilters.find('.valuePersonGenderTitle').val();
		if(filterPersonGenderTitle != null && filterPersonGenderTitle !== '')
			filters.push({ name: 'fq', value: 'personGenderTitle:' + filterPersonGenderTitle });

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

		var filterPersonEthnicityTitle = $formFilters.find('.valuePersonEthnicityTitle').val();
		if(filterPersonEthnicityTitle != null && filterPersonEthnicityTitle !== '')
			filters.push({ name: 'fq', value: 'personEthnicityTitle:' + filterPersonEthnicityTitle });

		var filterPersonRaceId = $formFilters.find('.valuePersonRaceId').val();
		if(filterPersonRaceId != null && filterPersonRaceId !== '')
			filters.push({ name: 'fq', value: 'personRaceId:' + filterPersonRaceId });

		var filterPersonRaceTitle = $formFilters.find('.valuePersonRaceTitle').val();
		if(filterPersonRaceTitle != null && filterPersonRaceTitle !== '')
			filters.push({ name: 'fq', value: 'personRaceTitle:' + filterPersonRaceTitle });

		var filterTrafficStopKey = $formFilters.find('.valueTrafficStopKey').val();
		if(filterTrafficStopKey != null && filterTrafficStopKey !== '')
			filters.push({ name: 'fq', value: 'trafficStopKey:' + filterTrafficStopKey });

		var filterSearchTypeNum = $formFilters.find('.valueSearchTypeNum').val();
		if(filterSearchTypeNum != null && filterSearchTypeNum !== '')
			filters.push({ name: 'fq', value: 'searchTypeNum:' + filterSearchTypeNum });

		var filterSearchTypeTitle = $formFilters.find('.valueSearchTypeTitle').val();
		if(filterSearchTypeTitle != null && filterSearchTypeTitle !== '')
			filters.push({ name: 'fq', value: 'searchTypeTitle:' + filterSearchTypeTitle });

		var $filterSearchVehicleCheckbox = $formFilters.find('input.valueSearchVehicle[type = "checkbox"]');
		var $filterSearchVehicleSelect = $formFilters.find('select.valueSearchVehicle');
		var filterSearchVehicle = $filterSearchVehicleSelect.length ? $filterSearchVehicleSelect.val() : $filterSearchVehicleCheckbox.prop('checked');
		var filterSearchVehicleSelectVal = $formFilters.find('select.filterSearchVehicle').val();
		var filterSearchVehicle = null;
		if(filterSearchVehicleSelectVal !== '')
			filterSearchVehicle = filterSearchVehicleSelectVal == 'true';
		if(filterSearchVehicle != null && filterSearchVehicle === true)
			filters.push({ name: 'fq', value: 'searchVehicle:' + filterSearchVehicle });

		var $filterSearchDriverCheckbox = $formFilters.find('input.valueSearchDriver[type = "checkbox"]');
		var $filterSearchDriverSelect = $formFilters.find('select.valueSearchDriver');
		var filterSearchDriver = $filterSearchDriverSelect.length ? $filterSearchDriverSelect.val() : $filterSearchDriverCheckbox.prop('checked');
		var filterSearchDriverSelectVal = $formFilters.find('select.filterSearchDriver').val();
		var filterSearchDriver = null;
		if(filterSearchDriverSelectVal !== '')
			filterSearchDriver = filterSearchDriverSelectVal == 'true';
		if(filterSearchDriver != null && filterSearchDriver === true)
			filters.push({ name: 'fq', value: 'searchDriver:' + filterSearchDriver });

		var $filterSearchPassengerCheckbox = $formFilters.find('input.valueSearchPassenger[type = "checkbox"]');
		var $filterSearchPassengerSelect = $formFilters.find('select.valueSearchPassenger');
		var filterSearchPassenger = $filterSearchPassengerSelect.length ? $filterSearchPassengerSelect.val() : $filterSearchPassengerCheckbox.prop('checked');
		var filterSearchPassengerSelectVal = $formFilters.find('select.filterSearchPassenger').val();
		var filterSearchPassenger = null;
		if(filterSearchPassengerSelectVal !== '')
			filterSearchPassenger = filterSearchPassengerSelectVal == 'true';
		if(filterSearchPassenger != null && filterSearchPassenger === true)
			filters.push({ name: 'fq', value: 'searchPassenger:' + filterSearchPassenger });

		var $filterSearchPropertyCheckbox = $formFilters.find('input.valueSearchProperty[type = "checkbox"]');
		var $filterSearchPropertySelect = $formFilters.find('select.valueSearchProperty');
		var filterSearchProperty = $filterSearchPropertySelect.length ? $filterSearchPropertySelect.val() : $filterSearchPropertyCheckbox.prop('checked');
		var filterSearchPropertySelectVal = $formFilters.find('select.filterSearchProperty').val();
		var filterSearchProperty = null;
		if(filterSearchPropertySelectVal !== '')
			filterSearchProperty = filterSearchPropertySelectVal == 'true';
		if(filterSearchProperty != null && filterSearchProperty === true)
			filters.push({ name: 'fq', value: 'searchProperty:' + filterSearchProperty });

		var $filterSearchVehicleSiezedCheckbox = $formFilters.find('input.valueSearchVehicleSiezed[type = "checkbox"]');
		var $filterSearchVehicleSiezedSelect = $formFilters.find('select.valueSearchVehicleSiezed');
		var filterSearchVehicleSiezed = $filterSearchVehicleSiezedSelect.length ? $filterSearchVehicleSiezedSelect.val() : $filterSearchVehicleSiezedCheckbox.prop('checked');
		var filterSearchVehicleSiezedSelectVal = $formFilters.find('select.filterSearchVehicleSiezed').val();
		var filterSearchVehicleSiezed = null;
		if(filterSearchVehicleSiezedSelectVal !== '')
			filterSearchVehicleSiezed = filterSearchVehicleSiezedSelectVal == 'true';
		if(filterSearchVehicleSiezed != null && filterSearchVehicleSiezed === true)
			filters.push({ name: 'fq', value: 'searchVehicleSiezed:' + filterSearchVehicleSiezed });

		var $filterSearchPersonalPropertySiezedCheckbox = $formFilters.find('input.valueSearchPersonalPropertySiezed[type = "checkbox"]');
		var $filterSearchPersonalPropertySiezedSelect = $formFilters.find('select.valueSearchPersonalPropertySiezed');
		var filterSearchPersonalPropertySiezed = $filterSearchPersonalPropertySiezedSelect.length ? $filterSearchPersonalPropertySiezedSelect.val() : $filterSearchPersonalPropertySiezedCheckbox.prop('checked');
		var filterSearchPersonalPropertySiezedSelectVal = $formFilters.find('select.filterSearchPersonalPropertySiezed').val();
		var filterSearchPersonalPropertySiezed = null;
		if(filterSearchPersonalPropertySiezedSelectVal !== '')
			filterSearchPersonalPropertySiezed = filterSearchPersonalPropertySiezedSelectVal == 'true';
		if(filterSearchPersonalPropertySiezed != null && filterSearchPersonalPropertySiezed === true)
			filters.push({ name: 'fq', value: 'searchPersonalPropertySiezed:' + filterSearchPersonalPropertySiezed });

		var $filterSearchOtherPropertySiezedCheckbox = $formFilters.find('input.valueSearchOtherPropertySiezed[type = "checkbox"]');
		var $filterSearchOtherPropertySiezedSelect = $formFilters.find('select.valueSearchOtherPropertySiezed');
		var filterSearchOtherPropertySiezed = $filterSearchOtherPropertySiezedSelect.length ? $filterSearchOtherPropertySiezedSelect.val() : $filterSearchOtherPropertySiezedCheckbox.prop('checked');
		var filterSearchOtherPropertySiezedSelectVal = $formFilters.find('select.filterSearchOtherPropertySiezed').val();
		var filterSearchOtherPropertySiezed = null;
		if(filterSearchOtherPropertySiezedSelectVal !== '')
			filterSearchOtherPropertySiezed = filterSearchOtherPropertySiezedSelectVal == 'true';
		if(filterSearchOtherPropertySiezed != null && filterSearchOtherPropertySiezed === true)
			filters.push({ name: 'fq', value: 'searchOtherPropertySiezed:' + filterSearchOtherPropertySiezed });

		var filterSearchBasisId = $formFilters.find('.valueSearchBasisId').val();
		if(filterSearchBasisId != null && filterSearchBasisId !== '')
			filters.push({ name: 'fq', value: 'searchBasisId:' + filterSearchBasisId });
	}
	return filters;
}

function adminsearchSearchBasisVals(filters, success, error) {
	$.ajax({
		url: '/api/admin/search-basis?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestSearchBasisSearchKey(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-newspaper ');
			var $span = $('<span>').attr('class', '').text(o['objectTitle']);
			var $a = $('<span>');
			$a.append($i);
			$a.append($span);
			var val = o['searchBasisKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_searchKey_' + pk + '_searchBasisKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueSearchKey w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_searchKey_" + pk + "_searchBasisKeys_" + o['pk'] + "'); patchSearchBasisVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'SearchKey']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#SearchBasisForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchTrafficSearchVals(filters, success, error);
}

async function websocketSearchBasis(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketSearchBasis', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pkPage = $('#SearchBasisForm :input[name=pk]').val();
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
			var $headerSpan = $('<span>').attr('class', '').text('modify search bases' + id);
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

		window.eventBus.registerHandler('websocketTrafficSearch', function (error, message) {
			$('#Page_searchKey').trigger('oninput');
			$('#Page_searchKey_add').text('add a traffic search');
			$('#Page_searchKey_add').removeClass('w3-disabled');
			$('#Page_searchKey_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketTrafficSearch', function (error, message) {
			$('#Page_searchKey').trigger('oninput');
			$('#Page_searchKey_add').text('add a traffic search');
			$('#Page_searchKey_add').removeClass('w3-disabled');
			$('#Page_searchKey_add').attr('disabled', false);
		});
	}
}
async function websocketSearchBasisInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchSearchBasisVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['pk'];
			if(vars.includes('pk')) {
				$('.inputSearchBasis' + pk + 'Pk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'Pk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'Pk'));
			}
			var val = o['created'];
			if(vars.includes('created')) {
				$('.inputSearchBasis' + pk + 'Created').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'Created').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'Created'));
			}
			var val = o['modified'];
			if(vars.includes('modified')) {
				$('.inputSearchBasis' + pk + 'Modified').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'Modified').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'Modified'));
			}
			var val = o['searchBasisTitle'];
			if(vars.includes('searchBasisTitle')) {
				$('.inputSearchBasis' + pk + 'SearchBasisTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'SearchBasisTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'SearchBasisTitle'));
			}
			var val = o['searchKey'];
			if(vars.includes('searchKey')) {
				$('.inputSearchBasis' + pk + 'SearchKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'SearchKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'SearchKey'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputSearchBasis' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'InheritPk'));
			}
			var val = o['id'];
			if(vars.includes('id')) {
				$('.inputSearchBasis' + pk + 'Id').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'Id').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'Id'));
			}
			var val = o['classCanonicalName'];
			if(vars.includes('classCanonicalName')) {
				$('.inputSearchBasis' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'ClassCanonicalName'));
			}
			var val = o['classSimpleName'];
			if(vars.includes('classSimpleName')) {
				$('.inputSearchBasis' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'ClassSimpleName'));
			}
			var val = o['classCanonicalNames'];
			if(vars.includes('classCanonicalNames')) {
				$('.inputSearchBasis' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'ClassCanonicalNames'));
			}
			var val = o['saves'];
			if(vars.includes('saves')) {
				$('.inputSearchBasis' + pk + 'Saves').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'Saves').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'Saves'));
			}
			var val = o['objectTitle'];
			if(vars.includes('objectTitle')) {
				$('.inputSearchBasis' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'ObjectTitle'));
			}
			var val = o['objectId'];
			if(vars.includes('objectId')) {
				$('.inputSearchBasis' + pk + 'ObjectId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'ObjectId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'ObjectId'));
			}
			var val = o['searchBasisKey'];
			if(vars.includes('searchBasisKey')) {
				$('.inputSearchBasis' + pk + 'SearchBasisKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'SearchBasisKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'SearchBasisKey'));
			}
			var val = o['agencyTitle'];
			if(vars.includes('agencyTitle')) {
				$('.inputSearchBasis' + pk + 'AgencyTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'AgencyTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'AgencyTitle'));
			}
			var val = o['stopDateTime'];
			if(vars.includes('stopDateTime')) {
				$('.inputSearchBasis' + pk + 'StopDateTime').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'StopDateTime').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'StopDateTime'));
			}
			var val = o['stopPurposeNum'];
			if(vars.includes('stopPurposeNum')) {
				$('.inputSearchBasis' + pk + 'StopPurposeNum').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'StopPurposeNum').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'StopPurposeNum'));
			}
			var val = o['stopPurposeTitle'];
			if(vars.includes('stopPurposeTitle')) {
				$('.inputSearchBasis' + pk + 'StopPurposeTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'StopPurposeTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'StopPurposeTitle'));
			}
			var val = o['stopActionNum'];
			if(vars.includes('stopActionNum')) {
				$('.inputSearchBasis' + pk + 'StopActionNum').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'StopActionNum').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'StopActionNum'));
			}
			var val = o['stopActionTitle'];
			if(vars.includes('stopActionTitle')) {
				$('.inputSearchBasis' + pk + 'StopActionTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'StopActionTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'StopActionTitle'));
			}
			var val = o['stopDriverArrest'];
			if(vars.includes('stopDriverArrest')) {
				$('.inputSearchBasis' + pk + 'StopDriverArrest').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'StopDriverArrest').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'StopDriverArrest'));
			}
			var val = o['stopPassengerArrest'];
			if(vars.includes('stopPassengerArrest')) {
				$('.inputSearchBasis' + pk + 'StopPassengerArrest').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'StopPassengerArrest').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'StopPassengerArrest'));
			}
			var val = o['stopEncounterForce'];
			if(vars.includes('stopEncounterForce')) {
				$('.inputSearchBasis' + pk + 'StopEncounterForce').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'StopEncounterForce').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'StopEncounterForce'));
			}
			var val = o['stopEngageForce'];
			if(vars.includes('stopEngageForce')) {
				$('.inputSearchBasis' + pk + 'StopEngageForce').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'StopEngageForce').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'StopEngageForce'));
			}
			var val = o['stopOfficerInjury'];
			if(vars.includes('stopOfficerInjury')) {
				$('.inputSearchBasis' + pk + 'StopOfficerInjury').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'StopOfficerInjury').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'StopOfficerInjury'));
			}
			var val = o['stopDriverInjury'];
			if(vars.includes('stopDriverInjury')) {
				$('.inputSearchBasis' + pk + 'StopDriverInjury').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'StopDriverInjury').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'StopDriverInjury'));
			}
			var val = o['stopPassengerInjury'];
			if(vars.includes('stopPassengerInjury')) {
				$('.inputSearchBasis' + pk + 'StopPassengerInjury').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'StopPassengerInjury').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'StopPassengerInjury'));
			}
			var val = o['stopOfficerId'];
			if(vars.includes('stopOfficerId')) {
				$('.inputSearchBasis' + pk + 'StopOfficerId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'StopOfficerId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'StopOfficerId'));
			}
			var val = o['stopLocationId'];
			if(vars.includes('stopLocationId')) {
				$('.inputSearchBasis' + pk + 'StopLocationId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'StopLocationId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'StopLocationId'));
			}
			var val = o['stopCityId'];
			if(vars.includes('stopCityId')) {
				$('.inputSearchBasis' + pk + 'StopCityId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'StopCityId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'StopCityId'));
			}
			var val = o['personAge'];
			if(vars.includes('personAge')) {
				$('.inputSearchBasis' + pk + 'PersonAge').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'PersonAge').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'PersonAge'));
			}
			var val = o['personTypeId'];
			if(vars.includes('personTypeId')) {
				$('.inputSearchBasis' + pk + 'PersonTypeId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'PersonTypeId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'PersonTypeId'));
			}
			var val = o['personTypeTitle'];
			if(vars.includes('personTypeTitle')) {
				$('.inputSearchBasis' + pk + 'PersonTypeTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'PersonTypeTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'PersonTypeTitle'));
			}
			var val = o['personTypeDriver'];
			if(vars.includes('personTypeDriver')) {
				$('.inputSearchBasis' + pk + 'PersonTypeDriver').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'PersonTypeDriver').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'PersonTypeDriver'));
			}
			var val = o['personTypePassenger'];
			if(vars.includes('personTypePassenger')) {
				$('.inputSearchBasis' + pk + 'PersonTypePassenger').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'PersonTypePassenger').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'PersonTypePassenger'));
			}
			var val = o['personGenderId'];
			if(vars.includes('personGenderId')) {
				$('.inputSearchBasis' + pk + 'PersonGenderId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'PersonGenderId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'PersonGenderId'));
			}
			var val = o['personGenderTitle'];
			if(vars.includes('personGenderTitle')) {
				$('.inputSearchBasis' + pk + 'PersonGenderTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'PersonGenderTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'PersonGenderTitle'));
			}
			var val = o['personGenderFemale'];
			if(vars.includes('personGenderFemale')) {
				$('.inputSearchBasis' + pk + 'PersonGenderFemale').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'PersonGenderFemale').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'PersonGenderFemale'));
			}
			var val = o['personGenderMale'];
			if(vars.includes('personGenderMale')) {
				$('.inputSearchBasis' + pk + 'PersonGenderMale').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'PersonGenderMale').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'PersonGenderMale'));
			}
			var val = o['personEthnicityId'];
			if(vars.includes('personEthnicityId')) {
				$('.inputSearchBasis' + pk + 'PersonEthnicityId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'PersonEthnicityId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'PersonEthnicityId'));
			}
			var val = o['personEthnicityTitle'];
			if(vars.includes('personEthnicityTitle')) {
				$('.inputSearchBasis' + pk + 'PersonEthnicityTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'PersonEthnicityTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'PersonEthnicityTitle'));
			}
			var val = o['personRaceId'];
			if(vars.includes('personRaceId')) {
				$('.inputSearchBasis' + pk + 'PersonRaceId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'PersonRaceId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'PersonRaceId'));
			}
			var val = o['personRaceTitle'];
			if(vars.includes('personRaceTitle')) {
				$('.inputSearchBasis' + pk + 'PersonRaceTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'PersonRaceTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'PersonRaceTitle'));
			}
			var val = o['trafficStopKey'];
			if(vars.includes('trafficStopKey')) {
				$('.inputSearchBasis' + pk + 'TrafficStopKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'TrafficStopKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'TrafficStopKey'));
			}
			var val = o['searchTypeNum'];
			if(vars.includes('searchTypeNum')) {
				$('.inputSearchBasis' + pk + 'SearchTypeNum').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'SearchTypeNum').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'SearchTypeNum'));
			}
			var val = o['searchTypeTitle'];
			if(vars.includes('searchTypeTitle')) {
				$('.inputSearchBasis' + pk + 'SearchTypeTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'SearchTypeTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'SearchTypeTitle'));
			}
			var val = o['searchVehicle'];
			if(vars.includes('searchVehicle')) {
				$('.inputSearchBasis' + pk + 'SearchVehicle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'SearchVehicle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'SearchVehicle'));
			}
			var val = o['searchDriver'];
			if(vars.includes('searchDriver')) {
				$('.inputSearchBasis' + pk + 'SearchDriver').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'SearchDriver').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'SearchDriver'));
			}
			var val = o['searchPassenger'];
			if(vars.includes('searchPassenger')) {
				$('.inputSearchBasis' + pk + 'SearchPassenger').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'SearchPassenger').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'SearchPassenger'));
			}
			var val = o['searchProperty'];
			if(vars.includes('searchProperty')) {
				$('.inputSearchBasis' + pk + 'SearchProperty').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'SearchProperty').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'SearchProperty'));
			}
			var val = o['searchVehicleSiezed'];
			if(vars.includes('searchVehicleSiezed')) {
				$('.inputSearchBasis' + pk + 'SearchVehicleSiezed').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'SearchVehicleSiezed').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'SearchVehicleSiezed'));
			}
			var val = o['searchPersonalPropertySiezed'];
			if(vars.includes('searchPersonalPropertySiezed')) {
				$('.inputSearchBasis' + pk + 'SearchPersonalPropertySiezed').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'SearchPersonalPropertySiezed').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'SearchPersonalPropertySiezed'));
			}
			var val = o['searchOtherPropertySiezed'];
			if(vars.includes('searchOtherPropertySiezed')) {
				$('.inputSearchBasis' + pk + 'SearchOtherPropertySiezed').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'SearchOtherPropertySiezed').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'SearchOtherPropertySiezed'));
			}
			var val = o['searchBasisId'];
			if(vars.includes('searchBasisId')) {
				$('.inputSearchBasis' + pk + 'SearchBasisId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSearchBasis' + pk + 'SearchBasisId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSearchBasis' + pk + 'SearchBasisId'));
			}
		});
	}
}
