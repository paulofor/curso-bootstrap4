<script>
$(document).ready(function () {
    $("#meucarrosel").carousel({ interval: 1000 });
    $("#carouselButton").click(function () {
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
            $("#meucarrosel").carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        } else {
            $("#meucarrosel").carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });
})
</script>