# ClueInterview

> AI-Powered Interview Preparation for Everyone

ClueInterview is a free, open-source desktop application that helps candidates and interviewers master technical interviews through AI-powered practice sessions, real-time feedback, and personalized coaching.

## Key Features

- **Live Interview Practice** - Practice interviews in real-time with AI asking questions and providing immediate feedback
- **Code Display & Analysis** - Share and analyze code directly during interviews with syntax highlighting and real-time evaluation
- **Resume-Based Coaching** - Upload your resume and get personalized interview questions tailored to your experience and skills
- **Automatic Transcription** - Get accurate transcriptions of your interviews with cloud-based transcription for better accuracy
- **Interview History** - Track your progress with detailed interview history and performance metrics
- **Stealth Mode** - Keep your screen private when sharing - your interview window stays hidden from screen shares
- **Cross-Platform** - Works on Windows, macOS, and Linux

## Who Can Use ClueInterview?

- 🎯 **Job Candidates** - Prepare for your next technical interview
- 📋 **Interviewers** - Conduct standardized interviews with built-in analytics
- 🎓 **Bootcamp Students** - Get ready for graduation interviews
- 🔄 **Career Switchers** - Build confidence in technical interviews
- 💼 **HR Professionals** - Standardize your interview process

## Quick Download

Visit [ClueInterview Downloads](https://clueinterview.vercel.app/download) to get started:

- **Windows**: Direct .exe installer download
- **macOS**: Download .dmg or build from source
- **Linux**: AppImage or build from source

## Installation

### Windows
Download `ClueInterview-Setup-1.2.0.exe` from our [download page](https://clueinterview.vercel.app/download) and run the installer.

### macOS & Linux
Download the appropriate build from [releases](https://github.com/Iamholak/clueinterviewreleases/releases) or build from source (see below).

## Building from Source

### Prerequisites
- Node.js 18+
- npm or yarn
- Git

### Build Instructions

```bash
# Clone the repository
git clone https://github.com/Iamholak/clueinterview.git
cd clueinterview

# Install dependencies
npm install

# Build for your platform
npm run build:mac     # macOS
npm run build:linux   # Linux
npm run build:win     # Windows

# Run the application
npm start
```

## Tech Stack

This website is built with:

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **Vercel** - Deployment platform

## Development Setup

### Website Development

1. Clone the repository:
```bash
git clone https://github.com/Iamholak/clueinterviewreleases.git
cd clueinterviewreleases
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Homepage with hero, features, and CTA
│   ├── download/
│   │   └── page.tsx        # Download page with platform-specific instructions
│   ├── docs/
│   │   └── page.tsx        # Installation and setup documentation
│   └── globals.css         # Global styles and Tailwind config
├── components/
│   ├── header.tsx          # Navigation header
│   └── footer.tsx          # Site footer
└── public/                 # Static assets
```

## Documentation

- [Installation Guide](https://clueinterview.vercel.app/docs#installation)
- [Building from Source](https://clueinterview.vercel.app/docs#building-from-source)
- [Complete Documentation](https://clueinterview.vercel.app/docs)

## System Requirements

### Hardware
- 1.5GB available disk space
- 4GB RAM (8GB recommended)
- Microphone and speakers
- Webcam (optional, for video interviews)

### Software
- Windows 10+ / macOS 10.14+ / Linux (Ubuntu 18+)
- Internet connection (for AI features)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request to either:
- [Main Application Repository](https://github.com/Iamholak/clueinterview)
- [Releases Repository](https://github.com/Iamholak/clueinterviewreleases)

## License

This project is open source and available under the MIT License.

## Links

- [Website](https://clueinterview.vercel.app)
- [Download ClueInterview](https://clueinterview.vercel.app/download)
- [Main Application Repository](https://github.com/Iamholak/clueinterview)
- [Releases Repository](https://github.com/Iamholak/clueinterviewreleases)
- [Documentation](https://clueinterview.vercel.app/docs)
- [Contact](https://clueinterview.vercel.app/contact)

## Support

For support or questions:
- Open an issue on [GitHub](https://github.com/Iamholak/clueinterview/issues)
- Visit our [contact page](https://clueinterview.vercel.app/contact)
- Check the [FAQ](https://clueinterview.vercel.app/docs#troubleshooting)
