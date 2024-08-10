import {
  ALERT_TEXT,
  BTN_TEXT,
  CATEGORY_TEXT,
  categoryMapping,
  TABLE_TEXT,
} from '@/app/constants/admin';
import { callGet } from '@/app/utils/callApi';
import { useState } from 'react';
import Button from '../../common/Button';

export default function ProdcutsCategory() {
  const [category, setCategory] = useState('');
  const [result, setResult] = useState<{ items: ProductProps[] }>({
    items: [],
  });

  const handleSetRegion = async () => {
    if (!category) {
      alert(ALERT_TEXT[0]);
      return;
    }
    try {
      const data = await callGet(
        `/api/admin/products/${categoryMapping[category]}`,
      );
      console.log(data);
      setResult({ items: data.result });
    } catch (error) {
      console.error(error);
      setResult({ items: [] });
    }
  };

  const renderTable = () => {
    return (
      <table className="admin-table">
        <thead>
          <tr>
            <th className="admin-table-th">{TABLE_TEXT[0]}</th>
            <th className="admin-table-th">{TABLE_TEXT[8]}</th>
            <th className="admin-table-th">{TABLE_TEXT[1]}</th>
            <th className="admin-table-th">{TABLE_TEXT[9]}</th>
            <th className="admin-table-th">{TABLE_TEXT[5]}</th>
          </tr>
        </thead>
        <tbody>
          {result.items.map((item: ProductProps) => (
            <tr key={item.id}>
              <td className="admin-table-th">{item.id}</td>
              <td className="admin-table-th">{item.category}</td>
              <td className="admin-table-th">{item.name}</td>
              <td className="admin-table-th">{item.unit}</td>
              <td className="admin-table-th">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="flex flex-col gap-4 border-2 p-8">
      <div className="flex w-full gap-12">
        <select
          className="border-2 px-2"
          name="region"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        >
          <option value={CATEGORY_TEXT[0]}>{CATEGORY_TEXT[0]}</option>
          <option value={CATEGORY_TEXT[1]}>{CATEGORY_TEXT[1]}</option>
          <option value={CATEGORY_TEXT[2]}>{CATEGORY_TEXT[2]}</option>
          <option value={CATEGORY_TEXT[3]}>{CATEGORY_TEXT[3]}</option>
        </select>

        <Button
          className="admin-btn"
          buttonText={BTN_TEXT[0]}
          type="default"
          onClickHandler={handleSetRegion}
        />
      </div>
      <div className="w-full">{renderTable()}</div>
    </div>
  );
}