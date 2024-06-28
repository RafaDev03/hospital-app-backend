const getMenuFrontend = (role = "USER_ROLE") => {
  const menu = [
    {
      title: "Dashboard",
      icon: "bi bi-border-all",
      submenu: [
        { title: "Main", url: "/" },
        { title: "ProgressBar", url: "progress" },
        { title: "Grafica1", url: "grafica1" },
        { title: "Promises", url: "promises" },
        { title: "RxJs", url: "rxjs" },
      ],
    },
    {
      title: "Mantenimiento",
      icon: "bi bi-body-text",
      submenu: [
        // {title: "Users", url: "users" },
        { title: "Hospitals", url: "hospitals" },
        { title: "Doctors", url: "doctors" },
      ],
    },
  ];

  if (role === "ADMIN_ROLE") {
    menu[1].submenu.unshift({ title: "Users", url: "users" });
  }
  return menu;
};

module.exports = {
  getMenuFrontend,
};
