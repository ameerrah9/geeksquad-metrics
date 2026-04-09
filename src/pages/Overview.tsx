import StatCard from '@/components/StatCard';
import { overviewStats, monthlyTrend } from '@/data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function Overview() {
  return (
    <div className='p-6 space-y-6'>
      <h1 className='text-2xl font-bold'>Overview</h1>

      {/* KPI Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {overviewStats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* Monthly Trend Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width='100%' height={300}>
            <LineChart data={monthlyTrend}>
              {/* XAxis, CartesianGrid, Tooltip, Legend */}
              <XAxis dataKey='month' />
              <YAxis />
              <CartesianGrid strokeDasharray='3 3' />
              <Tooltip />
              <Legend />
              {/* 4 Lines — one per role, each a different color */}
              <Line
                type='monotone'
                dataKey='consultations'
                stroke='#6366f1'
                strokeWidth={6}
                dot={false}
              />
              <Line
                type='monotone'
                dataKey='repairs'
                stroke='#f59e0b'
                strokeWidth={6}
                dot={false}
              />
              <Line
                type='monotone'
                dataKey='atHome'
                stroke='#10b981'
                strokeWidth={6}
                dot={false}
              />
              <Line
                type='monotone'
                dataKey='autoTech'
                stroke='#ef4444'
                strokeWidth={6}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
