
document.onclick = () => applyCursorRippleEffect(event);
function applyCursorRippleEffect(e) {
    const ripple = document.createElement("div");
    ripple.className = "ripple";
    document.body.appendChild(ripple);
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    ripple.style.animation = "ripple-effect .4s  linear";
    ripple.onanimationend = () => document.body.removeChild(ripple);
}

$(document).ready(function () {
    $('.button').click(function () {
        $('.button').first().addClass('selected');
        $('.button').css({
            'background-color': '#1e2c35',
            'color': 'white'
        });
        $(this).css({
            'background-color': 'white',
            'color': 'black'
        });
        var quote = $(this).data('quote');
        $('#quote').text(quote);
    });
});

$(document).ready(function () {
    $('#shareBtn').on('click', function () {
        var content = $('#quote').text();
        var encodedContent = encodeURIComponent(content);
        var whatsappUrl = 'https://api.whatsapp.com/send?text=' + encodedContent;
        window.open(whatsappUrl);
    });
});
