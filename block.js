var timeline = document.querySelector('#timeline_tab_content');
// $(document).ready(function() {

// var content = $('.fbTimelineUnit');

// content.remove();

//     }
// );

// var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations) {

	mutations.forEach(function(mutation) {

		console.log(mutation.type);
		
		
    });
 });

var config = { attributes: true, childList: true, characterData: true, subtree: true };

observer.observe(timeline, config);


