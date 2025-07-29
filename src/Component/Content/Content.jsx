import React, { useEffect, useRef, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchContent,
  incrementPage,
  selectContent,
  selectContentStatus,
} from "../../features/contentSlice";
import {
  selectPricingOptions,
  selectKeyword,
} from "../../features/filterSlice";
import { ContentContainer } from "./Content.styles";
import ProductCard from "../ProductCard/ProductCard";

const Content = () => {
  const dispatch = useDispatch();
  const content = useSelector(selectContent);
  const status = useSelector(selectContentStatus);
  const pricingOptions = useSelector(selectPricingOptions);
  const keyword = useSelector(selectKeyword);
  const loader = useRef(null);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchContent());
    }
  }, [dispatch, status]);

  
  // Handle loading more content when the user scrolls to the bottom
  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting && status !== "loading") {
        dispatch(incrementPage());
        dispatch(fetchContent());
      }
    },
    [dispatch, status]
  );

  // Intersection Observer to load more content when scrolled to the bottom
  useEffect(() => {
    const option = {
      root: null,
      threshold: 1.0,
    };
    const currentLoader = loader.current;
    const observer = new IntersectionObserver(handleObserver, option);
    if (currentLoader) observer.observe(currentLoader);

    return () => {
      if (currentLoader) observer.unobserve(currentLoader);
    };
  }, [handleObserver]);



  // Filter content based on pricing options and keyword
  const filteredContent = useMemo(() => {
    return content.filter((item) => {
      const matchesPricing =
        pricingOptions.length === 0 || pricingOptions.includes(item.pricingOption);

      const matchesKeyword =
        keyword.trim() === "" ||
        item.creator.toLowerCase().includes(keyword.toLowerCase()) ||
        item.title.toLowerCase().includes(keyword.toLowerCase());

      return matchesPricing && matchesKeyword;
    });
  }, [content, pricingOptions, keyword]);

  return (
    <>
      <ContentContainer>
        {filteredContent.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </ContentContainer>
      <div ref={loader}></div>
    </>
  );
};

export default Content;