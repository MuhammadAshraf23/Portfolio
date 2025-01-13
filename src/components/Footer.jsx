import { contact } from "@/data/contact";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6">
          {/* Email */}
          <div className="flex items-center space-x-3">
            <img
              src="/images/gmail-color.svg"
              alt="Email Icon"
              className="h-6 w-6"
            />
            <a href={`mailto:${contact.email}`} className="text-lg text-blue-600">
              {contact.email}
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center space-x-3">
            <img
              src="/images/linkedin.svg"
              alt="LinkedIn Icon"
              className="h-6 w-6"
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
            <img
              src="/images/skills/github-color.svg"
              alt="GitHub Icon"
              className="h-8 w-8 bg-white rounded-full"
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
            <img
              src="/images/logo.png"
              alt="Portfolio Icon"
              className="h-6 w-6"
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
