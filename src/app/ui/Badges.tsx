import clsx from 'clsx';

type Props = {
  expiration: boolean;
};

const ExpirationBadge: React.FC<Props> = ({ expiration }) => {
  return (
    <span
      className={clsx(
        'rounded-full border-4 border-black bg-black px-3 text-4xl font-bold text-white absolute top-72 left-44',
        { hidden: !expiration },
      )}
    >
      EXPIRADO
    </span>
  );
};

export default ExpirationBadge;
