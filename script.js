document.addEventListener("DOMContentLoaded", function () {
    var video = document.getElementById("live-stream");
    var streamUrl = "https://xiaolin.live/wowhaha.php?m3u8=https://livecdn.rumsport.com/stream/25/index.m3u8&id=2089&token=92a452a2d25ebb4f0c781d0dec23cb26251ea771.false.1739620800-TgRK2iryY50OlxQV29uLpRADIqt693kxq5jyXiUvzHQ=&ver=2899402&parent=amzfutbol.com&is_vip=false&image=https://img.amzfutbol.com/static/common/img/matchs/1629425677.jpg&matchdate=1739634300";

    if (Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource(streamUrl);
        hls.attachMedia(video);
        video.play();
    } else if (video.canPlayType("application/x-mpegURL")) {
        video.src = streamUrl;
        video.play();
    }
});
