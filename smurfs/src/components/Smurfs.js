import React, { useEffect } from "react";
import "./App.css";
import styled from "styled-components";

import { getSmurf } from "../actions";
import { connect } from "react-redux";
import smurfImage from "../smurf.png";

const SmurfHolder = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const SmurfCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: solid 1px dodgerblue;
  margin: 10px 8%;
  width: 10%;
  img {
    width: 100%;
    border-bottom: solid 2px dodgerblue;
    background: dodgerblue;
  }
`;
const DetailHolder = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
const SmurfName = styled.h2`
  margin: 10px 0;
  padding-bottom: 10px;
  border-bottom: solid 1px dodgerblue;
  width: 100%;
`;
const SmurfDetail = styled.h3`
  margin: 5px auto;
`;

const Smurfs = ({ getSmurf, smurfs, isFetching, error }) => {
  useEffect(() => {
    getSmurf();
  }, [getSmurf]);

  if (isFetching) {
    return <h3>Fetching smurfs!</h3>;
  }

  return (
    <SmurfHolder>
      {smurfs.map(smurf => {
        return (
          <SmurfCard>
            <img src={smurfImage} />
            <DetailHolder>
              <SmurfName>{smurf.name}</SmurfName>
              <SmurfDetail>Age: {smurf.age}</SmurfDetail>
              <SmurfDetail>Height: {smurf.height}</SmurfDetail>
            </DetailHolder>
          </SmurfCard>
        );
      })}
    </SmurfHolder>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getSmurf }
)(Smurfs);
