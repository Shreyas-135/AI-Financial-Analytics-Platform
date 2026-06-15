import React, { useState } from 'react';
import Head from 'next/head';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Layout from '@/components/Layout';

const data = [
  { month: 'Jan', revenue: 4000, expenses: 2400 },
  { month: 'Feb', revenue: 3000, expenses: 1398 },
  { month: 'Mar', revenue: 2000, expenses: 9800 },
  { month: 'Apr', revenue: 2780, expenses: 3908 },
  { month: 'May', revenue: 1890, expenses: 4800 },
  { month: 'Jun', revenue: 2390, expenses: 3800 },
];

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard - Financial Analytics</title>
      </Head>

      <Layout>
        <div className="space-y-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { label: 'Total Revenue', value: '$24,500', change: '+12%', icon: '📈' },
              { label: 'Total Expenses', value: '$18,200', change: '-5%', icon: '📉' },
              { label: 'Net Profit', value: '$6,300', change: '+18%', icon: '💰' },
              { label: 'Avg Transaction', value: '$1,250', change: '+3%', icon: '💳' },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-500">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  </div>
                  <span className="text-2xl">{stat.icon}</span>
                </div>
                <p className="text-green-600 text-sm mt-2">{stat.change} from last month</p>
              </div>
            ))}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Revenue Chart */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue vs Expenses</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="revenue" stroke="#3B82F6" />
                  <Line type="monotone" dataKey="expenses" stroke="#EF4444" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Bar Chart */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Comparison</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="revenue" fill="#3B82F6" />
                  <Bar dataKey="expenses" fill="#10B981" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
