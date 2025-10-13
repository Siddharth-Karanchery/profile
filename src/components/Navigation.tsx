import { Link, useLocation } from "react-router-dom";
import { Code2 } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Experience", path: "/experience" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Certificates", path: "/certificates" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-code-bg/95 backdrop-blur-sm border-b border-primary/20">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <Code2 className="w-6 h-6" />
            <span className="font-mono font-bold">{"<Dev />"}</span>
          </Link>
          
          <div className="flex gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 font-mono text-sm rounded-lg transition-all duration-300 ${
                  location.pathname === item.path
                    ? "bg-primary/20 text-primary border border-primary/30"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
