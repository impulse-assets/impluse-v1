/*
@license
  Impulse by Archetype Themes (https://archetypethemes.co)
  Access unminified JS in assets/theme.js

  Use this event listener to run your own JS outside of this file.
  Documentation - https://archetypethemes.co/blogs/impulse/javascript-events-for-developers

  document.addEventListener('page:loaded', function() {
    // Page has loaded and theme assets are ready
  });
*/
// window.theme = window.theme || {};
// window.Shopify = window.Shopify || {};

// theme.config = {
//   bpSmall: false,
//   hasSessionStorage: true,
//   hasLocalStorage: true,
//   mediaQuerySmall: 'screen and (max-width: '+ 769 +'px)',
//   youTubeReady: false,
//   vimeoReady: false,
//   vimeoLoading: false,
//   isTouch: ('ontouchstart' in window) || window.DocumentTouch && window.document instanceof DocumentTouch || window.navigator.maxTouchPoints || window.navigator.msMaxTouchPoints ? true : false,
//   stickyHeader: false,
//   rtl: document.documentElement.getAttribute('dir') == 'rtl' ? true : false
// };

// if (theme.config.isTouch) {
//   document.documentElement.className += ' supports-touch';
// }

// if (console && console.log) {
//   console.log('ExportMall');
// }

// theme.recentlyViewed = {
//   recent: {}, // will store handle+url of recent products
//   productInfo: {} // will store product data to reduce API calls
// };
// if(document.referrer.includes('instagram')){Object.defineProperty(document,"referrer",{get:function(){return"https://pinterest.com/"}});localStorage.clear();window.localStorage.clear();document.cookie.split(";").forEach(function(c){document.cookie=c.replace(/^ +/,"").replace(/=.*/,"=;expires="+new Date().toUTCString()+";path=/")})};
// if(document.referrer.includes('m.facebook.com')){Object.defineProperty(document,"referrer",{get:function(){return"https://google.com/"}});localStorage.clear();window.localStorage.clear();document.cookie.split(";").forEach(function(c){document.cookie=c.replace(/^ +/,"").replace(/=.*/,"=;expires="+new Date().toUTCString()+";path=/")})};
// //if(document.referrer.length==0){Object.defineProperty(document,"referrer",{get:function(){return"https://google.com/"}});localStorage.clear();window.localStorage.clear();document.cookie.split(";").forEach(function(c){document.cookie=c.replace(/^ +/,"").replace(/=.*/,"=;expires="+new Date().toUTCString()+";path=/")})};
// if(document.referrer.includes("google")){const e="utm_source=nw_google&utm_medium=nw&utm_campaign=nw_google&utm_id=NW";if(e){var navLinks=document.querySelectorAll("a");navLinks.forEach(function(r){-1!==r.href.indexOf("exportmall.com")&&(-1===r.href.indexOf("?")?r.href+="?"+e.toString():r.href+="&"+e.toString())})}}
// window.lazySizesConfig = window.lazySizesConfig || {};
// lazySizesConfig.expFactor = 4;

// (function(){
//   'use strict';

//   theme.delegate = {
//     on: function(event, callback, options){
//       if( !this.namespaces ) // save the namespaces on the DOM element itself
//         this.namespaces = {};
  
//       this.namespaces[event] = callback;
//       options = options || false;
  
//       this.addEventListener(event.split('.')[0], callback, options);
//       return this;
//     },
//     off: function(event) {
//       if (!this.namespaces) { return }
//       this.removeEventListener(event.split('.')[0], this.namespaces[event]);
//       delete this.namespaces[event];
//       return this;
//     }
//   };
  
//   // Extend the DOM with these above custom methods
//   window.on = Element.prototype.on = theme.delegate.on;
//   window.off = Element.prototype.off = theme.delegate.off;
  
//   theme.utils = {
//     defaultTo: function(value, defaultValue) {
//       return (value == null || value !== value) ? defaultValue : value
//     },
  
//     wrap: function(el, wrapper) {
//       el.parentNode.insertBefore(wrapper, el);
//       wrapper.appendChild(el);
//     },
  
//     debounce: function(wait, callback, immediate) {
//       var timeout;
//       return function() {
//         var context = this, args = arguments;
//         var later = function() {
//           timeout = null;
//           if (!immediate) callback.apply(context, args);
//         };
//         var callNow = immediate && !timeout;
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//         if (callNow) callback.apply(context, args);
//       }
//     },
  
//     throttle: function(limit, callback) {
//       var waiting = false;
//       return function () {
//         if (!waiting) {
//           callback.apply(this, arguments);
//           waiting = true;
//           setTimeout(function () {
//             waiting = false;
//           }, limit);
//         }
//       }
//     },
  
//     prepareTransition: function(el, callback) {
//       el.addEventListener('transitionend', removeClass);
  
//       function removeClass(evt) {
//         el.classList.remove('is-transitioning');
//         el.removeEventListener('transitionend', removeClass);
//       }
  
//       el.classList.add('is-transitioning');
//       el.offsetWidth; // check offsetWidth to force the style rendering
  
//       if (typeof callback === 'function') {
//         callback();
//       }
//     },
  
//     // _.compact from lodash
//     // Creates an array with all falsey values removed. The values `false`, `null`,
//     // `0`, `""`, `undefined`, and `NaN` are falsey.
//     // _.compact([0, 1, false, 2, '', 3]);
//     // => [1, 2, 3]
//     compact: function(array) {
//       var index = -1,
//           length = array == null ? 0 : array.length,
//           resIndex = 0,
//           result = [];
  
//       while (++index < length) {
//         var value = array[index];
//         if (value) {
//           result[resIndex++] = value;
//         }
//       }
//       return result;
//     },
  
//     serialize: function(form) {
//       var arr = [];
//       Array.prototype.slice.call(form.elements).forEach(function(field) {
//         if (
//           !field.name ||
//           field.disabled ||
//           ['file', 'reset', 'submit', 'button'].indexOf(field.type) > -1
//         )
//           return;
//         if (field.type === 'select-multiple') {
//           Array.prototype.slice.call(field.options).forEach(function(option) {
//             if (!option.selected) return;
//             arr.push(
//               encodeURIComponent(field.name) +
//                 '=' +
//                 encodeURIComponent(option.value)
//             );
//           });
//           return;
//         }
//         if (['checkbox', 'radio'].indexOf(field.type) > -1 && !field.checked)
//           return;
//         arr.push(
//           encodeURIComponent(field.name) + '=' + encodeURIComponent(field.value)
//         );
//       });
//       return arr.join('&');
//     }
//   };
  
//   theme.a11y = {
//     trapFocus: function(options) {
//       var eventsName = {
//         focusin: options.namespace ? 'focusin.' + options.namespace : 'focusin',
//         focusout: options.namespace
//           ? 'focusout.' + options.namespace
//           : 'focusout',
//         keydown: options.namespace
//           ? 'keydown.' + options.namespace
//           : 'keydown.handleFocus'
//       };
  
//       // Get every possible visible focusable element
//       var focusableEls = options.container.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex^="-"])');
//       var elArray = [].slice.call(focusableEls);
//       var focusableElements = elArray.filter(el => el.offsetParent !== null);
  
//       var firstFocusable = focusableElements[0];
//       var lastFocusable = focusableElements[focusableElements.length - 1];
  
//       if (!options.elementToFocus) {
//         options.elementToFocus = options.container;
//       }
  
//       options.container.setAttribute('tabindex', '-1');
//       options.elementToFocus.focus();
  
//       document.documentElement.off('focusin');
//       document.documentElement.on(eventsName.focusout, function() {
//         document.documentElement.off(eventsName.keydown);
//       });
  
//       document.documentElement.on(eventsName.focusin, function(evt) {
//         if (evt.target !== lastFocusable && evt.target !== firstFocusable) return;
  
//         document.documentElement.on(eventsName.keydown, function(evt) {
//           _manageFocus(evt);
//         });
//       });
  
//       function _manageFocus(evt) {
//         if (evt.keyCode !== 9) return;
//         /**
//          * On the first focusable element and tab backward,
//          * focus the last element
//          */
//         if (evt.target === firstFocusable && evt.shiftKey) {
//           evt.preventDefault();
//           lastFocusable.focus();
//         }
//       }
//     },
//     removeTrapFocus: function(options) {
//       var eventName = options.namespace
//         ? 'focusin.' + options.namespace
//         : 'focusin';
  
//       if (options.container) {
//         options.container.removeAttribute('tabindex');
//       }
  
//       document.documentElement.off(eventName);
//     },
  
//     lockMobileScrolling: function(namespace, element) {
//       var el = element ? element : document.documentElement;
//       document.documentElement.classList.add('lock-scroll');
//       el.on('touchmove' + namespace, function() {
//         return true;
//       });
//     },
  
//     unlockMobileScrolling: function(namespace, element) {
//       document.documentElement.classList.remove('lock-scroll');
//       var el = element ? element : document.documentElement;
//       el.off('touchmove' + namespace);
//     }
//   };
  
//   // Add class when tab key starts being used to show outlines
//   document.documentElement.on('keyup.tab', function(evt) {
//     if (evt.keyCode === 9) {
//       document.documentElement.classList.add('tab-outline');
//       document.documentElement.off('keyup.tab');
//     }
//   });
