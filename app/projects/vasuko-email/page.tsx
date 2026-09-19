import React from 'react';

export default function VasukoEmailTemplate() {
  return (
    <div className="min-h-screen bg-white py-10 px-4 md:py-20 font-sans selection:bg-[#1F5BE3] selection:text-white flex flex-col items-center">
      
      {/* Email Container (Flat) */}
      <div className="w-full max-w-[600px] bg-white mx-auto">
        
        {/* === HEADER === */}
        <div className="px-8 pt-4 pb-8 md:px-12 md:pb-10 flex justify-center md:justify-start">
          {/* Logo (Blue SVG) */}
          <div className="flex items-center gap-3">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4L16 32L24 16L12 4H4Z" fill="#1F5BE3"/>
              <path d="M22 4C22 9.52285 26.4772 14 32 14C37.5228 14 42 9.52285 42 4H22Z" fill="#1F5BE3" transform="translate(0, 4) rotate(-45 32 4) scale(0.7)"/>
              <circle cx="28" cy="12" r="8" fill="#1F5BE3"/>
            </svg>
            <div>
              <h1 className="text-2xl font-bold text-black tracking-tight leading-none mb-0.5">Vasuko</h1>
              <p className="text-[13px] font-medium text-gray-700 tracking-wide leading-none">App Solutions</p>
            </div>
          </div>
        </div>

        {/* === BODY CONTENT === */}
        <div className="px-8 pb-10 md:px-12 md:pb-12 text-[#334155]">
          <h2 className="text-4xl md:text-[52px] font-black text-[#0F172A] tracking-tight mb-8">
            HELLO!
          </h2>

          <div className="text-[15px] leading-[1.8] space-y-6">
            <p className="text-[#1E293B]">
              Hi there, <br/>
              I'm Sandip Dangi, Co-Founder / CTO of Vasuko App Solutions. <br/>
              Nice to e-meet you.
            </p>

            <p>
              At Vasuko, we help businesses and startups build powerful digital products and grow with technology. We offer website development, mobile apps, UI/UX design, custom software, cloud services, and AI & business automation solutions.
            </p>

            {/* CTA Block (Minimal) */}
            <div className="my-10 text-left">
              <h3 className="text-[15px] font-bold text-black tracking-wide mb-6 uppercase">
                WANT TO KNOW MORE ABOUT US?
              </h3>
              
              <a href="#" className="inline-block bg-[#1F5BE3] text-white font-bold text-[15px] px-10 py-4 rounded-full hover:bg-blue-700 transition-colors">
                EXPLORE MORE
              </a>
            </div>

            <p>
              Whether you need a modern website, mobile app, or custom software, our quality team is ready to turn your ideas into real results with clean design, robust technology and smooth delivery.
            </p>

            <p className="pt-2">
              If you have any project or idea in mind, <br/>
              I'd be happy to connect and explore together.
            </p>
          </div>
        </div>

        {/* === FOOTER === */}
        <div className="bg-[#F8FAFC] border-t border-[#E2E8F0] px-8 py-10 md:px-12 md:py-12">
          
          {/* Footer Top (Logo + Links) */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            {/* Dark/Grayscale Logo */}
            <div className="flex items-center gap-2 border-l-2 border-transparent md:border-r-2 md:border-gray-200 md:pr-8">
              <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80 grayscale">
                <path d="M4 4L16 32L24 16L12 4H4Z" fill="#000000"/>
                <circle cx="28" cy="12" r="8" fill="#000000"/>
              </svg>
              <div>
                <h2 className="text-xl font-bold text-gray-800 tracking-tight leading-none mb-0.5">vasuko</h2>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] font-bold text-[#475569]">
              <a href="#" className="hover:text-[#1F5BE3] transition-colors">Visit Website</a>
              <a href="#" className="hover:text-[#1F5BE3] transition-colors">Our Services</a>
              <a href="#" className="hover:text-[#1F5BE3] transition-colors">Contact Us</a>
            </div>
          </div>

          <div className="text-[11px] font-medium text-[#94A3B8] mb-4">
            Vasuko App Solutions Pvt.Ltd.
          </div>

          {/* Footer Description */}
          <p className="text-[11px] leading-[1.6] text-[#64748B] mb-8 max-w-[500px]">
            Vasuko App Solutions Pvt.Ltd. is a software development agency delivering modern, scalable, and user-focused digital solutions. We help businesses and startups transform ideas into powerful digital products.
          </p>

          {/* Legal Fine Print */}
          <div className="text-[10px] leading-[1.6] text-[#94A3B8] space-y-4 mb-10">
            <p>
              Copyright © 2026 Vasuko App Solutions Pvt. Ltd.<br/>
              All rights reserved.<br/>
              Registered Corporate Address: Vasuko Pvt. Ltd., Ward No. 15, Ghorahi, Dang, Lumbini Province, 22400, Nepal.
            </p>
            
            <p>
              This email and any attachments are confidential and intended solely for the use of the individual or entity to whom it is addressed. If you have received this email in error, please notify us immediately and delete it from your system.
            </p>

            <p>
              For partnership inquiries, project discussions, or any other information,<br/>
              feel free to contact us at <a href="mailto:hello@vasuko.com" className="text-[#1F5BE3] hover:underline">hello@vasuko.com</a>.
            </p>
          </div>

          {/* Footer Bottom (Links & Socials) */}
          <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-6 border-t border-[#E2E8F0] pt-8">
            <div className="flex items-center gap-4 text-[11px] font-medium text-[#94A3B8]">
              <a href="#" className="hover:text-[#475569]">Terms & Conditions</a>
              <a href="#" className="hover:text-[#475569]">Privacy Policy</a>
              <a href="#" className="hover:text-[#475569]">Cookie Policy</a>
            </div>
            
            <div className="flex items-center gap-2">
              <a href="#" className="w-8 h-8 rounded-full border border-[#CBD5E1] bg-white flex items-center justify-center text-[#64748B] hover:bg-[#1F5BE3] hover:border-[#1F5BE3] hover:text-white transition-all">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-[#CBD5E1] bg-white flex items-center justify-center text-[#64748B] hover:bg-[#1F5BE3] hover:border-[#1F5BE3] hover:text-white transition-all">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-[#CBD5E1] bg-white flex items-center justify-center text-[#64748B] hover:bg-[#1F5BE3] hover:border-[#1F5BE3] hover:text-white transition-all">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-[#CBD5E1] bg-white flex items-center justify-center text-[#64748B] hover:bg-[#1F5BE3] hover:border-[#1F5BE3] hover:text-white transition-all">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

        </div>
      </div>
      
      {/* Disclaimer */}
      <div className="mt-8 text-[12px] text-[#94A3B8] font-medium">
        Email Preview rendered in React/Tailwind
      </div>
    </div>
  );
}
