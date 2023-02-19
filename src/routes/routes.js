import React, { Suspense } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";




export default function Routes() {
    return (
      <>
        <Suspense
          fallback={
            <Skeleton
              count={ 1 }
              className='fallback-main'
            />
          }>
          <Switch>
            <Route path='*'>
              <Redirect to={ "/" } />
            </Route>
          </Switch>
        </Suspense>
      </>
    );
}
