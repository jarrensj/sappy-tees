import Link from "next/link";

const Contact = () => {
  return (
    <p className="flex justify-center items-center mt-16">
      <Link href="mailto:stormr@sappyseals.com" className="text-yellow-500 hover:text-white">
        want to be on here?
      </Link>
    </p>
  );
};

export default Contact;
