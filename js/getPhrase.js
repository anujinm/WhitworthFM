function introWords() {
	var phrase = "";
	var num = Math.floor(Math.random() * 3) + 1; //returns a number b/w 1 and 3: change to add more options!
	switch(num) {
		case 1:
			phrase = "S'go Bucs!";
			break;
		case 2:
			phrase = "You can't spell \'radio\' without \'ARR!\'";
			break;
		default:
			phrase = "Sail the Soundwaves!";
	}
	return phrase;
}

var p = document.getElementByID('customSubtitle');
p.innerHTML = introWords();