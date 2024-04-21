// Import necessary modules
import { generateAVAXWallet } from './avax'; // Assuming you have a file named avax.js for AVAX wallet generation
import { generateBTCWallet } from './btc'; // Assuming you have a file named btc.js for BTC wallet generation

// Function to display wallet information
function displayWalletInfo(walletInfo) {
    console.log('Wallet Generated:');
    console.log(`- Address: ${walletInfo.address}`);
    console.log(`- Key: ${walletInfo.key}`);
    console.log(`- Mnemonic: ${walletInfo.mnemonic}`);
}

// Event listeners for generating AVAX and BTC wallets
document.getElementById('avaxButton').addEventListener('click', async function () {
    try {
        const avaxWalletInfo = await generateAVAXWallet();
        displayWalletInfo(avaxWalletInfo);
    } catch (error) {
        console.error('Error generating AVAX wallet:', error);
        alert('Error generating AVAX wallet. Please try again later.');
    }
});

document.getElementById('btcButton').addEventListener('click', async function () {
    try {
        const btcWalletInfo = await generateBTCWallet();
        displayWalletInfo(btcWalletInfo);
    } catch (error) {
        console.error('Error generating BTC wallet:', error);
        alert('Error generating BTC wallet. Please try again later.');
    }
});
