import CategorySlider from "./CategorySlider";
import { useModalStore } from '../store/modalStore';
import ProductCol from "./ProductCol";
import { useState } from "react";

export default function SearchPop(){
    const isOpen = useModalStore((state) => state.isSearchOpen);
    const closeSearch = useModalStore((state) => state.closeSearch);
    const [query, setQuery] = useState('');
    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };
    const hasInput = query.trim().length > 0;
    return (
      <div className={`model tdur-search-pop ${isOpen ? 'is-open' : ''}`}>
        <div className="upper-strip-search">
          <div className="container">
            <div className="form-group-search">
              <div className="ico">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 19L14.657 14.657M14.657 14.657C15.3999 13.9141 15.9892 13.0321 16.3912 12.0615C16.7933 11.0909 17.0002 10.0506 17.0002 8.99996C17.0002 7.94936 16.7933 6.90905 16.3912 5.93842C15.9892 4.96779 15.3999 4.08585 14.657 3.34296C13.9141 2.60007 13.0322 2.01078 12.0615 1.60874C11.0909 1.20669 10.0506 0.999756 8.99999 0.999756C7.94939 0.999756 6.90908 1.20669 5.93845 1.60874C4.96782 2.01078 4.08588 2.60007 3.34299 3.34296C1.84266 4.84329 0.999786 6.87818 0.999786 8.99996C0.999786 11.1217 1.84266 13.1566 3.34299 14.657C4.84332 16.1573 6.87821 17.0002 8.99999 17.0002C11.1218 17.0002 13.1567 16.1573 14.657 14.657Z"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <input
                type="text"
                className="search-product-amjkr"
                placeholder="Search For..."
                value={query}
                onChange={handleInputChange}
              />
              <button type="button" onClick={closeSearch} className="close close-search-whktk">
                <svg
                  width={21}
                  height={21}
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.125 1.125L19.875 19.875M1.125 19.875L19.875 1.125"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="secsrch-moxqj">
            {!hasInput && <CategorySlider />}
            {hasInput && <div className="search-result-prdct-wrap">
                <div className="container">
                    <div className="search-result-prdct">
                        <ProductCol
                            imgSrc="/assets/images/product/product2.jpg"
                            proName="Black Formal Blazer For Men"
                            price="₹ 2,513.00"
                        />
                        <ProductCol
                            imgSrc="/assets/images/product/product2.jpg"
                            proName="Black Formal Blazer For Men"
                            price="₹ 2,513.00"
                        />
                        <ProductCol
                            imgSrc="/assets/images/product/product2.jpg"
                            proName="Black Formal Blazer For Men"
                            price="₹ 2,513.00"
                        />
                        <ProductCol
                            imgSrc="/assets/images/product/product2.jpg"
                            proName="Black Formal Blazer For Men"
                            price="₹ 2,513.00"
                        />
                        <ProductCol
                            imgSrc="/assets/images/product/product2.jpg"
                            proName="Black Formal Blazer For Men"
                            price="₹ 2,513.00"
                        />
                        <ProductCol
                            imgSrc="/assets/images/product/product2.jpg"
                            proName="Black Formal Blazer For Men"
                            price="₹ 2,513.00"
                        />
                    </div>
                </div>
            </div>}
        </div>
      </div>
    );
}