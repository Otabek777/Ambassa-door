
if (window.innerWidth < 768) {
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 280) {
            $('.header').addClass("fixed");
        } else {
            $('.header').removeClass("fixed");
        }
    });
} else {
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 130) {
            $('.header').addClass("fixed");
        } else {
            $('.header').removeClass("fixed");
        }
    });
}
$(".modal-open").click(function() {
    $(".modal").addClass("active");
    setTimeout(function() {
        $(".modal").addClass("opacity");
    },1);
});
$(".modal .close").click(function() {
    $(".modal").removeClass("opacity");
    setTimeout(function() {
        $(".modal").removeClass("active");
    },500);
});

if(document.querySelector('.input_phone')) {
    window.addEventListener("DOMContentLoaded", function() {
        [].forEach.call( document.querySelectorAll('.tel'), function(input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___ ____",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function(a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function(a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5)  this.value = ""
        }
    
        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)
    
      });
    
    });
};