import React, { useState } from 'react';
import type { LucideIcon } from "lucide-react";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  LayoutDashboard,
  FileText,
  Users,
  Key,
  CreditCard,
  Settings,
  Search,
  Plus,
  Eye,
  DollarSign,
  Activity,
  Shield
} from 'lucide-react';
import { BlockchainBackground } from '@/components/ui/blockchain-bg';

interface SummaryStat {
  title: string;
  value: string;
  icon: LucideIcon;
  color?: string;
  amount?: string;
}
export const Dashboard: React.FC = () => {
  const [activeTab] = useState('dashboard');

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'records', label: 'My Records', icon: FileText },
    { id: 'consents', label: 'My Consents', icon: Users },
    { id: 'access', label: 'Issue Access', icon: Key },
    { id: 'manage', label: 'Manage Consents', icon: Shield },
    { id: 'billing', label: 'Billing', icon: CreditCard },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const summaryStats:SummaryStat[] = [
    { title: 'My Access Tokens', value: '3', icon: Key, color: 'text-secondary' },
    { title: 'My Consents', value: '5', icon: Users, color: 'text-primary' },
    { title: 'Pending Bills', value: '2', amount: '$150', icon: DollarSign, color: 'text-warning' },
    { title: 'Total Interactions', value: '3 transactions', icon: Activity, color: 'text-muted-foreground' },
  ];

  const recentActivity = [
    { title: 'Dr. Evelyn Reed', subtitle: 'Access Granted', time: '1h ago', status: 'active' },
    { title: 'New Consent Added', subtitle: 'Cardiology Report', time: '3h ago', status: 'pending' },
    { title: 'Bill Paid', subtitle: 'General Checkup - $75.00', time: 'Yesterday', status: 'success' },
  ];

  const medicalRecords = [
    {
      tokenId: '1234567890',
      user: 'Dr. Emily Carter',
      role: 'Physician',
      expiry: '2024-12-31',
      status: 'active'
    },
    {
      tokenId: '9876543210',
      user: 'Nurse David Lee',
      role: 'Nurse',
      expiry: '2024-06-30',
      status: 'expired'
    },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <BlockchainBackground />

      <div className="flex relative z-10">
        <div className="flex-1">
          <main className="p-6 space-y-6">
            {activeTab === 'dashboard' && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {summaryStats.map((stat, index) => (
                    <Card key={stat.title} className="medical-card animate-scale-in"
                      style={{ animationDelay: `${index * 0.1}s` }}>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                          {stat.title}
                        </CardTitle>
                        <stat.icon className={`h-5 w-5 ${stat.color}`} />
                      </CardHeader>
                      <CardContent>
                        <div className="text-md md:text-lg lg:text-xl font-bold text-foreground">{stat.value}</div>
                        {stat.amount && (
                          <div className="text-sm text-muted-foreground">{stat.amount}</div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <Card className="medical-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 pb-2">
                      <Activity className="h-5 w-5 text-primary" />
                      <span className="text-sm md:text-lg">Recent Activity</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {
                      recentActivity.length > 0 ?
                        recentActivity.map((activity, index) => (
                          <div key={index} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                            <div>
                              <div className="font-medium text-foreground">{activity.title}</div>
                              <div className="text-sm text-muted-foreground">{activity.subtitle}</div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm text-muted-foreground">{activity.time}</div>
                              <Badge
                                className={`mt-1 ${activity.status === 'active' ? 'status-active' :
                                  activity.status === 'success' ? 'status-active' :
                                    'status-pending'
                                  }`}
                              >
                                {activity.status}
                              </Badge>
                            </div>
                          </div>
                        ))
                        :
                        <p className="w-full border-1 border-white text-center my-12 md:my-10 capitalize font-[700] text-xl">
                          No activity yet
                        </p>
                    }
                  </CardContent>
                </Card>
              </>
            )}

            {activeTab === 'records' && (
              <Card className="medical-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center space-x-2">
                        <FileText className="h-5 w-5 text-primary" />
                        <span>My Medical Records</span>
                      </CardTitle>
                      <CardDescription>Manage and view your medical records</CardDescription>
                    </div>
                    <Button className="hedera-glow">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Record
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search by Record Hash or Provider" className="pl-10" />
                      </div>
                      <Select>
                        <SelectTrigger className="w-48">
                          <SelectValue placeholder="Filter by Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Status</SelectItem>
                          <SelectItem value="active">Active</SelectItem>
                          <SelectItem value="expired">Expired</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {medicalRecords.map((record) => (
                      <div key={record.tokenId} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="space-y-1">
                          <div className="font-medium text-foreground">Token ID: {record.tokenId}</div>
                          <div className="text-sm text-muted-foreground">
                            User: {record.user} • Role: {record.role} • Expiry: {record.expiry}
                          </div>
                          <Badge className={record.status === 'active' ? 'status-active' : 'status-expired'}>
                            {record.status}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </Button>
                          {record.status === 'expired' ? (
                            <Button variant="outline" size="sm" className="text-destructive border-destructive">
                              Revoke Access
                            </Button>
                          ) : (
                            <Button variant="outline" size="sm" className="text-destructive border-destructive">
                              Revoke Access
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === 'access' && (
              <Card className="medical-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Key className="h-5 w-5 text-primary" />
                    <span>Issue New Access Token</span>
                  </CardTitle>
                  <CardDescription>Grant access to your medical data</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-foreground">User Address</label>
                        <Input placeholder="Enter user address" className="mt-1" />
                      </div>

                      <div>
                        <label className="text-sm font-medium text-foreground">Role</label>
                        <Select>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Viewer" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="viewer">Viewer</SelectItem>
                            <SelectItem value="editor">Editor</SelectItem>
                            <SelectItem value="admin">Admin</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-foreground">Validity Period (Days)</label>
                        <Input placeholder="Enter validity period" className="mt-1" />
                      </div>

                      <Button className="w-full hedera-glow">
                        Issue Access Token
                      </Button>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-semibold text-foreground">Recent Issued Tokens</h3>
                      <div className="space-y-3">
                        <div className="p-3 bg-muted rounded-lg">
                          <div className="flex justify-between items-center">
                            <div className="text-sm">
                              <div className="font-medium">0x123...abc</div>
                              <div className="text-muted-foreground">Viewer • 30 Days</div>
                            </div>
                            <Badge className="status-active">Active</Badge>
                          </div>
                        </div>

                        <div className="p-3 bg-muted rounded-lg">
                          <div className="flex justify-between items-center">
                            <div className="text-sm">
                              <div className="font-medium">0x456...def</div>
                              <div className="text-muted-foreground">Editor • 60 Days</div>
                            </div>
                            <Badge className="status-active">Active</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};