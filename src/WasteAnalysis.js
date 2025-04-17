import React from 'react';
import { BarChart, LineChart, PieChart, Bar, Line, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const WasteAnalysis = () => {
  // Sample data (replace with your actual data)
  const yearlyData = [
    { year: '2022', totalWaste: 23119, recycled: 14046, recyclingRate: 60.77 },
    { year: '2023', totalWaste: 32203, recycled: 17545, recyclingRate: 54.49 },
    { year: '2024', totalWaste: 38165, recycled: 22182, recyclingRate: 58.13, isPredicted: true },
    { year: '2025', totalWaste: 44689, recycled: 26267, recyclingRate: 58.78, isPredicted: true }
  ];

  const wasteComposition = [
    { name: 'Plastic', 2022: 30, 2023: 32, 2024: 34, 2025: 35 },
    { name: 'Organic', 2022: 25, 2023: 23, 2024: 21, 2025: 20 },
    { name: 'E-Waste', 2022: 5, 2023: 12, 2024: 14, 2025: 15 },
    { name: 'Construction', 2022: 25, 2023: 24, 2024: 23, 2025: 22 },
    { name: 'Hazardous', 2022: 15, 2023: 9, 2024: 8, 2025: 8 }
  ];

  const disposalMethods = [
    { year: '2022', recycling: 55, composting: 15, incineration: 10, landfill: 20 },
    { year: '2023', recycling: 54, composting: 18, incineration: 12, landfill: 16 },
    { year: '2024', recycling: 58, composting: 20, incineration: 13, landfill: 9 },
    { year: '2025', recycling: 59, composting: 22, incineration: 15, landfill: 4 }
  ];

  return (
    <div className="waste-analysis">
      <h2>Visakhapatnam Waste Management Dashboard (2022-2025)</h2>
      
      {/* Chart 1: Total vs Recycled Waste */}
      <div className="chart-container">
        <h3>Total Waste vs Recycled Waste (Tons/Day)</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={yearlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis yAxisId="left" orientation="left" label={{ value: 'Tons/Day', angle: -90, position: 'insideLeft' }} />
            <YAxis yAxisId="right" orientation="right" label={{ value: '% Recycled', angle: 90, position: 'insideRight' }} />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="totalWaste" name="Total Waste" fill="#8884d8" />
            <Bar yAxisId="left" dataKey="recycled" name="Recycled" fill="#82ca9d" />
            <Line yAxisId="right" type="monotone" dataKey="recyclingRate" name="Recycling Rate (%)" stroke="#ff7300" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Chart 2: Waste Composition */}
      <div className="chart-container">
        <h3>Waste Composition by Type (%)</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={wasteComposition} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Legend />
            <Bar dataKey="2022" name="2022" stackId="a" fill="#8884d8" />
            <Bar dataKey="2023" name="2023" stackId="a" fill="#83a6ed" />
            <Bar dataKey="2024" name="2024" stackId="a" fill="#8dd1e1" />
            <Bar dataKey="2025" name="2025" stackId="a" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Chart 3: Disposal Methods */}
      <div className="chart-container">
        <h3>Waste Disposal Methods (%)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={disposalMethods}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis label={{ value: '% of Waste', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="recycling" name="Recycling" stroke="#82ca9d" />
            <Line type="monotone" dataKey="composting" name="Composting" stroke="#ffc658" />
            <Line type="monotone" dataKey="incineration" name="Incineration" stroke="#ff8042" />
            <Line type="monotone" dataKey="landfill" name="Landfill" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Chart 4: Recycling Rate Trend */}
      <div className="chart-container">
        <h3>Recycling Rate Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={yearlyData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
              fill="#8884d8"
              dataKey="recyclingRate"
              nameKey="year"
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            >
              {yearlyData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.isPredicted ? '#82ca9d' : '#8884d8'} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WasteAnalysis;