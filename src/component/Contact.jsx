import React, { useState } from 'react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    const formData = new FormData(e.target);
    formData.append("access_key", "88ab7ac3-e6ea-428c-8fd5-7917a0ed78b3"); // Replace with your Web3Forms key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();
      if (result.success) {
        setFormStatus('success');
        setTimeout(() => setFormStatus('idle'), 3000);
      } else {
        setFormStatus('idle');
        alert("Something went wrong: " + result.message);
      }
    } catch (error) {
      console.error(error);
      setFormStatus('idle');
    }
  };

  return (
    <section id="contact" className="py-12 md:py-20 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-slate-400">Have a project in mind? Reach out and let's discuss.</p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-6 md:p-8 border border-slate-800 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                <input type="text" name="name" required className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                <input type="email" name="email" required className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white" placeholder="john@example.com" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Service Interest</label>
              <select name="service" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white">
                <option>Full Stack Development</option>
                <option>AI Website Generation</option>
                <option>App Development</option>
                <option>Video Editing</option>
                <option>Logo Design</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
              <textarea name="message" rows="4" required className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white" placeholder="Tell me about your project..."></textarea>
            </div>

            <button type="submit" disabled={formStatus === 'sending' || formStatus === 'success'} className={`w-full py-4 rounded-lg font-bold text-white transition-all transform hover:scale-[1.01] ${
              formStatus === 'success' ? 'bg-green-600' : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
            }`}>
              {formStatus === 'idle' && 'Send Message'}
              {formStatus === 'sending' && 'Sending...'}
              {formStatus === 'success' && 'Message Sent!'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;