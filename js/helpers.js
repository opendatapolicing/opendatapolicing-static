(function () {
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

  return "<!DOCTYPE html>\n<html lang=\"en\" style=\"height: 100%;\">\n	<head>\n		<meta charset=\"utf-8\">\n		<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\n		<script src=\"https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js\"></script>\n		<script src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":8,"column":15},"end":{"line":8,"column":32}}}) : helper)))
    + "/js/helpers.js\"></script>\n\n"
    + ((stack1 = (lookupProperty(helpers,"block")||(depth0 && lookupProperty(depth0,"block"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"head_content",{"name":"block","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":0},"end":{"line":11,"column":10}}})) != null ? stack1 : "")
    + "	</head>\n	<body style=\"height: 100%;\">\n		<div class=\"w3-top w3-2017-navy-peony \">\n			<div class=\"w3-bar w3-content \">\n				<div class=\"w3-dropdown-hover w3-hide-medium w3-hide-large \">\n					<button class=\"w3-button \">\n						<i class=\"fas fa-bars\"></i>\n					</button>\n					<div class=\"w3-dropdown-content w3-bar-block w3-card-4 \">\n						<a class=\"w3-bar-item w3-button \" href=\"/about\">About</a>\n					</div>\n				</div>\n				<a class=\"w3-bar-item w3-button font-weight-bold \" href=\"/\">Open Data Policing</a>\n				<a class=\"w3-bar-item w3-hide-small \" href=\"/about\">About</a>\n			</div>\n		</div>\n"
    + ((stack1 = (lookupProperty(helpers,"block")||(depth0 && lookupProperty(depth0,"block"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"body_content",{"name":"block","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":0},"end":{"line":29,"column":10}}})) != null ? stack1 : "")
    + "\n		<div class=\"about-footer\">\n			<div class=\"container\">\n				<div class=\"row\">\n					<div class=\"col-sm-6 justify\">\n						<h3>About Open Data Policing</h3>\n						<p>\n							Open Data Policing is a first-of-its-kind platform that aims to\n							make real the recommendation of the President’s Task Force on\n							21st Century Policing to make stop, search, and use-of-force\n							“data...publicly available to ensure transparency.” The site\n							currently aggregates, visualizes, and publishes public records\n							related to all known traffic stops to have occurred in North\n							Carolina since 2002, in Maryland since 2013, and in Illinois\n							since 2005. Data is collected in all states pursuant to mandatory\n							data collection statutes and reported monthly to the NC State\n							Bureau of Investigation, Maryland State Police, and Illinois\n							State Police. The platform does not alter or manipulate raw data.\n							Where data sets are incomplete or missing, it is because they\n							have not been reported to the state agency from which the site\n							derives its records. Although the site permits users to identify\n							the career enforcement patterns of individual officers associated\n							with known traffic stops, <b>Open Data Policing does not have\n								access to, nor does it publish, the names or drivers,\n								passengers, or officers involved in traffic stops.</b>\n						</p>\n\n					</div>\n					<div class=\"col-sm-3 justify\">\n						<h3>Donate</h3>\n						<p>Open Data Policing is a project of the Southern Coalition\n							for Social Justice. To support the work of the Open Data Policing\n							initiative, click here.\n						<ul class=\"links list-unstyled\">\n							<li><a\n								href=\"https://www.southerncoalition.org/donate-bloomerang/\">Donate</a></li>\n						</ul>\n						</p>\n					</div>\n					<div class=\"col-sm-3\">\n						<h3>Connect</h3>\n						<ul class=\"links list-unstyled\">\n							<li><a href=\"http://www.southerncoalition.org/contact-us/\">Contact\n									Us</a></li>\n							<li><a href=\"http://twitter.com/scsj\">Twitter</a></li>\n							<li><a href=\"http://facebook.com/southerncoalition\">Facebook</a></li>\n						</ul>\n					</div>\n				</div>\n			</div>\n		</div>\n\n		<div class=\"affix-offset-bottom\" id=\"footer\">\n			<div class=\"container\">\n				<p class=\"small credit\">\n					Open Data Policing - <a href='http://www.southerncoalition.org/'>Southern\n						Coalition for Social Justice</a> - <a href=\"/admin/\">Admin</a>\n				</p>\n			</div>\n		</div>\n	</body>\n</html>\n";
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

  return "<div class=\"w3-quarter \">\n	<img src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":2,"column":11},"end":{"line":2,"column":28}}}) : helper)))
    + "/svg/state-"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"stateAbbreviation") || (depth0 != null ? lookupProperty(depth0,"stateAbbreviation") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"stateAbbreviation","hash":{},"data":data,"loc":{"start":{"line":2,"column":39},"end":{"line":2,"column":60}}}) : helper)))
    + ".svg\" class=\"state-img w3-img \"/>\n	<p><span class=\"state-stop-count \">24+ million</span><span> stops</span></p>\n	<a class=\"state-search-link \" href=\"\" class=\"w3-btn \">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"stateName") || (depth0 != null ? lookupProperty(depth0,"stateName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"stateName","hash":{},"data":data,"loc":{"start":{"line":4,"column":55},"end":{"line":4,"column":68}}}) : helper)))
    + " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"stateAbbreviation") || (depth0 != null ? lookupProperty(depth0,"stateAbbreviation") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"stateAbbreviation","hash":{},"data":data,"loc":{"start":{"line":4,"column":69},"end":{"line":4,"column":90}}}) : helper)))
    + "</a>\n</div>\n";
},"useData":true});
  var templates = Handlebars.templates = Handlebars.templates || {};
  templates['home-page-state'] = template;
  var partials = Handlebars.partials = Handlebars.partials || {};
  partials['home-page-state'] = template;


// Source: /usr/local/src/opendatapolicing-static/template/home-page.hbs

  var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<title>Open Data Policing</title>\n		<meta name=\"description\" content=\"\">\n		<meta name=\"author\" content=\"\">\n		<meta name=\"keywords\" content=\"\">\n		<link rel=\"stylesheet\" href=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":7,"column":31},"end":{"line":7,"column":48}}}) : helper)))
    + "/css/w3.css\" />\n		<link rel=\"stylesheet\" href=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":8,"column":31},"end":{"line":8,"column":48}}}) : helper)))
    + "/css/site-enUS.css\" />\n		<script src=\"https://kit.fontawesome.com/59d19567d5.js\"></script>\n		<script src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":10,"column":15},"end":{"line":10,"column":32}}}) : helper)))
    + "/js/jquery-1.12.4.min.js\"></script>\n		<script src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":11,"column":15},"end":{"line":11,"column":32}}}) : helper)))
    + "/js/moment.min.js\"></script>\n		<script src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":12,"column":15},"end":{"line":12,"column":32}}}) : helper)))
    + "/js/jqDatePicker.js\"></script>\n		<script src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":13,"column":15},"end":{"line":13,"column":32}}}) : helper)))
    + "/js/site-enUS.js\"></script>\n		<script>\n		$(document).ready(function() {\n			Handlebars.registerHelper('json', function (content) {\n			    return JSON.stringify(content);\n			});\n			$.ajax({\n				url: '/api/state?fl=pk,stateName,stateAbbreviation'\n				, dataType: 'json'\n				, type: 'GET'\n				, contentType: 'application/json; charset=utf-8'\n				, success: function(data) {\n					data.list.forEach(function(state) {\n						state['staticBaseUrl'] = '"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"staticBaseUrl") || (depth0 != null ? lookupProperty(depth0,"staticBaseUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"staticBaseUrl","hash":{},"data":data,"loc":{"start":{"line":26,"column":32},"end":{"line":26,"column":51}}}) : helper))) != null ? stack1 : "")
    + "';\n						$('#state-list').append(Handlebars.templates['home-page-state'](state));\n					})\n				}\n			});\n		});\n		</script>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "</head>\n<body style=\"height: 100%;\">\n	<div id='wrap'>\n\n		<div class=\"w3-top w3-2017-navy-peony \">\n			<div class=\"w3-bar w3-content \">\n				<div class=\"w3-dropdown-hover w3-hide-medium w3-hide-large \">\n					<button class=\"w3-button \">\n						<i class=\"fas fa-bars\"></i>\n					</button>\n					<div class=\"w3-dropdown-content w3-bar-block w3-card-4 \">\n						<a class=\"w3-bar-item w3-button \" href=\"/about\">About</a>\n					</div>\n				</div>\n				<a class=\"w3-bar-item w3-button font-weight-bold \" href=\"/\">Open Data Policing</a>\n				<a class=\"w3-bar-item w3-hide-small \" href=\"/about\">About</a>\n			</div>\n		</div>\n\n		<div class=\"w3-2017-navy-peony w3-padding-64 \">\n			<div class=\"w3-content w3-center \">\n				<div class=\"row\">\n					<h1 class='title'>Open Data Policing</h1>\n					<p class='tagline'>Search all known North Carolina, Maryland, and Illinois traffic stops</p>\n				</div>\n				<div id=\"state-list\" class=\"w3-row\">\n				</div>\n			</div>\n		</div>\n\n		<div class=\"state-featurette\">\n			<div class=\"container\">\n				<div class=\"row\">\n					<div class=\"col-md-10 col-md-offset-1\">\n						<blockquote>\n							<p>“This platform presents the information in a manner that\n								increases the transparency of the Fayetteville Police Department\n								and improves the community and police relationship.”</p>\n							<footer>Harold Medlock, Fayetteville Police Chief</footer>\n						</blockquote>\n					</div>\n				</div>\n				<hr class=\"half-rule\">\n				<div class=\"row\">\n					<div class=\"col-sm-4\">\n						<h3>Locate an Officer's Career Stop and Search History</h3>\n						<p class=\"justify\">Stopped by the police? Use our “Find a\n							Stop” feature to locate your traffic stop. Click on the\n							associated Officer ID number to display the enforcement history\n							of the officer who stopped you. Maryland data includes an\n							officer’s stop, search, and contraband seizure data, broken down\n							by race and ethnicity. North Carolina data includes these\n							features in addition to use-of-force data (traffic stops only).</p>\n					</div>\n					<div class=\"col-sm-4\">\n						<h3>Review Departmental Enforcement Patterns</h3>\n						<p class=\"justify\">Learn more about the enforcement patterns\n							of individual police agencies. Metrics include stops, searches,\n							search rates, contraband seizure rates, and the likelihood of\n							search for individual stop causes—each broken down by race and\n							ethnicity. Click on the “Agencies” tab to review who is stopped\n							and searched in a given jurisdiction and how enforcement patterns\n							compare to local demographics, displayed through the most\n							recently available census data.</p>\n					</div>\n					<div class=\"col-sm-4\">\n						<h3>Compare Enforcement Practices Among Officers and\n							Jurisdictions</h3>\n						<p class=\"justify\">Our platform allows users—including those\n							in police management—to easily compare enforcement patterns among\n							individual officers and agencies, evaluate the frequency and\n							efficiency of searches, and monitor for racially disparate\n							enforcement practices. Police managers who possess a master list\n							of Officer ID codes can bypass the “Find a Stop” page to directly\n							access data on individual officers under their command.</p>\n					</div>\n				</div>\n			</div>\n		</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n"
    + ((stack1 = (lookupProperty(helpers,"partial")||(depth0 && lookupProperty(depth0,"partial"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"head_content",{"name":"partial","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":33,"column":12}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"partial")||(depth0 && lookupProperty(depth0,"partial"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"body_content",{"name":"partial","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":0},"end":{"line":115,"column":12}}})) != null ? stack1 : "")
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



})();