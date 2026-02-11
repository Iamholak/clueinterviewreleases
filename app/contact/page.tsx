'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // In a real app, this would send to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="border-b border-border bg-muted/30">
          <div className="container py-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-muted-foreground">Get in touch with the ClueInterview community</p>
          </div>
        </div>

        {/* Contact Section */}
        <section className="py-20 md:py-32">
          <div className="container grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              
              {submitted ? (
                <div className="p-6 bg-secondary/10 border border-secondary rounded-lg">
                  <p className="text-foreground font-semibold mb-2">Thank you for reaching out!</p>
                  <p className="text-muted-foreground">
                    We've received your message and will get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background resize-none"
                      placeholder="Tell us more..."
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full btn btn-primary py-2.5 text-base"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
                <p className="text-muted-foreground mb-6">
                  Have questions or want to collaborate? We'd love to hear from you. Reach out through any of these channels:
                </p>
              </div>

              <div className="space-y-6">
                <a 
                  href="https://github.com/Iamholak/clueinterview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 border border-border rounded-lg hover:border-primary hover:bg-muted/50 transition-all"
                >
                  <div className="text-2xl">🐙</div>
                  <div>
                    <h4 className="font-semibold">GitHub</h4>
                    <p className="text-sm text-muted-foreground">Report issues, request features, or contribute code</p>
                  </div>
                </a>

                <a 
                  href="https://github.com/Iamholak/clueinterview/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 border border-border rounded-lg hover:border-primary hover:bg-muted/50 transition-all"
                >
                  <div className="text-2xl">💬</div>
                  <div>
                    <h4 className="font-semibold">GitHub Discussions</h4>
                    <p className="text-sm text-muted-foreground">Join community conversations and ask questions</p>
                  </div>
                </a>

                <a 
                  href="https://github.com/Iamholak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 border border-border rounded-lg hover:border-primary hover:bg-muted/50 transition-all"
                >
                  <div className="text-2xl">👤</div>
                  <div>
                    <h4 className="font-semibold">Creator's GitHub</h4>
                    <p className="text-sm text-muted-foreground">Follow for updates on new projects and features</p>
                  </div>
                </a>

                <div className="p-4 border border-border rounded-lg bg-muted/30">
                  <div className="text-2xl mb-2">✉️</div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-sm text-muted-foreground">Check GitHub profile for contact information</p>
                </div>
              </div>

              <div className="p-6 bg-primary/5 border border-primary/20 rounded-lg">
                <h4 className="font-semibold mb-2">Response Time</h4>
                <p className="text-sm text-muted-foreground">
                  We typically respond to inquiries within 24-48 hours. For urgent issues, please check GitHub issues first.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-20 md:py-32 bg-muted/30 border-t border-border">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">How We Can Help</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background border border-border rounded-lg p-6">
                <div className="text-4xl mb-4">🐛</div>
                <h3 className="text-xl font-semibold mb-2">Report a Bug</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Found an issue? Help us improve by reporting bugs on GitHub issues.
                </p>
                <a 
                  href="https://github.com/Iamholak/clueinterview/issues/new"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold text-sm hover:underline"
                >
                  Report Issue →
                </a>
              </div>

              <div className="bg-background border border-border rounded-lg p-6">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-semibold mb-2">Feature Request</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Have an idea for a new feature? Suggest it and vote on existing requests.
                </p>
                <a 
                  href="https://github.com/Iamholak/clueinterview/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold text-sm hover:underline"
                >
                  Request Feature →
                </a>
              </div>

              <div className="bg-background border border-border rounded-lg p-6">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-2">Contribute Code</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Want to contribute? Check out our developer guide and submit a pull request.
                </p>
                <a 
                  href="https://github.com/Iamholak/clueinterview/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold text-sm hover:underline"
                >
                  Contributing Guide →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-32">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

            <div className="space-y-4">
              {[
                {
                  q: 'How do I report a security issue?',
                  a: 'Please do not post security vulnerabilities in public. Instead, reach out through GitHub or contact the creator directly through their GitHub profile for responsible disclosure.'
                },
                {
                  q: 'Can I use ClueInterview in my company?',
                  a: 'Yes! ClueInterview is open source and can be used for both personal and commercial purposes. Check the LICENSE file in the repository for specific terms.'
                },
                {
                  q: 'How often are updates released?',
                  a: 'Updates are released regularly as new features are developed and bugs are fixed. Follow the repository to get notifications about new releases.'
                },
                {
                  q: 'Is there a roadmap for new features?',
                  a: 'Check out the GitHub discussions and issues for the latest plans. The community helps shape the future of ClueInterview through feedback and contributions.'
                },
                {
                  q: 'Can I translate ClueInterview to my language?',
                  a: 'Contributions for translations are very welcome! Submit a pull request with your translation updates to help make ClueInterview available in more languages.'
                },
              ].map((item, idx) => (
                <details key={idx} className="group border border-border rounded-lg p-6 cursor-pointer hover:border-primary/50 transition-colors">
                  <summary className="font-semibold flex justify-between items-center">
                    {item.q}
                    <span className="transform group-open:rotate-180 transition-transform">→</span>
                  </summary>
                  <p className="mt-4 text-muted-foreground">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-32 bg-primary text-primary-foreground border-t border-border">
          <div className="container text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Join the Community</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Become part of a growing community of developers improving their interview skills.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-3 text-lg">
                Download ClueInterview
              </button>
              <a 
                href="https://github.com/Iamholak/clueinterview"
                target="_blank"
                rel="noopener noreferrer"
                className="btn border border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8 py-3 text-lg"
              >
                Star on GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
