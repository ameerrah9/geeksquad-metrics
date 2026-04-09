import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';
import { Skeleton } from '@/components/ui/skeleton';

type StatCardProps = {
  title: string;
  value: string;
  change: number;
  data: { value: number }[];
  isLoading?: boolean;
  error?: string;
};

export default function StatCard({
  title,
  value,
  change,
  data,
  isLoading,
  error,
}: StatCardProps) {
  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <Skeleton className='h-4 w-[140px]' />
          <Skeleton className='h-5 w-[60px]' />
        </CardHeader>
        <CardContent>
          <Skeleton className='h-8 w-[120px] mb-4' />
          <Skeleton className='h-[60px] w-full' />
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex flex-col gap-2'>
            <p className='text-sm text-destructive'>{error}</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {change >= 0 ? (
          <Badge variant='default'>+{change}%</Badge>
        ) : (
          <Badge variant='destructive'>{change}%</Badge>
        )}
      </CardHeader>

      <CardContent>
        <div className='text-2xl font-bold'>{value}</div>
        <ResponsiveContainer width='100%' height={60}>
          <AreaChart data={data}>
            <Area
              type='monotone'
              dataKey='value'
              stroke='#6366f1'
              fill='#6366f120'
              strokeWidth={6}
              dot={false}
            />
            <Tooltip />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
