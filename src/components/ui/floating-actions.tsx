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
    <aside className="fixed bottom-6 left-6 z-50 flex flex-col gap-3" aria-label="Quick contact actions">
      {/* WhatsApp */}
      {siteConfig.contact.whatsapp && (
        <Button
          onClick={handleWhatsApp}
          size="icon"
          className="rounded-full shadow-2xl bg-[#25D366] hover:bg-[#128C7E] text-white h-14 w-14 animate-pulse"
          aria-label="Contact us on WhatsApp"
          title="Chat with us on WhatsApp"
        >
          <Icon icon="mdi:whatsapp" className="h-7 w-7" aria-hidden="true" />
        </Button>
      )}
      
      {/* Call */}
      <Button
        onClick={handleCall}
        size="icon"
        className="rounded-full shadow-2xl h-14 w-14"
        aria-label={`Call us at ${siteConfig.contact.phone}`}
        title={`Call ${siteConfig.contact.phone}`}
      >
        <Icon icon="mdi:phone" className="h-7 w-7" aria-hidden="true" />
      </Button>
    </aside>
  );
}
