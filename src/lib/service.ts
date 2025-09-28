// import {
//   HashConnect,
//   HashConnectConnectionState,
//   SessionData,
// } from "hashconnect";
// import { LedgerId, Transaction, TransactionResponse } from "@hashgraph/sdk";


// const appMetadata = {
//   name: "RafikNS DApp",
//   description: "Decentralized messaging & naming service",
//   icons: ["https://yourapp.com/logo.png"],
//   url: "https://yourapp.com",
// };

// export class HashConnectService {
//   private hashconnect: HashConnect;
//   private state: HashConnectConnectionState =
//     HashConnectConnectionState.Disconnected;
//   private pairingData: SessionData | null = null;

//   constructor() {
//     this.hashconnect = new HashConnect(
//       LedgerId.TESTNET,
//       "<Your project ID>", 
//       appMetadata,
//       true 
//     );

//     this.setUpHashConnectEvents();
//   }

//   public async init() {
//     await this.hashconnect.init();
//     this.hashconnect.openPairingModal();
//   }

//   public setUpHashConnectEvents() {
//     this.hashconnect.pairingEvent.on((newPairing: SessionData) => {
//       console.log("✅ Paired with wallet:", newPairing);
//       this.pairingData = newPairing;
//     });

//     this.hashconnect.disconnectionEvent.on(() => {
//       console.log("❌ Wallet disconnected");
//       this.pairingData = null;
//     });

//     this.hashconnect.connectionStatusChangeEvent.on(
//       (connectionStatus: HashConnectConnectionState) => {
//         console.log("🔄 Connection state:", connectionStatus);
//         this.state = connectionStatus;
//       }
//     );
//   }

//   public getAccountId(): string | null {
//     if (!this.pairingData || this.pairingData.accountIds.length === 0) {
//       return null;
//     }
//     return this.pairingData.accountIds[0];
//   }

//   public async disconnect() {
//     if (this.pairingData) {
//       await this.hashconnect.disconnect();
//       this.pairingData = null;
//       this.state = HashConnectConnectionState.Disconnected;
//     }
//   }

//   public async sendTransaction(
//     accountId: string,
//     transaction: Transaction
//   ): Promise<TransactionResponse | null> {
//     try {
//       const response = await this.hashconnect.sendTransaction(
//         accountId,
//         transaction
//       );
//       console.log("✅ Tx sent:", response);
//       return response;
//     } catch (err) {
//       console.error("⚠️ Transaction failed:", err);
//       return null;
//     }
//   }
// }
