'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    {
      title: "Introduction",
      href: "/guide",
    },
    {
      title: "Architecture",
      href: "/guide/architecture",
      subItems: [
        { title: "Vue d'ensemble", href: "/guide/architecture" },
        { title: "Côté Serveur", href: "/guide/architecture/server" },
        { title: "Côté Admin", href: "/guide/architecture/admin" },
      ]
    },
    {
      title: "Configuration",
      href: "/guide/configuration",
    },
    {
      title: "API Reference",
      href: "/guide/api-reference",
    },
    {
      title: "Bonnes Pratiques",
      href: "/guide/best-practices",
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b z-40">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <Link href="/guide" className="text-xl font-bold text-gray-900">
            Documentation API
          </Link>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="md:hidden p-2"
          >
            {isSidebarOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <div className="pt-16 flex">
        {/* Sidebar */}
        <aside
          className={`fixed md:static inset-y-16 left-0 w-64 bg-white border-r transform ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 transition-transform duration-200 ease-in-out z-30`}
        >
          <nav className="p-4 space-y-2">
            {menuItems.map((item) => (
              <div key={item.href} className="space-y-1">
                <Link
                  href={item.href}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  {item.title}
                </Link>
                {item.subItems?.map((subItem) => (
                  <Link
                    key={subItem.href}
                    href={subItem.href}
                    className="block px-4 py-2 pl-8 text-sm text-gray-600 hover:bg-gray-100 rounded-md"
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 px-4 py-8 md:px-8 max-w-4xl mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
} 