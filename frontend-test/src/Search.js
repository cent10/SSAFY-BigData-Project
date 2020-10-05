import React from "react";

import SearchVideo from "./components/SearchVideo";
import SearchClass from "./components/SearchClass";
import SearchCoaches from "./components/SearchCoaches";

import "./static/css/Search.css";

function Main({ user, history, match }) {
  const SearchVideo2 = SearchVideo;
  const SearchClass2 = SearchClass;
  const SearchCoaches2 = SearchCoaches;

  return (
    <div className="search">
      {/* title */}
      <h1 className="search__title">
        {match.params.keyword}(으)로 검색한 결과{" "}
      </h1>
      {/* Health Video */}
      <SearchVideo2
        title={`${match.params.keyword}(으)로 검색한 운동비디오 >`}
        history={history}
        keyword={match.params.keyword}
      />

      {/* Health Class */}
      <SearchClass2
        title={`${match.params.keyword}(으)로 검색한 클래스 >`}
        history={history}
        keyword={match.params.keyword}
      />
      {/* Coaches */}
      <SearchCoaches2
        title={`${match.params.keyword}(으)로 검색한 코치 >`}
        keyword={match.params.keyword}
      />
    </div>
  );
}

export default Main;
