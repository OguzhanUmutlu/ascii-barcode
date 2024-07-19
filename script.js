const barcode = document.getElementById("barcode");
const text = document.getElementById("text");

const chars = ["█", "▌", "║", "│"];
const LC = 5;

barcode.addEventListener("keyup", () => {
    const val = barcode.value.split("").map(i => chars.indexOf(i));
    let str = "";
    for (let i = 0; i < val.length; i += LC) {
        const chr = parseInt(val.slice(i, i + LC).join(""), chars.length);
        str += String.fromCharCode(chr);
    }
    text.value = str;
});
text.addEventListener("keyup", () => {
    let code = "";
    for (let i = 0; i < text.value.length; i++) {
        code += text.value[i].charCodeAt(0).toString(chars.length).padStart(LC, "0").split("").map(i => chars[i]).join("");
    }
    barcode.value = code;
});