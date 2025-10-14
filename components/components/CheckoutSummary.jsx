import Link from "next/link";

export default function CheckoutSummary({ classname, summaryItems = [], totalAmount, button }) {
  return (
      <div className={`checkout-tbl-xiuh ${classname}`}>
        <div className="ttl-tbl-bkfg">Summary</div>
        <ul className="pric-ing-gegc">
          {summaryItems.map((item, index) => (
            <li key={index}>
                <p>{item.label}</p>
                <span className={item.highlight ? item.highlight : ""}>{item.value}</span>
            </li>
          ))}
        </ul>
        <div className="ttl-amnt-tbl">
          <p className="ttl-txt">Total Amount </p>
          <p className="ttl-prc-txt">{totalAmount}</p>
        </div>
        <Link href="/" className="btn black_fill w-100 btn-tbl-prc">
          {button}
        </Link>
        <Link href="/" className="btn gray_fill w-100 btn-tbl-prc">
          Continue Shopping
        </Link>
      </div>
  );
}
