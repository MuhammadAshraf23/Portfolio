import Image from 'next/image'; // Import next/image for optimized image loading
import { contact } from "@/data/contact";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-center sm:space-x-6 space-y-4 sm:space-y-0">
          {/* Email */}
          <div className="flex items-center space-x-3">
            <Image
              src="/images/gmail-color.svg"
              alt="Email Icon"
              width={24} // Specify the width for the image
              height={24} // Specify the height for the image
            />
            <a href={`mailto:${contact.email}`} className="text-lg text-blue-600">
              {contact.email}
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center space-x-3">
            <Image
              src="/images/linkedin.svg"
              alt="LinkedIn Icon"
              width={24}
              height={24}
            />
            <a
              href={contact.linkedin}
              className="text-lg text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>

          {/* GitHub */}
          <div className="flex items-center space-x-3">
            <Image
              src="/images/skills/github-color.svg"
              alt="GitHub Icon"
              width={32}
              height={32}
              className="bg-white rounded-full"
            />
            <a
              href={contact.github}
              className="text-lg text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>

          {/* Portfolio */}
          <div className="flex items-center space-x-3">
            <Image
              src="/images/logo.PNG"
              alt="Portfolio Icon"
              width={24}
              height={24}
            />
            <a
              href={contact.portfolio}
              className="text-lg text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
