'use strict';

let body = $('body')

$(function () {
    body = $('body')
})

$(window).on('load', function(){
    initload()
})

function initload(){
    body.addClass('loaded')
    body.addClass('opening-start')
}