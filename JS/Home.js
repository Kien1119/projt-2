
const isLoggedIn = true; // Thay đổi giá trị này để phản ánh trạng thái đăng nhập thực tế
const buyButton = document.getElementById('btn-buy')
buyButton.onclick = function(){
  window.location.href = '/html/Shop.html'
}