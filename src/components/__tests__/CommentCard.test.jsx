import React from "react";
import { render } from "react-testing-library";
import CommentCard from "../CommentCard";

describe("Comment Card", () => {
  test("it renders the comment and the author", () => {
    const props = {
      comment: "React Testing Library is great",
      author: "Luke Ghenco"
    };

    const { getByText } = render(<CommentCard {...props} />);

    const commentNode = getByText(props.comment);
    const authorTagNode = getByText(`- ${props.author}`);

    expect(commentNode).toBeDefined();
    expect(authorTagNode).toBeDefined();
  });
});
