import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const colors = {
    gray: ['bg-gray-50', 'bg-gray-100', 'bg-gray-200', 'bg-gray-300', 'bg-gray-400', 'bg-gray-500', 'bg-gray-600', 'bg-gray-700', 'bg-gray-800', 'bg-gray-900'],
    red: ['bg-red-50', 'bg-red-100', 'bg-red-200', 'bg-red-300', 'bg-red-400', 'bg-red-500', 'bg-red-600', 'bg-red-700', 'bg-red-800', 'bg-red-900'],
    blue: ['bg-blue-50', 'bg-blue-100', 'bg-blue-200', 'bg-blue-300', 'bg-blue-400', 'bg-blue-500', 'bg-blue-600', 'bg-blue-700', 'bg-blue-800', 'bg-blue-900'],
    green: ['bg-green-50', 'bg-green-100', 'bg-green-200', 'bg-green-300', 'bg-green-400', 'bg-green-500', 'bg-green-600', 'bg-green-700', 'bg-green-800', 'bg-green-900'],
    yellow: ['bg-yellow-50', 'bg-yellow-100', 'bg-yellow-200', 'bg-yellow-300', 'bg-yellow-400', 'bg-yellow-500', 'bg-yellow-600', 'bg-yellow-700', 'bg-yellow-800', 'bg-yellow-900'],
    purple: ['bg-purple-50', 'bg-purple-100', 'bg-purple-200', 'bg-purple-300', 'bg-purple-400', 'bg-purple-500', 'bg-purple-600', 'bg-purple-700', 'bg-purple-800', 'bg-purple-900'],
};

const ColorPalette = () => {
    const [copiedColor, setCopiedColor] = useState(null);

    const handleCopyColor = (colorClass) => {
        navigator.clipboard.writeText(colorClass);
        setCopiedColor(colorClass);
        setTimeout(() => setCopiedColor(null), 2000);
    };

    return (
        <div className="bg-white">
            <div className="space-y-8">
                {Object.entries(colors).map(([colorName, shades]) => (
                    <div key={colorName} className="space-y-2">
                        <h3 className="text-lg font-semibold capitalize">{colorName}</h3>
                        <div className="grid grid-cols-5 gap-2 md:grid-cols-10">
                            {shades.map((shade, index) => (
                                <div key={shade} className="space-y-1">
                                    <button
                                        onClick={() => handleCopyColor(shade)}
                                        className={`${shade} w-full h-12 rounded-lg shadow-sm hover:shadow-md transition-shadow relative group`}
                                    >
                    <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      {copiedColor === shade ? (
                          <Check className="w-4 h-4 text-white" />
                      ) : (
                          <Copy className="w-4 h-4 text-white" />
                      )}
                    </span>
                                    </button>
                                    <p className="text-xs text-center text-gray-600">{(index + 1) * 100}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ColorPalette;