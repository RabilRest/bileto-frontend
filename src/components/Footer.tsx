import { Facebook, Instagram, Twitter } from "lucide-react";
const Footer = () => {
    return (
        <div>
     <footer className="bg-white text-[#1E63F6] pt-12 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        {/* Logo and Brand */}
        <div>
          <h1 className="text-2xl font-extrabold text-[#1E63F6]">Billetto-Id</h1>
        </div>

        {/* Product */}
        <div>
          <h2 className="font-semibold text-[#1E63F6] mb-3">Product</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Overview</a></li>
            <li><a href="#" className="hover:underline">Features</a></li>
            <li><a href="#" className="hover:underline">Solutions</a></li>
            <li><a href="#" className="hover:underline">Tutorials</a></li>
            <li><a href="#" className="hover:underline">Pricing</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h2 className="font-semibold text-[#1E63F6] mb-3">Company</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Press</a></li>
            <li><a href="#" className="hover:underline">News</a></li>
            <li><a href="#" className="hover:underline">Media Kit</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className="font-semibold text-[#1E63F6] mb-3">Resources</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Newsletter</a></li>
            <li><a href="#" className="hover:underline">Events</a></li>
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Tutorials</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h2 className="font-semibold text-[#1E63F6] mb-3">Legal</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Terms</a></li>
            <li><a href="#" className="hover:underline">Privacy</a></li>
            <li><a href="#" className="hover:underline">Cookies</a></li>
            <li><a href="#" className="hover:underline">Licenses</a></li>
            <li><a href="#" className="hover:underline">Settings</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom section */}
      <div className="max-w-7xl mx-auto mt-8 border-t border-blue-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#1E63F6]">© 2025 Billetto-Id. All rights reserved.</p>

        <div className="flex gap-5 text-[#1E63F6]">
          <a href="#" className="hover:opacity-70" aria-label="Facebook">
            <Facebook size={20} strokeWidth={2.5} />
          </a>
          <a href="#" className="hover:opacity-70" aria-label="Instagram">
            <Instagram size={20} strokeWidth={2.5} />
          </a>
          <a href="#" className="hover:opacity-70" aria-label="Twitter">
            <Twitter size={20} strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </footer>
    </div>
    
    )
}

export default Footer;
