import React from "react";
import PropTypes from "prop-types";

const CommentCard = ({ comment, author }) => (
  <div style={styles.card}>
    <p>{comment}</p>
    <p style={styles.authorTag}>- {author}</p>
  </div>
);

CommentCard.propTypes = {
  comment: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

const styles = {
  card: {
    margin: "24px",
    padding: "2px 24px",
    fontFamily: "Palatino",
    fontStyle: "italic",
    backgroundColor: "#f5f5f5",
    height: "80px",
    position: "relative",
    border: "1px solid #767676",
    borderRadius: "8px"
  },
  authorTag: {
    position: "absolute",
    bottom: "0",
    right: "12px"
  }
};

export default CommentCard;
