(function () {
// Source: /usr/local/src/opendatapolicing-static/template/agency-search.hbs

  var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<title>Open Data Policing</title>\n		<meta name=\"description\" content=\"\">\n		<meta name=\"author\" content=\"\">\n		<meta name=\"keywords\" content=\"\">\n		<script src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":7,"column":15},"end":{"line":7,"column":32}}}) : helper)))
    + "/js/sockjs.js\"></script>\n		<script src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":8,"column":15},"end":{"line":8,"column":32}}}) : helper)))
    + "/js/vertx-eventbus.js\"></script>\n		<script src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":9,"column":15},"end":{"line":9,"column":32}}}) : helper)))
    + "/js/enUS/SiteAgencyPage.js\"></script>\n		<script src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":10,"column":15},"end":{"line":10,"column":32}}}) : helper)))
    + "/js/jQuery-Autocomplete/jquery.autocomplete.js\"></script>\n\n		<script>\n		$(function() {\n			$( \"#tabsAgencies\" ).tabs();\n			$( \"#suggestSiteAgencyInput\" ).autocomplete({\n				minChars: 1\n				, dataType: \"json\"\n				, serviceUrl: \"/api/agency\"\n				, paramName: \"q\"\n				, paramPrefix: \"objectSuggest:\"\n				, onSelect: function(suggestion) {\n					window.location.href = \"/report?var=stateAbbreviation:\" + encodeURIComponent(suggestion.data.stateAbbreviation) + \"&var=agencyTitle:\" + encodeURIComponent(suggestion.data.agencyTitle);\n				}\n				, transformResult: function(response) {\n					return {\n						suggestions: jQuery.map(response.list, function(item) {\n							return {\n								value: item.objectTitle\n								, data: item\n								, id: item.pk\n							};\n						})\n					};\n				}\n			});\n		});\n		</script>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	<div id='wrap'>\n\n		<div class=\"w3-top w3-2017-navy-peony \">\n			<div class=\"w3-bar w3-content \">\n				<div class=\"w3-dropdown-hover w3-hide-medium w3-hide-large \">\n					<button class=\"w3-button \">\n						<i class=\"fas fa-bars\"></i>\n					</button>\n					<div class=\"w3-dropdown-content w3-bar-block w3-card-4 \">\n						<a class=\"w3-bar-item w3-button \" href=\"/about\">About</a>\n					</div>\n				</div>\n				<a class=\"w3-bar-item w3-button font-weight-bold \" href=\"/\">Open Data Policing</a>\n			</div>\n		</div>\n\n		<div class=\"w3-2017-navy-peony w3-padding-32 \">\n			<div class=\"w3-content w3-center \">\n				<div class=\"w3-row \">\n					<div class=\"w3-left \">\n						<h1>Find an Agency</h1>\n					</div>\n					<div class=\"w3-right w3-padding-16 \">\n						<a class=\"w3-btn w3-round w3-border w3-indigo \" href=\"/stop?var=stateAbbreviation:"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"stateAbbreviation") || (depth0 != null ? lookupProperty(depth0,"stateAbbreviation") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"stateAbbreviation","hash":{},"data":data,"loc":{"start":{"line":64,"column":88},"end":{"line":64,"column":109}}}) : helper)))
    + "\">Find a Stop</a>\n					</div>\n				</div>\n			</div>\n		</div>\n\n		<div class=\"w3-light-gray \">\n			<div class=\"w3-white \">\n				<div class=\"w3-content w3-padding-16 w3-center \">\n					<input type=\"text\" class=\"suggestSiteAgency w3-input w3-border w3-bar-item \" name=\"suggestSiteAgency\" id=\"suggestSiteAgencyInput\" placeholder=\"Search for police or sherriff's department...\">\n				</div>\n			</div>\n			<div class=\"w3-content \">\n				<div id=\"w3-container \">\n					<p>\n						Enter an agency name into the search field above to review data on the race/ethnic composition demographics of people stopped, searched, and subjected to force in the course of traffic stops in a given jurisdiction. \n						Data is available for most North Carolina departments and officers serving populations greater than 10,000. \n						North Carolina law requires all such agencies to report their data on a monthly basis to the NC Department of Justice; however, some datasets are incomplete or remain unreported. \n						Where data sets are incomplete or missing from the website, it is because they have not been reported to the state agency from which the site derives its records. \n						Open Data Policing does not have access to, nor does it publish, the names of officers, drivers, or passengers involved in traffic stops. \n					</p>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"agencyLetters") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":85,"column":5},"end":{"line":95,"column":14}}})) != null ? stack1 : "")
    + "				</div>\n			</div>\n		</div>\n	</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "						\n						<h2 class=\"w3-border-bottom w3-margin-bottom w3-margin-top \">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"letter") || (depth0 != null ? lookupProperty(depth0,"letter") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"letter","hash":{},"data":data,"loc":{"start":{"line":87,"column":67},"end":{"line":87,"column":77}}}) : helper)))
    + "</h2>\n						<div class=\"w3-row \">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"agencies") : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":89,"column":7},"end":{"line":93,"column":16}}})) != null ? stack1 : "")
    + "						</div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "							<div class=\"w3-third w3-mobile \">\n								<a href=\"/report?var=stateAbbreviation:"
    + container.escapeExpression((lookupProperty(helpers,"urlencode")||(depth0 && lookupProperty(depth0,"urlencode"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"stateAbbreviation") : depth0),{"name":"urlencode","hash":{},"data":data,"loc":{"start":{"line":91,"column":47},"end":{"line":91,"column":78}}}))
    + "&var=agencyTitle:"
    + container.escapeExpression((lookupProperty(helpers,"urlencode")||(depth0 && lookupProperty(depth0,"urlencode"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"agencyTitle") : depth0),{"name":"urlencode","hash":{},"data":data,"loc":{"start":{"line":91,"column":95},"end":{"line":91,"column":120}}}))
    + "\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"agencyTitle") || (depth0 != null ? lookupProperty(depth0,"agencyTitle") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"agencyTitle","hash":{},"data":data,"loc":{"start":{"line":91,"column":122},"end":{"line":91,"column":137}}}) : helper)))
    + "</a>\n							</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n"
    + ((stack1 = (lookupProperty(helpers,"partial")||(depth0 && lookupProperty(depth0,"partial"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"head_content",{"name":"partial","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":38,"column":12}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"partial")||(depth0 && lookupProperty(depth0,"partial"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"body_content",{"name":"partial","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":40,"column":0},"end":{"line":100,"column":12}}})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"base-page"),depth0,{"name":"base-page","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n";
},"usePartial":true,"useData":true});
  var templates = Handlebars.templates = Handlebars.templates || {};
  templates['agency-search'] = template;
  var partials = Handlebars.partials = Handlebars.partials || {};
  partials['agency-search'] = template;


// Source: /usr/local/src/opendatapolicing-static/template/base-page.hbs

  var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!DOCTYPE html>\n<html lang=\"en\" style=\"height: 100%;\">\n	<head>\n		<meta charset=\"utf-8\">\n		<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\n		<link href='//fonts.googleapis.com/css?family=Droid+Sans:400,700' rel='stylesheet' type='text/css'/>\n		<link rel=\"stylesheet\" href=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":8,"column":31},"end":{"line":8,"column":48}}}) : helper)))
    + "/css/w3.css\" />\n		<link rel=\"stylesheet\" href=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":9,"column":31},"end":{"line":9,"column":48}}}) : helper)))
    + "/css/jquery-ui.css\">\n\n		<script src=\"https://kit.fontawesome.com/59d19567d5.js\"></script>\n		<script src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":12,"column":15},"end":{"line":12,"column":32}}}) : helper)))
    + "/js/jquery-1.12.4.min.js\"></script>\n		<script defer=\"defer\" src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":13,"column":29},"end":{"line":13,"column":46}}}) : helper)))
    + "/js/jquery-ui.js\"></script>\n		<script src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":14,"column":15},"end":{"line":14,"column":32}}}) : helper)))
    + "/js/site-enUS.js\"></script>\n		<script src=\"https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js\"></script>\n		<script src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":16,"column":15},"end":{"line":16,"column":32}}}) : helper)))
    + "/js/helpers.js\"></script>\n\n"
    + ((stack1 = (lookupProperty(helpers,"block")||(depth0 && lookupProperty(depth0,"block"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"head_content",{"name":"block","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":0},"end":{"line":19,"column":10}}})) != null ? stack1 : "")
    + "\n		<link rel=\"stylesheet\" href=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":21,"column":31},"end":{"line":21,"column":48}}}) : helper)))
    + "/css/site-enUS.css\" />\n	</head>\n	<body style=\"height: 100%; font-family: 'Droid Sans', sans-serif; \">\n		<a name=\"top\"></a>\n		<div class=\"top-box w3-top w3-padding-32 \">\n		</div>\n		<div class=\"w3-top w3-2017-navy-peony \">\n			<div class=\"w3-bar w3-content \">\n				<div class=\"w3-dropdown-hover w3-hide-medium w3-hide-large \">\n					<button class=\"w3-button \">\n						<i class=\"fas fa-bars\"></i>\n					</button>\n					<div class=\"w3-dropdown-content w3-bar-block w3-card-4 \">\n						<a class=\"w3-bar-item w3-button \" href=\"/about\">About</a>\n					</div>\n				</div>\n				<a class=\"w3-bar-item w3-button font-weight-bold \" href=\"/\">Open Data Policing</a>\n			</div>\n		</div>\n"
    + ((stack1 = (lookupProperty(helpers,"block")||(depth0 && lookupProperty(depth0,"block"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"body_content",{"name":"block","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":40,"column":0},"end":{"line":41,"column":10}}})) != null ? stack1 : "")
    + "\n		<div class=\"w3-light-gray w3-padding-16 \">\n			<div class=\"w3-content \">\n				<div class=\"w3-row \">\n					<div class=\"w3-half w3-mobile w3-container \">\n						<h3 class=\"w3-text-2017-navy-peony \">About Open Data Policing</h3>\n						<p class=\"\">\n							Open Data Policing is a first-of-its-kind platform that aims to\n							make real the recommendation of the President’s Task Force on\n							21st Century Policing to make stop, search, and use-of-force\n							“data...publicly available to ensure transparency.” The site\n							currently aggregates, visualizes, and publishes public records\n							related to all known traffic stops to have occurred in North\n							Carolina since 2002, in Maryland since 2013, and in Illinois\n							since 2005. Data is collected in all states pursuant to mandatory\n							data collection statutes and reported monthly to the NC State\n							Bureau of Investigation, Maryland State Police, and Illinois\n							State Police. The platform does not alter or manipulate raw data.\n							Where data sets are incomplete or missing, it is because they\n							have not been reported to the state agency from which the site\n							derives its records. Although the site permits users to identify\n							the career enforcement patterns of individual officers associated\n							with known traffic stops, <b>Open Data Policing does not have\n								access to, nor does it publish, the names or drivers,\n								passengers, or officers involved in traffic stops.</b>\n						</p>\n\n					</div>\n					<div class=\"w3-quarter w3-mobile w3-container \">\n						<h3 class=\"w3-text-2017-navy-peony \">Donate</h3>\n						<div class=\"\">\n							<p>Open Data Policing is a project of the Southern Coalition\n								for Social Justice. To support the work of the Open Data Policing\n								initiative, click here.\n							<ul class=\"links list-unstyled\">\n								<li><a class=\"w3-text-2017-navy-peony \" href=\"https://www.southerncoalition.org/donate-bloomerang/\">Donate</a></li>\n							</ul>\n							</p>\n						</div>\n					</div>\n					<div class=\"w3-quarter w3-mobile w3-container \">\n						<h3 class=\"w3-text-2017-navy-peony \">Connect</h3>\n						<ul class=\"\">\n							<li><a class=\"w3-text-2017-navy-peony \" href=\"http://www.southerncoalition.org/contact-us/\">Contact\n									Us</a></li>\n							<li><a class=\"w3-text-2017-navy-peony \" href=\"http://twitter.com/scsj\">Twitter</a></li>\n							<li><a class=\"w3-text-2017-navy-peony \" href=\"http://facebook.com/southerncoalition\">Facebook</a></li>\n						</ul>\n					</div>\n				</div>\n			</div>\n		</div>\n\n		<footer class=\"w3-center\">\n			<div class=\"w3-padding-16 w3-white \">\n				<span>Open Data Policing - <a class=\"w3-text-2017-navy-peony \" href='http://www.southerncoalition.org/'>Southern Coalition for Social Justice</a></span>\n			</div>\n			<div class=\"w3-black \">\n				<div class=\"w3-padding-16 \">\n					<a href=\"https://github.com/opendatapolicing/opendatapolicing\" class=\"\">This site is open source.</a>\n					<a href=\"https://www.openshift.com/products/online/\"><span class=\"\">Powered by </span><img alt=\"\" class=\"w3-image \" style=\"display: inline-block; width: 100px; margin: 0 10px;\" src=\"https://computate.neocities.org/scolaire/svg/openshift.svg\"></a>\n				</div>\n			</div>\n		</footer>\n	</body>\n</html>\n";
},"useData":true});
  var templates = Handlebars.templates = Handlebars.templates || {};
  templates['base-page'] = template;
  var partials = Handlebars.partials = Handlebars.partials || {};
  partials['base-page'] = template;


// Source: /usr/local/src/opendatapolicing-static/template/home-page-state.hbs

  var template = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"w3-rest \">\n	<img src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":2,"column":11},"end":{"line":2,"column":28}}}) : helper)))
    + "/svg/state-"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"stateAbbreviation") || (depth0 != null ? lookupProperty(depth0,"stateAbbreviation") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"stateAbbreviation","hash":{},"data":data,"loc":{"start":{"line":2,"column":39},"end":{"line":2,"column":60}}}) : helper)))
    + ".svg\" class=\"state-img w3-img \" style=\"height: 128px; \"/>\n	<p><span class=\"state-stop-count \">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"stopCountStr") || (depth0 != null ? lookupProperty(depth0,"stopCountStr") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"stopCountStr","hash":{},"data":data,"loc":{"start":{"line":3,"column":36},"end":{"line":3,"column":52}}}) : helper)))
    + "</span><span> stops</span></p>\n	<a class=\"state-search-link \" href=\"/report?var=stateAbbreviation:"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"stateAbbreviation") || (depth0 != null ? lookupProperty(depth0,"stateAbbreviation") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"stateAbbreviation","hash":{},"data":data,"loc":{"start":{"line":4,"column":67},"end":{"line":4,"column":88}}}) : helper)))
    + "\" class=\"w3-btn \">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"stateName") || (depth0 != null ? lookupProperty(depth0,"stateName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"stateName","hash":{},"data":data,"loc":{"start":{"line":4,"column":106},"end":{"line":4,"column":119}}}) : helper)))
    + " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"stateAbbreviation") || (depth0 != null ? lookupProperty(depth0,"stateAbbreviation") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"stateAbbreviation","hash":{},"data":data,"loc":{"start":{"line":4,"column":120},"end":{"line":4,"column":141}}}) : helper)))
    + "</a>\n</div>\n";
},"useData":true});
  var templates = Handlebars.templates = Handlebars.templates || {};
  templates['home-page-state'] = template;
  var partials = Handlebars.partials = Handlebars.partials || {};
  partials['home-page-state'] = template;


// Source: /usr/local/src/opendatapolicing-static/template/home-page.hbs

  var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<title>Open Data Policing</title>\n		<meta name=\"description\" content=\"\">\n		<meta name=\"author\" content=\"\">\n		<meta name=\"keywords\" content=\"\">\n		<script src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":7,"column":15},"end":{"line":7,"column":32}}}) : helper)))
    + "/js/sockjs.js\"></script>\n		<script src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":8,"column":15},"end":{"line":8,"column":32}}}) : helper)))
    + "/js/vertx-eventbus.js\"></script>\n		<script src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":9,"column":15},"end":{"line":9,"column":32}}}) : helper)))
    + "/js/enUS/TrafficStopPage.js\"></script>\n		<script src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":10,"column":15},"end":{"line":10,"column":32}}}) : helper)))
    + "/js/enUS/TrafficPersonPage.js\"></script>\n		<script src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":11,"column":15},"end":{"line":11,"column":32}}}) : helper)))
    + "/js/enUS/TrafficSearchPage.js\"></script>\n		<script src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":12,"column":15},"end":{"line":12,"column":32}}}) : helper)))
    + "/js/enUS/SearchBasisPage.js\"></script>\n		<script src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":13,"column":15},"end":{"line":13,"column":32}}}) : helper)))
    + "/js/enUS/ContrabandPage.js\"></script>\n\n		<script>//<![CDATA[\n		$(document).ready(function() {\n			window.eventBus = new EventBus('/eventbus');\n			websocketHomePage();\n		});\n\n		async function websocketHomePage(tableName, success) {\n			window.eventBus.onopen = function () {\n				registerHandlerHomePage('TrafficStop', websocketTrafficStopInner);\n				registerHandlerHomePage('TrafficPerson', websocketTrafficPersonInner);\n				registerHandlerHomePage('TrafficSearch', websocketTrafficSearchInner);\n				registerHandlerHomePage('SearchBasis', websocketSearchBasisInner);\n				registerHandlerHomePage('TrafficContraband', websocketTrafficContrabandInner);\n			}\n		}\n\n		function registerHandlerHomePage(tableName, success) {\n			window.eventBus.registerHandler('websocket' + tableName, function (error, message) {\n				var json = message.body;\n				var id = json['id'];\n				var pk = json['pk'];\n				var pkPage = $('#' + tableName + 'Form :input[name=pk]').val();\n				var pks = json['pks'];\n				var empty = json['empty'];\n				var numFound = parseInt(json['numFound']);\n				var numPATCH = parseInt(json['numPATCH']);\n				var percent = Math.floor( numPATCH / numFound * 100 ) + '%';\n				var $box = $('<div>').attr('class', 'w3-quarter box-' + id + ' ').attr('id', 'box-' + id).attr('data-numPATCH', numPATCH);\n				var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);\n				var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);\n				var $header = $('<div>').attr('class', 'w3-container fa-pale-green ').attr('id', 'header-' + id);\n				var $i = $('<i>').attr('class', 'far fa-newspaper w3-margin-right ').attr('id', 'icon-' + id);\n				var $headerSpan = $('<span>').attr('class', '').text('modify traffic stops in ' + json.timeRemaining);\n				var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$(\"#card-' + id + '\").hide(); ').attr('id', 'x-' + id);\n				var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);\n				var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);\n				var $progress = $('<div>').attr('class', 'w3-pale-green ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);\n				$card.append($header);\n				$header.append($i);\n				$header.append($headerSpan);\n				$header.append($x);\n				$body.append($bar);\n				$bar.append($progress);\n				$card.append($body);\n				$box.append($margin);\n				$margin.append($card);\n				if(numPATCH < numFound) {\n					var $old_box = $('.box-' + id);\n					if(!$old_box.size()) {\n						$('.top-box').append($box);\n					} else if($old_box && $old_box.attr('data-numPATCH') < numFound) {\n						$('.box-' + id).html($margin);\n					}\n				} else {\n					$('.box-' + id).remove();\n				}\n				if(pk && pkPage && pk == pkPage) {\n					if(success)\n						success(json);\n				}\n			});\n		}\n		//]]></script>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	<div id='wrap'>\n\n		<div class=\"w3-2017-navy-peony w3-padding-64 \">\n			<div class=\"w3-content w3-center \">\n				<div class=\"row\">\n					<h1>Open Data Policing</h1>\n					<p>Search all known <span id=\"state-names\">"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"states") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":87,"column":48},"end":{"line":87,"column":117}}})) != null ? stack1 : "")
    + "</span> traffic stops</p>\n				</div>\n				<div id=\"state-list\" class=\"w3-row\" style=\"height: 208px; \">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"states") : depth0),{"name":"each","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":90,"column":5},"end":{"line":96,"column":14}}})) != null ? stack1 : "")
    + "				</div>\n			</div>\n		</div>\n\n		<div class=\"w3-text-white \" style=\"background-image: url('"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":101,"column":60},"end":{"line":101,"column":77}}}) : helper)))
    + "/jpg/cars-at-day.jpg'); background-size: cover; text-shadow: 1px 1px 0 #444; \">\n			<div class=\"w3-content \">\n				<div class=\"w3-roww3-padding-32 \">\n					<div class=\"w3-rest \">\n						<blockquote>\n							<p class=\"w3-xlarge \">“This platform presents the information in a manner that\n								increases the transparency of the Fayetteville Police Department\n								and improves the community and police relationship.”</p>\n							<footer class=\"w3-text-light-gray \">­— Harold Medlock, Fayetteville Police Chief</footer>\n						</blockquote>\n					</div>\n				</div>\n				<div class=\"w3-row w3-padding-32 \">\n					<hr class=\"\">\n					<div class=\"w3-third w3-mobile w3-container \">\n						<h3>Locate an Officer's Career Stop and Search History</h3>\n						<p class=\"justify\">Stopped by the police? Use our “Find a\n							Stop” feature to locate your traffic stop. Click on the\n							associated Officer ID number to display the enforcement history\n							of the officer who stopped you. Maryland data includes an\n							officer’s stop, search, and contraband seizure data, broken down\n							by race and ethnicity. North Carolina data includes these\n							features in addition to use-of-force data (traffic stops only).</p>\n					</div>\n					<div class=\"w3-third w3-mobile w3-container \">\n						<h3>Review Departmental Enforcement Patterns</h3>\n						<p class=\"justify\">Learn more about the enforcement patterns\n							of individual police agencies. Metrics include stops, searches,\n							search rates, contraband seizure rates, and the likelihood of\n							search for individual stop causes—each broken down by race and\n							ethnicity. Click on the “Agencies” tab to review who is stopped\n							and searched in a given jurisdiction and how enforcement patterns\n							compare to local demographics, displayed through the most\n							recently available census data.</p>\n					</div>\n					<div class=\"w3-third w3-mobile w3-container \">\n						<h3>Compare Enforcement Practices Among Officers and\n							Jurisdictions</h3>\n						<p class=\"justify\">Our platform allows users—including those\n							in police management—to easily compare enforcement patterns among\n							individual officers and agencies, evaluate the frequency and\n							efficiency of searches, and monitor for racially disparate\n							enforcement practices. Police managers who possess a master list\n							of Officer ID codes can bypass the “Find a Stop” page to directly\n							access data on individual officers under their command.</p>\n					</div>\n				</div>\n			</div>\n		</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(data && lookupProperty(data,"first")),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":87,"column":64},"end":{"line":87,"column":95}}})) != null ? stack1 : "")
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"stateName") || (depth0 != null ? lookupProperty(depth0,"stateName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"stateName","hash":{},"data":data,"loc":{"start":{"line":87,"column":95},"end":{"line":87,"column":108}}}) : helper)));
},"5":function(container,depth0,helpers,partials,data) {
    return "";
},"7":function(container,depth0,helpers,partials,data) {
    return ", ";
},"9":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "					<div class=\"w3-rest \">\n						<img src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":92,"column":16},"end":{"line":92,"column":33}}}) : helper)))
    + "/svg/state-"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"stateAbbreviation") || (depth0 != null ? lookupProperty(depth0,"stateAbbreviation") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"stateAbbreviation","hash":{},"data":data,"loc":{"start":{"line":92,"column":44},"end":{"line":92,"column":65}}}) : helper)))
    + ".svg\" class=\"state-img w3-img \" style=\"height: 128px; \"/>\n						<p><span class=\"state-stop-count \">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"stopCountStr") || (depth0 != null ? lookupProperty(depth0,"stopCountStr") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"stopCountStr","hash":{},"data":data,"loc":{"start":{"line":93,"column":41},"end":{"line":93,"column":57}}}) : helper)))
    + "</span><span> stops</span></p>\n						<a class=\"state-search-link \" href=\"/state/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"objectId") || (depth0 != null ? lookupProperty(depth0,"objectId") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"objectId","hash":{},"data":data,"loc":{"start":{"line":94,"column":49},"end":{"line":94,"column":61}}}) : helper)))
    + "\" class=\"w3-btn \">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"stateName") || (depth0 != null ? lookupProperty(depth0,"stateName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"stateName","hash":{},"data":data,"loc":{"start":{"line":94,"column":79},"end":{"line":94,"column":92}}}) : helper)))
    + " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"stateAbbreviation") || (depth0 != null ? lookupProperty(depth0,"stateAbbreviation") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"stateAbbreviation","hash":{},"data":data,"loc":{"start":{"line":94,"column":93},"end":{"line":94,"column":114}}}) : helper)))
    + "</a>\n					</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n"
    + ((stack1 = (lookupProperty(helpers,"partial")||(depth0 && lookupProperty(depth0,"partial"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"head_content",{"name":"partial","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":78,"column":12}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"partial")||(depth0 && lookupProperty(depth0,"partial"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"body_content",{"name":"partial","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":80,"column":0},"end":{"line":150,"column":12}}})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"base-page"),depth0,{"name":"base-page","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n";
},"usePartial":true,"useData":true});
  var templates = Handlebars.templates = Handlebars.templates || {};
  templates['home-page'] = template;
  var partials = Handlebars.partials = Handlebars.partials || {};
  partials['home-page'] = template;


// Source: /usr/local/src/opendatapolicing-static/template/openapi.hbs

  var template = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!DOCTYPE html>\n<html>\n<head>\n<meta charset=utf-8>\n<meta name=viewport content=\"width=device-width,initial-scale=1\">\n<meta name=description\n	content=\"OpenAPI and Swagger Spec Viewer and console\">\n<meta name=keywords\n	content=\"Swagger,Open API,OpenAPI,REST API Spec,Alternate to SwaggerUI,SwaggerUI, Swagger UI, MrinDoc\">\n<link rel=icon href=./favicon1.ico>\n<title>MrinDoc OpenAPI Spec Viewer</title>\n<link href=/static"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":12,"column":18},"end":{"line":12,"column":35}}}) : helper)))
    + "/openapi-viewer/css/chunk-53aeb0d8.972b1ce3.css rel=prefetch>\n<link href="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":13,"column":11},"end":{"line":13,"column":28}}}) : helper)))
    + "/openapi-viewer/css/chunk-da3973d8.a8752431.css rel=prefetch>\n<link href="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":14,"column":11},"end":{"line":14,"column":28}}}) : helper)))
    + "/openapi-viewer/js/chunk-53aeb0d8.248f1ff7.js rel=prefetch>\n<link href="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":15,"column":11},"end":{"line":15,"column":28}}}) : helper)))
    + "/openapi-viewer/js/chunk-da3973d8.709e0552.js rel=prefetch>\n<link href="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":16,"column":11},"end":{"line":16,"column":28}}}) : helper)))
    + "/openapi-viewer/css/app.b15ed28c.css rel=preload as=style>\n<link href="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":17,"column":11},"end":{"line":17,"column":28}}}) : helper)))
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":17,"column":28},"end":{"line":17,"column":45}}}) : helper)))
    + "/openapi-viewer/css/chunk-vendors.05b95afe.css rel=preload\n	as=style>\n<link href="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":19,"column":11},"end":{"line":19,"column":28}}}) : helper)))
    + "/openapi-viewer/js/app.b777afbc.js rel=modulepreload\n	as=script>\n<link href="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":21,"column":11},"end":{"line":21,"column":28}}}) : helper)))
    + "/openapi-viewer/js/chunk-vendors.c4c1a68b.js\n	rel=modulepreload as=script>\n<link href="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":23,"column":11},"end":{"line":23,"column":28}}}) : helper)))
    + "/openapi-viewer/css/chunk-vendors.05b95afe.css rel=stylesheet>\n<link href="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":24,"column":11},"end":{"line":24,"column":28}}}) : helper)))
    + "/openapi-viewer/css/app.b15ed28c.css rel=stylesheet>\n</head>\n<body>\n	<div id=app></div>\n	<script type=module src="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":28,"column":25},"end":{"line":28,"column":42}}}) : helper)))
    + "/openapi-viewer/js/chunk-vendors.c4c1a68b.js></script>\n	<script type=module src="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":29,"column":25},"end":{"line":29,"column":42}}}) : helper)))
    + "/openapi-viewer/js/app.b777afbc.js></script>\n	<script>\n		!function() {\n			var e = document, t = e.createElement(\"script\");\n			if (!(\"noModule\" in t) && \"onbeforeload\" in t) {\n				var n = !1;\n				e.addEventListener(\"beforeload\", function(e) {\n					if (e.target === t)\n						n = !0;\n					else if (!e.target.hasAttribute(\"nomodule\") || !n)\n						return;\n					e.preventDefault()\n				}, !0), t.type = \"module\", t.src = \".\", e.head.appendChild(t),\n						t.remove()\n			}\n		}();\n	</script>\n	<script src="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":46,"column":13},"end":{"line":46,"column":30}}}) : helper)))
    + "/openapi-viewer/js/chunk-vendors-legacy.a661f494.js\n		nomodule></script>\n	<script src="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":48,"column":13},"end":{"line":48,"column":30}}}) : helper)))
    + "/openapi-viewer/js/app-legacy.08fa9260.js nomodule></script>\n</body>\n</html>";
},"useData":true});
  var templates = Handlebars.templates = Handlebars.templates || {};
  templates['openapi'] = template;
  var partials = Handlebars.partials = Handlebars.partials || {};
  partials['openapi'] = template;


// Source: /usr/local/src/opendatapolicing-static/template/state-page.hbs

  var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<title>Open Data Policing</title>\n		<meta name=\"description\" content=\"\">\n		<meta name=\"author\" content=\"\">\n		<meta name=\"keywords\" content=\"\">\n		<script src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":7,"column":15},"end":{"line":7,"column":32}}}) : helper)))
    + "/js/sockjs.js\"></script>\n		<script src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":8,"column":15},"end":{"line":8,"column":32}}}) : helper)))
    + "/js/vertx-eventbus.js\"></script>\n		<script src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":9,"column":15},"end":{"line":9,"column":32}}}) : helper)))
    + "/js/enUS/SiteAgencyPage.js\"></script>\n		<script src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":10,"column":15},"end":{"line":10,"column":32}}}) : helper)))
    + "/js/jQuery-Autocomplete/jquery.autocomplete.js\"></script>\n\n		<script>\n		$(function() {\n			$( \"#tabsAgencies\" ).tabs();\n			$( \"#suggestSiteAgencyInput\" ).autocomplete({\n				minChars: 1\n				, dataType: \"json\"\n				, serviceUrl: \"/api/agency\"\n				, paramName: \"q\"\n				, paramPrefix: \"objectSuggest:\"\n				, onSelect: function(suggestion) {\n					window.location.href = \"/report?var=stateAbbreviation:\" + encodeURIComponent(suggestion.data.stateAbbreviation) + \"&var=agencyTitle:\" + encodeURIComponent(suggestion.data.agencyTitle);\n				}\n				, transformResult: function(response) {\n					return {\n						suggestions: jQuery.map(response.list, function(item) {\n							return {\n								value: item.objectTitle\n								, data: item\n								, id: item.pk\n							};\n						})\n					};\n				}\n			});\n		});\n		</script>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	<div id='wrap'>\n\n		<div class=\"w3-2017-navy-peony w3-padding-32 \">\n			<div class=\"w3-content w3-center \">\n				<div class=\"w3-row \">\n					<div class=\"w3-threequarter \">\n						<h1>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"state") : depth0)) != null ? lookupProperty(stack1,"stateName") : stack1), depth0))
    + "</h1>\n						<p>Browse all known traffic stops to have occured in "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"state") : depth0)) != null ? lookupProperty(stack1,"stateName") : stack1), depth0))
    + " since "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"beginStopDateTime") || (depth0 != null ? lookupProperty(depth0,"beginStopDateTime") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"beginStopDateTime","hash":{},"data":data,"loc":{"start":{"line":48,"column":85},"end":{"line":48,"column":106}}}) : helper)))
    + "</p>\n					</div>\n					<div class=\"w3-quarter \">\n						<img src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":51,"column":16},"end":{"line":51,"column":33}}}) : helper)))
    + "/svg/state-"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"state") : depth0)) != null ? lookupProperty(stack1,"stateAbbreviation") : stack1), depth0))
    + ".svg\" class=\"state-img w3-img \" style=\"height: 128px; \"/>\n					</div>\n				</div>\n			</div>\n		</div>\n\n		<div class=\"w3-light-gray \">\n			<div class=\"w3-content \">\n				<div class=\"w3-row \">\n					<div class=\"w3-half w3-padding \">\n						<div id=\"tabsAgencies\" class=\"w3-light-gray \">\n							<ul>\n								<li><a href=\"#tabsAgencies-1\">Agencies</a></li>\n								<li><a href=\"#tabsAgencies-2\">Find a Stop</a></li>\n							</ul>\n							<div id=\"tabsAgencies-1\">\n								<p>Review agency-level data on the race/ethnic composition demographics of people stopped, searched, and subjected to force in the course of traffic stops in a given jurisdiction. </p>\n								<p>Click here to browse a list of all agencies for which data is available. </p>\n								<h3>View Agency Dashboard</h3>\n								<div>\n									<input type=\"text\" class=\"suggestSiteAgency w3-input w3-border w3-bar-item \" name=\"suggestSiteAgency\" id=\"suggestSiteAgencyInput\">\n								</div>\n								<h3>Largest Agencies</h3>\n								<table class=\"w3-table w3-bordered  w3-hoverable w3-border-top \">\n									<thead>\n										<tr>\n											<th class=\"w3-left-align font-weight-bold \">City</th>\n											<th class=\"w3-left-align font-weight-bold \">Stops</th>\n										</tr>\n									</thead>\n									<tbody>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"agencyFacets") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":82,"column":10},"end":{"line":89,"column":19}}})) != null ? stack1 : "")
    + "									</tbody>\n								</table>\n							</div>\n							<div id=\"tabsAgencies-2\">\n								<p>Use this feature to identify the stop and search patterns of individual police officers. Search for North Carolina traffic stops using the form fields below. Use <a href=\"/host-search\">Advanced Search</a> for additional filtering criteria. When you have found the stop you are looking for, click the Officer ID hyperlink to review the data associated with the officer involved. </p>\n								<div class=\"\">\n									<div class=\"w3-row \">\n										<div class=\"w3-rest \">\n											<div class=\"font-weight-bold \">Agency name</div>\n											<div>\n												<input type=\"text\" placeholder=\"Agency Name\" id=\"agencySuggestInput\" class=\"w3-input w3-border \" name=\"agencySuggest\"/>\n											</div>\n											<div class=\"w3-text-gray \">ex: Durham Police Department</div>\n										</div>\n									</div>\n									<div class=\"w3-row \">\n										<div class=\"w3-half \">\n											<div class=\"font-weight-bold \">Start date</div>\n											<div>\n												<input type=\"text\" placeholder=\"Start date\" id=\"startDateInput\" class=\"w3-input w3-border \" name=\"startDate\"/>\n											</div>\n											<div class=\"w3-text-gray \">ex: 8/13/2013</div>\n										</div>\n										<div class=\"w3-half \">\n											<div class=\"font-weight-bold \">End date</div>\n											<div>\n												<input type=\"text\" placeholder=\"End date\" id=\"endDateInput\" class=\"w3-input w3-border \" name=\"endDate\"/>\n											</div>\n											<div class=\"w3-text-gray \">ex: 8/13/2013</div>\n										</div>\n									</div>\n									<div class=\"w3-row \">\n										<div class=\"w3-quarter \">\n											<div class=\"font-weight-bold \">Age</div>\n											<div>\n												<input type=\"number\" placeholder=\"Age\" id=\"ageInput\" class=\"w3-input w3-border \" name=\"age\" max=\"130\" min=\"0\"/>\n											</div>\n										</div>\n										<div class=\"w3-quarter \">\n											<div class=\"font-weight-bold \">Gender</div>\n											<div>\n												<select id=\"genderInput\" class=\"w3-input \" name=\"gender\"/>\n													<option value=\"\" selected=\"selected\">---</option>\n													<option value=\"M\">Male</option>\n													<option value=\"F\">Female</option>\n												</select>\n											</div>\n										</div>\n									</div>\n									<div class=\"w3-row \">\n										<div class=\"w3-half \">\n											<div class=\"font-weight-bold \">Race</div>\n											<div>\n												<select type=\"text\" placeholder=\"Race\" id=\"raceInput\" class=\"w3-input w3-border \" name=\"race\">\n													<option value=\"\" selected=\"selected\">---</option>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"personRaceTitles") : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":145,"column":13},"end":{"line":147,"column":22}}})) != null ? stack1 : "")
    + "												</select>\n											</div>\n										</div>\n									</div>\n									<div class=\"w3-row \">\n										<div class=\"w3-right-align \">\n											<button class=\"w3-btn w3-round w3-border w3-indigo \" type=\"submit\">Search</button>\n										</div>\n									</div>\n								</div>\n								<table class=\"w3-table w3-striped w3-border w3-bordered w3-hoverable \">\n									<thead id=\"theadStopCountPercent\" class=\"font-weight-bold \">\n										<tr id=\"theadRowStopCountPercent\">\n										</tr>\n									</thead>\n									<tbody id=\"tbodyStopCountPercent\">\n									</tbody>\n								</table>\n							</div>\n						</div>\n					</div>\n					<div class=\"w3-half w3-padding \">\n						<h3>About</h3>\n						<p>Open Data Policing aggregates, visualizes, and publishes public records related to all known traffic stops to have occurred in North Carolina since Jan 01, 2002. Data is available for most North Carolina departments and officers serving populations greater than 10,000. </p>\n						<p>North Carolina law requires all such agencies to report their data on a monthly basis to the NC Department of Justice; however, some datasets are incomplete or remain unreported. Where data sets are incomplete or missing from the website it is because they have not been reported to the state agency from which the site derives its records. Open Data Policing does not have access to, nor does it publish, the names of officers, drivers, or passengers involved in traffic stops. </p>\n						<h3>Dataset Facts</h3>\n						<table class=\"w3-table w3-bordered w3-hoverable w3-border-top \">\n							<tbody>\n								<tr>\n									<td class=\"font-weight-bold \">Timeframe</td>\n									<td>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"beginStopDateTime") || (depth0 != null ? lookupProperty(depth0,"beginStopDateTime") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"beginStopDateTime","hash":{},"data":data,"loc":{"start":{"line":178,"column":13},"end":{"line":178,"column":34}}}) : helper)))
    + " - "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"endStopDateTime") || (depth0 != null ? lookupProperty(depth0,"endStopDateTime") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"endStopDateTime","hash":{},"data":data,"loc":{"start":{"line":178,"column":37},"end":{"line":178,"column":56}}}) : helper)))
    + "</td>\n								</tr>\n								<tr>\n									<td class=\"font-weight-bold \">Stops</td>\n									<td>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"stopCount") || (depth0 != null ? lookupProperty(depth0,"stopCount") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"stopCount","hash":{},"data":data,"loc":{"start":{"line":182,"column":13},"end":{"line":182,"column":26}}}) : helper)))
    + "</td>\n								</tr>\n								<tr>\n									<td class=\"font-weight-bold \">Searches</td>\n									<td>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"searchCount") || (depth0 != null ? lookupProperty(depth0,"searchCount") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"searchCount","hash":{},"data":data,"loc":{"start":{"line":186,"column":13},"end":{"line":186,"column":28}}}) : helper)))
    + "</td>\n								</tr>\n								<tr>\n									<td class=\"font-weight-bold \">Agencies</td>\n									<td>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"agencyCount") || (depth0 != null ? lookupProperty(depth0,"agencyCount") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"agencyCount","hash":{},"data":data,"loc":{"start":{"line":190,"column":13},"end":{"line":190,"column":28}}}) : helper)))
    + "</td>\n								</tr>\n							</tbody>\n						</table>\n					</div>\n				</div>\n			</div>\n		</div>\n	</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "										<tr>\n											<td>\n												<a href=\"/report?var=stateAbbreviation:"
    + container.escapeExpression((lookupProperty(helpers,"urlencode")||(depth0 && lookupProperty(depth0,"urlencode"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"stateAbbreviation") : depth0),{"name":"urlencode","hash":{},"data":data,"loc":{"start":{"line":85,"column":51},"end":{"line":85,"column":82}}}))
    + "&var=agencyTitle:"
    + container.escapeExpression((lookupProperty(helpers,"urlencode")||(depth0 && lookupProperty(depth0,"urlencode"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"agencyTitle") : depth0),{"name":"urlencode","hash":{},"data":data,"loc":{"start":{"line":85,"column":99},"end":{"line":85,"column":124}}}))
    + "\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"agencyTitle") || (depth0 != null ? lookupProperty(depth0,"agencyTitle") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"agencyTitle","hash":{},"data":data,"loc":{"start":{"line":85,"column":126},"end":{"line":85,"column":141}}}) : helper)))
    + "</a>\n											</td>\n											<td>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"stopCount") || (depth0 != null ? lookupProperty(depth0,"stopCount") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"stopCount","hash":{},"data":data,"loc":{"start":{"line":87,"column":15},"end":{"line":87,"column":28}}}) : helper)))
    + "</td>\n										</tr>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "													<option value=\""
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</option>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n"
    + ((stack1 = (lookupProperty(helpers,"partial")||(depth0 && lookupProperty(depth0,"partial"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"head_content",{"name":"partial","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":38,"column":12}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"partial")||(depth0 && lookupProperty(depth0,"partial"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"body_content",{"name":"partial","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":40,"column":0},"end":{"line":199,"column":12}}})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"base-page"),depth0,{"name":"base-page","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n";
},"usePartial":true,"useData":true});
  var templates = Handlebars.templates = Handlebars.templates || {};
  templates['state-page'] = template;
  var partials = Handlebars.partials = Handlebars.partials || {};
  partials['state-page'] = template;


// Source: /usr/local/src/opendatapolicing-static/template/stop-search.hbs

  var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<title>Open Data Policing</title>\n		<meta name=\"description\" content=\"\">\n		<meta name=\"author\" content=\"\">\n		<meta name=\"keywords\" content=\"\">\n		<script src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":7,"column":15},"end":{"line":7,"column":32}}}) : helper)))
    + "/js/sockjs.js\"></script>\n		<script src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":8,"column":15},"end":{"line":8,"column":32}}}) : helper)))
    + "/js/vertx-eventbus.js\"></script>\n		<script src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":9,"column":15},"end":{"line":9,"column":32}}}) : helper)))
    + "/js/enUS/SiteAgencyPage.js\"></script>\n		<script src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":10,"column":15},"end":{"line":10,"column":32}}}) : helper)))
    + "/js/jQuery-Autocomplete/jquery.autocomplete.js\"></script>\n\n		<script>\n\n		function stopSearch() {\n			var stateAbbreviation = $(\"#stateAbbreviationInput\").val();\n			var agencyTitle = $(\"#agencyTitleInput\").val();\n			var stopOfficerId = $(\"#stopOfficerIdInput\").val();\n			var age = $(\"#ageInput\").val();\n			var gender = $(\"#genderInput\").val();\n			var race = $(\"#raceInput\").val();\n			var startDate = $.datepicker.formatDate('yy-mm-dd', $(\"#startDateInput\").datepicker('getDate'));\n			var endDate = $.datepicker.formatDate('yy-mm-dd', $(\"#endDateInput\").datepicker('getDate'));\n			var searchParams = [];\n\n			// stop purposes\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"personPurposeTitles") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":3},"end":{"line":29,"column":12}}})) != null ? stack1 : "")
    + "\n			// stop actions\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"personActionTitles") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":3},"end":{"line":35,"column":12}}})) != null ? stack1 : "")
    + "\n			// other fields\n			if(stateAbbreviation)\n				searchParams.push(\"var=stateAbbreviation:\" + encodeURIComponent(stateAbbreviation));\n			if(agencyTitle)\n				searchParams.push(\"var=agencyTitle:\" + encodeURIComponent(agencyTitle));\n			if(stopOfficerId)\n				searchParams.push(\"var=stopOfficerId:\" + encodeURIComponent(stopOfficerId));\n			if(age)\n				searchParams.push(\"var=age:\" + encodeURIComponent(age));\n			if(gender)\n				searchParams.push(\"var=gender:\" + encodeURIComponent(gender));\n			if(race)\n				searchParams.push(\"var=race:\" + encodeURIComponent(race));\n			if(startDate) {\n				startDate += \"T00:00:00.000["
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"siteZone") || (depth0 != null ? lookupProperty(depth0,"siteZone") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"siteZone","hash":{},"data":data,"loc":{"start":{"line":51,"column":32},"end":{"line":51,"column":44}}}) : helper)))
    + "]\";\n				searchParams.push(\"var=startDate:\" + startDate);\n			}\n			if(endDate) {\n				endDate += \"T23:59:59.999["
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"siteZone") || (depth0 != null ? lookupProperty(depth0,"siteZone") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"siteZone","hash":{},"data":data,"loc":{"start":{"line":55,"column":30},"end":{"line":55,"column":42}}}) : helper)))
    + "]\";\n				searchParams.push(\"var=endDate:\" + endDate);\n			}\n\n			var searchUrl = \"/stop?\" + searchParams.join(\"&\");\n			window.location.href = searchUrl;\n		}\n\n		$(function() {\n			$(\"#stopSearchSubmit\").click(stopSearch);\n			$( \"#tabsAgencies\" ).tabs();\n			$( \".datepicker\" ).datepicker({\n					changeMonth: true\n					, changeYear: true\n					, minDate: new Date("
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"startYear") || (depth0 != null ? lookupProperty(depth0,"startYear") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"startYear","hash":{},"data":data,"loc":{"start":{"line":69,"column":25},"end":{"line":69,"column":38}}}) : helper)))
    + ", 1, 1)\n					, maxDate: \"+0D\"\n					});\n			$( \"#suggestSiteAgencyInput\" ).autocomplete({\n				minChars: 1\n				, dataType: \"json\"\n				, serviceUrl: \"/api/agency\"\n				, paramName: \"q\"\n				, paramPrefix: \"objectSuggest:\"\n				, onSelect: function(suggestion) {\n					$(\"#agencyTitleInput\").val(suggestion.data.agencyTitle);\n					$(\"#stateAbbreviationInput\").val(suggestion.data.stateAbbreviation);\n				}\n				, onHide: function(suggestion) {\n					$(\"#agencyTitleInput\").val(suggestion.data.agencyTitle);\n					$(\"#stateAbbreviationInput\").val(suggestion.data.stateAbbreviation);\n				}\n				, transformResult: function(response) {\n					return {\n						suggestions: jQuery.map(response.list, function(item) {\n							return {\n								value: item.objectTitle\n								, data: item\n								, id: item.pk\n							};\n						})\n					};\n				}\n			});\n		});\n		</script>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "			if($(\"#purposeInput-"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data,"loc":{"start":{"line":27,"column":23},"end":{"line":27,"column":29}}}) : helper)))
    + "\").is(':checked'))\n				searchParams.push(\"var=purpose-"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data,"loc":{"start":{"line":28,"column":35},"end":{"line":28,"column":41}}}) : helper)))
    + ":true\");\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "			if($(\"#actionInput-"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data,"loc":{"start":{"line":33,"column":22},"end":{"line":33,"column":28}}}) : helper)))
    + "\").is(':checked'))\n				searchParams.push(\"var=action-"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data,"loc":{"start":{"line":34,"column":34},"end":{"line":34,"column":40}}}) : helper)))
    + ":true\");\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<div class=\"w3-row \">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"pagination") : depth0)) != null ? lookupProperty(stack1,"pageStart") : stack1)) != null ? lookupProperty(stack1,"currentPage") : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":105,"column":5},"end":{"line":109,"column":12}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"pagination") : depth0)) != null ? lookupProperty(stack1,"pagePrev") : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(13, data, 0),"data":data,"loc":{"start":{"line":111,"column":5},"end":{"line":115,"column":12}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"pagination") : depth0)) != null ? lookupProperty(stack1,"pages") : stack1),{"name":"each","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":117,"column":5},"end":{"line":123,"column":14}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"pagination") : depth0)) != null ? lookupProperty(stack1,"pageNext") : stack1),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.program(22, data, 0),"data":data,"loc":{"start":{"line":125,"column":5},"end":{"line":129,"column":12}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"pagination") : depth0)) != null ? lookupProperty(stack1,"pageEnd") : stack1)) != null ? lookupProperty(stack1,"currentPage") : stack1),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.program(26, data, 0),"data":data,"loc":{"start":{"line":131,"column":5},"end":{"line":135,"column":12}}})) != null ? stack1 : "")
    + "					<span class=\"w3-padding \">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"pagination") : depth0)) != null ? lookupProperty(stack1,"startNum") : stack1), depth0))
    + " - "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"pagination") : depth0)) != null ? lookupProperty(stack1,"endNum") : stack1), depth0))
    + " of "
    + container.escapeExpression((lookupProperty(helpers,"numberFormat")||(depth0 && lookupProperty(depth0,"numberFormat"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"pagination") : depth0)) != null ? lookupProperty(stack1,"numFound") : stack1),"integer","en_US",{"name":"numberFormat","hash":{},"data":data,"loc":{"start":{"line":136,"column":82},"end":{"line":136,"column":136}}}))
    + "</span>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "					<span class=\"w3-padding w3-disabled \" title=\"first page\"><i class=\"fas fa-fast-backward\"></i></span>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "					<a class=\"w3-button \" title=\"first page\" href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"pagination") : depth0)) != null ? lookupProperty(stack1,"pageStart") : stack1)) != null ? lookupProperty(stack1,"url") : stack1), depth0))
    + "\"><i class=\"fas fa-fast-backward\"></i></a>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "					<a class=\"w3-button \" title=\"previous page\" href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"pagination") : depth0)) != null ? lookupProperty(stack1,"pagePrev") : stack1)) != null ? lookupProperty(stack1,"url") : stack1), depth0))
    + "\"><i class=\"fas fa-step-backward\"></i></a>\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "					<span class=\"w3-padding w3-disabled \" title=\"previous page\"><i class=\"fas fa-step-backward\"></i></span>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"currentPage") : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.program(18, data, 0),"data":data,"loc":{"start":{"line":118,"column":6},"end":{"line":122,"column":13}}})) != null ? stack1 : "");
},"16":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "						<span class=\"pagination-active w3-button w3-2017-navy-peony \">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"pageNumber") || (depth0 != null ? lookupProperty(depth0,"pageNumber") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"pageNumber","hash":{},"data":data,"loc":{"start":{"line":119,"column":68},"end":{"line":119,"column":82}}}) : helper)))
    + "</span>\n";
},"18":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "						<a class=\"pagination-link w3-button \" href=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"url","hash":{},"data":data,"loc":{"start":{"line":121,"column":50},"end":{"line":121,"column":57}}}) : helper)))
    + "\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"pageNumber") || (depth0 != null ? lookupProperty(depth0,"pageNumber") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"pageNumber","hash":{},"data":data,"loc":{"start":{"line":121,"column":59},"end":{"line":121,"column":73}}}) : helper)))
    + "</a>\n";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "					<a class=\"w3-button \" title=\"next page\" href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"pagination") : depth0)) != null ? lookupProperty(stack1,"pageNext") : stack1)) != null ? lookupProperty(stack1,"url") : stack1), depth0))
    + "\"><i class=\"fas fa-step-forward\"></i></a>\n";
},"22":function(container,depth0,helpers,partials,data) {
    return "					<span class=\"w3-padding w3-disabled \" title=\"next page\"><i class=\"fas fa-step-forward\"></i></span>\n";
},"24":function(container,depth0,helpers,partials,data) {
    return "					<span class=\"w3-padding w3-disabled \" title=\"last page\"><i class=\"fas fa-fast-forward\"></i></span>\n";
},"26":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "					<a class=\"w3-button \" title=\"last page\" href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"pagination") : depth0)) != null ? lookupProperty(stack1,"pageEnd") : stack1)) != null ? lookupProperty(stack1,"url") : stack1), depth0))
    + "\"><i class=\"fas fa-fast-forward\"></i></a>\n";
},"28":function(container,depth0,helpers,partials,data) {
    return "				</div>\n";
},"30":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	<div id='wrap'>\n\n		<div class=\"w3-2017-navy-peony w3-padding-32 \">\n			<div class=\"w3-content w3-center \">\n				<div class=\"w3-row \">\n					<div class=\"w3-left \">\n						<h1>Find a Traffic Stop</h1>\n					</div>\n					<div class=\"w3-right w3-padding-16 \">\n						<a class=\"w3-btn w3-round w3-border w3-indigo \" href=\"/agency?var=stateAbbreviation:"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"stateAbbreviation") || (depth0 != null ? lookupProperty(depth0,"stateAbbreviation") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"stateAbbreviation","hash":{},"data":data,"loc":{"start":{"line":151,"column":90},"end":{"line":151,"column":111}}}) : helper)))
    + "\">Find an Agency</a>\n					</div>\n				</div>\n			</div>\n		</div>\n\n		<div class=\"w3-light-gray \">\n			<div class=\"w3-content \">\n				<div id=\"w3-row \">\n					<div class=\"w3-half w3-padding \">\n						<h3 class=\"w3-center \">Basic Search</h3>\n						<div class=\"\">\n							<div class=\"w3-row \">\n								<div class=\"w3-rest \">\n									<div class=\"font-weight-bold \">Agency name</div>\n									<div>\n										<input type=\"text\" placeholder=\"Agency Name\" class=\"w3-input w3-border \" name=\"agencySuggest\" id=\"suggestSiteAgencyInput\""
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"agencyTitle") : depth0),{"name":"if","hash":{},"fn":container.program(31, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":167,"column":131},"end":{"line":167,"column":205}}})) != null ? stack1 : "")
    + "/>\n										<input type=\"hidden\" name=\"agencyTitle\" id=\"agencyTitleInput\" value=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"agencyTitle") || (depth0 != null ? lookupProperty(depth0,"agencyTitle") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"agencyTitle","hash":{},"data":data,"loc":{"start":{"line":168,"column":79},"end":{"line":168,"column":94}}}) : helper)))
    + "\"/>\n										<input type=\"hidden\" name=\"stateAbbreviation\" id=\"stateAbbreviationInput\" value=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"stateAbbreviation") || (depth0 != null ? lookupProperty(depth0,"stateAbbreviation") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"stateAbbreviation","hash":{},"data":data,"loc":{"start":{"line":169,"column":91},"end":{"line":169,"column":112}}}) : helper)))
    + "\"/>\n									</div>\n									<div class=\"w3-text-gray \">ex: Durham Police Department</div>\n								</div>\n							</div>\n							<div class=\"w3-row \">\n								<div class=\"w3-half \">\n									<div class=\"font-weight-bold \">Start date</div>\n									<div>\n										<input type=\"text\" placeholder=\"Start date\" id=\"startDateInput\" class=\"datepicker w3-input w3-border \" name=\"startDate\" value=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"startDateStr") || (depth0 != null ? lookupProperty(depth0,"startDateStr") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"startDateStr","hash":{},"data":data,"loc":{"start":{"line":178,"column":137},"end":{"line":178,"column":153}}}) : helper)))
    + "\"/>\n									</div>\n									<div class=\"w3-text-gray \">ex: 8/13/2013</div>\n								</div>\n								<div class=\"w3-half \">\n									<div class=\"font-weight-bold \">End date</div>\n									<div>\n										<input type=\"text\" placeholder=\"End date\" id=\"endDateInput\" class=\"datepicker w3-input w3-border \" name=\"endDate\" value=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"endDateStr") || (depth0 != null ? lookupProperty(depth0,"endDateStr") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"endDateStr","hash":{},"data":data,"loc":{"start":{"line":185,"column":131},"end":{"line":185,"column":145}}}) : helper)))
    + "\"/>\n									</div>\n									<div class=\"w3-text-gray \">ex: 8/13/2013</div>\n								</div>\n							</div>\n							<div class=\"w3-row \">\n								<div class=\"w3-quarter \">\n									<div class=\"font-weight-bold \">Age</div>\n									<div>\n										<input type=\"number\" placeholder=\"Age\" id=\"ageInput\" class=\"w3-input w3-border \" name=\"age\" max=\"130\" min=\"0\" value=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"age") || (depth0 != null ? lookupProperty(depth0,"age") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"age","hash":{},"data":data,"loc":{"start":{"line":194,"column":127},"end":{"line":194,"column":134}}}) : helper)))
    + "\"/>\n									</div>\n								</div>\n								<div class=\"w3-quarter \">\n									<div class=\"font-weight-bold \">Gender</div>\n									<div>\n										<select id=\"genderInput\" class=\"w3-input \" name=\"gender\"/>\n											<option value=\"\">---</option>\n											<option value=\"M\""
    + ((stack1 = (lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"M",(depth0 != null ? lookupProperty(depth0,"gender") : depth0),{"name":"eq","hash":{},"fn":container.program(33, data, 0),"inverse":container.program(35, data, 0),"data":data,"loc":{"start":{"line":202,"column":28},"end":{"line":202,"column":81}}})) != null ? stack1 : "")
    + ">Male</option>\n											<option value=\"F\""
    + ((stack1 = (lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"F",(depth0 != null ? lookupProperty(depth0,"gender") : depth0),{"name":"eq","hash":{},"fn":container.program(33, data, 0),"inverse":container.program(35, data, 0),"data":data,"loc":{"start":{"line":203,"column":28},"end":{"line":203,"column":81}}})) != null ? stack1 : "")
    + ">Female</option>\n										</select>\n									</div>\n								</div>\n							</div>\n							<div class=\"w3-row \">\n								<div class=\"w3-half \">\n									<div class=\"font-weight-bold \">Race</div>\n									<div>\n										<select type=\"text\" placeholder=\"Race\" id=\"raceInput\" class=\"w3-input w3-border \" name=\"race\">\n											<option value=\"\">---</option>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"personRaceTitles") : depth0),{"name":"each","hash":{},"fn":container.program(37, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":214,"column":11},"end":{"line":216,"column":20}}})) != null ? stack1 : "")
    + "										</select>\n									</div>\n								</div>\n							</div>\n							<div class=\"w3-row \">\n								<div class=\"w3-right-align \">\n									<button class=\"w3-btn w3-round w3-border w3-indigo \" type=\"submit\" id=\"stopSearchSubmit\">Search</button>\n								</div>\n							</div>\n						</div>\n					</div>\n					<div class=\"w3-half w3-padding \">\n						<h3 class=\"w3-center \">Advanced Search</h3>\n						<div class=\"\">\n							<div class=\"w3-row \">\n								<div class=\"w3-rest \">\n									<div class=\"font-weight-bold \">Officer ID</div>\n									<div>\n										<input type=\"text\" placeholder=\"Officer ID\" class=\"w3-input w3-border \" name=\"stopOfficerId\" value=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"stopOfficerId") || (depth0 != null ? lookupProperty(depth0,"stopOfficerId") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"stopOfficerId","hash":{},"data":data,"loc":{"start":{"line":235,"column":110},"end":{"line":235,"column":127}}}) : helper)))
    + "\" id=\"stopOfficerIdInput\"/>\n									</div>\n									<div class=\"w3-text-gray \">ex: 227</div>\n								</div>\n							</div>\n							<div class=\"w3-row \">\n								<div class=\"w3-half \">\n									<div class=\"font-weight-bold \">Purpose</div>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"personPurposeTitles") : depth0),{"name":"each","hash":{},"fn":container.program(39, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":243,"column":9},"end":{"line":250,"column":18}}})) != null ? stack1 : "")
    + "								</div>\n								<div class=\"w3-half \">\n									<div class=\"font-weight-bold \">Action</div>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"personActionTitles") : depth0),{"name":"each","hash":{},"fn":container.program(42, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":254,"column":9},"end":{"line":261,"column":18}}})) != null ? stack1 : "")
    + "								</div>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n\n		<div class=\"w3-light-gray \">\n			<div class=\"w3-content \">\n				<h2>Stops ("
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"searchTotal") || (depth0 != null ? lookupProperty(depth0,"searchTotal") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"searchTotal","hash":{},"data":data,"loc":{"start":{"line":272,"column":15},"end":{"line":272,"column":30}}}) : helper)))
    + " total)</h2>\n"
    + ((stack1 = (lookupProperty(helpers,"block")||(depth0 && lookupProperty(depth0,"block"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"body_pagination",{"name":"block","hash":{},"fn":container.program(35, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":273,"column":4},"end":{"line":274,"column":14}}})) != null ? stack1 : "")
    + "				<table class=\"w3-table w3-bordered \"\n					<thead>\n						<tr>\n							<th class=\"font-weight-bold \">Date</th>\n							<th class=\"font-weight-bold \">Gender</th>\n							<th class=\"font-weight-bold \">Race</th>\n							<th class=\"font-weight-bold \">Age</th>\n							<th class=\"font-weight-bold \">Purpose</th>\n							<th class=\"font-weight-bold \">Action</th>\n							<th class=\"font-weight-bold \">Agency</th>\n							<th class=\"font-weight-bold \">Officer ID</th>\n						</tr>\n					</thead>\n					<tbody>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"stops") : depth0),{"name":"each","hash":{},"fn":container.program(44, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":289,"column":6},"end":{"line":304,"column":15}}})) != null ? stack1 : "")
    + "					</tbody>\n				</table>\n"
    + ((stack1 = (lookupProperty(helpers,"block")||(depth0 && lookupProperty(depth0,"block"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"body_pagination",{"name":"block","hash":{},"fn":container.program(35, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":307,"column":4},"end":{"line":308,"column":14}}})) != null ? stack1 : "")
    + "			</div>\n		</div>\n	</div>\n";
},"31":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " value=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"agencyTitle") || (depth0 != null ? lookupProperty(depth0,"agencyTitle") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"agencyTitle","hash":{},"data":data,"loc":{"start":{"line":167,"column":158},"end":{"line":167,"column":173}}}) : helper)))
    + " ("
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"stateAbbreviation") || (depth0 != null ? lookupProperty(depth0,"stateAbbreviation") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"stateAbbreviation","hash":{},"data":data,"loc":{"start":{"line":167,"column":175},"end":{"line":167,"column":196}}}) : helper)))
    + ")\"";
},"33":function(container,depth0,helpers,partials,data) {
    return " selected=\"selected\"";
},"35":function(container,depth0,helpers,partials,data) {
    return "";
},"37":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "											<option value=\""
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "\""
    + ((stack1 = (lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,(depth0 != null ? lookupProperty(depth0,"race") : depth0),{"name":"eq","hash":{},"fn":container.program(33, data, 0),"inverse":container.program(35, data, 0),"data":data,"loc":{"start":{"line":215,"column":35},"end":{"line":215,"column":87}}})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</option>\n";
},"39":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "									<div>\n										<label>\n											<input type=\"checkbox\" id=\"purposeInput-"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data,"loc":{"start":{"line":246,"column":51},"end":{"line":246,"column":57}}}) : helper)))
    + "\" class=\"\" value=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"value") || (depth0 != null ? lookupProperty(depth0,"value") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"value","hash":{},"data":data,"loc":{"start":{"line":246,"column":75},"end":{"line":246,"column":84}}}) : helper)))
    + "\""
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"checked") : depth0),{"name":"if","hash":{},"fn":container.program(40, data, 0),"inverse":container.program(35, data, 0),"data":data,"loc":{"start":{"line":246,"column":85},"end":{"line":246,"column":133}}})) != null ? stack1 : "")
    + "/>\n											<span>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"value") || (depth0 != null ? lookupProperty(depth0,"value") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"value","hash":{},"data":data,"loc":{"start":{"line":247,"column":17},"end":{"line":247,"column":26}}}) : helper)))
    + "</span>\n										</label>\n									</div>\n";
},"40":function(container,depth0,helpers,partials,data) {
    return " checked=\"checked\"";
},"42":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "									<div>\n										<label>\n											<input type=\"checkbox\" id=\"actionInput-"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data,"loc":{"start":{"line":257,"column":50},"end":{"line":257,"column":56}}}) : helper)))
    + "\" class=\"\" value=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"value") || (depth0 != null ? lookupProperty(depth0,"value") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"value","hash":{},"data":data,"loc":{"start":{"line":257,"column":74},"end":{"line":257,"column":83}}}) : helper)))
    + "\""
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"checked") : depth0),{"name":"if","hash":{},"fn":container.program(40, data, 0),"inverse":container.program(35, data, 0),"data":data,"loc":{"start":{"line":257,"column":84},"end":{"line":257,"column":132}}})) != null ? stack1 : "")
    + "/>\n											<span>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"value") || (depth0 != null ? lookupProperty(depth0,"value") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"value","hash":{},"data":data,"loc":{"start":{"line":258,"column":17},"end":{"line":258,"column":26}}}) : helper)))
    + "</span>\n										</label>\n									</div>\n";
},"44":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "						<tr>\n							<td>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"stopDateTime") || (depth0 != null ? lookupProperty(depth0,"stopDateTime") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"stopDateTime","hash":{},"data":data,"loc":{"start":{"line":291,"column":11},"end":{"line":291,"column":27}}}) : helper)))
    + "</td>\n							<td>"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"personGenderTitles") : depth0),{"name":"each","hash":{},"fn":container.program(45, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":292,"column":11},"end":{"line":292,"column":87}}})) != null ? stack1 : "")
    + "</td>\n							<td>"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"personRaceTitles") : depth0),{"name":"each","hash":{},"fn":container.program(45, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":293,"column":11},"end":{"line":293,"column":85}}})) != null ? stack1 : "")
    + "</td>\n							<td>"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"personAges") : depth0),{"name":"each","hash":{},"fn":container.program(45, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":294,"column":11},"end":{"line":294,"column":79}}})) != null ? stack1 : "")
    + "</td>\n							<td>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"stopPurposeTitle") || (depth0 != null ? lookupProperty(depth0,"stopPurposeTitle") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"stopPurposeTitle","hash":{},"data":data,"loc":{"start":{"line":295,"column":11},"end":{"line":295,"column":31}}}) : helper)))
    + "</td>\n							<td>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"stopActionTitle") || (depth0 != null ? lookupProperty(depth0,"stopActionTitle") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"stopActionTitle","hash":{},"data":data,"loc":{"start":{"line":296,"column":11},"end":{"line":296,"column":30}}}) : helper)))
    + "</td>\n							<td>\n								<a href=\"/report?var=stateAbbreviation:"
    + container.escapeExpression((lookupProperty(helpers,"urlencode")||(depth0 && lookupProperty(depth0,"urlencode"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"stateAbbreviation") : depth0),{"name":"urlencode","hash":{},"data":data,"loc":{"start":{"line":298,"column":47},"end":{"line":298,"column":78}}}))
    + "&var=agencyTitle:"
    + container.escapeExpression((lookupProperty(helpers,"urlencode")||(depth0 && lookupProperty(depth0,"urlencode"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"agencyTitle") : depth0),{"name":"urlencode","hash":{},"data":data,"loc":{"start":{"line":298,"column":95},"end":{"line":298,"column":120}}}))
    + "\" class=\"w3-text-indigo \">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"agencyTitle") || (depth0 != null ? lookupProperty(depth0,"agencyTitle") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"agencyTitle","hash":{},"data":data,"loc":{"start":{"line":298,"column":146},"end":{"line":298,"column":161}}}) : helper)))
    + "</a>\n							</td>\n							<td>\n								<a href=\"/report?var=stateAbbreviation:"
    + container.escapeExpression((lookupProperty(helpers,"urlencode")||(depth0 && lookupProperty(depth0,"urlencode"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"stateAbbreviation") : depth0),{"name":"urlencode","hash":{},"data":data,"loc":{"start":{"line":301,"column":47},"end":{"line":301,"column":78}}}))
    + "&var=agencyTitle:"
    + container.escapeExpression((lookupProperty(helpers,"urlencode")||(depth0 && lookupProperty(depth0,"urlencode"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"agencyTitle") : depth0),{"name":"urlencode","hash":{},"data":data,"loc":{"start":{"line":301,"column":95},"end":{"line":301,"column":120}}}))
    + "&var=stopOfficerId:"
    + container.escapeExpression((lookupProperty(helpers,"urlencode")||(depth0 && lookupProperty(depth0,"urlencode"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"stopOfficerId") : depth0),{"name":"urlencode","hash":{},"data":data,"loc":{"start":{"line":301,"column":139},"end":{"line":301,"column":166}}}))
    + "\" class=\"w3-text-indigo \">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"stopOfficerId") || (depth0 != null ? lookupProperty(depth0,"stopOfficerId") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"stopOfficerId","hash":{},"data":data,"loc":{"start":{"line":301,"column":192},"end":{"line":301,"column":209}}}) : helper)))
    + "</a>\n							</td>\n						</tr>\n";
},"45":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(data && lookupProperty(data,"first")),{"name":"if","hash":{},"fn":container.program(35, data, 0),"inverse":container.program(46, data, 0),"data":data,"loc":{"start":{"line":292,"column":39},"end":{"line":292,"column":70}}})) != null ? stack1 : "")
    + container.escapeExpression(container.lambda(depth0, depth0));
},"46":function(container,depth0,helpers,partials,data) {
    return ", ";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n"
    + ((stack1 = (lookupProperty(helpers,"partial")||(depth0 && lookupProperty(depth0,"partial"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"head_content",{"name":"partial","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":100,"column":12}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"partial")||(depth0 && lookupProperty(depth0,"partial"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"body_pagination",{"name":"partial","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(28, data, 0),"data":data,"loc":{"start":{"line":102,"column":0},"end":{"line":139,"column":12}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"partial")||(depth0 && lookupProperty(depth0,"partial"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"body_content",{"name":"partial","hash":{},"fn":container.program(30, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":141,"column":0},"end":{"line":312,"column":12}}})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"base-page"),depth0,{"name":"base-page","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n";
},"usePartial":true,"useData":true});
  var templates = Handlebars.templates = Handlebars.templates || {};
  templates['stop-search'] = template;
  var partials = Handlebars.partials = Handlebars.partials || {};
  partials['stop-search'] = template;


// Source: /usr/local/src/opendatapolicing-static/template/traffic-stop-report.hbs

  var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<title>Open Data Policing | </title>\n		<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"/>\n		<link rel=\"stylesheet\" href=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":5,"column":31},"end":{"line":5,"column":48}}}) : helper)))
    + "/css/w3.css\"/>\n		<link rel=\"stylesheet\" href=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":6,"column":31},"end":{"line":6,"column":48}}}) : helper)))
    + "/css/site-enUS.css\"/>\n		<script src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":7,"column":15},"end":{"line":7,"column":32}}}) : helper)))
    + "/js/jquery-1.12.4.min.js\"></script>\n		<script src=\"https://kit.fontawesome.com/59d19567d5.js\"></script>\n		<script src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":9,"column":15},"end":{"line":9,"column":32}}}) : helper)))
    + "/js/site-enUS.js\"></script>\n		<script src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":10,"column":15},"end":{"line":10,"column":32}}}) : helper)))
    + "/js/d3.v3.js\"></script>\n		<script src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":11,"column":15},"end":{"line":11,"column":32}}}) : helper)))
    + "/js/nv.d3.js\"></script>\n		<link rel=\"stylesheet\" href=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":12,"column":31},"end":{"line":12,"column":48}}}) : helper)))
    + "/css/nv.d3.css\"/>\n<script>//<![CDATA[\n\nfunction personRaceColor(personRaceTitle) {\n	switch(personRaceTitle) {\n		case \"White\":\n			return \"#1c9647\";\n		case \"Black\":\n			return \"#3f5eab\";\n		case \"Indigenous\":\n			return \"#a7d16b\";\n		case \"Asian\":\n			return \"#66addd\";\n		case \"Latinx\":\n			return \"#dc8f27\";\n		default:\n			return \"#7a76b7\";\n	} \n}\n\nfunction svgCensusCountPie() {\n	var url = \""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"siteBaseUrl") || (depth0 != null ? lookupProperty(depth0,"siteBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"siteBaseUrl","hash":{},"data":data,"loc":{"start":{"line":33,"column":12},"end":{"line":33,"column":27}}}) : helper)))
    + "/api/traffic-stop?rows=0&facet=true&facet.field=personRaceTitles\" \n			+ \"&fq=stopDateTime:["
    + container.escapeExpression((lookupProperty(helpers,"urlencode")||(depth0 && lookupProperty(depth0,"urlencode"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"startDateStr") : depth0),{"name":"urlencode","hash":{},"data":data,"loc":{"start":{"line":34,"column":24},"end":{"line":34,"column":50}}}))
    + " TO "
    + container.escapeExpression((lookupProperty(helpers,"urlencode")||(depth0 && lookupProperty(depth0,"urlencode"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"endDateStr") : depth0),{"name":"urlencode","hash":{},"data":data,"loc":{"start":{"line":34,"column":54},"end":{"line":34,"column":78}}}))
    + "]\"\n			+ \""
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"stateAbbreviation") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":6},"end":{"line":35,"column":91}}})) != null ? stack1 : "")
    + "\"\n			+ \""
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"agencyTitle") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":36,"column":6},"end":{"line":36,"column":73}}})) != null ? stack1 : "")
    + "\"\n			;\n	$.get(url, function( searchData ) {\n		var graphData = [];\n		var facetTotal = 0;\n		var personRaceTitles = Object.keys(searchData.facet_fields.personRaceTitles);\n		personRaceTitles.forEach(function(fieldLabel) {\n			facetTotal += searchData.facet_fields.personRaceTitles[fieldLabel];\n		});\n		personRaceTitles.forEach(function(fieldLabel) {\n			var a = searchData.facet_fields.personRaceTitles[fieldLabel];\n			var c = facetTotal == 0 ? 0 : (a / facetTotal);\n			var itemData = { label: fieldLabel, value: c, color: personRaceColor(fieldLabel) };\n			graphData.push(itemData);\n		});\n\n		nv.addGraph(function() {\n			var chart = nv.models.pieChart()\n				.x(function(d) { return d.label })\n				.y(function(d) { return d.value })\n				.showLabels(true)\n				.labelThreshold(.05)\n				.labelType('percent')\n				.donut(true)\n				.donutRatio(0.35)\n				.color(function(d){ return d.data.color;})\n				;\n\n			d3.select('#svgCensusCountPie')\n				.datum(graphData)\n				.transition().duration(350)\n				.call(chart);\n\n			return chart;\n		});\n	});\n}\n//svgCensusCountPie();\n\n\nfunction svgStopCountPie() {\n	var searchData = JSON.parse($($.parseHTML(\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"stopJson") || (depth0 != null ? lookupProperty(depth0,"stopJson") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"stopJson","hash":{},"data":data,"loc":{"start":{"line":77,"column":44},"end":{"line":77,"column":56}}}) : helper)))
    + "\")).text());\n	var graphData = [];\n	var facetTotal = 0;\n	var personRaceTitles = Object.keys(searchData.facet_fields.personRaceTitles);\n	personRaceTitles.forEach(function(fieldLabel) {\n		facetTotal += searchData.facet_fields.personRaceTitles[fieldLabel];\n	});\n	personRaceTitles.forEach(function(fieldLabel) {\n		var a = searchData.facet_fields.personRaceTitles[fieldLabel];\n		var c = facetTotal == 0 ? 0 : (a / facetTotal);\n		var itemData = { label: fieldLabel, value: c, color: personRaceColor(fieldLabel) };\n		graphData.push(itemData);\n	});\n\n	nv.addGraph(function() {\n		var chart = nv.models.pieChart()\n			.x(function(d) { return d.label })\n			.y(function(d) { return d.value })\n			.showLabels(true)\n			.labelThreshold(.05)\n			.labelType('percent')\n			.donut(true)\n			.donutRatio(0.35)\n			.color(function(d){ return d.data.color;})\n			;\n\n		d3.select('#svgStopCountPie')\n			.datum(graphData)\n			.transition().duration(350)\n			.call(chart);\n\n		return chart;\n	});\n}\nsvgStopCountPie();\n\nfunction svgStopCountPercent() {\n	var url = \""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"siteBaseUrl") || (depth0 != null ? lookupProperty(depth0,"siteBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"siteBaseUrl","hash":{},"data":data,"loc":{"start":{"line":114,"column":12},"end":{"line":114,"column":27}}}) : helper)))
    + "/api/traffic-stop?rows=0&facet=true&facet.range.start="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"startDateStr") || (depth0 != null ? lookupProperty(depth0,"startDateStr") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"startDateStr","hash":{},"data":data,"loc":{"start":{"line":114,"column":81},"end":{"line":114,"column":97}}}) : helper)))
    + "&facet.range.end="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"endDateStr") || (depth0 != null ? lookupProperty(depth0,"endDateStr") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"endDateStr","hash":{},"data":data,"loc":{"start":{"line":114,"column":114},"end":{"line":114,"column":128}}}) : helper)))
    + "&facet.range.gap=%2B1YEAR&facet.range={!tag=r1}stopDateTime&facet.pivot={!range=r1}personRaceTitles\"\n			+ \"&fq=stopDateTime:["
    + container.escapeExpression((lookupProperty(helpers,"urlencode")||(depth0 && lookupProperty(depth0,"urlencode"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"startDateStr") : depth0),{"name":"urlencode","hash":{},"data":data,"loc":{"start":{"line":115,"column":24},"end":{"line":115,"column":50}}}))
    + " TO "
    + container.escapeExpression((lookupProperty(helpers,"urlencode")||(depth0 && lookupProperty(depth0,"urlencode"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"endDateStr") : depth0),{"name":"urlencode","hash":{},"data":data,"loc":{"start":{"line":115,"column":54},"end":{"line":115,"column":78}}}))
    + "]\"\n			+ \""
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"stateAbbreviation") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":116,"column":6},"end":{"line":116,"column":91}}})) != null ? stack1 : "")
    + "\"\n			+ \""
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"agencyTitle") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":117,"column":6},"end":{"line":117,"column":73}}})) != null ? stack1 : "")
    + "\"\n			;\n	$.get(url, function( searchData ) {\n		var graphData = [];\n		var $theadRow = $('#theadRowStopCountPercent');\n		var $tbody = $('#tbodyStopCountPercent');\n		$theadRow.empty();\n		$theadRow.append('<th>Year</th>')\n		var yearRows = {}\n		$totalRow = $('<tr><td>Total</td></tr>');\n		for (i = 0; i < searchData.facet_pivot.personRaceTitles.length; i++) {\n			var pivotData = searchData.facet_pivot.personRaceTitles[i];\n			var itemValues = [];\n			var itemData = { key: pivotData.value, seriesIndex: i, values: itemValues, color: personRaceColor(pivotData.value) };\n			var countKeys = Object.keys(pivotData.ranges.stopDateTime.counts);\n\n			$theadRow.append('<th>' + pivotData.value + '</th>')\n\n			countKeys.forEach(function(countKey) {\n				var a = pivotData.ranges.stopDateTime.counts[countKey];\n				var b = searchData.facet_ranges.stopDateTime.counts[countKey];\n				var c = b == 0 ? 0 : (a / b);\n				var year = parseInt(countKey.substr(0, countKey.indexOf('-')));\n				var itemRangeValues = { x: year, y: c, series: i }\n				itemValues.push(itemRangeValues);\n\n				var $yearRow = yearRows[year];\n				if(!$yearRow) {\n					$yearRow = $('<tr><td>' + year + '</td></tr>');\n					$tbody.append($yearRow);\n					yearRows[year] = $yearRow;\n				}\n				$yearRow.append('<td>' + a.toLocaleString('en-US', {maximumFractionDigits:0}) + '</td>');\n			});\n			$totalRow.append('<td>' + pivotData.count.toLocaleString('en-US', {maximumFractionDigits:0}) + '</td>');\n			graphData.push(itemData);\n		}\n		$tbody.append($totalRow);\n\n		nv.addGraph(function() {\n			var chart = nv.models.lineChart()\n				.margin({left: 100})\n				.useInteractiveGuideline(true)\n				.transitionDuration(350)\n				.showLegend(true)\n				.showYAxis(true)\n				.showXAxis(true)\n				.forceY([0, 1])\n				.color(function(d){ \n					return d.color;\n				})\n				;\n\n			chart.xAxis\n				.axisLabel('Year')\n				.tickFormat(d3.format('.0d'))\n				;\n\n			chart.yAxis\n				.axisLabel('Percentage of stops by race')\n				.tickFormat(d3.format('%'));\n				;\n\n			d3.select('#svgStopCountPercent')\n				.datum(graphData)\n				.call(chart);\n\n			return chart;\n		});\n	});\n}\nsvgStopCountPercent();\n\nfunction svgStopCountTotal(stopPurposeTitle) {\n	var url = \""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"siteBaseUrl") || (depth0 != null ? lookupProperty(depth0,"siteBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"siteBaseUrl","hash":{},"data":data,"loc":{"start":{"line":191,"column":12},"end":{"line":191,"column":27}}}) : helper)))
    + "/api/traffic-stop?rows=0&facet=true&facet.range.start="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"startDateStr") || (depth0 != null ? lookupProperty(depth0,"startDateStr") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"startDateStr","hash":{},"data":data,"loc":{"start":{"line":191,"column":81},"end":{"line":191,"column":97}}}) : helper)))
    + "&facet.range.end="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"endDateStr") || (depth0 != null ? lookupProperty(depth0,"endDateStr") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"endDateStr","hash":{},"data":data,"loc":{"start":{"line":191,"column":114},"end":{"line":191,"column":128}}}) : helper)))
    + "&facet.range.gap=%2B1YEAR&facet.range={!tag=r1}stopDateTime&facet.pivot={!range=r1}personRaceTitles,stopPurposeTitle\"\n			+ \"&fq=stopDateTime:["
    + container.escapeExpression((lookupProperty(helpers,"urlencode")||(depth0 && lookupProperty(depth0,"urlencode"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"startDateStr") : depth0),{"name":"urlencode","hash":{},"data":data,"loc":{"start":{"line":192,"column":24},"end":{"line":192,"column":50}}}))
    + " TO "
    + container.escapeExpression((lookupProperty(helpers,"urlencode")||(depth0 && lookupProperty(depth0,"urlencode"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"endDateStr") : depth0),{"name":"urlencode","hash":{},"data":data,"loc":{"start":{"line":192,"column":54},"end":{"line":192,"column":78}}}))
    + "]\"\n			+ \""
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"stateAbbreviation") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":193,"column":6},"end":{"line":193,"column":91}}})) != null ? stack1 : "")
    + "\"\n			+ \""
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"agencyTitle") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":194,"column":6},"end":{"line":194,"column":73}}})) != null ? stack1 : "")
    + "\"\n			+ (stopPurposeTitle ? (\"&fq=stopPurposeTitle:\" + stopPurposeTitle) : \"\")\n			;\n	$.get(url, function( searchData ) {\n		var graphData = [];\n		var $theadRow = $('#theadRowStopCountTotal');\n		var $tbody = $('#tbodyStopCountTotal');\n		$theadRow.empty();\n		$theadRow.append('<th>Year</th>')\n		$theadRow.append('<th>Stop Purpose</th>')\n		var yearRows = {}\n		var totalRows = {}\n		for (i = 0; i < searchData.facet_pivot['personRaceTitles,stopPurposeTitle'].length; i++) {\n			var pivotData = searchData.facet_pivot['personRaceTitles,stopPurposeTitle'][i];\n			var itemValues = [];\n			var itemData = { key: pivotData.value, seriesIndex: i, values: itemValues, color: personRaceColor(pivotData.value) };\n			var countKeys = Object.keys(pivotData.ranges.stopDateTime.counts);\n\n			$theadRow.append('<th>' + pivotData.value + '</th>')\n\n			countKeys.forEach(function(countKey) {\n				var a = pivotData.ranges.stopDateTime.counts[countKey];\n				var b = searchData.facet_ranges.stopDateTime.counts[countKey];\n				var c = a;\n				var year = parseInt(countKey.substr(0, countKey.indexOf('-')));\n				var itemRangeValues = { x: year, y: c, series: i }\n				itemValues.push(itemRangeValues);\n			});\n\n			pivotData.pivot.forEach(function(pivotData2) {\n				var countKeys2 = Object.keys(pivotData2.ranges.stopDateTime.counts);\n				var stopPurposeTitle = pivotData2.value;\n				countKeys2.forEach(function(countKey) {\n					var a = pivotData2.ranges.stopDateTime.counts[countKey];\n					var year = parseInt(countKey.substr(0, countKey.indexOf('-')));\n					var $yearRow = yearRows[year + '-' + stopPurposeTitle];\n					if(!$yearRow) {\n						$yearRow = $('<tr><td>' + year + '</td><td>' + stopPurposeTitle + '</td></tr>');\n						$tbody.append($yearRow);\n						yearRows[year + '-' + stopPurposeTitle] = $yearRow;\n					}\n					$yearRow.append('<td>' + a.toLocaleString('en-US', {maximumFractionDigits:0}) + '</td>');\n				});\n				var $totalRow = totalRows[stopPurposeTitle];\n				if(!$totalRow) {\n					$totalRow = $('<tr><td>Total</td><td>' + stopPurposeTitle + '</td></tr>');\n					totalRows[stopPurposeTitle] = $totalRow;\n				}\n				$totalRow.append('<td>' + pivotData2.count.toLocaleString('en-US', {maximumFractionDigits:0}) + '</td>');\n			});\n			Object.keys(totalRows).forEach(function(key) {\n				$tbody.append(totalRows[key]);\n			});\n			graphData.push(itemData);\n		}\n\n		nv.addGraph(function() {\n			var chart = nv.models.lineChart()\n				.margin({left: 100})\n				.useInteractiveGuideline(true)\n				.transitionDuration(350)\n				.showLegend(true)\n				.showYAxis(true)\n				.showXAxis(true)\n				.color(function(d){ \n					return d.color;\n				})\n				;\n\n			chart.xAxis\n				.axisLabel('Year')\n				.tickFormat(d3.format('.0d'))\n				;\n\n			chart.yAxis\n				.axisLabel('Stops by race')\n				;\n\n			d3.select('#svgStopCountTotal')\n				.datum(graphData)\n				.call(chart);\n\n			return chart;\n		});\n	});\n}\nsvgStopCountTotal();\n\nfunction svgSearchCountTotal(searchTypeTitle) {\n	var url = \""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"siteBaseUrl") || (depth0 != null ? lookupProperty(depth0,"siteBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"siteBaseUrl","hash":{},"data":data,"loc":{"start":{"line":283,"column":12},"end":{"line":283,"column":27}}}) : helper)))
    + "/api/traffic-search?rows=0&facet=true&facet.range.start="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"startDateStr") || (depth0 != null ? lookupProperty(depth0,"startDateStr") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"startDateStr","hash":{},"data":data,"loc":{"start":{"line":283,"column":83},"end":{"line":283,"column":99}}}) : helper)))
    + "&facet.range.end="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"endDateStr") || (depth0 != null ? lookupProperty(depth0,"endDateStr") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"endDateStr","hash":{},"data":data,"loc":{"start":{"line":283,"column":116},"end":{"line":283,"column":130}}}) : helper)))
    + "&facet.range.gap=%2B1YEAR&facet.range={!tag=r1}stopDateTime&facet.pivot={!range=r1}personRaceTitle,searchTypeTitle\"\n			+ \"&fq=stopDateTime:["
    + container.escapeExpression((lookupProperty(helpers,"urlencode")||(depth0 && lookupProperty(depth0,"urlencode"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"startDateStr") : depth0),{"name":"urlencode","hash":{},"data":data,"loc":{"start":{"line":284,"column":24},"end":{"line":284,"column":50}}}))
    + " TO "
    + container.escapeExpression((lookupProperty(helpers,"urlencode")||(depth0 && lookupProperty(depth0,"urlencode"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"endDateStr") : depth0),{"name":"urlencode","hash":{},"data":data,"loc":{"start":{"line":284,"column":54},"end":{"line":284,"column":78}}}))
    + "]\"\n			+ \""
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"stateAbbreviation") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":285,"column":6},"end":{"line":285,"column":91}}})) != null ? stack1 : "")
    + "\"\n			+ \""
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"agencyTitle") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":286,"column":6},"end":{"line":286,"column":73}}})) != null ? stack1 : "")
    + "\"\n			+ (searchTypeTitle ? (\"&fq=searchTypeTitle:\" + searchTypeTitle) : \"\")\n			;\n	$.get(url, function( searchData ) {\n		var graphData = [];\n		var $theadRow = $('#theadRowSearchCountTotal');\n		var $tbody = $('#tbodySearchCountTotal');\n		$theadRow.empty();\n		$theadRow.append('<th>Year</th>')\n		$theadRow.append('<th>Stop Purpose</th>')\n		var yearRows = {}\n		var totalRows = {}\n		for (i = 0; i < searchData.facet_pivot['personRaceTitle,searchTypeTitle'].length; i++) {\n			var pivotData = searchData.facet_pivot['personRaceTitle,searchTypeTitle'][i];\n			var itemValues = [];\n			var itemData = { key: pivotData.value, seriesIndex: i, values: itemValues, color: personRaceColor(pivotData.value) };\n			var countKeys = Object.keys(pivotData.ranges.stopDateTime.counts);\n\n			$theadRow.append('<th>' + pivotData.value + '</th>')\n\n			countKeys.forEach(function(countKey) {\n				var a = pivotData.ranges.stopDateTime.counts[countKey];\n				var b = searchData.facet_ranges.stopDateTime.counts[countKey];\n				var c = a;\n				var year = parseInt(countKey.substr(0, countKey.indexOf('-')));\n				var itemRangeValues = { x: year, y: c, series: i }\n				itemValues.push(itemRangeValues);\n			});\n\n			pivotData.pivot.forEach(function(pivotData2) {\n				var countKeys2 = Object.keys(pivotData2.ranges.stopDateTime.counts);\n				var stopPurposeTitle = pivotData2.value;\n				countKeys2.forEach(function(countKey) {\n					var a = pivotData2.ranges.stopDateTime.counts[countKey];\n					var year = parseInt(countKey.substr(0, countKey.indexOf('-')));\n					var $yearRow = yearRows[year + '-' + stopPurposeTitle];\n					if(!$yearRow) {\n						$yearRow = $('<tr><td>' + year + '</td><td>' + stopPurposeTitle + '</td></tr>');\n						$tbody.append($yearRow);\n						yearRows[year + '-' + stopPurposeTitle] = $yearRow;\n					}\n					$yearRow.append('<td>' + a.toLocaleString('en-US', {maximumFractionDigits:0}) + '</td>');\n				});\n				var $totalRow = totalRows[stopPurposeTitle];\n				if(!$totalRow) {\n					$totalRow = $('<tr><td>Total</td><td>' + stopPurposeTitle + '</td></tr>');\n					totalRows[stopPurposeTitle] = $totalRow;\n				}\n				$totalRow.append('<td>' + pivotData2.count.toLocaleString('en-US', {maximumFractionDigits:0}) + '</td>');\n			});\n			Object.keys(totalRows).forEach(function(key) {\n				$tbody.append(totalRows[key]);\n			});\n			graphData.push(itemData);\n		}\n\n		nv.addGraph(function() {\n			var chart = nv.models.lineChart()\n				.margin({left: 100})\n				.useInteractiveGuideline(true)\n				.transitionDuration(350)\n				.showLegend(true)\n				.showYAxis(true)\n				.showXAxis(true)\n				.color(function(d){ \n					return d.color;\n				})\n				;\n\n			chart.xAxis\n				.axisLabel('Date')\n				.tickFormat(d3.format('.0d'))\n				;\n\n			chart.yAxis\n				.axisLabel('Stops by race')\n				;\n\n			d3.select('#svgSearchCountTotal')\n				.datum(graphData)\n				.call(chart);\n\n			return chart;\n		});\n	});\n}\nsvgSearchCountTotal();\n\nfunction svgSearchRatePercentOfStops() {\n	var stopUrl = \""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"siteBaseUrl") || (depth0 != null ? lookupProperty(depth0,"siteBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"siteBaseUrl","hash":{},"data":data,"loc":{"start":{"line":375,"column":16},"end":{"line":375,"column":31}}}) : helper)))
    + "/api/traffic-stop?rows=0&facet=true&facet.range.start="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"startDateStr") || (depth0 != null ? lookupProperty(depth0,"startDateStr") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"startDateStr","hash":{},"data":data,"loc":{"start":{"line":375,"column":85},"end":{"line":375,"column":101}}}) : helper)))
    + "&facet.range.end="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"endDateStr") || (depth0 != null ? lookupProperty(depth0,"endDateStr") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"endDateStr","hash":{},"data":data,"loc":{"start":{"line":375,"column":118},"end":{"line":375,"column":132}}}) : helper)))
    + "&facet.range.gap=%2B1YEAR&facet.range={!tag=r1}stopDateTime&facet.pivot={!range=r1}personRaceTitles\"\n			+ \"&fq=stopDateTime:["
    + container.escapeExpression((lookupProperty(helpers,"urlencode")||(depth0 && lookupProperty(depth0,"urlencode"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"startDateStr") : depth0),{"name":"urlencode","hash":{},"data":data,"loc":{"start":{"line":376,"column":24},"end":{"line":376,"column":50}}}))
    + " TO "
    + container.escapeExpression((lookupProperty(helpers,"urlencode")||(depth0 && lookupProperty(depth0,"urlencode"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"endDateStr") : depth0),{"name":"urlencode","hash":{},"data":data,"loc":{"start":{"line":376,"column":54},"end":{"line":376,"column":78}}}))
    + "]\"\n			+ \""
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"stateAbbreviation") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":377,"column":6},"end":{"line":377,"column":91}}})) != null ? stack1 : "")
    + "\"\n			+ \""
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"agencyTitle") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":378,"column":6},"end":{"line":378,"column":73}}})) != null ? stack1 : "")
    + "\"\n			;\n	var searchUrl = \""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"siteBaseUrl") || (depth0 != null ? lookupProperty(depth0,"siteBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"siteBaseUrl","hash":{},"data":data,"loc":{"start":{"line":380,"column":18},"end":{"line":380,"column":33}}}) : helper)))
    + "/api/traffic-search?rows=0&facet=true&facet.range.start="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"startDateStr") || (depth0 != null ? lookupProperty(depth0,"startDateStr") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"startDateStr","hash":{},"data":data,"loc":{"start":{"line":380,"column":89},"end":{"line":380,"column":105}}}) : helper)))
    + "&facet.range.end="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"endDateStr") || (depth0 != null ? lookupProperty(depth0,"endDateStr") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"endDateStr","hash":{},"data":data,"loc":{"start":{"line":380,"column":122},"end":{"line":380,"column":136}}}) : helper)))
    + "&facet.range.gap=%2B1YEAR&facet.range={!tag=r1}stopDateTime&facet.pivot={!range=r1}personRaceTitle\"\n			+ \""
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"stateAbbreviation") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":381,"column":6},"end":{"line":381,"column":91}}})) != null ? stack1 : "")
    + "\"\n			+ \""
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"agencyTitle") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":382,"column":6},"end":{"line":382,"column":73}}})) != null ? stack1 : "")
    + "\"\n			;\n	$.get(stopUrl, function( stopData ) {\n		$.get(searchUrl, function( searchData ) {\n			var graphData = [];\n			var $theadRow = $('#theadRowSearchRatePercentOfStops');\n			var $tbody = $('#tbodySearchRatePercentOfStops');\n			$theadRow.empty();\n			$theadRow.append('<th>Year</th>')\n			var yearRows = {}\n			for (i = 0; i < stopData.facet_pivot['personRaceTitles'].length; i++) {\n				var stopPivotData = stopData.facet_pivot['personRaceTitles'][i];\n				var searchPivotData = searchData.facet_pivot['personRaceTitle'][i];\n				var itemValues = [];\n				var itemData = { key: stopPivotData.value, seriesIndex: i, values: itemValues, color: personRaceColor(stopPivotData.value) };\n				var countKeys = Object.keys(stopPivotData.ranges.stopDateTime.counts);\n	\n				$theadRow.append('<th>' + stopPivotData.value + '</th>')\n	\n				countKeys.forEach(function(countKey) {\n					var a = 0;\n					var stopRaceTitleCount = stopPivotData.ranges.stopDateTime.counts[countKey];\n					var searchRaceTitleCount = searchPivotData.ranges.stopDateTime.counts[countKey];\n					if(stopRaceTitleCount && searchRaceTitleCount)\n						a = searchRaceTitleCount / stopRaceTitleCount;\n					var year = parseInt(countKey.substr(0, countKey.indexOf('-')));\n					var itemRangeValues = { x: year, y: a, series: i }\n					itemValues.push(itemRangeValues);\n\n					var $yearRow = yearRows[year];\n					if(!$yearRow) {\n						$yearRow = $('<tr><td>' + year + '</td></tr>');\n						$tbody.append($yearRow);\n						yearRows[year] = $yearRow;\n					}\n					$yearRow.append('<td>' + searchRaceTitleCount.toLocaleString('en-US', {maximumFractionDigits:0}) + ' / ' + stopRaceTitleCount.toLocaleString('en-US', {maximumFractionDigits:0}) + '</td>');\n				});\n				graphData.push(itemData);\n			}\n			var rangeCountKeys = Object.keys(stopData.facet_ranges.stopDateTime.counts);\n			countKeys.forEach(function(countKey) {\n				var stopRangeCount = stopData.facet_ranges.stopDateTime.counts[countKey];\n				var searchRangeCount = searchData.facet_ranges.stopDateTime.counts[countKey];\n				var year = parseInt(countKey.substr(0, countKey.indexOf('-')));\n				var $yearRow = yearRows[year];\n				if($yearRow) {\n					$yearRow.append('<td>' + searchRangeCount.toLocaleString('en-US', {maximumFractionDigits:0}) + ' / ' + stopRangeCount.toLocaleString('en-US', {maximumFractionDigits:0}) + '</td>');\n				}\n			});\n			$theadRow.append('<th>Total</th>')\n	\n			nv.addGraph(function() {\n				var chart = nv.models.lineChart()\n					.margin({left: 100})\n					.useInteractiveGuideline(true)\n					.transitionDuration(350)\n					.showLegend(true)\n					.showYAxis(true)\n					.showXAxis(true)\n					.color(function(d){ return d.color;})\n					;\n	\n				chart.xAxis\n					.axisLabel('Year')\n					.tickFormat(d3.format('.0d'))\n					;\n	\n				chart.yAxis\n					.axisLabel('Percentage of stops by race')\n					.tickFormat(d3.format('%'));\n					;\n	\n				d3.select('#svgSearchRatePercentOfStops')\n					.datum(graphData)\n					.call(chart);\n	\n				return chart;\n			});\n		});\n	});\n}\nsvgSearchRatePercentOfStops();\n\nfunction svgSearchRatePie() {\n	var url = \""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"siteBaseUrl") || (depth0 != null ? lookupProperty(depth0,"siteBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"siteBaseUrl","hash":{},"data":data,"loc":{"start":{"line":466,"column":12},"end":{"line":466,"column":27}}}) : helper)))
    + "/api/traffic-search?rows=0&facet=true&facet.field=personRaceTitle\"\n			+ \"&fq=stopDateTime:["
    + container.escapeExpression((lookupProperty(helpers,"urlencode")||(depth0 && lookupProperty(depth0,"urlencode"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"startDateStr") : depth0),{"name":"urlencode","hash":{},"data":data,"loc":{"start":{"line":467,"column":24},"end":{"line":467,"column":50}}}))
    + " TO "
    + container.escapeExpression((lookupProperty(helpers,"urlencode")||(depth0 && lookupProperty(depth0,"urlencode"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"endDateStr") : depth0),{"name":"urlencode","hash":{},"data":data,"loc":{"start":{"line":467,"column":54},"end":{"line":467,"column":78}}}))
    + "]\"\n			+ \""
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"stateAbbreviation") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":468,"column":6},"end":{"line":468,"column":91}}})) != null ? stack1 : "")
    + "\"\n			+ \""
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"agencyTitle") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":469,"column":6},"end":{"line":469,"column":73}}})) != null ? stack1 : "")
    + "\"\n			;\n	$.get(url, function( searchData ) {\n		var graphData = [];\n		var facetTotal = 0;\n		Object.keys(searchData.facet_fields.personRaceTitle).forEach(function(personRaceTitle) {\n			var fieldLabel = searchData.facet_fields.personRaceTitle[personRaceTitle];\n			facetTotal += searchData.facet_fields.personRaceTitle[personRaceTitle];\n		});\n		Object.keys(searchData.facet_fields.personRaceTitle).forEach(function(personRaceTitle) {\n			var fieldLabel = personRaceTitle;\n			var a = searchData.facet_fields.personRaceTitle[personRaceTitle];\n			var c = facetTotal == 0 ? 0 : (a / facetTotal);\n			var itemData = { label: fieldLabel, value: c, color: personRaceColor(fieldLabel) };\n			graphData.push(itemData);\n		});\n\n		nv.addGraph(function() {\n			var chart = nv.models.pieChart()\n				.x(function(d) { return d.label })\n				.y(function(d) { return d.value })\n				.showLabels(true)\n				.labelThreshold(.05)\n				.labelType('percent')\n				.donut(true)\n				.donutRatio(0.35)\n				.color(function(d){ \n					return d.data.color;\n				})\n				;\n\n			d3.select('#svgSearchRatePie')\n				.datum(graphData)\n				.transition().duration(350)\n				.call(chart);\n\n			return chart;\n		});\n	});\n}\nsvgSearchRatePie();\n\nfunction svgSearchRatePercentTotal() {\n	var url = \""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"siteBaseUrl") || (depth0 != null ? lookupProperty(depth0,"siteBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"siteBaseUrl","hash":{},"data":data,"loc":{"start":{"line":512,"column":12},"end":{"line":512,"column":27}}}) : helper)))
    + "/api/traffic-search?rows=0&facet=true&facet.range.start="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"startDateStr") || (depth0 != null ? lookupProperty(depth0,"startDateStr") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"startDateStr","hash":{},"data":data,"loc":{"start":{"line":512,"column":83},"end":{"line":512,"column":99}}}) : helper)))
    + "&facet.range.end="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"endDateStr") || (depth0 != null ? lookupProperty(depth0,"endDateStr") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"endDateStr","hash":{},"data":data,"loc":{"start":{"line":512,"column":116},"end":{"line":512,"column":130}}}) : helper)))
    + "&facet.range.gap=%2B1YEAR&facet.range={!tag=r1}stopDateTime&facet.pivot={!range=r1}personRaceTitle\"\n			+ \"&fq=stopDateTime:["
    + container.escapeExpression((lookupProperty(helpers,"urlencode")||(depth0 && lookupProperty(depth0,"urlencode"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"startDateStr") : depth0),{"name":"urlencode","hash":{},"data":data,"loc":{"start":{"line":513,"column":24},"end":{"line":513,"column":50}}}))
    + " TO "
    + container.escapeExpression((lookupProperty(helpers,"urlencode")||(depth0 && lookupProperty(depth0,"urlencode"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"endDateStr") : depth0),{"name":"urlencode","hash":{},"data":data,"loc":{"start":{"line":513,"column":54},"end":{"line":513,"column":78}}}))
    + "]\"\n			+ \""
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"stateAbbreviation") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":514,"column":6},"end":{"line":514,"column":91}}})) != null ? stack1 : "")
    + "\"\n			+ \""
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"agencyTitle") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":515,"column":6},"end":{"line":515,"column":73}}})) != null ? stack1 : "")
    + "\"\n			;\n	$.get(url, function( searchData ) {\n		var graphData = [];\n		for (i = 0; i < searchData.facet_pivot.personRaceTitle.length; i++) {\n			var pivotData = searchData.facet_pivot.personRaceTitle[i];\n			var itemValues = [];\n			var itemData = { key: pivotData.value, seriesIndex: i, values: itemValues, color: personRaceColor(pivotData.value) };\n			Object.keys(pivotData.ranges.stopDateTime.counts).forEach(function(countKey) {\n				var a = pivotData.ranges.stopDateTime.counts[countKey];\n				var b = searchData.facet_ranges.stopDateTime.counts[countKey];\n				var c = b == 0 ? 0 : (a / b);\n				var itemRangeValues = { x: parseInt(countKey.substr(0, countKey.indexOf('-'))), y: c, series: i }\n				itemValues.push(itemRangeValues);\n			});\n			graphData.push(itemData);\n		}\n\n		nv.addGraph(function() {\n			var chart = nv.models.lineChart()\n				.margin({left: 100})\n				.useInteractiveGuideline(true)\n				.transitionDuration(350)\n				.showLegend(true)\n				.showYAxis(true)\n				.showXAxis(true)\n				.forceY([0, 1])\n				.color(function(d){ \n					return d.color; \n				})\n				;\n\n			chart.xAxis\n				.axisLabel('Year')\n				.tickFormat(d3.format('.0d'))\n				;\n\n			chart.yAxis\n				.axisLabel('Percentage of searches by race')\n				.tickFormat(d3.format('%'));\n				;\n\n			d3.select('#svgSearchRatePercentTotal')\n				.datum(graphData)\n				.call(chart);\n\n			return chart;\n		});\n	});\n}\nsvgSearchRatePercentTotal();\n\nfunction svgCauseLikelihoodPercent() {\n	var url1 = \"/api/traffic-stop?rows=0&facet=true&facet.pivot=personRaceTitles,stopPurposeTitle&facet.field=stopPurposeTitle\"\n			+ \"&fq=stopDateTime:["
    + container.escapeExpression((lookupProperty(helpers,"urlencode")||(depth0 && lookupProperty(depth0,"urlencode"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"startDateStr") : depth0),{"name":"urlencode","hash":{},"data":data,"loc":{"start":{"line":569,"column":24},"end":{"line":569,"column":50}}}))
    + " TO "
    + container.escapeExpression((lookupProperty(helpers,"urlencode")||(depth0 && lookupProperty(depth0,"urlencode"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"endDateStr") : depth0),{"name":"urlencode","hash":{},"data":data,"loc":{"start":{"line":569,"column":54},"end":{"line":569,"column":78}}}))
    + "]\"\n			+ \""
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"stateAbbreviation") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":570,"column":6},"end":{"line":570,"column":91}}})) != null ? stack1 : "")
    + "\"\n			+ \""
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"agencyTitle") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":571,"column":6},"end":{"line":571,"column":73}}})) != null ? stack1 : "")
    + "\"\n			;\n	$.get(url1, function( stopData ) {\n		var url2 = \"/api/traffic-search?rows=0&facet=true&facet.pivot=personRaceTitle,stopPurposeTitle&facet.field=stopPurposeTitle\"\n				+ \"&fq=stopDateTime:["
    + container.escapeExpression((lookupProperty(helpers,"urlencode")||(depth0 && lookupProperty(depth0,"urlencode"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"startDateStr") : depth0),{"name":"urlencode","hash":{},"data":data,"loc":{"start":{"line":575,"column":25},"end":{"line":575,"column":51}}}))
    + " TO "
    + container.escapeExpression((lookupProperty(helpers,"urlencode")||(depth0 && lookupProperty(depth0,"urlencode"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"endDateStr") : depth0),{"name":"urlencode","hash":{},"data":data,"loc":{"start":{"line":575,"column":55},"end":{"line":575,"column":79}}}))
    + "]\"\n				+ \""
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"stateAbbreviation") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":576,"column":7},"end":{"line":576,"column":92}}})) != null ? stack1 : "")
    + "\"\n				+ \""
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"agencyTitle") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":577,"column":7},"end":{"line":577,"column":74}}})) != null ? stack1 : "")
    + "\"\n				;\n		$.get(url2, function( searchData ) {\n			var whiteSearchPivotData = searchData.facet_pivot['personRaceTitle,stopPurposeTitle'].find(x => x.value === 'White');\n			var whiteStopPivotData = stopData.facet_pivot['personRaceTitles,stopPurposeTitle'].find(x => x.value === 'White')\n			var graphData = [];\n			for (i = 0; i < searchData.facet_pivot['personRaceTitle,stopPurposeTitle'].length; i++) {\n				var currentSearchPivotData = searchData.facet_pivot['personRaceTitle,stopPurposeTitle'][i];\n				if(currentSearchPivotData.value != 'White') {\n					var itemValues = [];\n					var itemData = { key: currentSearchPivotData.value + ' vs. White', seriesIndex: i, values: itemValues };\n					for (j = 0; j < currentSearchPivotData.pivot.length; j++) {\n						var currentSearchRangeData = currentSearchPivotData.pivot[j];\n						var whiteSearchRangeData = whiteSearchPivotData.pivot.find(x => x.value === currentSearchRangeData.value);\n						var currentStopPivotData = stopData.facet_pivot['personRaceTitles,stopPurposeTitle'].find(x => x.value === currentSearchPivotData.value);\n						if(currentStopPivotData && currentStopPivotData.pivot) {\n							var a = currentSearchRangeData.count;\n							var b = currentStopPivotData.pivot.find(x => x.value === currentSearchRangeData.value).count;\n							var c = b == 0 ? 0 : (a / b);\n							var aWhite = whiteSearchRangeData.count;\n							var bWhite = whiteStopPivotData.pivot.find(x => x.value === currentSearchRangeData.value).count;\n							var cWhite = bWhite == 0 ? 0 : (aWhite / bWhite);\n							var z = (c - cWhite)/cWhite;\n							if(!c || !isFinite(z))\n								z = 0;\n							var itemRangeValues = { label: currentSearchRangeData.value, value: z }\n							itemValues.push(itemRangeValues);\n						}\n					}\n					graphData.push(itemData);\n				}\n			}\n\n			nv.addGraph(function() {\n				var chart = nv.models.multiBarHorizontalChart()\n					.x((d) => d.label)\n					.y((d) => d.value)\n					.margin({top: 20, right: 50, bottom: 20, left: 180})\n					.showValues(true)\n					.tooltips(true)\n					.transitionDuration(350)\n					.showControls(false)\n					;\n\n				chart.yAxis\n					.axisLabel('Additional percentage or search by search-cause')\n					.tickFormat(d3.format('%'));\n					;\n\n				chart\n					.valueFormat(d3.format('%'));\n					;\n\n				d3.select('#svgCauseLikelihoodPercent')\n					.datum(graphData)\n					.attr('width', \"100%\")\n					.attr('height', \"100%\")\n					.attr('preserveAspectRatio', \"xMinYMin\")\n					.call(chart)\n					;\n\n				nv.utils.windowResize(chart.update);\n\n				return chart;\n			});\n		});\n	});\n}\nsvgCauseLikelihoodPercent();\n//]]></script>\n		<script>\n		$(function() {\n			$( \"#tabsStopCountPercent\" ).tabs();\n			$( \"#tabsStopCountTotal\" ).tabs();\n			$( \"#tabsSearchCountTotal\" ).tabs();\n			$( \"#tabsSearchRatePercentOfStops\" ).tabs();\n			$( \"#tabsSearchRatePercentTotal\" ).tabs();\n		});\n		</script>\n\n";
},"2":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "&fq=stateAbbreviation:"
    + container.escapeExpression((lookupProperty(helpers,"urlencode")||(depth0 && lookupProperty(depth0,"urlencode"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"stateAbbreviation") : depth0),{"name":"urlencode","hash":{},"data":data,"loc":{"start":{"line":35,"column":53},"end":{"line":35,"column":84}}}));
},"4":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "&fq=agencyTitle:"
    + container.escapeExpression((lookupProperty(helpers,"urlencode")||(depth0 && lookupProperty(depth0,"urlencode"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"agencyTitle") : depth0),{"name":"urlencode","hash":{},"data":data,"loc":{"start":{"line":36,"column":41},"end":{"line":36,"column":66}}}));
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n\n		<div class=\"w3-2017-navy-peony w3-padding-32 \">\n			<div class=\"w3-content w3-center \">\n				<div class=\"w3-row w3-padding \">\n					<div class=\"w3-left \">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"stopOfficerId") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":663,"column":6},"end":{"line":668,"column":13}}})) != null ? stack1 : "")
    + "					</div>\n					<div class=\"w3-right w3-padding-16 \">\n						<a class=\"w3-btn w3-round w3-border w3-indigo \" href=\"/stop?var=stateAbbreviation:"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"stateAbbreviation") || (depth0 != null ? lookupProperty(depth0,"stateAbbreviation") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"stateAbbreviation","hash":{},"data":data,"loc":{"start":{"line":671,"column":88},"end":{"line":671,"column":109}}}) : helper)))
    + "\">Find a Stop</a>\n					</div>\n				</div>\n			</div>\n		</div>\n\n		<div class=\"w3-light-gray \">\n			<div class=\"w3-content w3-padding \">\n				<div>\n					<svg id=\"svgCensusCountPie\" style=\"width: 600px; height: 400px; \"></svg>\n				</div>\n				<h2 class=\"w3-text-2017-navy-peony \">Traffic Stops</h2>\n				<h3 class=\"w3-text-2017-navy-peony \">Traffic Stops (percentage by race/ethnic composition)</h3>\n				<p>These graphs reflect the race/ethnic composition of drivers stopped by law enforcement officers in the jurisdiction since the department began reporting its data to the state. </p>\n				<div class=\"w3-row \">\n					<div class=\"w3-third \">\n						<div>\n							<svg id=\"svgStopCountPie\" style=\"width: 300px; height: 400px; \"></svg>\n						</div>\n						<div>\n							<select id=\"selectStopCountPie\" onchange=\"svgStopCountPie(this.value)\">\n								<option value=\"\">Total</option>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"years") : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":693,"column":8},"end":{"line":695,"column":17}}})) != null ? stack1 : "")
    + "							</select>\n						</div>\n						<p class=\"font-style-italic \">Adjusting the drop down menu will display the race/ethnic composition breakdown of stops on a year-by-year basis. Some percentages may be based on low levels of observation. </p>\n					</div>\n					<div class=\"w3-twothird \">\n						<h3 class=\"w3-text-2017-navy-peony \">Longitudinal view of annual traffic stops</h3>\n						<div id=\"tabsStopCountPercent\">\n							<ul>\n								<li><a href=\"#tabsStopCountPercent-1\">Chart</a></li>\n								<li><a href=\"#tabsStopCountPercent-2\">Data</a></li>\n							</ul>\n							<div id=\"tabsStopCountPercent-1\">\n								<div>\n									<svg id=\"svgStopCountPercent\" style=\"width: 600px; height: 400px; \"></svg>\n								</div>\n								<p class=\"font-style-italic \">Drag the cursor over the graph to see the race/ethnic composition breakdown for any given year. Some percentages may be based on low levels of observation. Click the \"Data\" tab to review the actual raw counts from the NC Department of Justice. </p>\n							</div>\n							<div id=\"tabsStopCountPercent-2\">\n								<table class=\"w3-table w3-striped w3-border w3-bordered w3-hoverable \">\n									<thead id=\"theadStopCountPercent\" class=\"font-weight-bold \">\n										<tr id=\"theadRowStopCountPercent\">\n										</tr>\n									</thead>\n									<tbody id=\"tbodyStopCountPercent\">\n									</tbody>\n								</table>\n							</div>\n						</div>\n					</div>\n				</div>\n	\n	\n				<h3 class=\"w3-text-2017-navy-peony \">Departmental Stop Count</h3>\n				<p>This graph displays the number of traffic stops broken down by stop purpose and ethnicity. Adjusting the drop down menu will display the individual stop counts relative to ethnic groups on a year-by-year basis. </p>\n				<div>\n					<div id=\"tabsStopCountTotal\">\n						<ul>\n							<li><a href=\"#tabsStopCountTotal-1\">Chart</a></li>\n							<li><a href=\"#tabsStopCountTotal-2\">Data</a></li>\n						</ul>\n						<div id=\"tabsStopCountTotal-1\">\n							<div>\n								<svg id=\"svgStopCountTotal\" style=\"width: 600px; height: 400px; \"></svg>\n							</div>\n							<p class=\"font-style-italic \">Drag the cursor over the graph to see the race/ethnic composition breakdown for any given year. Some percentages may be based on low levels of observation. Click the \"Data\" tab to review the actual raw counts from the NC Department of Justice. </p>\n						</div>\n						<div id=\"tabsStopCountTotal-2\">\n							<table class=\"w3-table w3-striped w3-border w3-bordered w3-hoverable \">\n								<thead id=\"theadStopCountTotal\" class=\"font-weight-bold \">\n									<tr id=\"theadRowStopCountTotal\">\n									</tr>\n								</thead>\n								<tbody id=\"tbodyStopCountTotal\">\n								</tbody>\n							</table>\n						</div>\n					</div>\n				</div>\n\n				<p class=\"font-style-italic \">Drag the cursor over the graph to see the racial breakdown for any given year. Some percentages may be based on low levels of observation. Click the “Data” tab to review the raw stop data. </p>\n				<h3 class=\"w3-text-2017-navy-peony \">Departmental Search Count</h3>\n				<p>This graph displays the number of searches broken down by search type and ethnicity. Adjusting the drop down menu will display the individual search counts relative to ethnic groups on a year-by-year basis. </p>\n				<div>\n					<div id=\"tabsSearchCountTotal\">\n						<ul>\n							<li><a href=\"#tabsSearchCountTotal-1\">Chart</a></li>\n							<li><a href=\"#tabsSearchCountTotal-2\">Data</a></li>\n						</ul>\n						<div id=\"tabsSearchCountTotal-1\">\n							<div>\n								<svg id=\"svgSearchCountTotal\" style=\"width: 600px; height: 400px; \"></svg>\n							</div>\n							<p class=\"font-style-italic \">Drag the cursor over the graph to see the race/ethnic composition breakdown for any given year. Some percentages may be based on low levels of observation. Click the \"Data\" tab to review the actual raw counts from the NC Department of Justice. </p>\n						</div>\n						<div id=\"tabsSearchCountTotal-2\">\n							<table class=\"w3-table w3-striped w3-border w3-bordered w3-hoverable \">\n								<thead id=\"theadSearchCountTotal\" class=\"font-weight-bold \">\n									<tr id=\"theadRowSearchCountTotal\">\n									</tr>\n								</thead>\n								<tbody id=\"tbodySearchCountTotal\">\n								</tbody>\n							</table>\n						</div>\n					</div>\n				</div>\n\n				<p class=\"font-style-italic \">Drag the cursor over the graph to see the racial breakdown for any given year. Some percentages may be based on low levels of observation. Click the “Data” tab to review the raw stop data. </p>\n				<h2 class=\"w3-text-2017-navy-peony \">Departmental Search Rate</h2>\n				<h3 class=\"w3-text-2017-navy-peony \">Average Departmental Search Rate For Vehicle Stops</h3>\n				<p>This graph is a longitudinal representation of the average departmental search rate for vehicle stops since the department began reporting its data to the state. The black line represents the overall search rate for all motorists. </p>\n				<div>\n					<div id=\"tabsSearchRatePercentOfStops\">\n						<ul>\n							<li><a href=\"#tabsSearchRatePercentOfStops-1\">Chart</a></li>\n							<li><a href=\"#tabsSearchRatePercentOfStops-2\">Data</a></li>\n						</ul>\n						<div id=\"tabsSearchRatePercentOfStops-1\">\n							<div>\n								<svg id=\"svgSearchRatePercentOfStops\" style=\"width: 600px; height: 400px; \"></svg>\n							</div>\n							<p class=\"font-style-italic \">Drag the cursor over the graph to see the race/ethnic composition breakdown for any given year. Some percentages may be based on low levels of observation. Click the \"Data\" tab to review the actual raw counts from the NC Department of Justice. </p>\n						</div>\n						<div id=\"tabsSearchRatePercentOfStops-2\">\n							<table class=\"w3-table w3-striped w3-border w3-bordered w3-hoverable \">\n								<thead id=\"theadSearchRatePercentOfStops\" class=\"font-weight-bold \">\n									<tr id=\"theadRowSearchRatePercentOfStops\">\n									</tr>\n								</thead>\n								<tbody id=\"tbodySearchRatePercentOfStops\">\n								</tbody>\n							</table>\n						</div>\n					</div>\n				</div>\n\n				<p>Drag the cursor over the graph to see the race/ethnic composition breakdown for any given year. Some percentages may be based on low levels of observation. Click the \"Data\" tab to review the actual stop/search counts from the NC Department of Justice. </p>\n				<h3 class=\"w3-text-2017-navy-peony \">Search Data by Race/Ethnic Composition</h3>\n				<p>These graphs reflect the race/ethnic composition of drivers searched by law enforcement officers in the jurisdiction since the department began reporting its data to the state. </p>\n				<div>\n					<svg id=\"svgSearchRatePie\" style=\"width: 600px; height: 400px; \"></svg>\n				</div>\n\n				<p class=\"font-style-italic \">Adjusting the drop down menu will display the race/ethnic composition breakdown of stops on a year-by-year basis. Some percentages may be based on low levels of observation. </p>\n				<h3 class=\"w3-text-2017-navy-peony \">Longitudinal view of annual percent of search by race/ethnic composition</h3>\n				<div>\n					<div id=\"tabsSearchRatePercentTotal\">\n						<ul>\n							<li><a href=\"#tabsSearchRatePercentTotal-1\">Chart</a></li>\n							<li><a href=\"#tabsSearchRatePercentTotal-2\">Data</a></li>\n						</ul>\n						<div id=\"tabsSearchRatePercentTotal-1\">\n							<div>\n								<svg id=\"svgSearchRatePercentTotal\" style=\"width: 600px; height: 400px; \"></svg>\n							</div>\n							<p class=\"font-style-italic \">Drag the cursor over the graph to see the race/ethnic composition breakdown for any given year. Some percentages may be based on low levels of observation. Click the \"Data\" tab to review the actual raw counts from the NC Department of Justice. </p>\n						</div>\n						<div id=\"tabsSearchRatePercentTotal-2\">\n							<table class=\"w3-table w3-striped w3-border w3-bordered w3-hoverable \">\n								<thead id=\"theadSearchRatePercentTotal\" class=\"font-weight-bold \">\n									<tr id=\"theadRowSearchRatePercentTotal\">\n									</tr>\n								</thead>\n								<tbody id=\"tbodySearchRatePercentTotal\">\n								</tbody>\n							</table>\n						</div>\n					</div>\n				</div>\n\n				<p class=\"font-style-italic \">Drag the cursor over the graph to see the race/ethnic composition breakdown for any given year. Some percentages may be based on low levels of observation. Click the \"Data\" tab to review the actual raw counts from the NC Department of Justice. </p>\n				<div>\n					<svg id=\"svgCauseLikelihoodPercent\" style=\"width: 600px; height: 400px; \"></svg>\n				</div>\n				<div>\n					<svg id=\"svgContrabandHitRate\" style=\"width: 600px; height: 400px; \"></svg>\n				</div>\n				<div>\n					<svg id=\"svgUseOfForcePie\" style=\"width: 600px; height: 400px; \"></svg>\n				</div>\n				<div>\n					<svg id=\"svgUseOfForceTotal\" style=\"width: 600px; height: 400px; \"></svg>\n				</div>\n				<footer class=\"w3-center w3-black w3-text-white w3-padding-24 \">\n					<div>\n						<a href=\"https://github.com/Southern-Coalition-Team-19/southerncoalition\" class=\"w3-small \">This site is open source.</a>\n						<a href=\"https://www.openshift.com/products/online/\"><span class=\"w3-small \">Powered by </span><img alt=\"\" class=\"w3-image \" style=\"display: inline-block; width: 100px; margin: 0 10px;\" src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":862,"column":197},"end":{"line":862,"column":214}}}) : helper)))
    + "/svg/openshift.svg\"/></a>\n					</div>\n				</footer>\n			</div>\n		</div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "						<h2>Data for Officer ID: "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"stopOfficerId") || (depth0 != null ? lookupProperty(depth0,"stopOfficerId") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"stopOfficerId","hash":{},"data":data,"loc":{"start":{"line":664,"column":31},"end":{"line":664,"column":48}}}) : helper)))
    + "</h2>\n						<h3>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"agencyTitle") || (depth0 != null ? lookupProperty(depth0,"agencyTitle") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"agencyTitle","hash":{},"data":data,"loc":{"start":{"line":665,"column":10},"end":{"line":665,"column":25}}}) : helper)))
    + "</h3>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "						<h2>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"agencyTitle") || (depth0 != null ? lookupProperty(depth0,"agencyTitle") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"agencyTitle","hash":{},"data":data,"loc":{"start":{"line":667,"column":10},"end":{"line":667,"column":25}}}) : helper)))
    + "</h2>\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "								<option value=\""
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</option>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n"
    + ((stack1 = (lookupProperty(helpers,"partial")||(depth0 && lookupProperty(depth0,"partial"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"head_content",{"name":"partial","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":657,"column":12}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = (lookupProperty(helpers,"partial")||(depth0 && lookupProperty(depth0,"partial"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"body_content",{"name":"partial","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":657,"column":13},"end":{"line":867,"column":12}}})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"base-page"),depth0,{"name":"base-page","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n";
},"usePartial":true,"useData":true});
  var templates = Handlebars.templates = Handlebars.templates || {};
  templates['traffic-stop-report'] = template;
  var partials = Handlebars.partials = Handlebars.partials || {};
  partials['traffic-stop-report'] = template;



})();