/*
* @Author: DX
* @Date:   2016-08-25 21:19:10
* @Version: 1.0.0
* @Last Modified by:   DX
* @Last Modified time: 2016-08-26 17:25:38
*/

'use strict';
var Cookies = new function Cookies () {};
/**
 * This method will return a instance of Cookie
 * @return {Cookie} Cookie object
 * @param {String} arg1 : The cookie's name
 * @param {String} arg2 : The cookie's value
 */
Cookies.createCookie = function () {
	return new function Cookie(){
		var name = arguments[0] ? arguments[0] : "";
		var value = arguments[1] ? arguments[1] : "";
		var expires = "";
		var domain = "";
		var path = "";
		var secure = "";
		/**
		 * Return cookie's name
		 * @return {String} 
		 */
		this.getName = function () {
			return unescape(name); 
		}
		/**
		 * Set cookie's name
		 * @param {String} : The cookie's name
		 */
		this.setName = function () {
			name = arguments[0] ? escape(arguments[0]) : name;
		}
		/**
		 * Return cookie's value
		 * @return {String} 
		 */
		this.getValue = function () {
			 return unescape(value); 
		}
		/**
		 * Set cookie's value
		 * @param {String} : The cookie's value
		 */
		this.setValue = function () {
			value = arguments[0] ? escape(arguments[0]) : value;
		}
		/**
		 * Set cookie's expires
		 * @param {Date} : Expires date
		 */
		this.setExpires = function () {
			expires = arguments[0] ? arguments[0].toGMTString() : expires;
		}
		/**
		 * Set cookie's domain
		 * @param {String} : The cookie's domain
		 */
		this.setDomain = function () {
			domain = arguments[0] ? arguments[0] : domain;
		}
		/**
		 * Set cookie's path
		 * @param {String} : The cookie's path
		 */
		this.setPath = function () {
			path = arguments[0] ? arguments[0] : path;
		} 
		/**
		 * Set cookie's secure
		 * @param {String} : cookie's secure
		 */
		this.setSecure = function () {
			secure = arguments[0] ? arguments[0] : secure; 
		}
		/**
		 * Return a string consists of all cookie's property
		 * @return {String} 
		 */
		this.toString = function () {
			var str = "";
			if (name) { 
				str = name + "=" + value + "; "; 
			}
			if (expires) {
				str = str + "expires=" + expires + "; ";
			}
			if (domain) {
				str = str + "domain=" + domain + "; "; 
			}
			if (path) {
				str = str + "path=" + path + "; ";
			}
			if (secure) {
				str = str + "secure; ";
			}
			return str;
		}
	}(arguments[0], arguments[1])
}
/**
 * Get single cookie
 * @param  {String} : cookie's name
 */
Cookies.getCookie = (function () {
	var cookies = {};
	var strCookies = document.cookie.split(";");
	for (var i = strCookies.length - 1; i >= 0; i--) {
		var strCookie = strCookies[i].trim().split("=");
		var cookie = Cookies.createCookie(strCookie[0], strCookie[1]);
		cookies[cookie.getName()] = cookie;
	}
	return function (name) {
		return cookies[name];
	}
})()
/**
 * Add cookie
 * @param {Cookie} Cookie 
 */
Cookies.setCookie = function (cookie) {
	document.cookie = arguments[0] ? arguments[0].toString() : "";
}