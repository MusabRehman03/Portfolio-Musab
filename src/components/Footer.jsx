import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <motion.footer
      className="w-full bg-[#1a191e] text-white py-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Full width separator line */}
      <motion.div
        className="w-full border-t border-gray-600 opacity-50 mb-6"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
      ></motion.div>

      <div className="w-full px-9">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Left side: Copyright */}
          <div className="text-[12px] sm:text-sm text-neutral-400 mb-4 sm:mb-0">
            © {new Date().getFullYear()} Musab Ur Rehman. All rights reserved.
          </div>

          {/* Right side: Social Icons */}
          
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
