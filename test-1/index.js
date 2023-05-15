function kiemTraSnt(n) {
       if (n < 2) {
  return false;
}
for (let i = 2; i <= Math.sqrt(n); i++) {
  if (n % i == 0) {
    return false;
  }
}
    return true;
  };
function tinhTongSnt() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let sum = 0; 
    if (a < b) {
        for (let i = a; i <= b; i++) {
        if (kiemTraSnt(i)) {
          sum += i;
        }
      }
    document.getElementById("result").innerHTML = "tong so nguyen to trong khoang a va b la : " + sum;
    } else {
      document.getElementById("result").innerHTML = "nhap a nho hon b";
    }
  }