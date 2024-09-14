const updateTime = () => {
    let d = new Date()
    box.innerHTML = d.toLocaleString('en-us', {
        timeZone: 'Asia/Kolkata',
    })
    let alarmhour = alarm.value.split(":")[0]
    let alarmmin = alarm.value.split(":")[1]

    if (d.getHours() == alarmhour && d.getMinutes() == alarmmin) {
        let audiourl = "audio 1.mp3"
        let audio = new Audio(audiourl)
        audio.play();
    }
}
setInterval(updateTime, 1000)