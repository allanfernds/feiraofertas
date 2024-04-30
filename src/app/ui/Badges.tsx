import clsx from "clsx"

type Props = {
  expiration: boolean;
};

const ExpirationBadge: React.FC<Props> = ({ expiration }) => {
  return (
    <span className={clsx("border-4 border-black text-white bg-black rounded-md font-bold rotate-6 text-4xl px-1 ",
    { "hidden": !expiration }
    )}>
    EXPIRADO
  </span> 
  )
}

export default ExpirationBadge