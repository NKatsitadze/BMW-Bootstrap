'use strict'

// {/* <script>
//     document.getElementById('vid').play();
// </script> */}

const videos = document.querySelectorAll('#vid');
videos.forEach(vid => {
    vid.play();
})