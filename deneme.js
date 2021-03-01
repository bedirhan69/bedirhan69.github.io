const video = document.getElementById("video");
const debug = document.getElementById("debug");
const uyari = document.getElementById("uyari");
const virus = new Image();
const facePoint = [];
Promise.all(
    [
        faceapi.nets.tinyFaceDetector.loadFromUri('/models')
    ]
).then(
    console.log("moduller yuklendi"),
    virus.src = "asset/virus.png",
    navigator.getUserMedia({ video: {} },
        stream => video.srcObject = stream,
        err => console.log / (err)
    )
);
//28.dk

function average(array) {
    var sum = 0;
    for (var i = 0; i < array.lenght; i++) {
        sum += array[i];
    }
    return sum / array.lenght;
}



video.addEventListener("play", () => {
    console.log("video basladi");

    const canvas = faceapi.createCanvasFromMedia(video);
    const context = canvas.getContext("2d");
    document.body.append(canvas);

    const displaySize = { width: canvas.width, height: canvas.height };
    faceapi.matchDimensions(canvas, displaySize);

    setInterval(async() => {
        const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions());
        console.log(detections);
        context.clearRect(0, 0, canvas.width, canvas.height);

        detections.forEach(face => {

            //  let ar = facePoint[i] || new Array();
            //  ar.push(face._score);

            // if (ar.lenght > 5) {
            //      ar.shift();
            //  }
            // facePoint[i] = ar;


            debug.innerHTML = face._score; //average(facePoint[i]);

            if (average(facePoint[i]) > .78) {
                context.drawImage(virus, face._box._x, face._box._y, face._box._width, face._box._width);
                uyari.classList.remove("hidden");
            } else {
                uyari.classList.add("hidden");
            }
        });



    }, 100);


})