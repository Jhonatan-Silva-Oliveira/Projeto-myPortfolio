function myFunction() {
  let navmenu = document.getElementById("myNavMenu");
  if (navmenu.className === "navlist") {
    navmenu.className += " open";
  } else {
    navmenu.className = "navlist";
  }
  
  let menuicon = document.getElementById("menu-icon");
  if (menuicon.className === "bx bx-menu") {
    menuicon.className = "bx bx-x"
  } else {
    menuicon.className = "bx bx-menu";
  }
}

export default myFunction;