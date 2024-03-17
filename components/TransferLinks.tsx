import React, { ReactNode } from 'react';

interface TransferLinksProps {
    url: string; 
    name: string;
    logo: ReactNode;
  }

  const TransferLinks: React.FC<TransferLinksProps> = ({ url, logo, name }) => {
    return (
      <p className="flex flex-row items-center my-[15px] cursor-pointer">
        {logo}
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-[15px] ml-[6px]">{name}</a>    
      </p>
    );
  };
  
  export default TransferLinks;