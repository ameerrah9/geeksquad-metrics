import { repairAgents } from '@/data/mockData';
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
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default function RepairAgents() {
  const repairsByType = [
    { type: 'Hardware', repairs: 524 },
    { type: 'Software', repairs: 356 },
    { type: 'Network', repairs: 198 },
    { type: 'Screen', repairs: 287 },
    { type: 'Battery', repairs: 165 },
  ];

  return (
    <div className='p-6 space-y-6'>
      <h1 className='text-2xl font-bold'>Repair Agents</h1>

      {/* Bar Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Repairs by Type</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width='100%' height={300}>
            <BarChart data={repairsByType}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='type' />
              <YAxis />
              <Tooltip />
              <Bar dataKey='repairs' fill='#6366f1' radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Table of Repair Agents */}
      <Card>
        <CardHeader>
          <CardTitle>Repair Agent Stats</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Agent</TableHead>
                <TableHead>Repairs</TableHead>
                <TableHead>First-Fix Rate</TableHead>
                <TableHead>Avg Repair Time</TableHead>
                <TableHead>Speciality</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {repairAgents.map((agent) => (
                <TableRow key={agent.name}>
                  <TableCell className='font-medium'>{agent.name}</TableCell>
                  <TableCell>{agent.repairs}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        agent.firstFixRate >= 93
                          ? 'default'
                          : agent.firstFixRate >= 88
                            ? 'secondary'
                            : 'destructive'
                      }
                    >
                      {agent.firstFixRate}%
                    </Badge>
                  </TableCell>
                  <TableCell>{agent.avgRepairTime}</TableCell>
                  <TableCell>{agent.type}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
