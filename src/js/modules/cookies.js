import Cookies from "js-cookie";

export class CookiesManager {
	constructor() {
		this.rootElement = document.querySelector(".cookies");
		this.closeButtons = document.querySelectorAll(".close-cookies");
		this.acceptButtons = document.querySelectorAll(".cookies__button-accept");
		this.switchers = document.querySelectorAll(".cookies-switcher");
		this.hasCookies = localStorage.getItem("hasCookies");
		this.cookies = document.cookie.split("; ").reduce((prev, current) => {
			const [name, ...value] = current.split("=");
			prev[name] = value.join("=");
			return prev;
		}, {});

		this.init();
	}

	init() {
		let time;

		// console.info(this.cookies);

		// if (!this.hasCookies) {
		[...this.closeButtons].forEach((button) => button.addEventListener("click", () => this.close(this.rootElement)));
		[...this.acceptButtons].forEach((button) => button.addEventListener("click", () => this.accept(this.rootElement, button)));
		[...this.switchers].forEach((button) => button.addEventListener("click", () => this.toggleCookies(button)));

		time = setTimeout(() => {
			this.rootElement.classList.add("showCookies");
			clearTimeout(time);
		}, 2000);
		// }
	}

	close(el) {
		el.classList.remove("showCookies");
	}

	accept(rootElement, button) {
		if (button.dataset.cookies === "all") {
			Cookies.set("name", "all");
		} else {
			Cookies.set("name", "value");
		}

		rootElement.classList.remove("showCookies");
		localStorage.setItem("hasCookies", 1);
	}

	toggleCookies(el) {
		if (el.checked) {
			Cookies.set(el.value, "value");
		} else {
			Cookies.remove(el.value, "value");
		}
	}
}
