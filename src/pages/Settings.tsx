import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Settings as SettingsIcon, User, Shield, Bell, Palette, Smartphone, Trash2, Download } from 'lucide-react';

const Settings = () => {
  const [notifications, setNotifications] = useState({
    accessRequests: true,
    dataUpdates: false,
    billingAlerts: true,
    securityAlerts: true,
    marketingEmails: false
  });

  const [privacy, setPrivacy] = useState({
    shareAnalytics: false,
    allowEmergencyAccess: true,
    publicProfile: false,
    searchableByProviders: true
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-2">
          Manage your account, privacy, and platform preferences
        </p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="w-4 h-4" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            Security
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="w-4 h-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="privacy" className="flex items-center gap-2">
            <Palette className="w-4 h-4" />
            Privacy
          </TabsTrigger>
          <TabsTrigger value="advanced" className="flex items-center gap-2">
            <SettingsIcon className="w-4 h-4" />
            Advanced
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <Card className="medical-card">
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>
                Update your personal information and preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Enter your last name" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="Enter your phone number" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="date-of-birth">Date of Birth</Label>
                <Input id="date-of-birth" type="date" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="emergency-contact">Emergency Contact</Label>
                <Input id="emergency-contact" placeholder="Name and phone number" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="medical-conditions">Known Medical Conditions</Label>
                <Textarea 
                  className="resize-none"
                  id="medical-conditions" 
                  placeholder="List any known medical conditions, allergies, or important medical history"
                  rows={5}
                />
              </div>

              <Button className="hedera-glow">
                Save Profile Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">


          <Card className="medical-card">
            <CardHeader>
              <CardTitle>Two-Factor Authentication</CardTitle>
              <CardDescription>
                Add an extra layer of security to your account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">SMS Authentication</div>
                  <div className="text-sm text-muted-foreground">Receive codes via text message</div>
                </div>
                <Switch />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Authenticator App</div>
                  <div className="text-sm text-muted-foreground">Use an authenticator app like Google Authenticator</div>
                </div>
                <Button variant="outline" size="sm">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Setup
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="medical-card">
            <CardHeader>
              <CardTitle>Access Logs</CardTitle>
              <CardDescription>
                Recent access to your health data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { date: '2024-01-20', provider: 'Dr. Sarah Johnson', action: 'Viewed medical history' },
                  { date: '2024-01-18', provider: 'Central Laboratory', action: 'Updated lab results' },
                  { date: '2024-01-15', provider: 'City Medical Center', action: 'Accessed prescription history' }
                ].map((log, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded">
                    <div>
                      <div className="font-medium">{log.action}</div>
                      <div className="text-sm text-muted-foreground">{log.provider} • {log.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card className="medical-card">
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>
                Choose what notifications you want to receive
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Access Requests</div>
                    <div className="text-sm text-muted-foreground">Get notified when providers request access to your data</div>
                  </div>
                  <Switch 
                    checked={notifications.accessRequests}
                    onCheckedChange={(checked) => setNotifications({...notifications, accessRequests: checked})}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Data Updates</div>
                    <div className="text-sm text-muted-foreground">Notifications when your health records are updated</div>
                  </div>
                  <Switch 
                    checked={notifications.dataUpdates}
                    onCheckedChange={(checked) => setNotifications({...notifications, dataUpdates: checked})}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Billing Alerts</div>
                    <div className="text-sm text-muted-foreground">Payment confirmations and billing updates</div>
                  </div>
                  <Switch 
                    checked={notifications.billingAlerts}
                    onCheckedChange={(checked) => setNotifications({...notifications, billingAlerts: checked})}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Security Alerts</div>
                    <div className="text-sm text-muted-foreground">Important security notifications and warnings</div>
                  </div>
                  <Switch 
                    checked={notifications.securityAlerts}
                    onCheckedChange={(checked) => setNotifications({...notifications, securityAlerts: checked})}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Marketing Emails</div>
                    <div className="text-sm text-muted-foreground">Product updates and promotional content</div>
                  </div>
                  <Switch 
                    checked={notifications.marketingEmails}
                    onCheckedChange={(checked) => setNotifications({...notifications, marketingEmails: checked})}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="privacy" className="space-y-6">
          <Card className="medical-card">
            <CardHeader>
              <CardTitle>Data Privacy Settings</CardTitle>
              <CardDescription>
                Control how your data is used and shared
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {/* <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Share Anonymous Analytics</div>
                    <div className="text-sm text-muted-foreground">Help improve the platform with anonymous usage data</div>
                  </div>
                  <Switch 
                    checked={privacy.shareAnalytics}
                    onCheckedChange={(checked) => setPrivacy({...privacy, shareAnalytics: checked})}
                  />
                </div>
                <Separator /> */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Emergency Access Override</div>
                    <div className="text-sm text-muted-foreground">Allow emergency access to critical health data</div>
                  </div>
                  <Switch 
                    checked={privacy.allowEmergencyAccess}
                    onCheckedChange={(checked) => setPrivacy({...privacy, allowEmergencyAccess: checked})}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Public Profile</div>
                    <div className="text-sm text-muted-foreground">Make basic profile information discoverable</div>
                  </div>
                  <Switch 
                    checked={privacy.publicProfile}
                    onCheckedChange={(checked) => setPrivacy({...privacy, publicProfile: checked})}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Provider Discovery</div>
                    <div className="text-sm text-muted-foreground">Allow healthcare providers to find and connect with you</div>
                  </div>
                  <Switch 
                    checked={privacy.searchableByProviders}
                    onCheckedChange={(checked) => setPrivacy({...privacy, searchableByProviders: checked})}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-6">
          <Card className="medical-card">
            <CardHeader>
              <CardTitle>Data Export</CardTitle>
              <CardDescription>
                Download a complete copy of your health data
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Export all your health records, consents, and transaction history in a portable format.
              </p>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Download My Data
              </Button>
            </CardContent>
          </Card>

          <Card className="medical-card border-destructive/20">
            <CardHeader>
              <CardTitle className="text-destructive">Danger Zone</CardTitle>
              <CardDescription>
                Irreversible and destructive actions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 border border-destructive/20 rounded-lg">
                <h4 className="font-medium text-destructive mb-2">Delete Account</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Permanently delete your account and all associated data. This action cannot be undone.
                </p>
                <Button variant="destructive">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;