
var ps_button = document.getElementById('pow-start');
var rightconnection = false;
var datapoints1 = [];

jsPlumb.ready(function () {

    var instance,

        discs = [],

        addDisc = function (evt) {
            var info = createDisc();
            var e = prepare(info.id);
            instance.draggable(info.id);
            discs.push(info.id);
            evt.stopPropagation();
            evt.preventDefault();
        },

        reset = function (e) {
            for (var i = 0; i < discs.length; i++) {
                var d = document.getElementById(discs[i]);
                if (d) d.parentNode.removeChild(d);
            }
            discs = [];
            e.stopPropagation();
            e.preventDefault();
        },

        initAnimation = function (elId) {
            var el = document.getElementById(elId);

            instance.on(el, 'click', function (e, ui) {
                if (el.className.indexOf("jsPlumb_dragged") > -1) {
                    jsPlumb.removeClass(elId, "jsPlumb_dragged");
                    return;
                }

            });
        },

        // notice there are no dragOptions specified here, which is different from the
        // draggableConnectors2 demo.  all connections on this page are therefore
        // implicitly in the default scope.
        endpoint1 = {
            anchor: [0.9, -0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "blue" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }

        },

        prepare1 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint1);
        },
        endpoint2 = {
            anchor: [0.6, -0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "blue" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare2 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint2);
        },
        //  endpoint3 = {
        //     anchor: [0.5, 0.5, 0, -1],
        //     connectorStyle: { strokeWidth : 4, stroke: "green" },
        //     endpointsOnTop: true,
        //     isSource: true,
        //     maxConnections: 10,
        //     isTarget: true,
        //     dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        // },

        // prepare3 = function (elId) {
        //     initAnimation(elId);

        //     return instance.addEndpoint(elId, endpoint3);
        // },
        //  endpoint4 = {
        //     anchor: [0.5, 0.5, 0, -1],
        //     connectorStyle: { strokeWidth : 4, stroke: "green" },
        //     endpointsOnTop: true,
        //     isSource: true,
        //     maxConnections: 10,
        //     isTarget: true,
        //     dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        // },

        // prepare4 = function (elId) {
        //     initAnimation(elId);

        //     return instance.addEndpoint(elId, endpoint4);
        // },
        endpoint5 = {
            anchor: [-1.2, 2.5, 0, 1],
            connectorStyle: { strokeWidth: 4, stroke: "blue" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare5 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint5);
        },
        endpoint6 = {
            anchor: [-1.2, 2.4, 0, 1],
            connectorStyle: { strokeWidth: 4, stroke: "blue" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover", curviness: -30 }
        },

        prepare6 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint6);
        },
        //  endpoint7 = {
        //     anchor: [0.5, 0.5, 0, -1],
        //     connectorStyle: { strokeWidth : 4, stroke: "green" },
        //     endpointsOnTop: true,
        //     isSource: true,
        //     maxConnections: 10,
        //     isTarget: true,
        //     dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        // },

        // prepare7 = function (elId) {
        //     initAnimation(elId);

        //     return instance.addEndpoint(elId, endpoint7);
        // },
        //  endpoint8 = {
        //     //anchor: [-0.8, 1.9, 0, -1],
        //     anchor: [0.5, 0.5, 0, 1],
        //     connectorStyle: { strokeWidth : 4, stroke: "yellow" },
        //     endpointsOnTop: true,
        //     isSource: true,
        //     maxConnections: 10,
        //     isTarget: true,
        //     dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        // },

        // prepare8 = function (elId) {
        //     initAnimation(elId);

        //     return instance.addEndpoint(elId, endpoint8);
        // },
        //  endpoint9 = {
        //     anchor: [0.5, 0.5, 0, -1],
        //     connectorStyle: { strokeWidth : 4, stroke: "yellow" },
        //     endpointsOnTop: true,
        //     isSource: true,
        //     maxConnections: 10,
        //     isTarget: true,
        //     dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        // },

        // prepare9 = function (elId) {
        //     initAnimation(elId);

        //     return instance.addEndpoint(elId, endpoint9);
        // },
        endpoint10 = {
            anchor: [0.7, -0.9, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "red" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare10 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint10);
        },
        endpoint11 = {
            anchor: [0.7, -0.9, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "red" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare11 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint11);
        },
        endpoint12 = {
            anchor: [2.5, 2.3, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "red" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare12 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint12);
        },
        endpoint13 = {
            anchor: [2.5, 2.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "red" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare13 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint13);
        },
        //  endpoint14 = {
        //     anchor: [0.5, 0.5, 0, -1],
        //     connectorStyle: { strokeWidth : 4, stroke: "yellow" },
        //     endpointsOnTop: true,
        //     isSource: true,
        //     maxConnections: 10,
        //     isTarget: true,
        //     dropOptions: { tolerance: "touch", hoverClass: "dropHover" }

        //     },


        // prepare14 = function (elId) {
        //     initAnimation(elId);

        //     return instance.addEndpoint(elId, endpoint14);
        // },
        // endpoint15 = {
        //     anchor: [0.5, 0.5, 0, -1],
        //     connectorStyle: { strokeWidth : 4, stroke: "yellow" },
        //     endpointsOnTop: true,
        //     isSource: true,
        //     maxConnections: 10,
        //     isTarget: true,
        //     dropOptions: { tolerance: "touch", hoverClass: "dropHover" }

        // },

        // prepare15 = function (elId) {
        //     initAnimation(elId);

        //     return instance.addEndpoint(elId, endpoint14);
        // },



        // this is overridden by the YUI demo.
        createDisc = function () {
            var d = document.createElement("div");
            d.className = "bigdot";
            document.getElementById("animation-demo").appendChild(d);
            var id = '' + ((new Date().getTime()));
            d.setAttribute("id", id);
            var w = screen.width - 162, h = screen.height - 200;
            var x = (5 * w) + Math.floor(Math.random() * (10 * w));
            var y = (5 * h) + Math.floor(Math.random() * (10 * h));
            d.style.top = y + 'px';
            d.style.left = x + 'px';
            return { d: d, id: id };
        };

    sw1_disabled = 1
    sw2_disabled = 1

    // get a jsPlumb instance, setting some appropriate defaults and a Container.
    instance = jsPlumb.getInstance({
        DragOptions: { cursor: 'wait', zIndex: 20 },
        Endpoint: ["Image", { url: "images/littledot.png" }],

        Connector: ["Bezier", { curviness: -50 }],
        Container: "canvas"

    });

    // suspend drawing and initialise.
    instance.batch(function () {
        var e1 = prepare1("ld1"),
            e2 = prepare2("ld2"),
            // e3 = prepare3("ld3"),
            // e4 = prepare4("ld4"),
            e5 = prepare5("ld5"),
            e6 = prepare6("ld6"),
            // e7 = prepare7("ld7"),
            // e8 = prepare8("ld8"),
            // e9 = prepare9("ld9"),
            e10 = prepare10("ld10"),
            e11 = prepare11("ld11"),
            e12 = prepare12("ld12"),
            e13 = prepare13("ld13"),
            // e14 = prepare14("ld14"),
            // e15 = prepare14("ld15"),


            clearBtn = jsPlumb.getSelector("#anim-clear"),
            addBtn = jsPlumb.getSelector("#add");

        var detachLinks = jsPlumb.getSelector(".littledot .detach");
        instance.on(detachLinks, "click", function (e) {
            instance.deleteConnectionsForElement(this.getAttribute("rel"));
            jsPlumbUtil.consume(e);
        });

        instance.on(document.getElementById("clear"), "click", function (e) {
            instance.detachEveryConnection();
            showConnectionInfo("");
            jsPlumbUtil.consume(e);
        });



    });

    jsPlumb.fire("jsPlumbDemoLoaded", instance);


    document.getElementById("check-button").addEventListener("click", function () {
        var correct_connections_1_5 = [
            {
                "source": "ld1",
                "target": "ld5"
            },

            {
                "source": "ld5",
                "target": "ld1"
            }
        ];

        var correct_connections_2_6 = [
            {
                "source": "ld2",
                "target": "ld6"
            },

            {
                "source": "ld6",
                "target": "ld2"
            }
        ];
        // var correct_connections_3_7 = [
        //     {
        //         "source": "ld3",
        //         "target": "ld7"
        //     },

        //     {
        //         "source": "ld7",
        //         "target": "ld3"
        //     }
        // ];
        //  var correct_connections_4_8 = [
        //     {
        //         "source": "ld4",
        //         "target": "ld8"
        //     },

        //     {
        //         "source": "ld8",
        //         "target": "ld4"
        //     }
        // ];
        //  var correct_connections_14_9 = [
        //     {
        //         "source": "ld14",
        //         "target": "ld9"
        //     },

        //     {
        //         "source": "ld9",
        //         "target": "ld14"
        //     }
        // ];
        //  var correct_connections_15_8 = [
        //     {
        //         "source": "ld15",
        //         "target": "ld8"
        //     },

        //     {
        //         "source": "ld8",
        //         "target": "ld15"
        //     }
        // ];
        var correct_connections_10_12 = [
            {
                "source": "ld10",
                "target": "ld12"
            },

            {
                "source": "ld12",
                "target": "ld10"
            }
        ];
        var correct_connections_11_13 = [
            {
                "source": "ld11",
                "target": "ld13"
            },

            {
                "source": "ld13",
                "target": "ld11"
            }
        ];



        var allowed_connections = [
            {
                "source": "ld1",
                "target": "ld5"
            },

            {
                "source": "ld5",
                "target": "ld1"
            },
            {
                "source": "ld2",
                "target": "ld6"
            },

            {
                "source": "ld6",
                "target": "ld2"
            },
            // {
            //     "source": "ld3",
            //     "target": "ld7"
            // },

            // {
            //     "source": "ld7",
            //     "target": "ld3"
            // },
            //  {
            //     "source": "ld4",
            //     "target": "ld8"
            // },

            // {
            //     "source": "ld8",
            //     "target": "ld4"
            // },
            //  {
            //     "source": "ld14",
            //     "target": "ld9"
            // },

            // {
            //     "source": "ld9",
            //     "target": "ld14"
            // },
            //  {
            //     "source": "ld15",
            //     "target": "ld8"
            // },

            // {
            //     "source": "ld8",
            //     "target": "ld15"
            // },
            {
                "source": "ld10",
                "target": "ld12"
            },

            {
                "source": "ld12",
                "target": "ld10"
            },
            {
                "source": "ld11",
                "target": "ld13"
            },

            {
                "source": "ld13",
                "target": "ld11"
            },

        ];
        var actual_connections = instance.getAllConnections();

        var is_connected_1_5 = false;
        var is_connected_2_6 = false;
        // var is_connected_3_7= false;
        // var is_connected_4_8= false;
        // var is_connected_14_9 = false;
        // var is_connected_15_8 = false;
        var is_connected_10_12 = false;
        var is_connected_11_13 = false;

        var unallowed_connection_present = false;

        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_1_5) {
                is_connected_1_5 = correct_connections_1_5.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_2_6) {
                is_connected_2_6 = correct_connections_2_6.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });


        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_10_12) {
                is_connected_10_12 = correct_connections_10_12.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_11_13) {
                is_connected_11_13 = correct_connections_11_13.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });


        if (is_connected_1_5 && is_connected_2_6 && is_connected_10_12 && is_connected_11_13 && !unallowed_connection_present) {
            alert("Correct Connections");
            rightconnection = true;

            const elements = document.querySelectorAll('.jtk-endpoint');

            elements.forEach(ele => {
                ele.style.pointerEvents = 'none';
            });
            
            document.getElementById("ps").disabled = false;
            document.getElementById("ps").classList.remove("disabled");

            document.getElementById('dis1').style.pointerEvents = "none";
            document.getElementById('dis2').style.pointerEvents = "none";
            document.getElementById('dis3').style.pointerEvents = "none";
            document.getElementById('dis4').style.pointerEvents = "none";
            document.getElementById('dis5').style.pointerEvents = "none";
            document.getElementById('dis6').style.pointerEvents = "none";
            document.getElementById('dis7').style.pointerEvents = "none";
            document.getElementById('dis8').style.pointerEvents = "none";
            return;
        }
        else if (!unallowed_connection_present) {

            alert("Please Complete the Connection");

        }

        else {
            alert("Wrong Connection");
            return;
        }
    });
});

//Scripting of power supply begins
var PSval = document.getElementById("PSval")
var PSdis = document.getElementById("PSdis")

var state = 0;
var flags1 = 0;

ps_button.onclick = function toggle() {

    sw1_disabled = 0

    if (rightconnection == false) {
        alert("Alert ! Please make the connections first.");

        sw1_disabled = 1;
        sw2_disabled = 1;
    }



    if (rightconnection == true) {

        flags1 = 1;

        if (state == 0) {
            document.getElementById('ps').src = 'images/PowerSupplyOn.png'
            PSval.disabled = false;
            PSdis.disabled = true;
            //sw2_disabled = 1;
            ps_button.disabled = 1;
            state = 1;
        }


        else if (state == 1) {
            document.getElementById('ps').src = 'images/PowerSupplyOff.png'
            PSval.disabled = true;
            PSdis.disabled = true;
            sw2_disabled = 1
            state = 0;

        }
    }

    PSval.oninput = function update() {
        PSdis.value = PSval.value + 'V';
    }


}


const swit1 = document.getElementById("Switch1")
const swit2 = document.getElementById("Switch2")
var swtState = 0;


var sw1_disabled = 0  // Currently In ON state
var sw2_disabled = 0 // Currently in ON state

swit1.onclick = function () {

    if (PSval.value >= 0 && PSval.value <= 29) {

        alert("Alert ! Set Voltage to 30V")

    }

    if (sw1_disabled == 0) {

        if (PSval.value == 30) {

            PSval.disabled = true

            toggleS1(1)
            toggleS2(0)
            swtState = 1

        }

    }
}

function toggleS1(num) {

    if (num == 0) {

        swit1.src = 'images/switchoff.png'
        Glow();
    }

    else if (num == 1 && PSval.value >= 30) {
        swit1.src = 'images/switchon.png'
        Glow();

    }

}

swit2.onclick = function () {


    if (sw2_disabled == 0) {

        toggleS2(1)
        toggleS1(0)
        swtState = 2
        //sw1_disabled = 1
        sw2_disabled = 1
        sw1_disabled = 1
    }
}


function toggleS2(num) {

    if (PSval.value == 30) {

        sw2_disabled = 0

        if (num == 0) {

            swit2.src = 'images/switchoff.png'
            Glow()
        }

        else if (num == 1) {

            swit2.src = 'images/switchon.png'
            Glow()
        }

    }

}


//Wires
function Glow() {
    var c = document.getElementById("Switch1");
    var r = document.getElementById("Switch2");

    if (c.src.match("switchoff") && (r.src.match("switchoff"))) {
        document.getElementById("myImage1").src = "images/redn.jpg";
        document.getElementById("myImage2").src = "images/redn.jpg";
        document.getElementById("myImage3").src = "images/redn.jpg";
        document.getElementById("myImage4").src = "images/redn.jpg";
        document.getElementById("myImage5").src = "images/redn.jpg";
        document.getElementById("myImage6").src = "images/redn.jpg";
        document.getElementById("myImage7").src = "images/redn.jpg";
        document.getElementById("myImage8").src = "images/redn.jpg";
        document.getElementById("myImage9").src = "images/redn.jpg";
        document.getElementById("myImage10").src = "images/redn.jpg";
        document.getElementById("myImage11").src = "images/redn.jpg";
        document.getElementById("myImage12").src = "images/redn.jpg";
        document.getElementById("myImage13").src = "images/cap.png";

    } else if (c.src.match("switchon") && (r.src.match("switchoff"))) {
        document.getElementById("myImage1").src = "images/green.jpg";
        document.getElementById("myImage2").src = "images/green.jpg";
        document.getElementById("myImage3").src = "images/green.jpg";
        document.getElementById("myImage4").src = "images/green.jpg";
        document.getElementById("myImage5").src = "images/green.jpg";
        document.getElementById("myImage6").src = "images/green.jpg";
        document.getElementById("myImage7").src = "images/green.jpg";
        document.getElementById("myImage8").src = "images/redn.jpg";
        document.getElementById("myImage9").src = "images/redn.jpg";
        document.getElementById("myImage10").src = "images/redn.jpg";
        document.getElementById("myImage11").src = "images/redn.jpg";
        document.getElementById("myImage12").src = "images/redn.jpg";
        document.getElementById("myImage13").src = "images/cap2.png";

    }
    else if (c.src.match("switchoff") && (r.src.match("switchon"))) {
        document.getElementById("myImage1").src = "images/redn.jpg";
        document.getElementById("myImage2").src = "images/redn.jpg";
        document.getElementById("myImage3").src = "images/redn.jpg";
        document.getElementById("myImage4").src = "images/redn.jpg";
        document.getElementById("myImage5").src = "images/green.jpg";
        document.getElementById("myImage6").src = "images/green.jpg";
        document.getElementById("myImage7").src = "images/redn.jpg";
        document.getElementById("myImage8").src = "images/green.jpg";
        document.getElementById("myImage9").src = "images/green.jpg";
        document.getElementById("myImage10").src = "images/green.jpg";
        document.getElementById("myImage11").src = "images/green.jpg";
        document.getElementById("myImage12").src = "images/green.jpg";
        document.getElementById("myImage13").src = "images/cap2.png";

    }
};

// pointer rotation
var P_M = document.getElementById('P_M')

P_M.style.transform = "rotate(120deg)"

//Scripting of Timer & Table 
const timer = document.getElementById('stopwatch');
var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

function startTimer() {


    if (stoptime == true && PSval.value >= 30 && sw1_disabled == 1 && swtState == 2) {
        stoptime = false;
        timerCycle();

        setTimeout(() => {
            addReadings1();
        }, 0),

            setTimeout(() => {
                addReadings2()
            }, 3000),

            setTimeout(() => {
                addReadings3()
            }, 5000),

            setTimeout(() => {
                addReadings4()
            }, 13000),

            setTimeout(() => {
                addReadings5()
            }, 23000),

            setTimeout(() => {
                addReadings6()
            }, 38000),

            setTimeout(() => {
                addReadings7()
            }, 57000),

            setTimeout(() => {
                addReadings8()
            }, 72000),

            setTimeout(() => {
                addReadings9()
            }, 103000),

            setTimeout(() => {
                addReadings10()
                if (serialNo = 10) {
                    resetTimer();
                    mm_display.innerHTML = "";
                    document.getElementById("start").disabled = true;
                    sw1_disabled = 1
                    sw2_disabled = 1


                }

            }, 132000);
    }

};


function stopTimer() {
    if (stoptime == false) {
        stoptime = true;
    }
}

function timerCycle() {
    if (stoptime == false) {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);
        sec = sec + 1;

        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;

        }
        if (sec < 10 || sec == 0) {
            sec = '0' + sec;
        }
        if (min < 10 || min == 0) {
            min = '0' + min;
        }
        if (hr < 10 || hr == 0) {
            hr = '0' + hr;
        }
        timer.innerHTML = hr + ':' + min + ':' + sec;
        setTimeout("timerCycle()", 1000);

    }

}
function resetTimer() {
    timer.innerHTML = '00:00:00';
}

function resetTimer() {
    timer.innerHTML = "00:00:00";
    stoptime = true;
    hr = 0;
    sec = 0;
    min = 0;
}


function addReadings1() {

    let tr = document.createElement("tr");
    let td1 = tr.appendChild(document.createElement("td"));
    let td2 = tr.appendChild(document.createElement("td"));
    let td3 = tr.appendChild(document.createElement("td"));
    let td4 = tr.appendChild(document.createElement("td"));
    td1.innerHTML = 1;
    td2.innerHTML = 0;
    td3.innerHTML = 30;
    td4.innerHTML = 0;
    document.getElementById("tb1").appendChild(tr);
    document.getElementById("mm_display").innerHTML = "30";

}

function addReadings2() {

    let tr = document.createElement("tr");
    let td1 = tr.appendChild(document.createElement("td"));
    let td2 = tr.appendChild(document.createElement("td"));
    let td3 = tr.appendChild(document.createElement("td"));
    let td4 = tr.appendChild(document.createElement("td"));
    td1.innerHTML = 2;
    td2.innerHTML = min + ":" + sec;
    td3.innerHTML = 29;
    td4.innerHTML = 0.014;
    document.getElementById("tb1").appendChild(tr);
    document.getElementById("mm_display").innerHTML = "29";

}

function addReadings3() {

    let tr = document.createElement("tr");
    let td1 = tr.appendChild(document.createElement("td"));
    let td2 = tr.appendChild(document.createElement("td"));
    let td3 = tr.appendChild(document.createElement("td"));
    let td4 = tr.appendChild(document.createElement("td"));
    td1.innerHTML = 3;
    td2.innerHTML = min + ":" + sec;
    td3.innerHTML = 28;
    td4.innerHTML = 0.029;
    document.getElementById("tb1").appendChild(tr);
    document.getElementById("mm_display").innerHTML = "28";

}

function addReadings4() {

    let tr = document.createElement("tr");
    let td1 = tr.appendChild(document.createElement("td"));
    let td2 = tr.appendChild(document.createElement("td"));
    let td3 = tr.appendChild(document.createElement("td"));
    let td4 = tr.appendChild(document.createElement("td"));
    td1.innerHTML = 4;
    td2.innerHTML = min + ":" + sec;
    td3.innerHTML = 27;
    td4.innerHTML = 0.045;
    document.getElementById("tb1").appendChild(tr);
    document.getElementById("mm_display").innerHTML = "27";

}

function addReadings5() {

    let tr = document.createElement("tr");
    let td1 = tr.appendChild(document.createElement("td"));
    let td2 = tr.appendChild(document.createElement("td"));
    let td3 = tr.appendChild(document.createElement("td"));
    let td4 = tr.appendChild(document.createElement("td"));
    td1.innerHTML = 5;
    td2.innerHTML = min + ":" + sec;
    td3.innerHTML = 26;
    td4.innerHTML = 0.062;
    document.getElementById("tb1").appendChild(tr);
    document.getElementById("mm_display").innerHTML = "26";

}

function addReadings6() {

    let tr = document.createElement("tr");
    let td1 = tr.appendChild(document.createElement("td"));
    let td2 = tr.appendChild(document.createElement("td"));
    let td3 = tr.appendChild(document.createElement("td"));
    let td4 = tr.appendChild(document.createElement("td"));
    td1.innerHTML = 6;
    td2.innerHTML = min + ":" + sec;
    td3.innerHTML = 25;
    td4.innerHTML = 0.079;
    document.getElementById("tb1").appendChild(tr);
    document.getElementById("mm_display").innerHTML = "25";

}

function addReadings7() {

    let tr = document.createElement("tr");
    let td1 = tr.appendChild(document.createElement("td"));
    let td2 = tr.appendChild(document.createElement("td"));
    let td3 = tr.appendChild(document.createElement("td"));
    let td4 = tr.appendChild(document.createElement("td"));
    td1.innerHTML = 7;
    td2.innerHTML = min + ":" + sec;
    td3.innerHTML = 24;
    td4.innerHTML = 0.096;
    document.getElementById("tb1").appendChild(tr);
    document.getElementById("mm_display").innerHTML = "24";

}

function addReadings8() {

    let tr = document.createElement("tr");
    let td1 = tr.appendChild(document.createElement("td"));
    let td2 = tr.appendChild(document.createElement("td"));
    let td3 = tr.appendChild(document.createElement("td"));
    let td4 = tr.appendChild(document.createElement("td"));
    td1.innerHTML = 8;
    td2.innerHTML = min + ":" + sec;
    td3.innerHTML = 23;
    td4.innerHTML = 0.115;
    document.getElementById("tb1").appendChild(tr);
    document.getElementById("mm_display").innerHTML = "23";

}

function addReadings9() {

    let tr = document.createElement("tr");
    let td1 = tr.appendChild(document.createElement("td"));
    let td2 = tr.appendChild(document.createElement("td"));
    let td3 = tr.appendChild(document.createElement("td"));
    let td4 = tr.appendChild(document.createElement("td"));
    td1.innerHTML = 9;
    td2.innerHTML = min + ":" + sec;
    td3.innerHTML = 22;
    td4.innerHTML = 0.134;
    document.getElementById("tb1").appendChild(tr);
    document.getElementById("mm_display").innerHTML = "22";
}

function addReadings10() {

    let tr = document.createElement("tr");
    let td1 = tr.appendChild(document.createElement("td"));
    let td2 = tr.appendChild(document.createElement("td"));
    let td3 = tr.appendChild(document.createElement("td"));
    let td4 = tr.appendChild(document.createElement("td"));
    td1.innerHTML = 10;
    td2.innerHTML = min + ":" + sec;
    td3.innerHTML = 21;
    td4.innerHTML = 0.154;

    document.getElementById("tb1").appendChild(tr);
    document.getElementById("mm_display").innerHTML = "21";
    document.getElementById("Res").innerHTML = "1.127";
    setTimeout(() => {
        alert("Maximum 10 readings can be added in the table");
    }, 20);

    // Graph

    //Plotted the graph with the Plotly library 


    plot.onclick = function plot() {

        var xArray = [0, 3, 5, 13, 23, 38, 57, 72, 103, 132];
        var yArray = [30, 29, 28, 27, 26, 25, 24, 23, 22, 21];

        var data = [{
            x: xArray,
            y: yArray,
            mode: "lines+markers"
        }];

        var layout = {
            xaxis: {
                title: "<b>Time (Sec)</b>",
                tickvals: [0, 20, 40, 60, 80, 100, 120, 140],
                tickmode: 'array'
            },
            yaxis: { title: "<b>Discharging Voltage (V)</b>" },
            title: "<b>Discharging Voltage vs Time</b>",
            margin: {
                l: 50,
                r: 90,
                b: 50,
                t: 60,
                pad: 4
            }
        };

        Plotly.newPlot("graph", data, layout);

    };
};

