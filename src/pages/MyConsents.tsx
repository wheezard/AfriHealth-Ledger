import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, Clock, User, Building, Calendar, Eye } from 'lucide-react';

const MyConsents = () => {
  const consents = [
    {
      id: '1',
      provider: 'Dr. Sarah Johnson',
      facility: 'City Medical Center',
      purpose: 'Routine Medical Care',
      dataTypes: ['Medical History', 'Lab Results', 'Prescriptions'],
      grantedDate: '2024-01-15',
      expiryDate: '2024-12-15',
      status: 'Active',
      accessCount: 12
    },
    {
      id: '2',
      provider: 'Emergency Department',
      facility: 'General Hospital',
      purpose: 'Emergency Care',
      dataTypes: ['All Medical Records'],
      grantedDate: '2024-01-08',
      expiryDate: '2024-06-08',
      status: 'Active',
      accessCount: 3
    },
    {
      id: '3',
      provider: 'Lab Corp',
      facility: 'Central Laboratory',
      purpose: 'Lab Test Processing',
      dataTypes: ['Lab Orders', 'Test Results'],
      grantedDate: '2024-01-10',
      expiryDate: '2024-04-10',
      status: 'Expiring Soon',
      accessCount: 8
    },
    {
      id: '4',
      provider: 'Insurance Reviewer',
      facility: 'Health Plus Insurance',
      purpose: 'Claims Processing',
      dataTypes: ['Billing Records', 'Treatment History'],
      grantedDate: '2023-12-20',
      expiryDate: '2024-01-20',
      status: 'Expired',
      accessCount: 5
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-accent-success text-accent-success-foreground';
      case 'Expiring Soon':
        return 'bg-accent-warning text-accent-warning-foreground';
      case 'Expired':
        return 'bg-destructive text-destructive-foreground';
      default:
        return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">My Consents</h1>
          <p className="text-muted-foreground mt-2">
            Manage access permissions for your health data on the blockchain
          </p>
        </div>
        <Button className="hedera-glow">
          <Shield className="w-4 h-4 mr-2" />
          Grant New Consent
        </Button>
      </div>

      <div className="grid gap-6">
        {consents.map((consent) => (
          <Card key={consent.id} className="medical-card hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    {consent.purpose}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {consent.provider}
                    </span>
                    <span className="flex items-center gap-1">
                      <Building className="w-4 h-4" />
                      {consent.facility}
                    </span>
                  </CardDescription>
                </div>
                <Badge className={getStatusColor(consent.status)}>
                  {consent.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <div className="text-muted-foreground">Granted Date</div>
                  <div className="font-medium flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {consent.grantedDate}
                  </div>
                </div>
                <div>
                  <div className="text-muted-foreground">Expiry Date</div>
                  <div className="font-medium flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {consent.expiryDate}
                  </div>
                </div>
                <div>
                  <div className="text-muted-foreground">Access Count</div>
                  <div className="font-medium flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {consent.accessCount} times
                  </div>
                </div>
                <div>
                  <div className="text-muted-foreground">Data Types</div>
                  <div className="font-medium">{consent.dataTypes.length} types</div>
                </div>
              </div>

              <div>
                <div className="text-sm text-muted-foreground mb-2">Authorized Data Types:</div>
                <div className="flex flex-wrap gap-1">
                  {consent.dataTypes.map((dataType, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {dataType}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t">
                <div className="text-xs text-muted-foreground">
                  Managed via smart contract on Hedera blockchain
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  {consent.status === 'Active' && (
                    <Button variant="destructive" size="sm">
                      Revoke Access
                    </Button>
                  )}
                  {consent.status === 'Expired' && (
                    <Button variant="default" size="sm">
                      Renew Consent
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyConsents;