import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./views/Landing";
import TicketsScreen from "./views/TicketsScreen";

export const AppRouter = () => {
  return (
    <React.Fragment>
      <Routes>
        {/*Routes */}
        <Route>
          <Route path="/tickets" element={<TicketsScreen />} />
          <Route path="*" element={<Landing />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
};
