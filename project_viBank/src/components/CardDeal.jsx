import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        پیدا کردن یک پیشنهاد کارت بهتر <br className="sm:block hidden" /> در چند مرحله ساده.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      بهترین سهم را با تحلیل دقیق و آگاهی از بازار انتخاب کنید! معیارهای مالی، رشد صنعت و ابزارهای تحلیلی را بشناسید تا در سرمایه‌گذاری موفق باشید.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
