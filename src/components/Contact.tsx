import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle,
  Linkedin,
  Instagram,
  Twitter
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'E-mail',
      content: 'contato@mindwave.digital',
      action: 'mailto:contato@mindwave.digital'
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      content: '(11) 99690-8505',
      action: 'https://wa.me/5511996908505'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      content: '@mind.wavebr',
      action: 'https://instagram.com/mind.wavebr'
    },
    {
      icon: Clock,
      title: 'Horário',
      content: 'Seg - Sex: 9h às 18h',
      action: '#'
    }
  ];

  const socialLinks = [
    { icon: Instagram, url: 'https://instagram.com/mind.wavebr', label: 'Instagram' },
    { icon: MessageCircle, url: 'https://wa.me/5511996908505', label: 'WhatsApp' },
    { icon: Linkedin, url: '#', label: 'LinkedIn' }
  ];

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-mindwave-blue/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Premium Section Header */}
        <div className="text-center mb-20">
          <h2 className="display-text text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
            <span className="text-foreground">Vamos</span>
            <br />
            <span className="text-gradient-primary">
              Conversar?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Estamos prontos para <span className="text-mindwave-blue-accent font-semibold">transformar suas ideias</span> em realidade digital. 
            Entre em contato e vamos construir algo extraordinário juntos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                  <MessageCircle className="h-6 w-6 text-primary mr-2" />
                  Envie sua Mensagem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-foreground">Nome *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-2 bg-input border-border focus:border-primary"
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-foreground">E-mail *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-2 bg-input border-border focus:border-primary"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-foreground">Telefone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-2 bg-input border-border focus:border-primary"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    <div>
                      <Label htmlFor="service" className="text-foreground">Serviço de Interesse</Label>
                      <Input
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="mt-2 bg-input border-border focus:border-primary"
                        placeholder="Ex: Site, E-commerce, Branding"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground">Mensagem *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-2 bg-input border-border focus:border-primary min-h-32"
                      placeholder="Conte-nos sobre seu projeto e objetivos..."
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-500 group"
                  >
                    <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card 
                    key={index} 
                    className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 group hover:shadow-elegant"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-500">
                          <IconComponent className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground text-sm">{info.title}</h4>
                          <a 
                            href={info.action}
                            className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                          >
                            {info.content}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Social Media */}
            <Card className="bg-gradient-primary text-primary-foreground">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold mb-4">Siga-nos</h3>
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                        aria-label={social.label}
                      >
                        <IconComponent className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* CTA Card */}
            <Card className="bg-secondary/30 backdrop-blur-sm border-border">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Preferir falar por WhatsApp?
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Respondemos rapidamente!
                </p>
                <a
                  href="https://wa.me/5511996908505"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button 
                    variant="outline" 
                    className="w-full glass-card border-mindwave-blue text-mindwave-blue-accent hover:bg-gradient-primary hover:text-primary-foreground transition-all duration-500 hover-lift"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Chamar no WhatsApp
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;