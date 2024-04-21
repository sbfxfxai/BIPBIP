import { BIP32Factory } from 'bip32';
import ecc from 'tiny-secp256k1';
import bip39 from 'bip39';
import bitcoin from 'bitcoinjs-lib';

// Set the Bitcoin network
const network = bitcoin.networks.bitcoin;

// Define the derivation path
const path = `m/44'/0'/0'/0`;

// Generate a mnemonic seed phrase
const mnemonic = bip39.generateMnemonic();

// Derive the master private key from the mnemonic
const seed = bip39.mnemonicToSeedSync(mnemonic);
const root = BIP32Factory(ecc).fromSeed(seed, network);

// Derive the account and node keys
const account = root.derivePath(path);
const node = account.derive(0).derive(0);

// Derive the Bitcoin address
const btcAddress = bitcoin.payments.p2pkh({
    pubkey: node.publicKey,
    network: network,
}).address;

console.log(`Wallet generated:\n- Address : ${btcAddress}\n- Key : ${node.toWIF()}\n- Mnemonic : ${mnemonic}`);

// Export variables or functions if needed
export { btcAddress, mnemonic };
