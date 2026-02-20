'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function DocsPage() {
  const sections = [
    { id: 'getting-started', title: 'Getting Started' },
    { id: 'installation', title: 'Installation' },
    { id: 'building-from-source', title: 'Building from Source' },
    { id: 'resume-setup', title: 'Resume Setup' },
    { id: 'interview-settings', title: 'Interview Settings' },
    { id: 'keyboard-shortcuts', title: 'Keyboard Shortcuts' },
    { id: 'troubleshooting', title: 'Troubleshooting' },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="border-b border-border bg-muted/30">
          <div className="container py-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Documentation</h1>
            <p className="text-xl text-muted-foreground">Everything you need to get started with ClueInterview</p>
          </div>
        </div>

        <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          {/* Sidebar Navigation */}
          <aside className="md:col-span-1">
            <nav className="sticky top-24 space-y-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block px-4 py-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <div className="md:col-span-3 space-y-12">
            {/* Getting Started */}
            <section id="getting-started">
              <h2 className="text-3xl font-bold mb-4">Getting Started</h2>
              <p className="text-muted-foreground mb-4">
                ClueInterview is a desktop application designed to help anyone prepare for or conduct technical interviews with AI assistance. Whether you're a candidate preparing for your next role or an interviewer wanting to improve your process, this guide will walk you through the setup.
              </p>
              <div className="bg-muted/50 border border-border rounded-lg p-4 text-sm mb-4">
                <p className="font-semibold mb-3">Who can use ClueInterview?</p>
                <ul className="space-y-1 text-muted-foreground mb-3">
                  <li>• <strong>Job Candidates:</strong> Practice technical interviews and get AI-powered feedback</li>
                  <li>• <strong>Interviewers:</strong> Conduct structured interviews with transcription and analytics</li>
                  <li>• <strong>Coding Bootcamp Students:</strong> Prepare for graduation interviews</li>
                  <li>• <strong>Career Switchers:</strong> Build confidence in technical interviews</li>
                  <li>• <strong>HR Professionals:</strong> Standardize your interview process</li>
                </ul>
              </div>
              <div className="bg-muted/50 border border-border rounded-lg p-4 text-sm">
                <p className="font-semibold mb-2">Before you begin:</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Ensure you have a microphone and speakers/headphones</li>
                  <li>• Have your resume ready in text or PDF format (optional)</li>
                  <li>• Check your internet connection for cloud transcription and AI features</li>
                  <li>• Prepare an API key for your preferred AI provider (OpenAI, Google Gemini, etc.)</li>
                </ul>
              </div>
            </section>

            {/* Installation */}
            <section id="installation">
              <h2 className="text-3xl font-bold mb-4">Installation</h2>
              <p className="text-muted-foreground mb-6">
                ClueInterview is available for Windows, macOS, and Linux. Choose your platform below for detailed installation instructions.
              </p>

              <div className="space-y-6">
                <div className="border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Windows</h3>
                  <p className="text-muted-foreground mb-4">
                    Windows users can download the pre-built installer for the quickest setup.
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-4">
                    <li>Download <code className="bg-muted px-2 py-1 rounded text-sm">ClueInterview-Setup-1.2.0.exe</code> from the <a href="/download" className="text-primary hover:underline">download page</a></li>
                    <li>Run the installer and follow the installation wizard</li>
                    <li>Accept the default installation location or customize it</li>
                    <li>Launch ClueInterview from your desktop or Start menu</li>
                    <li>Configure your resume and AI settings on first launch</li>
                  </ol>
                  <div className="bg-secondary/10 border border-secondary/20 rounded p-3 mt-4">
                    <p className="text-sm text-muted-foreground"><strong>Note:</strong> Windows Defender may flag the executable. Click "More info" then "Run anyway" if prompted.</p>
                  </div>
                </div>

                <div className="border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">macOS</h3>
                  <p className="text-muted-foreground mb-4">
                    macOS users can download pre-built binaries or build from source.
                  </p>
                  
                  <h4 className="font-semibold mb-2">Option 1: Download Pre-built Application</h4>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-4">
                    <li>Download the .dmg file from the <a href="/download" className="text-primary hover:underline">download page</a> or <a href="https://github.com/Iamholak/clueinterviewreleases/releases" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">releases page</a></li>
                    <li>Open the .dmg file and drag ClueInterview to Applications folder</li>
                    <li>Open Applications and double-click ClueInterview to launch</li>
                    <li>If you see "cannot be opened because it is from an unidentified developer", right-click and select "Open"</li>
                  </ol>

                  <h4 className="font-semibold mb-2">Option 2: Build from Source</h4>
                  <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                    <li>Install Node.js 18+ from <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">nodejs.org</a></li>
                    <li>Clone the repository: 
                      <code className="bg-muted px-2 py-1 rounded text-sm block mt-1">git clone https://github.com/Iamholak/clueinterview.git && cd clueinterview</code>
                    </li>
                    <li>Install dependencies:
                      <code className="bg-muted px-2 py-1 rounded text-sm block mt-1">npm install</code>
                    </li>
                    <li>Build for macOS:
                      <code className="bg-muted px-2 py-1 rounded text-sm block mt-1">npm run build:mac</code>
                    </li>
                    <li>Launch the app:
                      <code className="bg-muted px-2 py-1 rounded text-sm block mt-1">npm start</code>
                    </li>
                  </ol>
                </div>

                <div className="border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Linux</h3>
                  <p className="text-muted-foreground mb-4">
                    Linux users can download AppImage files or build from source.
                  </p>

                  <h4 className="font-semibold mb-2">Option 1: AppImage (Recommended)</h4>
                  <ol className="list-decimal list-inside space-y-3 text-muted-foreground mb-4">
                    <li>Download the .AppImage from the <a href="/download" className="text-primary hover:underline">download page</a> or <a href="https://github.com/Iamholak/clueinterviewreleases/releases" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">releases page</a></li>
                    <li>Make it executable:
                      <code className="bg-muted px-2 py-1 rounded text-sm block mt-1">chmod +x ClueInterview-*.AppImage</code>
                    </li>
                    <li>Run the application:
                      <code className="bg-muted px-2 py-1 rounded text-sm block mt-1">./ClueInterview-*.AppImage</code>
                    </li>
                  </ol>

                  <h4 className="font-semibold mb-2">Option 2: Build from Source</h4>
                  <ol className="list-decimal list-inside space-y-3 text-muted-foreground mb-4">
                    <li>Install dependencies:
                      <code className="bg-muted px-2 py-1 rounded text-sm block mt-1">sudo apt-get install nodejs npm git python3 build-essential</code>
                    </li>
                    <li>Clone the repository:
                      <code className="bg-muted px-2 py-1 rounded text-sm block mt-1">git clone https://github.com/Iamholak/clueinterview.git && cd clueinterview</code>
                    </li>
                    <li>Install npm packages:
                      <code className="bg-muted px-2 py-1 rounded text-sm block mt-1">npm install</code>
                    </li>
                    <li>Build for Linux:
                      <code className="bg-muted px-2 py-1 rounded text-sm block mt-1">npm run build:linux</code>
                    </li>
                    <li>Launch:
                      <code className="bg-muted px-2 py-1 rounded text-sm block mt-1">npm start</code>
                    </li>
                  </ol>

                  <div className="bg-secondary/10 border border-secondary/20 rounded p-3">
                    <p className="text-sm text-muted-foreground"><strong>Troubleshooting:</strong> If AppImage won't run, try <code className="bg-muted px-1 rounded">fuse</code> installation: <code className="bg-muted px-1 rounded">sudo apt-get install libfuse2</code></p>
                  </div>
                </div>
              </div>
            </section>

            {/* Building from Source */}
            <section id="building-from-source">
              <h2 className="text-3xl font-bold mb-4">Building from Source</h2>
              <p className="text-muted-foreground mb-6">
                For advanced users or those on unsupported platforms, you can build ClueInterview directly from the source code. This provides full control over the build process and allows you to modify the application.
              </p>

              <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4 mb-6">
                <p className="font-semibold mb-2">Why Build from Source?</p>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>• Get the latest development version before official releases</li>
                  <li>• Customize the application to your needs</li>
                  <li>• Contribute to the project development</li>
                  <li>• Deploy on your own infrastructure</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-4">Prerequisites</h3>
              <p className="text-muted-foreground mb-3">Before building, ensure you have installed:</p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li className="flex gap-2">
                  <span>•</span>
                  <span><strong>Node.js 18+</strong> - Download from <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">nodejs.org</a></span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span><strong>Git</strong> - Version control system for cloning the repository</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span><strong>Build Tools</strong> - Compiler and build utilities for your platform</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Step-by-Step Build Guide</h3>
              <div className="space-y-4">
                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">1. Clone the Repository</h4>
                  <code className="bg-muted px-3 py-2 rounded text-sm block text-foreground overflow-x-auto">
                    git clone https://github.com/Iamholak/clueinterview.git && cd clueinterview
                  </code>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">2. Install Dependencies</h4>
                  <code className="bg-muted px-3 py-2 rounded text-sm block text-foreground overflow-x-auto">
                    npm install
                  </code>
                  <p className="text-sm text-muted-foreground mt-2">This downloads all required packages and may take a few minutes.</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">3. Configure Environment (Optional)</h4>
                  <p className="text-muted-foreground text-sm mb-2">If you want to customize API keys or settings:</p>
                  <code className="bg-muted px-3 py-2 rounded text-sm block text-foreground overflow-x-auto">
                    cp .env.example .env
                  </code>
                  <p className="text-sm text-muted-foreground mt-2">Edit the .env file with your preferred settings.</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">4. Build the Application</h4>
                  <p className="text-muted-foreground text-sm mb-2">Choose the command for your platform:</p>
                  <div className="space-y-2">
                    <div>
                      <p className="text-sm font-semibold mb-1">macOS:</p>
                      <code className="bg-muted px-3 py-2 rounded text-sm block text-foreground overflow-x-auto">
                        npm run build:mac
                      </code>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-1">Linux:</p>
                      <code className="bg-muted px-3 py-2 rounded text-sm block text-foreground overflow-x-auto">
                        npm run build:linux
                      </code>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-1">Windows:</p>
                      <code className="bg-muted px-3 py-2 rounded text-sm block text-foreground overflow-x-auto">
                        npm run build:win
                      </code>
                    </div>
                  </div>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">5. Run the Application</h4>
                  <code className="bg-muted px-3 py-2 rounded text-sm block text-foreground overflow-x-auto">
                    npm start
                  </code>
                  <p className="text-sm text-muted-foreground mt-2">This will launch ClueInterview in development mode.</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">Development Mode</h3>
              <p className="text-muted-foreground mb-3">
                To run ClueInterview in development mode (useful for debugging or contributing):
              </p>
              <code className="bg-muted px-3 py-2 rounded text-sm block text-foreground overflow-x-auto mb-4">
                npm run dev
              </code>
              <p className="text-muted-foreground text-sm">
                This starts the development server with hot-reload enabled. Changes to the code will automatically refresh the application.
              </p>

              <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4 mt-6">
                <p className="font-semibold mb-2">Troubleshooting Build Issues</p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li><strong>Build fails:</strong> Ensure Node.js 18+ is installed and npm cache is clean (<code className="bg-muted px-1 rounded">npm cache clean --force</code>)</li>
                  <li><strong>Native modules error:</strong> You may need build tools. On Windows, install Visual Studio Build Tools. On Mac/Linux, install build-essential.</li>
                  <li><strong>Port already in use:</strong> Change the port by setting <code className="bg-muted px-1 rounded">PORT=3001 npm start</code></li>
                </ul>
              </div>
            </section>

            {/* Resume Setup */}
            <section id="resume-setup">
              <h2 className="text-3xl font-bold mb-4">Resume Setup</h2>
              <p className="text-muted-foreground mb-4">
                Your resume helps the AI ask relevant questions tailored to your experience and skills.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Adding Your Resume</h3>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Open ClueInterview and navigate to the Profile tab</li>
                    <li>Click on the "Resume" section</li>
                    <li>Paste your resume content in the text area</li>
                    <li>Click Save to store your resume locally</li>
                  </ol>
                </div>

                <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4">
                  <p className="font-semibold text-secondary mb-2">Tip:</p>
                  <p className="text-muted-foreground text-sm">
                    Include your professional summary, key skills, work experience, and projects. The AI will use this information to generate relevant interview questions.
                  </p>
                </div>
              </div>
            </section>

            {/* Interview Settings */}
            <section id="interview-settings">
              <h2 className="text-3xl font-bold mb-4">Interview Settings</h2>
              <p className="text-muted-foreground mb-4">
                Configure ClueInterview to match your preferences and requirements.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Transcription Engine</h3>
                  <p className="text-muted-foreground mb-3">
                    Choose between cloud transcription for higher accuracy or built-in transcription for local processing.
                  </p>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li><strong>Cloud Transcription:</strong> Uses cloud API for better accuracy, requires internet</li>
                    <li><strong>Built-in:</strong> Processes transcription locally, no internet required</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Stealth Mode</h3>
                  <p className="text-muted-foreground mb-2">
                    When enabled, your interview window is hidden from screen shares. Only others see what you want them to see.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">AI Provider</h3>
                  <p className="text-muted-foreground">
                    Configure your preferred AI model and provider (OpenAI, Google Gemini, etc.) for interview questions.
                  </p>
                </div>
              </div>
            </section>

            {/* Keyboard Shortcuts */}
            <section id="keyboard-shortcuts">
              <h2 className="text-3xl font-bold mb-4">Keyboard Shortcuts</h2>
              <p className="text-muted-foreground mb-4">
                Speed up your workflow with these keyboard shortcuts:
              </p>

              <div className="bg-muted/50 border border-border rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      { shortcut: 'Space', action: 'Send message' },
                      { shortcut: 'Ctrl/Cmd + K', action: 'Clear chat' },
                      { shortcut: 'Ctrl/Cmd + Shift + H', action: 'Hide/Show app on screen' },
                      { shortcut: 'Ctrl/Cmd + L', action: 'Toggle code block' },
                      { shortcut: 'Escape', action: 'Close settings' },
                    ].map((item, idx) => (
                      <tr key={idx} className={idx > 0 ? 'border-t border-border' : ''}>
                        <td className="px-4 py-3 font-mono font-semibold text-primary">{item.shortcut}</td>
                        <td className="px-4 py-3 text-muted-foreground">{item.action}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Troubleshooting */}
            <section id="troubleshooting">
              <h2 className="text-3xl font-bold mb-4">Troubleshooting</h2>
              <p className="text-muted-foreground mb-6">
                Having issues? Check these common solutions:
              </p>

              <div className="space-y-4">
                {[
                  {
                    problem: 'Audio not working',
                    solution: 'Check that your microphone is connected and enabled in system settings. Restart ClueInterview and try again.'
                  },
                  {
                    problem: 'Transcription errors',
                    solution: 'Ensure your microphone is working properly and you\'re speaking clearly. Try switching between transcription engines in settings.'
                  },
                  {
                    problem: 'App crashes on startup',
                    solution: 'Try reinstalling the application. Remove the config files from ~/.clueinterview and restart.'
                  },
                  {
                    problem: 'AI not responding',
                    solution: 'Check your internet connection and verify your AI API key is configured correctly in settings.'
                  },
                ].map((item, idx) => (
                  <div key={idx} className="border border-border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">{item.problem}</h4>
                    <p className="text-muted-foreground text-sm">{item.solution}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-secondary/10 border border-secondary/20 rounded-lg">
                <p className="font-semibold mb-2">Still need help?</p>
                <p className="text-muted-foreground text-sm mb-3">
                  Check out the GitHub issues or contact our support team.
                </p>
                <a 
                  href="https://github.com/Iamholak/clueinterview/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm"
                >
                  View GitHub Issues →
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
