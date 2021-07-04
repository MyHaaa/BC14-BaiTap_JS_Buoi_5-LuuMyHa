document.getElementById('btnKetQua').addEventListener('click', KetQua)

function KetQua(){
    var diemChuanIn= document.getElementById("inputDiemChuan").value;
    var diemChuan= parseInt(diemChuanIn);

    var dmt1In= document.getElementById('inputMon1').value;
    var dmt1 = parseFloat(dmt1In);
    var dmt2In= document.getElementById('inputMon2').value;
    var dmt2 = parseFloat(dmt2In);
    var dmt3In= document.getElementById('inputMon3').value;
    var dmt3 = parseFloat(dmt3In);

    if(dmt1 == 0 && dmt2 == 0 && dmt3 == 0){
        var divThanhTien = document.getElementById("divKQ");
        divThanhTien.style.display = "block";

        var spanXuatTien = document.getElementById("thongBao");
        spanXuatTien.innerHTML = "Rất tiếc, điểm số một trong ba môn của bạn không đạt!"
    }
    else{
        var uuTien = XetDiemUuTien();
        var tongKet = dmt1 + dmt2 + dmt3 + uuTien;

        if(tongKet >= diemChuan){
            // alert("Chuc mung ban da trung tuyen voi so diem tong la:", tongKet);
            var divThanhTien = document.getElementById("divKQ");
            divThanhTien.style.display = "block";

            var spanXuatTien = document.getElementById("thongBao");
            spanXuatTien.innerHTML = "Chúc mừng bạn đã trúng tuyển với điểm tổng kết là: " + tongKet
        }
        else{
            // alert("Rat tiec, ban rot mat roi !");
            var divThanhTien = document.getElementById("divKQ");
            divThanhTien.style.display = "block";

            var spanXuatTien = document.getElementById("thongBao");
            spanXuatTien.innerHTML = "Rất tiếc, điểm tổng kết của bạn không đạt điểm tiêu chuẩn!"
        }
    }
    
}

function XetDiemUuTien(){  
    var diemUuTien = XetkhuVuc() + XetDoiTuong();
    return diemUuTien;
}

function XetkhuVuc(){
    var a = document.getElementById('kvA').checked;
    var b = document.getElementById('kvB').checked;
    var c = document.getElementById('kvC').checked;

    if(a){
        return 2 ;
    }
    if(b){
            return 1 ;
    }
    if(c){
        return 0.5;
    }
}

function XetDoiTuong(){
    var dt01 = document.getElementById("dt1").checked;
    var dt02 = document.getElementById("dt2").checked;
    var dt03 = document.getElementById("dt3").checked;

    if(dt01){
        return 2.5 ;
    }
    if(dt02){
        return 1.5 ;
    }
    if(dt03){
        return 1 ;
    }
}