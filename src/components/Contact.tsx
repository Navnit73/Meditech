import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Send, Calendar } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    clinicName: '',
    requirements: '',
    phone: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://formsubmit.co/ajax/navnitrai5389@gmail.com', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          clinicName: formData.clinicName,
          phone: formData.phone,
          requirements: formData.requirements,
          _subject: 'New Contact Form Submission',
          _template: 'table'
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', clinicName: '', requirements: '', phone: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 relative min-h-screen flex items-center justify-center overflow-hidden px-1 sm:px-2">
      <div className="max-w-7xl mx-auto px-3">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Ready to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
              Transform
            </span>{' '}
            Your Practice?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Let's discuss how we can help digitize your healthcare practice. 
            Get a free consultation and project estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Get Your Free Consultation
            </h3>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg">
                Thank you! We'll get back to you within 2 hours.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 text-red-800 rounded-lg">
                Something went wrong. Please try again or contact us directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 peer placeholder-transparent"
                    placeholder="Your Name"
                  />
                  <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-slate-600 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-teal-600">
                    Your Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 peer placeholder-transparent"
                    placeholder="Email Address"
                  />
                  <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-slate-600 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-teal-600">
                    Email Address
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    name="clinicName"
                    value={formData.clinicName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 peer placeholder-transparent"
                    placeholder="Clinic/Practice Name"
                  />
                  <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-slate-600 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-teal-600">
                    Clinic/Practice Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 peer placeholder-transparent"
                    placeholder="Phone Number"
                  />
                  <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-slate-600 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-teal-600">
                    Phone Number
                  </label>
                </div>
              </div>

              <div className="relative">
                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 peer placeholder-transparent resize-none"
                  placeholder="Tell us about your requirements..."
                />
                <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-slate-600 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-teal-600">
                  Project Requirements
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-teal-600 text-white py-4 rounded-xl font-semibold hover:bg-teal-700 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Get In Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <Phone className="text-teal-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">Phone</div>
                    <div className="text-slate-600">+91 7355087072</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">Email</div>
                    <div className="text-slate-600">navnit@meditechsolutions.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <MessageSquare className="text-emerald-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">WhatsApp</div>
                    <div className="text-slate-600">+91 7355087072</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <MapPin className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">Address</div>
                    <div className="text-slate-600">
                      Khadda, Uttar Pradesh 274802
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-slate-100 rounded-2xl p-6 text-center">
              <div className="text-2xl font-bold text-slate-800 mb-2">
                ⚡ Quick Response
              </div>
              <div className="text-slate-600">
                We respond to all inquiries within 2 hours during business hours
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;