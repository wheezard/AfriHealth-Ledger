// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { useToast } from '@/hooks/use-toast';

// interface WalletContextType {
//   isConnected: boolean;
//   walletAddress: string | null;
//   connectWallet: () => Promise<void>;
//   disconnectWallet: () => void;
// }

// const WalletContext = createContext<WalletContextType | undefined>(undefined);

// export const useWallet = () => {
//   const context = useContext(WalletContext);
//   if (!context) {
//     throw new Error('useWallet must be used within a WalletProvider');
//   }
//   return context;
// };

// export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [isConnected, setIsConnected] = useState(false);
//   const [walletAddress, setWalletAddress] = useState<string | null>(null);
//   const { toast } = useToast();

//   useEffect(() => {
//     const savedAddress = localStorage.getItem('walletAddress');
//     if (savedAddress) {
//       setWalletAddress(savedAddress);
//       setIsConnected(true);
//     }
//   }, []);

//   const connectWallet = async () => {
//     try {
          
//       const mockAddress = '0.0.9990740';
//       setWalletAddress(mockAddress);
//       setIsConnected(true);
//       localStorage.setItem('walletAddress', mockAddress);
      
//       toast({
//         title: "Wallet Connected",
//         description: `Connected to ${mockAddress}`,
//       });

//     }
//     catch (error) {
//       toast({
//         title: "Connection Failed",
//         description: "Failed to connect wallet. Please try again.",
//         variant: "destructive",
//       });
//     }
//   };

//   const disconnectWallet = () => {
//     setWalletAddress(null);
//     setIsConnected(false);
//     localStorage.removeItem('walletAddress');
    
//     toast({
//       title: "Wallet Disconnected",
//       description: "Your wallet has been disconnected.",
//     });

//   };

//   const value: WalletContextType = {
//     isConnected,
//     walletAddress,
//     connectWallet,
//     disconnectWallet,
//   };

//   return (
//     <WalletContext.Provider value={value}>
//       {children}
//     </WalletContext.Provider>
//   );
// };