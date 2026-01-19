'use client';

import { Icon } from '@iconify/react';
import { Button } from '@/components/ui/button';
import { getWhatsAppLink } from '@/lib/utils';
import { siteConfig } from '@/config/site-config';

export function FloatingActions() {
  const handleCall = () => {
    window.location.href = `tel:${siteConfig.contact.phone}`;
  };

  const handleWhatsApp = () => {
    if (siteConfig.contact.whatsapp) {
      window.open(getWhatsAppLink(siteConfig.contact.whatsapp, 'Hi, I want to know more about your gym!'), '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <aside 
      className="fixed top-1/2 -translate-y-1/2 right-4 md:right-6 z-[45] flex flex-col gap-2 md:gap-3"
      aria-label="Quick contact actions"
    >
      {/* WhatsApp */}
      {siteConfig.contact.whatsapp && (
        <Button
          onClick={handleWhatsApp}
          size="icon"
          className="rounded-full shadow-lg hover:shadow-xl bg-[#25D366] hover:bg-[#128C7E] text-white h-12 w-12 md:h-14 md:w-14 transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Contact us on WhatsApp"
          title="Chat with us on WhatsApp"
        >
          <Icon icon="mdi:whatsapp" className="h-6 w-6 md:h-7 md:w-7" aria-hidden="true" />
        </Button>
      )}
      
      {/* Call */}
      <Button
        onClick={handleCall}
        size="icon"
        className="rounded-full shadow-lg hover:shadow-xl h-12 w-12 md:h-14 md:w-14 transition-all duration-300 hover:scale-110 active:scale-95 bg-primary hover:bg-primary/90"
        aria-label={`Call us at ${siteConfig.contact.phone}`}
        title={`Call ${siteConfig.contact.phone}`}
      >
        <Icon icon="mdi:phone" className="h-6 w-6 md:h-7 md:w-7" aria-hidden="true" />
      </Button>
    </aside>
  );
}
