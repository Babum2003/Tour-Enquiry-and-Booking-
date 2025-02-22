import React, { useState } from 'react';
import { Plane, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { DestinationCard } from './components/DestinationCard';
import { InquiryForm } from './components/InquiryForm';
import { InquiryList } from './components/InquiryList';
import { destinations, inquiries, currencies } from './data';
import { Destination, InquiryFormData, Currency } from './types';

function App() {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [showInquiries, setShowInquiries] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>('USD');

  const handleInquiry = (destination: Destination) => {
    setSelectedDestination(destination);
  };

  const handleInquirySubmit = (data: InquiryFormData) => {
    // In a real app, this would send the data to a backend
    console.log('Inquiry submitted:', data);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-white shadow-sm sticky top-0 z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <Plane className="w-8 h-8 text-blue-600" />
              <motion.h1 
                className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['0%', '100%'],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                The Royal Route
              </motion.h1>
            </motion.div>

            <div className="flex items-center gap-4">
              <select
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value as Currency)}
                className="border rounded-lg px-2 py-1 text-sm"
              >
                {Object.entries(currencies).map(([code, { symbol }]) => (
                  <option key={code} value={code}>
                    {code} ({symbol})
                  </option>
                ))}
              </select>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowInquiries(!showInquiries)}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 bg-gray-100 px-4 py-2 rounded-lg transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
                <span>{showInquiries ? 'View Destinations' : 'View Inquiries'}</span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          {showInquiries ? (
            <motion.div
              key="inquiries"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-semibold mb-6">Manage Inquiries</h2>
              <InquiryList inquiries={inquiries} />
            </motion.div>
          ) : (
            <motion.div
              key="destinations"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-semibold mb-6">Featured Destinations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {destinations.map((destination) => (
                  <DestinationCard
                    key={destination.id}
                    destination={destination}
                    onInquire={handleInquiry}
                    selectedCurrency={selectedCurrency}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="bg-white border-t mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Created By</h3>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-600"
              >
                <p>BabuM2003</p>
                <a 
                  href="mailto:babum73392@gmail.com"
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  babum73392@gmail.com
                </a>
              </motion.div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Legal</h3>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-sm text-gray-600 space-y-2"
              >
                <p>© 2024 The Royal Route. All rights reserved.</p>
                <p>
                  Disclaimer: All travel information and prices are subject to change. 
                  Images are for illustrative purposes only. Please confirm all details 
                  at the time of booking.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </footer>

      {selectedDestination && (
        <InquiryForm
          destination={selectedDestination}
          onClose={() => setSelectedDestination(null)}
          onSubmit={handleInquirySubmit}
        />
      )}
    </div>
  );
}

export default App;