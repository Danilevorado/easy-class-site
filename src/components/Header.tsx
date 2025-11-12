import { Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);

  return <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-background via-background/60 to-transparent h-24 pointer-events-none">
      <div className="pointer-events-auto h-16">
        <div className="container mx-auto px-4 md:px-12 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">EduStream</h1>
            </div>

            {/* Center Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-foreground text-sm hover:text-muted-foreground transition-colors">
                Início
              </a>
              <a href="#" className="text-foreground text-sm hover:text-muted-foreground transition-colors">
                Cursos
              </a>
              <a href="#" className="text-foreground text-sm hover:text-muted-foreground transition-colors">
                Categorias
              </a>
              <a href="#" className="text-foreground text-sm hover:text-muted-foreground transition-colors">
                Minha Lista
              </a>
            </nav>

            {/* Right side actions */}
            <div className="flex items-center gap-4">
              {/* Search */}
              <Button variant="ghost" size="icon" onClick={() => setSearchOpen(!searchOpen)}>
                <Search className="w-5 h-5" />
              </Button>

              {/* Profile */}
              <Button variant="ghost" size="icon" onClick={() => navigate("/login")}>
                <User className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;