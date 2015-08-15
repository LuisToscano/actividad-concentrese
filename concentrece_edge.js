/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-1.10.2.js",
            js+"main.js",
            js+"timerUtilities.js",
            js+"utility.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'carta_1_A',
                            symbolName: 'carta_1_A',
                            type: 'rect',
                            rect: ['1175px', '139px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'carta_1_B',
                            symbolName: 'carta_1_B',
                            type: 'rect',
                            rect: ['1393px', '139px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'carta_2_A',
                            symbolName: 'carta_2_A',
                            type: 'rect',
                            rect: ['1175px', '359px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'carta_2_B',
                            symbolName: 'carta_2_B',
                            type: 'rect',
                            rect: ['1393px', '359px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'btn_submit',
                            symbolName: 'btn_submit',
                            type: 'rect',
                            rect: ['630', '351', '200', '177', 'auto', 'auto']
                        },
                        {
                            id: 'TIMER_CONTAINER',
                            symbolName: 'testBtn',
                            type: 'rect',
                            rect: ['62px', '83px', '228', '56', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1830px', '780px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 511,
                    autoPlay: true,
                    data: [
                        [
                            "eid52",
                            "left",
                            250,
                            0,
                            "linear",
                            "${TIMER_CONTAINER}",
                            '62px',
                            '62px'
                        ],
                        [
                            "eid53",
                            "top",
                            250,
                            0,
                            "linear",
                            "${TIMER_CONTAINER}",
                            '83px',
                            '83px'
                        ]
                    ]
                }
            },
            "carta_1_A": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '200px', '200px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "normal": 0,
                        "fliped": 250
                    },
                    data: [
                        [
                            "eid5",
                            "background-color",
                            0,
                            250,
                            "linear",
                            "${RoundRect2}",
                            'rgba(255,0,0,1)',
                            'rgba(34,21,151,1.00)'
                        ],
                        [
                            "eid7",
                            "background-color",
                            250,
                            250,
                            "linear",
                            "${RoundRect2}",
                            'rgba(34,21,151,1)',
                            'rgba(255,0,0,1.00)'
                        ]
                    ]
                }
            },
            "carta_1_B": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '200px', '200px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "normal": 0,
                        "fliped": 250
                    },
                    data: [
                        [
                            "eid5",
                            "background-color",
                            0,
                            250,
                            "linear",
                            "${RoundRect2}",
                            'rgba(255,0,0,1)',
                            'rgba(34,21,151,1.00)'
                        ],
                        [
                            "eid7",
                            "background-color",
                            250,
                            250,
                            "linear",
                            "${RoundRect2}",
                            'rgba(34,21,151,1)',
                            'rgba(255,0,0,1.00)'
                        ]
                    ]
                }
            },
            "carta_2_B": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '200px', '200px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "normal": 0,
                        "fliped": 250
                    },
                    data: [
                        [
                            "eid5",
                            "background-color",
                            0,
                            250,
                            "linear",
                            "${RoundRect2}",
                            'rgba(255,0,0,1)',
                            'rgba(34,21,151,1.00)'
                        ],
                        [
                            "eid7",
                            "background-color",
                            250,
                            250,
                            "linear",
                            "${RoundRect2}",
                            'rgba(34,21,151,1)',
                            'rgba(255,0,0,1.00)'
                        ]
                    ]
                }
            },
            "carta_2_A": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '200px', '200px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "normal": 0,
                        "fliped": 250
                    },
                    data: [
                        [
                            "eid5",
                            "background-color",
                            0,
                            250,
                            "linear",
                            "${RoundRect2}",
                            'rgba(255,0,0,1)',
                            'rgba(34,21,151,1.00)'
                        ],
                        [
                            "eid7",
                            "background-color",
                            250,
                            250,
                            "linear",
                            "${RoundRect2}",
                            'rgba(34,21,151,1)',
                            'rgba(255,0,0,1.00)'
                        ]
                    ]
                }
            },
            "btn_submit": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '200px', '177px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(52,52,131,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '200px', '177px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "testBtn": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['57px', '-28px', '113px', '113px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [3, 'rgba(88,20,130,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(196,170,220,1.00)']
                        },
                        {
                            rect: ['111px', '21px', '13px', '13px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,0.86)']
                        },
                        {
                            rect: ['115px', '10px', '5px', '44px', 'auto', 'auto'],
                            transform: [[], ['360']],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.56)']
                        },
                        {
                            rect: ['18px', '17px', '200px', '42px', 'auto', 'auto'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px; text-align: center;\"><span style=\"font-weight: 700;\">TIMER</span></p>',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '228px', '56px']
                        }
                    }
                },
                timeline: {
                    duration: 511,
                    autoPlay: true,
                    labels: {
                        "normal": 0,
                        "0": 511
                    },
                    data: [
                        [
                            "eid118",
                            "rotateZ",
                            0,
                            500,
                            "linear",
                            "${Rectangle2}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid22",
                            "color",
                            0,
                            250,
                            "linear",
                            "${Text}",
                            'rgba(0,0,0,1)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid23",
                            "color",
                            250,
                            250,
                            "linear",
                            "${Text}",
                            'rgba(0,0,0,1.00)',
                            'rgba(0,0,0,1)'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("concentrece_edgeActions.js");
})("EDGE-559548");
