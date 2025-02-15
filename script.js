if (Hls.isSupported()) {
    var video = document.getElementById('live-stream');
    var hls = new Hls();
    hls.loadSource('https://clicknboyn.xyz/live/n-1/chunks.m3u8');
    hls.attachMedia(video);
    video.play();
}
