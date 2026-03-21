'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function DownloadPage() {
  const downloadOptions = [
    {
      platform: 'Windows',
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
        </svg>
      ),
      description: 'Download the Windows installer',
      version: 'v1.2.2',
      url: 'https://github.com/Iamholak/clueinterviewreleases/releases/download/v1.2.3/Clue-Interview-Setup-1.2.3.exe',
      filename: 'ClueInterview-Setup-1.2.3.exe',
      steps: [
        'Download the .exe installer',
        'Run the installer and follow the wizard',
        'Launch ClueInterview from your desktop or Start menu',
        'Upload your resume and start practicing!'
      ]
    },
    {
      platform: 'macOS',
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.05 13.5c-.91 0-1.64.54-2.05 1.27-.16.3-.3.62-.4.95H9.4c-.1-.33-.24-.65-.4-.95-.41-.73-1.14-1.27-2.05-1.27-1.66 0-3 1.34-3 3 0 1.66 1.34 3 3 3 .91 0 1.64-.54 2.05-1.27.16-.3.3-.62.4-.95h5.2c.1.33.24.65.4.95.41.73 1.14 1.27 2.05 1.27 1.66 0 3-1.34 3-3 0-1.66-1.34-3-3-3z" />
        </svg>
      ),
      description: 'Build and run from source for macOS',
      version: 'v1.2.0',
      steps: [
        'Install Node.js 18+ and git',
        'Clone: git clone https://github.com/Iamholak/clueinterview.git',
        'Install: npm install',
        'Build: npm run build:mac',
        'Run: npm start'
      ],
      subtext: 'macOS builds are available in releases or build from source'
    },
    {
      platform: 'Linux',
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
        </svg>
      ),
      description: 'Build and run from source for Linux',
      version: 'v1.2.0',
      steps: [
        'Install Node.js 18+, git, and build dependencies',
        'Clone: git clone https://github.com/Iamholak/clueinterview.git',
        'Install: npm install',
        'Build: npm run build:linux',
        'Run: npm start'
      ],
      subtext: 'Linux builds are available in releases or build from source'
    }
  ]

  const buildSteps = [
    {
      title: 'Prerequisites',
      content: 'Ensure you have Node.js 18+, npm or yarn, and git installed on your system.'
    },
    {
      title: 'Clone Repository',
      content: 'git clone https://github.com/Iamholak/clueinterview.git && cd clueinterview'
    },
    {
      title: 'Install Dependencies',
      content: 'npm install'
    },
    {
      title: 'Configure Environment',
      content: 'Copy .env.example to .env and add your API keys (OpenAI, etc.)'
    },
    {
      title: 'Build Application',
      content: 'npm run build (or npm run build:mac / npm run build:linux for specific platforms)'
    },
    {
      title: 'Run Application',
      content: 'npm start - The app will launch in a new window'
    }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 border-b border-border">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">Download ClueInterview</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Get started with your interview preparation today. Choose your platform and download or build from source.
              </p>
            </div>
          </div>
        </section>

        {/* Download Options */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {downloadOptions.map((option, idx) => (
                <div key={idx} className="border border-border rounded-xl p-8 bg-background hover:border-secondary/50 transition-all duration-300">
                  <div className="flex justify-center mb-6 text-muted-foreground">
                    {option.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-2">{option.platform}</h3>
                  <p className="text-muted-foreground text-center mb-2 text-sm">{option.description}</p>
                  {option.subtext && <p className="text-muted-foreground text-center mb-4 text-xs opacity-80">{option.subtext}</p>}

                  {option.url ? (
                    <a
                      href={option.url}
                      download
                      className="btn btn-primary w-full mb-6 py-2.5 text-center font-semibold"
                    >
                      Download {option.filename}
                    </a>
                  ) : (
                    <div className="mb-6" />
                  )}

                  <div className="bg-muted/30 rounded-lg p-4 mb-6">
                    <p className="text-sm font-semibold mb-3">Setup Steps:</p>
                    <ol className="space-y-2">
                      {option.steps.map((step, stepIdx) => (
                        <li key={stepIdx} className="text-sm text-muted-foreground flex gap-2">
                          <span className="font-semibold min-w-6 text-secondary">{stepIdx + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <a
                    href="/docs#installation"
                    className="text-primary hover:underline text-sm font-medium"
                  >
                    View Detailed Docs →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Build from Source */}
        <section className="py-16 md:py-24 border-t border-border bg-muted/20">
          <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Build from Source</h2>
              <p className="text-lg text-muted-foreground">
                For advanced users, you can build ClueInterview from source code on any platform
              </p>
            </div>

            <div className="space-y-4">
              {buildSteps.map((step, idx) => (
                <div key={idx} className="border border-border rounded-lg p-6 bg-background">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-secondary/20 border border-secondary/30">
                      <span className="font-bold text-secondary">{idx + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">{step.title}</h3>
                      {step.content.includes('git ') || step.content.includes('npm ') || step.content.includes('Copy ') ? (
                        <code className="bg-muted px-3 py-2 rounded text-sm block text-foreground overflow-x-auto">
                          {step.content}
                        </code>
                      ) : (
                        <p className="text-muted-foreground text-sm">{step.content}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-secondary/10 border border-secondary/20 rounded-lg">
              <p className="font-semibold mb-2">Source Code Repository</p>
              <p className="text-muted-foreground mb-4">
                Access the full source code on GitHub to contribute, modify, or deploy ClueInterview to your infrastructure.
              </p>
              <a
                href="https://github.com/Iamholak/clueinterview"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                View on GitHub →
              </a>
            </div>
          </div>
        </section>

        {/* System Requirements */}
        <section className="py-16 md:py-24 border-t border-border">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">System Requirements</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Hardware</h3>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li className="flex gap-2">
                    <span className="text-secondary">✓</span>
                    <span>1.5GB available disk space</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary">✓</span>
                    <span>4GB RAM minimum (8GB recommended)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Microphone and speakers</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Webcam (optional, for video)</span>
                  </li>
                </ul>
              </div>

              <div className="border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Software</h3>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li className="flex gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Windows 10+ / macOS 10.14+ / Linux (Ubuntu 18+)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Internet connection (for AI features)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Node.js 18+ (for building from source)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Valid API key for AI provider</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 border-t border-border bg-muted/20">
          <div className="container max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Download FAQ</h2>

            <div className="space-y-4">
              {[
                {
                  q: 'Which download option should I choose?',
                  a: 'Choose the installer for your operating system. Windows users can download the .exe file. Mac and Linux users can either download pre-built binaries from releases or build from source.'
                },
                {
                  q: 'Is the app free to use?',
                  a: 'Yes! ClueInterview is completely free and open source. However, you will need API keys for AI providers (like OpenAI) to use the interview features.'
                },
                {
                  q: 'Do I need to create an account?',
                  a: 'No account is required. ClueInterview runs locally on your machine, and all your data stays on your device.'
                },
                {
                  q: 'Can I use ClueInterview without internet?',
                  a: 'Yes, ClueInterview works offline for most features. However, AI-powered interview generation and cloud transcription require an internet connection.'
                },
                {
                  q: 'How do I get an API key for AI providers?',
                  a: 'Visit the provider\'s website (OpenAI, Google Gemini, etc.) and sign up for an account. Generate an API key and add it to ClueInterview settings.'
                },
                {
                  q: 'What if the pre-built download doesn\'t work?',
                  a: 'Try building from source instead. You can also report issues on our GitHub repository for support.'
                },
              ].map((item, idx) => (
                <details key={idx} className="group border border-border rounded-lg p-4 cursor-pointer hover:bg-background transition-all duration-200">
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
                  <p className="mt-4 text-muted-foreground leading-relaxed text-sm">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 border-t border-border">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Interview Practice?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Download ClueInterview today and begin mastering your interview skills with AI-powered practice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://github.com/Iamholak/clueinterviewreleases/releases/download/v1.2.0/ClueInterview-Setup-1.2.0.exe"
                  className="btn btn-primary px-8 py-3.5 text-base font-semibold"
                >
                  Download for Windows
                </a>
                <a
                  href="/docs#installation"
                  className="btn btn-secondary px-8 py-3.5 text-base font-semibold"
                >
                  View Documentation
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
