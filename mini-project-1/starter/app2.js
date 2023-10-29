const changeProjectHeadingTitle = (title) => {
    const projectTitle =  document.querySelector(".heading-title");
 
     if (typeof title === 'string') {
         projectTitle.textContent = title;
     } else {
         console.error("argumen not string")
     }
 }
     
 changeProjectHeadingTitle("Javascript is Cool");