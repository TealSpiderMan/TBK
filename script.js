<script>
    /* This part of the script belongs to the footer for the invisibility transition (please do use it) */
  window.addEventListener('scroll', function() {
    const footer = document.querySelector('.footer');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.offsetHeight;

    if (scrollPosition + windowHeight >= bodyHeight) {
      footer.classList.add('show');
    } else {
      footer.classList.remove('show');
    }
  }); 

  function validateForm() {
        const authorname = document.getElementById("tb1").value;
        const email = document.getElementById("tb2").value;
        const articletitle = document.getElementById("tb3").value;
        const articlecontent = document.getElementById("tb4").value;
       

        // Check if required fields are filled
        if (authorname.trim() === "") {
          alert("Name field is required.");
          return false;
        }

        if (email.trim() === "") {
          alert("Email field is required.");
          return false;
        }

        if (articletitle.trim() === "") {
          alert("Subject field is required.");
          return false;
        }

        if (articlecontent.trim() === "") {
          alert("Message field is required.");
          return false;
        }

        // If all fields are filled, you can submit the form here
        alert("Form submitted successfully!");
        return true;
      }
    

      



    </script>
