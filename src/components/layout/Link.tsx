import React from 'react';
import { LucideIcon } from 'lucide-react';

interface LinkProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

export function Link({ icon, label, active }: LinkProps) {
  return (
    <a
      href="#"
      className={`flex items-center px-3 py-2 text-sm rounded-lg mb-1 ${
        active
          ? 'text-blue-600 bg-blue-50'
          : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      <span className="w-5 h-5 mr-3">{icon}</span>
      {label}
    </a>
  );
}