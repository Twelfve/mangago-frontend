import {
  zindexutils
} from "./chunk-AHMOI77P.js";
import {
  animate,
  style,
  transition,
  trigger
} from "./chunk-VPINC7MZ.js";
import {
  InputText
} from "./chunk-7LWXCFGJ.js";
import {
  AutoFocus,
  ConnectedOverlayScrollHandler,
  DomHandler
} from "./chunk-WXXGSTW3.js";
import {
  EyeIcon,
  EyeSlashIcon,
  TimesIcon
} from "./chunk-TE3E6JOX.js";
import {
  BaseComponent
} from "./chunk-EE67NGM3.js";
import {
  BaseStyle
} from "./chunk-6IXKFXSP.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-I3GN3EYL.js";
import "./chunk-CXLCIVKG.js";
import {
  OverlayService,
  PrimeTemplate,
  SharedModule,
  TranslationKeys,
  absolutePosition,
  addClass,
  getOuterWidth,
  hasClass,
  isTouchDevice,
  relativePosition,
  removeClass
} from "./chunk-4HF4XUE6.js";
import "./chunk-YEGQNUUB.js";
import {
  CommonModule,
  NgClass,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-MIJT6FLR.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  EventEmitter,
  HostListener,
  Injectable,
  Input,
  NgModule,
  NgZone,
  Output,
  Pipe,
  ViewChild,
  ViewEncapsulation$1,
  booleanAttribute,
  forwardRef,
  inject,
  numberAttribute,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsetNgModuleScope,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-O4XABTPG.js";
import "./chunk-5OPE3T2R.js";
import "./chunk-4N4GOYJH.js";
import "./chunk-FHTVLBLO.js";
import "./chunk-WDMUDEB6.js";

// node_modules/primeng/fesm2022/primeng-password.mjs
var theme = ({
  dt
}) => `
.p-password {
    display: inline-flex;
    position: relative;
}

.p-password .p-password-overlay {
    min-width: 100%;
}

.p-password-meter {
    height: ${dt("password.meter.height")};
    background: ${dt("password.meter.background")};
    border-radius: ${dt("password.meter.border.radius")};
}

.p-password-meter-label {
    height: 100%;
    width: 0;
    transition: width 1s ease-in-out;
    border-radius: ${dt("password.meter.border.radius")};
}

.p-password-meter-weak {
    background: ${dt("password.strength.weak.background")};
}

.p-password-meter-medium {
    background: ${dt("password.strength.medium.background")};
}

.p-password-meter-strong {
    background: ${dt("password.strength.strong.background")};
}

.p-password-fluid {
    display: flex;
}

.p-password-fluid .p-password-input {
    width: 100%;
}

.p-password-input::-ms-reveal,
.p-password-input::-ms-clear {
    display: none;
}

.p-password-overlay {
    position: absolute;
    padding: ${dt("password.overlay.padding")};
    background: ${dt("password.overlay.background")};
    color: ${dt("password.overlay.color")};
    border: 1px solid ${dt("password.overlay.border.color")};
    box-shadow: ${dt("password.overlay.shadow")};
    border-radius: ${dt("password.overlay.border.radius")};
}

.p-password-content {
    display: flex;
    flex-direction: column;
    gap: ${dt("password.content.gap")};
}

.p-password-toggle-mask-icon {
    inset-inline-end: ${dt("form.field.padding.x")};
    color: ${dt("password.icon.color")};
    position: absolute;
    top: 50%;
    margin-top: calc(-1 * calc(${dt("icon.size")} / 2));
    width: ${dt("icon.size")};
    height: ${dt("icon.size")};
}

.p-password:has(.p-password-toggle-mask-icon) .p-password-input {
    padding-inline-end: calc((${dt("form.field.padding.x")} * 2) + ${dt("icon.size")});
}

/* For PrimeNG */
p-password.ng-invalid.ng-dirty .p-inputtext {
    border-color: ${dt("inputtext.invalid.border.color")};
}

p-password.ng-invalid.ng-dirty .p-inputtext:enabled:focus {
    border-color: ${dt("inputtext.focus.border.color")};
}

p-password.ng-invalid.ng-dirty .p-inputtext::placeholder {
    color: ${dt("inputtext.invalid.placeholder.color")};
}

.p-password-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    cursor: pointer;
    inset-inline-end: ${dt("form.field.padding.x")};
    color: ${dt("form.field.icon.color")};
}

.p-password-fluid-directive {
    width:100%
}
`;
var inlineStyles = {
  root: ({
    instance
  }) => ({
    position: instance.appendTo === "self" ? "relative" : void 0
  })
};
var classes = {
  root: ({
    instance
  }) => ({
    "p-password p-component p-inputwrapper": true,
    "p-inputwrapper-filled": instance.filled(),
    "p-inputwrapper-focus": instance.focused,
    "p-password-fluid": instance.hasFluid
  }),
  pcInput: "p-password-input",
  maskIcon: "p-password-toggle-mask-icon p-password-mask-icon",
  unmaskIcon: "p-password-toggle-mask-icon p-password-unmask-icon",
  overlay: "p-password-overlay p-component",
  content: "p-password-content",
  meter: "p-password-meter",
  meterLabel: ({
    instance
  }) => `p-password-meter-label ${instance.meter ? "p-password-meter-" + instance.meter.strength : ""}`,
  meterText: "p-password-meter-text"
};
var PasswordStyle = class _PasswordStyle extends BaseStyle {
  name = "password";
  theme = theme;
  classes = classes;
  inlineStyles = inlineStyles;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵPasswordStyle_BaseFactory;
    return function PasswordStyle_Factory(__ngFactoryType__) {
      return (ɵPasswordStyle_BaseFactory || (ɵPasswordStyle_BaseFactory = ɵɵgetInheritedFactory(_PasswordStyle)))(__ngFactoryType__ || _PasswordStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _PasswordStyle,
    factory: _PasswordStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PasswordStyle, [{
    type: Injectable
  }], null, null);
})();
var PasswordClasses;
(function(PasswordClasses2) {
  PasswordClasses2["root"] = "p-password";
  PasswordClasses2["pcInput"] = "p-password-input";
  PasswordClasses2["maskIcon"] = "p-password-mask-icon";
  PasswordClasses2["unmaskIcon"] = "p-password-unmask-icon";
  PasswordClasses2["overlay"] = "p-password-overlay";
  PasswordClasses2["meter"] = "p-password-meter";
  PasswordClasses2["meterLabel"] = "p-password-meter-label";
  PasswordClasses2["meterText"] = "p-password-meter-text";
})(PasswordClasses || (PasswordClasses = {}));
var _c0 = ["content"];
var _c1 = ["footer"];
var _c2 = ["header"];
var _c3 = ["clearicon"];
var _c4 = ["headericon"];
var _c5 = ["showicon"];
var _c6 = ["input"];
var _c7 = () => ({
  class: "p-password-toggle-mask-icon p-password-mask-icon"
});
var _c8 = (a0, a1) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1
});
var _c9 = (a0) => ({
  value: "visible",
  params: a0
});
var _c10 = (a0) => ({
  width: a0
});
function Password_ng_container_5_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "TimesIcon", 8);
    ɵɵlistener("click", function Password_ng_container_5_TimesIcon_1_Template_TimesIcon_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.clear());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵattribute("data-pc-section", "clearIcon");
  }
}
function Password_ng_container_5_3_ng_template_0_Template(rf, ctx) {
}
function Password_ng_container_5_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Password_ng_container_5_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Password_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Password_ng_container_5_TimesIcon_1_Template, 1, 1, "TimesIcon", 7);
    ɵɵelementStart(2, "span", 8);
    ɵɵlistener("click", function Password_ng_container_5_Template_span_click_2_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.clear());
    });
    ɵɵtemplate(3, Password_ng_container_5_3_Template, 1, 0, null, 9);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r3.clearIconTemplate && !ctx_r3._clearIconTemplate);
    ɵɵadvance();
    ɵɵattribute("data-pc-section", "clearIcon");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r3.clearIconTemplate || ctx_r3._clearIconTemplate);
  }
}
function Password_ng_container_6_ng_container_1_EyeSlashIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "EyeSlashIcon", 12);
    ɵɵlistener("click", function Password_ng_container_6_ng_container_1_EyeSlashIcon_1_Template_EyeSlashIcon_click_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r3 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r3.onMaskToggle());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵattribute("data-pc-section", "hideIcon");
  }
}
function Password_ng_container_6_ng_container_1_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Password_ng_container_6_ng_container_1_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Password_ng_container_6_ng_container_1_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Password_ng_container_6_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 13);
    ɵɵlistener("click", function Password_ng_container_6_ng_container_1_span_2_Template_span_click_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r3 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r3.onMaskToggle());
    });
    ɵɵtemplate(1, Password_ng_container_6_ng_container_1_span_2_1_Template, 1, 0, null, 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r3.hideIconTemplate || ctx_r3._hideIconTemplate)("ngTemplateOutletContext", ɵɵpureFunction0(2, _c7));
  }
}
function Password_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Password_ng_container_6_ng_container_1_EyeSlashIcon_1_Template, 1, 1, "EyeSlashIcon", 10)(2, Password_ng_container_6_ng_container_1_span_2_Template, 2, 3, "span", 11);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r3.hideIconTemplate && !ctx_r3._hideIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r3.hideIconTemplate || ctx_r3._hideIconTemplate);
  }
}
function Password_ng_container_6_ng_container_2_EyeIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "EyeIcon", 12);
    ɵɵlistener("click", function Password_ng_container_6_ng_container_2_EyeIcon_1_Template_EyeIcon_click_0_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r3 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r3.onMaskToggle());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵattribute("data-pc-section", "showIcon");
  }
}
function Password_ng_container_6_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Password_ng_container_6_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Password_ng_container_6_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Password_ng_container_6_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 13);
    ɵɵlistener("click", function Password_ng_container_6_ng_container_2_span_2_Template_span_click_0_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r3 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r3.onMaskToggle());
    });
    ɵɵtemplate(1, Password_ng_container_6_ng_container_2_span_2_1_Template, 1, 0, null, 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r3.showIconTemplate || ctx_r3._showIconTemplate);
  }
}
function Password_ng_container_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Password_ng_container_6_ng_container_2_EyeIcon_1_Template, 1, 1, "EyeIcon", 10)(2, Password_ng_container_6_ng_container_2_span_2_Template, 2, 1, "span", 11);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r3.showIconTemplate && !ctx_r3._showIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r3.showIconTemplate || ctx_r3._showIconTemplate);
  }
}
function Password_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Password_ng_container_6_ng_container_1_Template, 3, 2, "ng-container", 5)(2, Password_ng_container_6_ng_container_2_Template, 3, 2, "ng-container", 5);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r3.unmasked);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r3.unmasked);
  }
}
function Password_div_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Password_div_7_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Password_div_7_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Password_div_7_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 9);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r3.contentTemplate || ctx_r3._contentTemplate);
  }
}
function Password_div_7_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 17)(1, "div", 18);
    ɵɵelement(2, "div", 3);
    ɵɵpipe(3, "mapper");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 19);
    ɵɵtext(5);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵattribute("data-pc-section", "meter");
    ɵɵadvance();
    ɵɵproperty("ngClass", ɵɵpipeBind2(3, 6, ctx_r3.meter, ctx_r3.strengthClass))("ngStyle", ɵɵpureFunction1(9, _c10, ctx_r3.meter ? ctx_r3.meter.width : ""));
    ɵɵattribute("data-pc-section", "meterLabel");
    ɵɵadvance(2);
    ɵɵattribute("data-pc-section", "info");
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r3.infoText);
  }
}
function Password_div_7_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Password_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 15, 1);
    ɵɵlistener("click", function Password_div_7_Template_div_click_0_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.onOverlayClick($event));
    })("@overlayAnimation.start", function Password_div_7_Template_div_animation_overlayAnimation_start_0_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.onAnimationStart($event));
    })("@overlayAnimation.done", function Password_div_7_Template_div_animation_overlayAnimation_done_0_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.onAnimationEnd($event));
    });
    ɵɵtemplate(2, Password_div_7_ng_container_2_Template, 1, 0, "ng-container", 9)(3, Password_div_7_ng_container_3_Template, 2, 1, "ng-container", 16)(4, Password_div_7_ng_template_4_Template, 6, 11, "ng-template", null, 2, ɵɵtemplateRefExtractor)(6, Password_div_7_ng_container_6_Template, 1, 0, "ng-container", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const content_r10 = ɵɵreference(5);
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("@overlayAnimation", ɵɵpureFunction1(9, _c9, ɵɵpureFunction2(6, _c8, ctx_r3.showTransitionOptions, ctx_r3.hideTransitionOptions)));
    ɵɵattribute("data-pc-section", "panel");
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r3.headerTemplate || ctx_r3._headerTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r3.contentTemplate || ctx_r3._contentTemplate)("ngIfElse", content_r10);
    ɵɵadvance(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r3.footerTemplate || ctx_r3._footerTemplate);
  }
}
var PasswordDirective = class _PasswordDirective extends BaseComponent {
  zone;
  /**
   * Text to prompt password entry. Defaults to PrimeNG I18N API configuration.
   * @group Props
   */
  promptLabel = "Enter a password";
  /**
   * Text for a weak password. Defaults to PrimeNG I18N API configuration.
   * @group Props
   */
  weakLabel = "Weak";
  /**
   * Text for a medium password. Defaults to PrimeNG I18N API configuration.
   * @group Props
   */
  mediumLabel = "Medium";
  /**
   * Text for a strong password. Defaults to PrimeNG I18N API configuration.
   * @group Props
   */
  strongLabel = "Strong";
  /**
   * Whether to show the strength indicator or not.
   * @group Props
   */
  feedback = true;
  /**
   * Sets the visibility of the password field.
   * @group Props
   */
  set showPassword(show) {
    this.el.nativeElement.type = show ? "text" : "password";
  }
  /**
   * Specifies the input variant of the component.
   * @group Props
   */
  variant = "outlined";
  /**
   * Spans 100% width of the container when enabled.
   * @group Props
   */
  fluid = false;
  panel;
  meter;
  info;
  filled;
  content;
  label;
  scrollHandler;
  documentResizeListener;
  _componentStyle = inject(PasswordStyle);
  get hasFluid() {
    const nativeElement = this.el.nativeElement;
    const fluidComponent = nativeElement.closest("p-fluid");
    return this.fluid || !!fluidComponent;
  }
  constructor(zone) {
    super();
    this.zone = zone;
  }
  ngDoCheck() {
    this.updateFilledState();
  }
  onInput(e) {
    this.updateFilledState();
  }
  updateFilledState() {
    this.filled = this.el.nativeElement.value && this.el.nativeElement.value.length;
  }
  createPanel() {
    if (isPlatformBrowser(this.platformId)) {
      this.panel = this.renderer.createElement("div");
      this.renderer.addClass(this.panel, "p-password-overlay");
      this.renderer.addClass(this.panel, "p-component");
      this.content = this.renderer.createElement("div");
      this.renderer.addClass(this.content, "p-password-content");
      this.renderer.appendChild(this.panel, this.content);
      this.meter = this.renderer.createElement("div");
      this.renderer.addClass(this.meter, "p-password-meter");
      this.renderer.appendChild(this.content, this.meter);
      this.label = this.renderer.createElement("div");
      this.renderer.addClass(this.label, "p-password-meter-label");
      this.renderer.appendChild(this.meter, this.label);
      this.info = this.renderer.createElement("div");
      this.renderer.addClass(this.info, "p-password-meter-text");
      this.renderer.setProperty(this.info, "textContent", this.promptLabel);
      this.renderer.appendChild(this.content, this.info);
      this.renderer.setStyle(this.panel, "minWidth", `${this.el.nativeElement.offsetWidth}px`);
      this.renderer.appendChild(document.body, this.panel);
      this.updateMeter();
    }
  }
  showOverlay() {
    if (this.feedback) {
      if (!this.panel) {
        this.createPanel();
      }
      this.renderer.setStyle(this.panel, "zIndex", String(++DomHandler.zindex));
      this.renderer.setStyle(this.panel, "display", "block");
      this.zone.runOutsideAngular(() => {
        setTimeout(() => {
          addClass(this.panel, "p-connected-overlay-visible");
          this.bindScrollListener();
          this.bindDocumentResizeListener();
        }, 1);
      });
      absolutePosition(this.panel, this.el.nativeElement);
    }
  }
  hideOverlay() {
    if (this.feedback && this.panel) {
      addClass(this.panel, "p-connected-overlay-hidden");
      removeClass(this.panel, "p-connected-overlay-visible");
      this.unbindScrollListener();
      this.unbindDocumentResizeListener();
      this.zone.runOutsideAngular(() => {
        setTimeout(() => {
          this.ngOnDestroy();
        }, 150);
      });
    }
  }
  onFocus() {
    this.showOverlay();
  }
  onBlur() {
    this.hideOverlay();
  }
  labelSignal = signal("");
  onKeyup(e) {
    if (this.feedback) {
      let value = e.target.value, label = null, meterPos = null;
      if (value.length === 0) {
        label = this.promptLabel;
        meterPos = "0px 0px";
      } else {
        var score = this.testStrength(value);
        if (score < 30) {
          label = this.weakLabel;
          meterPos = "0px -10px";
        } else if (score >= 30 && score < 80) {
          label = this.mediumLabel;
          meterPos = "0px -20px";
        } else if (score >= 80) {
          label = this.strongLabel;
          meterPos = "0px -30px";
        }
        this.labelSignal.set(label);
        this.updateMeter();
      }
      if (!this.panel || !hasClass(this.panel, "p-connected-overlay-visible")) {
        this.showOverlay();
      }
      this.renderer.setStyle(this.meter, "backgroundPosition", meterPos);
      this.info.textContent = label;
    }
  }
  updateMeter() {
    if (this.labelSignal()) {
      const label = this.labelSignal();
      const strengthClass = this.strengthClass(label.toLowerCase());
      const width = this.getWidth(label.toLowerCase());
      this.renderer.addClass(this.meter, strengthClass);
      this.renderer.setStyle(this.meter, "width", width);
      this.info.textContent = label;
    }
  }
  getWidth(label) {
    return label === "weak" ? "33.33%" : label === "medium" ? "66.66%" : label === "strong" ? "100%" : "";
  }
  strengthClass(label) {
    return `p-password-meter${label ? `-${label}` : ""}`;
  }
  testStrength(str) {
    let grade = 0;
    let val;
    val = str.match("[0-9]");
    grade += this.normalize(val ? val.length : 1 / 4, 1) * 25;
    val = str.match("[a-zA-Z]");
    grade += this.normalize(val ? val.length : 1 / 2, 3) * 10;
    val = str.match("[!@#$%^&*?_~.,;=]");
    grade += this.normalize(val ? val.length : 1 / 6, 1) * 35;
    val = str.match("[A-Z]");
    grade += this.normalize(val ? val.length : 1 / 6, 1) * 30;
    grade *= str.length / 8;
    return grade > 100 ? 100 : grade;
  }
  normalize(x, y) {
    let diff = x - y;
    if (diff <= 0) return x / y;
    else return 1 + 0.5 * (x / (x + y / 4));
  }
  get disabled() {
    return this.el.nativeElement.disabled;
  }
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.el.nativeElement, () => {
        if (hasClass(this.panel, "p-connected-overlay-visible")) {
          this.hideOverlay();
        }
      });
    }
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  bindDocumentResizeListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.documentResizeListener) {
        const window = this.document.defaultView;
        this.documentResizeListener = this.renderer.listen(window, "resize", this.onWindowResize.bind(this));
      }
    }
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  onWindowResize() {
    if (!isTouchDevice()) {
      this.hideOverlay();
    }
  }
  ngOnDestroy() {
    if (this.panel) {
      if (this.scrollHandler) {
        this.scrollHandler.destroy();
        this.scrollHandler = null;
      }
      this.unbindDocumentResizeListener();
      this.renderer.removeChild(this.document.body, this.panel);
      this.panel = null;
      this.meter = null;
      this.info = null;
    }
    super.ngOnDestroy();
  }
  static ɵfac = function PasswordDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PasswordDirective)(ɵɵdirectiveInject(NgZone));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _PasswordDirective,
    selectors: [["", "pPassword", ""]],
    hostAttrs: [1, "p-password", "p-inputtext", "p-component", "p-inputwrapper"],
    hostVars: 6,
    hostBindings: function PasswordDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("input", function PasswordDirective_input_HostBindingHandler($event) {
          return ctx.onInput($event);
        })("focus", function PasswordDirective_focus_HostBindingHandler() {
          return ctx.onFocus();
        })("blur", function PasswordDirective_blur_HostBindingHandler() {
          return ctx.onBlur();
        })("keyup", function PasswordDirective_keyup_HostBindingHandler($event) {
          return ctx.onKeyup($event);
        });
      }
      if (rf & 2) {
        ɵɵclassProp("p-inputwrapper-filled", ctx.filled)("p-variant-filled", ctx.variant === "filled" || ctx.config.inputStyle() === "filled" || ctx.config.inputVariant() === "filled")("p-password-fluid-directive", ctx.hasFluid);
      }
    },
    inputs: {
      promptLabel: "promptLabel",
      weakLabel: "weakLabel",
      mediumLabel: "mediumLabel",
      strongLabel: "strongLabel",
      feedback: [2, "feedback", "feedback", booleanAttribute],
      showPassword: "showPassword",
      variant: "variant",
      fluid: [2, "fluid", "fluid", booleanAttribute]
    },
    standalone: true,
    features: [ɵɵProvidersFeature([PasswordStyle]), ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PasswordDirective, [{
    type: Directive,
    args: [{
      selector: "[pPassword]",
      standalone: true,
      host: {
        class: "p-password p-inputtext p-component p-inputwrapper",
        "[class.p-inputwrapper-filled]": "filled",
        "[class.p-variant-filled]": 'variant === "filled" || config.inputStyle() === "filled" || config.inputVariant() === "filled"',
        "[class.p-password-fluid-directive]": "hasFluid"
      },
      providers: [PasswordStyle]
    }]
  }], () => [{
    type: NgZone
  }], {
    promptLabel: [{
      type: Input
    }],
    weakLabel: [{
      type: Input
    }],
    mediumLabel: [{
      type: Input
    }],
    strongLabel: [{
      type: Input
    }],
    feedback: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showPassword: [{
      type: Input
    }],
    variant: [{
      type: Input
    }],
    fluid: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onInput: [{
      type: HostListener,
      args: ["input", ["$event"]]
    }],
    onFocus: [{
      type: HostListener,
      args: ["focus"]
    }],
    onBlur: [{
      type: HostListener,
      args: ["blur"]
    }],
    onKeyup: [{
      type: HostListener,
      args: ["keyup", ["$event"]]
    }]
  });
})();
var MapperPipe = class _MapperPipe {
  transform(value, mapper, ...args) {
    return mapper(value, ...args);
  }
  static ɵfac = function MapperPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MapperPipe)();
  };
  static ɵpipe = ɵɵdefinePipe({
    name: "mapper",
    type: _MapperPipe,
    pure: true,
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapperPipe, [{
    type: Pipe,
    args: [{
      name: "mapper",
      pure: true,
      standalone: true
    }]
  }], null, null);
})();
var Password_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => Password),
  multi: true
};
var Password = class _Password extends BaseComponent {
  /**
   * Defines a string that labels the input for accessibility.
   * @group Props
   */
  ariaLabel;
  /**
   * Whether the component should span the full width of its parent.
   * @group Props
   */
  fluid;
  /**
   * Specifies one or more IDs in the DOM that labels the input field.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Label of the input for accessibility.
   * @group Props
   */
  label;
  /**
   * Indicates whether the component is disabled or not.
   * @group Props
   */
  disabled;
  /**
   * Text to prompt password entry. Defaults to PrimeNG I18N API configuration.
   * @group Props
   */
  promptLabel;
  /**
   * Regex value for medium regex.
   * @group Props
   */
  mediumRegex = "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})";
  /**
   * Regex value for strong regex.
   * @group Props
   */
  strongRegex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})";
  /**
   * Text for a weak password. Defaults to PrimeNG I18N API configuration.
   * @group Props
   */
  weakLabel;
  /**
   * Text for a medium password. Defaults to PrimeNG I18N API configuration.
   * @group Props
   */
  mediumLabel;
  /**
   * specifies the maximum number of characters allowed in the input element.
   * @group Props
   */
  maxLength;
  /**
   * Text for a strong password. Defaults to PrimeNG I18N API configuration.
   * @group Props
   */
  strongLabel;
  /**
   * Identifier of the accessible input element.
   * @group Props
   */
  inputId;
  /**
   * Whether to show the strength indicator or not.
   * @group Props
   */
  feedback = true;
  /**
   * Id of the element or "body" for document where the overlay should be appended to.
   * @group Props
   */
  appendTo;
  /**
   * Whether to show an icon to display the password as plain text.
   * @group Props
   */
  toggleMask;
  /**
   * Defines the size of the component.
   * @group Props
   */
  size;
  /**
   * Style class of the input field.
   * @group Props
   */
  inputStyleClass;
  /**
   * Style class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Inline style of the input field.
   * @group Props
   */
  inputStyle;
  /**
   * Transition options of the show animation.
   * @group Props
   */
  showTransitionOptions = ".12s cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Transition options of the hide animation.
   * @group Props
   */
  hideTransitionOptions = ".1s linear";
  /**
   * Specify automated assistance in filling out password by browser.
   * @group Props
   */
  autocomplete;
  /**
   * Advisory information to display on input.
   * @group Props
   */
  placeholder;
  /**
   * When enabled, a clear icon is displayed to clear the value.
   * @group Props
   */
  showClear = false;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Specifies the input variant of the component.
   * @group Props
   */
  variant = "outlined";
  /**
   * Callback to invoke when the component receives focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when the component loses focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Callback to invoke when clear button is clicked.
   * @group Emits
   */
  onClear = new EventEmitter();
  input;
  contentTemplate;
  footerTemplate;
  headerTemplate;
  clearIconTemplate;
  hideIconTemplate;
  showIconTemplate;
  templates;
  _contentTemplate;
  _footerTemplate;
  _headerTemplate;
  _clearIconTemplate;
  _hideIconTemplate;
  _showIconTemplate;
  overlayVisible = false;
  meter;
  infoText;
  focused = false;
  unmasked = false;
  mediumCheckRegExp;
  strongCheckRegExp;
  resizeListener;
  scrollHandler;
  overlay;
  value = null;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  translationSubscription;
  _componentStyle = inject(PasswordStyle);
  get hasFluid() {
    const nativeElement = this.el.nativeElement;
    const fluidComponent = nativeElement.closest("p-fluid");
    return this.fluid || !!fluidComponent;
  }
  overlayService = inject(OverlayService);
  ngOnInit() {
    super.ngOnInit();
    this.infoText = this.promptText();
    this.mediumCheckRegExp = new RegExp(this.mediumRegex);
    this.strongCheckRegExp = new RegExp(this.strongRegex);
    this.translationSubscription = this.config.translationObserver.subscribe(() => {
      this.updateUI(this.value || "");
    });
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this._contentTemplate = item.template;
          break;
        case "header":
          this._headerTemplate = item.template;
          break;
        case "footer":
          this._footerTemplate = item.template;
          break;
        case "clearicon":
          this._clearIconTemplate = item.template;
          break;
        case "hideicon":
          this._hideIconTemplate = item.template;
          break;
        case "showicon":
          this._showIconTemplate = item.template;
          break;
        default:
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  onAnimationStart(event) {
    switch (event.toState) {
      case "visible":
        this.overlay = event.element;
        zindexutils.set("overlay", this.overlay, this.config.zIndex.overlay);
        this.appendContainer();
        this.alignOverlay();
        this.bindScrollListener();
        this.bindResizeListener();
        break;
      case "void":
        this.unbindScrollListener();
        this.unbindResizeListener();
        this.overlay = null;
        break;
    }
  }
  onAnimationEnd(event) {
    switch (event.toState) {
      case "void":
        zindexutils.clear(event.element);
        break;
    }
  }
  appendContainer() {
    if (this.appendTo) {
      if (this.appendTo === "body") this.renderer.appendChild(this.document.body, this.overlay);
      else this.document.getElementById(this.appendTo).appendChild(this.overlay);
    }
  }
  alignOverlay() {
    if (this.appendTo) {
      this.overlay.style.minWidth = getOuterWidth(this.input.nativeElement) + "px";
      absolutePosition(this.overlay, this.input.nativeElement);
    } else {
      relativePosition(this.overlay, this.input.nativeElement);
    }
  }
  onInput(event) {
    this.value = event.target.value;
    this.onModelChange(this.value);
  }
  onInputFocus(event) {
    this.focused = true;
    if (this.feedback) {
      this.overlayVisible = true;
    }
    this.onFocus.emit(event);
  }
  onInputBlur(event) {
    this.focused = false;
    if (this.feedback) {
      this.overlayVisible = false;
    }
    this.onModelTouched();
    this.onBlur.emit(event);
  }
  onKeyUp(event) {
    if (this.feedback) {
      let value = event.target.value;
      this.updateUI(value);
      if (event.code === "Escape") {
        this.overlayVisible && (this.overlayVisible = false);
        return;
      }
      if (!this.overlayVisible) {
        this.overlayVisible = true;
      }
    }
  }
  updateUI(value) {
    let label = null;
    let meter = null;
    switch (this.testStrength(value)) {
      case 1:
        label = this.weakText();
        meter = {
          strength: "weak",
          width: "33.33%"
        };
        break;
      case 2:
        label = this.mediumText();
        meter = {
          strength: "medium",
          width: "66.66%"
        };
        break;
      case 3:
        label = this.strongText();
        meter = {
          strength: "strong",
          width: "100%"
        };
        break;
      default:
        label = this.promptText();
        meter = null;
        break;
    }
    this.meter = meter;
    this.infoText = label;
  }
  onMaskToggle() {
    this.unmasked = !this.unmasked;
  }
  onOverlayClick(event) {
    this.overlayService.add({
      originalEvent: event,
      target: this.el.nativeElement
    });
  }
  testStrength(str) {
    let level = 0;
    if (this.strongCheckRegExp.test(str)) level = 3;
    else if (this.mediumCheckRegExp.test(str)) level = 2;
    else if (str.length) level = 1;
    return level;
  }
  writeValue(value) {
    if (value === void 0) this.value = null;
    else this.value = value;
    if (this.feedback) this.updateUI(this.value || "");
    this.cd.markForCheck();
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.disabled = val;
    this.cd.markForCheck();
  }
  bindScrollListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.scrollHandler) {
        this.scrollHandler = new ConnectedOverlayScrollHandler(this.input.nativeElement, () => {
          if (this.overlayVisible) {
            this.overlayVisible = false;
          }
        });
      }
      this.scrollHandler.bindScrollListener();
    }
  }
  bindResizeListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.resizeListener) {
        const window = this.document.defaultView;
        this.resizeListener = this.renderer.listen(window, "resize", () => {
          if (this.overlayVisible && !isTouchDevice()) {
            this.overlayVisible = false;
          }
        });
      }
    }
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  unbindResizeListener() {
    if (this.resizeListener) {
      this.resizeListener();
      this.resizeListener = null;
    }
  }
  containerClass(toggleMask) {
    return {
      "p-password p-component p-inputwrapper": true,
      "p-input-icon-right": toggleMask
    };
  }
  get rootClass() {
    return this._componentStyle.classes.root({
      instance: this
    });
  }
  inputFieldClass(disabled) {
    return {
      "p-password-input": true,
      "p-disabled": disabled
    };
  }
  strengthClass(meter) {
    return `p-password-meter-label p-password-meter${meter?.strength ? `-${meter.strength}` : ""}`;
  }
  filled() {
    return this.value != null && this.value.toString().length > 0;
  }
  promptText() {
    return this.promptLabel || this.getTranslation(TranslationKeys.PASSWORD_PROMPT);
  }
  weakText() {
    return this.weakLabel || this.getTranslation(TranslationKeys.WEAK);
  }
  mediumText() {
    return this.mediumLabel || this.getTranslation(TranslationKeys.MEDIUM);
  }
  strongText() {
    return this.strongLabel || this.getTranslation(TranslationKeys.STRONG);
  }
  restoreAppend() {
    if (this.overlay && this.appendTo) {
      if (this.appendTo === "body") this.renderer.removeChild(this.document.body, this.overlay);
      else this.document.getElementById(this.appendTo).removeChild(this.overlay);
    }
  }
  inputType(unmasked) {
    return unmasked ? "text" : "password";
  }
  getTranslation(option) {
    return this.config.getTranslation(option);
  }
  clear() {
    this.value = null;
    this.onModelChange(this.value);
    this.writeValue(this.value);
    this.onClear.emit();
  }
  ngOnDestroy() {
    if (this.overlay) {
      zindexutils.clear(this.overlay);
      this.overlay = null;
    }
    this.restoreAppend();
    this.unbindResizeListener();
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    if (this.translationSubscription) {
      this.translationSubscription.unsubscribe();
    }
    super.ngOnDestroy();
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵPassword_BaseFactory;
    return function Password_Factory(__ngFactoryType__) {
      return (ɵPassword_BaseFactory || (ɵPassword_BaseFactory = ɵɵgetInheritedFactory(_Password)))(__ngFactoryType__ || _Password);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _Password,
    selectors: [["p-password"]],
    contentQueries: function Password_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c0, 4);
        ɵɵcontentQuery(dirIndex, _c1, 4);
        ɵɵcontentQuery(dirIndex, _c2, 4);
        ɵɵcontentQuery(dirIndex, _c3, 4);
        ɵɵcontentQuery(dirIndex, _c4, 4);
        ɵɵcontentQuery(dirIndex, _c5, 4);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.footerTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.clearIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.hideIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.showIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Password_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c6, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.input = _t.first);
      }
    },
    inputs: {
      ariaLabel: "ariaLabel",
      fluid: [2, "fluid", "fluid", booleanAttribute],
      ariaLabelledBy: "ariaLabelledBy",
      label: "label",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      promptLabel: "promptLabel",
      mediumRegex: "mediumRegex",
      strongRegex: "strongRegex",
      weakLabel: "weakLabel",
      mediumLabel: "mediumLabel",
      maxLength: [2, "maxLength", "maxLength", numberAttribute],
      strongLabel: "strongLabel",
      inputId: "inputId",
      feedback: [2, "feedback", "feedback", booleanAttribute],
      appendTo: "appendTo",
      toggleMask: [2, "toggleMask", "toggleMask", booleanAttribute],
      size: "size",
      inputStyleClass: "inputStyleClass",
      styleClass: "styleClass",
      style: "style",
      inputStyle: "inputStyle",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      autocomplete: "autocomplete",
      placeholder: "placeholder",
      showClear: [2, "showClear", "showClear", booleanAttribute],
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      variant: "variant"
    },
    outputs: {
      onFocus: "onFocus",
      onBlur: "onBlur",
      onClear: "onClear"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([Password_VALUE_ACCESSOR, PasswordStyle]), ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 8,
    vars: 33,
    consts: [["input", ""], ["overlay", ""], ["content", ""], [3, "ngClass", "ngStyle"], ["pInputText", "", 3, "input", "focus", "blur", "keyup", "disabled", "pSize", "ngClass", "ngStyle", "value", "variant", "pAutoFocus"], [4, "ngIf"], ["class", "p-password-overlay p-component", 3, "click", 4, "ngIf"], ["class", "p-password-clear-icon", 3, "click", 4, "ngIf"], [1, "p-password-clear-icon", 3, "click"], [4, "ngTemplateOutlet"], ["class", "p-password-toggle-mask-icon p-password-mask-icon", 3, "click", 4, "ngIf"], [3, "click", 4, "ngIf"], [1, "p-password-toggle-mask-icon", "p-password-mask-icon", 3, "click"], [3, "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-password-overlay", "p-component", 3, "click"], [4, "ngIf", "ngIfElse"], [1, "p-password-content"], [1, "p-password-meter"], [1, "p-password-meter-text"]],
    template: function Password_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "div", 3)(1, "input", 4, 0);
        ɵɵpipe(3, "mapper");
        ɵɵpipe(4, "mapper");
        ɵɵlistener("input", function Password_Template_input_input_1_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onInput($event));
        })("focus", function Password_Template_input_focus_1_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onInputFocus($event));
        })("blur", function Password_Template_input_blur_1_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onInputBlur($event));
        })("keyup", function Password_Template_input_keyup_1_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onKeyUp($event));
        });
        ɵɵelementEnd();
        ɵɵtemplate(5, Password_ng_container_5_Template, 4, 3, "ng-container", 5)(6, Password_ng_container_6_Template, 3, 2, "ng-container", 5)(7, Password_div_7_Template, 7, 11, "div", 6);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngClass", ctx.rootClass)("ngStyle", ctx.style);
        ɵɵattribute("data-pc-name", "password")("data-pc-section", "root");
        ɵɵadvance();
        ɵɵclassMap(ctx.inputStyleClass);
        ɵɵproperty("disabled", ctx.disabled)("pSize", ctx.size)("ngClass", ɵɵpipeBind2(3, 27, ctx.disabled, ctx.inputFieldClass))("ngStyle", ctx.inputStyle)("value", ctx.value)("variant", ctx.variant)("pAutoFocus", ctx.autofocus);
        ɵɵattribute("label", ctx.label)("aria-label", ctx.ariaLabel)("aria-labelledBy", ctx.ariaLabelledBy)("id", ctx.inputId)("type", ɵɵpipeBind2(4, 30, ctx.unmasked, ctx.inputType))("placeholder", ctx.placeholder)("autocomplete", ctx.autocomplete)("maxlength", ctx.maxLength)("data-pc-section", "input");
        ɵɵadvance(4);
        ɵɵproperty("ngIf", ctx.showClear && ctx.value != null);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.toggleMask);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.overlayVisible);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, NgStyle, InputText, AutoFocus, TimesIcon, EyeSlashIcon, EyeIcon, MapperPipe, SharedModule],
    encapsulation: 2,
    data: {
      animation: [trigger("overlayAnimation", [transition(":enter", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate("{{showTransitionParams}}")]), transition(":leave", [animate("{{hideTransitionParams}}", style({
        opacity: 0
      }))])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Password, [{
    type: Component,
    args: [{
      selector: "p-password",
      standalone: true,
      imports: [CommonModule, InputText, AutoFocus, TimesIcon, EyeSlashIcon, EyeIcon, MapperPipe, SharedModule],
      template: `
        <div [ngClass]="rootClass" [ngStyle]="style" [class]="styleClass" [attr.data-pc-name]="'password'" [attr.data-pc-section]="'root'">
            <input
                #input
                [attr.label]="label"
                [attr.aria-label]="ariaLabel"
                [attr.aria-labelledBy]="ariaLabelledBy"
                [attr.id]="inputId"
                pInputText
                [disabled]="disabled"
                [pSize]="size"
                [ngClass]="disabled | mapper: inputFieldClass"
                [ngStyle]="inputStyle"
                [class]="inputStyleClass"
                [attr.type]="unmasked | mapper: inputType"
                [attr.placeholder]="placeholder"
                [attr.autocomplete]="autocomplete"
                [value]="value"
                [variant]="variant"
                (input)="onInput($event)"
                (focus)="onInputFocus($event)"
                (blur)="onInputBlur($event)"
                (keyup)="onKeyUp($event)"
                [attr.maxlength]="maxLength"
                [attr.data-pc-section]="'input'"
                [pAutoFocus]="autofocus"
            />
            <ng-container *ngIf="showClear && value != null">
                <TimesIcon *ngIf="!clearIconTemplate && !_clearIconTemplate" class="p-password-clear-icon" (click)="clear()" [attr.data-pc-section]="'clearIcon'" />
                <span (click)="clear()" class="p-password-clear-icon" [attr.data-pc-section]="'clearIcon'">
                    <ng-template *ngTemplateOutlet="clearIconTemplate || _clearIconTemplate"></ng-template>
                </span>
            </ng-container>

            <ng-container *ngIf="toggleMask">
                <ng-container *ngIf="unmasked">
                    <EyeSlashIcon class="p-password-toggle-mask-icon p-password-mask-icon" *ngIf="!hideIconTemplate && !_hideIconTemplate" (click)="onMaskToggle()" [attr.data-pc-section]="'hideIcon'" />
                    <span *ngIf="hideIconTemplate || _hideIconTemplate" (click)="onMaskToggle()">
                        <ng-template *ngTemplateOutlet="hideIconTemplate || _hideIconTemplate; context: { class: 'p-password-toggle-mask-icon p-password-mask-icon' }"></ng-template>
                    </span>
                </ng-container>
                <ng-container *ngIf="!unmasked">
                    <EyeIcon *ngIf="!showIconTemplate && !_showIconTemplate" class="p-password-toggle-mask-icon p-password-mask-icon" (click)="onMaskToggle()" [attr.data-pc-section]="'showIcon'" />
                    <span *ngIf="showIconTemplate || _showIconTemplate" (click)="onMaskToggle()">
                        <ng-template *ngTemplateOutlet="showIconTemplate || _showIconTemplate"></ng-template>
                    </span>
                </ng-container>
            </ng-container>

            <div
                #overlay
                *ngIf="overlayVisible"
                class="p-password-overlay p-component"
                (click)="onOverlayClick($event)"
                [@overlayAnimation]="{
                    value: 'visible',
                    params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions }
                }"
                (@overlayAnimation.start)="onAnimationStart($event)"
                (@overlayAnimation.done)="onAnimationEnd($event)"
                [attr.data-pc-section]="'panel'"
            >
                <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
                <ng-container *ngIf="contentTemplate || _contentTemplate; else content">
                    <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate"></ng-container>
                </ng-container>
                <ng-template #content>
                    <div class="p-password-content">
                        <div class="p-password-meter" [attr.data-pc-section]="'meter'">
                            <div [ngClass]="meter | mapper: strengthClass" [ngStyle]="{ width: meter ? meter.width : '' }" [attr.data-pc-section]="'meterLabel'"></div>
                        </div>
                        <div class="p-password-meter-text" [attr.data-pc-section]="'info'">{{ infoText }}</div>
                    </div>
                </ng-template>
                <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate"></ng-container>
            </div>
        </div>
    `,
      animations: [trigger("overlayAnimation", [transition(":enter", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate("{{showTransitionParams}}")]), transition(":leave", [animate("{{hideTransitionParams}}", style({
        opacity: 0
      }))])])],
      providers: [Password_VALUE_ACCESSOR, PasswordStyle],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None
    }]
  }], null, {
    ariaLabel: [{
      type: Input
    }],
    fluid: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    promptLabel: [{
      type: Input
    }],
    mediumRegex: [{
      type: Input
    }],
    strongRegex: [{
      type: Input
    }],
    weakLabel: [{
      type: Input
    }],
    mediumLabel: [{
      type: Input
    }],
    maxLength: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    strongLabel: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    feedback: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    appendTo: [{
      type: Input
    }],
    toggleMask: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    size: [{
      type: Input
    }],
    inputStyleClass: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    inputStyle: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    autocomplete: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    showClear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    variant: [{
      type: Input
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onClear: [{
      type: Output
    }],
    input: [{
      type: ViewChild,
      args: ["input"]
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: ["footer", {
        descendants: false
      }]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    clearIconTemplate: [{
      type: ContentChild,
      args: ["clearicon", {
        descendants: false
      }]
    }],
    hideIconTemplate: [{
      type: ContentChild,
      args: ["headericon", {
        descendants: false
      }]
    }],
    showIconTemplate: [{
      type: ContentChild,
      args: ["showicon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(Password, {
    className: "Password"
  });
})();
var PasswordModule = class _PasswordModule {
  static ɵfac = function PasswordModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PasswordModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _PasswordModule
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [Password, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PasswordModule, [{
    type: NgModule,
    args: [{
      imports: [Password, PasswordDirective, SharedModule],
      exports: [PasswordDirective, Password, SharedModule]
    }]
  }], null, null);
})();
(function() {
  (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PasswordModule, {
    imports: [Password, PasswordDirective, SharedModule],
    exports: [PasswordDirective, Password, SharedModule]
  });
})();
export {
  MapperPipe,
  Password,
  PasswordClasses,
  PasswordDirective,
  PasswordModule,
  PasswordStyle,
  Password_VALUE_ACCESSOR
};
//# sourceMappingURL=primeng_password.js.map
