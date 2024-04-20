import Image from "next/image";
import Link from "next/link";

const SocialLink = ({ href, icon, text }) => {
  return (
    <Link
      href={href}
      passHref
      className="flex gap-[3px] items-center text-[#0A142F] font-[Inter,sans-serif] text-base lg:text-[24px] italic font-normal leading-normal"
    >
      <Image src={icon} alt="Social Icon" />
      {text}
    </Link>
  );
};

export default SocialLink;
