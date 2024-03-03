
    const navbarToggle = document.querySelector('.nav-menu-btn');
    const navbarLinks = document.querySelector('.nav-menu');

    function myMenuFunction() {
        navbarLinks.classList.toggle('responsive');
    }

    const body = document.querySelector("body");
    toggleSwitch = document.getElementById("toggle-switch");

    toggleSwitch.addEventListener("click", () => {
        body.classList.toggle("dark");
    });

    // typing Effect 
    var options = {
        strings: ["Developer", "Coder", "Technical Enthusiast"],
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 2000,
    };
    var typed = new Typed('.typedText', options);

    ///Scroll-animation
    const sr = ScrollReveal({
        origin: "top",
        distance: "80px",
        duration: 2000,
        reset: true,
    });
    sr.reveal(".featured-name", {
        delay: 100
    });
    sr.reveal(".text-info", {
        delay: 200
    });
    sr.reveal(".text-btn", {
        delay: 200
    });
    sr.reveal(".social_icons", {
        delay: 200
    });
    sr.reveal(".featured-image", {
        delay: 320
    });

    sr.reveal(".project-box", {
        interval: 200
    });

    sr.reveal(".top-header", {
        delay: 100
    });

    const srLeft = ScrollReveal({
        origin: "left",
        distance: "80px",
        duration: 2000,
        reset: true,
    });
    srLeft.reveal(".about-info", {
        delay: 100
    });
    srLeft.reveal(".contact-info", {
        delay: 100
    });

    const srRight = ScrollReveal({
        origin: "right",
        distance: "80px",
        duration: 2000,
        reset: true,
    });
    srRight.reveal(".skill", {
        delay: 100
    });
    srRight.reveal(".skill-box", {
        delay: 100
    });

    // CV Download

    function downloadCV() {
        const cvFilename = 'resume_latest.pdf';
        const cvURL = './CVs/' + cvFilename;
        const link = document.createElement('a');
        link.href = cvURL;
        link.download = cvFilename;
        document.body.appendChild(link);
        setTimeout(function() {
            link.click();
            document.body.removeChild(link);
            showToast('CV downloaded successfully!',true);
        }, 500);
    }

    // Show Toast Function
    function showToast(message, flag) {
        if(flag)
        toastr.success(message);
      else toastr.error(message)
    }


    //Function to handle sending message
    function sendMessage() {
        const name = document.getElementById('nameInput').value.trim();
        const email = document.getElementById('emailInput').value.trim();
        const subject = document.getElementById('subjectInput').value.trim();
        const message = document.getElementById('messageInput').value.trim();
         const my_email="mohdadil1j2@gmail.com"
        // Perform form validation
        if (!name || !email || !subject || !message) {
            showToast('Please fill in all required fields.',false);
            return;
        }

        try {
            window.location.href = `mailto:${my_email}?subject=${subject}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
            // Show success message
            showToast('Message sent successfully!',true);
            // Reset form fields
            document.getElementById('nameInput').value = '';
            document.getElementById('emailInput').value = '';
            document.getElementById('subjectInput').value = '';
            document.getElementById('messageInput').value = '';
    
        } catch (error) {
            // Show error message if sending email failed
            showToast(`Failed to send message. Please try again later., '${error}`,false);
        }
    }

    const hireMeButton = document.querySelector('.hire-btn');
    hireMeButton.addEventListener('click', function(event) {
        event.preventDefault();
        // Scroll to the contact section
        const contactSection = document.getElementById('contact');
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });

    
    const aboutMeButton = document.querySelector('.about-me-btn');
    aboutMeButton.addEventListener('click', function(event) {
        event.preventDefault();
        // Scroll to the contact section
        const contactSection = document.getElementById('contact');
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });