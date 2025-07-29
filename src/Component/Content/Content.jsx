import React, { useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchContent,
  incrementPage,
  selectContent,
  selectContentStatus,
} from "../../features/contentSlice";
import { ContentContainer } from "./Content.styles";
import ProductCard from "../ProductCard/ProductCard";

const Content = () => {
  const dispatch = useDispatch();
  const content = useSelector(selectContent);
  const status = useSelector(selectContentStatus);
  const loader = useRef(null);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchContent());
    }
  }, [dispatch, status]);

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

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);

    return () => {
      if (loader.current) observer.unobserve(loader.current);
    };
  }, [handleObserver]);

  return (
    <>
      <ContentContainer>
        {content.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </ContentContainer>
      <div ref={loader}>
        {status === "loading" && <p style={{ textAlign: "center" }}>Loading more...</p>}
      </div>
    </>
  );
};

export default Content;
