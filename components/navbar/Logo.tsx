import Link from 'next/link';
import { LuTent } from 'react-icons/lu';
import { Button } from '@/components/ui/button';

function Logo() {
  return (
    <Button size='icon' asChild>
      <Link href='/nextjs-course-home-away/02-home-away-project/public'>
        <LuTent className='w-6 h-6' />
      </Link>
    </Button>
  );
}
export default Logo;
