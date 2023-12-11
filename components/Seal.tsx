import Image from "next/image";
import styles from "./Seal.module.css";

const Seal = () => {
  return (
    <div className={styles.imageContainer}>
      <Image src="https://ipfs.io/ipfs/QmUs4WQP47QKGwzPLjVMmhqTbspJfAC344abDEE2UT52HF/6024.png" alt="sappy seal" width={200} height={200} />
      <Image src="/sealTeeOverlay.png" alt="overlay image" layout="fill" objectFit="cover" />
    </div>
  )
}

export default Seal