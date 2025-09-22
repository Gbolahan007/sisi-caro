import Image from "next/image";
import Link from "next/link";
import {
  Monitor,
  Lightbulb,
  Globe,
  Search,
  Layers,
  Building,
  Target,
  Laptop,
  MousePointer,
  Linkedin,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  const services = [
    {
      icon: Monitor,
      title: "Self-Drive Strategy",
      slug: "self-drive-strategy",
    },
    {
      icon: Lightbulb,
      title: "Who Will Do the Work?",
      slug: "who-will-do-the-work",
    },
    { icon: Globe, title: "Socials by Sisi", slug: "socials-by-sisi" },
    {
      icon: Search,
      title: "WhatsApp Business Optimization",
      slug: "whatsapp-optimization",
    },
    {
      icon: Layers,
      title: "Service | Product Menu Design",
      slug: "service-design",
    },
    {
      icon: Building,
      title: "Monthly Engagement Boost",
      slug: "engagement-boost",
    },
    {
      icon: Target,
      title: "Customer Service Message Bank",
      slug: "customer-service-bank",
    },
    {
      icon: Laptop,
      title: "Monthly Content Planner + Call",
      slug: "content-planner",
    },
    {
      icon: MousePointer,
      title: "Sales | Promo Campaign Launch",
      slug: "sales-promo-campaign",
    },
  ];

  const quickLinks = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/company/sisi-caro-media/",
      hoverColor: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "http://www.instagram.com/sisicarocreative",
      hoverColor: "hover:text-pink-600",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://m.facebook.com/sisicarocreative/",
      hoverColor: "hover:text-blue-700",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: "http://wa.me/2348176161113",
      hoverColor: "hover:text-green-600",
    },
  ];

  return (
    <footer className="bg-white mt-6 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="mb-2">
              <Image
                src="/sis-carooo.png"
                alt="Sis Caroo Logo"
                width={150}
                height={60}
                className="h-24 w-auto"
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Empowering businesses with strategic digital solutions and
              innovative marketing approaches.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-black transition-colors duration-200 text-sm"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="text-gray-600 hover:text-black transition-colors duration-200 text-sm py-1 flex items-start"
                >
                  <service.icon className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{service.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* Social Media Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className={`text-gray-600 ${social.hoverColor} transition-colors duration-200`}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-gray-500 text-sm">
              © 2025 Sisi Caro. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
