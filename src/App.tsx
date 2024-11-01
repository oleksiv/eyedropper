import './App.css'
import EyeDropper from "./EyeDropper.tsx";

function App() {
    return (
        <div className="min-h-screen bg-gray-100 px-4 py-8">
            <div className="max-w-md mx-auto space-y-8">
                {/* Header */}
                <header className="text-center">
                    <h1 className="text-3xl font-bold text-gray-900">Eye Dropper</h1>
                    <p className="mt-2 text-gray-600">
                        Pick any color from your screen
                    </p>
                </header>

                {/* Main Tool */}
                <EyeDropper/>

                {/* Instructions */}
                <div className="bg-white rounded-lg p-6 space-y-4">
                    <div className="space-y-2">
                        <h2 className="font-medium text-gray-900">How to use:</h2>
                        <ol className="text-gray-600 space-y-1">
                            <li>1. Click the "Pick Color" button</li>
                            <li>2. Click anywhere on your screen</li>
                            <li>3. Copy the color code</li>
                        </ol>
                    </div>

                    <div className="pt-2">
                        <p className="text-gray-900 font-medium">Works with:</p>
                        <p className="text-gray-600 mt-1">
                            Other apps • Desktop • Images • Anywhere on screen
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App