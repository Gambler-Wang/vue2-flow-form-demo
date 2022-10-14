export const testData = {
  cells: [
    {
      position: {
        x: 230,
        y: 210,
      },
      size: {
        width: 80,
        height: 36,
      },
      attrs: {
        text: {
          text: '请假申请',
        },
        body: {
          rx: 18,
          ry: 26,
        },
      },
      visible: true,
      shape: 'custom-rect',
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden',
                },
              },
            },
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden',
                },
              },
            },
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden',
                },
              },
            },
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden',
                },
              },
            },
          },
        },
        items: [
          {
            group: 'top',
            id: 'b613988c-4a78-4550-a4bf-be2e07a964a4',
          },
          {
            group: 'right',
            id: 'c1ab6e98-9c2b-4b5c-bf2c-66928c1b4e8e',
          },
          {
            group: 'bottom',
            id: '2fdde2c4-b31f-4bac-863c-5e171ca365da',
          },
          {
            group: 'left',
            id: '8b0c9436-6d28-4755-91f7-f573ca9fc002',
          },
        ],
      },
      id: '32b73c78-06bd-4ff8-88a9-6dbd4eb1c894',
      zIndex: 1,
      data: {
        approveType: null,
        status: null,
      },
    },
    {
      position: {
        x: 420,
        y: 210,
      },
      size: {
        width: 80,
        height: 36,
      },
      attrs: {
        text: {
          text: '组长审批',
        },
      },
      visible: true,
      shape: 'custom-rect',
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden',
                },
              },
            },
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden',
                },
              },
            },
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden',
                },
              },
            },
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden',
                },
              },
            },
          },
        },
        items: [
          {
            group: 'top',
            id: '594b9c2d-e0a2-4bad-a04e-4d5010d1d8c2',
          },
          {
            group: 'right',
            id: '9e5c57ad-d6eb-4674-9b65-a6d36d91e177',
          },
          {
            group: 'bottom',
            id: '607f843b-4cb6-4562-85da-afb71011d0cf',
          },
          {
            group: 'left',
            id: 'cdf5c209-2941-4f7f-9fe2-041679eeb912',
          },
        ],
      },
      id: '416b2bc4-7fa2-4f96-a5c4-55920d96b576',
      data: {
        approveType: 'leader',
        status: 'pass',
      },
      zIndex: 2,
    },
    {
      shape: 'edge',
      id: '89887c9e-ac1e-4245-a55c-f840ccd02310',
      zIndex: 3,
      source: {
        cell: '32b73c78-06bd-4ff8-88a9-6dbd4eb1c894',
        port: 'c1ab6e98-9c2b-4b5c-bf2c-66928c1b4e8e',
      },
      target: {
        cell: '416b2bc4-7fa2-4f96-a5c4-55920d96b576',
        port: 'cdf5c209-2941-4f7f-9fe2-041679eeb912',
      },
    },
    {
      position: {
        x: 626,
        y: 188,
      },
      size: {
        width: 170,
        height: 80,
      },
      attrs: {
        text: {
          text: '请假时间长短>1天',
        },
        body: {
          refPoints: '0,10 10,0 20,10 10,20',
        },
      },
      visible: true,
      shape: 'custom-polygon',
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden',
                },
              },
            },
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden',
                },
              },
            },
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden',
                },
              },
            },
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden',
                },
              },
            },
          },
        },
        items: [
          {
            group: 'top',
            id: 'f4485ed6-3218-428a-8c01-3186a93c055d',
          },
          {
            group: 'right',
            id: 'c9071968-6133-4e92-8fd8-6b6364d5db5c',
          },
          {
            group: 'bottom',
            id: '8aacbba0-eece-4453-85fe-941a7b5a6f24',
          },
          {
            group: 'left',
            id: '5705572a-a51b-4bfb-8904-b6f37849a993',
          },
        ],
      },
      id: 'fb8f3bf1-4d9f-41e8-b397-2c78d92f3796',
      zIndex: 4,
      data: {
        approveType: null,
        status: null,
      },
    },
    {
      shape: 'edge',
      id: 'f4557ef4-c708-4fd6-803b-3a445d72e913',
      zIndex: 5,
      source: {
        cell: '416b2bc4-7fa2-4f96-a5c4-55920d96b576',
        port: '9e5c57ad-d6eb-4674-9b65-a6d36d91e177',
      },
      target: {
        cell: 'fb8f3bf1-4d9f-41e8-b397-2c78d92f3796',
        port: '5705572a-a51b-4bfb-8904-b6f37849a993',
      },
      labels: ['通过'],
    },
    {
      position: {
        x: 671,
        y: 364,
      },
      size: {
        width: 80,
        height: 36,
      },
      attrs: {
        text: {
          text: '部门经理审批',
        },
      },
      visible: true,
      shape: 'custom-rect',
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden',
                },
              },
            },
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden',
                },
              },
            },
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden',
                },
              },
            },
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden',
                },
              },
            },
          },
        },
        items: [
          {
            group: 'top',
            id: '594b9c2d-e0a2-4bad-a04e-4d5010d1d8c2',
          },
          {
            group: 'right',
            id: '9e5c57ad-d6eb-4674-9b65-a6d36d91e177',
          },
          {
            group: 'bottom',
            id: '607f843b-4cb6-4562-85da-afb71011d0cf',
          },
          {
            group: 'left',
            id: 'cdf5c209-2941-4f7f-9fe2-041679eeb912',
          },
        ],
      },
      id: 'f27c33b1-dab1-473a-8e8f-8a7ab6a88a1a',
      data: {
        approveType: null,
        status: null,
      },
      zIndex: 6,
    },
    {
      shape: 'edge',
      id: '83044276-1bbb-4f29-89c2-71e00f469134',
      zIndex: 7,
      source: {
        cell: 'fb8f3bf1-4d9f-41e8-b397-2c78d92f3796',
        port: '8aacbba0-eece-4453-85fe-941a7b5a6f24',
      },
      target: {
        cell: 'f27c33b1-dab1-473a-8e8f-8a7ab6a88a1a',
        port: '594b9c2d-e0a2-4bad-a04e-4d5010d1d8c2',
      },
      labels: ['是'],
    },
    {
      position: {
        x: 937,
        y: 204,
      },
      size: {
        width: 48,
        height: 48,
      },
      attrs: {
        text: {
          text: '结束',
        },
      },
      visible: true,
      shape: 'custom-circle',
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden',
                },
              },
            },
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden',
                },
              },
            },
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden',
                },
              },
            },
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden',
                },
              },
            },
          },
        },
        items: [
          {
            group: 'top',
            id: 'feccc393-c263-4706-b76c-20a6e9a6e23f',
          },
          {
            group: 'right',
            id: 'ca4e0cfd-0ec5-4edf-829e-3c79e99d9319',
          },
          {
            group: 'bottom',
            id: '3d11667d-9c1c-4a1b-81da-e2db8b80d926',
          },
          {
            group: 'left',
            id: 'b9e993b1-843d-4e76-96c0-cbfdc35cf537',
          },
        ],
      },
      id: '98d0a2da-51d4-4098-b2cc-bdc9bfa2bcb6',
      zIndex: 8,
    },
    {
      shape: 'edge',
      id: 'd6e886b6-c5a5-440a-95a6-ae37d4c4e6b1',
      zIndex: 9,
      source: {
        cell: 'fb8f3bf1-4d9f-41e8-b397-2c78d92f3796',
        port: 'c9071968-6133-4e92-8fd8-6b6364d5db5c',
      },
      target: {
        cell: '98d0a2da-51d4-4098-b2cc-bdc9bfa2bcb6',
        port: 'b9e993b1-843d-4e76-96c0-cbfdc35cf537',
      },
      labels: ['否'],
    },
    {
      shape: 'edge',
      id: '2e5a8a3e-cd55-4642-9bac-33d9f0f5d4fc',
      zIndex: 10,
      source: {
        cell: 'f27c33b1-dab1-473a-8e8f-8a7ab6a88a1a',
        port: '9e5c57ad-d6eb-4674-9b65-a6d36d91e177',
      },
      target: {
        cell: '98d0a2da-51d4-4098-b2cc-bdc9bfa2bcb6',
        port: '3d11667d-9c1c-4a1b-81da-e2db8b80d926',
      },
    },
  ],
}
