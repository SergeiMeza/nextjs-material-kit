(window.webpackJsonp = window.webpackJsonp || []).push([
  [26],
  {
    "4Hym": function(e, n, t) {
      "use strict";
      t.d(n, "b", function() {
        return o;
      }),
        t.d(n, "a", function() {
          return r;
        });
      var o = function(e) {
        return e.scrollTop;
      };
      function r(e, n) {
        var t = e.timeout,
          o = e.style,
          r = void 0 === o ? {} : o;
        return {
          duration:
            r.transitionDuration || "number" === typeof t ? t : t[n.mode] || 0,
          delay: r.transitionDelay
        };
      }
    },
    "5Gel": function(e, n, t) {
      "use strict";
      var o = t("wx14"),
        r = t("Ff2n"),
        a = t("q1tI"),
        i = t.n(a),
        c = (t("17x9"), t("i8i4")),
        l = t.n(c),
        s = (t("2W6z"), t("l3Wi")),
        u = t("iuhU"),
        d = t("gk1O"),
        p = t("g+pH"),
        f = t("mVKy"),
        h = t("H2TA"),
        v = t("Xt1q"),
        m = t("bqsI"),
        b = t("kKAo");
      function g(e, n) {
        var t = 0;
        return (
          "number" === typeof n
            ? (t = n)
            : "center" === n
            ? (t = e.height / 2)
            : "bottom" === n && (t = e.height),
          t
        );
      }
      function E(e, n) {
        var t = 0;
        return (
          "number" === typeof n
            ? (t = n)
            : "center" === n
            ? (t = e.width / 2)
            : "right" === n && (t = e.width),
          t
        );
      }
      function y(e) {
        return [e.horizontal, e.vertical]
          .map(function(e) {
            return "number" === typeof e ? "".concat(e, "px") : e;
          })
          .join(" ");
      }
      function x(e) {
        return "function" === typeof e ? e() : e;
      }
      var O = i.a.forwardRef(function(e, n) {
        var t = e.action,
          a = e.anchorEl,
          c = e.anchorOrigin,
          h = void 0 === c ? { vertical: "top", horizontal: "left" } : c,
          O = e.anchorPosition,
          k = e.anchorReference,
          w = void 0 === k ? "anchorEl" : k,
          j = e.children,
          C = e.classes,
          R = e.container,
          S = e.elevation,
          T = void 0 === S ? 8 : S,
          P = e.getContentAnchorEl,
          B = e.marginThreshold,
          N = void 0 === B ? 16 : B,
          z = e.ModalClasses,
          H = e.onEnter,
          A = e.onEntered,
          I = e.onEntering,
          D = e.onExit,
          L = e.onExited,
          M = e.onExiting,
          W = e.open,
          F = e.PaperProps,
          X = void 0 === F ? {} : F,
          K = e.transformOrigin,
          q = void 0 === K ? { vertical: "top", horizontal: "left" } : K,
          _ = e.TransitionComponent,
          U = void 0 === _ ? m.a : _,
          G = e.transitionDuration,
          J = void 0 === G ? "auto" : G,
          V = e.TransitionProps,
          Q = void 0 === V ? {} : V,
          Y = Object(r.a)(e, [
            "action",
            "anchorEl",
            "anchorOrigin",
            "anchorPosition",
            "anchorReference",
            "children",
            "classes",
            "container",
            "elevation",
            "getContentAnchorEl",
            "marginThreshold",
            "ModalClasses",
            "onEnter",
            "onEntered",
            "onEntering",
            "onExit",
            "onExited",
            "onExiting",
            "open",
            "PaperProps",
            "transformOrigin",
            "TransitionComponent",
            "transitionDuration",
            "TransitionProps"
          ]),
          Z = i.a.useRef(),
          $ = i.a.useRef(function() {});
        i.a.useImperativeHandle(
          t,
          function() {
            return { updatePosition: $.current };
          },
          []
        );
        var ee = i.a.useCallback(
            function(e) {
              if ("anchorPosition" === w) return O;
              var n = x(a),
                t = (n instanceof Element
                  ? n
                  : Object(d.a)(Z.current).body
                ).getBoundingClientRect(),
                o = 0 === e ? h.vertical : "center";
              return {
                top: t.top + g(t, o),
                left: t.left + E(t, h.horizontal)
              };
            },
            [a, h.horizontal, h.vertical, O, w]
          ),
          ne = i.a.useCallback(
            function(e) {
              var n = 0;
              if (P && "anchorEl" === w) {
                var t = P(e);
                if (t && e.contains(t)) {
                  var o = (function(e, n) {
                    for (var t = n, o = 0; t && t !== e; )
                      o += (t = t.parentNode).scrollTop;
                    return o;
                  })(e, t);
                  n = t.offsetTop + t.clientHeight / 2 - o || 0;
                }
              }
              return n;
            },
            [h.vertical, w, P]
          ),
          te = i.a.useCallback(
            function(e) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0;
              return {
                vertical: g(e, q.vertical) + n,
                horizontal: E(e, q.horizontal)
              };
            },
            [q.horizontal, q.vertical]
          ),
          oe = i.a.useCallback(
            function(e) {
              var n = ne(e),
                t = { width: e.offsetWidth, height: e.offsetHeight },
                o = te(t, n);
              if ("none" === w)
                return { top: null, left: null, transformOrigin: y(o) };
              var r = ee(n),
                i = r.top - o.vertical,
                c = r.left - o.horizontal,
                l = i + t.height,
                s = c + t.width,
                u = Object(p.a)(x(a)),
                d = u.innerHeight - N,
                f = u.innerWidth - N;
              if (i < N) {
                var h = i - N;
                (i -= h), (o.vertical += h);
              } else if (l > d) {
                var v = l - d;
                (i -= v), (o.vertical += v);
              }
              if (c < N) {
                var m = c - N;
                (c -= m), (o.horizontal += m);
              } else if (s > f) {
                var b = s - f;
                (c -= b), (o.horizontal += b);
              }
              return {
                top: "".concat(i, "px"),
                left: "".concat(c, "px"),
                transformOrigin: y(o)
              };
            },
            [a, w, ee, ne, te, N]
          ),
          re = i.a.useCallback(
            function(e) {
              var n = oe(e);
              null !== n.top && (e.style.top = n.top),
                null !== n.left && (e.style.left = n.left),
                (e.style.transformOrigin = n.transformOrigin);
            },
            [oe]
          ),
          ae = i.a.useCallback(function(e) {
            Z.current = l.a.findDOMNode(e);
          }, []);
        i.a.useEffect(
          function() {
            return (
              ($.current = Object(s.a)(function() {
                W && re(Z.current);
              })),
              window.addEventListener("resize", $.current),
              function() {
                $.current.clear(),
                  window.removeEventListener("resize", $.current);
              }
            );
          },
          [W, re]
        );
        var ie = J;
        "auto" !== J || U.muiSupportAuto || (ie = void 0);
        var ce = R || (a ? Object(d.a)(x(a)).body : void 0);
        return i.a.createElement(
          v.a,
          Object(o.a)(
            {
              classes: z,
              container: ce,
              open: W,
              ref: n,
              BackdropProps: { invisible: !0 }
            },
            Y
          ),
          i.a.createElement(
            U,
            Object(o.a)(
              {
                appear: !0,
                in: W,
                onEnter: H,
                onEntered: A,
                onExit: D,
                onExited: L,
                onExiting: M,
                timeout: ie
              },
              Q,
              {
                onEntering: Object(f.b)(function(e, n) {
                  I && I(e, n), re(e);
                }, Q.onEntering)
              }
            ),
            i.a.createElement(
              b.a,
              Object(o.a)({ elevation: T, ref: ae }, X, {
                className: Object(u.a)(C.paper, X.className)
              }),
              j
            )
          )
        );
      });
      n.a = Object(h.a)(
        {
          paper: {
            position: "absolute",
            overflowY: "auto",
            overflowX: "hidden",
            minWidth: 16,
            minHeight: 16,
            maxWidth: "calc(100% - 32px)",
            maxHeight: "calc(100% - 32px)",
            outline: 0
          }
        },
        { name: "MuiPopover" }
      )(O);
    },
    "TB+X": function(e, n, t) {
      "use strict";
      n.a = {
        popover: {
          padding: "0",
          boxShadow:
            "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
          lineHeight: "1.5em",
          background: "#fff",
          border: "none",
          borderRadius: "3px",
          display: "block",
          maxWidth: "276px",
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          fontStyle: "normal",
          fontWeight: "400",
          textAlign: "start",
          textDecoration: "none",
          textShadow: "none",
          textTransform: "none",
          letterSpacing: "normal",
          wordBreak: "normal",
          wordSpacing: "normal",
          whiteSpace: "normal",
          lineBreak: "auto",
          fontSize: "0.875rem",
          wordWrap: "break-word"
        },
        popoverBottom: { marginTop: "5px" },
        popoverHeader: {
          backgroundColor: "#fff",
          border: "none",
          padding: "15px 15px 5px",
          fontSize: "1.125rem",
          margin: "0",
          color: "#555",
          borderTopLeftRadius: "calc(0.3rem - 1px)",
          borderTopRightRadius: "calc(0.3rem - 1px)"
        },
        popoverBody: {
          padding: "10px 15px 15px",
          lineHeight: "1.4",
          color: "#555"
        }
      };
    },
    "XN3+": function(e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, "default", function() {
          return g;
        });
      var o = t("doui"),
        r = t("zrwo"),
        a = t("q1tI"),
        i = t.n(a),
        c = t("pzeu"),
        l = t("zR9M"),
        s = t("R/WZ"),
        u = t("5Gel"),
        d = t("Kg+a"),
        p = t("TB+X"),
        f = t("Oref"),
        h = i.a.createElement,
        v = Object(r.a)({}, p.a, {
          bdExample: {
            padding: "1.5rem",
            margin: "1rem -15px",
            position: "relative",
            marginRight: "0",
            marginBottom: "-8px",
            marginLeft: "0",
            borderWidth: ".2rem",
            border: "solid rgb(245, 242, 240)"
          }
        }),
        m = Object(s.a)(v),
        b =
          'import React from "react";\n// material-ui components\nimport { makeStyles } from "@material-ui/core/styles";\nimport Popover from "@material-ui/core/Popover";\n// core components\nimport Button from "components/CustomButtons/Button.js";\n\nimport styles from "assets/jss/nextjs-material-kit/popoverStyles.js";\n\nconst useStyles = makeStyles(styles);\n\nexport default function Popovers() {\n  const classes = useStyles();\n  const [anchorElLeft, setAnchorElLeft] = React.useState(null);\n  const [anchorElTop, setAnchorElTop] = React.useState(null);\n  const [anchorElBottom, setAnchorElBottom] = React.useState(null);\n  const [anchorElRight, setAnchorElRight] = React.useState(null);\n  return (\n    <div>\n      <Button onClick={event => setAnchorElLeft(event.currentTarget)}>\n        On left\n      </Button>\n      <Popover\n        classes={{\n          paper: classes.popover\n        }}\n        open={Boolean(anchorElLeft)}\n        anchorEl={anchorElLeft}\n        onClose={() => setAnchorElLeft(null)}\n        anchorOrigin={{\n          vertical: "center",\n          horizontal: "left"\n        }}\n        transformOrigin={{\n          vertical: "center",\n          horizontal: "right"\n        }}\n      >\n        <h3 className={classes.popoverHeader}>Popover on left</h3>\n        <div className={classes.popoverBody}>\n          Here will be some very useful information about his popover. Here\n          will be some very useful information about his popover.\n        </div>\n      </Popover>\n      <Button onClick={event => setAnchorElTop(event.currentTarget)}>\n        On top\n      </Button>\n      <Popover\n        classes={{\n          paper: classes.popover\n        }}\n        open={Boolean(anchorElTop)}\n        anchorEl={anchorElTop}\n        onClose={() => setAnchorElTop(null)}\n        anchorOrigin={{\n          vertical: "top",\n          horizontal: "center"\n        }}\n        transformOrigin={{\n          vertical: "bottom",\n          horizontal: "center"\n        }}\n      >\n        <h3 className={classes.popoverHeader}>Popover on top</h3>\n        <div className={classes.popoverBody}>\n          Here will be some very useful information about his popover.\n        </div>\n      </Popover>\n      <Button onClick={event => setAnchorElBottom(event.currentTarget)}>\n        On bottom\n      </Button>\n      <Popover\n        classes={{\n          paper: classes.popover\n        }}\n        open={Boolean(anchorElBottom)}\n        anchorEl={anchorElBottom}\n        onClose={() => setAnchorElBottom(null)}\n        anchorOrigin={{\n          vertical: "bottom",\n          horizontal: "center"\n        }}\n        transformOrigin={{\n          vertical: "top",\n          horizontal: "center"\n        }}\n      >\n        <h3 className={classes.popoverHeader}>Popover on bottom</h3>\n        <div className={classes.popoverBody}>\n          Here will be some very useful information about his popover.\n        </div>\n      </Popover>\n      <Button onClick={event => setAnchorElRight(event.currentTarget)}>\n        On right\n      </Button>\n      <Popover\n        classes={{\n          paper: classes.popover\n        }}\n        open={Boolean(anchorElRight)}\n        anchorEl={anchorElRight}\n        onClose={() => setAnchorElRight(null)}\n        anchorOrigin={{\n          vertical: "center",\n          horizontal: "right"\n        }}\n        transformOrigin={{\n          vertical: "center",\n          horizontal: "left"\n        }}\n      >\n        <h3 className={classes.popoverHeader}>Popover on right</h3>\n        <div className={classes.popoverBody}>\n          Here will be some very useful information about his popover.\n        </div>\n      </Popover>\n    </div>\n  );\n}';
      function g() {
        var e = m(),
          n = i.a.useState(null),
          t = Object(o.a)(n, 2),
          r = t[0],
          a = t[1],
          s = i.a.useState(null),
          p = Object(o.a)(s, 2),
          v = p[0],
          g = p[1],
          E = i.a.useState(null),
          y = Object(o.a)(E, 2),
          x = y[0],
          O = y[1],
          k = i.a.useState(null),
          w = Object(o.a)(k, 2),
          j = w[0],
          C = w[1];
        return h(
          f.a,
          null,
          h("h1", null, "Popovers"),
          h("h2", null, "Styles"),
          h(
            "p",
            null,
            "You will find all the styles for these components in",
            h("br", null),
            h(
              "code",
              null,
              "src/assets/jss/nextjs-material-kit/popoverStyles.js"
            ),
            "."
          ),
          h("h2", null, "Example"),
          h(
            "div",
            { className: e.bdExample },
            h(
              d.a,
              {
                onClick: function(e) {
                  return a(e.currentTarget);
                }
              },
              "On left"
            ),
            h(
              u.a,
              {
                classes: { paper: e.popover },
                open: Boolean(r),
                anchorEl: r,
                onClose: function() {
                  return a(null);
                },
                anchorOrigin: { vertical: "center", horizontal: "left" },
                transformOrigin: { vertical: "center", horizontal: "right" }
              },
              h("h3", { className: e.popoverHeader }, "Popover on left"),
              h(
                "div",
                { className: e.popoverBody },
                "Here will be some very useful information about his popover. Here will be some very useful information about his popover."
              )
            ),
            h(
              d.a,
              {
                onClick: function(e) {
                  return g(e.currentTarget);
                }
              },
              "On top"
            ),
            h(
              u.a,
              {
                classes: { paper: e.popover },
                open: Boolean(v),
                anchorEl: v,
                onClose: function() {
                  return g(null);
                },
                anchorOrigin: { vertical: "top", horizontal: "center" },
                transformOrigin: { vertical: "bottom", horizontal: "center" }
              },
              h("h3", { className: e.popoverHeader }, "Popover on top"),
              h(
                "div",
                { className: e.popoverBody },
                "Here will be some very useful information about his popover."
              )
            ),
            h(
              d.a,
              {
                onClick: function(e) {
                  return O(e.currentTarget);
                }
              },
              "On bottom"
            ),
            h(
              u.a,
              {
                classes: { paper: e.popover },
                open: Boolean(x),
                anchorEl: x,
                onClose: function() {
                  return O(null);
                },
                anchorOrigin: { vertical: "bottom", horizontal: "center" },
                transformOrigin: { vertical: "top", horizontal: "center" }
              },
              h("h3", { className: e.popoverHeader }, "Popover on bottom"),
              h(
                "div",
                { className: e.popoverBody },
                "Here will be some very useful information about his popover."
              )
            ),
            h(
              d.a,
              {
                onClick: function(e) {
                  return C(e.currentTarget);
                }
              },
              "On right"
            ),
            h(
              u.a,
              {
                classes: { paper: e.popover },
                open: Boolean(j),
                anchorEl: j,
                onClose: function() {
                  return C(null);
                },
                anchorOrigin: { vertical: "center", horizontal: "right" },
                transformOrigin: { vertical: "center", horizontal: "left" }
              },
              h("h3", { className: e.popoverHeader }, "Popover on right"),
              h(
                "div",
                { className: e.popoverBody },
                "Here will be some very useful information about his popover."
              )
            )
          ),
          h(c.a, { language: "jsx", style: l.prism }, b),
          h("h2", null, "Props"),
          h(
            "p",
            null,
            "Please check out the",
            " ",
            h(
              "a",
              {
                href:
                  "https://material-ui-next.com/utils/popovers/#popovers?ref=creativetim",
                target: "_blank"
              },
              "official material-ui documentation"
            ),
            "."
          )
        );
      }
    },
    Xt1q: function(e, n, t) {
      "use strict";
      var o = t("wx14"),
        r = t("ODXe"),
        a = t("Ff2n"),
        i = t("q1tI"),
        c = t.n(i),
        l = t("i8i4"),
        s = t.n(l),
        u = (t("17x9"), t("aXM8")),
        d = t("gk1O"),
        p = t("bjog"),
        f = t("mVKy"),
        h = t("OMPe"),
        v = t("Ovef"),
        m = t("HwzS"),
        b = t("1OyB"),
        g = t("vuIU"),
        E = t("KQm4"),
        y = t("bwkw"),
        x = t("g+pH");
      function O(e, n) {
        n
          ? e.setAttribute("aria-hidden", "true")
          : e.removeAttribute("aria-hidden");
      }
      function k(e) {
        return parseInt(window.getComputedStyle(e)["padding-right"], 10) || 0;
      }
      var w = ["template", "script", "style"];
      function j(e, n, t, o, r) {
        var a = [n, t].concat(Object(E.a)(o));
        [].forEach.call(e.children, function(e) {
          -1 === a.indexOf(e) &&
            (function(e) {
              return (
                1 === e.nodeType && -1 === w.indexOf(e.tagName.toLowerCase())
              );
            })(e) &&
            r(e);
        });
      }
      function C(e, n, t) {
        var o =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          r = arguments.length > 4 ? arguments[4] : void 0;
        j(e, n, t, o, function(e) {
          return O(e, r);
        });
      }
      function R(e, n) {
        var t = -1;
        return (
          e.some(function(e, o) {
            return !!n(e) && ((t = o), !0);
          }),
          t
        );
      }
      function S(e, n) {
        var t,
          o = {},
          r = {},
          a = [];
        if (
          !n.disableScrollLock &&
          ((o.overflow = e.container.style.overflow),
          (o["padding-right"] = e.container.style.paddingRight),
          (r.overflow = "hidden"),
          (function(e) {
            var n = Object(d.a)(e);
            return n.body === e
              ? Object(x.a)(n).innerWidth > n.documentElement.clientWidth
              : e.scrollHeight > e.clientHeight;
          })(e.container))
        ) {
          var i = Object(y.a)();
          (r["padding-right"] = "".concat(k(e.container) + i, "px")),
            (t = Object(d.a)(e.container).querySelectorAll(".mui-fixed")),
            [].forEach.call(t, function(e) {
              a.push(e.style.paddingRight),
                (e.style.paddingRight = "".concat(k(e) + i, "px"));
            });
        }
        Object.keys(r).forEach(function(n) {
          e.container.style[n] = r[n];
        });
        return function() {
          t &&
            [].forEach.call(t, function(e, n) {
              a[n]
                ? (e.style.paddingRight = a[n])
                : e.style.removeProperty("padding-right");
            }),
            Object.keys(o).forEach(function(n) {
              o[n]
                ? e.container.style.setProperty(n, o[n])
                : e.container.style.removeProperty(n);
            });
        };
      }
      var T = (function() {
        function e() {
          Object(b.a)(this, e), (this.modals = []), (this.contaniners = []);
        }
        return (
          Object(g.a)(e, [
            {
              key: "add",
              value: function(e, n) {
                var t = this.modals.indexOf(e);
                if (-1 !== t) return t;
                (t = this.modals.length),
                  this.modals.push(e),
                  e.modalRef && O(e.modalRef, !1);
                var o = (function(e) {
                  var n = [];
                  return (
                    [].forEach.call(e.children, function(e) {
                      e.getAttribute &&
                        "true" === e.getAttribute("aria-hidden") &&
                        n.push(e);
                    }),
                    n
                  );
                })(n);
                C(n, e.mountNode, e.modalRef, o, !0);
                var r = R(this.contaniners, function(e) {
                  return e.container === n;
                });
                return -1 !== r
                  ? (this.contaniners[r].modals.push(e), t)
                  : (this.contaniners.push({
                      modals: [e],
                      container: n,
                      restore: null,
                      hiddenSiblingNodes: o
                    }),
                    t);
              }
            },
            {
              key: "mount",
              value: function(e, n) {
                var t = R(this.contaniners, function(n) {
                    return -1 !== n.modals.indexOf(e);
                  }),
                  o = this.contaniners[t];
                o.restore || (o.restore = S(o, n));
              }
            },
            {
              key: "remove",
              value: function(e) {
                var n = this.modals.indexOf(e);
                if (-1 === n) return n;
                var t = R(this.contaniners, function(n) {
                    return -1 !== n.modals.indexOf(e);
                  }),
                  o = this.contaniners[t];
                if (
                  (o.modals.splice(o.modals.indexOf(e), 1),
                  this.modals.splice(n, 1),
                  0 === o.modals.length)
                )
                  o.restore && o.restore(),
                    e.modalRef && O(e.modalRef, !0),
                    C(
                      o.container,
                      e.mountNode,
                      e.modalRef,
                      o.hiddenSiblingNodes,
                      !1
                    ),
                    this.contaniners.splice(t, 1);
                else {
                  var r = o.modals[o.modals.length - 1];
                  r.modalRef && O(r.modalRef, !1);
                }
                return n;
              }
            },
            {
              key: "isTopModal",
              value: function(e) {
                return (
                  !!this.modals.length &&
                  this.modals[this.modals.length - 1] === e
                );
              }
            }
          ]),
          e
        );
      })();
      t("2W6z");
      var P = function(e) {
          var n = e.children,
            t = e.disableAutoFocus,
            o = void 0 !== t && t,
            r = e.disableEnforceFocus,
            a = void 0 !== r && r,
            i = e.disableRestoreFocus,
            l = void 0 !== i && i,
            u = e.getDoc,
            p = e.isEnabled,
            f = e.open,
            v = c.a.useRef(),
            m = c.a.useRef(null),
            b = c.a.useRef(null),
            g = c.a.useRef(),
            E = c.a.useRef(null),
            y = c.a.useCallback(function(e) {
              E.current = s.a.findDOMNode(e);
            }, []),
            x = Object(h.c)(n.ref, y);
          return (
            c.a.useMemo(
              function() {
                f &&
                  "undefined" !== typeof window &&
                  (g.current = u().activeElement);
              },
              [f]
            ),
            c.a.useEffect(
              function() {
                if (f) {
                  var e = Object(d.a)(E.current);
                  o ||
                    !E.current ||
                    E.current.contains(e.activeElement) ||
                    (E.current.hasAttribute("tabIndex") ||
                      E.current.setAttribute("tabIndex", -1),
                    E.current.focus());
                  var n = function() {
                      a || !p() || v.current
                        ? (v.current = !1)
                        : E.current &&
                          !E.current.contains(e.activeElement) &&
                          E.current.focus();
                    },
                    t = function(n) {
                      !a &&
                        p() &&
                        9 === n.keyCode &&
                        e.activeElement === E.current &&
                        ((v.current = !0),
                        n.shiftKey ? b.current.focus() : m.current.focus());
                    };
                  e.addEventListener("focus", n, !0),
                    e.addEventListener("keydown", t, !0);
                  var r = setInterval(function() {
                    n();
                  }, 50);
                  return function() {
                    clearInterval(r),
                      e.removeEventListener("focus", n, !0),
                      e.removeEventListener("keydown", t, !0),
                      l ||
                        (g.current && g.current.focus && g.current.focus(),
                        (g.current = null));
                  };
                }
              },
              [o, a, l, p, f]
            ),
            c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement("div", {
                tabIndex: 0,
                ref: m,
                "data-test": "sentinelStart"
              }),
              c.a.cloneElement(n, { ref: x }),
              c.a.createElement("div", {
                tabIndex: 0,
                ref: b,
                "data-test": "sentinelEnd"
              })
            )
          );
        },
        B = {
          root: {
            zIndex: -1,
            position: "fixed",
            right: 0,
            bottom: 0,
            top: 0,
            left: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            WebkitTapHighlightColor: "transparent",
            touchAction: "none"
          },
          invisible: { backgroundColor: "transparent" }
        },
        N = c.a.forwardRef(function(e, n) {
          var t = e.invisible,
            r = void 0 !== t && t,
            i = e.open,
            l = Object(a.a)(e, ["invisible", "open"]);
          return i
            ? c.a.createElement(
                "div",
                Object(o.a)({ "aria-hidden": !0, ref: n }, l, {
                  style: Object(o.a)(
                    {},
                    B.root,
                    {},
                    r ? B.invisible : {},
                    {},
                    l.style
                  )
                })
              )
            : null;
        });
      var z = new T(),
        H = c.a.forwardRef(function(e, n) {
          var t = e.BackdropComponent,
            i = void 0 === t ? N : t,
            l = e.BackdropProps,
            b = e.children,
            g = e.closeAfterTransition,
            E = void 0 !== g && g,
            y = e.container,
            x = e.disableAutoFocus,
            k = void 0 !== x && x,
            w = e.disableBackdropClick,
            j = void 0 !== w && w,
            C = e.disableEnforceFocus,
            R = void 0 !== C && C,
            S = e.disableEscapeKeyDown,
            T = void 0 !== S && S,
            B = e.disablePortal,
            H = void 0 !== B && B,
            A = e.disableRestoreFocus,
            I = void 0 !== A && A,
            D = e.disableScrollLock,
            L = void 0 !== D && D,
            M = e.hideBackdrop,
            W = void 0 !== M && M,
            F = e.keepMounted,
            X = void 0 !== F && F,
            K = e.manager,
            q = void 0 === K ? z : K,
            _ = e.onBackdropClick,
            U = e.onClose,
            G = e.onEscapeKeyDown,
            J = e.onRendered,
            V = e.open,
            Q = Object(a.a)(e, [
              "BackdropComponent",
              "BackdropProps",
              "children",
              "closeAfterTransition",
              "container",
              "disableAutoFocus",
              "disableBackdropClick",
              "disableEnforceFocus",
              "disableEscapeKeyDown",
              "disablePortal",
              "disableRestoreFocus",
              "disableScrollLock",
              "hideBackdrop",
              "keepMounted",
              "manager",
              "onBackdropClick",
              "onClose",
              "onEscapeKeyDown",
              "onRendered",
              "open"
            ]),
            Y = Object(u.a)(),
            Z = c.a.useState(!0),
            $ = Object(r.a)(Z, 2),
            ee = $[0],
            ne = $[1],
            te = c.a.useRef({}),
            oe = c.a.useRef(null),
            re = c.a.useRef(null),
            ae = Object(h.c)(re, n),
            ie = (function(e) {
              return !!e.children && e.children.props.hasOwnProperty("in");
            })(e),
            ce = function() {
              return Object(d.a)(oe.current);
            },
            le = function() {
              return (
                (te.current.modalRef = re.current),
                (te.current.mountNode = oe.current),
                te.current
              );
            },
            se = function() {
              q.mount(le(), { disableScrollLock: L }),
                (re.current.scrollTop = 0);
            },
            ue = Object(v.a)(function() {
              var e =
                (function(e) {
                  return (
                    (e = "function" === typeof e ? e() : e), s.a.findDOMNode(e)
                  );
                })(y) || ce().body;
              q.add(le(), e), re.current && se();
            }),
            de = c.a.useCallback(
              function() {
                return q.isTopModal(le());
              },
              [q]
            ),
            pe = Object(v.a)(function(e) {
              (oe.current = e),
                e && (J && J(), V && de() ? se() : O(re.current, !0));
            }),
            fe = c.a.useCallback(
              function() {
                q.remove(le());
              },
              [q]
            );
          if (
            (c.a.useEffect(
              function() {
                return function() {
                  fe();
                };
              },
              [fe]
            ),
            c.a.useEffect(
              function() {
                V ? ue() : (ie && E) || fe();
              },
              [V, fe, ie, E, ue]
            ),
            !X && !V && (!ie || ee))
          )
            return null;
          var he = (function(e) {
              return {
                root: {
                  position: "fixed",
                  zIndex: e.zIndex.modal,
                  right: 0,
                  bottom: 0,
                  top: 0,
                  left: 0
                },
                hidden: { visibility: "hidden" }
              };
            })(Y || { zIndex: m.a }),
            ve = {};
          return (
            void 0 === b.role && (ve.role = b.role || "document"),
            void 0 === b.tabIndex && (ve.tabIndex = b.tabIndex || "-1"),
            ie &&
              ((ve.onEnter = Object(f.b)(function() {
                ne(!1);
              }, b.props.onEnter)),
              (ve.onExited = Object(f.b)(function() {
                ne(!0), E && fe();
              }, b.props.onExited))),
            c.a.createElement(
              p.a,
              { ref: pe, container: y, disablePortal: H },
              c.a.createElement(
                "div",
                Object(o.a)(
                  {
                    ref: ae,
                    onKeyDown: function(e) {
                      "Escape" === e.key &&
                        de() &&
                        (e.stopPropagation(),
                        G && G(e),
                        !T && U && U(e, "escapeKeyDown"));
                    },
                    role: "presentation"
                  },
                  Q,
                  {
                    style: Object(o.a)(
                      {},
                      he.root,
                      {},
                      !V && ee ? he.hidden : {},
                      {},
                      Q.style
                    )
                  }
                ),
                W
                  ? null
                  : c.a.createElement(
                      i,
                      Object(o.a)(
                        {
                          open: V,
                          onClick: function(e) {
                            e.target === e.currentTarget &&
                              (_ && _(e), !j && U && U(e, "backdropClick"));
                          }
                        },
                        l
                      )
                    ),
                c.a.createElement(
                  P,
                  {
                    disableEnforceFocus: R,
                    disableAutoFocus: k,
                    disableRestoreFocus: I,
                    getDoc: ce,
                    isEnabled: de,
                    open: V
                  },
                  c.a.cloneElement(b, ve)
                )
              )
            )
          );
        });
      n.a = H;
    },
    bjog: function(e, n, t) {
      "use strict";
      var o = t("ODXe"),
        r = t("q1tI"),
        a = t.n(r),
        i = t("i8i4"),
        c = t.n(i),
        l = (t("17x9"), t("OMPe"));
      var s =
          "undefined" !== typeof window ? a.a.useLayoutEffect : a.a.useEffect,
        u = a.a.forwardRef(function(e, n) {
          var t = e.children,
            r = e.container,
            i = e.disablePortal,
            u = void 0 !== i && i,
            d = e.onRendered,
            p = a.a.useState(null),
            f = Object(o.a)(p, 2),
            h = f[0],
            v = f[1],
            m = Object(l.c)(t.ref, n);
          return (
            s(
              function() {
                u ||
                  v(
                    (function(e) {
                      return (
                        (e = "function" === typeof e ? e() : e),
                        c.a.findDOMNode(e)
                      );
                    })(r) || document.body
                  );
              },
              [r, u]
            ),
            s(
              function() {
                if (h && !u)
                  return (
                    Object(l.b)(n, h),
                    function() {
                      Object(l.b)(n, null);
                    }
                  );
              },
              [n, h, u]
            ),
            s(
              function() {
                d && (h || u) && d();
              },
              [d, h, u]
            ),
            u
              ? (a.a.Children.only(t), a.a.cloneElement(t, { ref: m }))
              : h
              ? c.a.createPortal(t, h)
              : h
          );
        });
      n.a = u;
    },
    bqsI: function(e, n, t) {
      "use strict";
      var o = t("wx14"),
        r = t("Ff2n"),
        a = t("q1tI"),
        i = t.n(a),
        c = (t("17x9"), t("dRu9")),
        l = t("tr08"),
        s = t("4Hym"),
        u = t("OMPe");
      function d(e) {
        return "scale(".concat(e, ", ").concat(Math.pow(e, 2), ")");
      }
      var p = {
          entering: { opacity: 1, transform: d(1) },
          entered: { opacity: 1, transform: "none" }
        },
        f = i.a.forwardRef(function(e, n) {
          var t = e.children,
            a = e.in,
            f = e.onEnter,
            h = e.onExit,
            v = e.style,
            m = e.timeout,
            b = void 0 === m ? "auto" : m,
            g = Object(r.a)(e, [
              "children",
              "in",
              "onEnter",
              "onExit",
              "style",
              "timeout"
            ]),
            E = i.a.useRef(),
            y = i.a.useRef(),
            x = Object(u.c)(t.ref, n),
            O = Object(l.a)();
          return (
            i.a.useEffect(function() {
              return function() {
                clearTimeout(E.current);
              };
            }, []),
            i.a.createElement(
              c.a,
              Object(o.a)(
                {
                  appear: !0,
                  in: a,
                  onEnter: function(e, n) {
                    Object(s.b)(e);
                    var t,
                      o = Object(s.a)(
                        { style: v, timeout: b },
                        { mode: "enter" }
                      ),
                      r = o.duration,
                      a = o.delay;
                    "auto" === b
                      ? ((t = O.transitions.getAutoHeightDuration(
                          e.clientHeight
                        )),
                        (y.current = t))
                      : (t = r),
                      (e.style.transition = [
                        O.transitions.create("opacity", {
                          duration: t,
                          delay: a
                        }),
                        O.transitions.create("transform", {
                          duration: 0.666 * t,
                          delay: a
                        })
                      ].join(",")),
                      f && f(e, n);
                  },
                  onExit: function(e) {
                    var n,
                      t = Object(s.a)(
                        { style: v, timeout: b },
                        { mode: "exit" }
                      ),
                      o = t.duration,
                      r = t.delay;
                    "auto" === b
                      ? ((n = O.transitions.getAutoHeightDuration(
                          e.clientHeight
                        )),
                        (y.current = n))
                      : (n = o),
                      (e.style.transition = [
                        O.transitions.create("opacity", {
                          duration: n,
                          delay: r
                        }),
                        O.transitions.create("transform", {
                          duration: 0.666 * n,
                          delay: r || 0.333 * n
                        })
                      ].join(",")),
                      (e.style.opacity = "0"),
                      (e.style.transform = d(0.75)),
                      h && h(e);
                  },
                  addEndListener: function(e, n) {
                    "auto" === b && (E.current = setTimeout(n, y.current || 0));
                  },
                  timeout: "auto" === b ? null : b
                },
                g
              ),
              function(e, n) {
                return i.a.cloneElement(
                  t,
                  Object(o.a)(
                    {
                      style: Object(o.a)(
                        {
                          opacity: 0,
                          transform: d(0.75),
                          visibility: "exited" !== e || a ? void 0 : "hidden"
                        },
                        p[e],
                        {},
                        v,
                        {},
                        t.props.style
                      ),
                      ref: x
                    },
                    n
                  )
                );
              }
            )
          );
        });
      (f.muiSupportAuto = !0), (n.a = f);
    },
    bwkw: function(e, n, t) {
      "use strict";
      n.a = function() {
        var e = document.createElement("div");
        (e.style.width = "99px"),
          (e.style.height = "99px"),
          (e.style.position = "absolute"),
          (e.style.top = "-9999px"),
          (e.style.overflow = "scroll"),
          document.body.appendChild(e);
        var n = e.offsetWidth - e.clientWidth;
        return document.body.removeChild(e), n;
      };
    },
    dRu9: function(e, n, t) {
      "use strict";
      var o = t("zLVn"),
        r = t("dI71"),
        a = (t("17x9"), t("q1tI")),
        i = t.n(a),
        c = t("i8i4"),
        l = t.n(c),
        s = !1,
        u = t("0PSK"),
        d = "unmounted",
        p = "exited",
        f = "entering",
        h = "entered",
        v = (function(e) {
          function n(n, t) {
            var o;
            o = e.call(this, n, t) || this;
            var r,
              a = t && !t.isMounting ? n.enter : n.appear;
            return (
              (o.appearStatus = null),
              n.in
                ? a
                  ? ((r = p), (o.appearStatus = f))
                  : (r = h)
                : (r = n.unmountOnExit || n.mountOnEnter ? d : p),
              (o.state = { status: r }),
              (o.nextCallback = null),
              o
            );
          }
          Object(r.a)(n, e),
            (n.getDerivedStateFromProps = function(e, n) {
              return e.in && n.status === d ? { status: p } : null;
            });
          var t = n.prototype;
          return (
            (t.componentDidMount = function() {
              this.updateStatus(!0, this.appearStatus);
            }),
            (t.componentDidUpdate = function(e) {
              var n = null;
              if (e !== this.props) {
                var t = this.state.status;
                this.props.in
                  ? t !== f && t !== h && (n = f)
                  : (t !== f && t !== h) || (n = "exiting");
              }
              this.updateStatus(!1, n);
            }),
            (t.componentWillUnmount = function() {
              this.cancelNextCallback();
            }),
            (t.getTimeouts = function() {
              var e,
                n,
                t,
                o = this.props.timeout;
              return (
                (e = n = t = o),
                null != o &&
                  "number" !== typeof o &&
                  ((e = o.exit),
                  (n = o.enter),
                  (t = void 0 !== o.appear ? o.appear : n)),
                { exit: e, enter: n, appear: t }
              );
            }),
            (t.updateStatus = function(e, n) {
              if ((void 0 === e && (e = !1), null !== n)) {
                this.cancelNextCallback();
                var t = l.a.findDOMNode(this);
                n === f ? this.performEnter(t, e) : this.performExit(t);
              } else
                this.props.unmountOnExit &&
                  this.state.status === p &&
                  this.setState({ status: d });
            }),
            (t.performEnter = function(e, n) {
              var t = this,
                o = this.props.enter,
                r = this.context ? this.context.isMounting : n,
                a = this.getTimeouts(),
                i = r ? a.appear : a.enter;
              (!n && !o) || s
                ? this.safeSetState({ status: h }, function() {
                    t.props.onEntered(e);
                  })
                : (this.props.onEnter(e, r),
                  this.safeSetState({ status: f }, function() {
                    t.props.onEntering(e, r),
                      t.onTransitionEnd(e, i, function() {
                        t.safeSetState({ status: h }, function() {
                          t.props.onEntered(e, r);
                        });
                      });
                  }));
            }),
            (t.performExit = function(e) {
              var n = this,
                t = this.props.exit,
                o = this.getTimeouts();
              t && !s
                ? (this.props.onExit(e),
                  this.safeSetState({ status: "exiting" }, function() {
                    n.props.onExiting(e),
                      n.onTransitionEnd(e, o.exit, function() {
                        n.safeSetState({ status: p }, function() {
                          n.props.onExited(e);
                        });
                      });
                  }))
                : this.safeSetState({ status: p }, function() {
                    n.props.onExited(e);
                  });
            }),
            (t.cancelNextCallback = function() {
              null !== this.nextCallback &&
                (this.nextCallback.cancel(), (this.nextCallback = null));
            }),
            (t.safeSetState = function(e, n) {
              (n = this.setNextCallback(n)), this.setState(e, n);
            }),
            (t.setNextCallback = function(e) {
              var n = this,
                t = !0;
              return (
                (this.nextCallback = function(o) {
                  t && ((t = !1), (n.nextCallback = null), e(o));
                }),
                (this.nextCallback.cancel = function() {
                  t = !1;
                }),
                this.nextCallback
              );
            }),
            (t.onTransitionEnd = function(e, n, t) {
              this.setNextCallback(t);
              var o = null == n && !this.props.addEndListener;
              e && !o
                ? (this.props.addEndListener &&
                    this.props.addEndListener(e, this.nextCallback),
                  null != n && setTimeout(this.nextCallback, n))
                : setTimeout(this.nextCallback, 0);
            }),
            (t.render = function() {
              var e = this.state.status;
              if (e === d) return null;
              var n = this.props,
                t = n.children,
                r = Object(o.a)(n, ["children"]);
              if (
                (delete r.in,
                delete r.mountOnEnter,
                delete r.unmountOnExit,
                delete r.appear,
                delete r.enter,
                delete r.exit,
                delete r.timeout,
                delete r.addEndListener,
                delete r.onEnter,
                delete r.onEntering,
                delete r.onEntered,
                delete r.onExit,
                delete r.onExiting,
                delete r.onExited,
                "function" === typeof t)
              )
                return i.a.createElement(
                  u.a.Provider,
                  { value: null },
                  t(e, r)
                );
              var a = i.a.Children.only(t);
              return i.a.createElement(
                u.a.Provider,
                { value: null },
                i.a.cloneElement(a, r)
              );
            }),
            n
          );
        })(i.a.Component);
      function m() {}
      (v.contextType = u.a),
        (v.propTypes = {}),
        (v.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          onEnter: m,
          onEntering: m,
          onEntered: m,
          onExit: m,
          onExiting: m,
          onExited: m
        }),
        (v.UNMOUNTED = 0),
        (v.EXITED = 1),
        (v.ENTERING = 2),
        (v.ENTERED = 3),
        (v.EXITING = 4);
      n.a = v;
    },
    doui: function(e, n, t) {
      "use strict";
      var o = t("p0XB"),
        r = t.n(o);
      var a = t("XXOK"),
        i = t.n(a);
      function c(e, n) {
        return (
          (function(e) {
            if (r()(e)) return e;
          })(e) ||
          (function(e, n) {
            var t = [],
              o = !0,
              r = !1,
              a = void 0;
            try {
              for (
                var c, l = i()(e);
                !(o = (c = l.next()).done) &&
                (t.push(c.value), !n || t.length !== n);
                o = !0
              );
            } catch (s) {
              (r = !0), (a = s);
            } finally {
              try {
                o || null == l.return || l.return();
              } finally {
                if (r) throw a;
              }
            }
            return t;
          })(e, n) ||
          (function() {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
          })()
        );
      }
      t.d(n, "a", function() {
        return c;
      });
    },
    "g+pH": function(e, n, t) {
      "use strict";
      var o = t("gk1O");
      n.a = function(e) {
        return Object(o.a)(e).defaultView || window;
      };
    },
    gk1O: function(e, n, t) {
      "use strict";
      n.a = function(e) {
        return (e && e.ownerDocument) || document;
      };
    },
    l3Wi: function(e, n, t) {
      "use strict";
      function o(e) {
        var n,
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 166;
        function o() {
          for (var o = arguments.length, r = new Array(o), a = 0; a < o; a++)
            r[a] = arguments[a];
          var i = this;
          clearTimeout(n),
            (n = setTimeout(function() {
              e.apply(i, r);
            }, t));
        }
        return (
          (o.clear = function() {
            clearTimeout(n);
          }),
          o
        );
      }
      t.d(n, "a", function() {
        return o;
      });
    },
    lJxQ: function(e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/documentation/popovers",
        function() {
          var e = t("XN3+");
          return { page: e.default || e };
        }
      ]);
    }
  },
  [["lJxQ", 1, 0]]
]);
