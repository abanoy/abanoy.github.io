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
			document.body.style.backgroundImage = 'url("images/checkerboard.gif")';
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
				setFade(false);
				setTimeout(function () {setFade(true); getPremadeContainer(1); }, 500);
				audStart.play();
			};
		
			imgMenuPortfolio.onclick = function () {
				setFade(false);
				setTimeout(function () {setFade(true); getPremadeContainer(2); }, 500);
				audStart.play();
			}
		
			imgMenuGallery.onclick = function () {
				setFade(false);
				setTimeout(function () {setFade(true); getPremadeContainer(3); }, 500);
				audStart.play();
			}
		
			imgMenuExit.onclick = function () {
				setFade(false);
				setTimeout(function () { location.href = 'https://www.google.com/'; }, 100);
				audStart.play();
			}
			break;
		case 1: // Me
			document.body.style.backgroundImage = 'url("images/code.png")';
			break;
		case 2: // Portfolio

			document.body.style.backgroundImage = 'url("images/halftone.png")';
			
			setElement(document.body, 'audio', 'audMusic', 'audio/ogg', 'audio/portfolio.ogg', '', false, true, true);
			setElement(document.body, 'audio', 'audRotate', 'audio/ogg', 'audio/itemRotate.ogg', '', false, true, true);
			setElement(document.body, 'audio', 'audSelect', 'audio/ogg', 'audio/itemSelect.ogg', '', false, true, true);
			setElement(document.body, 'audio', 'audDeselect', 'audio/ogg', 'audio/itemDeselect.ogg', '', false, true, true);
			setElement(document.body, 'audio', 'audDecide', 'audio/ogg', 'audio/itemDecide.ogg', '', false, true, true);
			setElement(document.body, 'audio', 'audFail', 'audio/ogg', 'audio/itemFail.ogg', '', false, true, true);
			setElement(document.body, 'div', 'cntRotor', '', '', 'InnerRotor', false, false);
			setElement(cntRotor, 'div', 'cntCircleTop', '', '', 'InnerRotorTop', false, false);
			setElement(cntRotor, 'div', 'cntCircleTopRight', '', '', 'InnerRotorTopDiagonal', false, false);
			setElement(cntRotor, 'div', 'cntCircleMiddleRight', '', '', 'InnerRotorMiddle', false, false);
			setElement(cntRotor, 'div', 'cntCircleBottomRight', '', '', 'InnerRotorBottomDiagonal', false, false);
			setElement(cntRotor, 'div', 'cntCircleBottom', '', '', 'InnerRotorTop', false, false);
			setElement(cntRotor, 'div', 'cntCircleBottomLeft', '', '', 'InnerRotorBottomDiagonal', false, false);
			setElement(cntRotor, 'div', 'cntCircleMiddleLeft', '', '', 'InnerRotorMiddle', false, false);
			setElement(cntRotor, 'div', 'cntCircleTopLeft', '', '', 'InnerRotorTopDiagonal', false, false);
			setElement(cntRotor, 'div', 'cntCircleMiddleCenter', '', '', 'InnerRotorMiddle', false, false);
			audMusic.play();

			cntRotor.style.rotate = "0deg";

			cntCircleTop.style.rotate = "0deg";
			cntCircleTopRight.style.rotate = "0deg";
			cntCircleMiddleRight.style.rotate = "0deg";
			cntCircleBottomRight.style.rotate = "0deg";
			cntCircleBottom.style.rotate = "0deg";
			cntCircleBottomLeft.style.rotate = "0deg";
			cntCircleMiddleLeft.style.rotate = "0deg";
			cntCircleTopLeft.style.rotate = "0deg";

			cntCircleTop.onclick = function () {
				audFail.play() }

			cntCircleTopRight.onclick = function () {
				audFail.play() }

			cntCircleBottomRight.onclick = function () {
					// Go back to the main menu
					setFade(false);
					audDecide.play();
					setTimeout(function () {setFade(true); getPremadeContainer(0); }, 500);
			}

			cntCircleBottom.onclick = function () {
				audFail.play() }

			cntCircleBottomLeft.onclick = function () {
				audFail.play() }
			
			cntCircleMiddleLeft.onclick = function () {
				audFail.play() }
			
			cntCircleTopLeft.onclick = function () {
				audFail.play() }
			
			cntCircleMiddleCenter.onclick = function () {
				audRotate.play();
				intDegrees = parseInt(cntRotor.style.rotate.match(/\d+/));
				intDegrees += 45;
				cntRotor.style.rotate = intDegrees + 'deg';

				cntCircleTop.style.rotate = (intDegrees - (intDegrees * 2)) + 'deg';
				cntCircleTopRight.style.rotate = (intDegrees - (intDegrees * 2)) + 'deg';
				cntCircleMiddleRight.style.rotate = (intDegrees - (intDegrees * 2)) + 'deg';
				cntCircleBottomRight.style.rotate = (intDegrees - (intDegrees * 2)) + 'deg';
				cntCircleBottom.style.rotate = (intDegrees - (intDegrees * 2)) + 'deg';
				cntCircleBottomLeft.style.rotate = (intDegrees - (intDegrees * 2)) + 'deg';
				cntCircleMiddleLeft.style.rotate = (intDegrees - (intDegrees * 2)) + 'deg';
				cntCircleTopLeft.style.rotate = (intDegrees - (intDegrees * 2)) + 'deg';
			}

			cntCircleMiddleRight.onclick = function () {
				audMusic.src = "audio/intragarden.ogg";
				audMusic.play();
				audSelect.play();
				getPremadeContainer(4);
				lblProjectTitle.innerHTML = "IntraGarden";
				lblProjectDescription.innerHTML = "This project will be a website available online through GitHub Pages. \
				The project will be a visual technical demonstration that uses practical programming, codebase, and browser-specific usages, \
				specifically a one-dimensional array, velocity jumping, and browser cookies. The presentation of the project will be in the form \
				of a simulation for users to interact. It will minimally have three modes to try: Caring, wandering, and battle. The project will \
				officially end its development on the 18th of March 2022.";
				imgProjectCover.src = "images/intragardenBoxCover.png";

				lblProjectStart.onclick = function () {
					audDecide.play();
					setFade(false);
					setTimeout(function () { location.href = 'https://abanoy.github.io/intragarden-dev'; }, 100);
				}

				lblProjectBack.onclick = function () {
					audMusic.src = "audio/portfolio.ogg";
					audMusic.play();
					audDeselect.play();
					cntProject.classList.add('fade-in');
					setTimeout(function () { cntProject.remove();}, 900);
				}
			}

			break;
		case 3: // Gallery
			document.body.style.backgroundImage = 'url("images/marble.png")';
			break;
		case 4: // Generic Description Page (under Portfolio section)
			// Create a new container that presents brief information about the project
			setElement(document.body, 'div', 'cntProject', '', '', 'fade-out', false, false);
			setElement(cntProject, 'div', 'cntProjectText', '', '', '', false, false);
			setElement(cntProject, 'label', 'lblProjectTitle', '', 'Project Title', '', true, false);
			setElement(cntProjectText, 'label', 'lblProjectDescription', '', 'Project Description', '', true, false);
			setElement(cntProject, 'img', 'imgProjectCover', 'img/png', "images/projectBoxCover.jpg", '', false, true);
			setElement(cntProject, 'label', 'lblProjectStart', '', 'Start', '', true, false);
			setElement(cntProject, 'label', 'lblProjectBack', '', 'Go Back', '', true, false);

			setTimeout(function () {cntProject.classList = ""}, 500);

			break;
		default: // Title screen
			setFade(true);
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