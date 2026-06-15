import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Financial Analytics Platform - AI-Powered Insights</title>
        <meta name="description" content="Real-time financial analysis with AI insights" />
      </Head>

      <main className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen">
        {/* Navigation */}
        <nav className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-400">💰 FinAnalytics</div>
            <div className="space-x-4">
              <Link href="/dashboard" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Dashboard
              </Link>
              <Link href="/login" className="px-4 py-2 text-gray-300 hover:text-white transition">
                Login
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI-Powered Financial <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Analytics</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get intelligent insights on your financial data with cutting-edge AI and machine learning.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/dashboard" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg transition transform hover:scale-105">
                Get Started
              </Link>
              <button className="px-8 py-4 border-2 border-gray-500 text-white rounded-lg font-semibold hover:border-white transition">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Powerful Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '📊', title: 'Real-time Analytics', desc: 'Live financial data and metrics' },
              { icon: '🤖', title: 'AI Insights', desc: 'Machine learning-powered recommendations' },
              { icon: '📈', title: 'Predictions', desc: 'Forecast trends with advanced ML models' },
            ].map((feature, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg border border-slate-700 hover:border-blue-500 transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
