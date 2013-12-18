// var timeline = document.querySelector('#timeline_tab_content');
// $(document).ready(function() {

// var content = $('.fbTimelineUnit');

// content.remove();

//     }
// );

console.log('hi');
var observer = new MutationSummary({

			callback: rmPosts,
			queries: [{class: '.fbTimelineUnit'}]

			
		}
		
    );

function rmPosts(summaries){

	var summary = summaries[0];
	console.log('hey');
	console.log(summary);

}


// observer.observe(timeline, config);


