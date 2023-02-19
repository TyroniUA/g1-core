import React, { Suspense } from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Main from "../pages/main";
import NotFound from "../pages/notFound.js";



export default function AppRoutes() {
  return (
    <>
      <Suspense
        fallback={
          <Skeleton
            count={1}
            className='fallback-main'
          />
        }>
        <Routes>
          <Route
            exact
            path='/'
            element={<Main />}
          />
          <Route path='*'
            element={<NotFound />}>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
