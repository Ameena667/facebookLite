import React, { useState } from "react";
import { Button, Input } from "antd";
import {
  LikeOutlined,
  EditOutlined,
  DeleteOutlined,
  CloseOutlined,
  CheckOutlined,
} from "@ant-design/icons";

//all UI and parent components functions access to modify feed
const DisplayFeed = (props) => {
  const deleteFeed = props.deleteFeed;
  //const editFeed = props.editFeed;
  const likesIncrement = props.likesIncrement;
  const saveEditedFeed = props.saveEditedFeed;

  const [editIndex, setEditIndex] = useState(-1);
  const [tempEditFeed, setTempEditFeed] = useState("");

  const localEditChanges = (ind, des) => {
    setEditIndex(ind);
    setTempEditFeed(des);
  };
  const saveTempEditFeed = (e) => {
    setTempEditFeed(e.target.value);
  };
  const onSave = (index) => {
    saveEditedFeed(index, tempEditFeed);
    setEditIndex(-1);
  };
  //UI for displaying feed
  return (
    <div className="wFeed">
      <ul>
        {props.newsFeeds.map((feed, index) => {
          //console.log(feed);
          return (
            <div>
              {index === editIndex ? (
                <>
                  <div id="displayFeed">
                    <Input
                      value={tempEditFeed}
                      onChange={saveTempEditFeed}
                      style={{ width: "67%", borderBottom: "1px solid green" }}
                      bordered={false}
                    />
                    <Button
                      type="default"
                      onClick={() => onSave(index)}
                      shape="round"
                      icon={<CheckOutlined />}
                      style={{ color: "green", borderColor: "green" }}
                    >
                      save
                    </Button>
                    <Button
                      type="default"
                      onClick={() => setEditIndex(-1)}
                      shape="round"
                      icon={<CloseOutlined />}
                    >
                      cancel
                    </Button>
                  </div>
                  <br />
                </>
              ) : (
                <p>{feed.description}</p>
              )}

              <div id="mFeed">
                {" "}
                {feed.date}{" "}
                <Button
                  type="primary"
                  onClick={() => likesIncrement(index)}
                  shape="circle"
                >
                  <LikeOutlined />
                </Button>{" "}
                : {feed.likes}{" "}
                <Button
                  type="default"
                  onClick={() => localEditChanges(index, feed.description)}
                  shape="round"
                  icon={<EditOutlined />}
                  style={{ color: "blue", borderColor: "blue" }}
                >
                  Edit
                </Button>
                <Button
                  type="default"
                  danger
                  onClick={() => deleteFeed(index)}
                  shape="round"
                  icon={<DeleteOutlined />}
                >
                  Delete
                </Button>
              </div>
              <hr />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default DisplayFeed;
