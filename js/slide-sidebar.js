function openNav() {
    // ここのピクセル数でサイドバーの幅が決まる
    document.getElementById("sidebar").style.width = "300px";
    document.getElementById("main").style.marginLeft = "300px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";

}