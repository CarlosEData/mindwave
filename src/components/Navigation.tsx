import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Instagram, MessageCircle } from 'lucide-react';
import mindwaveLogo from '@/assets/mindwave-logo.png';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', href: '#home' },
    { label: 'Serviços', href: '#services' },
    { label: 'Sobre', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contato', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      isScrolled ? 'bg-background/80 backdrop-blur-xl border-b border-mindwave-blue/20 shadow-elegant' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Premium Logo */}
          <div className="flex items-center hover-lift magnetic">
            <img src={mindwaveLogo} alt="Mindwave" className="h-12 w-auto object-contain" />
          </div>

          {/* Premium Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground/90 hover:text-mindwave-blue-accent transition-all duration-500 font-medium text-base relative group magnetic"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-500 group-hover:w-full rounded-full"></span>
              </a>
            ))}
            
            {/* Social Links */}
            <div className="flex items-center space-x-4 ml-6">
              <a 
                href="https://instagram.com/mind.wavebr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-mindwave-blue-accent transition-all duration-300 hover-lift"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/5511996908505?text=Olá! Gostaria de saber mais sobre os serviços da Mindwave." 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-mindwave-cyan transition-all duration-300 hover-lift"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>

            <Button 
              variant="outline" 
              size="sm"
              className="glass-card border-mindwave-blue/30 text-mindwave-blue-accent hover:bg-gradient-primary hover:text-primary-foreground transition-all duration-500 font-medium px-6 py-2 hover-lift magnetic"
            >
              Fale Conosco
            </Button>
          </div>

          {/* Modern Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden hover:bg-mindwave-blue/10 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`}></span>
              <span className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'}`}></span>
            </div>
          </Button>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-mindwave-blue/20 shadow-elegant animate-fade-in">
            <div className="container mx-auto px-6 py-8">
              <div className="flex flex-col space-y-6">
                {menuItems.map((item, index) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-foreground hover:text-mindwave-blue-accent transition-all duration-500 font-medium py-3 text-lg border-b border-mindwave-blue/10 last:border-0"
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item.label}
                  </a>
                ))}
                
                {/* Mobile Social Links */}
                <div className="flex items-center justify-center space-x-8 pt-4">
                  <a 
                    href="https://instagram.com/mind.wavebr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground/60 hover:text-mindwave-blue-accent transition-all duration-300 hover-lift"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a 
                    href="https://wa.me/5511996908505?text=Olá! Gostaria de saber mais sobre os serviços da Mindwave." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground/60 hover:text-mindwave-cyan transition-all duration-300 hover-lift"
                  >
                    <MessageCircle className="h-6 w-6" />
                  </a>
                </div>
                
                <Button 
                  variant="outline" 
                  className="border-mindwave-blue text-mindwave-blue-accent hover:bg-gradient-primary hover:text-primary-foreground transition-all duration-500 mt-6 font-medium"
                >
                  Fale Conosco
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;