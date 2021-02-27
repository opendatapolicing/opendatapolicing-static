
// PUTImport //

async function putimportPageDesign($formValues, pk, success, error) {
	var json = $formValues.find('.PUTImport_list').val();
	if(json != null && json !== '')
		putimportPageDesignVals(JSON.parse(json), success, error);
}

function putimportPageDesignVals(json, success, error) {
	$.ajax({
		url: '/api/page-design/import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTMerge //

async function putmergePageDesign($formValues, pk, success, error) {
	var json = $formValues.find('.PUTMerge_list').val();
	if(json != null && json !== '')
		putmergePageDesignVals(JSON.parse(json), success, error);
}

function putmergePageDesignVals(json, success, error) {
	$.ajax({
		url: '/api/page-design/merge'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTCopy //

async function putcopyPageDesign($formValues, pk, success, error) {
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

	var valuePageDesignCompleteName = $formValues.find('.valuePageDesignCompleteName').val();
	if(valuePageDesignCompleteName != null && valuePageDesignCompleteName !== '')
		vals['pageDesignCompleteName'] = valuePageDesignCompleteName;

	var valueDesignHidden = $formValues.find('.valueDesignHidden').val();
	if(valueDesignHidden != null && valueDesignHidden !== '')
		vals['designHidden'] = valueDesignHidden == 'true';

	var valuePageContentType = $formValues.find('.valuePageContentType').val();
	if(valuePageContentType != null && valuePageContentType !== '')
		vals['pageContentType'] = valuePageContentType;

	var valueParentDesignKeys = $formValues.find('input.valueParentDesignKeys:checked').val();
	var valueParentDesignKeysClear = $formValues.find('input.parentDesignKeys_clear:checked').val();
	if(valueParentDesignKeysClear != null && valueParentDesignKeysClear)
		vals['parentDesignKeys'] = null;
	else if(valueParentDesignKeys != null && valueParentDesignKeys)
		vals['parentDesignKeys'] = [valueParentDesignKeys];

	var valueHtmlPartKeys = $formValues.find('input.valueHtmlPartKeys:checked').val();
	var valueHtmlPartKeysClear = $formValues.find('input.htmlPartKeys_clear:checked').val();
	if(valueHtmlPartKeysClear != null && valueHtmlPartKeysClear)
		vals['htmlPartKeys'] = null;
	else if(valueHtmlPartKeys != null && valueHtmlPartKeys)
		vals['htmlPartKeys'] = [valueHtmlPartKeys];

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

	putcopyPageDesignVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function putcopyPageDesignVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/page-design/copy?' + $.param(filters)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify({patch: vals})
		, success: success
		, error: error
	});
}

// POST //

async function postPageDesign($formValues, success, error) {
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

	var valuePageDesignCompleteName = $formValues.find('.valuePageDesignCompleteName').val();
	if(valuePageDesignCompleteName != null && valuePageDesignCompleteName !== '')
		vals['pageDesignCompleteName'] = valuePageDesignCompleteName;

	var valueDesignHidden = $formValues.find('.valueDesignHidden').val();
	if(valueDesignHidden != null && valueDesignHidden !== '')
		vals['designHidden'] = valueDesignHidden == 'true';

	var valuePageContentType = $formValues.find('.valuePageContentType').val();
	if(valuePageContentType != null && valuePageContentType !== '')
		vals['pageContentType'] = valuePageContentType;

	var valueParentDesignKeys = [];
	$formValues.find('input.valueParentDesignKeys:checked').each(function(index) {
		valueParentDesignKeys.push($(this).val());
	});
	if(valueParentDesignKeys.length > 0)
		vals['parentDesignKeys'] = valueParentDesignKeys;

	var valueHtmlPartKeys = [];
	$formValues.find('input.valueHtmlPartKeys:checked').each(function(index) {
		valueHtmlPartKeys.push($(this).val());
	});
	if(valueHtmlPartKeys.length > 0)
		vals['htmlPartKeys'] = valueHtmlPartKeys;

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

	$.ajax({
		url: '/api/page-design'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postPageDesignVals(vals, success, error) {
	$.ajax({
		url: '/api/page-design'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PATCH //

async function patchPageDesign($formFilters, $formValues, pk, success, error) {
	var filters = patchPageDesignFilters($formFilters);

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

	var valuePageDesignCompleteName = $formValues.find('.valuePageDesignCompleteName').val();
	var removePageDesignCompleteName = $formValues.find('.removePageDesignCompleteName').val() === 'true';
	var setPageDesignCompleteName = removePageDesignCompleteName ? null : $formValues.find('.setPageDesignCompleteName').val();
	var addPageDesignCompleteName = $formValues.find('.addPageDesignCompleteName').val();
	if(removePageDesignCompleteName || setPageDesignCompleteName != null && setPageDesignCompleteName !== '')
		vals['setPageDesignCompleteName'] = setPageDesignCompleteName;
	if(addPageDesignCompleteName != null && addPageDesignCompleteName !== '')
		vals['addPageDesignCompleteName'] = addPageDesignCompleteName;
	var removePageDesignCompleteName = $formValues.find('.removePageDesignCompleteName').val();
	if(removePageDesignCompleteName != null && removePageDesignCompleteName !== '')
		vals['removePageDesignCompleteName'] = removePageDesignCompleteName;

	var valueDesignHidden = $formValues.find('.valueDesignHidden').val();
	var removeDesignHidden = $formValues.find('.removeDesignHidden').val() === 'true';
	var valueDesignHiddenSelectVal = $formValues.find('select.setDesignHidden').val();
	var valueDesignHidden = null;
	if(valueDesignHiddenSelectVal != null && valueDesignHiddenSelectVal !== '')
		valueDesignHidden = valueDesignHiddenSelectVal == 'true';
	var setDesignHidden = removeDesignHidden ? null : valueDesignHidden;
	var addDesignHidden = $formValues.find('.addDesignHidden').prop('checked');
	if(removeDesignHidden || setDesignHidden != null && setDesignHidden !== '')
		vals['setDesignHidden'] = setDesignHidden;
	if(addDesignHidden != null && addDesignHidden !== '')
		vals['addDesignHidden'] = addDesignHidden;
	var removeDesignHidden = $formValues.find('.removeDesignHidden').prop('checked');
	if(removeDesignHidden != null && removeDesignHidden !== '')
		vals['removeDesignHidden'] = removeDesignHidden;

	var valuePageContentType = $formValues.find('.valuePageContentType').val();
	var removePageContentType = $formValues.find('.removePageContentType').val() === 'true';
	var setPageContentType = removePageContentType ? null : $formValues.find('.setPageContentType').val();
	var addPageContentType = $formValues.find('.addPageContentType').val();
	if(removePageContentType || setPageContentType != null && setPageContentType !== '')
		vals['setPageContentType'] = setPageContentType;
	if(addPageContentType != null && addPageContentType !== '')
		vals['addPageContentType'] = addPageContentType;
	var removePageContentType = $formValues.find('.removePageContentType').val();
	if(removePageContentType != null && removePageContentType !== '')
		vals['removePageContentType'] = removePageContentType;

	var valueParentDesignKeys = $formValues.find('input.valueParentDesignKeys:checked').val();
	if(valueParentDesignKeys != null && valueParentDesignKeys !== '')
		vals['addParentDesignKeys'] = valueParentDesignKeys;

	var valueHtmlPartKeys = $formValues.find('input.valueHtmlPartKeys:checked').val();
	if(valueHtmlPartKeys != null && valueHtmlPartKeys !== '')
		vals['addHtmlPartKeys'] = valueHtmlPartKeys;

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

	patchPageDesignVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchPageDesignFilters($formFilters) {
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

		var filterPageDesignCompleteName = $formFilters.find('.valuePageDesignCompleteName').val();
		if(filterPageDesignCompleteName != null && filterPageDesignCompleteName !== '')
			filters.push({ name: 'fq', value: 'pageDesignCompleteName:' + filterPageDesignCompleteName });

		var $filterDesignHiddenCheckbox = $formFilters.find('input.valueDesignHidden[type = "checkbox"]');
		var $filterDesignHiddenSelect = $formFilters.find('select.valueDesignHidden');
		var filterDesignHidden = $filterDesignHiddenSelect.length ? $filterDesignHiddenSelect.val() : $filterDesignHiddenCheckbox.prop('checked');
		var filterDesignHiddenSelectVal = $formFilters.find('select.filterDesignHidden').val();
		var filterDesignHidden = null;
		if(filterDesignHiddenSelectVal !== '')
			filterDesignHidden = filterDesignHiddenSelectVal == 'true';
		if(filterDesignHidden != null && filterDesignHidden === true)
			filters.push({ name: 'fq', value: 'designHidden:' + filterDesignHidden });

		var filterPageContentType = $formFilters.find('.valuePageContentType').val();
		if(filterPageContentType != null && filterPageContentType !== '')
			filters.push({ name: 'fq', value: 'pageContentType:' + filterPageContentType });

		var filterParentDesignKeys = $formFilters.find('.valueParentDesignKeys').val();
		if(filterParentDesignKeys != null && filterParentDesignKeys !== '')
			filters.push({ name: 'fq', value: 'parentDesignKeys:' + filterParentDesignKeys });

		var filterHtmlPartKeys = $formFilters.find('.valueHtmlPartKeys').val();
		if(filterHtmlPartKeys != null && filterHtmlPartKeys !== '')
			filters.push({ name: 'fq', value: 'htmlPartKeys:' + filterHtmlPartKeys });

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

		var filterPageDesignKey = $formFilters.find('.valuePageDesignKey').val();
		if(filterPageDesignKey != null && filterPageDesignKey !== '')
			filters.push({ name: 'fq', value: 'pageDesignKey:' + filterPageDesignKey });

		var filterChildDesignKeys = $formFilters.find('.valueChildDesignKeys').val();
		if(filterChildDesignKeys != null && filterChildDesignKeys !== '')
			filters.push({ name: 'fq', value: 'childDesignKeys:' + filterChildDesignKeys });
	}
	return filters;
}

function patchPageDesignVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchPageDesignVals(filters, vals, success, error);
}

function patchPageDesignVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/page-design?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getPageDesign(pk) {
	$.ajax({
		url: '/api/page-design/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Search //

async function searchPageDesign($formFilters, success, error) {
	var filters = searchPageDesignFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchPageDesignVals(filters, success, error);
}

function searchPageDesignFilters($formFilters) {
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

		var filterPageDesignCompleteName = $formFilters.find('.valuePageDesignCompleteName').val();
		if(filterPageDesignCompleteName != null && filterPageDesignCompleteName !== '')
			filters.push({ name: 'fq', value: 'pageDesignCompleteName:' + filterPageDesignCompleteName });

		var $filterDesignHiddenCheckbox = $formFilters.find('input.valueDesignHidden[type = "checkbox"]');
		var $filterDesignHiddenSelect = $formFilters.find('select.valueDesignHidden');
		var filterDesignHidden = $filterDesignHiddenSelect.length ? $filterDesignHiddenSelect.val() : $filterDesignHiddenCheckbox.prop('checked');
		var filterDesignHiddenSelectVal = $formFilters.find('select.filterDesignHidden').val();
		var filterDesignHidden = null;
		if(filterDesignHiddenSelectVal !== '')
			filterDesignHidden = filterDesignHiddenSelectVal == 'true';
		if(filterDesignHidden != null && filterDesignHidden === true)
			filters.push({ name: 'fq', value: 'designHidden:' + filterDesignHidden });

		var filterPageContentType = $formFilters.find('.valuePageContentType').val();
		if(filterPageContentType != null && filterPageContentType !== '')
			filters.push({ name: 'fq', value: 'pageContentType:' + filterPageContentType });

		var filterParentDesignKeys = $formFilters.find('.valueParentDesignKeys').val();
		if(filterParentDesignKeys != null && filterParentDesignKeys !== '')
			filters.push({ name: 'fq', value: 'parentDesignKeys:' + filterParentDesignKeys });

		var filterHtmlPartKeys = $formFilters.find('.valueHtmlPartKeys').val();
		if(filterHtmlPartKeys != null && filterHtmlPartKeys !== '')
			filters.push({ name: 'fq', value: 'htmlPartKeys:' + filterHtmlPartKeys });

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

		var filterPageDesignKey = $formFilters.find('.valuePageDesignKey').val();
		if(filterPageDesignKey != null && filterPageDesignKey !== '')
			filters.push({ name: 'fq', value: 'pageDesignKey:' + filterPageDesignKey });

		var filterChildDesignKeys = $formFilters.find('.valueChildDesignKeys').val();
		if(filterChildDesignKeys != null && filterChildDesignKeys !== '')
			filters.push({ name: 'fq', value: 'childDesignKeys:' + filterChildDesignKeys });
	}
	return filters;
}

function searchPageDesignVals(filters, success, error) {


	filters.push({ name: 'sort', value: 'pageDesignCompleteName asc' });
	$.ajax({
		url: '/api/page-design?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestPageDesignObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-drafting-compass ');
			var $span = $('<span>').attr('class', '').text(o['pageDesignCompleteName']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchPageDesignVals($formFilters, success, error);
}

function suggestPageDesignChildDesignKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-drafting-compass ');
			var $span = $('<span>').attr('class', '').text(o['pageDesignCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			var val = o['parentDesignKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_childDesignKeys_' + pk + '_parentDesignKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueChildDesignKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_childDesignKeys_" + pk + "_parentDesignKeys_" + o['pk'] + "'); patchPageDesignVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'ChildDesignKeys']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#PageDesignForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchPageDesignVals(filters, success, error);
}

function suggestPageDesignParentDesignKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-drafting-compass ');
			var $span = $('<span>').attr('class', '').text(o['pageDesignCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			var val = o['childDesignKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_parentDesignKeys_' + pk + '_childDesignKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueParentDesignKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_parentDesignKeys_" + pk + "_childDesignKeys_" + o['pk'] + "'); patchPageDesignVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'ParentDesignKeys']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#PageDesignForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchPageDesignVals(filters, success, error);
}

function suggestPageDesignHtmlPartKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-puzzle-piece ');
			var $span = $('<span>').attr('class', '').text(o['objectTitle']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			var val = o['pageDesignKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_htmlPartKeys_' + pk + '_pageDesignKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueHtmlPartKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_htmlPartKeys_" + pk + "_pageDesignKeys_" + o['pk'] + "'); patchPageDesignVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'HtmlPartKeys']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'removeGlow($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			var sort1 = o['sort1'];
			var sort2 = o['sort2'];
			var sort3 = o['sort3'];
			var sort4 = o['sort4'];
			var sort5 = o['sort5'];
			var sort6 = o['sort6'];
			var sort7 = o['sort7'];
			var sort8 = o['sort8'];
			var sort9 = o['sort9'];
			var sort10 = o['sort10'];

			$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
			var $sortInput = $('<input>')
			$sortInput.attr('class', 'w3-tiny ');
			$sortInput.attr('style', 'width: 4em; ');
			$sortInput.attr('id', "attribute_" + o['pk'] + "_sort_sort1");
			$sortInput.attr('value', sort1).attr('onchange', 
				"$('#PageDesignForm :input[name=\"focusId\"]').val($(this).attr('id')); "
				+ "patchHtmlPartVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setSort1']: $(this).val() ? $(this).val() : null }"
					+ ", function() { "
					+ "}"
					+ ", function() { addError($('#attribute_" + o['pk'] + "_sort_sort1')); }"
					+ " ); "); 
			$sort.append($sortInput);
			$li.append($sort);

			if(sort1 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribute_" + o['pk'] + "_sort_sort2");
				$sortInput.attr('value', sort2).attr('onchange', 
					"$('#PageDesignForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchHtmlPartVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setSort2']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { addError($('#attribute_" + o['pk'] + "_sort_sort2')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(sort2 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribute_" + o['pk'] + "_sort_sort3");
				$sortInput.attr('value', sort3).attr('onchange', 
					"$('#PageDesignForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchHtmlPartVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setSort3']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { addError($('#attribute_" + o['pk'] + "_sort_sort3')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(sort3 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribute_" + o['pk'] + "_sort_sort4");
				$sortInput.attr('value', sort4).attr('onchange', 
					"$('#PageDesignForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchHtmlPartVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setSort4']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { addError($('#attribute_" + o['pk'] + "_sort_sort4')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(sort4 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribute_" + o['pk'] + "_sort_sort5");
				$sortInput.attr('value', sort5).attr('onchange', 
					"$('#PageDesignForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchHtmlPartVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setSort5']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { addError($('#attribute_" + o['pk'] + "_sort_sort5')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(sort5 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribute_" + o['pk'] + "_sort_sort6");
				$sortInput.attr('value', sort6).attr('onchange', 
					"$('#PageDesignForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchHtmlPartVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setSort6']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { addError($('#attribute_" + o['pk'] + "_sort_sort6')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(sort6 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribute_" + o['pk'] + "_sort_sort7");
				$sortInput.attr('value', sort7).attr('onchange', 
					"$('#PageDesignForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchHtmlPartVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setSort7']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { addError($('#attribute_" + o['pk'] + "_sort_sort7')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(sort7 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribute_" + o['pk'] + "_sort_sort8");
				$sortInput.attr('value', sort8).attr('onchange', 
					"$('#PageDesignForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchHtmlPartVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setSort8']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { addError($('#attribute_" + o['pk'] + "_sort_sort8')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(sort8 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribute_" + o['pk'] + "_sort_sort9");
				$sortInput.attr('value', sort9).attr('onchange', 
					"$('#PageDesignForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchHtmlPartVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setSort9']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { addError($('#attribute_" + o['pk'] + "_sort_sort9')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(sort9 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribute_" + o['pk'] + "_sort_sort10");
				$sortInput.attr('value', sort10).attr('onchange', 
					"$('#PageDesignForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchHtmlPartVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setSort10']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { addError($('#attribute_" + o['pk'] + "_sort_sort10')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}
			if(attribute)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#PageDesignForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchHtmlPartVals(filters, success, error);
}

// AdminSearch //

async function adminsearchPageDesign($formFilters, success, error) {
	var filters = adminsearchPageDesignFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	adminsearchPageDesignVals(filters, success, error);
}

function adminsearchPageDesignFilters($formFilters) {
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

		var filterPageDesignCompleteName = $formFilters.find('.valuePageDesignCompleteName').val();
		if(filterPageDesignCompleteName != null && filterPageDesignCompleteName !== '')
			filters.push({ name: 'fq', value: 'pageDesignCompleteName:' + filterPageDesignCompleteName });

		var $filterDesignHiddenCheckbox = $formFilters.find('input.valueDesignHidden[type = "checkbox"]');
		var $filterDesignHiddenSelect = $formFilters.find('select.valueDesignHidden');
		var filterDesignHidden = $filterDesignHiddenSelect.length ? $filterDesignHiddenSelect.val() : $filterDesignHiddenCheckbox.prop('checked');
		var filterDesignHiddenSelectVal = $formFilters.find('select.filterDesignHidden').val();
		var filterDesignHidden = null;
		if(filterDesignHiddenSelectVal !== '')
			filterDesignHidden = filterDesignHiddenSelectVal == 'true';
		if(filterDesignHidden != null && filterDesignHidden === true)
			filters.push({ name: 'fq', value: 'designHidden:' + filterDesignHidden });

		var filterPageContentType = $formFilters.find('.valuePageContentType').val();
		if(filterPageContentType != null && filterPageContentType !== '')
			filters.push({ name: 'fq', value: 'pageContentType:' + filterPageContentType });

		var filterParentDesignKeys = $formFilters.find('.valueParentDesignKeys').val();
		if(filterParentDesignKeys != null && filterParentDesignKeys !== '')
			filters.push({ name: 'fq', value: 'parentDesignKeys:' + filterParentDesignKeys });

		var filterHtmlPartKeys = $formFilters.find('.valueHtmlPartKeys').val();
		if(filterHtmlPartKeys != null && filterHtmlPartKeys !== '')
			filters.push({ name: 'fq', value: 'htmlPartKeys:' + filterHtmlPartKeys });

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

		var filterPageDesignKey = $formFilters.find('.valuePageDesignKey').val();
		if(filterPageDesignKey != null && filterPageDesignKey !== '')
			filters.push({ name: 'fq', value: 'pageDesignKey:' + filterPageDesignKey });

		var filterChildDesignKeys = $formFilters.find('.valueChildDesignKeys').val();
		if(filterChildDesignKeys != null && filterChildDesignKeys !== '')
			filters.push({ name: 'fq', value: 'childDesignKeys:' + filterChildDesignKeys });
	}
	return filters;
}

function adminsearchPageDesignVals(filters, success, error) {


	filters.push({ name: 'sort', value: 'pageDesignCompleteName asc' });
	$.ajax({
		url: '/api/admin/page-design?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestPageDesignObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-drafting-compass ');
			var $span = $('<span>').attr('class', '').text(o['pageDesignCompleteName']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchPageDesignVals($formFilters, success, error);
}

function suggestPageDesignChildDesignKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-drafting-compass ');
			var $span = $('<span>').attr('class', '').text(o['pageDesignCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			var val = o['parentDesignKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_childDesignKeys_' + pk + '_parentDesignKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueChildDesignKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_childDesignKeys_" + pk + "_parentDesignKeys_" + o['pk'] + "'); patchPageDesignVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'ChildDesignKeys']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#PageDesignForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchPageDesignVals(filters, success, error);
}

function suggestPageDesignParentDesignKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-drafting-compass ');
			var $span = $('<span>').attr('class', '').text(o['pageDesignCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			var val = o['childDesignKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_parentDesignKeys_' + pk + '_childDesignKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueParentDesignKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_parentDesignKeys_" + pk + "_childDesignKeys_" + o['pk'] + "'); patchPageDesignVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'ParentDesignKeys']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#PageDesignForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchPageDesignVals(filters, success, error);
}

function suggestPageDesignHtmlPartKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-puzzle-piece ');
			var $span = $('<span>').attr('class', '').text(o['objectTitle']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			var val = o['pageDesignKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_htmlPartKeys_' + pk + '_pageDesignKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueHtmlPartKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_htmlPartKeys_" + pk + "_pageDesignKeys_" + o['pk'] + "'); patchPageDesignVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'HtmlPartKeys']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'removeGlow($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			var sort1 = o['sort1'];
			var sort2 = o['sort2'];
			var sort3 = o['sort3'];
			var sort4 = o['sort4'];
			var sort5 = o['sort5'];
			var sort6 = o['sort6'];
			var sort7 = o['sort7'];
			var sort8 = o['sort8'];
			var sort9 = o['sort9'];
			var sort10 = o['sort10'];

			$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
			var $sortInput = $('<input>')
			$sortInput.attr('class', 'w3-tiny ');
			$sortInput.attr('style', 'width: 4em; ');
			$sortInput.attr('id', "attribute_" + o['pk'] + "_sort_sort1");
			$sortInput.attr('value', sort1).attr('onchange', 
				"$('#PageDesignForm :input[name=\"focusId\"]').val($(this).attr('id')); "
				+ "patchHtmlPartVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setSort1']: $(this).val() ? $(this).val() : null }"
					+ ", function() { "
					+ "}"
					+ ", function() { addError($('#attribute_" + o['pk'] + "_sort_sort1')); }"
					+ " ); "); 
			$sort.append($sortInput);
			$li.append($sort);

			if(sort1 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribute_" + o['pk'] + "_sort_sort2");
				$sortInput.attr('value', sort2).attr('onchange', 
					"$('#PageDesignForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchHtmlPartVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setSort2']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { addError($('#attribute_" + o['pk'] + "_sort_sort2')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(sort2 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribute_" + o['pk'] + "_sort_sort3");
				$sortInput.attr('value', sort3).attr('onchange', 
					"$('#PageDesignForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchHtmlPartVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setSort3']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { addError($('#attribute_" + o['pk'] + "_sort_sort3')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(sort3 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribute_" + o['pk'] + "_sort_sort4");
				$sortInput.attr('value', sort4).attr('onchange', 
					"$('#PageDesignForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchHtmlPartVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setSort4']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { addError($('#attribute_" + o['pk'] + "_sort_sort4')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(sort4 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribute_" + o['pk'] + "_sort_sort5");
				$sortInput.attr('value', sort5).attr('onchange', 
					"$('#PageDesignForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchHtmlPartVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setSort5']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { addError($('#attribute_" + o['pk'] + "_sort_sort5')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(sort5 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribute_" + o['pk'] + "_sort_sort6");
				$sortInput.attr('value', sort6).attr('onchange', 
					"$('#PageDesignForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchHtmlPartVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setSort6']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { addError($('#attribute_" + o['pk'] + "_sort_sort6')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(sort6 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribute_" + o['pk'] + "_sort_sort7");
				$sortInput.attr('value', sort7).attr('onchange', 
					"$('#PageDesignForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchHtmlPartVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setSort7']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { addError($('#attribute_" + o['pk'] + "_sort_sort7')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(sort7 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribute_" + o['pk'] + "_sort_sort8");
				$sortInput.attr('value', sort8).attr('onchange', 
					"$('#PageDesignForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchHtmlPartVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setSort8']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { addError($('#attribute_" + o['pk'] + "_sort_sort8')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(sort8 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribute_" + o['pk'] + "_sort_sort9");
				$sortInput.attr('value', sort9).attr('onchange', 
					"$('#PageDesignForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchHtmlPartVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setSort9']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { addError($('#attribute_" + o['pk'] + "_sort_sort9')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(sort9 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribute_" + o['pk'] + "_sort_sort10");
				$sortInput.attr('value', sort10).attr('onchange', 
					"$('#PageDesignForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchHtmlPartVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setSort10']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { addError($('#attribute_" + o['pk'] + "_sort_sort10')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}
			if(attribute)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#PageDesignForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchHtmlPartVals(filters, success, error);
}

async function websocketPageDesign(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketPageDesign', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pkPage = $('#PageDesignForm :input[name=pk]').val();
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = parseInt(json['numFound']);
			var numPATCH = parseInt(json['numPATCH']);
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-display-topright w3-quarter box-' + id + ' ').attr('id', 'box-' + id).attr('data-numPATCH', numPATCH);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-khaki ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'far fa-drafting-compass w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modify page designs');
			var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
			var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
			var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
			var $progress = $('<div>').attr('class', 'w3-khaki ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
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

		window.eventBus.registerHandler('websocketPageDesign', function (error, message) {
			$('#Page_childDesignKeys').trigger('oninput');
			$('#Page_childDesignKeys_add').text('add a page design');
			$('#Page_childDesignKeys_add').removeClass('w3-disabled');
			$('#Page_childDesignKeys_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketPageDesign', function (error, message) {
			$('#Page_parentDesignKeys').trigger('oninput');
			$('#Page_parentDesignKeys_add').text('add a page design');
			$('#Page_parentDesignKeys_add').removeClass('w3-disabled');
			$('#Page_parentDesignKeys_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketHtmlPart', function (error, message) {
			$('#Page_htmlPartKeys').trigger('oninput');
			$('#Page_htmlPartKeys_add').text('add an HTML part');
			$('#Page_htmlPartKeys_add').removeClass('w3-disabled');
			$('#Page_htmlPartKeys_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketPageDesign', function (error, message) {
			$('#Page_childDesignKeys').trigger('oninput');
			$('#Page_childDesignKeys_add').text('add a page design');
			$('#Page_childDesignKeys_add').removeClass('w3-disabled');
			$('#Page_childDesignKeys_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketPageDesign', function (error, message) {
			$('#Page_parentDesignKeys').trigger('oninput');
			$('#Page_parentDesignKeys_add').text('add a page design');
			$('#Page_parentDesignKeys_add').removeClass('w3-disabled');
			$('#Page_parentDesignKeys_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketHtmlPart', function (error, message) {
			$('#Page_htmlPartKeys').trigger('oninput');
			$('#Page_htmlPartKeys_add').text('add an HTML part');
			$('#Page_htmlPartKeys_add').removeClass('w3-disabled');
			$('#Page_htmlPartKeys_add').attr('disabled', false);
		});
	}
}
async function websocketPageDesignInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchPageDesignVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['pk'];
			if(vars.includes('pk')) {
				$('.inputPageDesign' + pk + 'Pk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'Pk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'Pk'));
			}
			var val = o['created'];
			if(vars.includes('created')) {
				$('.inputPageDesign' + pk + 'Created').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'Created').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'Created'));
			}
			var val = o['modified'];
			if(vars.includes('modified')) {
				$('.inputPageDesign' + pk + 'Modified').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'Modified').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'Modified'));
			}
			var val = o['archived'];
			if(vars.includes('archived')) {
				$('.inputPageDesign' + pk + 'Archived').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'Archived').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'Archived'));
			}
			var val = o['deleted'];
			if(vars.includes('deleted')) {
				$('.inputPageDesign' + pk + 'Deleted').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'Deleted').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'Deleted'));
			}
			var val = o['pageDesignCompleteName'];
			if(vars.includes('pageDesignCompleteName')) {
				$('.inputPageDesign' + pk + 'PageDesignCompleteName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'PageDesignCompleteName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'PageDesignCompleteName'));
			}
			var val = o['designHidden'];
			if(vars.includes('designHidden')) {
				$('.inputPageDesign' + pk + 'DesignHidden').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'DesignHidden').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'DesignHidden'));
			}
			var val = o['pageContentType'];
			if(vars.includes('pageContentType')) {
				$('.inputPageDesign' + pk + 'PageContentType').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'PageContentType').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'PageContentType'));
			}
			var val = o['parentDesignKeys'];
			if(vars.includes('parentDesignKeys')) {
				$('.inputPageDesign' + pk + 'ParentDesignKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'ParentDesignKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'ParentDesignKeys'));
			}
			var val = o['htmlPartKeys'];
			if(vars.includes('htmlPartKeys')) {
				$('.inputPageDesign' + pk + 'HtmlPartKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'HtmlPartKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'HtmlPartKeys'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputPageDesign' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'InheritPk'));
			}
			var val = o['id'];
			if(vars.includes('id')) {
				$('.inputPageDesign' + pk + 'Id').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'Id').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'Id'));
			}
			var val = o['modifiedIsoOffsetDateTime'];
			if(vars.includes('modifiedIsoOffsetDateTime')) {
				$('.inputPageDesign' + pk + 'ModifiedIsoOffsetDateTime').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'ModifiedIsoOffsetDateTime').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'ModifiedIsoOffsetDateTime'));
			}
			var val = o['classCanonicalName'];
			if(vars.includes('classCanonicalName')) {
				$('.inputPageDesign' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'ClassCanonicalName'));
			}
			var val = o['classSimpleName'];
			if(vars.includes('classSimpleName')) {
				$('.inputPageDesign' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'ClassSimpleName'));
			}
			var val = o['classCanonicalNames'];
			if(vars.includes('classCanonicalNames')) {
				$('.inputPageDesign' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'ClassCanonicalNames'));
			}
			var val = o['sessionId'];
			if(vars.includes('sessionId')) {
				$('.inputPageDesign' + pk + 'SessionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'SessionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'SessionId'));
			}
			var val = o['userId'];
			if(vars.includes('userId')) {
				$('.inputPageDesign' + pk + 'UserId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'UserId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'UserId'));
			}
			var val = o['userKey'];
			if(vars.includes('userKey')) {
				$('.inputPageDesign' + pk + 'UserKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'UserKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'UserKey'));
			}
			var val = o['saves'];
			if(vars.includes('saves')) {
				$('.inputPageDesign' + pk + 'Saves').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'Saves').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'Saves'));
			}
			var val = o['objectTitle'];
			if(vars.includes('objectTitle')) {
				$('.inputPageDesign' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'ObjectTitle'));
			}
			var val = o['objectId'];
			if(vars.includes('objectId')) {
				$('.inputPageDesign' + pk + 'ObjectId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'ObjectId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'ObjectId'));
			}
			var val = o['objectSuggest'];
			if(vars.includes('objectSuggest')) {
				$('.inputPageDesign' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'ObjectSuggest'));
			}
			var val = o['objectText'];
			if(vars.includes('objectText')) {
				$('.inputPageDesign' + pk + 'ObjectText').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'ObjectText').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'ObjectText'));
			}
			var val = o['pageUrlId'];
			if(vars.includes('pageUrlId')) {
				$('.inputPageDesign' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'PageUrlId'));
			}
			var val = o['pageUrlPk'];
			if(vars.includes('pageUrlPk')) {
				$('.inputPageDesign' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'PageUrlPk'));
			}
			var val = o['pageDesignKey'];
			if(vars.includes('pageDesignKey')) {
				$('.inputPageDesign' + pk + 'PageDesignKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'PageDesignKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'PageDesignKey'));
			}
			var val = o['childDesignKeys'];
			if(vars.includes('childDesignKeys')) {
				$('.inputPageDesign' + pk + 'ChildDesignKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'ChildDesignKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'ChildDesignKeys'));
			}
		});
	}
}
