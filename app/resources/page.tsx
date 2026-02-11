'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function ResourcesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="border-b border-border bg-muted/30">
          <div className="container py-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources & Community</h1>
            <p className="text-xl text-muted-foreground">Learn more about ClueInterview and join our community</p>
          </div>
        </div>

        {/* Learning Resources */}
        <section className="py-20 md:py-32">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12">Learning Resources</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <a 
                href="https://github.com/Iamholak/clueinterview"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 border border-border rounded-lg hover:border-primary hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold mb-2">GitHub Repository</h3>
                <p className="text-muted-foreground mb-4">
                  Explore the source code, contribute to the project, or fork it for your own use.
                </p>
                <span className="text-primary font-semibold">View Repository →</span>
              </a>

              <a 
                href="https://github.com/Iamholak/clueinterviewreleases"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 border border-border rounded-lg hover:border-primary hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold mb-2">Releases</h3>
                <p className="text-muted-foreground mb-4">
                  Download the latest version and see what's new in each release.
                </p>
                <span className="text-primary font-semibold">View Releases →</span>
              </a>

              <a 
                href="/docs"
                className="p-6 border border-border rounded-lg hover:border-primary hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold mb-2">Documentation</h3>
                <p className="text-muted-foreground mb-4">
                  Complete guide to getting started and troubleshooting common issues.
                </p>
                <span className="text-primary font-semibold">Read Docs →</span>
              </a>

              <a 
                href="https://github.com/Iamholak"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 border border-border rounded-lg hover:border-primary hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold mb-2">Creator</h3>
                <p className="text-muted-foreground mb-4">
                  Follow the creator on GitHub to stay updated on new projects and contributions.
                </p>
                <span className="text-primary font-semibold">Follow →</span>
              </a>
            </div>
          </div>
        </section>

        {/* Interview Tips */}
        <section className="py-20 md:py-32 bg-muted/30 border-t border-border">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12">Interview Preparation Tips</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Before the Interview',
                  tips: [
                    'Update your resume with recent projects and accomplishments',
                    'Practice explaining your background and career goals',
                    'Review common interview questions for your role',
                    'Test your microphone and internet connection',
                    'Choose a quiet environment for your practice session',
                    'Have water nearby to stay hydrated',
                  ]
                },
                {
                  title: 'During the Interview',
                  tips: [
                    'Speak clearly and at a moderate pace',
                    'Show enthusiasm for the position and company',
                    'Use the STAR method for behavioral questions',
                    'Ask clarifying questions if needed',
                    'Take a moment to think before answering',
                    'Maintain eye contact (metaphorically with the camera)',
                  ]
                },
                {
                  title: 'For Coding Interviews',
                  tips: [
                    'Explain your thought process as you code',
                    'Start with the brute force approach, then optimize',
                    'Test your code with examples and edge cases',
                    'Discuss time and space complexity',
                    'Ask if you can use external libraries or if you need to implement everything',
                    'Keep your code clean and well-commented',
                  ]
                },
                {
                  title: 'After the Interview',
                  tips: [
                    'Review your recorded session and transcription',
                    'Note areas for improvement for your next practice',
                    'Send a thank you message if applicable',
                    'Reflect on what went well and what could be better',
                    'Practice more on weak areas before the real interview',
                    'Stay confident and positive',
                  ]
                },
              ].map((section, idx) => (
                <div key={idx} className="bg-background border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.tips.map((tip, tipIdx) => (
                      <li key={tipIdx} className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">✓</span>
                        <span className="text-muted-foreground">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Topics */}
        <section className="py-20 md:py-32">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12">Common Interview Topics</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                'Data Structures & Algorithms',
                'System Design',
                'Object-Oriented Programming',
                'Web Development',
                'Behavioral Questions',
                'Leadership & Teamwork',
                'Problem Solving',
                'Communication Skills',
                'Technical Knowledge',
                'Project Experience',
                'Motivation & Goals',
                'Company Culture Fit',
              ].map((topic, idx) => (
                <div key={idx} className="p-4 bg-muted/50 border border-border rounded-lg hover:border-primary transition-colors cursor-pointer">
                  <h4 className="font-semibold">{topic}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community */}
        <section className="py-20 md:py-32 bg-muted/30 border-t border-border">
          <div className="container max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Connect with other developers preparing for interviews, share tips, and support each other.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <a 
                href="https://github.com/Iamholak/clueinterview/discussions"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-background border border-border rounded-lg hover:border-primary transition-colors"
              >
                <div className="text-2xl mb-2">💬</div>
                <h3 className="font-semibold">Discussions</h3>
                <p className="text-sm text-muted-foreground">Join conversations with the community</p>
              </a>

              <a 
                href="https://github.com/Iamholak/clueinterview/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-background border border-border rounded-lg hover:border-primary transition-colors"
              >
                <div className="text-2xl mb-2">🐛</div>
                <h3 className="font-semibold">Issues</h3>
                <p className="text-sm text-muted-foreground">Report bugs and request features</p>
              </a>

              <a 
                href="https://github.com/Iamholak/clueinterview/pulls"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-background border border-border rounded-lg hover:border-primary transition-colors"
              >
                <div className="text-2xl mb-2">🚀</div>
                <h3 className="font-semibold">Contribute</h3>
                <p className="text-sm text-muted-foreground">Submit pull requests and improvements</p>
              </a>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 md:py-32">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Alex Johnson',
                  role: 'Software Engineer at Tech Corp',
                  quote: 'ClueInterview helped me ace my interviews by practicing with realistic AI questions tailored to my background.',
                  avatar: '👨‍💻'
                },
                {
                  name: 'Maria Chen',
                  role: 'Full Stack Developer at StartupXYZ',
                  quote: 'The transcription and feedback features helped me identify and fix my interview habits. Highly recommend!',
                  avatar: '👩‍💻'
                },
                {
                  name: 'James Wilson',
                  role: 'Senior Engineer at Big Tech',
                  quote: 'As someone switching careers, ClueInterview was instrumental in my preparation. The resume-based coaching was game-changing.',
                  avatar: '👨‍💼'
                },
              ].map((story, idx) => (
                <div key={idx} className="p-6 bg-muted/30 border border-border rounded-lg">
                  <div className="text-4xl mb-4">{story.avatar}</div>
                  <p className="text-foreground mb-4 italic">"{story.quote}"</p>
                  <p className="font-semibold">{story.name}</p>
                  <p className="text-sm text-muted-foreground">{story.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-32 bg-primary text-primary-foreground border-t border-border">
          <div className="container text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Download ClueInterview and join thousands of developers practicing for their next interview.
            </p>
            
            <button className="btn bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-3 text-lg">
              Download Now
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
