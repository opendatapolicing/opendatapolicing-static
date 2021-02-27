
// PUTImport //

async function putimportTrafficSearch($formValues, pk, success, error) {
	var json = $formValues.find('.PUTImport_list').val();
	if(json != null && json !== '')
		putimportTrafficSearchVals(JSON.parse(json), success, error);
}

function putimportTrafficSearchVals(json, success, error) {
	$.ajax({
		url: '/api/traffic-search/import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTMerge //

async function putmergeTrafficSearch($formValues, pk, success, error) {
	var json = $formValues.find('.PUTMerge_list').val();
	if(json != null && json !== '')
		putmergeTrafficSearchVals(JSON.parse(json), success, error);
}

function putmergeTrafficSearchVals(json, success, error) {
	$.ajax({
		url: '/api/traffic-search/merge'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTCopy //

async function putcopyTrafficSearch($formValues, pk, success, error) {
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

	var valueArchived = $formValues.find('.valueArchived').val();
	if(valueArchived != null && valueArchived !== '')
		vals['archived'] = valueArchived == 'true';

	var valueDeleted = $formValues.find('.valueDeleted').val();
	if(valueDeleted != null && valueDeleted !== '')
		vals['deleted'] = valueDeleted == 'true';

	var valuePersonKey = $formValues.find('input.valuePersonKey:checked').val();
	var valuePersonKeyClear = $formValues.find('input.personKey_clear:checked').val();
	if(valuePersonKeyClear != null && valuePersonKeyClear)
		vals['personKey'] = null;
	else if(valuePersonKey != null && valuePersonKey)
		vals['personKey'] = valuePersonKey;

	var valueContrabandKeys = $formValues.find('input.valueContrabandKeys:checked').val();
	var valueContrabandKeysClear = $formValues.find('input.contrabandKeys_clear:checked').val();
	if(valueContrabandKeysClear != null && valueContrabandKeysClear)
		vals['contrabandKeys'] = null;
	else if(valueContrabandKeys != null && valueContrabandKeys)
		vals['contrabandKeys'] = [valueContrabandKeys];

	var valueSearchBasisKeys = $formValues.find('input.valueSearchBasisKeys:checked').val();
	var valueSearchBasisKeysClear = $formValues.find('input.searchBasisKeys_clear:checked').val();
	if(valueSearchBasisKeysClear != null && valueSearchBasisKeysClear)
		vals['searchBasisKeys'] = null;
	else if(valueSearchBasisKeys != null && valueSearchBasisKeys)
		vals['searchBasisKeys'] = [valueSearchBasisKeys];

	var valueSearchTypeTitle = $formValues.find('.valueSearchTypeTitle').val();
	if(valueSearchTypeTitle != null && valueSearchTypeTitle !== '')
		vals['searchTypeTitle'] = valueSearchTypeTitle;

	var valueSearchVehicle = $formValues.find('.valueSearchVehicle').val();
	if(valueSearchVehicle != null && valueSearchVehicle !== '')
		vals['searchVehicle'] = valueSearchVehicle == 'true';

	var valueSearchDriver = $formValues.find('.valueSearchDriver').val();
	if(valueSearchDriver != null && valueSearchDriver !== '')
		vals['searchDriver'] = valueSearchDriver == 'true';

	var valueSearchPassenger = $formValues.find('.valueSearchPassenger').val();
	if(valueSearchPassenger != null && valueSearchPassenger !== '')
		vals['searchPassenger'] = valueSearchPassenger == 'true';

	var valueSearchProperty = $formValues.find('.valueSearchProperty').val();
	if(valueSearchProperty != null && valueSearchProperty !== '')
		vals['searchProperty'] = valueSearchProperty == 'true';

	var valueSearchVehicleSiezed = $formValues.find('.valueSearchVehicleSiezed').val();
	if(valueSearchVehicleSiezed != null && valueSearchVehicleSiezed !== '')
		vals['searchVehicleSiezed'] = valueSearchVehicleSiezed == 'true';

	var valueSearchPersonalPropertySiezed = $formValues.find('.valueSearchPersonalPropertySiezed').val();
	if(valueSearchPersonalPropertySiezed != null && valueSearchPersonalPropertySiezed !== '')
		vals['searchPersonalPropertySiezed'] = valueSearchPersonalPropertySiezed == 'true';

	var valueSearchOtherPropertySiezed = $formValues.find('.valueSearchOtherPropertySiezed').val();
	if(valueSearchOtherPropertySiezed != null && valueSearchOtherPropertySiezed !== '')
		vals['searchOtherPropertySiezed'] = valueSearchOtherPropertySiezed == 'true';

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	if(valueInheritPk != null && valueInheritPk !== '')
		vals['inheritPk'] = valueInheritPk;

	var valueUserId = $formValues.find('.valueUserId').val();
	if(valueUserId != null && valueUserId !== '')
		vals['userId'] = valueUserId;

	var valueUserKey = $formValues.find('.valueUserKey').val();
	if(valueUserKey != null && valueUserKey !== '')
		vals['userKey'] = valueUserKey;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	var valueStopAgencyTitle = $formValues.find('.valueStopAgencyTitle').val();
	if(valueStopAgencyTitle != null && valueStopAgencyTitle !== '')
		vals['stopAgencyTitle'] = valueStopAgencyTitle;

	var valueStopDateTime = $formValues.find('.valueStopDateTime').val();
	if(valueStopDateTime != null && valueStopDateTime !== '')
		vals['stopDateTime'] = valueStopDateTime;

	var valueStopPurposeNum = $formValues.find('.valueStopPurposeNum').val();
	if(valueStopPurposeNum != null && valueStopPurposeNum !== '')
		vals['stopPurposeNum'] = valueStopPurposeNum;

	var valueStopPurposeTitle = $formValues.find('.valueStopPurposeTitle').val();
	if(valueStopPurposeTitle != null && valueStopPurposeTitle !== '')
		vals['stopPurposeTitle'] = valueStopPurposeTitle;

	var valueStopActionNum = $formValues.find('.valueStopActionNum').val();
	if(valueStopActionNum != null && valueStopActionNum !== '')
		vals['stopActionNum'] = valueStopActionNum;

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

	var valueSearchTypeNum = $formValues.find('.valueSearchTypeNum').val();
	if(valueSearchTypeNum != null && valueSearchTypeNum !== '')
		vals['searchTypeNum'] = valueSearchTypeNum;

	putcopyTrafficSearchVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function putcopyTrafficSearchVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/traffic-search/copy?' + $.param(filters)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify({patch: vals})
		, success: success
		, error: error
	});
}

// POST //

async function postTrafficSearch($formValues, success, error) {
	var vals = {};
	if(success == null) {
		success = function( data, textStatus, jQxhr ) {
			addGlow($formValues.next('button'));
			var url = data['pageUrlPk'];
			if(url)
				window.location.href = url;
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

	var valueArchived = $formValues.find('.valueArchived').val();
	if(valueArchived != null && valueArchived !== '')
		vals['archived'] = valueArchived == 'true';

	var valueDeleted = $formValues.find('.valueDeleted').val();
	if(valueDeleted != null && valueDeleted !== '')
		vals['deleted'] = valueDeleted == 'true';

	var valuePersonKey = $formValues.find('.valuePersonKey').val();
	if(valuePersonKey != null && valuePersonKey !== '')
		vals['personKey'] = valuePersonKey;

	var valueContrabandKeys = [];
	$formValues.find('input.valueContrabandKeys:checked').each(function(index) {
		valueContrabandKeys.push($(this).val());
	});
	if(valueContrabandKeys.length > 0)
		vals['contrabandKeys'] = valueContrabandKeys;

	var valueSearchBasisKeys = [];
	$formValues.find('input.valueSearchBasisKeys:checked').each(function(index) {
		valueSearchBasisKeys.push($(this).val());
	});
	if(valueSearchBasisKeys.length > 0)
		vals['searchBasisKeys'] = valueSearchBasisKeys;

	var valueSearchTypeTitle = $formValues.find('.valueSearchTypeTitle').val();
	if(valueSearchTypeTitle != null && valueSearchTypeTitle !== '')
		vals['searchTypeTitle'] = valueSearchTypeTitle;

	var valueSearchVehicle = $formValues.find('.valueSearchVehicle').val();
	if(valueSearchVehicle != null && valueSearchVehicle !== '')
		vals['searchVehicle'] = valueSearchVehicle == 'true';

	var valueSearchDriver = $formValues.find('.valueSearchDriver').val();
	if(valueSearchDriver != null && valueSearchDriver !== '')
		vals['searchDriver'] = valueSearchDriver == 'true';

	var valueSearchPassenger = $formValues.find('.valueSearchPassenger').val();
	if(valueSearchPassenger != null && valueSearchPassenger !== '')
		vals['searchPassenger'] = valueSearchPassenger == 'true';

	var valueSearchProperty = $formValues.find('.valueSearchProperty').val();
	if(valueSearchProperty != null && valueSearchProperty !== '')
		vals['searchProperty'] = valueSearchProperty == 'true';

	var valueSearchVehicleSiezed = $formValues.find('.valueSearchVehicleSiezed').val();
	if(valueSearchVehicleSiezed != null && valueSearchVehicleSiezed !== '')
		vals['searchVehicleSiezed'] = valueSearchVehicleSiezed == 'true';

	var valueSearchPersonalPropertySiezed = $formValues.find('.valueSearchPersonalPropertySiezed').val();
	if(valueSearchPersonalPropertySiezed != null && valueSearchPersonalPropertySiezed !== '')
		vals['searchPersonalPropertySiezed'] = valueSearchPersonalPropertySiezed == 'true';

	var valueSearchOtherPropertySiezed = $formValues.find('.valueSearchOtherPropertySiezed').val();
	if(valueSearchOtherPropertySiezed != null && valueSearchOtherPropertySiezed !== '')
		vals['searchOtherPropertySiezed'] = valueSearchOtherPropertySiezed == 'true';

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	if(valueInheritPk != null && valueInheritPk !== '')
		vals['inheritPk'] = valueInheritPk;

	var valueUserId = $formValues.find('.valueUserId').val();
	if(valueUserId != null && valueUserId !== '')
		vals['userId'] = valueUserId;

	var valueUserKey = $formValues.find('.valueUserKey').val();
	if(valueUserKey != null && valueUserKey !== '')
		vals['userKey'] = valueUserKey;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	var valueStopAgencyTitle = $formValues.find('.valueStopAgencyTitle').val();
	if(valueStopAgencyTitle != null && valueStopAgencyTitle !== '')
		vals['stopAgencyTitle'] = valueStopAgencyTitle;

	var valueStopDateTime = $formValues.find('.valueStopDateTime').val();
	if(valueStopDateTime != null && valueStopDateTime !== '')
		vals['stopDateTime'] = valueStopDateTime;

	var valueStopPurposeNum = $formValues.find('.valueStopPurposeNum').val();
	if(valueStopPurposeNum != null && valueStopPurposeNum !== '')
		vals['stopPurposeNum'] = valueStopPurposeNum;

	var valueStopPurposeTitle = $formValues.find('.valueStopPurposeTitle').val();
	if(valueStopPurposeTitle != null && valueStopPurposeTitle !== '')
		vals['stopPurposeTitle'] = valueStopPurposeTitle;

	var valueStopActionNum = $formValues.find('.valueStopActionNum').val();
	if(valueStopActionNum != null && valueStopActionNum !== '')
		vals['stopActionNum'] = valueStopActionNum;

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

	var valueSearchTypeNum = $formValues.find('.valueSearchTypeNum').val();
	if(valueSearchTypeNum != null && valueSearchTypeNum !== '')
		vals['searchTypeNum'] = valueSearchTypeNum;

	$.ajax({
		url: '/api/traffic-search'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postTrafficSearchVals(vals, success, error) {
	$.ajax({
		url: '/api/traffic-search'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PATCH //

async function patchTrafficSearch($formFilters, $formValues, pk, success, error) {
	var filters = patchTrafficSearchFilters($formFilters);

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

	var valueArchived = $formValues.find('.valueArchived').val();
	var removeArchived = $formValues.find('.removeArchived').val() === 'true';
	var valueArchivedSelectVal = $formValues.find('select.setArchived').val();
	var valueArchived = null;
	if(valueArchivedSelectVal != null && valueArchivedSelectVal !== '')
		valueArchived = valueArchivedSelectVal == 'true';
	var setArchived = removeArchived ? null : valueArchived;
	var addArchived = $formValues.find('.addArchived').prop('checked');
	if(removeArchived || setArchived != null && setArchived !== '')
		vals['setArchived'] = setArchived;
	if(addArchived != null && addArchived !== '')
		vals['addArchived'] = addArchived;
	var removeArchived = $formValues.find('.removeArchived').prop('checked');
	if(removeArchived != null && removeArchived !== '')
		vals['removeArchived'] = removeArchived;

	var valueDeleted = $formValues.find('.valueDeleted').val();
	var removeDeleted = $formValues.find('.removeDeleted').val() === 'true';
	var valueDeletedSelectVal = $formValues.find('select.setDeleted').val();
	var valueDeleted = null;
	if(valueDeletedSelectVal != null && valueDeletedSelectVal !== '')
		valueDeleted = valueDeletedSelectVal == 'true';
	var setDeleted = removeDeleted ? null : valueDeleted;
	var addDeleted = $formValues.find('.addDeleted').prop('checked');
	if(removeDeleted || setDeleted != null && setDeleted !== '')
		vals['setDeleted'] = setDeleted;
	if(addDeleted != null && addDeleted !== '')
		vals['addDeleted'] = addDeleted;
	var removeDeleted = $formValues.find('.removeDeleted').prop('checked');
	if(removeDeleted != null && removeDeleted !== '')
		vals['removeDeleted'] = removeDeleted;

	var valuePersonKey = $formValues.find('input.valuePersonKey:checked').val();
	if(valuePersonKey != null && valuePersonKey !== '')
		vals['setPersonKey'] = valuePersonKey;

	var valueContrabandKeys = $formValues.find('input.valueContrabandKeys:checked').val();
	if(valueContrabandKeys != null && valueContrabandKeys !== '')
		vals['addContrabandKeys'] = valueContrabandKeys;

	var valueSearchBasisKeys = $formValues.find('input.valueSearchBasisKeys:checked').val();
	if(valueSearchBasisKeys != null && valueSearchBasisKeys !== '')
		vals['addSearchBasisKeys'] = valueSearchBasisKeys;

	var valueSearchTypeTitle = $formValues.find('.valueSearchTypeTitle').val();
	var removeSearchTypeTitle = $formValues.find('.removeSearchTypeTitle').val() === 'true';
	var setSearchTypeTitle = removeSearchTypeTitle ? null : $formValues.find('.setSearchTypeTitle').val();
	var addSearchTypeTitle = $formValues.find('.addSearchTypeTitle').val();
	if(removeSearchTypeTitle || setSearchTypeTitle != null && setSearchTypeTitle !== '')
		vals['setSearchTypeTitle'] = setSearchTypeTitle;
	if(addSearchTypeTitle != null && addSearchTypeTitle !== '')
		vals['addSearchTypeTitle'] = addSearchTypeTitle;
	var removeSearchTypeTitle = $formValues.find('.removeSearchTypeTitle').val();
	if(removeSearchTypeTitle != null && removeSearchTypeTitle !== '')
		vals['removeSearchTypeTitle'] = removeSearchTypeTitle;

	var valueSearchVehicle = $formValues.find('.valueSearchVehicle').val();
	var removeSearchVehicle = $formValues.find('.removeSearchVehicle').val() === 'true';
	var valueSearchVehicleSelectVal = $formValues.find('select.setSearchVehicle').val();
	var valueSearchVehicle = null;
	if(valueSearchVehicleSelectVal != null && valueSearchVehicleSelectVal !== '')
		valueSearchVehicle = valueSearchVehicleSelectVal == 'true';
	var setSearchVehicle = removeSearchVehicle ? null : valueSearchVehicle;
	var addSearchVehicle = $formValues.find('.addSearchVehicle').prop('checked');
	if(removeSearchVehicle || setSearchVehicle != null && setSearchVehicle !== '')
		vals['setSearchVehicle'] = setSearchVehicle;
	if(addSearchVehicle != null && addSearchVehicle !== '')
		vals['addSearchVehicle'] = addSearchVehicle;
	var removeSearchVehicle = $formValues.find('.removeSearchVehicle').prop('checked');
	if(removeSearchVehicle != null && removeSearchVehicle !== '')
		vals['removeSearchVehicle'] = removeSearchVehicle;

	var valueSearchDriver = $formValues.find('.valueSearchDriver').val();
	var removeSearchDriver = $formValues.find('.removeSearchDriver').val() === 'true';
	var valueSearchDriverSelectVal = $formValues.find('select.setSearchDriver').val();
	var valueSearchDriver = null;
	if(valueSearchDriverSelectVal != null && valueSearchDriverSelectVal !== '')
		valueSearchDriver = valueSearchDriverSelectVal == 'true';
	var setSearchDriver = removeSearchDriver ? null : valueSearchDriver;
	var addSearchDriver = $formValues.find('.addSearchDriver').prop('checked');
	if(removeSearchDriver || setSearchDriver != null && setSearchDriver !== '')
		vals['setSearchDriver'] = setSearchDriver;
	if(addSearchDriver != null && addSearchDriver !== '')
		vals['addSearchDriver'] = addSearchDriver;
	var removeSearchDriver = $formValues.find('.removeSearchDriver').prop('checked');
	if(removeSearchDriver != null && removeSearchDriver !== '')
		vals['removeSearchDriver'] = removeSearchDriver;

	var valueSearchPassenger = $formValues.find('.valueSearchPassenger').val();
	var removeSearchPassenger = $formValues.find('.removeSearchPassenger').val() === 'true';
	var valueSearchPassengerSelectVal = $formValues.find('select.setSearchPassenger').val();
	var valueSearchPassenger = null;
	if(valueSearchPassengerSelectVal != null && valueSearchPassengerSelectVal !== '')
		valueSearchPassenger = valueSearchPassengerSelectVal == 'true';
	var setSearchPassenger = removeSearchPassenger ? null : valueSearchPassenger;
	var addSearchPassenger = $formValues.find('.addSearchPassenger').prop('checked');
	if(removeSearchPassenger || setSearchPassenger != null && setSearchPassenger !== '')
		vals['setSearchPassenger'] = setSearchPassenger;
	if(addSearchPassenger != null && addSearchPassenger !== '')
		vals['addSearchPassenger'] = addSearchPassenger;
	var removeSearchPassenger = $formValues.find('.removeSearchPassenger').prop('checked');
	if(removeSearchPassenger != null && removeSearchPassenger !== '')
		vals['removeSearchPassenger'] = removeSearchPassenger;

	var valueSearchProperty = $formValues.find('.valueSearchProperty').val();
	var removeSearchProperty = $formValues.find('.removeSearchProperty').val() === 'true';
	var valueSearchPropertySelectVal = $formValues.find('select.setSearchProperty').val();
	var valueSearchProperty = null;
	if(valueSearchPropertySelectVal != null && valueSearchPropertySelectVal !== '')
		valueSearchProperty = valueSearchPropertySelectVal == 'true';
	var setSearchProperty = removeSearchProperty ? null : valueSearchProperty;
	var addSearchProperty = $formValues.find('.addSearchProperty').prop('checked');
	if(removeSearchProperty || setSearchProperty != null && setSearchProperty !== '')
		vals['setSearchProperty'] = setSearchProperty;
	if(addSearchProperty != null && addSearchProperty !== '')
		vals['addSearchProperty'] = addSearchProperty;
	var removeSearchProperty = $formValues.find('.removeSearchProperty').prop('checked');
	if(removeSearchProperty != null && removeSearchProperty !== '')
		vals['removeSearchProperty'] = removeSearchProperty;

	var valueSearchVehicleSiezed = $formValues.find('.valueSearchVehicleSiezed').val();
	var removeSearchVehicleSiezed = $formValues.find('.removeSearchVehicleSiezed').val() === 'true';
	var valueSearchVehicleSiezedSelectVal = $formValues.find('select.setSearchVehicleSiezed').val();
	var valueSearchVehicleSiezed = null;
	if(valueSearchVehicleSiezedSelectVal != null && valueSearchVehicleSiezedSelectVal !== '')
		valueSearchVehicleSiezed = valueSearchVehicleSiezedSelectVal == 'true';
	var setSearchVehicleSiezed = removeSearchVehicleSiezed ? null : valueSearchVehicleSiezed;
	var addSearchVehicleSiezed = $formValues.find('.addSearchVehicleSiezed').prop('checked');
	if(removeSearchVehicleSiezed || setSearchVehicleSiezed != null && setSearchVehicleSiezed !== '')
		vals['setSearchVehicleSiezed'] = setSearchVehicleSiezed;
	if(addSearchVehicleSiezed != null && addSearchVehicleSiezed !== '')
		vals['addSearchVehicleSiezed'] = addSearchVehicleSiezed;
	var removeSearchVehicleSiezed = $formValues.find('.removeSearchVehicleSiezed').prop('checked');
	if(removeSearchVehicleSiezed != null && removeSearchVehicleSiezed !== '')
		vals['removeSearchVehicleSiezed'] = removeSearchVehicleSiezed;

	var valueSearchPersonalPropertySiezed = $formValues.find('.valueSearchPersonalPropertySiezed').val();
	var removeSearchPersonalPropertySiezed = $formValues.find('.removeSearchPersonalPropertySiezed').val() === 'true';
	var valueSearchPersonalPropertySiezedSelectVal = $formValues.find('select.setSearchPersonalPropertySiezed').val();
	var valueSearchPersonalPropertySiezed = null;
	if(valueSearchPersonalPropertySiezedSelectVal != null && valueSearchPersonalPropertySiezedSelectVal !== '')
		valueSearchPersonalPropertySiezed = valueSearchPersonalPropertySiezedSelectVal == 'true';
	var setSearchPersonalPropertySiezed = removeSearchPersonalPropertySiezed ? null : valueSearchPersonalPropertySiezed;
	var addSearchPersonalPropertySiezed = $formValues.find('.addSearchPersonalPropertySiezed').prop('checked');
	if(removeSearchPersonalPropertySiezed || setSearchPersonalPropertySiezed != null && setSearchPersonalPropertySiezed !== '')
		vals['setSearchPersonalPropertySiezed'] = setSearchPersonalPropertySiezed;
	if(addSearchPersonalPropertySiezed != null && addSearchPersonalPropertySiezed !== '')
		vals['addSearchPersonalPropertySiezed'] = addSearchPersonalPropertySiezed;
	var removeSearchPersonalPropertySiezed = $formValues.find('.removeSearchPersonalPropertySiezed').prop('checked');
	if(removeSearchPersonalPropertySiezed != null && removeSearchPersonalPropertySiezed !== '')
		vals['removeSearchPersonalPropertySiezed'] = removeSearchPersonalPropertySiezed;

	var valueSearchOtherPropertySiezed = $formValues.find('.valueSearchOtherPropertySiezed').val();
	var removeSearchOtherPropertySiezed = $formValues.find('.removeSearchOtherPropertySiezed').val() === 'true';
	var valueSearchOtherPropertySiezedSelectVal = $formValues.find('select.setSearchOtherPropertySiezed').val();
	var valueSearchOtherPropertySiezed = null;
	if(valueSearchOtherPropertySiezedSelectVal != null && valueSearchOtherPropertySiezedSelectVal !== '')
		valueSearchOtherPropertySiezed = valueSearchOtherPropertySiezedSelectVal == 'true';
	var setSearchOtherPropertySiezed = removeSearchOtherPropertySiezed ? null : valueSearchOtherPropertySiezed;
	var addSearchOtherPropertySiezed = $formValues.find('.addSearchOtherPropertySiezed').prop('checked');
	if(removeSearchOtherPropertySiezed || setSearchOtherPropertySiezed != null && setSearchOtherPropertySiezed !== '')
		vals['setSearchOtherPropertySiezed'] = setSearchOtherPropertySiezed;
	if(addSearchOtherPropertySiezed != null && addSearchOtherPropertySiezed !== '')
		vals['addSearchOtherPropertySiezed'] = addSearchOtherPropertySiezed;
	var removeSearchOtherPropertySiezed = $formValues.find('.removeSearchOtherPropertySiezed').prop('checked');
	if(removeSearchOtherPropertySiezed != null && removeSearchOtherPropertySiezed !== '')
		vals['removeSearchOtherPropertySiezed'] = removeSearchOtherPropertySiezed;

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

	var valueUserId = $formValues.find('.valueUserId').val();
	var removeUserId = $formValues.find('.removeUserId').val() === 'true';
	var setUserId = removeUserId ? null : $formValues.find('.setUserId').val();
	var addUserId = $formValues.find('.addUserId').val();
	if(removeUserId || setUserId != null && setUserId !== '')
		vals['setUserId'] = setUserId;
	if(addUserId != null && addUserId !== '')
		vals['addUserId'] = addUserId;
	var removeUserId = $formValues.find('.removeUserId').val();
	if(removeUserId != null && removeUserId !== '')
		vals['removeUserId'] = removeUserId;

	var valueUserKey = $formValues.find('.valueUserKey').val();
	var removeUserKey = $formValues.find('.removeUserKey').val() === 'true';
	var setUserKey = removeUserKey ? null : $formValues.find('.setUserKey').val();
	var addUserKey = $formValues.find('.addUserKey').val();
	if(removeUserKey || setUserKey != null && setUserKey !== '')
		vals['setUserKey'] = setUserKey;
	if(addUserKey != null && addUserKey !== '')
		vals['addUserKey'] = addUserKey;
	var removeUserKey = $formValues.find('.removeUserKey').val();
	if(removeUserKey != null && removeUserKey !== '')
		vals['removeUserKey'] = removeUserKey;

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

	var valueStopAgencyTitle = $formValues.find('.valueStopAgencyTitle').val();
	var removeStopAgencyTitle = $formValues.find('.removeStopAgencyTitle').val() === 'true';
	var setStopAgencyTitle = removeStopAgencyTitle ? null : $formValues.find('.setStopAgencyTitle').val();
	var addStopAgencyTitle = $formValues.find('.addStopAgencyTitle').val();
	if(removeStopAgencyTitle || setStopAgencyTitle != null && setStopAgencyTitle !== '')
		vals['setStopAgencyTitle'] = setStopAgencyTitle;
	if(addStopAgencyTitle != null && addStopAgencyTitle !== '')
		vals['addStopAgencyTitle'] = addStopAgencyTitle;
	var removeStopAgencyTitle = $formValues.find('.removeStopAgencyTitle').val();
	if(removeStopAgencyTitle != null && removeStopAgencyTitle !== '')
		vals['removeStopAgencyTitle'] = removeStopAgencyTitle;

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

	var valueSearchTypeNum = $formValues.find('.valueSearchTypeNum').val();
	var removeSearchTypeNum = $formValues.find('.removeSearchTypeNum').val() === 'true';
	var setSearchTypeNum = removeSearchTypeNum ? null : $formValues.find('.setSearchTypeNum').val();
	var addSearchTypeNum = $formValues.find('.addSearchTypeNum').val();
	if(removeSearchTypeNum || setSearchTypeNum != null && setSearchTypeNum !== '')
		vals['setSearchTypeNum'] = setSearchTypeNum;
	if(addSearchTypeNum != null && addSearchTypeNum !== '')
		vals['addSearchTypeNum'] = addSearchTypeNum;
	var removeSearchTypeNum = $formValues.find('.removeSearchTypeNum').val();
	if(removeSearchTypeNum != null && removeSearchTypeNum !== '')
		vals['removeSearchTypeNum'] = removeSearchTypeNum;

	patchTrafficSearchVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchTrafficSearchFilters($formFilters) {
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

		var $filterArchivedCheckbox = $formFilters.find('input.valueArchived[type = "checkbox"]');
		var $filterArchivedSelect = $formFilters.find('select.valueArchived');
		var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.val() : $filterArchivedCheckbox.prop('checked');
		var filterArchivedSelectVal = $formFilters.find('select.filterArchived').val();
		var filterArchived = null;
		if(filterArchivedSelectVal !== '')
			filterArchived = filterArchivedSelectVal == 'true';
		if(filterArchived != null && filterArchived === true)
			filters.push({ name: 'fq', value: 'archived:' + filterArchived });

		var $filterDeletedCheckbox = $formFilters.find('input.valueDeleted[type = "checkbox"]');
		var $filterDeletedSelect = $formFilters.find('select.valueDeleted');
		var filterDeleted = $filterDeletedSelect.length ? $filterDeletedSelect.val() : $filterDeletedCheckbox.prop('checked');
		var filterDeletedSelectVal = $formFilters.find('select.filterDeleted').val();
		var filterDeleted = null;
		if(filterDeletedSelectVal !== '')
			filterDeleted = filterDeletedSelectVal == 'true';
		if(filterDeleted != null && filterDeleted === true)
			filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

		var filterPersonKey = $formFilters.find('.valuePersonKey').val();
		if(filterPersonKey != null && filterPersonKey !== '')
			filters.push({ name: 'fq', value: 'personKey:' + filterPersonKey });

		var filterContrabandKeys = $formFilters.find('.valueContrabandKeys').val();
		if(filterContrabandKeys != null && filterContrabandKeys !== '')
			filters.push({ name: 'fq', value: 'contrabandKeys:' + filterContrabandKeys });

		var filterSearchBasisKeys = $formFilters.find('.valueSearchBasisKeys').val();
		if(filterSearchBasisKeys != null && filterSearchBasisKeys !== '')
			filters.push({ name: 'fq', value: 'searchBasisKeys:' + filterSearchBasisKeys });

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

		var filterSessionId = $formFilters.find('.valueSessionId').val();
		if(filterSessionId != null && filterSessionId !== '')
			filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

		var filterUserId = $formFilters.find('.valueUserId').val();
		if(filterUserId != null && filterUserId !== '')
			filters.push({ name: 'fq', value: 'userId:' + filterUserId });

		var filterUserKey = $formFilters.find('.valueUserKey').val();
		if(filterUserKey != null && filterUserKey !== '')
			filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

		var filterSaves = $formFilters.find('.valueSaves').val();
		if(filterSaves != null && filterSaves !== '')
			filters.push({ name: 'fq', value: 'saves:' + filterSaves });

		var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
		if(filterObjectTitle != null && filterObjectTitle !== '')
			filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

		var filterObjectId = $formFilters.find('.valueObjectId').val();
		if(filterObjectId != null && filterObjectId !== '')
			filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

		var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
		if(filterObjectSuggest != null && filterObjectSuggest !== '')
			filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

		var filterObjectText = $formFilters.find('.valueObjectText').val();
		if(filterObjectText != null && filterObjectText !== '')
			filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

		var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
		if(filterPageUrlId != null && filterPageUrlId !== '')
			filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

		var filterPageUrlPk = $formFilters.find('.valuePageUrlPk').val();
		if(filterPageUrlPk != null && filterPageUrlPk !== '')
			filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

		var filterTrafficSearchKey = $formFilters.find('.valueTrafficSearchKey').val();
		if(filterTrafficSearchKey != null && filterTrafficSearchKey !== '')
			filters.push({ name: 'fq', value: 'trafficSearchKey:' + filterTrafficSearchKey });

		var filterStopAgencyTitle = $formFilters.find('.valueStopAgencyTitle').val();
		if(filterStopAgencyTitle != null && filterStopAgencyTitle !== '')
			filters.push({ name: 'fq', value: 'stopAgencyTitle:' + filterStopAgencyTitle });

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

		var filterTrafficSearchCompleteName = $formFilters.find('.valueTrafficSearchCompleteName').val();
		if(filterTrafficSearchCompleteName != null && filterTrafficSearchCompleteName !== '')
			filters.push({ name: 'fq', value: 'trafficSearchCompleteName:' + filterTrafficSearchCompleteName });
	}
	return filters;
}

function patchTrafficSearchVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchTrafficSearchVals(filters, vals, success, error);
}

function patchTrafficSearchVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/traffic-search?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getTrafficSearch(pk) {
	$.ajax({
		url: '/api/traffic-search/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Search //

async function searchTrafficSearch($formFilters, success, error) {
	var filters = searchTrafficSearchFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchTrafficSearchVals(filters, success, error);
}

function searchTrafficSearchFilters($formFilters) {
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

		var $filterArchivedCheckbox = $formFilters.find('input.valueArchived[type = "checkbox"]');
		var $filterArchivedSelect = $formFilters.find('select.valueArchived');
		var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.val() : $filterArchivedCheckbox.prop('checked');
		var filterArchivedSelectVal = $formFilters.find('select.filterArchived').val();
		var filterArchived = null;
		if(filterArchivedSelectVal !== '')
			filterArchived = filterArchivedSelectVal == 'true';
		if(filterArchived != null && filterArchived === true)
			filters.push({ name: 'fq', value: 'archived:' + filterArchived });

		var $filterDeletedCheckbox = $formFilters.find('input.valueDeleted[type = "checkbox"]');
		var $filterDeletedSelect = $formFilters.find('select.valueDeleted');
		var filterDeleted = $filterDeletedSelect.length ? $filterDeletedSelect.val() : $filterDeletedCheckbox.prop('checked');
		var filterDeletedSelectVal = $formFilters.find('select.filterDeleted').val();
		var filterDeleted = null;
		if(filterDeletedSelectVal !== '')
			filterDeleted = filterDeletedSelectVal == 'true';
		if(filterDeleted != null && filterDeleted === true)
			filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

		var filterPersonKey = $formFilters.find('.valuePersonKey').val();
		if(filterPersonKey != null && filterPersonKey !== '')
			filters.push({ name: 'fq', value: 'personKey:' + filterPersonKey });

		var filterContrabandKeys = $formFilters.find('.valueContrabandKeys').val();
		if(filterContrabandKeys != null && filterContrabandKeys !== '')
			filters.push({ name: 'fq', value: 'contrabandKeys:' + filterContrabandKeys });

		var filterSearchBasisKeys = $formFilters.find('.valueSearchBasisKeys').val();
		if(filterSearchBasisKeys != null && filterSearchBasisKeys !== '')
			filters.push({ name: 'fq', value: 'searchBasisKeys:' + filterSearchBasisKeys });

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

		var filterSessionId = $formFilters.find('.valueSessionId').val();
		if(filterSessionId != null && filterSessionId !== '')
			filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

		var filterUserId = $formFilters.find('.valueUserId').val();
		if(filterUserId != null && filterUserId !== '')
			filters.push({ name: 'fq', value: 'userId:' + filterUserId });

		var filterUserKey = $formFilters.find('.valueUserKey').val();
		if(filterUserKey != null && filterUserKey !== '')
			filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

		var filterSaves = $formFilters.find('.valueSaves').val();
		if(filterSaves != null && filterSaves !== '')
			filters.push({ name: 'fq', value: 'saves:' + filterSaves });

		var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
		if(filterObjectTitle != null && filterObjectTitle !== '')
			filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

		var filterObjectId = $formFilters.find('.valueObjectId').val();
		if(filterObjectId != null && filterObjectId !== '')
			filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

		var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
		if(filterObjectSuggest != null && filterObjectSuggest !== '')
			filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

		var filterObjectText = $formFilters.find('.valueObjectText').val();
		if(filterObjectText != null && filterObjectText !== '')
			filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

		var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
		if(filterPageUrlId != null && filterPageUrlId !== '')
			filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

		var filterPageUrlPk = $formFilters.find('.valuePageUrlPk').val();
		if(filterPageUrlPk != null && filterPageUrlPk !== '')
			filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

		var filterTrafficSearchKey = $formFilters.find('.valueTrafficSearchKey').val();
		if(filterTrafficSearchKey != null && filterTrafficSearchKey !== '')
			filters.push({ name: 'fq', value: 'trafficSearchKey:' + filterTrafficSearchKey });

		var filterStopAgencyTitle = $formFilters.find('.valueStopAgencyTitle').val();
		if(filterStopAgencyTitle != null && filterStopAgencyTitle !== '')
			filters.push({ name: 'fq', value: 'stopAgencyTitle:' + filterStopAgencyTitle });

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

		var filterTrafficSearchCompleteName = $formFilters.find('.valueTrafficSearchCompleteName').val();
		if(filterTrafficSearchCompleteName != null && filterTrafficSearchCompleteName !== '')
			filters.push({ name: 'fq', value: 'trafficSearchCompleteName:' + filterTrafficSearchCompleteName });
	}
	return filters;
}

function searchTrafficSearchVals(filters, success, error) {

	$.ajax({
		url: '/api/traffic-search?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestTrafficSearchObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-newspaper ');
			var $span = $('<span>').attr('class', '').text(o['trafficSearchCompleteName']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchTrafficSearchVals($formFilters, success, error);
}

function suggestTrafficSearchPersonKey(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-newspaper ');
			var $span = $('<span>').attr('class', '').text(o['trafficPersonCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			var val = o['trafficSearchKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_personKey_' + pk + '_trafficSearchKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valuePersonKey w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_personKey_" + pk + "_trafficSearchKeys_" + o['pk'] + "'); patchTrafficSearchVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'PersonKey']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#TrafficSearchForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchTrafficPersonVals(filters, success, error);
}

function suggestTrafficSearchContrabandKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-newspaper ');
			var $span = $('<span>').attr('class', '').text(o['trafficSearchCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			var val = o['searchKey'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_contrabandKeys_' + pk + '_searchKey_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueContrabandKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_contrabandKeys_" + pk + "_searchKey_" + o['pk'] + "'); patchTrafficSearchVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'ContrabandKeys']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#TrafficSearchForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchTrafficContrabandVals(filters, success, error);
}

function suggestTrafficSearchSearchBasisKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-newspaper ');
			var $span = $('<span>').attr('class', '').text(o['searchBasisCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			var val = o['searchKey'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_searchBasisKeys_' + pk + '_searchKey_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueSearchBasisKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_searchBasisKeys_" + pk + "_searchKey_" + o['pk'] + "'); patchTrafficSearchVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'SearchBasisKeys']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#TrafficSearchForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSearchBasisVals(filters, success, error);
}

// AdminSearch //

async function adminsearchTrafficSearch($formFilters, success, error) {
	var filters = adminsearchTrafficSearchFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	adminsearchTrafficSearchVals(filters, success, error);
}

function adminsearchTrafficSearchFilters($formFilters) {
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

		var $filterArchivedCheckbox = $formFilters.find('input.valueArchived[type = "checkbox"]');
		var $filterArchivedSelect = $formFilters.find('select.valueArchived');
		var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.val() : $filterArchivedCheckbox.prop('checked');
		var filterArchivedSelectVal = $formFilters.find('select.filterArchived').val();
		var filterArchived = null;
		if(filterArchivedSelectVal !== '')
			filterArchived = filterArchivedSelectVal == 'true';
		if(filterArchived != null && filterArchived === true)
			filters.push({ name: 'fq', value: 'archived:' + filterArchived });

		var $filterDeletedCheckbox = $formFilters.find('input.valueDeleted[type = "checkbox"]');
		var $filterDeletedSelect = $formFilters.find('select.valueDeleted');
		var filterDeleted = $filterDeletedSelect.length ? $filterDeletedSelect.val() : $filterDeletedCheckbox.prop('checked');
		var filterDeletedSelectVal = $formFilters.find('select.filterDeleted').val();
		var filterDeleted = null;
		if(filterDeletedSelectVal !== '')
			filterDeleted = filterDeletedSelectVal == 'true';
		if(filterDeleted != null && filterDeleted === true)
			filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

		var filterPersonKey = $formFilters.find('.valuePersonKey').val();
		if(filterPersonKey != null && filterPersonKey !== '')
			filters.push({ name: 'fq', value: 'personKey:' + filterPersonKey });

		var filterContrabandKeys = $formFilters.find('.valueContrabandKeys').val();
		if(filterContrabandKeys != null && filterContrabandKeys !== '')
			filters.push({ name: 'fq', value: 'contrabandKeys:' + filterContrabandKeys });

		var filterSearchBasisKeys = $formFilters.find('.valueSearchBasisKeys').val();
		if(filterSearchBasisKeys != null && filterSearchBasisKeys !== '')
			filters.push({ name: 'fq', value: 'searchBasisKeys:' + filterSearchBasisKeys });

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

		var filterSessionId = $formFilters.find('.valueSessionId').val();
		if(filterSessionId != null && filterSessionId !== '')
			filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

		var filterUserId = $formFilters.find('.valueUserId').val();
		if(filterUserId != null && filterUserId !== '')
			filters.push({ name: 'fq', value: 'userId:' + filterUserId });

		var filterUserKey = $formFilters.find('.valueUserKey').val();
		if(filterUserKey != null && filterUserKey !== '')
			filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

		var filterSaves = $formFilters.find('.valueSaves').val();
		if(filterSaves != null && filterSaves !== '')
			filters.push({ name: 'fq', value: 'saves:' + filterSaves });

		var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
		if(filterObjectTitle != null && filterObjectTitle !== '')
			filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

		var filterObjectId = $formFilters.find('.valueObjectId').val();
		if(filterObjectId != null && filterObjectId !== '')
			filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

		var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
		if(filterObjectSuggest != null && filterObjectSuggest !== '')
			filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

		var filterObjectText = $formFilters.find('.valueObjectText').val();
		if(filterObjectText != null && filterObjectText !== '')
			filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

		var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
		if(filterPageUrlId != null && filterPageUrlId !== '')
			filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

		var filterPageUrlPk = $formFilters.find('.valuePageUrlPk').val();
		if(filterPageUrlPk != null && filterPageUrlPk !== '')
			filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

		var filterTrafficSearchKey = $formFilters.find('.valueTrafficSearchKey').val();
		if(filterTrafficSearchKey != null && filterTrafficSearchKey !== '')
			filters.push({ name: 'fq', value: 'trafficSearchKey:' + filterTrafficSearchKey });

		var filterStopAgencyTitle = $formFilters.find('.valueStopAgencyTitle').val();
		if(filterStopAgencyTitle != null && filterStopAgencyTitle !== '')
			filters.push({ name: 'fq', value: 'stopAgencyTitle:' + filterStopAgencyTitle });

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

		var filterTrafficSearchCompleteName = $formFilters.find('.valueTrafficSearchCompleteName').val();
		if(filterTrafficSearchCompleteName != null && filterTrafficSearchCompleteName !== '')
			filters.push({ name: 'fq', value: 'trafficSearchCompleteName:' + filterTrafficSearchCompleteName });
	}
	return filters;
}

function adminsearchTrafficSearchVals(filters, success, error) {

	$.ajax({
		url: '/api/admin/traffic-search?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestTrafficSearchObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-newspaper ');
			var $span = $('<span>').attr('class', '').text(o['trafficSearchCompleteName']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchTrafficSearchVals($formFilters, success, error);
}

function suggestTrafficSearchPersonKey(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-newspaper ');
			var $span = $('<span>').attr('class', '').text(o['trafficPersonCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			var val = o['trafficSearchKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_personKey_' + pk + '_trafficSearchKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valuePersonKey w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_personKey_" + pk + "_trafficSearchKeys_" + o['pk'] + "'); patchTrafficSearchVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'PersonKey']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#TrafficSearchForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchTrafficPersonVals(filters, success, error);
}

function suggestTrafficSearchContrabandKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-newspaper ');
			var $span = $('<span>').attr('class', '').text(o['trafficSearchCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			var val = o['searchKey'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_contrabandKeys_' + pk + '_searchKey_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueContrabandKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_contrabandKeys_" + pk + "_searchKey_" + o['pk'] + "'); patchTrafficSearchVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'ContrabandKeys']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#TrafficSearchForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchTrafficContrabandVals(filters, success, error);
}

function suggestTrafficSearchSearchBasisKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-newspaper ');
			var $span = $('<span>').attr('class', '').text(o['searchBasisCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			var val = o['searchKey'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_searchBasisKeys_' + pk + '_searchKey_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueSearchBasisKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_searchBasisKeys_" + pk + "_searchKey_" + o['pk'] + "'); patchTrafficSearchVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'SearchBasisKeys']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#TrafficSearchForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSearchBasisVals(filters, success, error);
}

async function websocketTrafficSearch(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketTrafficSearch', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pkPage = $('#TrafficSearchForm :input[name=pk]').val();
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = parseInt(json['numFound']);
			var numPATCH = parseInt(json['numPATCH']);
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-display-topright w3-quarter box-' + id + ' ').attr('id', 'box-' + id).attr('data-numPATCH', numPATCH);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-pale-green ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'far fa-newspaper w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modify traffic searches');
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
					$('.box-' + id).remove();
					$('.top-box').append($box);
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
			$('#Page_personKey').trigger('oninput');
			$('#Page_personKey_add').text('add a person');
			$('#Page_personKey_add').removeClass('w3-disabled');
			$('#Page_personKey_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketTrafficContraband', function (error, message) {
			$('#Page_contrabandKeys').trigger('oninput');
			$('#Page_contrabandKeys_add').text('add a contraband');
			$('#Page_contrabandKeys_add').removeClass('w3-disabled');
			$('#Page_contrabandKeys_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketSearchBasis', function (error, message) {
			$('#Page_searchBasisKeys').trigger('oninput');
			$('#Page_searchBasisKeys_add').text('add a search basis');
			$('#Page_searchBasisKeys_add').removeClass('w3-disabled');
			$('#Page_searchBasisKeys_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketTrafficPerson', function (error, message) {
			$('#Page_personKey').trigger('oninput');
			$('#Page_personKey_add').text('add a person');
			$('#Page_personKey_add').removeClass('w3-disabled');
			$('#Page_personKey_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketTrafficContraband', function (error, message) {
			$('#Page_contrabandKeys').trigger('oninput');
			$('#Page_contrabandKeys_add').text('add a contraband');
			$('#Page_contrabandKeys_add').removeClass('w3-disabled');
			$('#Page_contrabandKeys_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketSearchBasis', function (error, message) {
			$('#Page_searchBasisKeys').trigger('oninput');
			$('#Page_searchBasisKeys_add').text('add a search basis');
			$('#Page_searchBasisKeys_add').removeClass('w3-disabled');
			$('#Page_searchBasisKeys_add').attr('disabled', false);
		});
	}
}
async function websocketTrafficSearchInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchTrafficSearchVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['pk'];
			if(vars.includes('pk')) {
				$('.inputTrafficSearch' + pk + 'Pk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'Pk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'Pk'));
			}
			var val = o['created'];
			if(vars.includes('created')) {
				$('.inputTrafficSearch' + pk + 'Created').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'Created').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'Created'));
			}
			var val = o['modified'];
			if(vars.includes('modified')) {
				$('.inputTrafficSearch' + pk + 'Modified').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'Modified').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'Modified'));
			}
			var val = o['archived'];
			if(vars.includes('archived')) {
				$('.inputTrafficSearch' + pk + 'Archived').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'Archived').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'Archived'));
			}
			var val = o['deleted'];
			if(vars.includes('deleted')) {
				$('.inputTrafficSearch' + pk + 'Deleted').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'Deleted').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'Deleted'));
			}
			var val = o['personKey'];
			if(vars.includes('personKey')) {
				$('.inputTrafficSearch' + pk + 'PersonKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'PersonKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'PersonKey'));
			}
			var val = o['contrabandKeys'];
			if(vars.includes('contrabandKeys')) {
				$('.inputTrafficSearch' + pk + 'ContrabandKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'ContrabandKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'ContrabandKeys'));
			}
			var val = o['searchBasisKeys'];
			if(vars.includes('searchBasisKeys')) {
				$('.inputTrafficSearch' + pk + 'SearchBasisKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'SearchBasisKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'SearchBasisKeys'));
			}
			var val = o['searchTypeTitle'];
			if(vars.includes('searchTypeTitle')) {
				$('.inputTrafficSearch' + pk + 'SearchTypeTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'SearchTypeTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'SearchTypeTitle'));
			}
			var val = o['searchVehicle'];
			if(vars.includes('searchVehicle')) {
				$('.inputTrafficSearch' + pk + 'SearchVehicle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'SearchVehicle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'SearchVehicle'));
			}
			var val = o['searchDriver'];
			if(vars.includes('searchDriver')) {
				$('.inputTrafficSearch' + pk + 'SearchDriver').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'SearchDriver').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'SearchDriver'));
			}
			var val = o['searchPassenger'];
			if(vars.includes('searchPassenger')) {
				$('.inputTrafficSearch' + pk + 'SearchPassenger').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'SearchPassenger').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'SearchPassenger'));
			}
			var val = o['searchProperty'];
			if(vars.includes('searchProperty')) {
				$('.inputTrafficSearch' + pk + 'SearchProperty').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'SearchProperty').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'SearchProperty'));
			}
			var val = o['searchVehicleSiezed'];
			if(vars.includes('searchVehicleSiezed')) {
				$('.inputTrafficSearch' + pk + 'SearchVehicleSiezed').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'SearchVehicleSiezed').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'SearchVehicleSiezed'));
			}
			var val = o['searchPersonalPropertySiezed'];
			if(vars.includes('searchPersonalPropertySiezed')) {
				$('.inputTrafficSearch' + pk + 'SearchPersonalPropertySiezed').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'SearchPersonalPropertySiezed').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'SearchPersonalPropertySiezed'));
			}
			var val = o['searchOtherPropertySiezed'];
			if(vars.includes('searchOtherPropertySiezed')) {
				$('.inputTrafficSearch' + pk + 'SearchOtherPropertySiezed').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'SearchOtherPropertySiezed').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'SearchOtherPropertySiezed'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputTrafficSearch' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'InheritPk'));
			}
			var val = o['id'];
			if(vars.includes('id')) {
				$('.inputTrafficSearch' + pk + 'Id').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'Id').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'Id'));
			}
			var val = o['modifiedIsoOffsetDateTime'];
			if(vars.includes('modifiedIsoOffsetDateTime')) {
				$('.inputTrafficSearch' + pk + 'ModifiedIsoOffsetDateTime').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'ModifiedIsoOffsetDateTime').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'ModifiedIsoOffsetDateTime'));
			}
			var val = o['classCanonicalName'];
			if(vars.includes('classCanonicalName')) {
				$('.inputTrafficSearch' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'ClassCanonicalName'));
			}
			var val = o['classSimpleName'];
			if(vars.includes('classSimpleName')) {
				$('.inputTrafficSearch' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'ClassSimpleName'));
			}
			var val = o['classCanonicalNames'];
			if(vars.includes('classCanonicalNames')) {
				$('.inputTrafficSearch' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'ClassCanonicalNames'));
			}
			var val = o['sessionId'];
			if(vars.includes('sessionId')) {
				$('.inputTrafficSearch' + pk + 'SessionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'SessionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'SessionId'));
			}
			var val = o['userId'];
			if(vars.includes('userId')) {
				$('.inputTrafficSearch' + pk + 'UserId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'UserId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'UserId'));
			}
			var val = o['userKey'];
			if(vars.includes('userKey')) {
				$('.inputTrafficSearch' + pk + 'UserKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'UserKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'UserKey'));
			}
			var val = o['saves'];
			if(vars.includes('saves')) {
				$('.inputTrafficSearch' + pk + 'Saves').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'Saves').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'Saves'));
			}
			var val = o['objectTitle'];
			if(vars.includes('objectTitle')) {
				$('.inputTrafficSearch' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'ObjectTitle'));
			}
			var val = o['objectId'];
			if(vars.includes('objectId')) {
				$('.inputTrafficSearch' + pk + 'ObjectId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'ObjectId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'ObjectId'));
			}
			var val = o['objectSuggest'];
			if(vars.includes('objectSuggest')) {
				$('.inputTrafficSearch' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'ObjectSuggest'));
			}
			var val = o['objectText'];
			if(vars.includes('objectText')) {
				$('.inputTrafficSearch' + pk + 'ObjectText').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'ObjectText').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'ObjectText'));
			}
			var val = o['pageUrlId'];
			if(vars.includes('pageUrlId')) {
				$('.inputTrafficSearch' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'PageUrlId'));
			}
			var val = o['pageUrlPk'];
			if(vars.includes('pageUrlPk')) {
				$('.inputTrafficSearch' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'PageUrlPk'));
			}
			var val = o['trafficSearchKey'];
			if(vars.includes('trafficSearchKey')) {
				$('.inputTrafficSearch' + pk + 'TrafficSearchKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'TrafficSearchKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'TrafficSearchKey'));
			}
			var val = o['stopAgencyTitle'];
			if(vars.includes('stopAgencyTitle')) {
				$('.inputTrafficSearch' + pk + 'StopAgencyTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'StopAgencyTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'StopAgencyTitle'));
			}
			var val = o['stopDateTime'];
			if(vars.includes('stopDateTime')) {
				$('.inputTrafficSearch' + pk + 'StopDateTime').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'StopDateTime').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'StopDateTime'));
			}
			var val = o['stopPurposeNum'];
			if(vars.includes('stopPurposeNum')) {
				$('.inputTrafficSearch' + pk + 'StopPurposeNum').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'StopPurposeNum').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'StopPurposeNum'));
			}
			var val = o['stopPurposeTitle'];
			if(vars.includes('stopPurposeTitle')) {
				$('.inputTrafficSearch' + pk + 'StopPurposeTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'StopPurposeTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'StopPurposeTitle'));
			}
			var val = o['stopActionNum'];
			if(vars.includes('stopActionNum')) {
				$('.inputTrafficSearch' + pk + 'StopActionNum').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'StopActionNum').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'StopActionNum'));
			}
			var val = o['stopActionTitle'];
			if(vars.includes('stopActionTitle')) {
				$('.inputTrafficSearch' + pk + 'StopActionTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'StopActionTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'StopActionTitle'));
			}
			var val = o['stopDriverArrest'];
			if(vars.includes('stopDriverArrest')) {
				$('.inputTrafficSearch' + pk + 'StopDriverArrest').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'StopDriverArrest').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'StopDriverArrest'));
			}
			var val = o['stopPassengerArrest'];
			if(vars.includes('stopPassengerArrest')) {
				$('.inputTrafficSearch' + pk + 'StopPassengerArrest').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'StopPassengerArrest').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'StopPassengerArrest'));
			}
			var val = o['stopEncounterForce'];
			if(vars.includes('stopEncounterForce')) {
				$('.inputTrafficSearch' + pk + 'StopEncounterForce').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'StopEncounterForce').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'StopEncounterForce'));
			}
			var val = o['stopEngageForce'];
			if(vars.includes('stopEngageForce')) {
				$('.inputTrafficSearch' + pk + 'StopEngageForce').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'StopEngageForce').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'StopEngageForce'));
			}
			var val = o['stopOfficerInjury'];
			if(vars.includes('stopOfficerInjury')) {
				$('.inputTrafficSearch' + pk + 'StopOfficerInjury').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'StopOfficerInjury').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'StopOfficerInjury'));
			}
			var val = o['stopDriverInjury'];
			if(vars.includes('stopDriverInjury')) {
				$('.inputTrafficSearch' + pk + 'StopDriverInjury').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'StopDriverInjury').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'StopDriverInjury'));
			}
			var val = o['stopPassengerInjury'];
			if(vars.includes('stopPassengerInjury')) {
				$('.inputTrafficSearch' + pk + 'StopPassengerInjury').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'StopPassengerInjury').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'StopPassengerInjury'));
			}
			var val = o['stopOfficerId'];
			if(vars.includes('stopOfficerId')) {
				$('.inputTrafficSearch' + pk + 'StopOfficerId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'StopOfficerId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'StopOfficerId'));
			}
			var val = o['stopLocationId'];
			if(vars.includes('stopLocationId')) {
				$('.inputTrafficSearch' + pk + 'StopLocationId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'StopLocationId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'StopLocationId'));
			}
			var val = o['stopCityId'];
			if(vars.includes('stopCityId')) {
				$('.inputTrafficSearch' + pk + 'StopCityId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'StopCityId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'StopCityId'));
			}
			var val = o['personAge'];
			if(vars.includes('personAge')) {
				$('.inputTrafficSearch' + pk + 'PersonAge').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'PersonAge').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'PersonAge'));
			}
			var val = o['personTypeId'];
			if(vars.includes('personTypeId')) {
				$('.inputTrafficSearch' + pk + 'PersonTypeId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'PersonTypeId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'PersonTypeId'));
			}
			var val = o['personTypeTitle'];
			if(vars.includes('personTypeTitle')) {
				$('.inputTrafficSearch' + pk + 'PersonTypeTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'PersonTypeTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'PersonTypeTitle'));
			}
			var val = o['personTypeDriver'];
			if(vars.includes('personTypeDriver')) {
				$('.inputTrafficSearch' + pk + 'PersonTypeDriver').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'PersonTypeDriver').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'PersonTypeDriver'));
			}
			var val = o['personTypePassenger'];
			if(vars.includes('personTypePassenger')) {
				$('.inputTrafficSearch' + pk + 'PersonTypePassenger').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'PersonTypePassenger').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'PersonTypePassenger'));
			}
			var val = o['personGenderId'];
			if(vars.includes('personGenderId')) {
				$('.inputTrafficSearch' + pk + 'PersonGenderId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'PersonGenderId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'PersonGenderId'));
			}
			var val = o['personGenderTitle'];
			if(vars.includes('personGenderTitle')) {
				$('.inputTrafficSearch' + pk + 'PersonGenderTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'PersonGenderTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'PersonGenderTitle'));
			}
			var val = o['personGenderFemale'];
			if(vars.includes('personGenderFemale')) {
				$('.inputTrafficSearch' + pk + 'PersonGenderFemale').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'PersonGenderFemale').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'PersonGenderFemale'));
			}
			var val = o['personGenderMale'];
			if(vars.includes('personGenderMale')) {
				$('.inputTrafficSearch' + pk + 'PersonGenderMale').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'PersonGenderMale').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'PersonGenderMale'));
			}
			var val = o['personEthnicityId'];
			if(vars.includes('personEthnicityId')) {
				$('.inputTrafficSearch' + pk + 'PersonEthnicityId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'PersonEthnicityId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'PersonEthnicityId'));
			}
			var val = o['personEthnicityTitle'];
			if(vars.includes('personEthnicityTitle')) {
				$('.inputTrafficSearch' + pk + 'PersonEthnicityTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'PersonEthnicityTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'PersonEthnicityTitle'));
			}
			var val = o['personRaceId'];
			if(vars.includes('personRaceId')) {
				$('.inputTrafficSearch' + pk + 'PersonRaceId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'PersonRaceId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'PersonRaceId'));
			}
			var val = o['personRaceTitle'];
			if(vars.includes('personRaceTitle')) {
				$('.inputTrafficSearch' + pk + 'PersonRaceTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'PersonRaceTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'PersonRaceTitle'));
			}
			var val = o['trafficStopKey'];
			if(vars.includes('trafficStopKey')) {
				$('.inputTrafficSearch' + pk + 'TrafficStopKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'TrafficStopKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'TrafficStopKey'));
			}
			var val = o['searchTypeNum'];
			if(vars.includes('searchTypeNum')) {
				$('.inputTrafficSearch' + pk + 'SearchTypeNum').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'SearchTypeNum').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'SearchTypeNum'));
			}
			var val = o['trafficSearchCompleteName'];
			if(vars.includes('trafficSearchCompleteName')) {
				$('.inputTrafficSearch' + pk + 'TrafficSearchCompleteName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficSearch' + pk + 'TrafficSearchCompleteName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficSearch' + pk + 'TrafficSearchCompleteName'));
			}
		});
	}
}
