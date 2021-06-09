import React, { useState } from "react";
import { Button, Input } from "antd";
import { SendOutlined } from "@ant-design/icons";
const AddFeed = (props) => {
  //UI for adding new feed
  const addFeed = props.addFeed;
  const [tempFeed, setTempFeed] = useState("");
  return (
    <div>
      <Input
        width="100"
        placeholder="Enter News Feed..."
        onChange={(e) => setTempFeed(e.target.value)}
        style={{ width: "70%" }}
      />

      <Button
        type="primary"
        onClick={() => addFeed(tempFeed)}
        icon={<SendOutlined />}
      >
        Send
      </Button>
    </div>
  );
};

export default AddFeed;
