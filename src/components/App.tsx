import { useEffect } from 'react';
import { TonConnectUIProvider, TonConnectButton, useTonAddress } from '@tonconnect/ui-react';
import './App.css';

function AppContent() {
  const walletAddress = useTonAddress();

  useEffect(() => {
    const tg = (window as any).Telegram?.WebApp;
    if (tg) {
      tg.ready();
      tg.expand();           // растягивает на весь экран
      tg.MainButton.setText('Торговать Подарками');
      tg.MainButton.show();
    }
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#00ff9d', fontSize: '28px' }}>🎁 NFT Gifts Exchange</h1>
      <p style={{ color: '#aaa' }}>Торгуй Telegram Gifts как на бирже • Только TON</p>

      <div style={{ margin: '30px 0' }}>
        <TonConnectButton />
      </div>

      {walletAddress && (
        <p style={{ color: '#00ff9d' }}>
          Подключён кошелёк: <br />
          {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
        </p>
      )}

      <div style={{ marginTop: '40px', padding: '20px', background: '#1a1a1a', borderRadius: '12px' }}>
        <h2>📊 График цены подарка (скоро TradingView)</h2>
        <p>Здесь будет живой график + стакан ордеров</p>
      </div>

      <p style={{ marginTop: '30px', fontSize: '14px', color: '#666' }}>
        Скоро: кейсы за Stars • Рулетки • Импорт/экспорт Gifts • Твои AI-стратегии и мемтокены
      </p>
    </div>
  );
}

export default function App() {
  return (
    <TonConnectUIProvider manifestUrl="https://reactjs-template-qjkv.vercel.app/tonconnect-manifest.json">
      <AppContent />
    </TonConnectUIProvider>
  );
}
