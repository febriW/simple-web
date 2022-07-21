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
    body = $('body')
    body.addClass('ready')
    body.addClass('animation-start')
}

function LoadEvent(){
    // body = $('body')
    container = $('.container')
    body.addClass('ready')
}

function menu(x) {
    x.classList.toggle('change')
    if(!body.hasClass('menu-open')){
        body.addClass('menu-open')
    }else{
        body.removeClass('menu-open')
    }
}