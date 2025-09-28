import React from 'react';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import { Button } from '@/components/ui/button';
import { Bell } from 'lucide-react';
import { ThemeToggle } from './ui/theme-toggle';
import { WalletButton } from './home/connectButton';
interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          <header className="h-16 flex items-center justify-between px-6 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="p-2" />
              <div className="hidden md:block">
                <h2 className="text-lg font-semibold text-foreground">Healthcare Dashboard</h2>
                <p className="text-sm text-muted-foreground">Powered by Hedera blockchain</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Button variant="ghost" size="sm" className="hover:shadow-md hover:p-[10px] transition-all transform duration-300 ">
                <Bell className="h-4 w-4" />
              </Button>
              <div className="flex items-center gap-2">
                <WalletButton />
              </div>
            </div>
          </header>
          <main className="flex-1 p-6 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};