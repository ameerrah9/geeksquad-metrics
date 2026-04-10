import { autoTechAgents } from '@/data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  RadialBarChart,
  RadialBar,
} from 'recharts';
export default function AutoTech() {
  const gaugeAgents = autoTechAgents.map((agent) => ({
    ...agent,
    gaugeData: [
      { name: agent.name, value: agent.satisfaction, fill: '#6366f1' },
    ],
    endAngle: 180 - (agent.satisfaction / 100) * 180,
  }));

  const installsBySpeciality = autoTechAgents.map((a) => ({
    name: a.name.split(' ')[0],
    installs: a.installs,
  }));

  const revenueTrend = [
    { month: 'Jan', revenue: 6200 },
    { month: 'Feb', revenue: 7100 },
    { month: 'Mar', revenue: 6800 },
    { month: 'Apr', revenue: 8200 },
    { month: 'May', revenue: 7900 },
    { month: 'Jun', revenue: 9280 },
  ];

  return (
    <div className='p-6 space-y-6'>
      <h1 className='text-2xl font-bold'>AutoTech</h1>

      {/* Section 1: Agent Profile Cards */}
      <div className='grid grid-cols-2 gap-4'>
        {autoTechAgents.map((agent) => (
          <Card key={agent.name}>
            <CardContent className='flex items-center gap-4 pt-6'>
              {/* Initials circle */}
              <div className='h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center'>
                <span className='text-primary font-bold text-sm'>
                  {agent.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </span>
              </div>
              {/* Name + badge */}
              <div className='flex flex-col gap-1'>
                <span className='font-semibold'>{agent.name}</span>
                <Badge variant='secondary'>{agent.speciality}</Badge>
              </div>
            </CardContent>
            <CardContent className='grid grid-cols-3 text-center gap-2 border-t pt-4'>
              <div>
                <p className='text-xs text-muted-foreground'>Installs</p>
                <p className='font-bold'>{agent.installs}</p>
              </div>
              <div>
                <p className='text-xs text-muted-foreground'>Revenue</p>
                <p className='font-bold'>{agent.revenue}</p>
              </div>
              <div>
                <p className='text-xs text-muted-foreground'>Satisfaction</p>
                <p className='font-bold'>{agent.satisfaction}%</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className='grid grid-cols-1 gap-4'>
        {/* Section 2: Line Chart for Revenue Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Revenue Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width='100%' height={300}>
              <LineChart data={revenueTrend}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='month' />
                <YAxis tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
                <Tooltip formatter={(v) => `$${v.toLocaleString()}`} />
                <Line
                  type='monotone'
                  dataKey='revenue'
                  stroke='#6366f1'
                  strokeWidth={3}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      {/* Section 3: Stat Gauge Cards */}
      <div>
        <h2 className='text-lg font-semibold mb-4'>Satisfaction Gauges</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
          {gaugeAgents.map((agent) => (
            <Card key={agent.name} className='flex flex-col items-center py-4'>
              <CardHeader className='pb-0 w-full text-center'>
                <CardTitle className='text-sm'>{agent.name}</CardTitle>
              </CardHeader>
              <CardContent className='flex flex-col items-center gap-1 pt-2'>
                <RadialBarChart
                  width={120}
                  height={80}
                  cx={60}
                  cy={70}
                  innerRadius={50}
                  outerRadius={70}
                  startAngle={180}
                  endAngle={agent.endAngle}
                  data={agent.gaugeData}
                >
                  <RadialBar dataKey='value' />
                </RadialBarChart>
                <span className='text-xl font-bold -mt-4'>
                  {agent.satisfaction}%
                </span>
                <span className='text-xs text-muted-foreground'>
                  Satisfaction
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
