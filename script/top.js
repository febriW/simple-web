'use strict';

(function() {
    var opFlag = false
    var firstAccess = true

    $(function(){
        if(!opFlag && firstAccess) {
            opFlag=true
        }
    })
})()


$(window).on('load', function(){
    setTimeout(function(){
        body.addClass('animation-finish')
    },400)
})