import { Metadata } from 'next';
import { Suspense } from 'react';
import Table from '@/app/ui/customers/table';
import { fetchFilteredCustomers } from '@/app/lib/data';
import { CustomersTableSkeleton } from '@/app/ui/skeletons';
 
export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page({
  searchParams,
  }: {
    searchParams?: {
      query?: string;
    };
  }) {
  
  const query = searchParams?.query || '';
  const customers = await fetchFilteredCustomers(query);

  return (
    <div className="w-full">
      <Suspense key={query} fallback={<CustomersTableSkeleton />}>
        <Table customers={customers} />
      </Suspense>
    </div>
  );
}