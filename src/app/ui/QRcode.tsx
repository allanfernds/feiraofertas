import QRCode from 'react-qr-code';

type Props = {
  url: string;
};

const CustomQRcode: React.FC<Props> = ({ url }) => {
  return (
    <div style={{ height: 'auto', margin: '0 auto', maxWidth: 64, width: '100%' }}>
      <QRCode
        size={256}
        style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
        value={`feiraofertas.com.br/${url}`}
        viewBox={`0 0 256 256`}
      />
    </div>
  );
};

export default CustomQRcode;
