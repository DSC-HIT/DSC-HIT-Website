$(document).ready(function () {
	// $('.nav-link').click(function(event){
	// 	event.preventDefault();
	// 	event.returnValue = false;
	// });
	// $('#photogrid').GridHorizontal();
	var rockstars = [{
			"name": "Rivu Chakraborty",
			"cover": "default",
			"pic": "https://sessionize.com/image?f=fd31d66d66d823a37ee37596ab8426c7,400,400,True,False,a72ed7ee-704c-453a-9d4e-ca5014ed0e5a.jpg",
			"desc": "<hr>GDG Kolkata Lead, Kotlin Evangelist, DroidJam Speaker, Google Certified Associate Android Developer",
			"fb": "fb",
			"twitter": "twitter"
		},
		// {
		// 	"name": "Manisha Biswas",
		// 	"cover": "default",
		// 	"pic": "https://secure.meetupstatic.com/photos/member/b/8/b/4/member_277007284.jpeg",
		// 	"desc": "description",
		// 	"fb": "fb",
		// 	"twitter": "twitter"
		// },
		{
			"name": "Dhrumil Shah",
			"cover": "default",
			"pic": "https://sessionize.com/image?f=4808c4edfd414400379bb11772643982,200,200,True,False,03-9d91-480f-b196-1bb068e63b8a.8bd9852d-a483-4902-aa93-2bb2ccffc21a.jpeg",
			"desc": "<hr>Mobile Developer at Shipmnts, Co-organizer at GDG Ahmedabad<br>Founder at Flutter Flakes",
			"fb": "fb",
			"twitter": "twitter"
		},
		{
			"name": "Pawan Kumar",
			"cover": "default",
			"pic": "https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/38504387_1150887311731638_6951043872927514624_n.jpg?_nc_cat=106&oh=9dc69f0992413aa61ab648b645e85bf5&oe=5C4FD447",
			"desc": "<hr>Google Developer Expert for Flutter. Speaker, Entrepreneur, YouTuber<br><br>",
			"fb": "fb",
			"twitter": "twitter"
		},
		{
			"name": "Saurabh Rajpal",
			"cover": "default",
			"pic": "https://sessionize.com/image?f=80c14aa34bc28a517d684b0e46da4644,200,200,True,False,1f-ac18-4911-896b-d9d36914360a.0bef6d35-2360-4898-af92-007f51ea3a57.JPG",
			"desc": "<hr>Mobile Technical Solutions Consultant, Google, 6.5+ years of Full Stack Development",
			"fb": "fb",
			"twitter": "twitter"
		},
		{
			"name": "Abhishek Rungta",
			"cover": "default",
			"pic": "https://github.com/xprilion/random-storage/raw/master/images/abhishek_rungta.jpg",
			"desc": "<hr>CEO Indus Net Technologies<br>From 3k in pocket to 55 crore company<br><br>",
			"fb": "fb",
			"twitter": "twitter"
		},
		{
			"name": "Prajyot Mainkar",
			"cover": "default",
			"pic": "https://github.com/xprilion/random-storage/raw/master/images/prajyot_mainkar.jpg",
			"desc": "<hr>Android Man of Goa<br>Founder of Androcid Media, Speaker, over 8 years of spreading knowledge",
			"fb": "fb",
			"twitter": "twitter"
		}

		// ,
		// {
		// 	"name": "Biswajeet Mondal",
		// 	"cover": "default",
		// 	"pic": "",
		// 	"desc": "description",
		// 	"fb": "fb",
		// 	"twitter": "twitter"
		// }

	];


	/**
	 * Randomize array element order in-place.
	 * Using Durstenfeld shuffle algorithm.
	 */
	function shuffleArray(array) {
		for (var i = array.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		return array;
	}

	var biglist = [];
	for (var i = 0; i < rockstars.length; i++) {
		biglist.push(i);
	}

	biglist = shuffleArray(biglist);

	tinylist = biglist.slice(0, 4);

	console.log(tinylist);

	for (var i = 1; i <= 4; i++) {

		var data = rockstars[tinylist[i - 1]];

		$('#speaker-' + i + "-name").empty().append(data["name"] + "<small>" + data["desc"] + "</small>");
		$('#speaker-' + i + "-pic").attr("src", data["pic"]);
	}

	$('#top-button').on('click', function (event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html').animate({
				scrollTop: 0
			}, 800, function () {
				window.location.hash = hash;
			});
		}
	});

});