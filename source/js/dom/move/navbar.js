TouchUI.prototype.DOM.move.navbar = {
	mainItems: ['#all_touchui_settings', '#navbar_login', '.hidden_touch', '#touchui_auto_load_touch', '#touchui_auto_load_resolution'],
	init: function() {

		var $items = $("#navbar ul.nav > li:not("+this.DOM.move.navbar.mainItems+")");
		var hasTextLinks = false;
		$($items.get().reverse()).each(function(ind, elm) {
			var $elm = $(elm);

			if($elm.children('a').length > 0) {
				var elme = $elm.children('a')[0];

				$elm.prependTo(this.DOM.create.dropdown.container);

				$.each(elme.childNodes, function(key, node) {
					if(node.nodeName === "#text") {
						node.nodeValue = node.nodeValue.trim();
					}
				});

				if(!$(elme).text()) {
					if(!$(elme).text()) {
						$(elme).text($(elme).attr('title'));
					}
				}
			} else {
				if(!hasTextLinks) {
					hasTextLinks = true;
					$('<li><ul id="touchui_text_nonlink_container"></ul></li>').appendTo(this.DOM.create.dropdown.container);
				}

				$elm.appendTo("#touchui_text_nonlink_container");
			}
		}.bind(this));

		$(document).on('click', function(elm) {
			if($(elm.target).parents('#tabs').length > 0) {
				$('#tabs .itemActive').removeClass('itemActive');
				$(elm.target).addClass('itemActive');
			}
		});

		$('[href="'+document.location.hash+'"]').addClass('itemActive');

		// Move TouchUI to main dropdown
		$("#navbar_plugin_touchui").insertAfter("#navbar_settings");

		// Create and Move login form to main dropdown
		$('<li><ul id="youcanhazlogin"></ul></li>').insertAfter("#navbar_plugin_touchui");
		
		$('#navbar_login')
			.appendTo('#youcanhazlogin')
			.find('a.dropdown-toggle')
			.text($('#youcanhazlogin').find('a.dropdown-toggle').text().trim())
			.attr("data-bind", "visible: !loginState.loggedIn()");

		// Create a fake dropdown link that will be overlapped by settings icon
		$('<li id="touchui_dropdown_link"><a href="#"></a></li>').appendTo("#tabs");
		
		// Move the navbar temp plugin
		this.plugins.psuControl.call(this);
	}

}
