import axios from 'axios';
import { useEffect, useState } from 'react';

const Search = ({ category, onSelect }) => {
  const [studyProducts, setStudyProducts] = useState([]);

  const handleAdd = studyProductId => {
    const selectedProduct = studyProducts.find(
      product => product.studyProductId === studyProductId
    );
    if (selectedProduct) {
      onSelect({
        studyProductId: selectedProduct.studyProductId,
        category: selectedProduct.category,
        name: selectedProduct.name
      });
    }
  };

  const request = () => {
    axios
      .get(`http://jsmtmt.shop/study-products/cond?category=${category}`)
      .then(response => {
        setStudyProducts(response.data.response);
      })
      .catch(reason => {
        console.log('reason', reason);
      });
  };

  useEffect(() => {
    request();
  }, [category]);

  return (
    <>
      {studyProducts.map(studyProduct => (
        <div key={studyProduct.studyProductId}>
          <div>식별자: {studyProduct.studyProductId}</div>
          <div>카테고리: {studyProduct.category}</div>
          <div>이름: {studyProduct.name}</div>
          <button onClick={() => handleAdd(studyProduct.studyProductId)}>
            추가
          </button>
        </div>
      ))}
    </>
  );
};

export default Search;
