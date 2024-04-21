import { Avalanche, BinTools } from 'avalanche';
import bip39 from 'bip39';
import bitcoin from 'bitcoinjs-lib';

// Initialize Avalanche client
const avalanche = new Avalanche('api.avax.network', 443, 'https');

// Create a Buffer utility for Avalanche
const bintools = BinTools.getInstance();

// Generate a mnemonic seed phrase
const mnemonic = bip39.generateMnemonic();

// Derive the master private key from the mnemonic
const seed = bip39.mnemonicToSeedSync(mnemonic);
const masterKey = bitcoin.bip32.fromSeed(seed);

// Get the XChain instance
const xchain = avalanche.XChain();

// Generate a new key pair
const keypair = xchain.keyChain().makeKey();

// Get the address from the key pair
const address = keypair.getAddressString();

// Log the wallet information
console.log(`AVAX Wallet generated:\n- Address : ${address}\n- Mnemonic : ${mnemonic}`);

// You can use browser APIs like localStorage or IndexedDB for storing mnemonic locally
// For example, saving mnemonic to localStorage
localStorage.setItem('mnemonic', mnemonic);
