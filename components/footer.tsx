export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/20 py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 font-bold text-lg mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-foreground to-foreground/80 rounded-lg flex items-center justify-center text-background text-sm font-bold">
                CI
              </div>
              <span className="text-foreground">ClueInterview</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              AI-powered interview assistant for developers and tech professionals.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-sm">Product</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
              <li><a href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="/docs" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="https://github.com/Iamholak/clueinterview" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">GitHub</a></li>
              <li><a href="/resources" className="text-muted-foreground hover:text-foreground transition-colors">Resources</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2026 ClueInterview. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors" aria-label="Twitter">Twitter</a>
            <a href="#" className="hover:text-foreground transition-colors" aria-label="LinkedIn">LinkedIn</a>
            <a href="https://github.com/Iamholak" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="GitHub">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
