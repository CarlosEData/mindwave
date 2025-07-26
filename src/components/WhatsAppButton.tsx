import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppButton = () => {
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de agendar uma consulta gratuita para digitalizar meu negócio com a Mindwave. Quando podemos conversar?"
  );
  
  const whatsappUrl = `https://wa.me/5511996908505?text=${whatsappMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <Button
        asChild
        size="lg"
        className="bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full p-4 hover-lift pulse-glow group"
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3"
        >
          <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
          <span className="hidden sm:block font-medium">
            Agendar Consulta
          </span>
        </a>
      </Button>
    </div>
  );
};

export default WhatsAppButton;