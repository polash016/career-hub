import React from 'react';
import footerImg from '../../public/Logo/footer.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-neutral-content">
  <div>
    <span className="text-3xl text-white font-extrabold">CareerHub</span> 
    <p className='text-xs text-slate-400 mb-5 mt-5'>There are many variations of passages <br /> of Lorem Ipsum , but the majority have <br /> suffered alteration in some form.</p>
    <img src="/public/footer.png" alt="" />
  </div> 
  <div>
    <span className="text-sm text-white font-semibold">Company</span> 
    <a className="text-xs text-slate-400">About Us</a>
    <a className="text-xs text-slate-400">Work</a>
    <a className="text-xs text-slate-400">Latest News</a>
    <a className="text-xs text-slate-400">Careers</a>
  </div> 
  <div>
    <span className="text-sm text-white font-semibold">Product</span> 
    <a className="text-xs text-slate-400">Prototype</a>
    <a className="text-xs text-slate-400">Plans & Pricing</a>
    <a className="text-xs text-slate-400">Customers</a>
    <a className="text-xs text-slate-400">Integrations</a>
  </div> 
  <div>
    <span className="text-sm text-white font-semibold">Support</span> 
    <a className="text-xs text-slate-400">Help Desk</a>
    <a className="text-xs text-slate-400">Sales</a>
    <a className="text-xs text-slate-400">Become a Partner</a>
    <a className="text-xs text-slate-400">Developers</a>
  </div>
  <div>
    <span className="text-sm text-white font-semibold">Contact</span> 
    <p className='text-xs text-slate-400'>524 Broadway , NYC</p>
    <p className='text-xs text-slate-400'>+1 777 - 978 - 5570</p>
  </div>
</footer>
        </div>
    );
};

export default Footer;