
// PUTImport //

async function putimportTrafficContraband($formValues, pk, success, error) {
	var json = $formValues.find('.PUTImport_list').val();
	if(json != null && json !== '')
		putimportTrafficContrabandVals(JSON.parse(json), success, error);
}

function putimportTrafficContrabandVals(json, success, error) {
	$.ajax({
		url: '/api/contraband/import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTMerge //

async function putmergeTrafficContraband($formValues, pk, success, error) {
	var json = $formValues.find('.PUTMerge_list').val();
	if(json != null && json !== '')
		putmergeTrafficContrabandVals(JSON.parse(json), success, error);
}

function putmergeTrafficContrabandVals(json, success, error) {
	$.ajax({
		url: '/api/contraband/merge'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTCopy //

async function putcopyTrafficContraband($formValues, pk, success, error) {
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

	var valueSearchKey = $formValues.find('input.valueSearchKey:checked').val();
	var valueSearchKeyClear = $formValues.find('input.searchKey_clear:checked').val();
	if(valueSearchKeyClear != null && valueSearchKeyClear)
		vals['searchKey'] = null;
	else if(valueSearchKey != null && valueSearchKey)
		vals['searchKey'] = valueSearchKey;

	var valueContrabandOunces = $formValues.find('.valueContrabandOunces').val();
	if(valueContrabandOunces != null && valueContrabandOunces !== '')
		vals['contrabandOunces'] = valueContrabandOunces;

	var valueContrabandPounds = $formValues.find('.valueContrabandPounds').val();
	if(valueContrabandPounds != null && valueContrabandPounds !== '')
		vals['contrabandPounds'] = valueContrabandPounds;

	var valueContrabandPints = $formValues.find('.valueContrabandPints').val();
	if(valueContrabandPints != null && valueContrabandPints !== '')
		vals['contrabandPints'] = valueContrabandPints;

	var valueContrabandGallons = $formValues.find('.valueContrabandGallons').val();
	if(valueContrabandGallons != null && valueContrabandGallons !== '')
		vals['contrabandGallons'] = valueContrabandGallons;

	var valueContrabandDosages = $formValues.find('.valueContrabandDosages').val();
	if(valueContrabandDosages != null && valueContrabandDosages !== '')
		vals['contrabandDosages'] = valueContrabandDosages;

	var valueContrabandGrams = $formValues.find('.valueContrabandGrams').val();
	if(valueContrabandGrams != null && valueContrabandGrams !== '')
		vals['contrabandGrams'] = valueContrabandGrams;

	var valueContrabandKilos = $formValues.find('.valueContrabandKilos').val();
	if(valueContrabandKilos != null && valueContrabandKilos !== '')
		vals['contrabandKilos'] = valueContrabandKilos;

	var valueContrabandMoney = $formValues.find('.valueContrabandMoney').val();
	if(valueContrabandMoney != null && valueContrabandMoney !== '')
		vals['contrabandMoney'] = valueContrabandMoney;

	var valueContrabandWeapons = $formValues.find('.valueContrabandWeapons').val();
	if(valueContrabandWeapons != null && valueContrabandWeapons !== '')
		vals['contrabandWeapons'] = valueContrabandWeapons;

	var valueContrabandDollarAmount = $formValues.find('.valueContrabandDollarAmount').val();
	if(valueContrabandDollarAmount != null && valueContrabandDollarAmount !== '')
		vals['contrabandDollarAmount'] = valueContrabandDollarAmount;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	if(valueInheritPk != null && valueInheritPk !== '')
		vals['inheritPk'] = valueInheritPk;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	putcopyTrafficContrabandVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function putcopyTrafficContrabandVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/contraband/copy?' + $.param(filters)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify({patch: vals})
		, success: success
		, error: error
	});
}

// POST //

async function postTrafficContraband($formValues, success, error) {
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

	var valueSearchKey = $formValues.find('.valueSearchKey').val();
	if(valueSearchKey != null && valueSearchKey !== '')
		vals['searchKey'] = valueSearchKey;

	var valueContrabandOunces = $formValues.find('.valueContrabandOunces').val();
	if(valueContrabandOunces != null && valueContrabandOunces !== '')
		vals['contrabandOunces'] = valueContrabandOunces;

	var valueContrabandPounds = $formValues.find('.valueContrabandPounds').val();
	if(valueContrabandPounds != null && valueContrabandPounds !== '')
		vals['contrabandPounds'] = valueContrabandPounds;

	var valueContrabandPints = $formValues.find('.valueContrabandPints').val();
	if(valueContrabandPints != null && valueContrabandPints !== '')
		vals['contrabandPints'] = valueContrabandPints;

	var valueContrabandGallons = $formValues.find('.valueContrabandGallons').val();
	if(valueContrabandGallons != null && valueContrabandGallons !== '')
		vals['contrabandGallons'] = valueContrabandGallons;

	var valueContrabandDosages = $formValues.find('.valueContrabandDosages').val();
	if(valueContrabandDosages != null && valueContrabandDosages !== '')
		vals['contrabandDosages'] = valueContrabandDosages;

	var valueContrabandGrams = $formValues.find('.valueContrabandGrams').val();
	if(valueContrabandGrams != null && valueContrabandGrams !== '')
		vals['contrabandGrams'] = valueContrabandGrams;

	var valueContrabandKilos = $formValues.find('.valueContrabandKilos').val();
	if(valueContrabandKilos != null && valueContrabandKilos !== '')
		vals['contrabandKilos'] = valueContrabandKilos;

	var valueContrabandMoney = $formValues.find('.valueContrabandMoney').val();
	if(valueContrabandMoney != null && valueContrabandMoney !== '')
		vals['contrabandMoney'] = valueContrabandMoney;

	var valueContrabandWeapons = $formValues.find('.valueContrabandWeapons').val();
	if(valueContrabandWeapons != null && valueContrabandWeapons !== '')
		vals['contrabandWeapons'] = valueContrabandWeapons;

	var valueContrabandDollarAmount = $formValues.find('.valueContrabandDollarAmount').val();
	if(valueContrabandDollarAmount != null && valueContrabandDollarAmount !== '')
		vals['contrabandDollarAmount'] = valueContrabandDollarAmount;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	if(valueInheritPk != null && valueInheritPk !== '')
		vals['inheritPk'] = valueInheritPk;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	$.ajax({
		url: '/api/contraband'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postTrafficContrabandVals(vals, success, error) {
	$.ajax({
		url: '/api/contraband'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PATCH //

async function patchTrafficContraband($formFilters, $formValues, pk, success, error) {
	var filters = patchTrafficContrabandFilters($formFilters);

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

	var valueSearchKey = $formValues.find('input.valueSearchKey:checked').val();
	if(valueSearchKey != null && valueSearchKey !== '')
		vals['setSearchKey'] = valueSearchKey;

	var valueContrabandOunces = $formValues.find('.valueContrabandOunces').val();
	var removeContrabandOunces = $formValues.find('.removeContrabandOunces').val() === 'true';
	var setContrabandOunces = removeContrabandOunces ? null : $formValues.find('.setContrabandOunces').val();
	var addContrabandOunces = $formValues.find('.addContrabandOunces').val();
	if(removeContrabandOunces || setContrabandOunces != null && setContrabandOunces !== '')
		vals['setContrabandOunces'] = setContrabandOunces;
	if(addContrabandOunces != null && addContrabandOunces !== '')
		vals['addContrabandOunces'] = addContrabandOunces;
	var removeContrabandOunces = $formValues.find('.removeContrabandOunces').val();
	if(removeContrabandOunces != null && removeContrabandOunces !== '')
		vals['removeContrabandOunces'] = removeContrabandOunces;

	var valueContrabandPounds = $formValues.find('.valueContrabandPounds').val();
	var removeContrabandPounds = $formValues.find('.removeContrabandPounds').val() === 'true';
	var setContrabandPounds = removeContrabandPounds ? null : $formValues.find('.setContrabandPounds').val();
	var addContrabandPounds = $formValues.find('.addContrabandPounds').val();
	if(removeContrabandPounds || setContrabandPounds != null && setContrabandPounds !== '')
		vals['setContrabandPounds'] = setContrabandPounds;
	if(addContrabandPounds != null && addContrabandPounds !== '')
		vals['addContrabandPounds'] = addContrabandPounds;
	var removeContrabandPounds = $formValues.find('.removeContrabandPounds').val();
	if(removeContrabandPounds != null && removeContrabandPounds !== '')
		vals['removeContrabandPounds'] = removeContrabandPounds;

	var valueContrabandPints = $formValues.find('.valueContrabandPints').val();
	var removeContrabandPints = $formValues.find('.removeContrabandPints').val() === 'true';
	var setContrabandPints = removeContrabandPints ? null : $formValues.find('.setContrabandPints').val();
	var addContrabandPints = $formValues.find('.addContrabandPints').val();
	if(removeContrabandPints || setContrabandPints != null && setContrabandPints !== '')
		vals['setContrabandPints'] = setContrabandPints;
	if(addContrabandPints != null && addContrabandPints !== '')
		vals['addContrabandPints'] = addContrabandPints;
	var removeContrabandPints = $formValues.find('.removeContrabandPints').val();
	if(removeContrabandPints != null && removeContrabandPints !== '')
		vals['removeContrabandPints'] = removeContrabandPints;

	var valueContrabandGallons = $formValues.find('.valueContrabandGallons').val();
	var removeContrabandGallons = $formValues.find('.removeContrabandGallons').val() === 'true';
	var setContrabandGallons = removeContrabandGallons ? null : $formValues.find('.setContrabandGallons').val();
	var addContrabandGallons = $formValues.find('.addContrabandGallons').val();
	if(removeContrabandGallons || setContrabandGallons != null && setContrabandGallons !== '')
		vals['setContrabandGallons'] = setContrabandGallons;
	if(addContrabandGallons != null && addContrabandGallons !== '')
		vals['addContrabandGallons'] = addContrabandGallons;
	var removeContrabandGallons = $formValues.find('.removeContrabandGallons').val();
	if(removeContrabandGallons != null && removeContrabandGallons !== '')
		vals['removeContrabandGallons'] = removeContrabandGallons;

	var valueContrabandDosages = $formValues.find('.valueContrabandDosages').val();
	var removeContrabandDosages = $formValues.find('.removeContrabandDosages').val() === 'true';
	var setContrabandDosages = removeContrabandDosages ? null : $formValues.find('.setContrabandDosages').val();
	var addContrabandDosages = $formValues.find('.addContrabandDosages').val();
	if(removeContrabandDosages || setContrabandDosages != null && setContrabandDosages !== '')
		vals['setContrabandDosages'] = setContrabandDosages;
	if(addContrabandDosages != null && addContrabandDosages !== '')
		vals['addContrabandDosages'] = addContrabandDosages;
	var removeContrabandDosages = $formValues.find('.removeContrabandDosages').val();
	if(removeContrabandDosages != null && removeContrabandDosages !== '')
		vals['removeContrabandDosages'] = removeContrabandDosages;

	var valueContrabandGrams = $formValues.find('.valueContrabandGrams').val();
	var removeContrabandGrams = $formValues.find('.removeContrabandGrams').val() === 'true';
	var setContrabandGrams = removeContrabandGrams ? null : $formValues.find('.setContrabandGrams').val();
	var addContrabandGrams = $formValues.find('.addContrabandGrams').val();
	if(removeContrabandGrams || setContrabandGrams != null && setContrabandGrams !== '')
		vals['setContrabandGrams'] = setContrabandGrams;
	if(addContrabandGrams != null && addContrabandGrams !== '')
		vals['addContrabandGrams'] = addContrabandGrams;
	var removeContrabandGrams = $formValues.find('.removeContrabandGrams').val();
	if(removeContrabandGrams != null && removeContrabandGrams !== '')
		vals['removeContrabandGrams'] = removeContrabandGrams;

	var valueContrabandKilos = $formValues.find('.valueContrabandKilos').val();
	var removeContrabandKilos = $formValues.find('.removeContrabandKilos').val() === 'true';
	var setContrabandKilos = removeContrabandKilos ? null : $formValues.find('.setContrabandKilos').val();
	var addContrabandKilos = $formValues.find('.addContrabandKilos').val();
	if(removeContrabandKilos || setContrabandKilos != null && setContrabandKilos !== '')
		vals['setContrabandKilos'] = setContrabandKilos;
	if(addContrabandKilos != null && addContrabandKilos !== '')
		vals['addContrabandKilos'] = addContrabandKilos;
	var removeContrabandKilos = $formValues.find('.removeContrabandKilos').val();
	if(removeContrabandKilos != null && removeContrabandKilos !== '')
		vals['removeContrabandKilos'] = removeContrabandKilos;

	var valueContrabandMoney = $formValues.find('.valueContrabandMoney').val();
	var removeContrabandMoney = $formValues.find('.removeContrabandMoney').val() === 'true';
	var setContrabandMoney = removeContrabandMoney ? null : $formValues.find('.setContrabandMoney').val();
	var addContrabandMoney = $formValues.find('.addContrabandMoney').val();
	if(removeContrabandMoney || setContrabandMoney != null && setContrabandMoney !== '')
		vals['setContrabandMoney'] = setContrabandMoney;
	if(addContrabandMoney != null && addContrabandMoney !== '')
		vals['addContrabandMoney'] = addContrabandMoney;
	var removeContrabandMoney = $formValues.find('.removeContrabandMoney').val();
	if(removeContrabandMoney != null && removeContrabandMoney !== '')
		vals['removeContrabandMoney'] = removeContrabandMoney;

	var valueContrabandWeapons = $formValues.find('.valueContrabandWeapons').val();
	var removeContrabandWeapons = $formValues.find('.removeContrabandWeapons').val() === 'true';
	var setContrabandWeapons = removeContrabandWeapons ? null : $formValues.find('.setContrabandWeapons').val();
	var addContrabandWeapons = $formValues.find('.addContrabandWeapons').val();
	if(removeContrabandWeapons || setContrabandWeapons != null && setContrabandWeapons !== '')
		vals['setContrabandWeapons'] = setContrabandWeapons;
	if(addContrabandWeapons != null && addContrabandWeapons !== '')
		vals['addContrabandWeapons'] = addContrabandWeapons;
	var removeContrabandWeapons = $formValues.find('.removeContrabandWeapons').val();
	if(removeContrabandWeapons != null && removeContrabandWeapons !== '')
		vals['removeContrabandWeapons'] = removeContrabandWeapons;

	var valueContrabandDollarAmount = $formValues.find('.valueContrabandDollarAmount').val();
	var removeContrabandDollarAmount = $formValues.find('.removeContrabandDollarAmount').val() === 'true';
	var setContrabandDollarAmount = removeContrabandDollarAmount ? null : $formValues.find('.setContrabandDollarAmount').val();
	var addContrabandDollarAmount = $formValues.find('.addContrabandDollarAmount').val();
	if(removeContrabandDollarAmount || setContrabandDollarAmount != null && setContrabandDollarAmount !== '')
		vals['setContrabandDollarAmount'] = setContrabandDollarAmount;
	if(addContrabandDollarAmount != null && addContrabandDollarAmount !== '')
		vals['addContrabandDollarAmount'] = addContrabandDollarAmount;
	var removeContrabandDollarAmount = $formValues.find('.removeContrabandDollarAmount').val();
	if(removeContrabandDollarAmount != null && removeContrabandDollarAmount !== '')
		vals['removeContrabandDollarAmount'] = removeContrabandDollarAmount;

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

	patchTrafficContrabandVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchTrafficContrabandFilters($formFilters) {
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

		var filterSearchKey = $formFilters.find('.valueSearchKey').val();
		if(filterSearchKey != null && filterSearchKey !== '')
			filters.push({ name: 'fq', value: 'searchKey:' + filterSearchKey });

		var filterContrabandOunces = $formFilters.find('.valueContrabandOunces').val();
		if(filterContrabandOunces != null && filterContrabandOunces !== '')
			filters.push({ name: 'fq', value: 'contrabandOunces:' + filterContrabandOunces });

		var filterContrabandPounds = $formFilters.find('.valueContrabandPounds').val();
		if(filterContrabandPounds != null && filterContrabandPounds !== '')
			filters.push({ name: 'fq', value: 'contrabandPounds:' + filterContrabandPounds });

		var filterContrabandPints = $formFilters.find('.valueContrabandPints').val();
		if(filterContrabandPints != null && filterContrabandPints !== '')
			filters.push({ name: 'fq', value: 'contrabandPints:' + filterContrabandPints });

		var filterContrabandGallons = $formFilters.find('.valueContrabandGallons').val();
		if(filterContrabandGallons != null && filterContrabandGallons !== '')
			filters.push({ name: 'fq', value: 'contrabandGallons:' + filterContrabandGallons });

		var filterContrabandDosages = $formFilters.find('.valueContrabandDosages').val();
		if(filterContrabandDosages != null && filterContrabandDosages !== '')
			filters.push({ name: 'fq', value: 'contrabandDosages:' + filterContrabandDosages });

		var filterContrabandGrams = $formFilters.find('.valueContrabandGrams').val();
		if(filterContrabandGrams != null && filterContrabandGrams !== '')
			filters.push({ name: 'fq', value: 'contrabandGrams:' + filterContrabandGrams });

		var filterContrabandKilos = $formFilters.find('.valueContrabandKilos').val();
		if(filterContrabandKilos != null && filterContrabandKilos !== '')
			filters.push({ name: 'fq', value: 'contrabandKilos:' + filterContrabandKilos });

		var filterContrabandMoney = $formFilters.find('.valueContrabandMoney').val();
		if(filterContrabandMoney != null && filterContrabandMoney !== '')
			filters.push({ name: 'fq', value: 'contrabandMoney:' + filterContrabandMoney });

		var filterContrabandWeapons = $formFilters.find('.valueContrabandWeapons').val();
		if(filterContrabandWeapons != null && filterContrabandWeapons !== '')
			filters.push({ name: 'fq', value: 'contrabandWeapons:' + filterContrabandWeapons });

		var filterContrabandDollarAmount = $formFilters.find('.valueContrabandDollarAmount').val();
		if(filterContrabandDollarAmount != null && filterContrabandDollarAmount !== '')
			filters.push({ name: 'fq', value: 'contrabandDollarAmount:' + filterContrabandDollarAmount });

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

		var filterContrabandKey = $formFilters.find('.valueContrabandKey').val();
		if(filterContrabandKey != null && filterContrabandKey !== '')
			filters.push({ name: 'fq', value: 'contrabandKey:' + filterContrabandKey });

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
	}
	return filters;
}

function patchTrafficContrabandVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchTrafficContrabandVals(filters, vals, success, error);
}

function patchTrafficContrabandVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/contraband?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getTrafficContraband(pk) {
	$.ajax({
		url: '/api/contraband/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Search //

async function searchTrafficContraband($formFilters, success, error) {
	var filters = searchTrafficContrabandFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchTrafficContrabandVals(filters, success, error);
}

function searchTrafficContrabandFilters($formFilters) {
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

		var filterSearchKey = $formFilters.find('.valueSearchKey').val();
		if(filterSearchKey != null && filterSearchKey !== '')
			filters.push({ name: 'fq', value: 'searchKey:' + filterSearchKey });

		var filterContrabandOunces = $formFilters.find('.valueContrabandOunces').val();
		if(filterContrabandOunces != null && filterContrabandOunces !== '')
			filters.push({ name: 'fq', value: 'contrabandOunces:' + filterContrabandOunces });

		var filterContrabandPounds = $formFilters.find('.valueContrabandPounds').val();
		if(filterContrabandPounds != null && filterContrabandPounds !== '')
			filters.push({ name: 'fq', value: 'contrabandPounds:' + filterContrabandPounds });

		var filterContrabandPints = $formFilters.find('.valueContrabandPints').val();
		if(filterContrabandPints != null && filterContrabandPints !== '')
			filters.push({ name: 'fq', value: 'contrabandPints:' + filterContrabandPints });

		var filterContrabandGallons = $formFilters.find('.valueContrabandGallons').val();
		if(filterContrabandGallons != null && filterContrabandGallons !== '')
			filters.push({ name: 'fq', value: 'contrabandGallons:' + filterContrabandGallons });

		var filterContrabandDosages = $formFilters.find('.valueContrabandDosages').val();
		if(filterContrabandDosages != null && filterContrabandDosages !== '')
			filters.push({ name: 'fq', value: 'contrabandDosages:' + filterContrabandDosages });

		var filterContrabandGrams = $formFilters.find('.valueContrabandGrams').val();
		if(filterContrabandGrams != null && filterContrabandGrams !== '')
			filters.push({ name: 'fq', value: 'contrabandGrams:' + filterContrabandGrams });

		var filterContrabandKilos = $formFilters.find('.valueContrabandKilos').val();
		if(filterContrabandKilos != null && filterContrabandKilos !== '')
			filters.push({ name: 'fq', value: 'contrabandKilos:' + filterContrabandKilos });

		var filterContrabandMoney = $formFilters.find('.valueContrabandMoney').val();
		if(filterContrabandMoney != null && filterContrabandMoney !== '')
			filters.push({ name: 'fq', value: 'contrabandMoney:' + filterContrabandMoney });

		var filterContrabandWeapons = $formFilters.find('.valueContrabandWeapons').val();
		if(filterContrabandWeapons != null && filterContrabandWeapons !== '')
			filters.push({ name: 'fq', value: 'contrabandWeapons:' + filterContrabandWeapons });

		var filterContrabandDollarAmount = $formFilters.find('.valueContrabandDollarAmount').val();
		if(filterContrabandDollarAmount != null && filterContrabandDollarAmount !== '')
			filters.push({ name: 'fq', value: 'contrabandDollarAmount:' + filterContrabandDollarAmount });

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

		var filterContrabandKey = $formFilters.find('.valueContrabandKey').val();
		if(filterContrabandKey != null && filterContrabandKey !== '')
			filters.push({ name: 'fq', value: 'contrabandKey:' + filterContrabandKey });

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
	}
	return filters;
}

function searchTrafficContrabandVals(filters, success, error) {
	$.ajax({
		url: '/api/contraband?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestTrafficContrabandSearchKey(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-newspaper ');
			var $span = $('<span>').attr('class', '').text(o['objectTitle']);
			var $a = $('<span>');
			$a.append($i);
			$a.append($span);
			var val = o['contrabandKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_searchKey_' + pk + '_contrabandKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueSearchKey w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_searchKey_" + pk + "_contrabandKeys_" + o['pk'] + "'); patchTrafficContrabandVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'SearchKey']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#TrafficContrabandForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchTrafficSearchVals(filters, success, error);
}

// AdminSearch //

async function adminsearchTrafficContraband($formFilters, success, error) {
	var filters = adminsearchTrafficContrabandFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	adminsearchTrafficContrabandVals(filters, success, error);
}

function adminsearchTrafficContrabandFilters($formFilters) {
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

		var filterSearchKey = $formFilters.find('.valueSearchKey').val();
		if(filterSearchKey != null && filterSearchKey !== '')
			filters.push({ name: 'fq', value: 'searchKey:' + filterSearchKey });

		var filterContrabandOunces = $formFilters.find('.valueContrabandOunces').val();
		if(filterContrabandOunces != null && filterContrabandOunces !== '')
			filters.push({ name: 'fq', value: 'contrabandOunces:' + filterContrabandOunces });

		var filterContrabandPounds = $formFilters.find('.valueContrabandPounds').val();
		if(filterContrabandPounds != null && filterContrabandPounds !== '')
			filters.push({ name: 'fq', value: 'contrabandPounds:' + filterContrabandPounds });

		var filterContrabandPints = $formFilters.find('.valueContrabandPints').val();
		if(filterContrabandPints != null && filterContrabandPints !== '')
			filters.push({ name: 'fq', value: 'contrabandPints:' + filterContrabandPints });

		var filterContrabandGallons = $formFilters.find('.valueContrabandGallons').val();
		if(filterContrabandGallons != null && filterContrabandGallons !== '')
			filters.push({ name: 'fq', value: 'contrabandGallons:' + filterContrabandGallons });

		var filterContrabandDosages = $formFilters.find('.valueContrabandDosages').val();
		if(filterContrabandDosages != null && filterContrabandDosages !== '')
			filters.push({ name: 'fq', value: 'contrabandDosages:' + filterContrabandDosages });

		var filterContrabandGrams = $formFilters.find('.valueContrabandGrams').val();
		if(filterContrabandGrams != null && filterContrabandGrams !== '')
			filters.push({ name: 'fq', value: 'contrabandGrams:' + filterContrabandGrams });

		var filterContrabandKilos = $formFilters.find('.valueContrabandKilos').val();
		if(filterContrabandKilos != null && filterContrabandKilos !== '')
			filters.push({ name: 'fq', value: 'contrabandKilos:' + filterContrabandKilos });

		var filterContrabandMoney = $formFilters.find('.valueContrabandMoney').val();
		if(filterContrabandMoney != null && filterContrabandMoney !== '')
			filters.push({ name: 'fq', value: 'contrabandMoney:' + filterContrabandMoney });

		var filterContrabandWeapons = $formFilters.find('.valueContrabandWeapons').val();
		if(filterContrabandWeapons != null && filterContrabandWeapons !== '')
			filters.push({ name: 'fq', value: 'contrabandWeapons:' + filterContrabandWeapons });

		var filterContrabandDollarAmount = $formFilters.find('.valueContrabandDollarAmount').val();
		if(filterContrabandDollarAmount != null && filterContrabandDollarAmount !== '')
			filters.push({ name: 'fq', value: 'contrabandDollarAmount:' + filterContrabandDollarAmount });

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

		var filterContrabandKey = $formFilters.find('.valueContrabandKey').val();
		if(filterContrabandKey != null && filterContrabandKey !== '')
			filters.push({ name: 'fq', value: 'contrabandKey:' + filterContrabandKey });

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
	}
	return filters;
}

function adminsearchTrafficContrabandVals(filters, success, error) {
	$.ajax({
		url: '/api/admin/contraband?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestTrafficContrabandSearchKey(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-newspaper ');
			var $span = $('<span>').attr('class', '').text(o['objectTitle']);
			var $a = $('<span>');
			$a.append($i);
			$a.append($span);
			var val = o['contrabandKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_searchKey_' + pk + '_contrabandKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueSearchKey w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_searchKey_" + pk + "_contrabandKeys_" + o['pk'] + "'); patchTrafficContrabandVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'SearchKey']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#TrafficContrabandForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchTrafficSearchVals(filters, success, error);
}

async function websocketTrafficContraband(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketTrafficContraband', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pkPage = $('#TrafficContrabandForm :input[name=pk]').val();
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
			var $headerSpan = $('<span>').attr('class', '').text('modify contrabands' + id);
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
async function websocketTrafficContrabandInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchTrafficContrabandVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['pk'];
			if(vars.includes('pk')) {
				$('.inputTrafficContraband' + pk + 'Pk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'Pk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'Pk'));
			}
			var val = o['created'];
			if(vars.includes('created')) {
				$('.inputTrafficContraband' + pk + 'Created').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'Created').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'Created'));
			}
			var val = o['modified'];
			if(vars.includes('modified')) {
				$('.inputTrafficContraband' + pk + 'Modified').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'Modified').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'Modified'));
			}
			var val = o['searchKey'];
			if(vars.includes('searchKey')) {
				$('.inputTrafficContraband' + pk + 'SearchKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'SearchKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'SearchKey'));
			}
			var val = o['contrabandOunces'];
			if(vars.includes('contrabandOunces')) {
				$('.inputTrafficContraband' + pk + 'ContrabandOunces').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'ContrabandOunces').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'ContrabandOunces'));
			}
			var val = o['contrabandPounds'];
			if(vars.includes('contrabandPounds')) {
				$('.inputTrafficContraband' + pk + 'ContrabandPounds').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'ContrabandPounds').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'ContrabandPounds'));
			}
			var val = o['contrabandPints'];
			if(vars.includes('contrabandPints')) {
				$('.inputTrafficContraband' + pk + 'ContrabandPints').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'ContrabandPints').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'ContrabandPints'));
			}
			var val = o['contrabandGallons'];
			if(vars.includes('contrabandGallons')) {
				$('.inputTrafficContraband' + pk + 'ContrabandGallons').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'ContrabandGallons').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'ContrabandGallons'));
			}
			var val = o['contrabandDosages'];
			if(vars.includes('contrabandDosages')) {
				$('.inputTrafficContraband' + pk + 'ContrabandDosages').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'ContrabandDosages').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'ContrabandDosages'));
			}
			var val = o['contrabandGrams'];
			if(vars.includes('contrabandGrams')) {
				$('.inputTrafficContraband' + pk + 'ContrabandGrams').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'ContrabandGrams').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'ContrabandGrams'));
			}
			var val = o['contrabandKilos'];
			if(vars.includes('contrabandKilos')) {
				$('.inputTrafficContraband' + pk + 'ContrabandKilos').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'ContrabandKilos').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'ContrabandKilos'));
			}
			var val = o['contrabandMoney'];
			if(vars.includes('contrabandMoney')) {
				$('.inputTrafficContraband' + pk + 'ContrabandMoney').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'ContrabandMoney').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'ContrabandMoney'));
			}
			var val = o['contrabandWeapons'];
			if(vars.includes('contrabandWeapons')) {
				$('.inputTrafficContraband' + pk + 'ContrabandWeapons').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'ContrabandWeapons').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'ContrabandWeapons'));
			}
			var val = o['contrabandDollarAmount'];
			if(vars.includes('contrabandDollarAmount')) {
				$('.inputTrafficContraband' + pk + 'ContrabandDollarAmount').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'ContrabandDollarAmount').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'ContrabandDollarAmount'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputTrafficContraband' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'InheritPk'));
			}
			var val = o['id'];
			if(vars.includes('id')) {
				$('.inputTrafficContraband' + pk + 'Id').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'Id').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'Id'));
			}
			var val = o['classCanonicalName'];
			if(vars.includes('classCanonicalName')) {
				$('.inputTrafficContraband' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'ClassCanonicalName'));
			}
			var val = o['classSimpleName'];
			if(vars.includes('classSimpleName')) {
				$('.inputTrafficContraband' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'ClassSimpleName'));
			}
			var val = o['classCanonicalNames'];
			if(vars.includes('classCanonicalNames')) {
				$('.inputTrafficContraband' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'ClassCanonicalNames'));
			}
			var val = o['saves'];
			if(vars.includes('saves')) {
				$('.inputTrafficContraband' + pk + 'Saves').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'Saves').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'Saves'));
			}
			var val = o['objectTitle'];
			if(vars.includes('objectTitle')) {
				$('.inputTrafficContraband' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'ObjectTitle'));
			}
			var val = o['objectId'];
			if(vars.includes('objectId')) {
				$('.inputTrafficContraband' + pk + 'ObjectId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'ObjectId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'ObjectId'));
			}
			var val = o['contrabandKey'];
			if(vars.includes('contrabandKey')) {
				$('.inputTrafficContraband' + pk + 'ContrabandKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'ContrabandKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'ContrabandKey'));
			}
			var val = o['agencyTitle'];
			if(vars.includes('agencyTitle')) {
				$('.inputTrafficContraband' + pk + 'AgencyTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'AgencyTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'AgencyTitle'));
			}
			var val = o['stopDateTime'];
			if(vars.includes('stopDateTime')) {
				$('.inputTrafficContraband' + pk + 'StopDateTime').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'StopDateTime').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'StopDateTime'));
			}
			var val = o['stopPurposeNum'];
			if(vars.includes('stopPurposeNum')) {
				$('.inputTrafficContraband' + pk + 'StopPurposeNum').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'StopPurposeNum').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'StopPurposeNum'));
			}
			var val = o['stopPurposeTitle'];
			if(vars.includes('stopPurposeTitle')) {
				$('.inputTrafficContraband' + pk + 'StopPurposeTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'StopPurposeTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'StopPurposeTitle'));
			}
			var val = o['stopActionNum'];
			if(vars.includes('stopActionNum')) {
				$('.inputTrafficContraband' + pk + 'StopActionNum').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'StopActionNum').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'StopActionNum'));
			}
			var val = o['stopActionTitle'];
			if(vars.includes('stopActionTitle')) {
				$('.inputTrafficContraband' + pk + 'StopActionTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'StopActionTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'StopActionTitle'));
			}
			var val = o['stopDriverArrest'];
			if(vars.includes('stopDriverArrest')) {
				$('.inputTrafficContraband' + pk + 'StopDriverArrest').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'StopDriverArrest').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'StopDriverArrest'));
			}
			var val = o['stopPassengerArrest'];
			if(vars.includes('stopPassengerArrest')) {
				$('.inputTrafficContraband' + pk + 'StopPassengerArrest').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'StopPassengerArrest').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'StopPassengerArrest'));
			}
			var val = o['stopEncounterForce'];
			if(vars.includes('stopEncounterForce')) {
				$('.inputTrafficContraband' + pk + 'StopEncounterForce').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'StopEncounterForce').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'StopEncounterForce'));
			}
			var val = o['stopEngageForce'];
			if(vars.includes('stopEngageForce')) {
				$('.inputTrafficContraband' + pk + 'StopEngageForce').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'StopEngageForce').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'StopEngageForce'));
			}
			var val = o['stopOfficerInjury'];
			if(vars.includes('stopOfficerInjury')) {
				$('.inputTrafficContraband' + pk + 'StopOfficerInjury').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'StopOfficerInjury').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'StopOfficerInjury'));
			}
			var val = o['stopDriverInjury'];
			if(vars.includes('stopDriverInjury')) {
				$('.inputTrafficContraband' + pk + 'StopDriverInjury').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'StopDriverInjury').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'StopDriverInjury'));
			}
			var val = o['stopPassengerInjury'];
			if(vars.includes('stopPassengerInjury')) {
				$('.inputTrafficContraband' + pk + 'StopPassengerInjury').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'StopPassengerInjury').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'StopPassengerInjury'));
			}
			var val = o['stopOfficerId'];
			if(vars.includes('stopOfficerId')) {
				$('.inputTrafficContraband' + pk + 'StopOfficerId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'StopOfficerId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'StopOfficerId'));
			}
			var val = o['stopLocationId'];
			if(vars.includes('stopLocationId')) {
				$('.inputTrafficContraband' + pk + 'StopLocationId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'StopLocationId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'StopLocationId'));
			}
			var val = o['stopCityId'];
			if(vars.includes('stopCityId')) {
				$('.inputTrafficContraband' + pk + 'StopCityId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'StopCityId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'StopCityId'));
			}
			var val = o['personAge'];
			if(vars.includes('personAge')) {
				$('.inputTrafficContraband' + pk + 'PersonAge').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'PersonAge').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'PersonAge'));
			}
			var val = o['personTypeId'];
			if(vars.includes('personTypeId')) {
				$('.inputTrafficContraband' + pk + 'PersonTypeId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'PersonTypeId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'PersonTypeId'));
			}
			var val = o['personTypeTitle'];
			if(vars.includes('personTypeTitle')) {
				$('.inputTrafficContraband' + pk + 'PersonTypeTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'PersonTypeTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'PersonTypeTitle'));
			}
			var val = o['personTypeDriver'];
			if(vars.includes('personTypeDriver')) {
				$('.inputTrafficContraband' + pk + 'PersonTypeDriver').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'PersonTypeDriver').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'PersonTypeDriver'));
			}
			var val = o['personTypePassenger'];
			if(vars.includes('personTypePassenger')) {
				$('.inputTrafficContraband' + pk + 'PersonTypePassenger').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'PersonTypePassenger').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'PersonTypePassenger'));
			}
			var val = o['personGenderId'];
			if(vars.includes('personGenderId')) {
				$('.inputTrafficContraband' + pk + 'PersonGenderId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'PersonGenderId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'PersonGenderId'));
			}
			var val = o['personGenderTitle'];
			if(vars.includes('personGenderTitle')) {
				$('.inputTrafficContraband' + pk + 'PersonGenderTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'PersonGenderTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'PersonGenderTitle'));
			}
			var val = o['personGenderFemale'];
			if(vars.includes('personGenderFemale')) {
				$('.inputTrafficContraband' + pk + 'PersonGenderFemale').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'PersonGenderFemale').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'PersonGenderFemale'));
			}
			var val = o['personGenderMale'];
			if(vars.includes('personGenderMale')) {
				$('.inputTrafficContraband' + pk + 'PersonGenderMale').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'PersonGenderMale').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'PersonGenderMale'));
			}
			var val = o['personEthnicityId'];
			if(vars.includes('personEthnicityId')) {
				$('.inputTrafficContraband' + pk + 'PersonEthnicityId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'PersonEthnicityId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'PersonEthnicityId'));
			}
			var val = o['personEthnicityTitle'];
			if(vars.includes('personEthnicityTitle')) {
				$('.inputTrafficContraband' + pk + 'PersonEthnicityTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'PersonEthnicityTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'PersonEthnicityTitle'));
			}
			var val = o['personRaceId'];
			if(vars.includes('personRaceId')) {
				$('.inputTrafficContraband' + pk + 'PersonRaceId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'PersonRaceId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'PersonRaceId'));
			}
			var val = o['personRaceTitle'];
			if(vars.includes('personRaceTitle')) {
				$('.inputTrafficContraband' + pk + 'PersonRaceTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'PersonRaceTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'PersonRaceTitle'));
			}
			var val = o['trafficStopKey'];
			if(vars.includes('trafficStopKey')) {
				$('.inputTrafficContraband' + pk + 'TrafficStopKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'TrafficStopKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'TrafficStopKey'));
			}
			var val = o['searchTypeNum'];
			if(vars.includes('searchTypeNum')) {
				$('.inputTrafficContraband' + pk + 'SearchTypeNum').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'SearchTypeNum').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'SearchTypeNum'));
			}
			var val = o['searchTypeTitle'];
			if(vars.includes('searchTypeTitle')) {
				$('.inputTrafficContraband' + pk + 'SearchTypeTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'SearchTypeTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'SearchTypeTitle'));
			}
			var val = o['searchVehicle'];
			if(vars.includes('searchVehicle')) {
				$('.inputTrafficContraband' + pk + 'SearchVehicle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'SearchVehicle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'SearchVehicle'));
			}
			var val = o['searchDriver'];
			if(vars.includes('searchDriver')) {
				$('.inputTrafficContraband' + pk + 'SearchDriver').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'SearchDriver').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'SearchDriver'));
			}
			var val = o['searchPassenger'];
			if(vars.includes('searchPassenger')) {
				$('.inputTrafficContraband' + pk + 'SearchPassenger').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'SearchPassenger').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'SearchPassenger'));
			}
			var val = o['searchProperty'];
			if(vars.includes('searchProperty')) {
				$('.inputTrafficContraband' + pk + 'SearchProperty').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'SearchProperty').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'SearchProperty'));
			}
			var val = o['searchVehicleSiezed'];
			if(vars.includes('searchVehicleSiezed')) {
				$('.inputTrafficContraband' + pk + 'SearchVehicleSiezed').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'SearchVehicleSiezed').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'SearchVehicleSiezed'));
			}
			var val = o['searchPersonalPropertySiezed'];
			if(vars.includes('searchPersonalPropertySiezed')) {
				$('.inputTrafficContraband' + pk + 'SearchPersonalPropertySiezed').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'SearchPersonalPropertySiezed').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'SearchPersonalPropertySiezed'));
			}
			var val = o['searchOtherPropertySiezed'];
			if(vars.includes('searchOtherPropertySiezed')) {
				$('.inputTrafficContraband' + pk + 'SearchOtherPropertySiezed').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varTrafficContraband' + pk + 'SearchOtherPropertySiezed').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputTrafficContraband' + pk + 'SearchOtherPropertySiezed'));
			}
		});
	}
}
