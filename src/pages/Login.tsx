import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login - in production, add real authentication
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md space-y-8">
        {/* Logo/Title */}
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-8">Entrar</h1>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div className="space-y-4">
            <div className="space-y-2">
              <Input
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 bg-muted/50 border-border"
                required
              />
            </div>

            <div className="space-y-2">
              <Input
                id="password"
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 bg-muted/50 border-border"
                required
              />
            </div>
          </div>

          <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
            Entrar
          </Button>
        </form>

        {/* Additional Links */}
        <div className="text-center space-y-4">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors block">
            Esqueceu a senha?
          </a>
          <p className="text-sm text-muted-foreground">
            Não tem uma conta?{" "}
            <a href="#" className="text-foreground hover:underline font-semibold">
              Criar conta
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
