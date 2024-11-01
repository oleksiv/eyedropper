import React, { useState } from 'react';
import { Pipette, Copy, Check } from 'lucide-react';

const EyeDropper = () => {
    const [color, setColor] = useState('#000000');
    const [copied, setCopied] = useState(false);

    const handlePickColor = async () => {
        if ('EyeDropper' in window) {
            const eyeDropper = new (window as any).EyeDropper();
            try {
                const result = await eyeDropper.open();
                setColor(result.sRGBHex);
            } catch (error) {
                console.error('EyeDropper API Error:', error);
            }
        } else {
            alert('Your browser does not support the EyeDropper API.');
        }
    };

    const handleCopyColor = () => {
        navigator.clipboard.writeText(color);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="w-full bg-white rounded-lg p-6">
            <div className="space-y-4">
                {/* Color Preview */}
                <div
                    className="h-20 w-full rounded-lg transition-colors duration-200"
                    style={{ backgroundColor: color }}
                />

                {/* Pick Color Button */}
                <button
                    onClick={handlePickColor}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                    <Pipette className="w-4 h-4" />
                    Pick Color
                </button>

                {/* Color Code Display */}
                <div className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2">
                    <span className="font-mono" style={{ color }}>
                        {color}
                    </span>
                    <button
                        onClick={handleCopyColor}
                        className="p-1 hover:bg-gray-100 rounded"
                        title="Copy color code"
                    >
                        {copied ? (
                            <Check className="w-4 h-4 text-green-500" />
                        ) : (
                            <Copy className="w-4 h-4 text-gray-400" />
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EyeDropper;