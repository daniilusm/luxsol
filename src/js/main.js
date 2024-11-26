import { BaseHelpers } from "./helpers/base-helpers";
import { PopupManager } from "./modules/popup-manager";
import { Accordion } from "./modules/accordion";
import { CookiesManager } from "./modules/cookies";

BaseHelpers.checkWebpSupport();

BaseHelpers.calcScrollbarWidth();

BaseHelpers.addTouchClass();

BaseHelpers.addLoadedClass();

BaseHelpers.headerFixed();

/**
 * Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * На кнопку, которая вызывает окно повешай атрибут data-type="<название окна>"

 * На обертку(.popup) окна добавь атрибут '[data-close-overlay]'
 * На кнопку для закрытия окна добавь класс '.button-close'
 * */
new PopupManager();

new Accordion(".accordion", {
	shouldOpenAll: false, // true
	defaultOpen: [], // [0,1]
	collapsedClass: "open",
});

new CookiesManager();
