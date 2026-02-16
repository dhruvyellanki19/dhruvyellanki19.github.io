import { Github, Linkedin, Twitter, Mail, Heart, Instagram, BookOpen } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Journal", href: "#blog" },
    { label: "Contact", href: "#contact" },

  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/dhruvyellanki19" },
    { icon: Linkedin, href: "https://linkedin.com/in/saidhruv" },
    { icon: Instagram, href: "https://www.instagram.com/dhruvyellanki/" },
    { icon: BookOpen, href: "http://medium.com/@dhruvyellanki2000" },
    { icon: Mail, href: "mailto:hello@saidhruv.com" },
  ];

  return (
    <footer className="bg-gray-50 py-16 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <span className="text-lg font-semibold text-foreground tracking-tight">
              Sai Dhruv Yellanki
            </span>
            <p className="text-sm text-gray-500 mt-2">
              Crafting intelligence.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-8">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-sm text-gray-500 hover:text-black transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-black/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-xs text-gray-500">
            © {currentYear} Sai Dhruv Yellanki. All rights reserved.
          </p>

          {/* Socials */}
          <div className="flex gap-6">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                className="text-gray-400 hover:text-black transition-colors"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <p className="text-xs text-gray-400 flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-red-500" />
          </p>
        </div>

      </div>
    </footer>
  );
}
