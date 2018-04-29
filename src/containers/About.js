import React from "react";
import { withRouteData } from "react-static";
import Markdown from "react-markdown";
//

export default withRouteData(({ about }) => {
  return (
    <div>
      <Markdown source={about.content} escapeHtml={false} />
    </div>
  );
});
