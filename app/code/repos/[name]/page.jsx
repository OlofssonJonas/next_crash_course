import { Suspense } from 'react';
import Link from 'next/link';
import RepoDirs from '@/app/components/RepoDirs';

const RepoPage = ({ params: { name } }) => {
  return (
    <div className='card'>
      <Link href='/code/repos' className='btn btn-back'>
        Back To Repositories
      </Link>
        <RepoDirs />
  
    </div>
  );
};
export default RepoPage;