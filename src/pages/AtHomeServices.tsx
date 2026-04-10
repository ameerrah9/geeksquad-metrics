import { atHomeAgents } from '@/data/mockData';
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
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function AtHomeServices() {
  const serviceTypeData = [
    { name: 'Setup', value: 142 },
    { name: 'Repair', value: 98 },
    { name: 'Network', value: 67 },
    { name: 'Other', value: 34 },
  ];
  const COLORS = ['#6366f1', '#10b981', '#f59e0b', '#ef4444'];

  const onTimeData = atHomeAgents.map((a) => ({
    name: a.name.split(' ')[0],
    onTime: a.onTime,
  }));

  return (
    <div className='p-6 space-y-6'>
      <h1 className='text-2xl font-bold'>At-Home Services</h1>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        {/* Pie Chart — service types */}
        <Card>
          <CardHeader>
            <CardTitle>Service Types</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width='100%' height={250}>
              <PieChart>
                <Pie
                  data={serviceTypeData}
                  dataKey='value'
                  cx='50%'
                  cy='50%'
                  outerRadius={80}
                >
                  {serviceTypeData.map((_, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Bar Chart — on-time rate */}
        <Card>
          <CardHeader>
            <CardTitle>On-Time Arrival Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width='100%' height={250}>
              <BarChart data={onTimeData}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' />
                <YAxis domain={[80, 100]} />
                <Tooltip />
                <Bar dataKey='onTime' fill='#10b981' radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Agent Table */}
      <Card>
        <CardHeader>
          <CardTitle>Agent Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Agent</TableHead>
                <TableHead>Jobs</TableHead>
                <TableHead>Satisfaction</TableHead>
                <TableHead>On-Time</TableHead>
                <TableHead>Service Type</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {atHomeAgents.map((agent) => (
                <TableRow key={agent.name}>
                  <TableCell className='font-medium'>{agent.name}</TableCell>
                  <TableCell>{agent.jobs}</TableCell>
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
                  <TableCell>{agent.onTime}%</TableCell>
                  <TableCell>{agent.serviceType}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
