import { LuUser } from 'react-icons/lu';
import Image from "next/image";
async function UserIcon() {
  const profileImage = ''
  if (profileImage) {
    return (
      <Image src={profileImage} className='w-6 h-6 rounded-full object-cover' alt={'profileImage'} />
    );
  }
  return <LuUser className='w-6 h-6 bg-primary rounded-full text-white' />;
}
export default UserIcon;
