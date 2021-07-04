document.getElementById('btnKetQua').addEventListener('click', TinhTienDienTT)

function TinhTienDienTT(){
    var hoTen = document.getElementById("inputName").value;
    var soTienDien = DienTT();
    var divThanhTien = document.getElementById("divKQ");
    divThanhTien.style.display = "block";

    var p = "Số tiền điện tiêu thụ của khách hàng " + hoTen + " là: " + soTienDien + " VNĐ.";

    var spanXuatTien = document.getElementById("thongBao");
    spanXuatTien.innerHTML = p;
}

function DienTT(){
    var dttIn = document.getElementById("inputSoDienTieuThu").value;

    dtt = parseInt(dttIn);

    if(dtt <= 50){
        return dtt * 500;
    }
    else if(dtt > 50 && dtt <=100){
        return 50 *500 + (dtt - 50) *650;
    }
    else if(dtt > 100 && dtt <= 200){
        return 50 * 500 + 50 * 650 + (dtt - 100) * 850;
    }
    else if(dtt > 200 && dtt <=350){
        return 50 * 500 + 50 * 650 + 100 * 850 + (dtt - 200) * 1100;
    }
    else{
        return 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (dtt - 350) * 1300;
    }
    
}