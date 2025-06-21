import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "We've received your message and will get back to you soon.",
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20">
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="flex items-center gap-2 mb-12">
              <div className="h-px w-12 bg-gray-300"></div>
              <p className="text-gray-500 text-sm uppercase tracking-widest">Get in Touch</p>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              Contact Us
            </h1>
            
            <p className="text-lg text-gray-600 max-w-3xl mb-16">
              We'd love to hear from you! Whether you have a question about our services, need a demo, or want to join our team, we're here to help.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <div className="md:col-span-1">
                <div className="border-t border-gray-200 pt-6 space-y-12">
                  <div>
                    <h3 className="text-xl font-medium mb-4 text-gray-900">Contact Information</h3>
                    <p className="text-gray-600">Feel free to reach out to us using any of these methods.</p>
                  </div>
                  
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-2">Email</h4>
                      <p className="text-gray-900">sushilsahani322@gmail.com</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-2">Phone</h4>
                      <p className="text-gray-900">+91 9967612372</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-2">Office</h4>
                      <address className="text-gray-900 not-italic">
                        Wadala <br />
                        Mumbai , Maharashtra<br />
                        India
                      </address>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-xl font-medium mb-8 text-gray-900">Send us a message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label htmlFor="name" className="block text-sm text-gray-600 mb-2">
                          Your Name
                        </label>
                        <Input 
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="aspirant"
                          required
                          className="w-full border-gray-300 focus:border-gray-500 focus:ring-0"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm text-gray-600 mb-2">
                          Email Address
                        </label>
                        <Input 
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="aspirant@gmail.com"
                          required
                          className="w-full border-gray-300 focus:border-gray-500 focus:ring-0"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm text-gray-600 mb-2">
                        Subject
                      </label>
                      <Input 
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        required
                        className="w-full border-gray-300 focus:border-gray-500 focus:ring-0"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm text-gray-600 mb-2">
                        Message
                      </label>
                      <Textarea 
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project or question..."
                        required
                        className="w-full min-h-[150px] border-gray-300 focus:border-gray-500 focus:ring-0"
                      />
                    </div>
                    
                    <div>
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="rounded-full bg-black hover:bg-black/80 text-white px-8 py-3"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact; 