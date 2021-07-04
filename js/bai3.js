document.getElementById("btnKetQua").addEventListener('click',KetQua)

function KetQua(){
    var hoTen = document.getElementById('inputName').value;

    var thueCN = ThueCaNhan();

    var divThanhTien = document.getElementById("divKQ");
    divThanhTien.style.display = "block";

    var p = "Thuế thu nhập cá nhân của công dân " + hoTen + " là: " + thueCN + " VNĐ.";

    var spanXuatTien = document.getElementById("thongBao");
    spanXuatTien.innerHTML = p;
    
}

function ThueCaNhan(){
    var thuNhapChiuThue = ThuNhapChiuThue();

    if(thuNhapChiuThue <= 60000000){
        return thuNhapChiuThue * 0.05;
    }
    else if(thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000){
        return thuNhapChiuThue * 0.1;
    }
    else if(thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000){
        return thuNhapChiuThue * 0.15;
    }
    else if(thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000){
        return thuNhapChiuThue * 0.20;
    }
    else if(thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000){
        return thuNhapChiuThue * 0.25;
    }
    else if(thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000){
        return thuNhapChiuThue * 0.30;
    }
    else{
        return thuNhapChiuThue * 0.35;
    }
}

function ThuNhapChiuThue(){
    var tnnInput = document.getElementById('inputThuNhap').value;
    var tnn = parseFloat(tnnInput);

    var soNguoiInput = document.getElementById('inputNumPeople').value;
    var soNguoi = parseFloat(soNguoiInput);

    return tnn - 4000000 - (soNguoi * 1600000); 
}