
var targetNumber = "";
var wins = 0;
var losses = 0;
// Varibale counter is for total score.
var counter = 0;
var images = ["./assets/images/bluecrystal.jpg", "./assets/images/pinkcrystal.jpg", "./assets/images/violetcrystal.jpg", "./assets/images/yellowcrystal.jpg"];

// Functions

	function randomTargetNumber () {
		targetNumber = Math.floor(Math.random() * 102) + 19;
	}

	function resetCrystals () {
		for (var i = 0; i < images.length; i++) {
			var crystal = $("<img>");
			crystal.addClass("crystal");
			crystal.attr("src", images[i]);
			crystal.attr("value", (Math.floor(Math.random() * 12) + 1));
			crystal.attr("height", "100");
			$(".crystal-images").append(crystal);
		}
	}

	function resetHTML () {
		$(".target-number").html(targetNumber);
		$(".win-lose-counter").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>");
		$(".counter-number").html(counter);
		$(".crystal-images").empty();
	}

	function totalReset () {
		randomTargetNumber ();
		counter = 0;
		resetHTML ();
		resetCrystals ();
	}

// Calling functions
	
	randomTargetNumber();
	resetHTML ();
	resetCrystals ();

// Click Functions
	function crystalClick () {
		//attr returns first value of selected html element
		counter += parseInt($(this).attr("value"));
		$(".counter-number").html(counter);
		if (counter == targetNumber) {
			wins++;
			totalReset();
		}
		else if (counter > targetNumber) {
			losses++;
			totalReset();
		};
	};

	
	$(document).on("click", ".crystal", crystalClick);