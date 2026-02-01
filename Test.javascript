async function sendNow(img) {
    let orderId = "ORD" + Date.now();
    
    // تأكد أن الـ IDs في الـ HTML مطابقة لهذه الأسماء بالضبط
    let data = {
        id: orderId,
        user: localStorage.getItem('uPhone'),
        status: 'waiting',
        method: selectedMethod,
        proofImage: img,
        price: document.getElementById('final-price').innerText,
        timestamp: Date.now(),

        // --- بيانات الاستلام (Pickup) ---
        pPhone: document.getElementById('p-phone').value, // 1
        pArea:  document.getElementById('p-area').value,  // 2
        pHouse: document.getElementById('p-house').value, // 3 منزل
        pRoad:  document.getElementById('p-road').value,  // 4
        pBlock: document.getElementById('p-block').value, // 5
        pType:  document.getElementById('p-type').value,  // 6 شقة (هذا هو الحقل الذي كان مفقوداً)
        pLink:  document.getElementById('p-link').value,  // 7 رابط
        pickup: `https://www.google.com/maps?q=${markerP.getLatLng().lat},${markerP.getLatLng().lng}`,

        // --- بيانات التسليم (Delivery) ---
        dPhone: document.getElementById('d-phone').value, // 1
        dArea:  document.getElementById('d-area').value,  // 2
        dHouse: document.getElementById('d-house').value, // 3 منزل
        dRoad:  document.getElementById('d-road').value,  // 4
        dBlock: document.getElementById('d-block').value, // 5
        dType:  document.getElementById('d-type').value,  // 6 شقة
        dLink:  document.getElementById('d-link').value,  // 7 رابط
        dropoff: `https://www.google.com/maps?q=${markerD.getLatLng().lat},${markerD.getLatLng().lng}`
    };

    db.ref('orders/' + orderId).set(data).then(() => {
        goTo('page-success');
    }).catch(error => {
        alert("خطأ في الإرسال: " + error.message);
    });
}
