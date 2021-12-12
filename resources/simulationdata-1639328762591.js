function initData() {
  jimData.datamasters["chat"] = [
    {
      "id": 1,
      "datamaster": "chat",
      "userdata": {
        "defe27de-257e-4b02-955b-e0c0bc27051a": "sample text",
        "e153f2d6-61a8-40e7-9330-47f02569b1fd": "sample text"
      }
    },
    {
      "id": 2,
      "datamaster": "chat",
      "userdata": {
        "defe27de-257e-4b02-955b-e0c0bc27051a": "sample text",
        "e153f2d6-61a8-40e7-9330-47f02569b1fd": "sample text"
      }
    },
    {
      "id": 3,
      "datamaster": "chat",
      "userdata": {
        "defe27de-257e-4b02-955b-e0c0bc27051a": "sample text",
        "e153f2d6-61a8-40e7-9330-47f02569b1fd": "sample text"
      }
    }
  ];

  jimData.datamasters["users"] = [
    {
      "id": 1,
      "datamaster": "users",
      "userdata": {
        "37d93514-ce7a-4d15-853a-c89a38c375e6": "",
        "260d4aeb-df04-4354-a01d-e6a03da6bae5": ""
      }
    },
    {
      "id": 2,
      "datamaster": "users",
      "userdata": {
        "37d93514-ce7a-4d15-853a-c89a38c375e6": "",
        "260d4aeb-df04-4354-a01d-e6a03da6bae5": ""
      }
    },
    {
      "id": 3,
      "datamaster": "users",
      "userdata": {
        "37d93514-ce7a-4d15-853a-c89a38c375e6": "",
        "260d4aeb-df04-4354-a01d-e6a03da6bae5": ""
      }
    }
  ];
  jimData.datamasters["users"].category = {
    "fc88e5ba-042f-46ad-81e7-9fb30a2ee617": ["Value 1","Value 2","Value 3"],
    "4b22bde4-7ec6-48b2-952d-3b0c2daa407f": ["Value 1","Value 2","Value 3"]
  };

  jimData.isInitialized = true;
}