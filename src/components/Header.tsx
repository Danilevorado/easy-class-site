import { Search, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlHeader);
    return () => window.removeEventListener("scroll", controlHeader);
  }, [lastScrollY]);
  return <header className={`fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300 ${visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - empty for balance */}
          <div className="flex items-center gap-4 w-48">
          </div>

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">
              Início
            </a>
            <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">
              Cursos
            </a>
            <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">
              Categorias
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Minha Lista
            </a>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-4 w-48 justify-end">
            {/* Search */}
            <div className={`flex items-center transition-all ${searchOpen ? 'w-64' : 'w-10'}`}>
              {searchOpen ? <div className="flex items-center w-full border border-border bg-card rounded-sm overflow-hidden">
                  <Search className="w-5 h-5 ml-2 text-muted-foreground" />
                  <Input type="text" placeholder="Buscar cursos..." className="border-0 bg-transparent focus-visible:ring-0 text-sm" autoFocus onBlur={() => setSearchOpen(false)} />
                </div> : <Button variant="ghost" size="icon" onClick={() => setSearchOpen(true)}>
                  <Search className="w-5 h-5" />
                </Button>}
            </div>

            {/* Notifications */}
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>

            {/* Profile */}
            <Button variant="ghost" size="icon" className="rounded-sm">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;