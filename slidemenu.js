function slidemenu_toggle() {
		const slidemenu = document.getElementById("slidemenu");
		const display_status = window.getComputedStyle(slidemenu, null).opacity
		if (display_status === "0") {
				slidemenu.style.fontSize = "inherit"
				slidemenu.style.opacity = "1"
		} else {
				slidemenu.style.fontSize = "0"
				slidemenu.style.opacity = "0"
		}
}

function scroll_to(id) {
		document.querySelector(id).scrollIntoView({ behavior: "smooth" })
}
