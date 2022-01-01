const buttonShare = document.querySelector('#buttonShare');
buttonShare.onclick = function () {
    if(!navigator.share) return
    navigator.share({
        title: 'BAKRI DESIGN',
        text: 'Thanks for sharing this website',
        url: 'https://abubakartarsum.github.io/Bakri-Blog',
    })
    .then(() => console.log('Successful Sharing Website'))
    .catch((error) => console.log('Error sharing', 
    error));
}
