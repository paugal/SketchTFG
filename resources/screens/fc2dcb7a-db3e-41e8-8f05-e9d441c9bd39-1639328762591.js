jQuery("#simulation")
  .on("click", ".s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Home_Indicator svg" ],
                    "attributes": {
                      "overlay": "none"
                    }
                  },{
                    "target": [ "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Home_Indicator" ],
                    "attributes": {
                      "opacity": "0.2"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_1" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "265"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_48")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Image_48 svg" ],
                    "attributes": {
                      "overlay": "#007AFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Label_1 span" ],
                    "attributes": {
                      "color": "#007AFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Image_51 svg",
                  "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Image_49 svg",
                  "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Image_50 svg",
                  "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Image_52 svg" ],
                    "attributes": {
                      "overlay": "#8A8A8F"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Label_11 span",
                  "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Label_4 span",
                  "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Label_8 span",
                  "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Label_2 span" ],
                    "attributes": {
                      "color": "#8A8A8F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_49")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Image_49 svg" ],
                    "attributes": {
                      "overlay": "#007AFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Label_2 span" ],
                    "attributes": {
                      "color": "#007AFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Image_51 svg",
                  "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Image_48 svg",
                  "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Image_50 svg",
                  "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Image_52 svg" ],
                    "attributes": {
                      "overlay": "#8A8A8F"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Label_11 span",
                  "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Label_4 span",
                  "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Label_8 span",
                  "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Label_1 span" ],
                    "attributes": {
                      "color": "#8A8A8F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_50")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Image_50 svg" ],
                    "attributes": {
                      "overlay": "#007AFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Label_4 span" ],
                    "attributes": {
                      "color": "#007AFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Image_51 svg",
                  "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Image_49 svg",
                  "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Image_48 svg",
                  "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Image_52 svg" ],
                    "attributes": {
                      "overlay": "#8A8A8F"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Label_11 span",
                  "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Label_8 span",
                  "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Label_1 span",
                  "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Label_2 span" ],
                    "attributes": {
                      "color": "#8A8A8F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_51")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Image_51 svg" ],
                    "attributes": {
                      "overlay": "#007AFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Label_8 span" ],
                    "attributes": {
                      "color": "#007AFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Image_49 svg",
                  "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Image_48 svg",
                  "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Image_50 svg",
                  "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Image_52 svg" ],
                    "attributes": {
                      "overlay": "#8A8A8F"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Label_11 span",
                  "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Label_4 span",
                  "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Label_1 span",
                  "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Label_2 span" ],
                    "attributes": {
                      "color": "#8A8A8F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_52")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Image_52 svg" ],
                    "attributes": {
                      "overlay": "#007AFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Label_11 span" ],
                    "attributes": {
                      "color": "#007AFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Image_51 svg",
                  "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Image_49 svg",
                  "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Image_48 svg",
                  "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Image_50 svg" ],
                    "attributes": {
                      "overlay": "#8A8A8F"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Label_4 span",
                  "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Label_8 span",
                  "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Label_1 span",
                  "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Label_2 span" ],
                    "attributes": {
                      "color": "#8A8A8F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Modal")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_1" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "-265"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Home_Indicator svg" ],
                    "attributes": {
                      "overlay": "none"
                    }
                  },{
                    "target": [ "#s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 #s-Home_Indicator" ],
                    "attributes": {
                      "opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-fc2dcb7a-db3e-41e8-8f05-e9d441c9bd39 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_2" ],
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ {
                        "action": "jimSystemTime"
                      },"0","5" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });