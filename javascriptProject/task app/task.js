let inputBox = document.getElementById("input-box");
let list = document.getElementById("inputs");


function addBtn() {
    if (inputBox.value.trim() == "") {
        inputBox.placeholder = "There is nothing to add";
    } else {
        let paragraph = document.createElement("p");
        paragraph.id = "text";
        list.appendChild(paragraph);
        paragraph.innerText = (inputBox.value);
        inputBox.value = "";
        paragraph.selected = false;

        paragraph.addEventListener("click", function () {

            paragraph.selected = !paragraph.selected

            if (paragraph.selected) {
                console.log("selected")
                paragraph.style.backgroundColor = "#963d7445"
                paragraph.style.color = "black"

            } else {
                console.log("not selected")
                paragraph.style.backgroundColor = "#4D243D"
                paragraph.style.color = "white"
            }
        })
    }
}

function deleteBtn() {
    let paragraphs = list.querySelectorAll("p")
    paragraphs.forEach(p => {

        if (p.selected) {
            p.remove();
        }
    });

}