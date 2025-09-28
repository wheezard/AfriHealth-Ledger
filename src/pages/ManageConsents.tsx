import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Settings, Shield, Users, Clock, Search, Filter, Eye, Edit, Trash2, AlertTriangle } from 'lucide-react';

const ManageConsents = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const activeConsents = [
    {
      id: '1',
      provider: 'Dr. Sarah Johnson',
      facility: 'City Medical Center',
      purpose: 'Routine Medical Care',
      grantedDate: '2024-01-15',
      expiryDate: '2024-12-15',
      accessCount: 12,
      lastAccessed: '2024-01-20',
      dataTypes: ['Medical History', 'Lab Results', 'Prescriptions']
    },
    {
      id: '2',
      provider: 'Emergency Department',
      facility: 'General Hospital',
      purpose: 'Emergency Care',
      grantedDate: '2024-01-08',
      expiryDate: '2024-06-08',
      accessCount: 3,
      lastAccessed: '2024-01-18',
      dataTypes: ['All Medical Records']
    }
  ];

  const pendingRequests = [
    {
      id: '1',
      provider: 'Dr. Michael Brown',
      facility: 'Specialty Clinic',
      purpose: 'Cardiology Consultation',
      requestedDate: '2024-01-22',
      dataTypes: ['Cardiac History', 'Test Results', 'Medications'],
      urgency: 'Normal'
    },
    {
      id: '2',
      provider: 'Insurance Reviewer',
      facility: 'Health Plus Insurance',
      purpose: 'Claims Review',
      requestedDate: '2024-01-21',
      dataTypes: ['Billing Records', 'Treatment Summary'],
      urgency: 'Low'
    }
  ];

  const expiredConsents = [
    {
      id: '1',
      provider: 'Lab Corp',
      facility: 'Central Laboratory',
      purpose: 'Lab Test Processing',
      grantedDate: '2023-10-10',
      expiryDate: '2024-01-10',
      finalAccessCount: 15
    }
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'High':
        return 'bg-destructive text-destructive-foreground';
      case 'Normal':
        return 'bg-accent-warning text-accent-warning-foreground';
      default:
        return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Manage Consents</h1>
          <p className="text-muted-foreground mt-2">
            Comprehensive management of all data access permissions and requests
          </p>
        </div>
        <Button className="hedera-glow">
          <Settings className="w-4 h-4 mr-2" />
          Global Settings
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search consents, providers, or facilities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-48">
            <Filter className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Consents</SelectItem>
            <SelectItem value="active">Active Only</SelectItem>
            <SelectItem value="pending">Pending Only</SelectItem>
            <SelectItem value="expired">Expired Only</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="active" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="active" className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            Active ({activeConsents.length})
          </TabsTrigger>
          <TabsTrigger value="pending" className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Pending ({pendingRequests.length})
          </TabsTrigger>
          <TabsTrigger value="expired" className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            Expired ({expiredConsents.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          {activeConsents.map((consent) => (
            <Card key={consent.id} className="medical-card">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-accent-success" />
                      {consent.purpose}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      {consent.provider} • {consent.facility}
                    </CardDescription>
                  </div>
                  <Badge className="bg-accent-success text-accent-success-foreground">Active</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                  <div>
                    <div className="text-muted-foreground">Granted</div>
                    <div className="font-medium">{consent.grantedDate}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Expires</div>
                    <div className="font-medium">{consent.expiryDate}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Total Access</div>
                    <div className="font-medium">{consent.accessCount} times</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Last Used</div>
                    <div className="font-medium">{consent.lastAccessed}</div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm text-muted-foreground mb-2">Authorized Data Types:</div>
                  <div className="flex flex-wrap gap-1">
                    {consent.dataTypes.map((type, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {type}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-xs text-muted-foreground">
                    Smart contract: 0x...{consent.id}abc
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="w-4 h-4 mr-2" />
                      Modify
                    </Button>
                    <Button variant="destructive" size="sm">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Revoke
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="pending" className="space-y-4">
          {pendingRequests.map((request) => (
            <Card key={request.id} className="medical-card border-accent-warning/20">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-accent-warning" />
                      {request.purpose}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      {request.provider} • {request.facility}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={getUrgencyColor(request.urgency)}>
                      {request.urgency}
                    </Badge>
                    <Badge className="bg-accent-warning text-accent-warning-foreground">Pending</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-sm mb-4">
                  <div className="text-muted-foreground">Requested on:</div>
                  <div className="font-medium">{request.requestedDate}</div>
                </div>

                <div className="mb-4">
                  <div className="text-sm text-muted-foreground mb-2">Requested Data Types:</div>
                  <div className="flex flex-wrap gap-1">
                    {request.dataTypes.map((type, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {type}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-xs text-muted-foreground">
                    Review and approve or deny this access request
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-2" />
                      Review Details
                    </Button>
                    <Button variant="destructive" size="sm">
                      Deny
                    </Button>
                    <Button className="hedera-glow" size="sm">
                      Approve
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="expired" className="space-y-4">
          {expiredConsents.map((consent) => (
            <Card key={consent.id} className="medical-card border-muted bg-muted/20">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2 text-muted-foreground">
                      <AlertTriangle className="w-5 h-5" />
                      {consent.purpose}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      {consent.provider} • {consent.facility}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary">Expired</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 text-sm mb-4">
                  <div>
                    <div className="text-muted-foreground">Granted</div>
                    <div className="font-medium">{consent.grantedDate}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Expired</div>
                    <div className="font-medium">{consent.expiryDate}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Final Access Count</div>
                    <div className="font-medium">{consent.finalAccessCount} times</div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-xs text-muted-foreground">
                    This consent has expired and access has been revoked
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-2" />
                      View History
                    </Button>
                    <Button variant="default" size="sm">
                      Renew Consent
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ManageConsents;