'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function DocsPage() {
  const sections = [
    { id: 'getting-started', title: 'Getting Started' },
    { id: 'installation', title: 'Installation' },
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
                ClueInterview is a desktop application designed to help you practice technical interviews with AI assistance. This guide will walk you through the setup process.
              </p>
              <div className="bg-muted/50 border border-border rounded-lg p-4 text-sm">
                <p className="font-semibold mb-2">Before you begin:</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Ensure you have a microphone and speakers/headphones</li>
                  <li>• Have your resume ready in text or PDF format</li>
                  <li>• Check your internet connection for cloud transcription</li>
                </ul>
              </div>
            </section>

            {/* Installation */}
            <section id="installation">
              <h2 className="text-3xl font-bold mb-4">Installation</h2>
              <p className="text-muted-foreground mb-6">
                ClueInterview is available for Windows, macOS, and Linux. Download the latest release from our releases page.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Windows</h3>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Download the .exe installer from releases</li>
                    <li>Run the installer and follow the installation wizard</li>
                    <li>Launch ClueInterview from your desktop or Start menu</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">macOS</h3>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Download the .dmg file from releases</li>
                    <li>Open the .dmg and drag ClueInterview to Applications</li>
                    <li>Launch from Applications folder</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Linux</h3>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Download the .AppImage from releases</li>
                    <li>Make it executable: <code className="bg-muted px-2 py-1 rounded">chmod +x ClueInterview.AppImage</code></li>
                    <li>Run: <code className="bg-muted px-2 py-1 rounded">./ClueInterview.AppImage</code></li>
                  </ol>
                </div>
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
