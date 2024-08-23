'use client';

import { useEffect, useState } from 'react';
import { ALERT_TEXT, OPTION_TEXT } from '@/app/constants/admin';
import ClientsName from '../clients/ClientsName';
import ClientsRegion from '../clients/ClientsRegion';
import { useUser } from '@/app/hooks/useUser';
import { useRouter } from 'next/navigation';

export default function ClientContainer() {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user && user.result && user.result.is_admin === false) {
      alert(ALERT_TEXT[8]);
      router.push('/');
    }
  }, [user, router]);

  const [state, setState] = useState('clientsName');

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setState(value);
  };

  const renderComponent = () => {
    switch (state) {
      case 'clientsName':
        return <ClientsName />;
      case 'clientsRegion':
        return <ClientsRegion />;
      default:
        return null;
    }
  };

  return (
    <div className="p-8 border border-gray-2">
      <div className="flex items-center gap-4 h-16 border-2 px-4 mb-8">
        <p>{OPTION_TEXT[9]}</p>
        <select
          className="border-2"
          onChange={handleSelectChange}
          value={state}
        >
          <option value="clientsName">{OPTION_TEXT[0]}</option>
          <option value="clientsRegion">{OPTION_TEXT[8]}</option>
        </select>
      </div>

      {renderComponent()}
    </div>
  );
}
