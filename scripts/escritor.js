const escritor = document.getElementById("escritor");
let line = [
    "Vitor Dias Sousa"
];
let i = 0, j = 0, wait =6;
setInterval(() => {
    if (wait-- > 0) return;
    if (wait == -1) escritor.innerHTML = "";
    if (i < line.length)
        if (j < line[i].length)
            escritor.innerHTML += line[i][j++];
        else
            wait = 8, j = 0, i++;
        else
            wait = 8, i = j = 0;
}, 200)

escritor()