/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var liona_speech_input_src_liona_speech_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);



window.customElements.define('liona-speech-input', liona_speech_input_src_liona_speech_input__WEBPACK_IMPORTED_MODULE_0__["LionaSpeechInput"]);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LionaSpeechInput", function() { return LionaSpeechInput; });
/* harmony import */ var _log_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _speech_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _speech_output__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);






const template = document.createElement('template');
template.innerHTML = `
     <style>
         
     </style>
    <div>
      <label for="eingabefeld">Suchbegriffe:</label>
      <input id="eingabefeld">
      <button id="microphon-button"><em>Freie Spracheingabe starten ...</em></button>
      <button id="reader-button"><em>Suchkriterien vorlesen</em></button>
    </div>
`;


class LionaSpeechInput extends HTMLElement {

    constructor() {
        super();  // immer zuerst aufrufen
        // for init attribut defaults
        // e.g. this.src = '';
        _log_helper__WEBPACK_IMPORTED_MODULE_0__["Logger"].logMessage('constructor called');
    }

    connectedCallback() {
        _log_helper__WEBPACK_IMPORTED_MODULE_0__["Logger"].logMessage('custom element in Seite eingehängt');
        this.erzeugeShadowDOMIfNotExists();
        _log_helper__WEBPACK_IMPORTED_MODULE_0__["Logger"].logMessage('ShadowDom befüllt');
    }

    disconnectedCallback() {
        _log_helper__WEBPACK_IMPORTED_MODULE_0__["Logger"].logMessage('element has been removed');
    }

    attributeChangedCallback(name, oldval, newval) {
        // do something every time the attribute changes
        _log_helper__WEBPACK_IMPORTED_MODULE_0__["Logger"].logMessage(`the ${name} attribute has changed from ${oldval} to ${newval}!!`);
    }

    erzeugeShadowDOMIfNotExists() {
        if (!this.shadowRoot) {
            _log_helper__WEBPACK_IMPORTED_MODULE_0__["Logger"].logMessage('creating shadow dom');
            this.attachShadow({mode: 'open'});
        }
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        const spracheingabe = new _speech_input__WEBPACK_IMPORTED_MODULE_1__["Spracheingabe"](this.shadowRoot, 'eingabefeld');
        const sprachausgabe = new _speech_output__WEBPACK_IMPORTED_MODULE_2__["Sprachausgabe"](this.shadowRoot, 'eingabefeld');

        // onClick auf Micro Button definieren
        this.microphonButton = this.shadowRoot.getElementById('microphon-button');
        this.microphonButton.addEventListener('click', () => {
            spracheingabe.erkenneSprachEingabe((text) => {
                    sprachausgabe.suchkriterienVorlesen(text);
                }
            );
        });
        // onClick auf Reader Button definieren
        const eingabeFeld = this.shadowRoot.getElementById('eingabefeld');
        _log_helper__WEBPACK_IMPORTED_MODULE_0__["Logger"].logMessage('##feld' + eingabeFeld.outerHTML);
        this.readerButton = this.shadowRoot.getElementById('reader-button');
        this.readerButton.addEventListener('click', () => {
            sprachausgabe.suchkriterienVorlesen(eingabeFeld.value);
        });
    }


// static get observedAttributes() {
//     return ['toggled'];
// }


// get toggled() {
//     return this.getAttribute('toggled') === 'true';
// }
//
// // the second argument for setAttribute is mandatory, so we’ll use an empty string
// set toggled(val) {
//     if (val) {
//         this.setAttribute('toggled', true);
//     } else {
//         this.setAttribute('toggled', false);
//     }
// }


}








/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });


class Logger {

    static logMessage(message) {
        console.log(message);
    }

    static debugMessage(message) {
        console.debug(message);
    }

    static errorMessage(message) {
        console.error(message);
    }

    static infoMessage(message) {
        console.info(message);
    }

}




/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spracheingabe", function() { return Spracheingabe; });
/* harmony import */ var _log_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);




const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList
const SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent

class Spracheingabe {

    constructor(shadowRootRef, inputFieldIdRef, wortliste) {
        this.shadowRoot = shadowRootRef;
        this.eingabeFeldId = inputFieldIdRef;
        this.words = wortliste;
        this.recognition = this.initialisiereSpracherkennung();
        _log_helper__WEBPACK_IMPORTED_MODULE_0__["Logger"].logMessage('####shadow root:' + this.shadowRoot);
        _log_helper__WEBPACK_IMPORTED_MODULE_0__["Logger"].logMessage('####eingabe feld id:' + this.eingabeFeldId);

    }

    initialisiereSpracherkennung() {
        // Spracherkennung konfigurieren
        const sprachErkennung = new SpeechRecognition();
        // Grammatik initialisieren
        if (this.words) {
            const speechRecognitionList = new SpeechGrammarList();
            const grammar = '#JSGF V1.0; grammar words; public <word> = ' + wortliste +' ;';
            speechRecognitionList.addFromString(grammar, 1);
            sprachErkennung.grammars = speechRecognitionList;
        }
        sprachErkennung.lang = 'de-DE';
        sprachErkennung.interimResults = false;
        SpeechRecognition.continuous = false;
        sprachErkennung.maxAlternatives = 2;

        return sprachErkennung;
    }

    erkenneSprachEingabe(callback) {
        // Spracherkennung starten
        this.recognition.start();
        _log_helper__WEBPACK_IMPORTED_MODULE_0__["Logger"].logMessage('###speaker:' + this.recognition);

        // Callbacks implementieren
        const eingabeFeld = this.shadowRoot.getElementById(this.eingabeFeldId);
        _log_helper__WEBPACK_IMPORTED_MODULE_0__["Logger"].logMessage('####bevor this.eingabefeld:' + eingabeFeld.outerHTML);
        this.recognition.onresult = (event) => {
            _log_helper__WEBPACK_IMPORTED_MODULE_0__["Logger"].logMessage('####eingabefeld:' + eingabeFeld.outerHTML);
            const speechResult = event.results[0][0].transcript;
            eingabeFeld.value = speechResult;
            _log_helper__WEBPACK_IMPORTED_MODULE_0__["Logger"].logMessage('####eingabefeld changed:' + eingabeFeld.outerHTML);
            _log_helper__WEBPACK_IMPORTED_MODULE_0__["Logger"].logMessage('Confidence: ' + event.results[0][0].confidence);
            callback(speechResult);
        };

        this.recognition.onnomatch = () => {
            callback('Ihre Sprache wurde nicht erkannt');
        }

        this.recognition.onspeechend = () => {
            this.recognition.stop();
        }


    }

}




/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sprachausgabe", function() { return Sprachausgabe; });
/* harmony import */ var _log_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);




class Sprachausgabe {

    constructor() {
        this.sprachSynthese = window.speechSynthesis;
        _log_helper__WEBPACK_IMPORTED_MODULE_0__["Logger"].logMessage('####constructor called');
    }

    suchkriterienVorlesen(zuLesenderText) {
        if (this.sprachSynthese.speaking) {
            _log_helper__WEBPACK_IMPORTED_MODULE_0__["Logger"].logMessage('Spricht bereits');
            return;
        }
        if (zuLesenderText !== '') {
            var vorleseText = 'Ihre Eingaben zur Kontrolle: ' + zuLesenderText;
            _log_helper__WEBPACK_IMPORTED_MODULE_0__["Logger"].logMessage("Text:" + vorleseText);
            var leserStimmeMitText = new SpeechSynthesisUtterance(vorleseText);

            leserStimmeMitText.onend = () => (event)
            {
                _log_helper__WEBPACK_IMPORTED_MODULE_0__["Logger"].logMessage('Vorlesen beendet');
            }
            leserStimmeMitText.onerror = () => (event)
            {
                _log_helper__WEBPACK_IMPORTED_MODULE_0__["Logger"].logMessage('Fehler beim Vorlesen');
            }
            var voices = this.sprachSynthese.getVoices();
            for (var i = 0; i < voices.length; i++) {
                if (voices[i].default) {
                    _log_helper__WEBPACK_IMPORTED_MODULE_0__["Logger"].logMessage("Voice:" + voices[i].name + voices[i].lang);
                    leserStimmeMitText.voice = voices[i];
                    break;
                }
            }
            leserStimmeMitText.pitch = 1;
            leserStimmeMitText.rate = 1;
            leserStimmeMitText.volume = 1;
            this.sprachSynthese.speak(leserStimmeMitText);
        }
    }

}




/***/ })
/******/ ]);
