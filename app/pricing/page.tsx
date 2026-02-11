'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="border-b border-border bg-muted/30">
          <div className="container py-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Pricing</h1>
            <p className="text-xl text-muted-foreground">ClueInterview is completely free, forever.</p>
          </div>
        </div>

        <section className="py-20 md:py-32">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Free for Everyone</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                ClueInterview is open source and completely free. No subscriptions, no hidden fees, no paywalls.
              </p>
            </div>

            {/* Price Card */}
            <div className="max-w-2xl mx-auto">
              <div className="rounded-lg border border-primary bg-primary/5 p-8 md:p-12">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold mb-4">ClueInterview</h3>
                  <p className="text-muted-foreground mb-6">Everything you need to master technical interviews</p>
                  
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-primary">$0</span>
                    <span className="text-muted-foreground ml-2">forever</span>
                  </div>
                </div>

                <button className="w-full btn btn-primary py-3 text-lg mb-8">
                  Download Now
                </button>

                <div className="space-y-4">
                  <h4 className="font-semibold mb-4">Everything included:</h4>
                  {[
                    'Live AI-powered interviews',
                    'Code display and analysis',
                    'Resume-based coaching',
                    'Interview history and analytics',
                    'Multiple transcription engines',
                    'Stealth mode for screen sharing',
                    'Open source and self-hosted',
                    'No data collection or tracking',
                    'Community support',
                    'Regular updates and improvements',
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="mt-1 text-primary font-bold">✓</span>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Why Free */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-2">Open Source</h3>
                <p className="text-muted-foreground">
                  Built as an open-source project, freely available for everyone to use and contribute to.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
                <p className="text-muted-foreground">
                  Your interview data stays on your machine. We don't collect or monetize your information.
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
                <p className="text-muted-foreground">
                  Developed by the community, for the community. Contribute code and help shape the future.
                </p>
              </div>
            </div>

            {/* Optional AI Providers */}
            <div className="mt-20 p-8 bg-muted/30 border border-border rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Optional Services</h3>
              <p className="text-muted-foreground mb-6">
                While ClueInterview is free, you can optionally configure external AI providers and transcription services:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-primary font-bold text-xl">•</span>
                  <div>
                    <h4 className="font-semibold">AI Models</h4>
                    <p className="text-sm text-muted-foreground">
                      Use free tier APIs from OpenAI, Google Gemini, or other providers. Costs depend on your provider.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-primary font-bold text-xl">•</span>
                  <div>
                    <h4 className="font-semibold">Cloud Transcription</h4>
                    <p className="text-sm text-muted-foreground">
                      Optional cloud transcription for higher accuracy. Built-in transcription is free.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-primary font-bold text-xl">•</span>
                  <div>
                    <h4 className="font-semibold">Self-Hosting</h4>
                    <p className="text-sm text-muted-foreground">
                      Deploy your own instance. Server costs are on you, not us.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-32 bg-muted/30 border-t border-border">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-12">Questions About Pricing</h2>

            <div className="space-y-4">
              {[
                {
                  q: 'Will there ever be a paid plan?',
                  a: 'ClueInterview will always be free and open source. We believe interview preparation should be accessible to everyone.'
                },
                {
                  q: 'What if I want to contribute?',
                  a: 'Contributions are welcome! Check out the GitHub repository and feel free to submit pull requests or report issues.'
                },
                {
                  q: 'Can I use ClueInterview commercially?',
                  a: 'Yes, ClueInterview is open source. Check the license for specific terms. You can use it for personal or commercial purposes.'
                },
                {
                  q: 'Are there any limitations?',
                  a: 'No artificial limitations. The only limits are those of your hardware and any external services you choose to integrate.'
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Start Interviewing for Free Today</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Download ClueInterview and begin practicing with AI. No credit card required.
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
                View Source Code
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
