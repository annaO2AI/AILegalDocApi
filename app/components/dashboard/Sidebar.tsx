import {
  HomeIcon,
  BarChart2Icon,
  SettingsIcon,
} from "lucide-react";
import clsx from "clsx";
import { useState } from "react";
import { Rightarrow, Leftarrow, HrIcon, ArroTabIcon, LegalSearchIcon, AiIcon, AiOps } from "../../chat-ui/components/icons";

// Define navigation items (unused, kept for reference)
const navItems = [
  { label: "Home", icon: HomeIcon, href: "#" },
  { label: "Reports", icon: BarChart2Icon, href: "#" },
  { label: "Settings", icon: SettingsIcon, href: "#" },
];

// Define menu items for dropdowns
const menuItems = [
  {
    id: "aiSearch",
    label: "AI Search",
    icon: AiIcon,
    subItems: [
      { label: "Talent Acquisition", href: "/talent-acquisition", icon: ArroTabIcon },
      {
        label: "Procurement Search",
        href: "/procurement-search",
        icon: ArroTabIcon,
        subItems: [
          { label: "Service Agreement", href: "/procurement-search/master-service-agreement", icon: ArroTabIcon },
          { label: "Contract Agreement", href: "/procurement-search/contract-agreement", icon: ArroTabIcon },
          { label: "Analyze RFP", href: "/procurement-search/analyze-rfp", icon: ArroTabIcon },
          { label: "Analyze SOW", href: "/procurement-search/analyze-sow", icon: ArroTabIcon },
        ],
      },
      { label: "Finance Search", href: "/", icon: ArroTabIcon },
      { label: "Legal Search", href: "/", icon: ArroTabIcon },
    ],
  },
  {
    id: "humanResources",
    label: "Employee Enablement",
    icon: HrIcon,
    subItems: [
      { label: "HR Compensation & Benefits", href: "/human-resources", icon: ArroTabIcon },
      { label: "Finance Analysis", href: "/", icon: ArroTabIcon },
      { label: "Legal Analysis", href: "/", icon: ArroTabIcon },
    ],
  },
];

type SidebarProps = {
  collapsed: boolean;
  hovered: boolean;
  toggleSidebar: () => void;
  setHovered: (hovered: boolean) => void;
};

export default function Sidebar({
  collapsed,
  hovered,
  toggleSidebar,
  setHovered,
}: SidebarProps) {
  const isExpanded = !collapsed;
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menuId: string) => {
    setOpenMenu(openMenu === menuId ? null : menuId);
    // No toggleSidebar call here to prevent collapsing on main menu click
  };

  const handleSubItemClick = () => {
    // Collapse sidebar only if it's expanded
    if (isExpanded) {
      toggleSidebar();
    }
  };

  return (
    <aside
      className={clsx(
        "h-screen fixed top-0 left-0 bg-white border-r shadow transition-all duration-300 z-40 ease-in-out",
        isExpanded ? "w-64" : "w-16"
      )}
    >
      <div className="flex justify-end p-3">
        <button
          onClick={toggleSidebar}
          className="text-gray-600 hover:text-gray-900 main-toggleSidebar"
        >
          {isExpanded ? <Rightarrow /> : <Leftarrow />}
        </button>
      </div>
      <div className="w-full h-screen text-gray-800 flex flex-col main-width-manu">
        {/* Render Menu Items with Submenus */}
      
        {/* Static Menu Item */}
        <a
          href="/talent-acquisition"
          onClick={handleSubItemClick}
          className="px-4 py-5 flex items-center hover:bg-gray-200 transition-colors gap-3 min-w-[20px]"
        >
          {isExpanded ? (
            <>
              <AiIcon width={20} /> AILegalDocApi
            </>
          ) : (
            <AiIcon width={20} />
          )}
        </a>
      </div>
    </aside>
  );
}