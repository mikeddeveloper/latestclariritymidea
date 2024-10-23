const students = [
    {
        name: "Lere Olaranwaju",
        image: "image/lere.jpeg",
        testimonial: "This program was a game-changer for me. I learned not just how to shoot videos, but how to tell compelling stories that resonate with audiences."
    },
    {
        name: "Adeteso David",
        image: "image/david.jpeg",
        testimonial: ""
    },
    {
        name: "Kehinde Awopetu",
        image: "image/kenny.jpeg",
        testimonial: "The hands-on experience was invaluable."
    },
    
];

function displayStudents() {
    const studentList = document.getElementById('student-list');
    students.forEach(student => {
        const card = `
            <div class="col-md-3 mb-4">
                <div class="card shadow-sm">
                    <img src="${student.image}" class="card-img-top" alt="${student.name}">
                    <div class="card-body">
                        <h5 class="card-title">${student.name}</h5>
                        <p class="card-text">${student.testimonial}</p>
                    </div>
                </div>
            </div>
        `;
        studentList.innerHTML += card;
    });
}

displayStudents();
