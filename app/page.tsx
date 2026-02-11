'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/20 via-background to-background"></div>
          
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/50 border border-border mb-8">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-sm font-medium text-foreground">Interview Preparation Reimagined</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight text-balance">
                Master Your Tech Interviews with{' '}
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  AI
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-10 text-balance max-w-2xl mx-auto leading-relaxed">
                Practice live interviews with real-time AI feedback, transcription, and coaching tailored to your experience. Perfect for developers preparing for their next opportunity.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="btn btn-primary px-8 py-3.5 text-base font-semibold">
                  Download ClueInterview
                </button>
                <a 
                  href="https://github.com/Iamholak/clueinterview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary px-8 py-3.5 text-base font-semibold"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  View on GitHub
                </a>
              </div>

              <div className="flex justify-center items-center gap-6 text-sm text-muted-foreground flex-wrap">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Free and Open Source
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  No Account Required
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Privacy Focused
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 md:py-32 border-t border-border">
          <div className="container">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Powerful Features</h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Everything you need to prepare for technical interviews
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  title: 'Live Interview Practice',
                  description: 'Practice interviews in real-time with AI asking questions and providing immediate feedback.',
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )
                },
                {
                  title: 'Code Display & Analysis',
                  description: 'Share and analyze code directly during interviews with syntax highlighting and real-time evaluation.',
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  )
                },
                {
                  title: 'Resume-Based Coaching',
                  description: 'Upload your resume and get personalized interview questions tailored to your experience and skills.',
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  )
                },
                {
                  title: 'Automatic Transcription',
                  description: 'Get accurate transcriptions of your interviews with cloud-based transcription for better accuracy.',
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  )
                },
                {
                  title: 'Interview History',
                  description: 'Track your progress with detailed interview history and performance metrics.',
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  )
                },
                {
                  title: 'Stealth Mode',
                  description: 'Keep your screen private when sharing - your interview window stays hidden from screen shares.',
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  )
                },
              ].map((feature, idx) => (
                <div 
                  key={idx} 
                  className="group relative p-8 rounded-xl border border-border bg-accent/30 hover:bg-accent hover:border-border/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-background/50 border border-border mb-5 group-hover:bg-background/80 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 md:py-32 border-t border-border bg-muted/20">
          <div className="container">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">How It Works</h2>
              <p className="text-lg md:text-xl text-muted-foreground">Four simple steps to interview mastery</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {[
                { step: 1, title: 'Upload Resume', desc: 'Start by uploading your resume to personalize your experience' },
                { step: 2, title: 'Configure Settings', desc: 'Choose your transcription engine and interview preferences' },
                { step: 3, title: 'Start Interview', desc: 'Begin a live interview session with AI asking questions' },
                { step: 4, title: 'Get Feedback', desc: 'Receive detailed feedback and review your performance' },
              ].map((item) => (
                <div key={item.step} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-2xl font-bold mb-6 border border-border shadow-lg">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  {item.step < 4 && (
                    <div className="hidden lg:block absolute top-8 left-[60%] w-[40%] h-px bg-gradient-to-r from-border to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 md:py-32 border-t border-border overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-background"></div>
          
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Ready to Master Your Interviews?</h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                Get started for free today. No credit card required.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn btn-primary px-8 py-3.5 text-base font-semibold">
                  Download Now
                </button>
                <a 
                  href="https://github.com/Iamholak/clueinterviewreleases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary px-8 py-3.5 text-base font-semibold"
                >
                  View Releases
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 md:py-32 border-t border-border">
          <div className="container max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">Frequently Asked Questions</h2>

            <div className="space-y-4">
              {[
                {
                  q: 'Is ClueInterview free?',
                  a: 'Yes! ClueInterview is completely free and open source. No subscriptions or hidden fees.'
                },
                {
                  q: 'Do I need to create an account?',
                  a: 'No account required. The app runs locally on your machine for maximum privacy.'
                },
                {
                  q: 'What programming languages are supported?',
                  a: 'ClueInterview supports all programming languages. You can write code in any language during interviews.'
                },
                {
                  q: 'Can I use my own AI model?',
                  a: 'Yes, you can configure different AI providers and models in the settings based on your preferences.'
                },
                {
                  q: 'Is my data private?',
                  a: 'Absolutely. Your interview data and resume stay on your machine. We don\'t store any personal information.'
                },
              ].map((item, idx) => (
                <details key={idx} className="group border border-border rounded-xl p-6 cursor-pointer hover:bg-accent transition-all duration-200 bg-background/50">
                  <summary className="font-semibold flex justify-between items-center list-none">
                    <span>{item.q}</span>
                    <svg 
                      className="w-5 h-5 transform group-open:rotate-180 transition-transform duration-200 text-muted-foreground" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
