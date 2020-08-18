import React from "react";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>Filter</h2>
      </div>
      <hr />
      <ChannelRow
        image="//yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="Clever Programmer"
        verified
        subs="750k"
        noOfVideos={413}
        description="You can find Awesome Programming contenet here"
      />
      <hr />
      <VideoRow
        views="1.4M"
        subs="413k"
        description="Do you want a Free one hour training...Check this video"
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="🔴 Lets build a webapp using ReactJs 🔴"
        image="https://i.ytimg.com/vi/VqgTr-nd7Cg/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAyJSsjbN9PboryMfJVu9axSqvbtw"
      />
      <VideoRow
        views="1.4M"
        subs="413k"
        description="Do you want a Free one hour training...Check this video"
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="🔴 Lets build a webapp using ReactJs 🔴"
        image="https://i.ytimg.com/vi/VqgTr-nd7Cg/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAyJSsjbN9PboryMfJVu9axSqvbtw"
      />
      <VideoRow
        views="1.4M"
        subs="413k"
        description="Do you want a Free one hour training...Check this video"
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="🔴 Lets build a webapp using ReactJs 🔴"
        image="https://i.ytimg.com/vi/VqgTr-nd7Cg/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAyJSsjbN9PboryMfJVu9axSqvbtw"
      />
      <VideoRow
        views="1.4M"
        subs="413k"
        description="Do you want a Free one hour training...Check this video"
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="🔴 Lets build a webapp using ReactJs 🔴"
        image="https://i.ytimg.com/vi/bwHR0ZcGhZ4/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCqI--3EQhXi6ybBtP4viw2_zR_VQ"
      />
      <VideoRow
        views="1.4M"
        subs="413k"
        description="Do you want a Free one hour training...Check this video"
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="🔴 Lets build a webapp using ReactJs 🔴"
        image="https://i.ytimg.com/vi/VqgTr-nd7Cg/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAyJSsjbN9PboryMfJVu9axSqvbtw"
      />
      <VideoRow
        views="1.4M"
        subs="413k"
        description="Do you want a Free one hour training...Check this video"
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="🔴 Lets build a webapp using ReactJs 🔴"
        image="https://i.ytimg.com/vi/VqgTr-nd7Cg/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAyJSsjbN9PboryMfJVu9axSqvbtw"
      />
      <VideoRow
        views="1.4M"
        subs="413k"
        description="Do you want a Free one hour training...Check this video"
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="🔴 Lets build a webapp using ReactJs 🔴"
        image="https://i.ytimg.com/vi/VqgTr-nd7Cg/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAyJSsjbN9PboryMfJVu9axSqvbtw"
      />
      <VideoRow
        views="1.4M"
        subs="413k"
        description="Do you want a Free one hour training...Check this video"
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="🔴 Lets build a webapp using ReactJs 🔴"
        image="https://i.ytimg.com/vi/VqgTr-nd7Cg/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAyJSsjbN9PboryMfJVu9axSqvbtw"
      />
    </div>
  );
}

export default SearchPage;
