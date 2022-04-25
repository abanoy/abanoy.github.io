function setElement(cntParent, strElement, strID, strType, strValue, strClass, blnCreateText, blnIsPicture) {
	// Create a templated element with an ID
	let tmpElement = document.createElement(strElement);

	// If the element needs a text
	if (blnCreateText) {
		// Create a text node and add to the element
		let tmpText = document.createTextNode(strValue);
		tmpElement.append(tmpText);
	} // End if

	// If the element needs a picture
	if (blnIsPicture) {
		// Set its source based on the given value
		tmpElement.src = strValue;
	}
	else {
		if (strValue != '' && blnCreateText == false) {
			// Set an attribute to place the strValue
			tmpElement.setAttribute('value', strValue);
		}
	} // End if

	// Give the tempalted element to the parent
	cntParent.append(tmpElement);

	// Finish with additional specifiec attributes
	tmpElement.setAttribute('id', strID);

	if (strType != '') {
		tmpElement.setAttribute('type', strType);
	}
	if (strClass != '') {
		tmpElement.setAttribute('class', strClass);
	}

	return tmpElement;
} // End of setElement function

function removeContent(cntParent) {
	while (cntParent.firstChild) {
		cntParent.removeChild(cntParent.firstChild);
	} // End while
}

function setFade(blnFadeIn) {

	if (blnFadeIn) {
		setElement(document.body, 'div', 'cntFadeIn', '', '', '', false, false);

		setTimeout(function () { cntFadeIn.remove(); }, 500);
	} else {
		setElement(document.body, 'div', 'cntFadeOut', '', '', '', false, false);

		setTimeout(function () { removeContent(document.body); }, 500);
	}
}

function parseCookies() {
	// Get cookies
	objCookies = Cookies.get();

	// For each key in objCookies
	for (let objKey in objCookies) {

		// If the value in key consists of only digits
		if (!isNaN(objCookies[objKey])) {

			// Convert the string value to integer
			objCookies[objKey] = parseInt(objCookies[objKey]);
		}
	}
}

function setCookies() {

	// Populate the cookies
	Cookies.set('energy', 100, {sameSite: 'strict', expires: 7 });
	Cookies.set('hunger', 100, {sameSite: 'strict', expires: 7 });
	Cookies.set('social', 100, {sameSite: 'strict', expires: 7 });

	// Retract the populated cookies
	parseCookies();
}

function addCookies(strName, strValue) {
	// Populate the cookie
	Cookies.set(strName, strValue, {sameSite: 'strict', expires: 7});

	// Set the key and value to objCookies
	objCookies[strName] = strValue;


	// Do a loop hole to check if the cookie is a number
	for (let objKey in objCookies) {
		
		// If the value in key consists of only digits
		if (!isNaN(objCookies[objKey])) {

			// Convert the string value to integer
			objCookies[objKey] = parseInt(objCookies[objKey]);
		}
	}
}

function getPremadeContainer(intSelection) {
	switch (intSelection) {
		case 0: // Main Menu
			setElement(document.body, 'audio', 'audMenu', 'audio/ogg', 'audio/menu.ogg', '', false, true, true);
			setElement(document.body, 'audio', 'audStart', 'audio/ogg', 'audio/titleSelect.ogg', '', false, true, true);
			setElement(document.body, 'div', 'cntMenuSelection', '', '', 'fade-out', false, false);
			setElement(cntMenuSelection, 'img', 'imgMenuMe', 'image/png', 'images/me.png', '', false, true);
			setElement(cntMenuSelection, 'img', 'imgMenuPortfolio', 'image/png', 'images/portfolio.png', '', false, true);
			setElement(cntMenuSelection, 'img', 'imgMenuGallery', 'image/png', 'images/gallery.png', '', false, true);
			setElement(cntMenuSelection, 'img', 'imgMenuExit', 'image/png', 'images/exit.png', '', false, true);
			audMenu.play();
		
			setTimeout(function() {
				cntMenuSelection.classList.remove();
			}, 500);

			imgMenuMe.onclick = function () {
				setTimeout(function () { startCare(); }, 800);
				setFade(false);
				audStart.play();
			};
		
			imgMenuPortfolio.onclick = function () {
				setTimeout(function () { startBattle(); }, 800);
				setFade(false);
				audStart.play();
			}
		
			imgMenuGallery.onclick = function () {
				setTimeout(function () { startWorld(); }, 800);
				setFade(false);
				audStart.play();
			}
		
			imgMenuExit.onclick = function () {
				setTimeout(function () { location.href = 'https://www.google.com/'; }, 100);
				setFade(false);
				audStart.play();
			}
			break;
		default: // Title screen
			setElement(document.body, 'div', 'cntTitle', '', '', '', false, false);
			setElement(cntTitle, 'label', 'lblTitle', '', 'Banoy.NET', 'label', true, false);
			setElement(cntTitle, 'label', 'lblStart', '', 'Click here to continue', 'label', true, false);

			lblStart.onclick = function() {
				setElement(cntTitle, 'audio', 'audtitleSelect', 'audio/ogg', 'audio/titleSelect.ogg', '', false, true);
				audtitleSelect.play();
				lblTitle.classList.add('title-fade');
				lblStart.classList.add('title-fade');

				setTimeout(function() {
					cntTitle.remove();
				}, 1900);

				setTimeout(function() {
					getPremadeContainer(0);
				}, 2100);
			}
			break;
	}
}

function getCutscene(intSelection, arrAdditionalParameters) {
	switch (intSelection) {
		case 0:
			break;
		default: // Intro
			setTimeout(function() {setFade(false);}, arrAdditionalParameters[0] * 1000)
			setTimeout(function() {setFade(true);
								setElement(document.body, 'img', 'imgScene', '', 'img/gif/intro.gif', '', false, true);
								setElement(document.body, 'div', 'cntBackgroundEffect', '', '', '', false, false);
								setElement(document.body, 'audio', 'audIntro', 'audio/ogg', 'aud/intro2.ogg', '', false, true);
								audIntro.play();}, arrAdditionalParameters[0] * 1000 + 500);
			setTimeout(function() {cntBackgroundEffect.style.backgroundImage = "url('img/gif/flashLong.gif')"}, 33000 + 5000);
			setTimeout(function() {cntBackgroundEffect.style.backgroundImage = ""}, 35000 + 5000);
			setTimeout(function() {cntBackgroundEffect.style.backgroundImage = "url('img/gif/flashLong.gif')"}, 50000 + 5000);
			setTimeout(function() {cntBackgroundEffect.style.backgroundImage = ""}, 52000 + 5000);
			setTimeout(function() {setFade(false);}, arrAdditionalParameters[1] + 5000);
			setTimeout(function() {startWorld(false); setFade(true);}, arrAdditionalParameters[1] + 6000);
	}
}