document.getElementById('btnKetQua').addEventListener('click', KetQua)

function KetQua(){
    var maKH = document.getElementById("inputName").value;
    var soTienCap = TienCap();
    var divThanhTien = document.getElementById("divKQ");
    divThanhTien.style.display = "block";

    var p = "Số tiền điện cáp của mã khách hàng " + maKH + " là: " + "$ " + soTienCap ;

    var spanXuatTien = document.getElementById("thongBao");
    spanXuatTien.innerHTML = p;
}


function TienCap(){
    var dan = document.getElementById('nhaDan').checked;
    var dn = document.getElementById('doanhNghiep').checked;
    var kenhCaoCap = document.getElementById('inputSoKenh').value;
    var soKetNoi  = document.getElementById('inputSoKetNoi').value;
    
    var fee =0;

    if(dan){
        return 4.5 + 20.5 + (7.5 * kenhCaoCap);
    }

    if(dn){
        fee =  15 + (50 * kenhCaoCap);
        if(soKetNoi <= 10){
            return fee + 75;
        }
        if(soKetNoi > 10){
            return fee + 75 + ((soKetNoi - 10) * 12.5);
        }
    }
}