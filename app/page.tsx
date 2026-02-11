'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-background via-background to-muted">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
              <span className="text-sm font-medium text-secondary">Interview Preparation Reimagined</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-balance">
              Master Your Tech <span className="text-primary">Interviews</span> with AI
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 text-balance max-w-2xl mx-auto">
              Practice live interviews with real-time AI feedback, transcription, and coaching tailored to your experience. Perfect for developers preparing for their next opportunity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="btn btn-primary px-8 py-3 text-lg">
                Download ClueInterview
              </button>
              <a 
                href="https://github.com/Iamholak/clueinterview"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline px-8 py-3 text-lg"
              >
                View on GitHub
              </a>
            </div>

            <div className="flex justify-center items-center gap-4 text-sm text-muted-foreground flex-wrap">
              <span className="flex items-center gap-1">✓ Free and Open Source</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1">✓ No Account Required</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1">✓ Privacy Focused</span>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 md:py-32 bg-background border-t border-border">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Powerful Features</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Everything you need to prepare for technical interviews
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Live Interview Practice',
                  description: 'Practice interviews in real-time with AI asking questions and providing immediate feedback.',
                  icon: '🎯'
                },
                {
                  title: 'Code Display & Analysis',
                  description: 'Share and analyze code directly during interviews with syntax highlighting and real-time evaluation.',
                  icon: '💻'
                },
                {
                  title: 'Resume-Based Coaching',
                  description: 'Upload your resume and get personalized interview questions tailored to your experience and skills.',
                  icon: '📄'
                },
                {
                  title: 'Automatic Transcription',
                  description: 'Get accurate transcriptions of your interviews with cloud-based transcription for better accuracy.',
                  icon: '📝'
                },
                {
                  title: 'Interview History',
                  description: 'Track your progress with detailed interview history and performance metrics.',
                  icon: '📊'
                },
                {
                  title: 'Stealth Mode',
                  description: 'Keep your screen private when sharing - your interview window stays hidden from screen shares.',
                  icon: '🔒'
                },
              ].map((feature, idx) => (
                <div key={idx} className="p-6 rounded-lg border border-border bg-background hover:border-primary/50 hover:shadow-lg transition-all">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 md:py-32 bg-muted/30 border-t border-border">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
              <p className="text-xl text-muted-foreground">Four simple steps to interview mastery</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: 1, title: 'Upload Resume', desc: 'Start by uploading your resume to personalize your experience' },
                { step: 2, title: 'Configure Settings', desc: 'Choose your transcription engine and interview preferences' },
                { step: 3, title: 'Start Interview', desc: 'Begin a live interview session with AI asking questions' },
                { step: 4, title: 'Get Feedback', desc: 'Receive detailed feedback and review your performance' },
              ].map((item) => (
                <div key={item.step} className="relative">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-center">{item.title}</h3>
                    <p className="text-muted-foreground text-center text-sm">{item.desc}</p>
                  </div>
                  {item.step < 4 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[40%] h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-primary text-primary-foreground border-t border-border">
          <div className="container text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Master Your Interviews?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Get started for free today. No credit card required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-3 text-lg">
                Download Now
              </button>
              <a 
                href="https://github.com/Iamholak/clueinterviewreleases"
                target="_blank"
                rel="noopener noreferrer"
                className="btn border border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8 py-3 text-lg"
              >
                View Releases
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-32 bg-background border-t border-border">
          <div className="container max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Frequently Asked Questions</h2>

            <div className="space-y-6">
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
      </main>

      <Footer />
    </div>
  )
}
