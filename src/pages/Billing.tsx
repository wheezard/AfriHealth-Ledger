import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CreditCard, DollarSign, Download, Eye, Search, Filter, Calendar, Building, FileText } from 'lucide-react';

const Billing = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const transactions = [
    {
      id: 'TX001',
      date: '2024-01-20',
      provider: 'City Medical Center',
      service: 'Annual Physical Examination',
      amount: 250.00,
      status: 'Paid',
      method: 'Insurance',
      hbarEquivalent: '1,500 HBAR',
      transactionHash: '0x789...abc'
    },
    {
      id: 'TX002',
      date: '2024-01-18',
      provider: 'Central Laboratory',
      service: 'Complete Blood Panel',
      amount: 120.00,
      status: 'Paid',
      method: 'Crypto',
      hbarEquivalent: '720 HBAR',
      transactionHash: '0x456...def'
    },
    {
      id: 'TX003',
      date: '2024-01-15',
      provider: 'Radiology Associates',
      service: 'Chest X-Ray',
      amount: 180.00,
      status: 'Pending',
      method: 'Insurance',
      hbarEquivalent: '1,080 HBAR',
      transactionHash: 'Pending'
    },
    {
      id: 'TX004',
      date: '2024-01-10',
      provider: 'Specialty Pharmacy',
      service: 'Prescription Medications',
      amount: 85.00,
      status: 'Disputed',
      method: 'Direct Pay',
      hbarEquivalent: '510 HBAR',
      transactionHash: '0x123...ghi'
    }
  ];

  const paymentMethods = [
    {
      id: '1',
      type: 'Hedera Wallet',
      address: '0.0.123456',
      balance: '2,450 HBAR',
      status: 'Connected',
      isDefault: true
    },
    {
      id: '2',
      type: 'Insurance',
      provider: 'Health Plus Premium',
      policyNumber: 'HP-789654',
      status: 'Active',
      isDefault: false
    },
    {
      id: '3',
      type: 'Credit Card',
      lastFour: '4567',
      expiry: '12/26',
      status: 'Active',
      isDefault: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Paid':
        return 'bg-accent-success text-accent-success-foreground';
      case 'Pending':
        return 'bg-accent-warning text-accent-warning-foreground';
      case 'Disputed':
        return 'bg-destructive text-destructive-foreground';
      default:
        return 'bg-secondary text-secondary-foreground';
    }
  };

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'Crypto':
        return 'bg-primary/10 text-primary';
      case 'Insurance':
        return 'bg-accent-info/10 text-accent-info';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Billing & Payments</h1>
          <p className="text-muted-foreground mt-2">
            Transparent healthcare billing powered by Hedera blockchain
          </p>
        </div>
        <Button className="hedera-glow">
          <DollarSign className="w-4 h-4 mr-2" />
          Make Payment
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="medical-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Paid</p>
                <p className="text-2xl font-bold text-accent-success">$635.00</p>
              </div>
              <DollarSign className="h-8 w-8 text-accent-success" />
            </div>
          </CardContent>
        </Card>
        <Card className="medical-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Pending</p>
                <p className="text-2xl font-bold text-accent-warning">$180.00</p>
              </div>
              <Calendar className="h-8 w-8 text-accent-warning" />
            </div>
          </CardContent>
        </Card>
        <Card className="medical-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">HBAR Balance</p>
                <p className="text-2xl font-bold text-primary">2,450</p>
              </div>
              <CreditCard className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card className="medical-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Transactions</p>
                <p className="text-2xl font-bold text-foreground">{transactions.length}</p>
              </div>
              <FileText className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="transactions" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="transactions" className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Transaction History
          </TabsTrigger>
          <TabsTrigger value="payment-methods" className="flex items-center gap-2">
            <CreditCard className="w-4 h-4" />
            Payment Methods
          </TabsTrigger>
        </TabsList>

        <TabsContent value="transactions" className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search transactions, providers, or services..."
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
                <SelectItem value="all">All Transactions</SelectItem>
                <SelectItem value="paid">Paid Only</SelectItem>
                <SelectItem value="pending">Pending Only</SelectItem>
                <SelectItem value="disputed">Disputed Only</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            {transactions.map((transaction) => (
              <Card key={transaction.id} className="medical-card">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{transaction.service}</CardTitle>
                      <CardDescription className="flex items-center gap-4 mt-1">
                        <span className="flex items-center gap-1">
                          <Building className="w-4 h-4" />
                          {transaction.provider}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {transaction.date}
                        </span>
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">${transaction.amount}</div>
                      <div className="text-sm text-muted-foreground">{transaction.hbarEquivalent}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Badge className={getStatusColor(transaction.status)}>
                        {transaction.status}
                      </Badge>
                      <Badge className={getMethodColor(transaction.method)} variant="secondary">
                        {transaction.method}
                      </Badge>
                      <div className="text-xs text-muted-foreground">
                        TX: {transaction.transactionHash}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        Details
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Receipt
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="payment-methods" className="space-y-6">
          <div className="grid gap-6">
            {paymentMethods.map((method) => (
              <Card key={method.id} className={`medical-card ${method.isDefault ? 'border-primary bg-primary/5' : ''}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <CreditCard className="w-5 h-5" />
                        {method.type}
                        {method.isDefault && (
                          <Badge className="bg-primary text-primary-foreground">Default</Badge>
                        )}
                      </CardTitle>
                      <CardDescription className="mt-1">
                        {method.type === 'Hedera Wallet' && `Address: ${method.address}`}
                        {method.type === 'Insurance' && `${method.provider} • Policy: ${method.policyNumber}`}
                        {method.type === 'Credit Card' && `**** **** **** ${method.lastFour} • Expires: ${method.expiry}`}
                      </CardDescription>
                    </div>
                    <Badge 
                      className={
                        method.status === 'Connected' || method.status === 'Active' 
                          ? 'bg-accent-success text-accent-success-foreground'
                          : 'bg-secondary text-secondary-foreground'
                      }
                    >
                      {method.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      {method.type === 'Hedera Wallet' && `Balance: ${method.balance}`}
                      {method.type === 'Insurance' && 'Automatically processes claims'}
                      {method.type === 'Credit Card' && 'Backup payment method'}
                    </div>
                    <div className="flex gap-2">
                      {!method.isDefault && (
                        <Button variant="outline" size="sm">
                          Set Default
                        </Button>
                      )}
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      {method.type !== 'Hedera Wallet' && (
                        <Button variant="destructive" size="sm">
                          Remove
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="medical-card border-dashed border-muted-foreground/25">
              <CardContent className="flex flex-col items-center justify-center py-8 text-center">
                <CreditCard className="w-12 h-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">Add Payment Method</h3>
                <p className="text-muted-foreground mb-4">
                  Connect another wallet or add a traditional payment method
                </p>
                <Button className="hedera-glow">
                  Add Payment Method
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Billing;