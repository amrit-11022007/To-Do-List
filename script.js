const addBtn = document.getElementById("showBtn");
        const listBox = document.getElementById("listBox");
        const text = document.getElementById("textlist");
        const textData = document.querySelector(".text");
        const closeBtn = document.querySelector(".x");

        closeBtn.addEventListener("click", () => {
            listBox.style.display = "none"
        })

        function updateUI() {
            if (text.children.length === 0) {
                addBtn.style.display = "none";
                listBox.style.display = "none";
            } else {
                addBtn.style.display = "inline-block";
            }
        }

        function addValue() {
            const task = textData.value.trim();
            const date = document.getElementById("dateInput").value;
            const time = document.getElementById("timeInput").value;

            if (task === "") {
                alert("Millions of years of evolution and trying this... pathetic!");
                return;
            }

            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span>${task}</span>
                <small>${date ? date : ""} ${time ? time : ""}</small>
            `;

            const deleteButton = document.createElement("button");
            deleteButton.innerText = "X";
            deleteButton.classList.add("delete-button");
            deleteButton.onclick = () => {
                listItem.remove();
                updateUI();
            };

            listItem.appendChild(deleteButton);
            text.appendChild(listItem);

            textData.value = "";
            document.getElementById("dateInput").value = "";
            document.getElementById("timeInput").value = "";

            updateUI();
        }

        textData.addEventListener("keydown", (e) => {
            if (listBox.style.display != "flex"){
                if (e.key === "Enter") {
                    addValue();
                }
            }

        });

        function showValue() {
            listBox.style.display = "flex";
        }

        function setTheme(themeName) {
            document.body.className = themeName;
        }

        updateUI()