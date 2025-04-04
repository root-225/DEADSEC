"use client";

import { useState } from 'react';
import { 
  FaUsers, FaEye, FaChartLine, FaGlobe, FaDesktop, FaMobileAlt, 
  FaTabletAlt, FaClock, FaCalendarAlt, FaChartBar, FaChartPie
} from 'react-icons/fa';

// Mock data for analytics
const analyticsData = {
  summary: {
    visitors: 12458,
    pageViews: 45729,
    avgTimeOnSite: '3m 24s',
    bounceRate: '38.2%',
  },
  trafficSources: [
    { source: 'Direct', percentage: 35, count: 4360 },
    { source: 'Organic Search', percentage: 28, count: 3488 },
    { source: 'Social Media', percentage: 22, count: 2741 },
    { source: 'Referral', percentage: 10, count: 1246 },
    { source: 'Email', percentage: 5, count: 623 },
  ],
  topPages: [
    { page: '/', title: 'Accueil', views: 12540, avgTime: '2m 15s' },
    { page: '/blog', title: 'Blog', views: 8320, avgTime: '4m 32s' },
    { page: '/services-list', title: 'Services', views: 6210, avgTime: '3m 18s' },
    { page: '/blog/tendances-cybersecurite-2023', title: 'Les tendances de la cybersécurité en 2023', views: 3450, avgTime: '5m 47s' },
    { page: '/contact', title: 'Contact', views: 2980, avgTime: '1m 56s' },
  ],
  devices: [
    { type: 'Desktop', percentage: 58, count: 7226 },
    { type: 'Mobile', percentage: 36, count: 4485 },
    { type: 'Tablet', percentage: 6, count: 747 },
  ],
  dailyVisitors: [
    { date: '2023-05-01', visitors: 420 },
    { date: '2023-05-02', visitors: 380 },
    { date: '2023-05-03', visitors: 450 },
    { date: '2023-05-04', visitors: 520 },
    { date: '2023-05-05', visitors: 580 },
    { date: '2023-05-06', visitors: 620 },
    { date: '2023-05-07', visitors: 590 },
    { date: '2023-05-08', visitors: 610 },
    { date: '2023-05-09', visitors: 640 },
    { date: '2023-05-10', visitors: 670 },
    { date: '2023-05-11', visitors: 710 },
    { date: '2023-05-12', visitors: 680 },
    { date: '2023-05-13', visitors: 650 },
    { date: '2023-05-14', visitors: 630 },
  ],
  countries: [
    { country: 'France', visitors: 8720, percentage: 70 },
    { country: 'Canada', visitors: 1246, percentage: 10 },
    { country: 'Belgique', visitors: 872, percentage: 7 },
    { country: 'Suisse', visitors: 623, percentage: 5 },
    { country: 'Maroc', visitors: 498, percentage: 4 },
    { country: 'Autres', visitors: 499, percentage: 4 },
  ],
};

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState('30d');
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Analytiques</h1>
        <div className="flex space-x-2">
          <button
            onClick={() => setTimeRange('7d')}
            className={`px-3 py-1 rounded-md text-sm font-medium ${
              timeRange === '7d' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            7 jours
          </button>
          <button
            onClick={() => setTimeRange('30d')}
            className={`px-3 py-1 rounded-md text-sm font-medium ${
              timeRange === '30d' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            30 jours
          </button>
          <button
            onClick={() => setTimeRange('90d')}
            className={`px-3 py-1 rounded-md text-sm font-medium ${
              timeRange === '90d' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            90 jours
          </button>
          <button
            onClick={() => setTimeRange('1y')}
            className={`px-3 py-1 rounded-md text-sm font-medium ${
              timeRange === '1y' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            1 an
          </button>
          <div className="relative">
            <input
              type="date"
              className="px-3 py-1 rounded-md text-sm font-medium bg-gray-200 text-gray-700 hover:bg-gray-300"
            />
          </div>
        </div>
      </div>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-12 w-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
              <FaUsers className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h2 className="text-sm font-medium text-gray-500">Visiteurs</h2>
              <p className="text-2xl font-semibold text-gray-900">{analyticsData.summary.visitors.toLocaleString()}</p>
              <p className="text-sm text-green-600">+12.5% par rapport à la période précédente</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-12 w-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">
              <FaEye className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h2 className="text-sm font-medium text-gray-500">Pages vues</h2>
              <p className="text-2xl font-semibold text-gray-900">{analyticsData.summary.pageViews.toLocaleString()}</p>
              <p className="text-sm text-green-600">+8.3% par rapport à la période précédente</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-12 w-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
              <FaClock className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h2 className="text-sm font-medium text-gray-500">Temps moyen sur le site</h2>
              <p className="text-2xl font-semibold text-gray-900">{analyticsData.summary.avgTimeOnSite}</p>
              <p className="text-sm text-green-600">+15.2% par rapport à la période précédente</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-12 w-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
              <FaChartLine className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h2 className="text-sm font-medium text-gray-500">Taux de rebond</h2>
              <p className="text-2xl font-semibold text-gray-900">{analyticsData.summary.bounceRate}</p>
              <p className="text-sm text-red-600">+2.1% par rapport à la période précédente</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Visitors Chart */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Visiteurs quotidiens</h2>
        <div className="h-64 relative">
          {/* This would be a real chart in a production environment */}
          <div className="absolute inset-0 flex items-end">
            {analyticsData.dailyVisitors.map((day, index) => (
              <div 
                key={index} 
                className="flex-1 mx-1 bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-md hover:from-blue-600 hover:to-blue-400 transition-colors"
                style={{ 
                  height: `${(day.visitors / 800) * 100}%`,
                }}
                title={`${day.date}: ${day.visitors} visiteurs`}
              ></div>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 pt-2 border-t border-gray-200">
            {analyticsData.dailyVisitors.map((day, index) => (
              index % 2 === 0 && (
                <div key={index} className="text-center">
                  {new Date(day.date).getDate()}
                </div>
              )
            ))}
          </div>
        </div>
      </div>
      
      {/* Traffic Sources and Devices */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Traffic Sources */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Sources de trafic</h2>
          <div className="space-y-4">
            {analyticsData.trafficSources.map((source, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{source.source}</span>
                  <span className="text-sm font-medium text-gray-700">{source.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${source.percentage}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">{source.count.toLocaleString()} visiteurs</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Devices */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Appareils</h2>
          <div className="flex justify-center mb-6">
            {/* This would be a pie chart in a production environment */}
            <div className="relative h-48 w-48">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-36 w-36 rounded-full bg-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{analyticsData.summary.visitors.toLocaleString()}</div>
                    <div className="text-sm text-gray-500">visiteurs</div>
                  </div>
                </div>
              </div>
              <svg viewBox="0 0 100 100" className="absolute inset-0 transform -rotate-90">
                <circle 
                  cx="50" cy="50" r="40" 
                  fill="none" 
                  stroke="#e5e7eb" 
                  strokeWidth="20"
                />
                <circle 
                  cx="50" cy="50" r="40" 
                  fill="none" 
                  stroke="#3b82f6" 
                  strokeWidth="20"
                  strokeDasharray={`${analyticsData.devices[0].percentage * 2.51} 251`}
                />
                <circle 
                  cx="50" cy="50" r="40" 
                  fill="none" 
                  stroke="#8b5cf6" 
                  strokeWidth="20"
                  strokeDasharray={`${analyticsData.devices[1].percentage * 2.51} 251`}
                  strokeDashoffset={`${-analyticsData.devices[0].percentage * 2.51}`}
                />
                <circle 
                  cx="50" cy="50" r="40" 
                  fill="none" 
                  stroke="#10b981" 
                  strokeWidth="20"
                  strokeDasharray={`${analyticsData.devices[2].percentage * 2.51} 251`}
                  strokeDashoffset={`${-(analyticsData.devices[0].percentage + analyticsData.devices[1].percentage) * 2.51}`}
                />
              </svg>
            </div>
          </div>
          <div className="space-y-3">
            {analyticsData.devices.map((device, index) => (
              <div key={index} className="flex items-center">
                <div className={`h-4 w-4 rounded-full ${
                  index === 0 ? 'bg-blue-500' : 
                  index === 1 ? 'bg-purple-500' : 'bg-green-500'
                } mr-2`}></div>
                <div className="flex-1">
                  <div className="flex items-center">
                    {index === 0 ? <FaDesktop className="mr-1" /> : 
                     index === 1 ? <FaMobileAlt className="mr-1" /> : 
                     <FaTabletAlt className="mr-1" />}
                    <span className="text-sm font-medium text-gray-700">{device.type}</span>
                  </div>
                </div>
                <div className="text-sm font-medium text-gray-900">{device.percentage}%</div>
                <div className="text-xs text-gray-500 ml-2 w-20">{device.count.toLocaleString()}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Top Pages and Countries */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Pages */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Pages les plus visitées</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Page
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Vues
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Temps moyen
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {analyticsData.topPages.map((page, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{page.title}</div>
                      <div className="text-sm text-gray-500">{page.page}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      {page.views.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500">
                      {page.avgTime}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Countries */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Pays</h2>
          <div className="space-y-4">
            {analyticsData.countries.map((country, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">
                    <FaGlobe className="inline mr-2" />
                    {country.country}
                  </span>
                  <span className="text-sm font-medium text-gray-700">{country.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      index === 0 ? 'bg-blue-600' : 
                      index === 1 ? 'bg-green-600' : 
                      index === 2 ? 'bg-purple-600' : 
                      index === 3 ? 'bg-yellow-600' : 
                      index === 4 ? 'bg-red-600' : 'bg-gray-600'
                    }`}
                    style={{ width: `${country.percentage}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">{country.visitors.toLocaleString()} visiteurs</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
