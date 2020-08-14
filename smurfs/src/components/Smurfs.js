import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSmurfInfo } from "../store"

const Smurfs = (props) => {
    useEffect(() => {
        props.fetchSmurfInfo();
    },[]);

  return (
    <section>
      <h2>Smurfs Village!</h2>
      {props.isLoading ? <h4>Loading Smurfs...</h4> : null}
      {props.error ? (<p style={{ color: "red" }}>OOPS! Error loading!</p>) : null}
      {props.smurfInfo.length > 0 ? (
        <div className='factContainer'>
          {props.smurfInfo.map((smurfInfo) => (
            <ul className='smurflist'>
              <li style={{ listStyle: "none" }}>My name is: {smurfInfo.name} About me:{smurfInfo.age}{smurfInfo.height}</li>
            </ul>
          ))}
        </div>
      ) : null}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfInfo: state.smurfInfo,
    isLoading: state.isLoading,
    error: state.error,
  };
};

export default connect(mapStateToProps, {fetchSmurfInfo})(Smurfs);
