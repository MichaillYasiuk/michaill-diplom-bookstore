import Spinner from "react-spinners/ClipLoader";
import { CSSProperties, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DetailsBook, SimilarBooks, Subscription, Error } from "components";
import { useAppDispatch, useAppSelector, getDetailsBook, fetchBookByDetails } from "store";
import { Color } from "ui";
import { StyledDetailsBookPage, StyledError } from "./styles";

const override: CSSProperties = {
  margin: "200px auto",
};

export const DetailsBookPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { isLoading, error, bookDetails, booksSimilar } = useAppSelector(getDetailsBook);

  useEffect(() => {
    id && dispatch(fetchBookByDetails(id));
  }, [dispatch, id]);

  return (
    <StyledDetailsBookPage>
      {isLoading && (
        <Spinner color={Color.PRIMARY} loading={isLoading} cssOverride={override} size={60} />
      )}

      {error && (
        <StyledError>
          <Error value={error} />
        </StyledError>
      )}

      {!isLoading && !error && (
        <>
          <DetailsBook bookDetails={bookDetails} />
          <Subscription />
          <SimilarBooks booksSimilar={booksSimilar} />
        </>
      )}
    </StyledDetailsBookPage>
  );
};
