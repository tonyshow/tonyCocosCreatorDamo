"use strict";

Vue.component("window-type-enum", {
    template: `
<ui-prop v-prop="target.EnumWindowType"></ui-prop>
<ui-prop v-prop="target.sceneEnum" v-show="target.EnumWindowType.value==1"></ui-prop>
<ui-prop v-prop="target.msgEnum" v-show="target.EnumWindowType.value==2"></ui-prop>
  `,
    props: {
        target: {
            twoWay: true,
            type: Object,
        },
    }
});