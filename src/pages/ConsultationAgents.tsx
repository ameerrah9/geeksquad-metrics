import { consultationAgents } from '@/data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function ConsultationAgents() {
  const outcomeData = [
    { name: 'Resolved', value: 1243 },
    { name: 'Escalated', value: 187 },
    { name: 'Pending', value: 94 },
  ];

  const COLORS = ['#10b981', '#f59e0b', '#6366f1'];

  return (
    <div className='p-6 space-y-6'>
      <h1 className='text-2xl font-bold'>Consultation Agents</h1>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        {/* Pie Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Consultation Outcomes</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width='100%' height={250}>
              <PieChart>
                <Pie
                  data={outcomeData}
                  dataKey='value'
                  cx='50%'
                  cy='50%'
                  outerRadius={80}
                >
                  {outcomeData.map((_, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Team Summary</CardTitle>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='flex justify-between'>
              <span className='text-muted-foreground text-sm'>
                Total Agents
              </span>
              <span className='font-semibold'>{consultationAgents.length}</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-muted-foreground text-sm'>
                Total Consultations
              </span>
              <span className='font-semibold'>
                {consultationAgents
                  .reduce((sum, a) => sum + a.consultations, 0)
                  .toLocaleString()}
              </span>
            </div>
            <div className='flex justify-between'>
              <span className='text-muted-foreground text-sm'>
                Total Resolved
              </span>
              <span className='font-semibold'>
                {consultationAgents
                  .reduce((sum, a) => sum + a.resolved, 0)
                  .toLocaleString()}
              </span>
            </div>
            <div className='flex justify-between'>
              <span className='text-muted-foreground text-sm'>
                Avg Satisfaction
              </span>
              <span className='font-semibold'>
                {(
                  consultationAgents.reduce(
                    (sum, a) => sum + a.satisfaction,
                    0,
                  ) / consultationAgents.length
                ).toFixed(1)}
                %
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Agent Leaderboard</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Agent</TableHead>
                <TableHead>Consultations</TableHead>
                <TableHead>Resolved</TableHead>
                <TableHead>Satisfaction</TableHead>
                <TableHead>Avg Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {consultationAgents.map((agent) => (
                <TableRow key={agent.name}>
                  <TableCell className='font-medium'>{agent.name}</TableCell>
                  <TableCell>{agent.consultations}</TableCell>
                  <TableCell>{agent.resolved}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        agent.satisfaction >= 95
                          ? 'default'
                          : agent.satisfaction >= 90
                            ? 'secondary'
                            : 'destructive'
                      }
                    >
                      {agent.satisfaction}%
                    </Badge>
                  </TableCell>
                  <TableCell>{agent.avg_time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
