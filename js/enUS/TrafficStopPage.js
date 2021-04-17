
// PUTImport //

async function putimportTrafficStop($formValues, pk, success, error) {
	var json = $formValues.find('.PUTImport_list').val();
	if(json != null && json !== '')
		putimportTrafficStopVals(JSON.parse(json), success, error);
}

function putimportTrafficStopVals(json, success, error) {
	$.ajax({
		url: '/api/traffic-stop/import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTMerge //

async function putmergeTrafficStop($formValues, pk, success, error) {
	var json = $formValues.find('.PUTMerge_list').val();
	if(json != null && json !== '')
		putmergeTrafficStopVals(JSON.parse(json), success, error);
}

function putmergeTrafficStopVals(json, success, error) {
	$.ajax({
		url: '/api/traffic-stop/merge'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTCopy //

async function putcopyTrafficStop($formValues, pk, success, error) {
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

	var valueAgencyTitle = $formValues.find('.valueAgencyTitle').val();
	if(valueAgencyTitle != null && valueAgencyTitle !== '')
		vals['agencyTitle'] = valueAgencyTitle;

	var valueStopDateTime = $formValues.find('.valueStopDateTime').val();
	if(valueStopDateTime != null && valueStopDateTime !== '')
		vals['stopDateTime'] = valueStopDateTime;

	var valueStopPurposeTitle = $formValues.find('.valueStopPurposeTitle').val();
	if(valueStopPurposeTitle != null && valueStopPurposeTitle !== '')
		vals['stopPurposeTitle'] = valueStopPurposeTitle;

	var valueStopActionTitle = $formValues.find('.valueStopActionTitle').val();
	if(valueStopActionTitle != null && valueStopActionTitle !== '')
		vals['stopActionTitle'] = valueStopActionTitle;

	var valueStopDriverArrest = $formValues.find('.valueStopDriverArrest').val();
	if(valueStopDriverArrest != null && valueStopDriverArrest !== '')
		vals['stopDriverArrest'] = valueStopDriverArrest == 'true';

	var valueStopPassengerArrest = $formValues.find('.valueStopPassengerArrest').val();
	if(valueStopPassengerArrest != null && valueStopPassengerArrest !== '')
		vals['stopPassengerArrest'] = valueStopPassengerArrest == 'true';

	var valueStopEncounterForce = $formValues.find('.valueStopEncounterForce').val();
	if(valueStopEncounterForce != null && valueStopEncounterForce !== '')
		vals['stopEncounterForce'] = valueStopEncounterForce == 'true';

	var valueStopEngageForce = $formValues.find('.valueStopEngageForce').val();
	if(valueStopEngageForce != null && valueStopEngageForce !== '')
		vals['stopEngageForce'] = valueStopEngageForce == 'true';

	var valueStopOfficerInjury = $formValues.find('.valueStopOfficerInjury').val();
	if(valueStopOfficerInjury != null && valueStopOfficerInjury !== '')
		vals['stopOfficerInjury'] = valueStopOfficerInjury == 'true';

	var valueStopDriverInjury = $formValues.find('.valueStopDriverInjury').val();
	if(valueStopDriverInjury != null && valueStopDriverInjury !== '')
		vals['stopDriverInjury'] = valueStopDriverInjury == 'true';

	var valueStopPassengerInjury = $formValues.find('.valueStopPassengerInjury').val();
	if(valueStopPassengerInjury != null && valueStopPassengerInjury !== '')
		vals['stopPassengerInjury'] = valueStopPassengerInjury == 'true';

	var valueStopOfficerId = $formValues.find('.valueStopOfficerId').val();
	if(valueStopOfficerId != null && valueStopOfficerId !== '')
		vals['stopOfficerId'] = valueStopOfficerId;

	var valueStopLocationId = $formValues.find('.valueStopLocationId').val();
	if(valueStopLocationId != null && valueStopLocationId !== '')
		vals['stopLocationId'] = valueStopLocationId;

	var valueStopCityId = $formValues.find('.valueStopCityId').val();
	if(valueStopCityId != null && valueStopCityId !== '')
		vals['stopCityId'] = valueStopCityId;

	var valuePersonKeys = $formValues.find('input.valuePersonKeys:checked').val();
	var valuePersonKeysClear = $formValues.find('input.personKeys_clear:checked').val();
	if(valuePersonKeysClear != null && valuePersonKeysClear)
		vals['personKeys'] = null;
	else if(valuePersonKeys != null && valuePersonKeys)
		vals['personKeys'] = [valuePersonKeys];

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	if(valueInheritPk != null && valueInheritPk !== '')
		vals['inheritPk'] = valueInheritPk;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	var valueTrafficStopKey = $formValues.find('.valueTrafficStopKey').val();
	if(valueTrafficStopKey != null && valueTrafficStopKey !== '')
		vals['trafficStopKey'] = valueTrafficStopKey;

	var valueStateAbbreviation = $formValues.find('.valueStateAbbreviation').val();
	if(valueStateAbbreviation != null && valueStateAbbreviation !== '')
		vals['stateAbbreviation'] = valueStateAbbreviation;

	var valueStopYear = $formValues.find('.valueStopYear').val();
	if(valueStopYear != null && valueStopYear !== '')
		vals['stopYear'] = valueStopYear;

	var valueStopPurposeNum = $formValues.find('.valueStopPurposeNum').val();
	if(valueStopPurposeNum != null && valueStopPurposeNum !== '')
		vals['stopPurposeNum'] = valueStopPurposeNum;

	var valueStopActionNum = $formValues.find('.valueStopActionNum').val();
	if(valueStopActionNum != null && valueStopActionNum !== '')
		vals['stopActionNum'] = valueStopActionNum;

	putcopyTrafficStopVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function putcopyTrafficStopVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/traffic-stop/copy?' + $.param(filters)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify({patch: vals})
		, success: success
		, error: error
	});
}

// POST //

async function postTrafficStop($formValues, success, error) {
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

	var valueAgencyTitle = $formValues.find('.valueAgencyTitle').val();
	if(valueAgencyTitle != null && valueAgencyTitle !== '')
		vals['agencyTitle'] = valueAgencyTitle;

	var valueStopDateTime = $formValues.find('.valueStopDateTime').val();
	if(valueStopDateTime != null && valueStopDateTime !== '')
		vals['stopDateTime'] = valueStopDateTime;

	var valueStopPurposeTitle = $formValues.find('.valueStopPurposeTitle').val();
	if(valueStopPurposeTitle != null && valueStopPurposeTitle !== '')
		vals['stopPurposeTitle'] = valueStopPurposeTitle;

	var valueStopActionTitle = $formValues.find('.valueStopActionTitle').val();
	if(valueStopActionTitle != null && valueStopActionTitle !== '')
		vals['stopActionTitle'] = valueStopActionTitle;

	var valueStopDriverArrest = $formValues.find('.valueStopDriverArrest').val();
	if(valueStopDriverArrest != null && valueStopDriverArrest !== '')
		vals['stopDriverArrest'] = valueStopDriverArrest == 'true';

	var valueStopPassengerArrest = $formValues.find('.valueStopPassengerArrest').val();
	if(valueStopPassengerArrest != null && valueStopPassengerArrest !== '')
		vals['stopPassengerArrest'] = valueStopPassengerArrest == 'true';

	var valueStopEncounterForce = $formValues.find('.valueStopEncounterForce').val();
	if(valueStopEncounterForce != null && valueStopEncounterForce !== '')
		vals['stopEncounterForce'] = valueStopEncounterForce == 'true';

	var valueStopEngageForce = $formValues.find('.valueStopEngageForce').val();
	if(valueStopEngageForce != null && valueStopEngageForce !== '')
		vals['stopEngageForce'] = valueStopEngageForce == 'true';

	var valueStopOfficerInjury = $formValues.find('.valueStopOfficerInjury').val();
	if(valueStopOfficerInjury != null && valueStopOfficerInjury !== '')
		vals['stopOfficerInjury'] = valueStopOfficerInjury == 'true';

	var valueStopDriverInjury = $formValues.find('.valueStopDriverInjury').val();
	if(valueStopDriverInjury != null && valueStopDriverInjury !== '')
		vals['stopDriverInjury'] = valueStopDriverInjury == 'true';

	var valueStopPassengerInjury = $formValues.find('.valueStopPassengerInjury').val();
	if(valueStopPassengerInjury != null && valueStopPassengerInjury !== '')
		vals['stopPassengerInjury'] = valueStopPassengerInjury == 'true';

	var valueStopOfficerId = $formValues.find('.valueStopOfficerId').val();
	if(valueStopOfficerId != null && valueStopOfficerId !== '')
		vals['stopOfficerId'] = valueStopOfficerId;

	var valueStopLocationId = $formValues.find('.valueStopLocationId').val();
	if(valueStopLocationId != null && valueStopLocationId !== '')
		vals['stopLocationId'] = valueStopLocationId;

	var valueStopCityId = $formValues.find('.valueStopCityId').val();
	if(valueStopCityId != null && valueStopCityId !== '')
		vals['stopCityId'] = valueStopCityId;

	var valuePersonKeys = [];
	$formValues.find('input.valuePersonKeys:checked').each(function(index) {
		valuePersonKeys.push($(this).val());
	});
	if(valuePersonKeys.length > 0)
		vals['personKeys'] = valuePersonKeys;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	if(valueInheritPk != null && valueInheritPk !== '')
		vals['inheritPk'] = valueInheritPk;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	var valueTrafficStopKey = $formValues.find('.valueTrafficStopKey').val();
	if(valueTrafficStopKey != null && valueTrafficStopKey !== '')
		vals['trafficStopKey'] = valueTrafficStopKey;

	var valueStateAbbreviation = $formValues.find('.valueStateAbbreviation').val();
	if(valueStateAbbreviation != null && valueStateAbbreviation !== '')
		vals['stateAbbreviation'] = valueStateAbbreviation;

	var valueStopYear = $formValues.find('.valueStopYear').val();
	if(valueStopYear != null && valueStopYear !== '')
		vals['stopYear'] = valueStopYear;

	var valueStopPurposeNum = $formValues.find('.valueStopPurposeNum').val();
	if(valueStopPurposeNum != null && valueStopPurposeNum !== '')
		vals['stopPurposeNum'] = valueStopPurposeNum;

	var valueStopActionNum = $formValues.find('.valueStopActionNum').val();
	if(valueStopActionNum != null && valueStopActionNum !== '')
		vals['stopActionNum'] = valueStopActionNum;

	$.ajax({
		url: '/api/traffic-stop'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postTrafficStopVals(vals, success, error) {
	$.ajax({
		url: '/api/traffic-stop'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PATCH //

async function patchTrafficStop($formFilters, $formValues, pk, success, error) {
	var filters = patchTrafficStopFilters($formFilters);

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

	var valueAgencyTitle = $formValues.find('.valueAgencyTitle').val();
	var removeAgencyTitle = $formValues.find('.removeAgencyTitle').val() === 'true';
	var setAgencyTitle = removeAgencyTitle ? null : $formValues.find('.setAgencyTitle').val();
	var addAgencyTitle = $formValues.find('.addAgencyTitle').val();
	if(removeAgencyTitle || setAgencyTitle != null && setAgencyTitle !== '')
		vals['setAgencyTitle'] = setAgencyTitle;
	if(addAgencyTitle != null && addAgencyTitle !== '')
		vals['addAgencyTitle'] = addAgencyTitle;
	var removeAgencyTitle = $formValues.find('.removeAgencyTitle').val();
	if(removeAgencyTitle != null && removeAgencyTitle !== '')
		vals['removeAgencyTitle'] = removeAgencyTitle;

	var valueStopDateTime = $formValues.find('.valueStopDateTime').val();
	var removeStopDateTime = $formValues.find('.removeStopDateTime').val() === 'true';
	var setStopDateTime = removeStopDateTime ? null : $formValues.find('.setStopDateTime').val();
	var addStopDateTime = $formValues.find('.addStopDateTime').val();
	if(removeStopDateTime || setStopDateTime != null && setStopDateTime !== '')
		vals['setStopDateTime'] = setStopDateTime;
	if(addStopDateTime != null && addStopDateTime !== '')
		vals['addStopDateTime'] = addStopDateTime;
	var removeStopDateTime = $formValues.find('.removeStopDateTime').val();
	if(removeStopDateTime != null && removeStopDateTime !== '')
		vals['removeStopDateTime'] = removeStopDateTime;

	var valueStopPurposeTitle = $formValues.find('.valueStopPurposeTitle').val();
	var removeStopPurposeTitle = $formValues.find('.removeStopPurposeTitle').val() === 'true';
	var setStopPurposeTitle = removeStopPurposeTitle ? null : $formValues.find('.setStopPurposeTitle').val();
	var addStopPurposeTitle = $formValues.find('.addStopPurposeTitle').val();
	if(removeStopPurposeTitle || setStopPurposeTitle != null && setStopPurposeTitle !== '')
		vals['setStopPurposeTitle'] = setStopPurposeTitle;
	if(addStopPurposeTitle != null && addStopPurposeTitle !== '')
		vals['addStopPurposeTitle'] = addStopPurposeTitle;
	var removeStopPurposeTitle = $formValues.find('.removeStopPurposeTitle').val();
	if(removeStopPurposeTitle != null && removeStopPurposeTitle !== '')
		vals['removeStopPurposeTitle'] = removeStopPurposeTitle;

	var valueStopActionTitle = $formValues.find('.valueStopActionTitle').val();
	var removeStopActionTitle = $formValues.find('.removeStopActionTitle').val() === 'true';
	var setStopActionTitle = removeStopActionTitle ? null : $formValues.find('.setStopActionTitle').val();
	var addStopActionTitle = $formValues.find('.addStopActionTitle').val();
	if(removeStopActionTitle || setStopActionTitle != null && setStopActionTitle !== '')
		vals['setStopActionTitle'] = setStopActionTitle;
	if(addStopActionTitle != null && addStopActionTitle !== '')
		vals['addStopActionTitle'] = addStopActionTitle;
	var removeStopActionTitle = $formValues.find('.removeStopActionTitle').val();
	if(removeStopActionTitle != null && removeStopActionTitle !== '')
		vals['removeStopActionTitle'] = removeStopActionTitle;

	var valueStopDriverArrest = $formValues.find('.valueStopDriverArrest').val();
	var removeStopDriverArrest = $formValues.find('.removeStopDriverArrest').val() === 'true';
	var valueStopDriverArrestSelectVal = $formValues.find('select.setStopDriverArrest').val();
	var valueStopDriverArrest = null;
	if(valueStopDriverArrestSelectVal != null && valueStopDriverArrestSelectVal !== '')
		valueStopDriverArrest = valueStopDriverArrestSelectVal == 'true';
	var setStopDriverArrest = removeStopDriverArrest ? null : valueStopDriverArrest;
	var addStopDriverArrest = $formValues.find('.addStopDriverArrest').prop('checked');
	if(removeStopDriverArrest || setStopDriverArrest != null && setStopDriverArrest !== '')
		vals['setStopDriverArrest'] = setStopDriverArrest;
	if(addStopDriverArrest != null && addStopDriverArrest !== '')
		vals['addStopDriverArrest'] = addStopDriverArrest;
	var removeStopDriverArrest = $formValues.find('.removeStopDriverArrest').prop('checked');
	if(removeStopDriverArrest != null && removeStopDriverArrest !== '')
		vals['removeStopDriverArrest'] = removeStopDriverArrest;

	var valueStopPassengerArrest = $formValues.find('.valueStopPassengerArrest').val();
	var removeStopPassengerArrest = $formValues.find('.removeStopPassengerArrest').val() === 'true';
	var valueStopPassengerArrestSelectVal = $formValues.find('select.setStopPassengerArrest').val();
	var valueStopPassengerArrest = null;
	if(valueStopPassengerArrestSelectVal != null && valueStopPassengerArrestSelectVal !== '')
		valueStopPassengerArrest = valueStopPassengerArrestSelectVal == 'true';
	var setStopPassengerArrest = removeStopPassengerArrest ? null : valueStopPassengerArrest;
	var addStopPassengerArrest = $formValues.find('.addStopPassengerArrest').prop('checked');
	if(removeStopPassengerArrest || setStopPassengerArrest != null && setStopPassengerArrest !== '')
		vals['setStopPassengerArrest'] = setStopPassengerArrest;
	if(addStopPassengerArrest != null && addStopPassengerArrest !== '')
		vals['addStopPassengerArrest'] = addStopPassengerArrest;
	var removeStopPassengerArrest = $formValues.find('.removeStopPassengerArrest').prop('checked');
	if(removeStopPassengerArrest != null && removeStopPassengerArrest !== '')
		vals['removeStopPassengerArrest'] = removeStopPassengerArrest;

	var valueStopEncounterForce = $formValues.find('.valueStopEncounterForce').val();
	var removeStopEncounterForce = $formValues.find('.removeStopEncounterForce').val() === 'true';
	var valueStopEncounterForceSelectVal = $formValues.find('select.setStopEncounterForce').val();
	var valueStopEncounterForce = null;
	if(valueStopEncounterForceSelectVal != null && valueStopEncounterForceSelectVal !== '')
		valueStopEncounterForce = valueStopEncounterForceSelectVal == 'true';
	var setStopEncounterForce = removeStopEncounterForce ? null : valueStopEncounterForce;
	var addStopEncounterForce = $formValues.find('.addStopEncounterForce').prop('checked');
	if(removeStopEncounterForce || setStopEncounterForce != null && setStopEncounterForce !== '')
		vals['setStopEncounterForce'] = setStopEncounterForce;
	if(addStopEncounterForce != null && addStopEncounterForce !== '')
		vals['addStopEncounterForce'] = addStopEncounterForce;
	var removeStopEncounterForce = $formValues.find('.removeStopEncounterForce').prop('checked');
	if(removeStopEncounterForce != null && removeStopEncounterForce !== '')
		vals['removeStopEncounterForce'] = removeStopEncounterForce;

	var valueStopEngageForce = $formValues.find('.valueStopEngageForce').val();
	var removeStopEngageForce = $formValues.find('.removeStopEngageForce').val() === 'true';
	var valueStopEngageForceSelectVal = $formValues.find('select.setStopEngageForce').val();
	var valueStopEngageForce = null;
	if(valueStopEngageForceSelectVal != null && valueStopEngageForceSelectVal !== '')
		valueStopEngageForce = valueStopEngageForceSelectVal == 'true';
	var setStopEngageForce = removeStopEngageForce ? null : valueStopEngageForce;
	var addStopEngageForce = $formValues.find('.addStopEngageForce').prop('checked');
	if(removeStopEngageForce || setStopEngageForce != null && setStopEngageForce !== '')
		vals['setStopEngageForce'] = setStopEngageForce;
	if(addStopEngageForce != null && addStopEngageForce !== '')
		vals['addStopEngageForce'] = addStopEngageForce;
	var removeStopEngageForce = $formValues.find('.removeStopEngageForce').prop('checked');
	if(removeStopEngageForce != null && removeStopEngageForce !== '')
		vals['removeStopEngageForce'] = removeStopEngageForce;

	var valueStopOfficerInjury = $formValues.find('.valueStopOfficerInjury').val();
	var removeStopOfficerInjury = $formValues.find('.removeStopOfficerInjury').val() === 'true';
	var valueStopOfficerInjurySelectVal = $formValues.find('select.setStopOfficerInjury').val();
	var valueStopOfficerInjury = null;
	if(valueStopOfficerInjurySelectVal != null && valueStopOfficerInjurySelectVal !== '')
		valueStopOfficerInjury = valueStopOfficerInjurySelectVal == 'true';
	var setStopOfficerInjury = removeStopOfficerInjury ? null : valueStopOfficerInjury;
	var addStopOfficerInjury = $formValues.find('.addStopOfficerInjury').prop('checked');
	if(removeStopOfficerInjury || setStopOfficerInjury != null && setStopOfficerInjury !== '')
		vals['setStopOfficerInjury'] = setStopOfficerInjury;
	if(addStopOfficerInjury != null && addStopOfficerInjury !== '')
		vals['addStopOfficerInjury'] = addStopOfficerInjury;
	var removeStopOfficerInjury = $formValues.find('.removeStopOfficerInjury').prop('checked');
	if(removeStopOfficerInjury != null && removeStopOfficerInjury !== '')
		vals['removeStopOfficerInjury'] = removeStopOfficerInjury;

	var valueStopDriverInjury = $formValues.find('.valueStopDriverInjury').val();
	var removeStopDriverInjury = $formValues.find('.removeStopDriverInjury').val() === 'true';
	var valueStopDriverInjurySelectVal = $formValues.find('select.setStopDriverInjury').val();
	var valueStopDriverInjury = null;
	if(valueStopDriverInjurySelectVal != null && valueStopDriverInjurySelectVal !== '')
		valueStopDriverInjury = valueStopDriverInjurySelectVal == 'true';
	var setStopDriverInjury = removeStopDriverInjury ? null : valueStopDriverInjury;
	var addStopDriverInjury = $formValues.find('.addStopDriverInjury').prop('checked');
	if(removeStopDriverInjury || setStopDriverInjury != null && setStopDriverInjury !== '')
		vals['setStopDriverInjury'] = setStopDriverInjury;
	if(addStopDriverInjury != null && addStopDriverInjury !== '')
		vals['addStopDriverInjury'] = addStopDriverInjury;
	var removeStopDriverInjury = $formValues.find('.removeStopDriverInjury').prop('checked');
	if(removeStopDriverInjury != null && removeStopDriverInjury !== '')
		vals['removeStopDriverInjury'] = removeStopDriverInjury;

	var valueStopPassengerInjury = $formValues.find('.valueStopPassengerInjury').val();
	var removeStopPassengerInjury = $formValues.find('.removeStopPassengerInjury').val() === 'true';
	var valueStopPassengerInjurySelectVal = $formValues.find('select.setStopPassengerInjury').val();
	var valueStopPassengerInjury = null;
	if(valueStopPassengerInjurySelectVal != null && valueStopPassengerInjurySelectVal !== '')
		valueStopPassengerInjury = valueStopPassengerInjurySelectVal == 'true';
	var setStopPassengerInjury = removeStopPassengerInjury ? null : valueStopPassengerInjury;
	var addStopPassengerInjury = $formValues.find('.addStopPassengerInjury').prop('checked');
	if(removeStopPassengerInjury || setStopPassengerInjury != null && setStopPassengerInjury !== '')
		vals['setStopPassengerInjury'] = setStopPassengerInjury;
	if(addStopPassengerInjury != null && addStopPassengerInjury !== '')
		vals['addStopPassengerInjury'] = addStopPassengerInjury;
	var removeStopPassengerInjury = $formValues.find('.removeStopPassengerInjury').prop('checked');
	if(removeStopPassengerInjury != null && removeStopPassengerInjury !== '')
		vals['removeStopPassengerInjury'] = removeStopPassengerInjury;

	var valueStopOfficerId = $formValues.find('.valueStopOfficerId').val();
	var removeStopOfficerId = $formValues.find('.removeStopOfficerId').val() === 'true';
	var setStopOfficerId = removeStopOfficerId ? null : $formValues.find('.setStopOfficerId').val();
	var addStopOfficerId = $formValues.find('.addStopOfficerId').val();
	if(removeStopOfficerId || setStopOfficerId != null && setStopOfficerId !== '')
		vals['setStopOfficerId'] = setStopOfficerId;
	if(addStopOfficerId != null && addStopOfficerId !== '')
		vals['addStopOfficerId'] = addStopOfficerId;
	var removeStopOfficerId = $formValues.find('.removeStopOfficerId').val();
	if(removeStopOfficerId != null && removeStopOfficerId !== '')
		vals['removeStopOfficerId'] = removeStopOfficerId;

	var valueStopLocationId = $formValues.find('.valueStopLocationId').val();
	var removeStopLocationId = $formValues.find('.removeStopLocationId').val() === 'true';
	var setStopLocationId = removeStopLocationId ? null : $formValues.find('.setStopLocationId').val();
	var addStopLocationId = $formValues.find('.addStopLocationId').val();
	if(removeStopLocationId || setStopLocationId != null && setStopLocationId !== '')
		vals['setStopLocationId'] = setStopLocationId;
	if(addStopLocationId != null && addStopLocationId !== '')
		vals['addStopLocationId'] = addStopLocationId;
	var removeStopLocationId = $formValues.find('.removeStopLocationId').val();
	if(removeStopLocationId != null && removeStopLocationId !== '')
		vals['removeStopLocationId'] = removeStopLocationId;

	var valueStopCityId = $formValues.find('.valueStopCityId').val();
	var removeStopCityId = $formValues.find('.removeStopCityId').val() === 'true';
	var setStopCityId = removeStopCityId ? null : $formValues.find('.setStopCityId').val();
	var addStopCityId = $formValues.find('.addStopCityId').val();
	if(removeStopCityId || setStopCityId != null && setStopCityId !== '')
		vals['setStopCityId'] = setStopCityId;
	if(addStopCityId != null && addStopCityId !== '')
		vals['addStopCityId'] = addStopCityId;
	var removeStopCityId = $formValues.find('.removeStopCityId').val();
	if(removeStopCityId != null && removeStopCityId !== '')
		vals['removeStopCityId'] = removeStopCityId;

	var valuePersonKeys = $formValues.find('input.valuePersonKeys:checked').val();
	if(valuePersonKeys != null && valuePersonKeys !== '')
		vals['addPersonKeys'] = valuePersonKeys;

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

	var valueTrafficStopKey = $formValues.find('.valueTrafficStopKey').val();
	var removeTrafficStopKey = $formValues.find('.removeTrafficStopKey').val() === 'true';
	var setTrafficStopKey = removeTrafficStopKey ? null : $formValues.find('.setTrafficStopKey').val();
	var addTrafficStopKey = $formValues.find('.addTrafficStopKey').val();
	if(removeTrafficStopKey || setTrafficStopKey != null && setTrafficStopKey !== '')
		vals['setTrafficStopKey'] = setTrafficStopKey;
	if(addTrafficStopKey != null && addTrafficStopKey !== '')
		vals['addTrafficStopKey'] = addTrafficStopKey;
	var removeTrafficStopKey = $formValues.find('.removeTrafficStopKey').val();
	if(removeTrafficStopKey != null && removeTrafficStopKey !== '')
		vals['removeTrafficStopKey'] = removeTrafficStopKey;

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

	var valueStopYear = $formValues.find('.valueStopYear').val();
	var removeStopYear = $formValues.find('.removeStopYear').val() === 'true';
	var setStopYear = removeStopYear ? null : $formValues.find('.setStopYear').val();
	var addStopYear = $formValues.find('.addStopYear').val();
	if(removeStopYear || setStopYear != null && setStopYear !== '')
		vals['setStopYear'] = setStopYear;
	if(addStopYear != null && addStopYear !== '')
		vals['addStopYear'] = addStopYear;
	var removeStopYear = $formValues.find('.removeStopYear').val();
	if(removeStopYear != null && removeStopYear !== '')
		vals['removeStopYear'] = removeStopYear;

	var valueStopPurposeNum = $formValues.find('.valueStopPurposeNum').val();
	var removeStopPurposeNum = $formValues.find('.removeStopPurposeNum').val() === 'true';
	var setStopPurposeNum = removeStopPurposeNum ? null : $formValues.find('.setStopPurposeNum').val();
	var addStopPurposeNum = $formValues.find('.addStopPurposeNum').val();
	if(removeStopPurposeNum || setStopPurposeNum != null && setStopPurposeNum !== '')
		vals['setStopPurposeNum'] = setStopPurposeNum;
	if(addStopPurposeNum != null && addStopPurposeNum !== '')
		vals['addStopPurposeNum'] = addStopPurposeNum;
	var removeStopPurposeNum = $formValues.find('.removeStopPurposeNum').val();
	if(removeStopPurposeNum != null && removeStopPurposeNum !== '')
		vals['removeStopPurposeNum'] = removeStopPurposeNum;

	var valueStopActionNum = $formValues.find('.valueStopActionNum').val();
	var removeStopActionNum = $formValues.find('.removeStopActionNum').val() === 'true';
	var setStopActionNum = removeStopActionNum ? null : $formValues.find('.setStopActionNum').val();
	var addStopActionNum = $formValues.find('.addStopActionNum').val();
	if(removeStopActionNum || setStopActionNum != null && setStopActionNum !== '')
		vals['setStopActionNum'] = setStopActionNum;
	if(addStopActionNum != null && addStopActionNum !== '')
		vals['addStopActionNum'] = addStopActionNum;
	var removeStopActionNum = $formValues.find('.removeStopActionNum').val();
	if(removeStopActionNum != null && removeStopActionNum !== '')
		vals['removeStopActionNum'] = removeStopActionNum;

	patchTrafficStopVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchTrafficStopFilters($formFilters) {
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

		var filterAgencyTitle = $formFilters.find('.valueAgencyTitle').val();
		if(filterAgencyTitle != null && filterAgencyTitle !== '')
			filters.push({ name: 'fq', value: 'agencyTitle:' + filterAgencyTitle });

		var filterStopDateTime = $formFilters.find('.valueStopDateTime').val();
		if(filterStopDateTime != null && filterStopDateTime !== '')
			filters.push({ name: 'fq', value: 'stopDateTime:' + filterStopDateTime });

		var filterStopPurposeTitle = $formFilters.find('.valueStopPurposeTitle').val();
		if(filterStopPurposeTitle != null && filterStopPurposeTitle !== '')
			filters.push({ name: 'fq', value: 'stopPurposeTitle:' + filterStopPurposeTitle });

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

		var filterPersonKeys = $formFilters.find('.valuePersonKeys').val();
		if(filterPersonKeys != null && filterPersonKeys !== '')
			filters.push({ name: 'fq', value: 'personKeys:' + filterPersonKeys });

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

		var filterTrafficStopKey = $formFilters.find('.valueTrafficStopKey').val();
		if(filterTrafficStopKey != null && filterTrafficStopKey !== '')
			filters.push({ name: 'fq', value: 'trafficStopKey:' + filterTrafficStopKey });

		var filterStateAbbreviation = $formFilters.find('.valueStateAbbreviation').val();
		if(filterStateAbbreviation != null && filterStateAbbreviation !== '')
			filters.push({ name: 'fq', value: 'stateAbbreviation:' + filterStateAbbreviation });

		var filterStateKey = $formFilters.find('.valueStateKey').val();
		if(filterStateKey != null && filterStateKey !== '')
			filters.push({ name: 'fq', value: 'stateKey:' + filterStateKey });

		var filterStateName = $formFilters.find('.valueStateName').val();
		if(filterStateName != null && filterStateName !== '')
			filters.push({ name: 'fq', value: 'stateName:' + filterStateName });

		var filterAgencyKey = $formFilters.find('.valueAgencyKey').val();
		if(filterAgencyKey != null && filterAgencyKey !== '')
			filters.push({ name: 'fq', value: 'agencyKey:' + filterAgencyKey });

		var filterStopYear = $formFilters.find('.valueStopYear').val();
		if(filterStopYear != null && filterStopYear !== '')
			filters.push({ name: 'fq', value: 'stopYear:' + filterStopYear });

		var filterStopPurposeNum = $formFilters.find('.valueStopPurposeNum').val();
		if(filterStopPurposeNum != null && filterStopPurposeNum !== '')
			filters.push({ name: 'fq', value: 'stopPurposeNum:' + filterStopPurposeNum });

		var filterStopActionNum = $formFilters.find('.valueStopActionNum').val();
		if(filterStopActionNum != null && filterStopActionNum !== '')
			filters.push({ name: 'fq', value: 'stopActionNum:' + filterStopActionNum });

		var filterPersonRaceTitles = $formFilters.find('.valuePersonRaceTitles').val();
		if(filterPersonRaceTitles != null && filterPersonRaceTitles !== '')
			filters.push({ name: 'fq', value: 'personRaceTitles:' + filterPersonRaceTitles });

		var filterTrafficSearchRaceTitles = $formFilters.find('.valueTrafficSearchRaceTitles').val();
		if(filterTrafficSearchRaceTitles != null && filterTrafficSearchRaceTitles !== '')
			filters.push({ name: 'fq', value: 'trafficSearchRaceTitles:' + filterTrafficSearchRaceTitles });
	}
	return filters;
}

function patchTrafficStopVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchTrafficStopVals(filters, vals, success, error);
}

function patchTrafficStopVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/traffic-stop?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getTrafficStop(pk) {
	$.ajax({
		url: '/api/traffic-stop/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Search //

async function searchTrafficStop($formFilters, success, error) {
	var filters = searchTrafficStopFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchTrafficStopVals(filters, success, error);
}

function searchTrafficStopFilters($formFilters) {
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

		var filterAgencyTitle = $formFilters.find('.valueAgencyTitle').val();
		if(filterAgencyTitle != null && filterAgencyTitle !== '')
			filters.push({ name: 'fq', value: 'agencyTitle:' + filterAgencyTitle });

		var filterStopDateTime = $formFilters.find('.valueStopDateTime').val();
		if(filterStopDateTime != null && filterStopDateTime !== '')
			filters.push({ name: 'fq', value: 'stopDateTime:' + filterStopDateTime });

		var filterStopPurposeTitle = $formFilters.find('.valueStopPurposeTitle').val();
		if(filterStopPurposeTitle != null && filterStopPurposeTitle !== '')
			filters.push({ name: 'fq', value: 'stopPurposeTitle:' + filterStopPurposeTitle });

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

		var filterPersonKeys = $formFilters.find('.valuePersonKeys').val();
		if(filterPersonKeys != null && filterPersonKeys !== '')
			filters.push({ name: 'fq', value: 'personKeys:' + filterPersonKeys });

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

		var filterTrafficStopKey = $formFilters.find('.valueTrafficStopKey').val();
		if(filterTrafficStopKey != null && filterTrafficStopKey !== '')
			filters.push({ name: 'fq', value: 'trafficStopKey:' + filterTrafficStopKey });

		var filterStateAbbreviation = $formFilters.find('.valueStateAbbreviation').val();
		if(filterStateAbbreviation != null && filterStateAbbreviation !== '')
			filters.push({ name: 'fq', value: 'stateAbbreviation:' + filterStateAbbreviation });

		var filterStateKey = $formFilters.find('.valueStateKey').val();
		if(filterStateKey != null && filterStateKey !== '')
			filters.push({ name: 'fq', value: 'stateKey:' + filterStateKey });

		var filterStateName = $formFilters.find('.valueStateName').val();
		if(filterStateName != null && filterStateName !== '')
			filters.push({ name: 'fq', value: 'stateName:' + filterStateName });

		var filterAgencyKey = $formFilters.find('.valueAgencyKey').val();
		if(filterAgencyKey != null && filterAgencyKey !== '')
			filters.push({ name: 'fq', value: 'agencyKey:' + filterAgencyKey });

		var filterStopYear = $formFilters.find('.valueStopYear').val();
		if(filterStopYear != null && filterStopYear !== '')
			filters.push({ name: 'fq', value: 'stopYear:' + filterStopYear });

		var filterStopPurposeNum = $formFilters.find('.valueStopPurposeNum').val();
		if(filterStopPurposeNum != null && filterStopPurposeNum !== '')
			filters.push({ name: 'fq', value: 'stopPurposeNum:' + filterStopPurposeNum });

		var filterStopActionNum = $formFilters.find('.valueStopActionNum').val();
		if(filterStopActionNum != null && filterStopActionNum !== '')
			filters.push({ name: 'fq', value: 'stopActionNum:' + filterStopActionNum });

		var filterPersonRaceTitles = $formFilters.find('.valuePersonRaceTitles').val();
		if(filterPersonRaceTitles != null && filterPersonRaceTitles !== '')
			filters.push({ name: 'fq', value: 'personRaceTitles:' + filterPersonRaceTitles });

		var filterTrafficSearchRaceTitles = $formFilters.find('.valueTrafficSearchRaceTitles').val();
		if(filterTrafficSearchRaceTitles != null && filterTrafficSearchRaceTitles !== '')
			filters.push({ name: 'fq', value: 'trafficSearchRaceTitles:' + filterTrafficSearchRaceTitles });
	}
	return filters;
}

function searchTrafficStopVals(filters, success, error) {
	$.ajax({
		url: '/api/traffic-stop?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestTrafficStopPersonKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-newspaper ');
			var $span = $('<span>').attr('class', '').text(o['objectTitle']);
			var $a = $('<span>');
			$a.append($i);
			$a.append($span);
			var val = o['trafficStopKey'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_personKeys_' + pk + '_trafficStopKey_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valuePersonKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_personKeys_" + pk + "_trafficStopKey_" + o['pk'] + "'); patchTrafficStopVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'PersonKeys']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#TrafficStopForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchTrafficPersonVals(filters, success, error);
}

// AdminSearch //

async function adminsearchTrafficStop($formFilters, success, error) {
	var filters = adminsearchTrafficStopFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	adminsearchTrafficStopVals(filters, success, error);
}

function adminsearchTrafficStopFilters($formFilters) {
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

		var filterAgencyTitle = $formFilters.find('.valueAgencyTitle').val();
		if(filterAgencyTitle != null && filterAgencyTitle !== '')
			filters.push({ name: 'fq', value: 'agencyTitle:' + filterAgencyTitle });

		var filterStopDateTime = $formFilters.find('.valueStopDateTime').val();
		if(filterStopDateTime != null && filterStopDateTime !== '')
			filters.push({ name: 'fq', value: 'stopDateTime:' + filterStopDateTime });

		var filterStopPurposeTitle = $formFilters.find('.valueStopPurposeTitle').val();
		if(filterStopPurposeTitle != null && filterStopPurposeTitle !== '')
			filters.push({ name: 'fq', value: 'stopPurposeTitle:' + filterStopPurposeTitle });

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

		var filterPersonKeys = $formFilters.find('.valuePersonKeys').val();
		if(filterPersonKeys != null && filterPersonKeys !== '')
			filters.push({ name: 'fq', value: 'personKeys:' + filterPersonKeys });

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

		var filterTrafficStopKey = $formFilters.find('.valueTrafficStopKey').val();
		if(filterTrafficStopKey != null && filterTrafficStopKey !== '')
			filters.push({ name: 'fq', value: 'trafficStopKey:' + filterTrafficStopKey });

		var filterStateAbbreviation = $formFilters.find('.valueStateAbbreviation').val();
		if(filterStateAbbreviation != null && filterStateAbbreviation !== '')
			filters.push({ name: 'fq', value: 'stateAbbreviation:' + filterStateAbbreviation });

		var filterStateKey = $formFilters.find('.valueStateKey').val();
		if(filterStateKey != null && filterStateKey !== '')
			filters.push({ name: 'fq', value: 'stateKey:' + filterStateKey });

		var filterStateName = $formFilters.find('.valueStateName').val();
		if(filterStateName != null && filterStateName !== '')
			filters.push({ name: 'fq', value: 'stateName:' + filterStateName });

		var filterAgencyKey = $formFilters.find('.valueAgencyKey').val();
		if(filterAgencyKey != null && filterAgencyKey !== '')
			filters.push({ name: 'fq', value: 'agencyKey:' + filterAgencyKey });

		var filterStopYear = $formFilters.find('.valueStopYear').val();
		if(filterStopYear != null && filterStopYear !== '')
			filters.push({ name: 'fq', value: 'stopYear:' + filterStopYear });

		var filterStopPurposeNum = $formFilters.find('.valueStopPurposeNum').val();
		if(filterStopPurposeNum != null && filterStopPurposeNum !== '')
			filters.push({ name: 'fq', value: 'stopPurposeNum:' + filterStopPurposeNum });

		var filterStopActionNum = $formFilters.find('.valueStopActionNum').val();
		if(filterStopActionNum != null && filterStopActionNum !== '')
			filters.push({ name: 'fq', value: 'stopActionNum:' + filterStopActionNum });

		var filterPersonRaceTitles = $formFilters.find('.valuePersonRaceTitles').val();
		if(filterPersonRaceTitles != null && filterPersonRaceTitles !== '')
			filters.push({ name: 'fq', value: 'personRaceTitles:' + filterPersonRaceTitles });

		var filterTrafficSearchRaceTitles = $formFilters.find('.valueTrafficSearchRaceTitles').val();
		if(filterTrafficSearchRaceTitles != null && filterTrafficSearchRaceTitles !== '')
			filters.push({ name: 'fq', value: 'trafficSearchRaceTitles:' + filterTrafficSearchRaceTitles });
	}
	return filters;
}

function adminsearchTrafficStopVals(filters, success, error) {
	$.ajax({
		url: '/api/admin/traffic-stop?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestTrafficStopPersonKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-newspaper ');
			var $span = $('<span>').attr('class', '').text(o['objectTitle']);
			var $a = $('<span>');
			$a.append($i);
			$a.append($span);
			var val = o['trafficStopKey'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_personKeys_' + pk + '_trafficStopKey_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valuePersonKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_personKeys_" + pk + "_trafficStopKey_" + o['pk'] + "'); patchTrafficStopVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'PersonKeys']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#TrafficStopForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchTrafficPersonVals(filters, success, error);
}

async function websocketTrafficStop(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketTrafficStop', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pkPage = $('#TrafficStopForm :input[name=pk]').val();
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
			var $headerSpan = $('<span>').attr('class', '').text('modify traffic stops' + id);
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

		window.eventBus.registerHandler('websocketTrafficPerson', function (error, message) {
			$('#Page_personKeys').trigger('oninput');
			$('#Page_personKeys_add').text('add a person');
			$('#Page_personKeys_add').removeClass('w3-disabled');
			$('#Page_personKeys_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketTrafficPerson', function (error, message) {
			$('#Page_personKeys').trigger('oninput');
			$('#Page_personKeys_add').text('add a person');
			$('#Page_personKeys_add').removeClass('w3-disabled');
			$('#Page_personKeys_add').attr('disabled', false);
		});
	}
}
async function websocketTrafficStopInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchTrafficStopVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['pk'];
			if(vars.includes('pk')) {
				$('.inputTrafficStop' + pk + 'Pk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficStop' + pk + 'Pk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficStop' + pk + 'Pk'));
			}
			var val = o['created'];
			if(vars.includes('created')) {
				$('.inputTrafficStop' + pk + 'Created').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficStop' + pk + 'Created').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficStop' + pk + 'Created'));
			}
			var val = o['modified'];
			if(vars.includes('modified')) {
				$('.inputTrafficStop' + pk + 'Modified').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficStop' + pk + 'Modified').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficStop' + pk + 'Modified'));
			}
			var val = o['agencyTitle'];
			if(vars.includes('agencyTitle')) {
				$('.inputTrafficStop' + pk + 'AgencyTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficStop' + pk + 'AgencyTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficStop' + pk + 'AgencyTitle'));
			}
			var val = o['stopDateTime'];
			if(vars.includes('stopDateTime')) {
				$('.inputTrafficStop' + pk + 'StopDateTime').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficStop' + pk + 'StopDateTime').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficStop' + pk + 'StopDateTime'));
			}
			var val = o['stopPurposeTitle'];
			if(vars.includes('stopPurposeTitle')) {
				$('.inputTrafficStop' + pk + 'StopPurposeTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficStop' + pk + 'StopPurposeTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficStop' + pk + 'StopPurposeTitle'));
			}
			var val = o['stopActionTitle'];
			if(vars.includes('stopActionTitle')) {
				$('.inputTrafficStop' + pk + 'StopActionTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficStop' + pk + 'StopActionTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficStop' + pk + 'StopActionTitle'));
			}
			var val = o['stopDriverArrest'];
			if(vars.includes('stopDriverArrest')) {
				$('.inputTrafficStop' + pk + 'StopDriverArrest').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficStop' + pk + 'StopDriverArrest').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficStop' + pk + 'StopDriverArrest'));
			}
			var val = o['stopPassengerArrest'];
			if(vars.includes('stopPassengerArrest')) {
				$('.inputTrafficStop' + pk + 'StopPassengerArrest').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficStop' + pk + 'StopPassengerArrest').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficStop' + pk + 'StopPassengerArrest'));
			}
			var val = o['stopEncounterForce'];
			if(vars.includes('stopEncounterForce')) {
				$('.inputTrafficStop' + pk + 'StopEncounterForce').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficStop' + pk + 'StopEncounterForce').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficStop' + pk + 'StopEncounterForce'));
			}
			var val = o['stopEngageForce'];
			if(vars.includes('stopEngageForce')) {
				$('.inputTrafficStop' + pk + 'StopEngageForce').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficStop' + pk + 'StopEngageForce').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficStop' + pk + 'StopEngageForce'));
			}
			var val = o['stopOfficerInjury'];
			if(vars.includes('stopOfficerInjury')) {
				$('.inputTrafficStop' + pk + 'StopOfficerInjury').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficStop' + pk + 'StopOfficerInjury').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficStop' + pk + 'StopOfficerInjury'));
			}
			var val = o['stopDriverInjury'];
			if(vars.includes('stopDriverInjury')) {
				$('.inputTrafficStop' + pk + 'StopDriverInjury').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficStop' + pk + 'StopDriverInjury').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficStop' + pk + 'StopDriverInjury'));
			}
			var val = o['stopPassengerInjury'];
			if(vars.includes('stopPassengerInjury')) {
				$('.inputTrafficStop' + pk + 'StopPassengerInjury').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficStop' + pk + 'StopPassengerInjury').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficStop' + pk + 'StopPassengerInjury'));
			}
			var val = o['stopOfficerId'];
			if(vars.includes('stopOfficerId')) {
				$('.inputTrafficStop' + pk + 'StopOfficerId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficStop' + pk + 'StopOfficerId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficStop' + pk + 'StopOfficerId'));
			}
			var val = o['stopLocationId'];
			if(vars.includes('stopLocationId')) {
				$('.inputTrafficStop' + pk + 'StopLocationId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficStop' + pk + 'StopLocationId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficStop' + pk + 'StopLocationId'));
			}
			var val = o['stopCityId'];
			if(vars.includes('stopCityId')) {
				$('.inputTrafficStop' + pk + 'StopCityId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficStop' + pk + 'StopCityId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficStop' + pk + 'StopCityId'));
			}
			var val = o['personKeys'];
			if(vars.includes('personKeys')) {
				$('.inputTrafficStop' + pk + 'PersonKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficStop' + pk + 'PersonKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficStop' + pk + 'PersonKeys'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputTrafficStop' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficStop' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficStop' + pk + 'InheritPk'));
			}
			var val = o['id'];
			if(vars.includes('id')) {
				$('.inputTrafficStop' + pk + 'Id').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficStop' + pk + 'Id').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficStop' + pk + 'Id'));
			}
			var val = o['classCanonicalName'];
			if(vars.includes('classCanonicalName')) {
				$('.inputTrafficStop' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficStop' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficStop' + pk + 'ClassCanonicalName'));
			}
			var val = o['classSimpleName'];
			if(vars.includes('classSimpleName')) {
				$('.inputTrafficStop' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficStop' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficStop' + pk + 'ClassSimpleName'));
			}
			var val = o['classCanonicalNames'];
			if(vars.includes('classCanonicalNames')) {
				$('.inputTrafficStop' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficStop' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficStop' + pk + 'ClassCanonicalNames'));
			}
			var val = o['saves'];
			if(vars.includes('saves')) {
				$('.inputTrafficStop' + pk + 'Saves').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficStop' + pk + 'Saves').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficStop' + pk + 'Saves'));
			}
			var val = o['objectTitle'];
			if(vars.includes('objectTitle')) {
				$('.inputTrafficStop' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficStop' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficStop' + pk + 'ObjectTitle'));
			}
			var val = o['objectId'];
			if(vars.includes('objectId')) {
				$('.inputTrafficStop' + pk + 'ObjectId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficStop' + pk + 'ObjectId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficStop' + pk + 'ObjectId'));
			}
			var val = o['trafficStopKey'];
			if(vars.includes('trafficStopKey')) {
				$('.inputTrafficStop' + pk + 'TrafficStopKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficStop' + pk + 'TrafficStopKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficStop' + pk + 'TrafficStopKey'));
			}
			var val = o['stateAbbreviation'];
			if(vars.includes('stateAbbreviation')) {
				$('.inputTrafficStop' + pk + 'StateAbbreviation').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficStop' + pk + 'StateAbbreviation').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficStop' + pk + 'StateAbbreviation'));
			}
			var val = o['stateKey'];
			if(vars.includes('stateKey')) {
				$('.inputTrafficStop' + pk + 'StateKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficStop' + pk + 'StateKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficStop' + pk + 'StateKey'));
			}
			var val = o['stateName'];
			if(vars.includes('stateName')) {
				$('.inputTrafficStop' + pk + 'StateName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficStop' + pk + 'StateName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficStop' + pk + 'StateName'));
			}
			var val = o['agencyKey'];
			if(vars.includes('agencyKey')) {
				$('.inputTrafficStop' + pk + 'AgencyKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficStop' + pk + 'AgencyKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficStop' + pk + 'AgencyKey'));
			}
			var val = o['stopYear'];
			if(vars.includes('stopYear')) {
				$('.inputTrafficStop' + pk + 'StopYear').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficStop' + pk + 'StopYear').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficStop' + pk + 'StopYear'));
			}
			var val = o['stopPurposeNum'];
			if(vars.includes('stopPurposeNum')) {
				$('.inputTrafficStop' + pk + 'StopPurposeNum').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficStop' + pk + 'StopPurposeNum').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficStop' + pk + 'StopPurposeNum'));
			}
			var val = o['stopActionNum'];
			if(vars.includes('stopActionNum')) {
				$('.inputTrafficStop' + pk + 'StopActionNum').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficStop' + pk + 'StopActionNum').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficStop' + pk + 'StopActionNum'));
			}
			var val = o['personRaceTitles'];
			if(vars.includes('personRaceTitles')) {
				$('.inputTrafficStop' + pk + 'PersonRaceTitles').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficStop' + pk + 'PersonRaceTitles').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficStop' + pk + 'PersonRaceTitles'));
			}
			var val = o['trafficSearchRaceTitles'];
			if(vars.includes('trafficSearchRaceTitles')) {
				$('.inputTrafficStop' + pk + 'TrafficSearchRaceTitles').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficStop' + pk + 'TrafficSearchRaceTitles').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficStop' + pk + 'TrafficSearchRaceTitles'));
			}
		});
	}
}
