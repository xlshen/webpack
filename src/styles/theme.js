module.exports = Object.assign(
  {
    // color 系统色板
    '@primary-color': '#007AFF',

    '@white-color': '#FFFFFF',

    '@gray-color-A': '#000000',
    '@gray-color-B': '#333333',
    '@gray-color-C': '#666666',
    '@gray-color-D': '#999999',
    '@gray-color-E': '#C1C7D0',
    '@gray-color-F': '#D9DDE4',
    '@gray-color-G': '#DCDCDC',
    '@gray-color-H': '#E1E4E8',
    '@gray-color-I': '#EEF0F3',
    '@gray-color-J': '#F8F9FB',
    '@gray-color-K': '#1A2B4E',
    '@gray-color-L': '#A6AEBC',
    '@gray-color-M': '#F0F2F5',

    '@red-color': '#F03D3D',
    '@red-color-B': '#F36464',
    '@red-color-C': '#F9B2B2',
    '@red-light-color': '#FFF1F1',

    '@blue-color': '#2C95FF',
    '@blue-color-B': '#5667C2',
    '@blue-color-C': '#ABB3E1',
    '@blue-light-color': '#A3CFFF',

    '@green-color': '#069F38',
    '@green-light-color': '#E8FFEB',

    '@yellow-color': '#FFAD0D',
    '@yellow-light-color': '#FFFAEB',

    '@shadow-color-A': 'rgba(0, 0, 0, 0.2)',
    '@shadow-color-B': 'rgba(0, 0, 0, 0.3)'
  },
  {
    '@homestyler-prefix-cls': 'homestyler',

    // antd 组件样式变量自定义
    '@info-color': '@blue-color',
    '@success-color': '@green-color',
    '@error-color': '@red-color',
    '@warning-color': '@yellow-color',
    '@highlight-color': '@red-color',

    '@primary-1': '@primary-color',
    '@primary-2': '@primary-color',
    // '@primary-5': '@primary-color',

    // Background color for `<body>`
    '@body-background': '@white-color',
    // Base background color for most components
    '@component-background': '@white-color',
    '@font-family': '-apple-system-font, PingFang SC, Helvetica Neue, Hiragino Sans GB, Microsoft YaHei, sans-serif',
    '@heading-color': '@text-color',
    '@text-color': '@gray-color-B',
    '@text-color-secondary': '@gray-color-C',
    '@text-color-warning': '@warning-color',
    '@text-color-danger': '@error-color',
    '@text-color-dark': '@primary-color',
    '@font-size-base': '14px',
    '@font-size-lg': '@font-size-base + 2px',
    '@font-size-sm': '12px',
    '@line-height-base': '1.5',
    '@border-radius-base': '4px',
    '@border-radius-sm': '2px',

    // vertical paddings
    // containers
    '@padding-lg': '24px',
    // small containers and buttons
    '@padding-md': '16px',
    // Form controls and items
    '@padding-sm': '12px',
    // small items
    '@padding-xs': '8px',

    // vertical padding for all form controls
    '@control-padding-horizontal': '@padding-sm',
    '@control-padding-horizontal-sm': '@padding-xs',

    // The background colors for active and hover states for things like
    // list items or table cells.
    '@item-active-bg': '@blue-light-color',
    '@item-hover-bg': '@blue-light-color',

    // LINK
    '@link-color': '@blue-color',
    '@link-hover-color': '@blue-color',
    '@link-active-color': '@blue-color',

    // Border color
    // base border outline a component
    '@border-color-base': '@gray-color-E',
    // split border inside a component
    '@border-color-split': '@gray-color-I',
    // width of the border for a component
    '@border-width-base': '1px',
    // style of a components border
    '@border-style-base': 'solid',

    // Outline
    '@outline-blur-size': 0,
    '@outline-width': '0px',
    '@outline-color': 'transparent',

    // background of header and selected item
    '@background-color-light': '@white-color',
    // Default grey background color
    '@background-color-base': '@white-color',

    // Disabled states
    '@disabled-color': '@gray-color-D',
    '@disabled-bg': '@gray-color-J',

    // Shadow
    '@shadow-color': 'fade(@gray-color-A, 10%)',
    '@box-shadow-base': '@shadow-1-down',
    '@shadow-1-up': '0 -2px 8px @shadow-color',
    '@shadow-1-down': '0 2px 8px @shadow-color',
    '@shadow-1-left': '-2px 0 8px @shadow-color',
    '@shadow-1-right': '2px 0 8px @shadow-color',
    '@shadow-2': '0 0px 4px @shadow-color',

    // Buttons
    '@btn-font-weight': 400,
    '@btn-border-radius-base': '@border-radius-base',
    '@btn-border-radius-sm': '@border-radius-sm',
    '@btn-shadow': 'none',
    '@btn-primary-shadow': 'none',
    '@btn-text-shadow': 'none',

    '@btn-primary-color': '@white-color',
    '@btn-primary-bg': '@primary-color',

    '@btn-default-color': '@primary-color',
    '@btn-default-bg': '@white-color',
    '@btn-default-border': '@gray-color-E',

    '@btn-danger-color': '@white-color',
    '@btn-danger-bg': '@red-color',
    '@btn-danger-border': '@red-color',

    '@btn-disable-color': '@disabled-color',
    '@btn-disable-bg': '@disabled-bg',
    '@btn-disable-border': '@disabled-bg',

    '@btn-padding-base': '0 @padding-md',
    '@btn-font-size-lg': '@font-size-lg',
    '@btn-font-size-sm': '@font-size-sm',
    '@btn-padding-lg': '0 @btn-padding-base',
    '@btn-padding-sm': '0 @padding-xs',

    '@btn-height-base': '32px',
    '@btn-height-sm': '28px',
    '@btn-height-lg': '40px',
    '@btn-height-xg': '48px',

    // Checkbox
    '@checkbox-size': '16px',
    '@checkbox-color': '@blue-color',
    '@checkbox-check-color': '@white-color',
    '@checkbox-border-width': '@border-width-base',

    // Radio
    '@radio-size': '16px',
    '@radio-dot-color': '@blue-color',

    // Radio buttons
    '@radio-button-bg': '@btn-default-bg',
    '@radio-button-color': '@text-color-secondary',
    '@radio-button-hover-color': '@blue-color',
    '@radio-button-active-color': '@blue-color',

    // Input
    // ---
    '@input-height-base': '32px',
    '@input-height-lg': '40px',
    '@input-height-sm': '24px',
    '@input-padding-horizontal': '@control-padding-horizontal',
    '@input-padding-horizontal-base': '@input-padding-horizontal',
    '@input-padding-horizontal-sm': '@control-padding-horizontal-sm - 1px',
    '@input-padding-horizontal-lg': '@input-padding-horizontal',
    '@input-padding-vertical-base': '5px',
    '@input-padding-vertical-sm': '@input-padding-vertical-base',
    '@input-padding-vertical-lg': '@input-padding-vertical-base',
    '@input-placeholder-color': '@gray-color-D',
    '@input-color': '@text-color',
    '@input-border-color': '@border-color-base',
    '@input-bg': '@white-color',
    '@input-addon-bg': '@input-bg',
    '@input-hover-border-color': '@input-border-color',
    '@input-disabled-bg': '@disabled-bg',
    '@input-outline-offset': '0 0',
    '@input-active-color': '@blue-color',

    // Tooltip
    // ---
    //* Tooltip max width
    '@tooltip-max-width': '240px',
    // ** Tooltip text color
    '@tooltip-color': '@text-color',
    // ** Tooltip background color
    '@tooltip-bg': '@component-background',
    // ** Tooltip arrow width
    '@tooltip-arrow-width': '5px',
    // ** Tooltip distance with trigger
    '@tooltip-distance': '@tooltip-arrow-width - 1px + 4px',
    // ** Tooltip arrow color
    '@tooltip-arrow-color': '@tooltip-bg',

    // Popover
    // ---
    //* * Popover body background color
    '@popover-bg': '@white-color',
    //* * Popover text color
    '@popover-color': '@text-color',
    //* * Popover maximum width
    '@popover-min-width': '30px',
    //* * Popover arrow width
    '@popover-arrow-width': '6px',
    //* * Popover arrow color
    '@popover-arrow-color': '@popover-bg',
    //* * Popover outer arrow width
    //* * Popover outer arrow color
    '@popover-arrow-outer-color': '@popover-bg',
    //* * Popover distance with trigger
    '@popover-distance': '@popover-arrow-width + 4px',

    // Modal
    // --
    '@modal-header-bg': '@component-background',
    '@modal-mask-bg': 'fade(@gray-color-A, 50%)',

    // Badge
    // ---
    '@badge-height': '16px',
    '@badge-dot-size': '6px',
    '@badge-font-size': '@font-size-sm',
    '@badge-font-weight': 'normal',
    '@badge-status-size': '6px',
    '@badge-text-color': '@component-background',

    // Switch
    // ---
    '@switch-height': '14px',
    '@switch-sm-height': '12px',
    '@switch-sm-checked-margin-left': '-(@switch-sm-height - 3px)',
    '@switch-disabled-opacity': '1',
    '@switch-color': '@blue-color',

    // Alert
    // ---
    '@alert-success-border-color': '@success-color',
    '@alert-success-bg-color': '@green-light-color',
    '@alert-success-icon-color': '@success-color',
    '@alert-info-border-color': '@info-color',
    '@alert-info-bg-color': '@blue-light-color',
    '@alert-info-icon-color': '@info-color',
    '@alert-warning-border-color': '@warning-color',
    '@alert-warning-bg-color': '@yellow-light-color',
    '@alert-warning-icon-color': '@warning-color',
    '@alert-error-border-color': '@error-color',
    '@alert-error-bg-color': '@red-light-color',
    '@alert-error-icon-color': '@error-color'
  }
);
