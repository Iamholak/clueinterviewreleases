# ClueInterview

> AI-Powered Interview Preparation for Developers

ClueInterview is a free, open-source desktop application that helps developers master technical interviews through AI-powered practice sessions, real-time feedback, and personalized coaching.

## Features

- **Live Interview Practice** - Practice interviews in real-time with AI asking questions and providing immediate feedback
- **Code Display & Analysis** - Share and analyze code directly during interviews with syntax highlighting and real-time evaluation
- **Resume-Based Coaching** - Upload your resume and get personalized interview questions tailored to your experience and skills
- **Automatic Transcription** - Get accurate transcriptions of your interviews with cloud-based transcription for better accuracy
- **Interview History** - Track your progress with detailed interview history and performance metrics
- **Stealth Mode** - Keep your screen private when sharing - your interview window stays hidden from screen shares

## Tech Stack

This website is built with:

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **Vercel** - Deployment platform

## Getting Started

### Prerequisites

- Node.js 18+ and pnpm installed

### Installation

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
npm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

```bash
npm build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Homepage with hero, features, and CTA
│   └── globals.css         # Global styles and Tailwind config
├── components/
│   ├── header.tsx          # Navigation header
│   └── footer.tsx          # Site footer
└── public/                 # Static assets
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Links

- [Main Application Repository](https://github.com/Iamholak/clueinterview)
- [Website](https://clueinterview.vercel.app)
- [Documentation](https://clueinterview.vercel.app/docs)

## Support

For support, please open an issue on GitHub or visit our [contact page](https://clueinterview.vercel.app/contact).
