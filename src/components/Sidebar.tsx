import React from 'react';
import { LayoutDashboard, Calendar, X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    { icon: LayoutDashboard, text: 'Dashboard' },
    { icon: Calendar, text: 'Manage Events' },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={toggleSidebar}></div>
      )}
      
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-emerald-600 text-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50 md:relative md:translate-x-0`}
      >
        <div className="flex items-center justify-between p-4 h-16">
          <h1 className="font-bold text-xl">EventMaster</h1>
          <button onClick={toggleSidebar} className="p-2 rounded hover:bg-emerald-700 md:hidden">
            <X size={24} />
          </button>
        </div>
        <nav className="mt-4">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} className="mb-2">
                <a
                  href="#"
                  className="flex items-center p-4 hover:bg-emerald-700 transition-colors duration-200"
                >
                  <item.icon size={24} />
                  <span className="ml-4">{item.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;