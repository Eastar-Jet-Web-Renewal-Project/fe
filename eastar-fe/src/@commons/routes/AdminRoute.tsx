import { Route } from "react-router-dom";

export const adminRouter = (
  <Route path="/admin">
    <Route path="manage-flight" element={"hello"} />
  </Route>
);
