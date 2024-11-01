# Eye Dropper

A simple color picker tool that allows you to sample colors from anywhere on your screen, built with React and TypeScript.

![Eye Dropper Tool](https://raw.githubusercontent.com/oleksiv/eyedropper/refs/heads/main/public/screenshot1.png)

## Features

- Pick colors from anywhere on your screen (including outside the browser)
- Copy color codes with one click
- Real-time color preview
- Simple and intuitive interface

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Lucide Icons

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone git@github.com:oleksiv/eyedropper.git
cd eye-dropper
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## Usage

1. Click the "Pick Color" button
2. Your cursor will change to a color picker tool
3. Click anywhere on your screen to sample a color
4. Click the copy button to copy the color code to your clipboard

Note: The EyeDropper API requires a secure context (HTTPS) in production.

## Browser Support

The EyeDropper API is supported in:
- Chrome 95+
- Edge 95+
- Opera 81+
- Chrome Android 95+

Check [Can I use](https://caniuse.com/?search=EyeDropper) for the latest browser support information.

## Project Structure

```
eye-dropper/
├── src/
│   ├── App.tsx
│   ├── EyeDropper.tsx
│   └── App.css
├── package.json
├── tailwind.config.js
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [EyeDropper API](https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper)
- [Lucide Icons](https://lucide.dev/)