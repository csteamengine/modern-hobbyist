
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import '../bootstrap';
import '../plugins';
import Vue from 'vue';
import "particles.js";

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('project-particles', '/js/particlesjs-config.json', function() {
    // console.log('callback - particles.js config loaded');
});
