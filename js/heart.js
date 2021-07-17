var cards = document.querySelectorAll(".card");
for (var i = 0; i < cards.length; i++) {
	var card = cards[i];
	card.onclick = function () {
		if (this.classList.contains("block")) {
			this.classList.add("rotated");
			this.classList.remove("block");
		}
		else {
			this.classList.add("block");
			this.classList.remove("rotated");
		}
	};
}
