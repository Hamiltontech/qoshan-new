import Link from "next/link";
import { useRouter } from "next/router";

const HeaderMenuContent = ({ float = "" }) => {
  const route = useRouter();

  const home = [
    {
      id: 1,
      name: "Home 1",
      routerPath: "/",
    },
    { id: 2, name: "Home 2", routerPath: "/home-2" },
    {
      id: 3,
      name: "Home 3",
      routerPath: "/home-3",
    },
    { id: 4, name: "Home 4", routerPath: "/detailed-search" },
    { id: 5, name: "Home 5", routerPath: "/home-5" },
    { id: 6, name: "Home 6", routerPath: "/home-6" },
    { id: 7, name: "Home 7", routerPath: "/home-7" },
    { id: 8, name: "Home 8", routerPath: "/home-8" },
    { id: 9, name: "Home 9", routerPath: "/home-9" },
    { id: 10, name: "Home 10", routerPath: "/home-10" },
  ];

  const listing = [
    {
      id: 1,
      title: "Listing Grid",
      items: [
        {
          name: "Grid v1",
          routerPath: "/listing-grid-v1",
        },
        {
          name: "Grid v2",
          routerPath: "/listing-grid-v2",
        },
        {
          name: "Grid v3",
          routerPath: "/all-properties/type=all",
        },
        {
          name: "Grid v4",
          routerPath: "/listing-grid-v4",
        },
        {
          name: "Grid v5",
          routerPath: "/listing-grid-v5",
        },
        {
          name: "Grid v6",
          routerPath: "/listing-grid-v6",
        },
      ],
    },
    {
      id: 2,
      title: "Listing List",
      items: [
        {
          name: "List V1",
          routerPath: "/listing-list-v1",
        },
      ],
    },
    {
      id: 3,
      title: "Listing Style",
      items: [
        {
          name: "Parallax Style",
          routerPath: "/parallax-style",
        },
        {
          name: "Slider Style",
          routerPath: "/slider-style",
        },
        {
          name: "Map Header",
          routerPath: "/map-header",
        },
      ],
    },
    {
      id: 4,
      title: "Listing Half",
      items: [
        {
          name: "Map V1",
          routerPath: "/listing-map-v1",
        },
        {
          name: "Map V2",
          routerPath: "/listing-map-v2",
        },
        {
          name: "Map V3",
          routerPath: "/listing-map-v3",
        },
        {
          name: "Map V4",
          routerPath: "/listing-map-v4",
        },
      ],
    },
    {
      id: 5,
      title: "Agent View",
      items: [
        {
          name: "Agent V1",
          routerPath: "/agent-v1",
        },
        {
          name: "Agent V2",
          routerPath: "/agent-v2",
        },
        {
          name: "Agent Details",
          routerPath: "/agent-details",
        },
      ],
    },
    {
      id: 6,
      title: "Agencies View",
      items: [
        {
          name: "Agencies V1",
          routerPath: "/agency-v1",
        },
        {
          name: "Agencies V2",
          routerPath: "/agency-v2",
        },
        {
          name: "Agencies Details",
          routerPath: "/agency-details",
        },
      ],
    },
  ];

  const property = [
    {
      id: 1,
      title: "User Admin",
      items: [
        {
          name: "Dashboard",
          routerPath: "/my-dashboard",
        },
        {
          name: "My Properties",
          routerPath: "/my-properties",
        },
        {
          name: "My Message",
          routerPath: "/my-message",
        },
        {
          name: "My Review",
          routerPath: "/my-review",
        },
        {
          name: "My Favourites",
          routerPath: "/my-favourites",
        },
        {
          name: "My Profile",
          routerPath: "/my-profile",
        },
        {
          name: "My Package",
          routerPath: "/my-package",
        },
        {
          name: "My Saved Search",
          routerPath: "/my-saved-search",
        },
        {
          name: "Add Property",
          routerPath: "/create-listing",
        },
      ],
    },
    {
      id: 2,
      title: "Listing Single",
      items: [
        {
          name: "Single V1",
          routerPath: "/listing-details-v1",
        },
        {
          name: "Single V2",
          routerPath: "/listing-details-v2",
        },
        {
          name: "Single V3",
          routerPath: "/listing-details-v3",
        },
        {
          name: "Single V4",
          routerPath: "/listing-details-v4",
        },
      ],
    },
  ];

  const blog = [
    { id: 1, name: "Blog List 1", routerPath: "/blog-list-1" },
    { id: 2, name: "Blog List 2", routerPath: "/news" },
    { id: 3, name: "Blog List 3", routerPath: "/blog-list-3" },
    {
      id: 4,
      name: "Blog Details",
      routerPath: "/news-details",
    },
  ];

  const pages = [
    { id: 1, name: "شقق", routerPath: "/all-properties" },
    { id: 2, name: "شقق طابقية", routerPath: "/all-properties" },
    { id: 3, name: "فلل متلاصقة", routerPath: "/all-properties" },
    { id: 4, name: "فلل", routerPath: "/all-properties" },
    { id: 5, name: "قطع اراضي سكنية", routerPath: "/all-properties" },
    { id: 6, name: "قطع أراضي تجارية", routerPath: "/all-properties" },
    { id: 7, name: "قطع أراضي صناعية", routerPath: "/all-properties" },
    { id: 8, name: "برج سكني", routerPath: "/all-properties" },
    { id: 9, name: "استوديوهات", routerPath: "/all-properties" },
    { id: 10, name: "شاليهات", routerPath: "/all-properties" },



  ];

  return (
    <ul
      id="respMenu"
      className="ace-responsive-menu text-end d-lg-block d-none"
      data-menu-style="horizontal"
    >


      <li className="last">
        <Link href="/">
          <a
            className={route.pathname === "/" ? "ui-active" : undefined}
          >
الرئيسية      </a>
        </Link>
      </li>
      <li className="last">
        <Link href="/all-properties?type=all">
          <a
            className={route.pathname === "/all-properties?type=all" ? "ui-active" : undefined}
          >
جميع العقارات       </a>
        </Link>
      </li>

{/* dropdown */}
      <li className="dropitem" dir="rtl">
        <a 
          href="#"
          className={
            pages.some((page) => page.routerPath === route.pathname)
              ? "ui-active"
              : undefined
          }
        >
          <span className="title"> حسب العقار </span>
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu " dir="rtl">
          {pages.map((item) => (
            <li key={item.id}>
              <Link href={{
        pathname: "all-properties",
        query: {
            type: item.name,
        }
    }}>
                <a
                  className={
                    route.pathname === item.routerPath ? "ui-active" : undefined
                  }
                >
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </li>


      <li className="last">
        <Link href="/detailed-search">
          <a
            className={route.pathname === "/detailed-search" ? "ui-active" : undefined}
          >
البحث المفصل        </a>
        </Link>
      </li>
      <li className="last">
        <Link href="/about-us">
          <a
            className={route.pathname === "/about-us" ? "ui-active" : undefined}
          >
تعرف علينا         </a>
        </Link>
      </li>
      <li className="last">
        <Link href="/news?category=جميع+الاخبار">
          <a
            className={route.pathname === "/news?category=جميع-الاخبار" ? "ui-active" : undefined}
          >
الآخبار         </a>
        </Link>
      </li>
      <li className="last">
        <Link href="/watch-qoshan">
          <a
            className={route.pathname === "/watch-qoshan" ? "ui-active" : undefined}
          >
شاهد قوشان         </a>
        </Link>
      </li>
      <li className="last">
        <Link href="/shorts">
          <a
            className={route.pathname === "/watch-qoshan" ? "ui-active" : undefined}
          >
نصائح عقارية        </a>
        </Link>
      </li>
      <li className="last">
        <Link href="/faq">
          <a
            className={route.pathname === "/faq" ? "ui-active" : undefined}
          >
آعلن عن عقارك          </a>
        </Link>
      </li>
      <li className="last">
        <Link href="/contact">
          <a
            className={route.pathname === "/contact" ? "ui-active" : undefined}
          >
            تواصل معنا
          </a>
        </Link>
      </li>
      {/* End .dropitem */}

    </ul>
  );
};

export default HeaderMenuContent;