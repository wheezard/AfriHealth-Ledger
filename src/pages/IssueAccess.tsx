import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Badge } from '@/components/ui/badge';
import { Key, Shield, User, Calendar as CalendarIcon, Clock, FileText } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

const IssueAccess = () => {
  const [selectedDataTypes, setSelectedDataTypes] = useState<string[]>([]);
  const [expiryDate, setExpiryDate] = useState<Date>();
  const [accessType, setAccessType] = useState<string>('');

  const dataTypes = [
    { id: 'medical-history', label: 'Medical History', description: 'Past medical conditions and treatments' },
    { id: 'lab-results', label: 'Lab Results', description: 'Blood tests, urine tests, and other lab work' },
    { id: 'prescriptions', label: 'Prescriptions', description: 'Current and past medications' },
    { id: 'imaging', label: 'Medical Imaging', description: 'X-rays, MRIs, CT scans, ultrasounds' },
    { id: 'vital-signs', label: 'Vital Signs', description: 'Blood pressure, heart rate, temperature' },
    { id: 'allergies', label: 'Allergies & Reactions', description: 'Known allergies and adverse reactions' },
    { id: 'immunizations', label: 'Immunizations', description: 'Vaccination records' },
    { id: 'billing', label: 'Billing Records', description: 'Insurance claims and payment history' }
  ];

  const handleDataTypeChange = (dataTypeId: string, checked: boolean) => {
    if (checked) {
      setSelectedDataTypes([...selectedDataTypes, dataTypeId]);
    } else {
      setSelectedDataTypes(selectedDataTypes.filter(id => id !== dataTypeId));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would implement the smart contract interaction
    console.log('Issuing access token with:', {
      selectedDataTypes,
      expiryDate,
      accessType
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Issue Access</h1>
        <p className="text-muted-foreground mt-2">
          Grant temporary access to your health data via blockchain-based tokens
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="medical-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="w-5 h-5 text-primary" />
                Create Access Token
              </CardTitle>
              <CardDescription>
                Generate a secure token that grants temporary access to specific health data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="provider-name">Healthcare Provider</Label>
                    <Input
                      id="provider-name"
                      placeholder="Enter provider name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="facility">Medical Facility</Label>
                    <Input
                      id="facility"
                      placeholder="Enter facility name"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Access Type</Label>
                    <Select value={accessType} onValueChange={setAccessType} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select access type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="read-only">Read Only</SelectItem>
                        <SelectItem value="read-write">Read & Write</SelectItem>
                        <SelectItem value="emergency">Emergency Access</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Expiry Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !expiryDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {expiryDate ? format(expiryDate, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={expiryDate}
                          onSelect={setExpiryDate}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="purpose">Purpose of Access</Label>
                  <Textarea
                    id="purpose"
                    placeholder="Describe the reason for data access (e.g., routine consultation, emergency treatment)"
                    rows={3}
                    required
                  />
                </div>

                <div className="space-y-4">
                  <Label className="text-base font-semibold">Data Types to Include</Label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {dataTypes.map((dataType) => (
                      <div key={dataType.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                        <Checkbox
                          id={dataType.id}
                          checked={selectedDataTypes.includes(dataType.id)}
                          onCheckedChange={(checked) => handleDataTypeChange(dataType.id, checked as boolean)}
                        />
                        <div className="space-y-1 leading-none">
                          <label
                            htmlFor={dataType.id}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                          >
                            {dataType.label}
                          </label>
                          <p className="text-xs text-muted-foreground">
                            {dataType.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Button type="submit" className="w-full hedera-glow" disabled={selectedDataTypes.length === 0}>
                  <Shield className="w-4 h-4 mr-2" />
                  Generate Access Token
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="medical-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Token Preview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Selected Data Types:</span>
                  <span className="font-medium">{selectedDataTypes.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Access Type:</span>
                  <span className="font-medium">{accessType || 'Not selected'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Expiry:</span>
                  <span className="font-medium">
                    {expiryDate ? format(expiryDate, "MMM dd, yyyy") : 'Not set'}
                  </span>
                </div>
              </div>
              
              {selectedDataTypes.length > 0 && (
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Included Data:</div>
                  <div className="flex flex-wrap gap-1">
                    {selectedDataTypes.map((typeId) => {
                      const type = dataTypes.find(t => t.id === typeId);
                      return (
                        <Badge key={typeId} variant="secondary" className="text-xs">
                          {type?.label}
                        </Badge>
                      );
                    })}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="medical-card border-accent-info/20 bg-accent-info/5">
            <CardHeader>
              <CardTitle className="text-accent-info">Security Notice</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-accent-info">
              <p>• Tokens are cryptographically secured on Hedera blockchain</p>
              <p>• Access is automatically revoked after expiry</p>
              <p>• All data access is logged and auditable</p>
              <p>• You can revoke access at any time</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default IssueAccess;