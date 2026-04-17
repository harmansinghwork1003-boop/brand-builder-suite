import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phone = "919310384801";
  const message = encodeURIComponent(
    "Hi Makes & Made Developers! I'm interested in your services and would like to know more."
  );
  const href = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 left-6 z-50 group flex items-center gap-2"
    >
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl">
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" />
        <svg
          viewBox="0 0 32 32"
          className="relative h-7 w-7 fill-current"
          aria-hidden="true"
        >
          <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.86.244-1.176 0-.487-1.39-.888-1.7-1.017zM16.346 24.59c-1.4 0-2.78-.387-3.97-1.103l-.286-.172-2.92.946.946-2.85-.187-.3a8.27 8.27 0 0 1-1.246-4.354c0-4.554 3.71-8.265 8.265-8.265 4.554 0 8.265 3.71 8.265 8.265 0 4.55-3.71 8.265-8.866 8.265zM16.302 6.55C10.95 6.55 6.6 10.9 6.6 16.252a9.6 9.6 0 0 0 1.318 4.83L6.5 25.5l4.553-1.4a9.605 9.605 0 0 0 4.74 1.245h.004c5.353 0 9.703-4.353 9.703-9.706 0-2.595-1.014-5.038-2.85-6.876a9.66 9.66 0 0 0-6.853-2.85z" />
        </svg>
      </span>
      <span className="hidden md:flex items-center px-4 py-2 rounded-full bg-background/90 backdrop-blur-md border border-border/40 text-sm font-semibold text-foreground shadow-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        Chat on WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;
