import { Link, useLocation, useNavigate } from "react-router-dom";
import { Braces, Code2 } from "lucide-react";
import { Terminal, FileCode } from "lucide-react";
import React, { useState } from "react";
import { navItems } from "@/constants/navigation";

const Navigation = () => {
  const [activeTab, setActiveTab] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const clickHandler = (path: string, index: number) => {
    setActiveTab(index);
    navigate(path);
  };

  const CodeTab = ({
    active,
    onClick,
    children,
    icon,
  }: {
    active: boolean;
    onClick: () => void;
    children: React.ReactNode;
    icon: React.ReactNode;
  }) => (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 text-sm font-mono transition-colors border-r border-border ${
        active
          ? "bg-code-line text-primary"
          : "bg-code-bg text-muted-foreground hover:bg-code-line"
      }`}
    >
      {icon}
      {children}
    </button>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-code-bg/95 backdrop-blur-sm border-b border-primary/20">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-center">
          <Link
            to="/"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <Code2 className="w-6 h-6" />
            <span className="font-mono font-bold">
              {"<Siddharth Karanchery />"}
            </span>
            <div className="blink-caret">_</div>
          </Link>
        </div>
      </div>
      {/* Code Editor Tabs */}
      <div className="flex border-b border-border bg-code-bg">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <CodeTab
              key={item.path}
              active={activeTab === index}
              onClick={() => clickHandler(item.path, index)}
              icon={Icon ? <Icon className="w-4 h-4" /> : null}
            >
              {item.name}
            </CodeTab>
          );
        })}
        <div className="flex-1 bg-code-bg"></div>
      </div>
    </nav>
  );
};

export default Navigation;
