window.addEventListener('load', () => {
    //console.log(Notification);
    if (!window.Notification) return;

    //console.log(Notification.permission)

    //Notification
    //.requestPermission()
    //.then(sendNotification)

})


const sendNotification = (Permission) => {
    let Notification = new Notification('yeni bildirim', {
        body: 'hello bedo my name is oguzhan how are you.',
        icon: 'img/bedirhan.jpg'
    })
    Notification.onclick = () => {
        window.location.href = 'https://bedirhan69.github.io'
    }
    console.log(Notification);
}



const button = document.getElementById('button')
button.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then(sendNotification)
})