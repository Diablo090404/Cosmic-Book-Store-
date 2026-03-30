import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';
import { PLANS } from '../constants';

export default function Subscriptions() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Choose Your <span className="text-cosmic-purple">Cosmic Journey</span>
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Unlock exclusive benefits, unlimited reading, and monthly surprises delivered to your doorstep in Malaysia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PLANS.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card p-8 flex flex-col relative ${
                plan.isPopular ? 'border-cosmic-purple border-2 ring-4 ring-cosmic-purple/10' : ''
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cosmic-purple text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-bold">RM {plan.price.toFixed(2)}</span>
                <span className="text-gray-400">/mo</span>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-gray-300">
                    <Check className="text-cosmic-purple shrink-0" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 ${
                  plan.isPopular
                    ? 'bg-cosmic-purple hover:bg-cosmic-purple/80 text-white'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                }`}
              >
                <Zap size={18} />
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 glass-card p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-12">
            <div>
              <h4 className="font-bold mb-2">Can I cancel anytime?</h4>
              <p className="text-gray-400 text-sm">Yes, you can cancel your subscription at any time through your dashboard. No hidden fees or long-term commitments.</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">How does physical book delivery work?</h4>
              <p className="text-gray-400 text-sm">For Pro and Cosmic Elite members, we ship your selected books via PosLaju or J&T Express within 3-5 business days across Malaysia.</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Are the ebooks compatible with Kindle?</h4>
              <p className="text-gray-400 text-sm">Absolutely! Our ebooks are provided in EPUB and PDF formats, compatible with Kindle, Kobo, and most other e-readers.</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">What happens to my books if I cancel?</h4>
              <p className="text-gray-400 text-sm">Any physical books you've received are yours to keep forever. Digital books will remain in your library for as long as your account exists.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
