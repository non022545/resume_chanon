
document.querySelectorAll('.menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // ปรับ offset ถ้ามี navbar ค้างด้านบน
                behavior: 'smooth'
            });
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show"); // เพิ่ม class เมื่ออยู่ใน viewport
            }
        });
    }, { threshold: 0.2 }); // กำหนดให้ 20% ของ element ต้องอยู่บนหน้าจอถึงจะทำงาน

    const sections = document.querySelectorAll(`
            .contname, .contphotome, .psntitle, 
            .psnphotome, .psntext, .contobj, 
            .eprtitle, .eprtext, .eprph, .edctitle,
            .unsicon, .edcpts, .unstext, .hscicon,
            .hsctext, .hsctitle, .unstitle, .unsicon,
            .pjtitle, .pjlink, .pjph
          `);

    sections.forEach(section => observer.observe(section));
});

const eprimges = [
    "https://i.postimg.cc/MT1krKXw/1-1.png",
    "https://i.postimg.cc/VkHcJV2x/2-1.png",
    "https://i.postimg.cc/Yqb5PP2v/3-1.png"
];

let indeximg = 0;
const fadeimgpj = document.getElementById('fadeimgpj');
const dots = document.querySelectorAll(".dot");

function changeimg(index) {
    fadeimgpj.classList.add('fade-out');
    setTimeout(() => {
        fadeimgpj.src = eprimges[index];
        fadeimgpj.classList.remove("fade-out");
        fadeimgpj.classList.add("fade-in");
        setTimeout(() => {
            fadeimg.classList.remove("fade-in");
        }, 600);
        updatedots(index);
    }, 600);
}

function updatedots(index) {
    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
}

function previmg() {
    indeximg = (indeximg + 1) % eprimges.length;
    changeimg(indeximg);
}

function nextimg() {
    indeximg = (indeximg - 1 + eprimges.length) % eprimges.length;
    changeimg(indeximg);
};

// ******************************************************************

const pjimges = [
    "https://i.postimg.cc/MT1krKXw/1-1.png",
    "https://i.postimg.cc/VNxQRbf4/1-2.png",
    "https://i.postimg.cc/Z5qSKSsP/1-3.png",
    "https://i.postimg.cc/VkHcJV2x/2-1.png",
    "https://i.postimg.cc/q7hHyGTz/2-2.png",
    "https://i.postimg.cc/qq0ffVC3/2-3.png",
    "https://i.postimg.cc/Yqb5PP2v/3-1.png",
    "https://i.postimg.cc/Y0x5Mn1y/3-2.png",
    "https://i.postimg.cc/c1MyRHVM/3-3.png",
    "https://i.postimg.cc/DyvVBhhV/3-4.png"
];

let indeximgpj = 0;
const pjfadeimg = document.getElementById('pjfadeimg');
const dotspj = document.querySelectorAll(".pjdot");

function changeimgpj(index) {
    indeximgpj = index;
    pjfadeimg.classList.add('fade-out');
    setTimeout(() => {
        pjfadeimg.src = pjimges[index];
        pjfadeimg.classList.remove("fade-out");
        pjfadeimg.classList.add("fade-in");
        setTimeout(() => {
            pjfadeimg.classList.remove("fade-in");
        }, 800);
        updatedots(index);
    }, 800);
}

function updatedots(index) {
    dotspj.forEach((pjdot, i) => {
        pjdot.classList.toggle("active", i === index);
    });
}

function previmgpj() {
    indeximgpj = (indeximgpj + 1) % pjimges.length;
    changeimgpj(indeximgpj);
}

function nextimgpj() {
    indeximgpj = (indeximgpj - 1 + pjimges.length) % pjimges.length;
    changeimgpj(indeximgpj);
}
