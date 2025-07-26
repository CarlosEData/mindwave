import { Button } from '@/components/ui/button';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin,
  Instagram,
  Twitter,
  Globe,
  ShoppingCart,
  Palette,
  TrendingUp
} from 'lucide-react';

const Footer = () => {
  const services = [
    { icon: Globe, name: 'Desenvolvimento Web' },
    { icon: ShoppingCart, name: 'E-commerce' },
    { icon: Palette, name: 'Branding & Design' },
    { icon: TrendingUp, name: 'Tráfego Pago' }
  ];

  const quickLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Sobre', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contato', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Linkedin, url: '#', label: 'LinkedIn' },
    { icon: Instagram, url: '#', label: 'Instagram' },
    { icon: Twitter, url: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-mindwave-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, hsl(210 100% 60% / 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, hsl(210 100% 60% / 0.1) 0%, transparent 50%)
          `
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-mindwave-gray-dark/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Mantenha-se <span className="text-primary">Atualizado</span>
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Receba insights, dicas e tendências do mundo digital diretamente em seu e-mail.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="w-full px-4 py-3 bg-mindwave-dark-lighter border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300"
            />
            <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-500 whitespace-nowrap px-6">
              <Mail className="h-4 w-4 mr-2" />
              Inscrever
            </Button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">M</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-mindwave-blue-light bg-clip-text text-transparent">
                  Mindwave
                </span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Agência digital especializada em soluções 360° para transformar 
                pequenas e médias empresas em referências digitais.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      className="w-10 h-10 bg-mindwave-dark-lighter border border-border rounded-lg flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <IconComponent className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold text-foreground mb-6">Nossos Serviços</h4>
              <ul className="space-y-3">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <li key={index}>
                      <a 
                        href="#services" 
                        className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300 group"
                      >
                        <IconComponent className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                        <span>{service.name}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-foreground mb-6">Links Rápidos</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                    >
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold text-foreground mb-6">Contato</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">E-mail</p>
                    <a 
                      href="mailto:contato@mindwave.digital" 
                      className="text-foreground hover:text-primary transition-colors duration-300"
                    >
                      contato@mindwave.digital
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">Telefone</p>
                    <a 
                      href="tel:+5511999999999" 
                      className="text-foreground hover:text-primary transition-colors duration-300"
                    >
                      +55 (11) 99999-9999
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">Localização</p>
                    <p className="text-foreground">São Paulo, SP - Brasil</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-mindwave-gray-dark/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © 2024 Mindwave Digital. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Termos de Uso
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;