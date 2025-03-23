
    document.querySelectorAll('.menu a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // document.addEventListener("DOMContentLoaded", function () {
    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach(entry => {
    //             if (entry.isIntersecting) {
    //                 entry.target.classList.add("show"); // เพิ่ม class เมื่ออยู่ใน viewport
    //             }
    //         });
    //     }, { threshold: 0.2 }); // กำหนดให้ 20% ของ element ต้องอยู่บนหน้าจอถึงจะทำงาน
    
    //     const sections = document.querySelectorAll(".contname, .contphotome, .psntitle, .conthome, .contpsn, .contobj, .contepr, .contedc, .contpj");
    //     sections.forEach(section => observer.observe(section));
    // });

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
    

    
    