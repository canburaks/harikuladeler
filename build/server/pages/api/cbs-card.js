module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("T3ND");


/***/ }),

/***/ "T3ND":
/***/ (function(module, exports) {

const template = document.createElement("template");
template.innerHTML = `
  <style>
    div.card {
      transform-style: preserve-3d;
      border-radius: 10px;
      overflow: hidden;
      box-sizing:border-box;
      display:flex;
      flex-direction:column;
      align-items: flex-start;
      border:2px solid rgba(50,50,50,0);
      box-shadow:  9px 9px 28px #e3e3e3, 
      -9px -9px 28px #ffffff;
      transition:
        .2s ease-in-out transform,
        .2s ease-in-out box-shadow;
    }
    div.card:hover {
      transform:translate3d(0px, -16px, 0px);
      box-shadow:  9px 9px 26px -8px #d2d2d2, 
      -9px -9px 26px -8px #fbfbfb;
    }

    .card-title  { font-size: 24px; font-weight: bold; margin:4px 0;font-family:"Helvetica" sans;}
    .card-description { font-size: 16px; opacity:0.8; line-height:1.2;font-family:"Helvetica";min-height:80px; margin-top:8px;}
    .card-title, .card-description  {padding-left:16px; padding-right:16px;}
    .card-link  { min-height: 300px;text-decoration:none;color:unset;height:100%;position:relative; display:flex;flex-direction:column;align-items:flex-start;}

    .card-tag {font-size:12px;position:relative; bottom:16px;left:16px;margin-top:8px;color:white;font-weight:bold;padding:2px 8px; border-radius:4px;}
    .card-image {min-height:240px; margin-bottom:0;}
    .card-image {background-position:50% 50%; background-repeat:no-repeat; background-size:cover;width:100%; }
  </style>
  <div class="card">
      <a rel="nofollow noopener" target="_blank" class="card-link">
        <div class="card-image" ></div>
        <h3 class="card-title"></h3>
        <p class="card-description"></p>
        <div class="card-tag"></div>
      </a>
  </div>
  `;

class CbsCard extends HTMLElement {
  constructor() {
    super();
    this.title = this.getAttribute("title") || null;
    this.description = this.getAttribute("description") || null;
    this.imageUrl = this.getAttribute("imageUrl") || null;
    this.url = this.getAttribute("url") || null;
    this.tag = this.getAttribute("tag") || null;
    this.tagColor = this.getAttribute("tagColor") || null; //console.log(this.tagColor)

    this.attachShadow({
      mode: "open"
    });
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.update();
  }

  update() {
    const description = this.description.length > 150 ? `${this.description.slice(0, 150)} ...` : this.description.slice(0, 150);
    this.shadowRoot.querySelector(".card-link").href = this.url;
    this.shadowRoot.querySelector(".card-image").style.backgroundImage = `url(${this.imageUrl})`;
    this.shadowRoot.querySelector(".card-title").textContent = this.title;
    this.shadowRoot.querySelector(".card-description").textContent = description;
    this.shadowRoot.querySelector(".card-description").title = this.description;
    const cardtag = this.shadowRoot.querySelector(".card-tag");
    cardtag.textContent = `${this.tag}`;
    cardtag.style.backgroundColor = this.tagColor;
  }

}

customElements.define("cbs-card", CbsCard);

/***/ })

/******/ });