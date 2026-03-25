import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    const phoneNumber = "918825923450";
    const message = encodeURIComponent("Hello Abirami, I would like to connect with you.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-28 right-15 z-[9999] bg-[#25D366] text-white p-3.5 rounded-full  hover:scale-110 transition-all duration-300 group flex items-center justify-center"
            aria-label="Contact on WhatsApp"
        >
            <div className="absolute -inset-1 bg-[#25D366] rounded-full  opacity-40 group-hover:opacity-75 animate-pulse transition duration-1000 group-hover:duration-200"></div>
            <FaWhatsapp size={32} className="relative z-10" />
            
            {/* Tooltip */}
            <span className="absolute right-16 bg-white text-[#25D366] px-3 py-1 rounded-lg text-sm font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-[#25D366]">
                WhatsApp Me!
            </span>
        </a>
    );
};

export default WhatsAppButton;
