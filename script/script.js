'use strict';

let body = $('body')
let container = $('.container')

$(function () {
    LoadEvent()
});

$(window).on('load', function(){
    initload()
})

function initload(){
    body.addClass('ready')
    body.addClass('animation-start')
}

function LoadEvent(){
    body = $('body')
    container = $('.container')
    body.addClass('ready')
}