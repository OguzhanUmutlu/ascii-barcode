const unicode = document.getElementById("unicode");
const barcode = document.getElementById("barcode");
const text = document.getElementById("text");
const caesarInp = document.getElementById("caesar");

const chars = ["█", "▌", "║", "│"];
let LC = 4;
let caesar = 0;

function barcodeChanged() {
    const limit = chars.length ** LC;
    const val = barcode.value.split("").map(i => chars.indexOf(i));
    let str = "";
    for (let i = 0; i < val.length; i += LC) {
        const chr = (parseInt(val.slice(i, i + LC).join(""), chars.length) - caesar + limit) % limit;
        str += String.fromCharCode(chr);
    }
    text.value = str;
}

function textChanged() {
    const limit = chars.length ** LC;
    let code = "";
    for (let i = 0; i < text.value.length; i++) {
        code += ((text.value[i].charCodeAt(0) + caesar) % limit).toString(chars.length).padStart(LC, "0").split("").map(i => chars[i]).join("");
    }
    barcode.value = code;
}

unicode.addEventListener("input", () => {
    LC = unicode.checked ? 8 : 4;
    textChanged();
});

barcode.addEventListener("input", barcodeChanged);
text.addEventListener("input", textChanged);

caesarInp.addEventListener("input", () => {
    caesar = caesarInp.value
    textChanged();
});