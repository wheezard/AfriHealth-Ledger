import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, Download, Eye, Calendar, User, Building } from 'lucide-react';

const MyRecords = () => {
  const records = [
    {
      id: '1',
      title: 'Annual Physical Examination',
      provider: 'Dr. Sarah Johnson',
      facility: 'City Medical Center',
      date: '2024-01-15',
      type: 'Examination',
      status: 'Complete'
    },
    {
      id: '2',
      title: 'Blood Test Results',
      provider: 'Lab Corp',
      facility: 'Central Laboratory',
      date: '2024-01-10',
      type: 'Laboratory',
      status: 'Complete'
    },
    {
      id: '3',
      title: 'Chest X-Ray',
      provider: 'Dr. Michael Chen',
      facility: 'Radiology Associates',
      date: '2024-01-08',
      type: 'Imaging',
      status: 'Complete'
    },
    {
      id: '4',
      title: 'Prescription Refill',
      provider: 'Dr. Sarah Johnson',
      facility: 'City Medical Center',
      date: '2024-01-20',
      type: 'Prescription',
      status: 'Pending'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Complete':
        return 'bg-accent-success text-accent-success-foreground';
      case 'Pending':
        return 'bg-accent-warning text-accent-warning-foreground';
      default:
        return 'bg-secondary text-secondary-foreground';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Examination':
        return 'bg-primary/10 text-primary';
      case 'Laboratory':
        return 'bg-accent-info/10 text-accent-info';
      case 'Imaging':
        return 'bg-accent-purple/10 text-accent-purple';
      case 'Prescription':
        return 'bg-accent-success/10 text-accent-success';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">My Records</h1>
          <p className="text-muted-foreground mt-2">
            View and manage your medical records stored on Hedera blockchain
          </p>
        </div>
        <Button className="hedera-glow">
          <FileText className="w-4 h-4 mr-2" />
          Upload Record
        </Button>
      </div>

      <div className="grid gap-6">
        {records.map((record) => (
          <Card key={record.id} className="medical-card hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <CardTitle className="text-xl">{record.title}</CardTitle>
                  <CardDescription className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {record.provider}
                    </span>
                    <span className="flex items-center gap-1">
                      <Building className="w-4 h-4" />
                      {record.facility}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {record.date}
                    </span>
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={getTypeColor(record.type)}>
                    {record.type}
                  </Badge>
                  <Badge className={getStatusColor(record.status)}>
                    {record.status}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  Stored securely on Hedera blockchain with end-to-end encryption
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-2" />
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyRecords;