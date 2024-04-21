import fs from 'fs';
import path from 'path';
import { Avalanche, BinTools } from 'avalanche';
import bip39 from 'bip39';

// Initialize Avalanche client
const avalanche = new Avalanche('api.avax.network', 443, 'https');

// Create a Buffer utility for Avalanche
const bintools = BinTools.getInstance();

// Generate a mnemonic seed phrase
const mnemonic = bip39.generateMnemonic();

// Derive the master private key from the mnemonic
const masterKeyBuffer = bip39.mnemonicToSeedSync(mnemonic);
const masterKey = bintools.cb58Encode(masterKeyBuffer);

// Get the XChain instance
const xchain = avalanche.XChain();

// Generate a new key pair
const keypair = xchain.keyChain().makeKey();

// Get the address from the key pair
const address = keypair.getAddressString();

// Create a directory for the AVAX wallet
const directory = path.join('.', 'avaxwallet');
if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
}

// Write mnemonic to a file
const mnemonicFilePath = path.join(directory, 'mnemonic.txt');
fs.writeFileSync(mnemonicFilePath, mnemonic, 'utf-8');

console.log(`AVAX Wallet generated:\n- Address : ${address}\n- Mnemonic : ${mnemonic}\n- Mnemonic saved to: ${mnemonicFilePath}`);

// Export variables or functions if needed
export { address, mnemonic, mnemonicFilePath };
