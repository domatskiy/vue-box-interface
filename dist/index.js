!function(root, factory) {
    "object" == typeof exports && "object" == typeof module ? module.exports = factory() : "function" == typeof define && define.amd ? define("vue-ui-box", [], factory) : "object" == typeof exports ? exports["vue-ui-box"] = factory() : root["vue-ui-box"] = factory();
}("undefined" != typeof self ? self : this, function() {
    return function(modules) {
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) return installedModules[moduleId].exports;
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: !1,
                exports: {}
            };
            return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
            module.l = !0, module.exports;
        }
        var installedModules = {};
        return __webpack_require__.m = modules, __webpack_require__.c = installedModules, 
        __webpack_require__.d = function(exports, name, getter) {
            __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                configurable: !1,
                enumerable: !0,
                get: getter
            });
        }, __webpack_require__.n = function(module) {
            var getter = module && module.__esModule ? function() {
                return module.default;
            } : function() {
                return module;
            };
            return __webpack_require__.d(getter, "a", getter), getter;
        }, __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        }, __webpack_require__.p = "/dist/", __webpack_require__(__webpack_require__.s = 1);
    }([ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_exports__.a = {
            name: "UiBox",
            props: [ "title" ],
            data: function() {
                return {};
            }
        };
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: !0
        });
        var __WEBPACK_IMPORTED_MODULE_0__Components_Box_vue__ = __webpack_require__(2), UIBoxPlugin = {
            install: function(Vue) {
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                Vue.component(__WEBPACK_IMPORTED_MODULE_0__Components_Box_vue__.a.name, __WEBPACK_IMPORTED_MODULE_0__Components_Box_vue__.a);
            }
        };
        __webpack_exports__.default = UIBoxPlugin;
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        function injectStyle(context) {
            disposed || __webpack_require__(3);
        }
        var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Box_vue__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4b9ed6ea_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Box_vue__ = __webpack_require__(8), __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(9), disposed = !1, __vue_styles__ = injectStyle, Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__.a)(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Box_vue__.a, __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4b9ed6ea_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Box_vue__.a, __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4b9ed6ea_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Box_vue__.b, !1, __vue_styles__, null, null);
        Component.options.__file = "src\\Components\\Box.vue", __webpack_exports__.a = Component.exports;
    }, function(module, exports, __webpack_require__) {
        var content = __webpack_require__(4);
        "string" == typeof content && (content = [ [ module.i, content, "" ] ]), content.locals && (module.exports = content.locals);
        var add = __webpack_require__(6).default;
        add("4d979cbe", content, !1, {});
    }, function(module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(5)(!1), exports.push([ module.i, "\n.ui-box {\n  border-radius: 5px;\n  border-top: 2px solid #CCCCCC;\n  background-color: #fff;\n  margin-bottom: 15px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n}\n.ui-box__header {\n  position: relative;\n  box-sizing: border-box;\n  display: inline-block;\n  width: 100%;\n  padding: 15px 15px 0;\n}\n.ui-box__title {\n  margin: 0;\n  padding: 0 0 15px;\n  font-size: 18px;\n  border-bottom: 1px solid #ccc;\n}\n.ui-box__toggle {\n  box-shadow: none;\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  top: 50%;\n  margin-top: -12px;\n  right: 15px;\n  background: transparent;\n  padding: 0;\n  cursor: pointer;\n  border: none;\n  outline: none;\n}\n.ui-box__body {\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  padding: 15px 15px;\n  transition: height 0.3s linear;\n}\n.ui-box__body h4 {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.ui-box--toggle .ui-box__title {\n  border-bottom: 0;\n}\n.ui-box--toggle .ui-box__body {\n  overflow: hidden;\n  height: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  transition: height 0.3s linear, padding 0.3s linear;\n}\n", "" ]);
    }, function(module, exports) {
        function cssWithMappingToString(item, useSourceMap) {
            var content = item[1] || "", cssMapping = item[3];
            if (!cssMapping) return content;
            if (useSourceMap && "function" == typeof btoa) {
                var sourceMapping = toComment(cssMapping);
                return [ content ].concat(cssMapping.sources.map(function(source) {
                    return "/*# sourceURL=" + cssMapping.sourceRoot + source + " */";
                })).concat([ sourceMapping ]).join("\n");
            }
            return [ content ].join("\n");
        }
        function toComment(sourceMap) {
            return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
        }
        module.exports = function(useSourceMap) {
            var list = [];
            return list.toString = function() {
                return this.map(function(item) {
                    var content = cssWithMappingToString(item, useSourceMap);
                    return item[2] ? "@media " + item[2] + "{" + content + "}" : content;
                }).join("");
            }, list.i = function(modules, mediaQuery) {
                "string" == typeof modules && (modules = [ [ null, modules, "" ] ]);
                for (var alreadyImportedModules = {}, i = 0; i < this.length; i++) {
                    var id = this[i][0];
                    "number" == typeof id && (alreadyImportedModules[id] = !0);
                }
                for (i = 0; i < modules.length; i++) {
                    var item = modules[i];
                    "number" == typeof item[0] && alreadyImportedModules[item[0]] || (mediaQuery && !item[2] ? item[2] = mediaQuery : mediaQuery && (item[2] = "(" + item[2] + ") and (" + mediaQuery + ")"), 
                    list.push(item));
                }
            }, list;
        };
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        function addStylesClient(parentId, list, _isProduction, _options) {
            isProduction = _isProduction, options = _options || {};
            var styles = Object(__WEBPACK_IMPORTED_MODULE_0__listToStyles__.a)(parentId, list);
            return addStylesToDom(styles), function(newList) {
                for (var mayRemove = [], i = 0; i < styles.length; i++) {
                    var item = styles[i], domStyle = stylesInDom[item.id];
                    domStyle.refs--, mayRemove.push(domStyle);
                }
                newList ? (styles = Object(__WEBPACK_IMPORTED_MODULE_0__listToStyles__.a)(parentId, newList), 
                addStylesToDom(styles)) : styles = [];
                for (var i = 0; i < mayRemove.length; i++) {
                    var domStyle = mayRemove[i];
                    if (0 === domStyle.refs) {
                        for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();
                        delete stylesInDom[domStyle.id];
                    }
                }
            };
        }
        function addStylesToDom(styles) {
            for (var i = 0; i < styles.length; i++) {
                var item = styles[i], domStyle = stylesInDom[item.id];
                if (domStyle) {
                    domStyle.refs++;
                    for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j](item.parts[j]);
                    for (;j < item.parts.length; j++) domStyle.parts.push(addStyle(item.parts[j]));
                    domStyle.parts.length > item.parts.length && (domStyle.parts.length = item.parts.length);
                } else {
                    for (var parts = [], j = 0; j < item.parts.length; j++) parts.push(addStyle(item.parts[j]));
                    stylesInDom[item.id] = {
                        id: item.id,
                        refs: 1,
                        parts: parts
                    };
                }
            }
        }
        function createStyleElement() {
            var styleElement = document.createElement("style");
            return styleElement.type = "text/css", head.appendChild(styleElement), styleElement;
        }
        function addStyle(obj) {
            var update, remove, styleElement = document.querySelector("style[" + ssrIdKey + '~="' + obj.id + '"]');
            if (styleElement) {
                if (isProduction) return noop;
                styleElement.parentNode.removeChild(styleElement);
            }
            if (isOldIE) {
                var styleIndex = singletonCounter++;
                styleElement = singletonElement || (singletonElement = createStyleElement()), update = applyToSingletonTag.bind(null, styleElement, styleIndex, !1), 
                remove = applyToSingletonTag.bind(null, styleElement, styleIndex, !0);
            } else styleElement = createStyleElement(), update = applyToTag.bind(null, styleElement), 
            remove = function() {
                styleElement.parentNode.removeChild(styleElement);
            };
            return update(obj), function(newObj) {
                if (newObj) {
                    if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) return;
                    update(obj = newObj);
                } else remove();
            };
        }
        function applyToSingletonTag(styleElement, index, remove, obj) {
            var css = remove ? "" : obj.css;
            if (styleElement.styleSheet) styleElement.styleSheet.cssText = replaceText(index, css); else {
                var cssNode = document.createTextNode(css), childNodes = styleElement.childNodes;
                childNodes[index] && styleElement.removeChild(childNodes[index]), childNodes.length ? styleElement.insertBefore(cssNode, childNodes[index]) : styleElement.appendChild(cssNode);
            }
        }
        function applyToTag(styleElement, obj) {
            var css = obj.css, media = obj.media, sourceMap = obj.sourceMap;
            if (media && styleElement.setAttribute("media", media), options.ssrId && styleElement.setAttribute(ssrIdKey, obj.id), 
            sourceMap && (css += "\n/*# sourceURL=" + sourceMap.sources[0] + " */", css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */"), 
            styleElement.styleSheet) styleElement.styleSheet.cssText = css; else {
                for (;styleElement.firstChild; ) styleElement.removeChild(styleElement.firstChild);
                styleElement.appendChild(document.createTextNode(css));
            }
        }
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: !0
        }), __webpack_exports__.default = addStylesClient;
        var __WEBPACK_IMPORTED_MODULE_0__listToStyles__ = __webpack_require__(7), hasDocument = "undefined" != typeof document;
        if ("undefined" != typeof DEBUG && DEBUG && !hasDocument) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
        var stylesInDom = {}, head = hasDocument && (document.head || document.getElementsByTagName("head")[0]), singletonElement = null, singletonCounter = 0, isProduction = !1, noop = function() {}, options = null, ssrIdKey = "data-vue-ssr-id", isOldIE = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase()), replaceText = function() {
            var textStore = [];
            return function(index, replacement) {
                return textStore[index] = replacement, textStore.filter(Boolean).join("\n");
            };
        }();
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        function listToStyles(parentId, list) {
            for (var styles = [], newStyles = {}, i = 0; i < list.length; i++) {
                var item = list[i], id = item[0], css = item[1], media = item[2], sourceMap = item[3], part = {
                    id: parentId + ":" + i,
                    css: css,
                    media: media,
                    sourceMap: sourceMap
                };
                newStyles[id] ? newStyles[id].parts.push(part) : styles.push(newStyles[id] = {
                    id: id,
                    parts: [ part ]
                });
            }
            return styles;
        }
        __webpack_exports__.a = listToStyles;
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
            return render;
        }), __webpack_require__.d(__webpack_exports__, "b", function() {
            return staticRenderFns;
        });
        var render = function() {
            var _vm = this, _h = _vm.$createElement, _c = _vm._self._c || _h;
            return _c("div", {
                staticClass: "ui-box ui-box--toggle1"
            }, [ _c("div", {
                staticClass: "ui-box__header"
            }, [ _vm.title ? _c("div", {
                staticClass: "ui-box__title"
            }, [ _vm._v(_vm._s(_vm.title)) ]) : _vm._e(), _vm._v(" "), _c("button", {
                staticClass: "ui-box__toggle"
            }) ]), _vm._v(" "), _c("div", {
                staticClass: "ui-box__body"
            }, [ _vm._t("default", [ _c("p", [ _vm._v("пусто") ]) ]) ], 2) ]);
        }, staticRenderFns = [];
        render._withStripped = !0;
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
            scriptExports = scriptExports || {};
            var type = typeof scriptExports.default;
            "object" !== type && "function" !== type || (scriptExports = scriptExports.default);
            var options = "function" == typeof scriptExports ? scriptExports.options : scriptExports;
            render && (options.render = render, options.staticRenderFns = staticRenderFns, options._compiled = !0), 
            functionalTemplate && (options.functional = !0), scopeId && (options._scopeId = scopeId);
            var hook;
            if (moduleIdentifier ? (hook = function(context) {
                context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, 
                context || "undefined" == typeof __VUE_SSR_CONTEXT__ || (context = __VUE_SSR_CONTEXT__), 
                injectStyles && injectStyles.call(this, context), context && context._registeredComponents && context._registeredComponents.add(moduleIdentifier);
            }, options._ssrRegister = hook) : injectStyles && (hook = shadowMode ? function() {
                injectStyles.call(this, this.$root.$options.shadowRoot);
            } : injectStyles), hook) if (options.functional) {
                options._injectStyles = hook;
                var originalRender = options.render;
                options.render = function(h, context) {
                    return hook.call(context), originalRender(h, context);
                };
            } else {
                var existing = options.beforeCreate;
                options.beforeCreate = existing ? [].concat(existing, hook) : [ hook ];
            }
            return {
                exports: scriptExports,
                options: options
            };
        }
        __webpack_exports__.a = normalizeComponent;
    } ]).default;
});