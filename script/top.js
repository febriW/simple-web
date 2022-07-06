'use strict';

(function() {
    let opFlag = false
    var firstAccess = true

    $(function(){
        if(!opFlag && firstAccess) {
            opFlag=true
            $body.addClass('anime-start')
        }
    })
})


$(window).on('load', function(){
    
})