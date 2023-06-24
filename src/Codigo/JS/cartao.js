function verificar() {
    var numero = parseInt(document.getElementById("inputncard").value);

    var a = numero % 10;
    var b = parseInt(((numero % 100) / 10));
    var c = parseInt(((numero % 1000) / 100));
    var d = parseInt(((numero % 10000) / 1000));

    var e = parseInt(((numero % 100000) / 10000));
    var f = parseInt(((numero % 1000000) / 100000));
    var g = parseInt(((numero % 10000000) / 1000000));
    var h = parseInt(((numero % 100000000) / 10000000));

    var i = parseInt(((numero % 1000000000) / 100000000));
    var j = parseInt(((numero % 10000000000) / 1000000000));
    var k = parseInt(((numero % 100000000000) / 10000000000));
    var l = parseInt(((numero % 1000000000000) / 100000000000));

    var m = parseInt(((numero % 10000000000000) / 1000000000000));
    var n = parseInt(((numero % 100000000000000) / 10000000000000));
    var o = parseInt(((numero % 1000000000000000) / 100000000000000));
    var p = parseInt((numero / 1000000000000000));

    var aa = parseInt(((b * 2) % 10));
    var ab = parseInt((((b * 2) % 100) / 10));

    var ac = parseInt(((d * 2) % 10));
    var ad = parseInt((((d * 2) % 100) / 10));

    var ae = parseInt(((f * 2) % 10));
    var af = parseInt((((f * 2) % 100) / 10));

    var ag = parseInt(((h * 2) % 10));
    var ah = parseInt((((h * 2) % 100) / 10));

    var ai = parseInt(((j * 2) % 10));
    var aj = parseInt((((j * 2) % 100) / 10));

    var ak = parseInt(((l * 2) % 10));
    var al = parseInt((((l * 2) % 100) / 10));

    var am = parseInt(((n * 2) % 10));
    var an = parseInt((((n * 2) % 100) / 10));

    var ao = parseInt(((p * 2) % 10));
    var ap = parseInt((((p * 2) % 100) / 10));

    var z = (aa + ab + ac + ad + ae + af + ag + ah + ai + aj + ak + al + am + an + ao + ap);
    var zz = (z + a + c + e + g + i + k + m + o);
    var valid = ((zz % 10) == 0);
    var invalid = ((zz % 10) != 0);

    if (valid == true) {
        document.getElementById("res1").innerHTML = "Valid";
        do {
            if (o == 3 && ((n == 4) || (n == 7))) {
                document.getElementById("res2").innerHTML = "amex";
            }
            else if (p == 5 && ((o == 1) || (o == 2) || (o == 3) || (o == 4) || (o == 5))) {
                document.getElementById("res2").innerHTML = "mastercard";
            }
            else if (p == 4 || (m == 4 && p != 4 && p != 5)) {
                document.getElementById("res2").innerHTML = "visa";
            }
        }
        while (invalid);
    }
    else if ((zz % 10) != 0){
        document.getElementById("res1").innerHTML = "invalid";
        document.getElementById("res2").innerHTML = " ";
    }
    //document.getElementById("res").value = res;
    //document.getElementById("res1").innerHTML = res;
}