import React from "react";

const Toaster = React.lazy(() =>
  import("./componentes/Template/notifications/toaster/Toaster")
);
const Tables = React.lazy(() =>
  import("./componentes/Template/base/tables/Tables")
);

const Breadcrumbs = React.lazy(() =>
  import("./componentes/Template/base/breadcrumbs/Breadcrumbs")
);
const Cards = React.lazy(() =>
  import("./componentes/Template/base/cards/Cards")
);
const Carousels = React.lazy(() =>
  import("./componentes/Template/base/carousels/Carousels")
);
const Collapses = React.lazy(() =>
  import("./componentes/Template/base/collapses/Collapses")
);
const BasicForms = React.lazy(() =>
  import("./componentes/Template/base/forms/BasicForms")
);

const Jumbotrons = React.lazy(() =>
  import("./componentes/Template/base/jumbotrons/Jumbotrons")
);
const ListGroups = React.lazy(() =>
  import("./componentes/Template/base/list-groups/ListGroups")
);
const Navbars = React.lazy(() =>
  import("./componentes/Template/base/navbars/Navbars")
);
const Navs = React.lazy(() => import("./componentes/Template/base/navs/Navs"));
const Paginations = React.lazy(() =>
  import("./componentes/Template/base/paginations/Pagnations")
);
const Popovers = React.lazy(() =>
  import("./componentes/Template/base/popovers/Popovers")
);
const ProgressBar = React.lazy(() =>
  import("./componentes/Template/base/progress-bar/ProgressBar")
);
const Switches = React.lazy(() =>
  import("./componentes/Template/base/switches/Switches")
);

const Tabs = React.lazy(() => import("./componentes/Template/base/tabs/Tabs"));
const Tooltips = React.lazy(() =>
  import("./componentes/Template/base/tooltips/Tooltips")
);
const BrandButtons = React.lazy(() =>
  import("./componentes/Template/buttons/brand-buttons/BrandButtons")
);
const ButtonDropdowns = React.lazy(() =>
  import("./componentes/Template/buttons/button-dropdowns/ButtonDropdowns")
);
const ButtonGroups = React.lazy(() =>
  import("./componentes/Template/buttons/button-groups/ButtonGroups")
);
const Buttons = React.lazy(() =>
  import("./componentes/Template/buttons/buttons/Buttons")
);
const Charts = React.lazy(() => import("./componentes/Template/charts/Charts"));
const Dashboard = React.lazy(() =>
  import("./componentes/Ventana/dashboard/Dashboard.jsx")
);
const ObraPublica = React.lazy(() =>
  import("./componentes/Ventana/obraPublica/ObraPublica.jsx")
);

const CoreUIIcons = React.lazy(() =>
  import("./componentes/Template/icons/coreui-icons/CoreUIIcons")
);
const Flags = React.lazy(() =>
  import("./componentes/Template/icons/flags/Flags")
);
const Brands = React.lazy(() =>
  import("./componentes/Template/icons/brands/Brands")
);
const Alerts = React.lazy(() =>
  import("./componentes/Template/notifications/alerts/Alerts")
);
const Badges = React.lazy(() =>
  import("./componentes/Template/notifications/badges/Badges")
);
const Modals = React.lazy(() =>
  import("./componentes/Template/notifications/modals/Modals")
);
const Colors = React.lazy(() =>
  import("./componentes/Template/theme/colors/Colors")
);
const Typography = React.lazy(() =>
  import("./componentes/Template/theme/typography/Typography")
);
const Widgets = React.lazy(() =>
  import("./componentes/Template/widgets/Widgets")
);
const Users = React.lazy(() => import("./componentes/Template/users/Users"));
const User = React.lazy(() => import("./componentes/Template/users/User"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/obraPublica", name: "ObraPublica", component: ObraPublica },
  { path: "/theme", name: "Theme", component: Colors, exact: true },
  { path: "/theme/colors", name: "Colors", component: Colors },
  { path: "/theme/typography", name: "Typography", component: Typography },
  { path: "/base", name: "Base", component: Cards, exact: true },
  { path: "/base/breadcrumbs", name: "Breadcrumbs", component: Breadcrumbs },
  { path: "/base/cards", name: "Cards", component: Cards },
  { path: "/base/carousels", name: "Carousel", component: Carousels },
  { path: "/base/collapses", name: "Collapse", component: Collapses },
  { path: "/base/forms", name: "Forms", component: BasicForms },
  { path: "/base/jumbotrons", name: "Jumbotrons", component: Jumbotrons },
  { path: "/base/list-groups", name: "List Groups", component: ListGroups },
  { path: "/base/navbars", name: "Navbars", component: Navbars },
  { path: "/base/navs", name: "Navs", component: Navs },
  { path: "/base/paginations", name: "Paginations", component: Paginations },
  { path: "/base/popovers", name: "Popovers", component: Popovers },
  { path: "/base/progress-bar", name: "Progress Bar", component: ProgressBar },
  { path: "/base/switches", name: "Switches", component: Switches },
  { path: "/base/tables", name: "Tables", component: Tables },
  { path: "/base/tabs", name: "Tabs", component: Tabs },
  { path: "/base/tooltips", name: "Tooltips", component: Tooltips },
  { path: "/buttons", name: "Buttons", component: Buttons, exact: true },
  { path: "/buttons/buttons", name: "Buttons", component: Buttons },
  {
    path: "/buttons/button-dropdowns",
    name: "Dropdowns",
    component: ButtonDropdowns,
  },
  {
    path: "/buttons/button-groups",
    name: "Button Groups",
    component: ButtonGroups,
  },
  {
    path: "/buttons/brand-buttons",
    name: "Brand Buttons",
    component: BrandButtons,
  },
  { path: "/charts", name: "Charts", component: Charts },
  { path: "/icons", exact: true, name: "Icons", component: CoreUIIcons },
  { path: "/icons/coreui-icons", name: "CoreUI Icons", component: CoreUIIcons },
  { path: "/icons/flags", name: "Flags", component: Flags },
  { path: "/icons/brands", name: "Brands", component: Brands },
  {
    path: "/notifications",
    name: "Notifications",
    component: Alerts,
    exact: true,
  },
  { path: "/notifications/alerts", name: "Alerts", component: Alerts },
  { path: "/notifications/badges", name: "Badges", component: Badges },
  { path: "/notifications/modals", name: "Modals", component: Modals },
  { path: "/notifications/toaster", name: "Toaster", component: Toaster },
  { path: "/widgets", name: "Widgets", component: Widgets },
  { path: "/users", exact: true, name: "Users", component: Users },
  { path: "/users/:id", exact: true, name: "User Details", component: User },
];

export default routes;
