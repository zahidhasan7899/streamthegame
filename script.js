document.addEventListener("DOMContentLoaded", function () {
    var video = document.getElementById("live-stream");
    var streamUrl = "https://clicknboyn.xyz/live/n-2/chunks.m3u8";

    if (Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource(streamUrl);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function () {
            video.play();
        });
    } else if (video.canPlayType("application/x-mpegURL")) {
        video.src = streamUrl;
        video.play();
    }
});
