export const menuItems = [
    {
        id: 1,
        label: "menuitems.menu.text",
        isTitle: true
    },
    {
        id: 2,
        label: "menuitems.dashboards.text",
        icon: "bx-home-circle",
        badge: {
            variant: "info",
            text: "menuitems.dashboards.badge"
        },
        subItems: [
            {
                id: 3,
                label: "menuitems.dashboards.list.default",
                link: "/",
                parentId: 2
            },
            {
                id: 4,
                label: "menuitems.dashboards.list.saas",
                link: "#",
                parentId: 2
            },
            {
                id: 5,
                label: "menuitems.dashboards.list.crypto",
                link: "#",
                parentId: 2
            },
            {
                id: 6,
                label: "menuitems.dashboards.list.blog",
                link: "#",
                parentId: 2
            }
        ]
    },
    {
        id: 7,
        isLayout: true
    },
    {
        id: 8,
        label: "menuitems.apps.text",
        isTitle: true
    },
    {
        id: 9,
        label: "menuitems.calendar.text",
        icon: "bx-calendar",
        link: "#"
    },
    {
        id: 10,
        label: "menuitems.chat.text",
        icon: "bx-chat",
        link: "#",
    },
    {
        id: 11,
        label: "menuitems.filemanager.text",
        link: "#",
        icon: "bx-file",
        badge: {
            variant: "success",
            text: "menuitems.chat.badge"
        }
    },
    {
        id: 12,
        label: "menuitems.ecommerce.text",
        icon: "bx-store",
        subItems: [
            {
                id: 13,
                label: "menuitems.ecommerce.list.products",
                link: "#",
                parentId: 12
            },
            {
                id: 14,
                label: "menuitems.ecommerce.list.productdetail",
                link: "#",
                parentId: 12
            },
            {
                id: 15,
                label: "menuitems.ecommerce.list.orders",
                link: "#",
                parentId: 12
            },
            {
                id: 16,
                label: "menuitems.ecommerce.list.customers",
                link: "#",
                parentId: 12
            },
            {
                id: 17,
                label: "menuitems.ecommerce.list.cart",
                link: "#",
                parentId: 12
            },
            {
                id: 18,
                label: "menuitems.ecommerce.list.checkout",
                link: "#",
                parentId: 12
            },
            {
                id: 19,
                label: "menuitems.ecommerce.list.shops",
                link: "#",
                parentId: 12
            },
            {
                id: 20,
                label: "menuitems.ecommerce.list.addproduct",
                link: "#",
                parentId: 12
            }
        ]
    },
    {
        id: 21,
        label: "menuitems.crypto.text",
        icon: "bx-bitcoin",
        subItems: [
            {
                id: 22,
                label: "menuitems.crypto.list.wallet",
                link: "#",
                parentId: 21
            },
            {
                id: 23,
                label: "menuitems.crypto.list.buy/sell",
                link: "#",
                parentId: 21
            },
            {
                id: 24,
                label: "menuitems.crypto.list.exchange",
                link: "#",
                parentId: 21
            },
            {
                id: 25,
                label: "menuitems.crypto.list.lending",
                link: "#",
                parentId: 21
            },
            {
                id: 26,
                label: "menuitems.crypto.list.orders",
                link: "#",
                parentId: 21
            },
            {
                id: 27,
                label: "menuitems.crypto.list.kycapplication",
                link: "#",
                parentId: 21
            },
            {
                id: 28,
                label: "menuitems.crypto.list.icolanding",
                link: "#",
                parentId: 21
            }
        ]
    },
    {
        id: 29,
        label: "menuitems.email.text",
        icon: "bx-envelope",
        subItems: [
            {
                id: 30,
                label: "menuitems.email.list.inbox",
                link: "#",
                parentId: 29
            },
            {
                id: 31,
                label: "menuitems.email.list.reademail",
                link: "#",
                parentId: 29
            },
            {
                id: 32,
                label: "menuitems.email.list.template.text",
                parentId: 29,
                subItems: [
                    {
                        id: 33,
                        label: 'menuitems.email.list.template.list.basic',
                        link: '#',
                        parentId: 32
                    },
                    {
                        label: 'menuitems.email.list.template.list.alert',
                        link: '#',
                        parentId: 32
                    },
                    {
                        label: 'menuitems.email.list.template.list.billing',
                        link: '#',
                        parentId: 32
                    }
                ]
            }
        ]
    },
    {
        id: 34,
        label: "menuitems.invoices.text",
        icon: "bx-receipt",
        subItems: [
            {
                id: 35,
                label: "menuitems.invoices.list.invoicelist",
                link: "#",
                parentId: 34
            },
            {
                id: 36,
                label: "menuitems.invoices.list.invoicedetail",
                link: "#",
                parentId: 34
            }
        ]
    },
    {
        id: 37,
        label: "menuitems.projects.text",
        icon: "bx-briefcase-alt-2",
        subItems: [
            {
                id: 38,
                label: "menuitems.projects.list.grid",
                link: "#",
                parentId: 37
            },
            {
                id: 39,
                label: "menuitems.projects.list.projectlist",
                link: "#",
                parentId: 37
            },
            {
                id: 40,
                label: "menuitems.projects.list.overview",
                link: "#",
                parentId: 37
            },
            {
                id: 41,
                label: "menuitems.projects.list.create",
                link: "#",
                parentId: 37
            }
        ]
    },
    {
        id: 42,
        label: "menuitems.tasks.text",
        icon: "bx-task",
        subItems: [
            {
                id: 43,
                label: "menuitems.tasks.list.tasklist",
                link: "#",
                parentId: 42
            },
            {
                id: 44,
                label: "menuitems.tasks.list.kanban",
                link: "#",
                parentId: 42
            },
            {
                id: 45,
                label: "menuitems.tasks.list.createtask",
                link: "#",
                parentId: 42
            }
        ]
    },
    {
        id: 46,
        label: "menuitems.contacts.text",
        icon: "bxs-user-detail",
        subItems: [
            {
                id: 47,
                label: "menuitems.contacts.list.usergrid",
                link: "#",
                parentId: 46
            },
            {
                id: 48,
                label: "menuitems.contacts.list.userlist",
                link: "#",
                parentId: 46
            },
            {
                id: 49,
                label: "menuitems.contacts.list.profile",
                link: "#",
                parentId: 46
            }
        ]
    },
    {
        id: 50, 
        label: "menuitems.blog.text",
        icon: "bx-detail",
        badge: {
            variant: "success",
            text: "menuitems.blog.badge"
        },
        subItems: [
            {
                id: 51,
                label: 'menuitems.blog.list.bloglist',
                link: '#',
                parentId: 50
            },
            {
                id: 52,
                label: 'menuitems.blog.list.grid',
                link: '#',
                parentId: 50
            },
            {
                id: 53,
                label: 'menuitems.blog.list.detail',
                link: '#',
                parentId: 50
            }
        ]
    },
    {
        id: 54,
        label: "menuitems.pages.text",
        isTitle: true
    },
    {
        id: 55,
        label: "menuitems.authentication.text",
        icon: "bx-user-circle",
        badge: {
            variant: "success",
            text: "menuitems.authentication.badge"
        },
        subItems: [
            {
                id: 56,
                label: "menuitems.authentication.list.login",
                link: "#",
                parentId: 55
            },
            {
                id: 57,
                label: "menuitems.authentication.list.login-2",
                link: "#",
                parentId: 55
            },
            {
                id: 58,
                label: "menuitems.authentication.list.register",
                link: "#",
                parentId: 55
            },
            {
                id: 59,
                label: "menuitems.authentication.list.register-2",
                link: "#",
                parentId: 55
            },
            {
                id: 60,
                label: "menuitems.authentication.list.recoverpwd",
                link: "#",
                parentId: 55
            },
            {
                id: 61,
                label: "menuitems.authentication.list.recoverpwd-2",
                link: "#",
                parentId: 55
            },
            {
                id: 62,
                label: "menuitems.authentication.list.lockscreen",
                link: "#",
                parentId: 55
            },
            {
                id: 63,
                label: "menuitems.authentication.list.lockscreen-2",
                link: "#",
                parentId: 55
            },
            {
                id: 64,
                label: "menuitems.authentication.list.confirm-mail",
                link: "#",
                parentId: 55
            },
            {
                id: 65,
                label: "menuitems.authentication.list.confirm-mail-2",
                link: "#",
                parentId: 55
            },
            {
                id: 66,
                label: "menuitems.authentication.list.verification",
                link: "#",
                parentId: 55
            },
            {
                id: 67,
                label: "menuitems.authentication.list.verification-2",
                link: "#",
                parentId: 55
            },
            {
                id: 68,
                label: "menuitems.authentication.list.verification-step",
                link: "#",
                parentId: 55
            },
            {
                id: 69,
                label: "menuitems.authentication.list.verification-step-2",
                link: "#",
                parentId: 55
            }
        ]
    },
    {
        id: 70,
        label: "menuitems.utility.text",
        icon: "bx-file",
        subItems: [
            {
                id: 71,
                label: "menuitems.utility.list.starter",
                link: "#",
                parentId: 70
            },
            {
                id: 72,
                label: "menuitems.utility.list.maintenance",
                link: "#",
                parentId: 70
            },
            {
                id: 72,
                label: "menuitems.utility.list.comingsoon",
                link: "#",
                parentId: 70
            },
            {
                id: 73,
                label: "menuitems.utility.list.timeline",
                link: "#",
                parentId: 70
            },
            {
                id: 74,
                label: "menuitems.utility.list.faqs",
                link: "#",
                parentId: 70
            },
            {
                id: 75,
                label: "menuitems.utility.list.pricing",
                link: "#",
                parentId: 70
            },
            {
                id: 76,
                label: "menuitems.utility.list.error404",
                link: "#",
                parentId: 70
            },
            {
                id: 77,
                label: "menuitems.utility.list.error500",
                link: "#",
                parentId: 70
            }
        ]
    },
    {
        id: 78,
        label: "menuitems.components.text",
        isTitle: true
    },
    {
        id: 79,
        label: "menuitems.uielements.text",
        icon: "bx-tone",
        subItems: [
            {
                id: 80,
                label: "menuitems.uielements.list.alerts",
                link: "#",
                parentId: 79
            },
            {
                id: 81,
                label: "menuitems.uielements.list.buttons",
                link: "#",
                parentId: 79
            },
            {
                id: 82,
                label: "menuitems.uielements.list.cards",
                link: "#",
                parentId: 79
            },
            {
                id: 83,
                label: "menuitems.uielements.list.carousel",
                link: "#",
                parentId: 79
            },
            {
                id: 84,
                label: "menuitems.uielements.list.dropdowns",
                link: "#",
                parentId: 79
            },
            {
                id: 85,
                label: "menuitems.uielements.list.grid",
                link: "#",
                parentId: 79
            },
            {
                id: 86,
                label: "menuitems.uielements.list.images",
                link: "#",
                parentId: 79
            },
            {
                id: 87,
                label: "menuitems.uielements.list.modals",
                link: "#",
                parentId: 79
            },
            {
                id: 88,
                label: "menuitems.uielements.list.rangeslider",
                link: "#",
                parentId: 79
            },
            {
                id: 89,
                label: "menuitems.uielements.list.progressbar",
                link: "#",
                parentId: 79
            },
            {
                id: 90,
                label: "menuitems.uielements.list.sweetalert",
                link: "#",
                parentId: 79
            },
            {
                id: 91,
                label: "menuitems.uielements.list.tabs",
                link: "#",
                parentId: 79
            },
            {
                id: 92,
                label: "menuitems.uielements.list.typography",
                link: "#",
                parentId: 79
            },
            {
                id: 93,
                label: "menuitems.uielements.list.video",
                link: "#",
                parentId: 79
            },
            {
                id: 94,
                label: "menuitems.uielements.list.general",
                link: "#",
                parentId: 79
            },
            {
                id: 95,
                label: "menuitems.uielements.list.colors",
                link: "#",
                parentId: 79
            },
            {
                id: 96,
                label: "menuitems.uielements.list.lightbox",
                link: "#",
                parentId: 79
            },
            {
                id: 97,
                label: "menuitems.uielements.list.cropper",
                link: "#",
                parentId: 79
            }
        ]
    },
    {
        id: 98,
        label: "menuitems.forms.text",
        icon: "bxs-eraser",
        badge: {
            variant: "danger",
            text: 'menuitems.forms.badge'
        },
        subItems: [
            {
                id: 99,
                label: "menuitems.forms.list.elements",
                link: "#",
                parentId: 98
            },
            {
                id: 100,
                label: "menuitems.forms.list.layouts",
                link: "#",
                parentId: 98
            },
            {
                id: 101,
                label: "menuitems.forms.list.validation",
                link: "#",
                parentId: 98
            },
            {
                id: 102,
                label: "menuitems.forms.list.advanced",
                link: "#",
                parentId: 98
            },
            {
                id: 103,
                label: "menuitems.forms.list.editor",
                link: "#",
                parentId: 98
            },
            {
                id: 104,
                label: "menuitems.forms.list.fileupload",
                link: "#",
                parentId: 98
            },
            {
                id: 105,
                label: "menuitems.forms.list.repeater",
                link: "#",
                parentId: 98
            },
            {
                id: 106,
                label: "menuitems.forms.list.wizard",
                link: "#",
                parentId: 98
            },
            {
                id: 107,
                label: "menuitems.forms.list.mask",
                link: "#",
                parentId: 98
            }
        ]
    },
    {
        id: 108,
        icon: "bx-list-ul",
        label: "menuitems.tables.text",
        subItems: [
            {
                id: 109,
                label: "menuitems.tables.list.basic",
                link: "#",
                parentId: 108
            },
            {
                id: 110,
                label: "menuitems.tables.list.advanced",
                link: "#",
                parentId: 108
            }
        ]
    },
    {
        id: 111,
        icon: "bxs-bar-chart-alt-2",
        label: "menuitems.charts.text",
        subItems: [
            {
                id: 112,
                label: "menuitems.charts.list.apex",
                link: "#",
                parentId: 111
            },
            {
                id: 113,
                label: "menuitems.charts.list.chartjs",
                link: "#",
                parentId: 111
            },
            {
                id: 114,
                label: "menuitems.charts.list.chartist",
                link: "#",
                parentId: 111
            },
            {
                id: 115,
                label: "menuitems.charts.list.echart",
                link: "#",
                parentId: 111
            }
        ]
    },
    {
        id: 116,
        label: "menuitems.icons.text",
        icon: "bx-aperture",
        subItems: [
            {
                id: 117,
                label: "menuitems.icons.list.boxicons",
                link: "#",
                parentId: 116
            },
            {
                id: 118,
                label: "menuitems.icons.list.materialdesign",
                link: "#",
                parentId: 116
            },
            {
                id: 119,
                label: "menuitems.icons.list.dripicons",
                link: "#",
                parentId: 116
            },
            {
                id: 120,
                label: "menuitems.icons.list.fontawesome",
                link: "#",
                parentId: 116
            }
        ]
    },
    {
        id: 121,
        label: "menuitems.maps.text",
        icon: "bx-map",
        subItems: [
            {
                id: 122,
                label: "menuitems.maps.list.googlemap",
                link: "#",
                parentId: 121
            },
            {
                id: 123,
                label: "menuitems.maps.list.leafletmap",
                link: "#",
                parentId: 121
            },
        ]
    },
    {
        id: 124,
        label: "menuitems.multilevel.text",
        icon: "bx-share-alt",
        subItems: [
            {
                id: 125,
                label: "menuitems.multilevel.list.level1.1",
                link: "#",
                parentId: 124
            },
            {
                id: 126,
                label: "menuitems.multilevel.list.level1.2",
                parentId: 124,
                subItems: [
                    {
                        id: 127,
                        label: "menuitems.multilevel.list.level1.level2.1",
                        link: "#",
                        parentId: 124
                    },
                    {
                        id: 128,
                        label: "menuitems.multilevel.list.level1.level2.2",
                        link: "#",
                        parentId: 124
                    }
                ]
            }
        ]
    }
];

