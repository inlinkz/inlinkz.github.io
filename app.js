const requestButton = document.getElementById('request-permission');
const dataDiv = document.getElementById('data');

requestButton.addEventListener('click', () => {
    if (typeof DeviceMotionEvent.requestPermission === 'function') {
      alert("iusuususussu");
        // For iOS 13+ devices
        DeviceMotionEvent.requestPermission()
            .then(response => {
                if (response === 'granted') {
                  alert("yes");
                    dataDiv.style.display = 'block';
                    window.addEventListener('devicemotion', handleMotionEvent);
                } else {
                    alert('Permission to access device motion was denied.');
                }
            })
            .catch(error => {
              alert("niooo");
                console.error('Error requesting device motion permission:', error);
            });
    } else {
        // For devices that do not require permission
        dataDiv.style.display = 'block';
        window.addEventListener('devicemotion', handleMotionEvent);
        alert("3");
    }
});

function handleMotionEvent(event) {
  const acceleration = event.accelerationIncludingGravity;
  if (acceleration) {
      const x = (acceleration.x || 0).toFixed(2);
      const y = (acceleration.y || 0).toFixed(2);
      const z = (acceleration.z || 0).toFixed(2);

      document.getElementById('accel-x').textContent = x;
      document.getElementById('accel-y').textContent = y;
      document.getElementById('accel-z').textContent = z;
  } else {
      alert("tobulov");
  }
}
