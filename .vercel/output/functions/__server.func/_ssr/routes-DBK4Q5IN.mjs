import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as useEmblaCarousel } from "../_libs/embla-carousel-react+[...].mjs";
import { n as ArrowLeft, t as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DBK4Q5IN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var dark_logo_default = "/assets/dark_logo-Bec-gvIB.png";
var white_logo_768x573_default = "/assets/white-logo-768x573-DvIV109d.png";
var DSC05737_scaled_jpg_default = "/assets/DSC05737-scaled.jpg-CnwQHUcO.jpeg";
var sanctuary_villa_default = "/assets/sanctuary-villa-BNoFMCHs.webp";
var sanctuary_yoga_1229x1536_jpg_default = "/assets/sanctuary-yoga-1229x1536.jpg-BU_oMFVa.jpeg";
var program_thyroid_default = "/assets/program-thyroid-DPjdysYk.jpg";
var DSC05710_scaled_jpg_default = "/assets/DSC05710-scaled.jpg-D1YPwMHH.jpeg";
var DSC05744_scaled_jpg_default = "/assets/DSC05744-scaled.jpg-BRgtOmyF.jpeg";
var DSC05756_scaled_jpg_default = "/assets/DSC05756-scaled.jpg-CeNBizP3.jpeg";
var DSC05925_scaled_jpg_default = "/assets/DSC05925-scaled.jpg-m4u74jSH.jpeg";
var DSC05563_scaled_jpg_default = "/assets/DSC05563-scaled.jpg-DbE6jDV4.jpeg";
var DSC05639_scaled_jpg_default = "/assets/DSC05639-scaled.jpg-B-0zXLDq.jpeg";
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var CarouselContext = import_react.createContext(null);
function useCarousel() {
	const context = import_react.useContext(CarouselContext);
	if (!context) throw new Error("useCarousel must be used within a <Carousel />");
	return context;
}
var Carousel = import_react.forwardRef(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
	const [carouselRef, api] = useEmblaCarousel({
		...opts,
		axis: orientation === "horizontal" ? "x" : "y"
	}, plugins);
	const [canScrollPrev, setCanScrollPrev] = import_react.useState(false);
	const [canScrollNext, setCanScrollNext] = import_react.useState(false);
	const onSelect = import_react.useCallback((api) => {
		if (!api) return;
		setCanScrollPrev(api.canScrollPrev());
		setCanScrollNext(api.canScrollNext());
	}, []);
	const scrollPrev = import_react.useCallback(() => {
		api?.scrollPrev();
	}, [api]);
	const scrollNext = import_react.useCallback(() => {
		api?.scrollNext();
	}, [api]);
	const handleKeyDown = import_react.useCallback((event) => {
		if (event.key === "ArrowLeft") {
			event.preventDefault();
			scrollPrev();
		} else if (event.key === "ArrowRight") {
			event.preventDefault();
			scrollNext();
		}
	}, [scrollPrev, scrollNext]);
	import_react.useEffect(() => {
		if (!api || !setApi) return;
		setApi(api);
	}, [api, setApi]);
	import_react.useEffect(() => {
		if (!api) return;
		onSelect(api);
		api.on("reInit", onSelect);
		api.on("select", onSelect);
		return () => {
			api?.off("select", onSelect);
		};
	}, [api, onSelect]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselContext.Provider, {
		value: {
			carouselRef,
			api,
			opts,
			orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
			scrollPrev,
			scrollNext,
			canScrollPrev,
			canScrollNext
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			onKeyDownCapture: handleKeyDown,
			className: cn("relative", className),
			role: "region",
			"aria-roledescription": "carousel",
			...props,
			children
		})
	});
});
Carousel.displayName = "Carousel";
var CarouselContent = import_react.forwardRef(({ className, ...props }, ref) => {
	const { carouselRef, orientation } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: carouselRef,
		className: "overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			className: cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className),
			...props
		})
	});
});
CarouselContent.displayName = "CarouselContent";
var CarouselItem = import_react.forwardRef(({ className, ...props }, ref) => {
	const { orientation } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		role: "group",
		"aria-roledescription": "slide",
		className: cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className),
		...props
	});
});
CarouselItem.displayName = "CarouselItem";
var CarouselPrevious = import_react.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollPrev, canScrollPrev } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		ref,
		variant,
		size,
		className: cn("absolute  h-8 w-8 rounded-full", orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollPrev,
		onClick: scrollPrev,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Previous slide"
		})]
	});
});
CarouselPrevious.displayName = "CarouselPrevious";
var CarouselNext = import_react.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollNext, canScrollNext } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		ref,
		variant,
		size,
		className: cn("absolute h-8 w-8 rounded-full", orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollNext,
		onClick: scrollNext,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Next slide"
		})]
	});
});
CarouselNext.displayName = "CarouselNext";
function useReveal() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver((entries) => {
			for (const e of entries) if (e.isIntersecting) {
				e.target.classList.add("reveal-in");
				io.unobserve(e.target);
			}
		}, {
			threshold: .15,
			rootMargin: "0px 0px -60px 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return ref;
}
function Reveal({ as: Tag = "div", className = "", delay = 0, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref: useReveal(),
		className: `reveal ${className}`,
		style: { transitionDelay: `${delay}ms` },
		children
	});
}
function MandalaBg() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			className: "w-[120%] h-[120%] sm:w-[90%] sm:h-[90%] max-w-[460px] max-h-[460px] opacity-[0.18] text-gold",
			style: { animation: "spin 180s linear infinite" },
			viewBox: "0 0 200 200",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "0.6",
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "100",
					cy: "100",
					r: "52"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "100",
					cy: "100",
					r: "30"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "100",
					cy: "100",
					r: "15"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "100",
					cy: "100",
					r: "6"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", { points: "100,45 148,128 52,128" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", { points: "100,155 52,72 148,72" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
					points: "100,60 135,120 65,120",
					style: { opacity: .7 }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
					points: "100,140 65,80 135,80",
					style: { opacity: .7 }
				}),
				Array.from({ length: 12 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M 100 52 C 82 36, 92 10, 100 10 C 108 10, 118 36, 100 52",
					transform: `rotate(${i * 30} 100 100)`
				}, `p1-${i}`)),
				Array.from({ length: 12 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M 100 52 C 85 40, 92 20, 100 20 C 108 20, 115 40, 100 52",
					transform: `rotate(${i * 30 + 15} 100 100)`,
					style: { opacity: .8 }
				}, `p2-${i}`))
			]
		})
	});
}
function AlphaLanding() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [isFormOpen, setIsFormOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 80);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const openForm = () => setIsFormOpen(true);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "bg-sand text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavBar, {
				scrolled,
				onOpenConsult: openForm
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, { onOpenConsult: openForm }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Problem, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Method, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Programs, { onOpenConsult: openForm }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Results, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Serenity, { onOpenConsult: openForm }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoctorInsights, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, { onOpenConsult: openForm }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickyCta, { onOpenConsult: openForm }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFloat, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConsultModal, {
				isOpen: isFormOpen,
				onClose: () => setIsFormOpen(false)
			})
		]
	});
}
function NavBar({ scrolled, onOpenConsult }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[color:var(--sand)]/85 backdrop-blur-xl border-b border-[color:var(--border)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-12 h-16 sm:h-20 flex items-center justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#top",
				className: "flex items-center shrink-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: dark_logo_default,
					alt: "The Sanctuary Logo",
					className: "h-7 sm:h-10 md:h-12 w-auto object-contain transition-all duration-300"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: onOpenConsult,
				className: "inline-flex items-center justify-center gap-2 px-3.5 sm:px-5 h-9 sm:h-11 rounded-full text-[10px] sm:text-[13px] tracking-wider uppercase transition-all cursor-pointer bg-forest text-sand hover:bg-[color:var(--forest-deep)] whitespace-nowrap shrink-0 font-medium",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden sm:inline",
					children: "Reserve your stay"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline sm:hidden",
					children: "Reserve"
				})]
			})]
		})
	});
}
function Hero({ onOpenConsult }) {
	(0, import_react.useEffect)(() => {
		if (!document.querySelector("script[src=\"https://fast.wistia.com/player.js\"]")) {
			const script = document.createElement("script");
			script.src = "https://fast.wistia.com/player.js";
			script.async = true;
			document.body.appendChild(script);
		}
		if (!document.querySelector("script[src=\"https://fast.wistia.com/embed/7aezh1ji1f.js\"]")) {
			const script = document.createElement("script");
			script.src = "https://fast.wistia.com/embed/7aezh1ji1f.js";
			script.async = true;
			script.type = "module";
			document.body.appendChild(script);
		}
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative min-h-[75vh] sm:min-h-screen w-full overflow-hidden bg-navy",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { dangerouslySetInnerHTML: { __html: `
          wistia-player[media-id='7aezh1ji1f']:not(:defined) {
            background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/7aezh1ji1f/swatch');
            display: block;
            filter: blur(5px);
            padding-top: 56.25%;
          }
        ` } }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("wistia-player", {
						"media-id": "7aezh1ji1f",
						aspect: "1.7777777777777777",
						autoplay: "true",
						muted: "true",
						"end-video-behavior": "loop",
						playbar: "false",
						"play-bar-control": "false",
						"big-play-button": "false",
						"small-play-button": "false",
						"volume-control": "false",
						"settings-control": "false",
						"fullscreen-button": "false",
						"controls-visible-on-load": "false",
						"fit-strategy": "cover",
						className: "w-full h-full pointer-events-none"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12 pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-32 flex items-end min-h-[75vh] sm:min-h-screen",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl text-white pb-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4 mb-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow text-gold",
								children: "A quiet place to slow down"
							})]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 120,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "font-display text-4xl sm:text-6xl lg:text-[104px] leading-[1.02] text-white",
								children: [
									"Wellness Retreat",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"near ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
										className: "italic font-normal text-gold",
										children: "Bengaluru"
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 260,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 sm:mt-8 max-w-xl text-sm sm:text-[17px] leading-relaxed text-white/85 font-light",
								children: "Luxury Cottages, a big swimming pool, yoga every morning, and Ayurvedic Spa."
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 400,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex flex-wrap gap-4 items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: onOpenConsult,
									className: "group inline-flex items-center justify-center whitespace-nowrap gap-2.5 px-5 sm:px-7 h-14 rounded-full bg-gold text-navy text-[11px] sm:text-[13px] tracking-[0.15em] sm:tracking-[0.18em] uppercase font-medium hover:bg-[color:var(--gold-soft)] transition-all cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Reserve your stay" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "transition-transform group-hover:translate-x-1",
										children: "→"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://wa.link/8vxvsu",
									className: "inline-flex items-center gap-3 px-7 h-14 rounded-full border border-white/40 text-white text-[13px] tracking-[0.18em] uppercase hover:bg-white hover:text-forest transition-all",
									children: "WhatsApp Us"
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 520,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap gap-x-8 gap-y-3 text-white/95 text-xs sm:text-sm font-light tracking-wider uppercase",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
											className: "w-4 h-4 text-gold flex-shrink-0",
											viewBox: "0 0 24 24",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", { points: "9 22 9 12 15 12 15 22" })]
										}), "Luxury Cottages"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											className: "w-4 h-4 text-gold flex-shrink-0",
											viewBox: "0 0 24 24",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "2",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" })
										}), "Fresh Food"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-gold flex-shrink-0 text-base",
											children: "📍"
										}), "2 hrs from Bengaluru"]
									})
								]
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 border-t border-white/15 bg-black/30 backdrop-blur-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-[1400px] px-6 lg:px-12 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center sm:place-items-start",
					children: [
						["40 Acres", "Pristine Forest"],
						["18", "Private Villas"],
						["2 Hours", "From Bengaluru"],
						["100%", "Organic Dining"]
					].map(([n, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-white text-center sm:text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-3xl lg:text-4xl text-gold",
							children: n
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eyebrow text-white/60 mt-1",
							children: l
						})]
					}, l))
				})
			})
		]
	});
}
function ConsultForm({ onClose }) {
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		id: "consult",
		onSubmit: (e) => {
			e.preventDefault();
			setSent(true);
		},
		className: "relative glass rounded-2xl p-7 lg:p-8 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)]",
		children: [
			onClose && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onClose,
				className: "absolute top-4 right-4 text-white/50 hover:text-white transition-colors p-1 cursor-pointer",
				"aria-label": "Close",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					className: "w-5 h-5",
					fill: "none",
					viewBox: "0 0 24 24",
					stroke: "currentColor",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeWidth: 2,
						d: "M6 18L18 6M6 6l12 12"
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 mb-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-gold shimmer" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow text-white/80",
					children: "Private Consultation"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-2xl lg:text-3xl text-white mt-2",
				children: "Begin your healing journey."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-white/65 text-sm mt-2 font-light",
				children: "A specialist will reach out within 24 hours."
			}),
			sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 p-6 rounded-xl bg-white/10 border border-gold/40 text-white",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-gold eyebrow",
					children: "Received"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display text-xl mt-2",
					children: "Thank you — our specialist will call you soon."
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Full Name",
						name: "name",
						type: "text"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Phone",
						name: "phone",
						type: "tel"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Email",
						name: "email",
						type: "email"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Primary Health Concern",
						name: "concern",
						type: "text"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "mt-4 w-full h-13 py-4 rounded-full bg-gold text-navy text-[13px] tracking-[0.2em] uppercase font-medium hover:bg-[color:var(--gold-soft)] transition-all cursor-pointer",
						children: "Request Consultation"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] text-white/50 text-center pt-1",
						children: "Strictly confidential · No spam · 100% secure"
					})
				]
			})
		]
	});
}
function ConsultModal({ isOpen, onClose }) {
	(0, import_react.useEffect)(() => {
		if (isOpen) document.body.style.overflow = "hidden";
		else document.body.style.overflow = "unset";
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);
	if (!isOpen) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-300",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative w-full max-w-lg z-10 animate-in fade-in zoom-in-95 duration-200",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConsultForm, { onClose })
		})]
	});
}
function Field({ label, name, type }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "eyebrow text-white/55 text-[10px]",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			required: true,
			name,
			type,
			className: "mt-1.5 w-full bg-transparent border-b border-white/25 focus:border-gold py-3 text-white placeholder-white/30 outline-none transition-colors"
		})]
	});
}
function Marquee() {
	const items = [
		"Luxury Cottages",
		"Ayurvedic Spa",
		"Swimming Pool",
		"Organic Dining",
		"Yoga Sessions",
		"Nature Walks",
		"Serenity & Silence",
		"Circadian Sleep"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-navy text-white py-6 overflow-hidden border-y border-white/5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex marquee whitespace-nowrap",
			children: [...items, ...items].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-8 px-8 eyebrow text-white/60",
				children: [t, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gold",
					children: "✦"
				})]
			}, i))
		})
	});
}
function Problem() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-sand py-16 lg:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-6 lg:px-12 grid lg:grid-cols-12 gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow text-forest",
						children: "ABOUT ALPHA"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-3xl sm:text-5xl lg:text-7xl text-forest leading-[0.98]",
					children: [
						"A quiet place to",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "italic",
							children: "slow down"
						})
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 150,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 sm:mt-8 text-base sm:text-lg leading-relaxed text-ink/70 font-light max-w-md",
						children: "Alpha is a wellness retreat surrounded by nature & silence. You wake up to birdsong, not alarms. Spend your mornings doing yoga by the pool, your afternoons at the Ayurvedic spa, and your evenings walking forest trails. Whether you're here for a weekend or a week — the goal is simple: leave feeling better than you arrived."
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-7 lg:pl-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid sm:grid-cols-2 gap-px bg-[color:var(--border)] rounded-2xl overflow-hidden border border-[color:var(--border)]",
					children: [
						{
							n: "01",
							t: "For Leisure Guests",
							d: "A luxury nature retreat designed to help you slow down and find peace.",
							isHighlight: true
						},
						{
							n: "02",
							t: "For Wellness Seekers",
							d: "A transformational sanctuary offering deep rejuvenation and healing.",
							isHighlight: true
						},
						{
							n: "03",
							t: "Swimming Pool",
							d: "A full-size outdoor pool surrounded by trees. Quiet, clean, and mostly to yourself."
						},
						{
							n: "04",
							t: "Yoga Sessions",
							d: "Every morning, open-air, overlooking the trees. Gentle start for the day."
						},
						{
							n: "05",
							t: "Fresh Food",
							d: "Farm-sourced, healthy food cooked fresh by our expert chefs."
						},
						{
							n: "06",
							t: "Ayurvedic Therapies",
							d: "Relaxation massages, steam baths, and traditional Panchakarma."
						}
					].map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * 80,
						className: `p-6 sm:p-8 group transition-colors ${it.isHighlight ? "bg-bone/40" : "bg-sand"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between mb-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow text-forest/50",
									children: it.n
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-8 h-px bg-gold mt-2 group-hover:w-16 transition-all duration-500" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-3xl text-forest mb-3",
								children: it.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-ink/65 leading-relaxed",
								children: it.d
							})
						]
					}, it.t))
				})
			})]
		})
	});
}
function Method() {
	const [scrollProgress, setScrollProgress] = (0, import_react.useState)(0);
	const containerRef = (0, import_react.useRef)(null);
	const targetProgress = (0, import_react.useRef)(0);
	const steps = [
		{
			n: "I",
			t: "Wellness Assessment",
			d: "Consultation with our doctors, diagnostic screening, and Ayurvedic constitution mapping."
		},
		{
			n: "II",
			t: "Customized Protocol",
			d: "Personalized therapies, nutrition plan, and daily yoga sessions tailored to you."
		},
		{
			n: "III",
			t: "Authentic Therapies",
			d: "Abhyanga, Shirodhara, and other traditional Ayurvedic treatments for deep rejuvenation."
		},
		{
			n: "IV",
			t: "Circadian Reset",
			d: "Aligning your schedule with nature — forest walks, mindful meditation, and restful sleep."
		},
		{
			n: "V",
			t: "Guided Integration",
			d: "Post-stay transition plans and coaching to sustain your vitality at home."
		}
	];
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			const container = containerRef.current;
			if (!container) return;
			const rect = container.getBoundingClientRect();
			const viewportHeight = window.innerHeight;
			const isDesktop = window.innerWidth >= 1024;
			let progress = 0;
			if (isDesktop) {
				const totalScrollableDistance = rect.height - viewportHeight;
				if (totalScrollableDistance <= 0) progress = 0;
				else {
					const rawProgress = -rect.top / totalScrollableDistance;
					const clampedRaw = Math.max(0, Math.min(1, rawProgress));
					if (clampedRaw < .15) progress = 0;
					else if (clampedRaw > .85) progress = 1;
					else progress = (clampedRaw - .15) / .7;
				}
			} else {
				const start = viewportHeight * .8;
				const end = viewportHeight * .2 - rect.height;
				progress = Math.max(0, Math.min(1, (start - rect.top) / (start - end)));
			}
			targetProgress.current = progress;
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		window.addEventListener("resize", handleScroll);
		handleScroll();
		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleScroll);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		let animationFrameId;
		const updateProgress = () => {
			setScrollProgress((prev) => {
				const diff = targetProgress.current - prev;
				if (Math.abs(diff) < 1e-4) return targetProgress.current;
				return prev + diff * .09;
			});
			animationFrameId = requestAnimationFrame(updateProgress);
		};
		animationFrameId = requestAnimationFrame(updateProgress);
		return () => cancelAnimationFrame(animationFrameId);
	}, []);
	const getStepProgress = (i, progress) => {
		if (i === 0) return 1;
		const prevThreshold = (i - 1) / 4;
		if (progress >= i / 4) return 1;
		if (progress <= prevThreshold) return 0;
		return (progress - prevThreshold) * 4;
	};
	const activeIndex = Math.max(0, Math.min(4, Math.round(scrollProgress * 4)));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref: containerRef,
		id: "method",
		className: "relative lg:h-[230vh] w-full bg-navy text-white overflow-visible",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "w-full relative lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-center overflow-hidden py-16 lg:py-0 grain",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1400px] px-6 lg:px-12 w-full",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid lg:grid-cols-12 gap-12 mb-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow text-gold",
								children: "The Sanctuary Journey"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-3xl sm:text-5xl lg:text-7xl leading-[0.98]",
							children: [
								"A protocol",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"designed for",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
									className: "italic text-gold",
									children: "lasting recovery."
								})
							]
						})] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-6 lg:col-start-7 flex items-end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 200,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-base sm:text-lg text-white/70 font-light leading-relaxed",
								children: "Five precisely choreographed stages — each one led by specialists who treat your biology as a single, intelligent system rather than a collection of symptoms."
							})
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-8 sm:mt-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden lg:block absolute left-[10%] right-[10%] top-[40px] h-[2px] bg-white/10 z-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative h-full bg-gradient-to-r from-gold via-gold/80 to-gold shadow-[0_0_12px_rgba(226,192,125,0.8)]",
								style: { width: `${scrollProgress * 100}%` },
								children: scrollProgress > .01 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gold shadow-[0_0_20px_rgba(226,192,125,1)] animate-ping" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_rgba(226,192,125,1)]" })] })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "lg:hidden absolute left-[40px] top-[40px] bottom-[40px] w-[2px] bg-white/10 z-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative w-full bg-gradient-to-b from-gold via-gold/80 to-gold shadow-[0_0_12px_rgba(226,192,125,0.8)]",
								style: { height: `${scrollProgress * 100}%` },
								children: scrollProgress > .01 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold shadow-[0_0_20px_rgba(226,192,125,1)] animate-ping" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_rgba(226,192,125,1)]" })] })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-6 relative z-10",
							children: steps.map((s, i) => {
								const t = getStepProgress(i, scrollProgress);
								const isCompleted = t >= 1;
								const isCurrent = i === activeIndex;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `relative flex flex-row lg:flex-col items-start lg:items-center lg:text-center gap-6 lg:gap-0 cursor-pointer transition-all duration-500 group ${isCurrent ? "opacity-100" : isCompleted ? "opacity-85" : "opacity-35"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative w-20 h-20 flex-shrink-0 flex items-center justify-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
											className: "absolute inset-0 w-full h-full z-0",
											viewBox: "0 0 80 80",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
												cx: "40",
												cy: "40",
												r: "36",
												className: "stroke-white/10 fill-none",
												strokeWidth: "2"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
												cx: "40",
												cy: "40",
												r: "36",
												className: "stroke-gold fill-none",
												strokeWidth: "3",
												strokeDasharray: "226.2",
												strokeDashoffset: 226.2 * (1 - t),
												strokeLinecap: "round",
												style: {
													transform: "rotate(-90deg)",
													transformOrigin: "center"
												}
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: `relative w-[64px] h-[64px] rounded-full flex items-center justify-center transition-all duration-300 z-10 ${isCurrent ? isCompleted ? "bg-gold text-navy border-gold shadow-[0_0_25px_rgba(226,192,125,0.8)] scale-110 z-20" : "bg-navy text-gold border border-gold/60 shadow-[0_0_15px_rgba(226,192,125,0.3)] scale-110 z-20" : isCompleted ? "bg-gold text-navy border border-gold shadow-[0_0_15px_rgba(226,192,125,0.4)] scale-100 z-10" : "bg-navy text-white/40 border border-white/10 scale-95 z-10"}`,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-display text-xl font-light",
												children: s.n
											})
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "pt-2 lg:pt-0 lg:mt-8",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: `font-display text-2xl mb-3 transition-colors duration-300 ${isCurrent ? "text-gold" : "text-white"}`,
											children: s.t
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: `text-sm leading-relaxed transition-colors duration-300 ${isCurrent ? "text-white" : "text-white/60"}`,
											children: s.d
										})]
									})]
								}, s.n);
							})
						})
					]
				})]
			})
		})
	});
}
function Programs({ onOpenConsult }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "programs",
		className: "bg-sand",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-[1400px] px-6 lg:px-12 pt-16 lg:pt-24 pb-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid lg:grid-cols-12 gap-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "lg:col-span-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-forest",
							children: "Transformation Programs"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-3xl sm:text-5xl lg:text-7xl text-forest leading-[0.98]",
						children: [
							"Six healing journeys.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "italic",
								children: "One private sanctuary."
							})
						]
					})]
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-0",
			children: [
				{
					tag: "Program 01",
					title: "Diabetes Reversal",
					body: "A 14–28 day immersive protocol at our Mysore sanctuary addressing insulin resistance through clinical nutrition, advanced diagnostics, and Ayurvedic therapies.",
					bullets: [
						"Continuous glucose tracking",
						"Personalised meal protocols",
						"Reduce or eliminate medication"
					],
					img: sanctuary_villa_default
				},
				{
					tag: "Program 02",
					title: "Metabolic & Weight Reset",
					body: "Metabolic recalibration through personalized organic meals, yoga, and gentle detox in our serene nature setting.",
					bullets: [
						"8–18 kg fat loss typical",
						"Hormone & thyroid optimization",
						"Lifelong lifestyle blueprint"
					],
					img: sanctuary_yoga_1229x1536_jpg_default
				},
				{
					tag: "Program 03",
					title: "Thyroid & Hormone Harmony",
					body: "Restore endocrine balance naturally through stress modulation, circadian alignment, and targeted therapies.",
					bullets: [
						"Hashimoto's & hypothyroid protocols",
						"Autoimmune modulation",
						"TSH, T3, T4 normalization"
					],
					img: program_thyroid_default
				},
				{
					tag: "Program 04",
					title: "Gut & Microbiome Healing",
					body: "Rebuild the microbiome that governs your immunity and energy. A foundational program utilizing farm-to-table organic meals.",
					bullets: [
						"Microbiome diagnostics",
						"IBS, SIBO, bloating resolution",
						"Gut-brain axis restoration"
					],
					img: DSC05710_scaled_jpg_default
				},
				{
					tag: "Program 05",
					title: "Stress & Sleep Recovery",
					body: "Calm a hyperactive nervous system through panchakarma, open-air meditation, and Kaveri riverfront walks.",
					bullets: [
						"HRV & cortisol mapping",
						"Deep sleep restoration",
						"Burnout reversal"
					],
					img: DSC05756_scaled_jpg_default
				},
				{
					tag: "Program 06",
					title: "Detox, Panchakarma & Longevity",
					body: "Cellular renewal through authentic Panchakarma, herbal steam, and advanced biomarkers in a peaceful forest pavilion.",
					bullets: [
						"Biological age testing",
						"Heavy metal & toxin elimination",
						"Mitochondrial rejuvenation"
					],
					img: DSC05744_scaled_jpg_default
				}
			].map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgramRow, {
				...p,
				reverse: i % 2 === 1,
				index: i,
				onOpenConsult
			}, p.title))
		})]
	});
}
function ProgramRow({ tag, title, body, bullets, img, reverse, index, onOpenConsult }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border-t border-[color:var(--border)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-6 lg:px-12 py-10 lg:py-16 grid lg:grid-cols-12 gap-6 lg:gap-12 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: `lg:col-span-7 ${reverse ? "lg:order-2" : ""}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-2xl group",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: img,
						alt: title,
						className: "w-full h-[240px] sm:h-[420px] lg:h-[560px] object-cover group-hover:scale-105 transition-transform duration-[1.6s]",
						loading: "lazy",
						width: 1600,
						height: 1200
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `relative lg:col-span-5 ${reverse ? "lg:order-1 lg:pr-10" : "lg:pl-10"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MandalaBg, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "relative z-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 mb-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow text-forest/60",
								children: tag
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-12 h-px bg-gold" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-3xl sm:text-4xl lg:text-6xl text-forest leading-[0.98]",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 sm:mt-6 text-sm sm:text-[17px] leading-relaxed text-ink/70 font-light",
							children: body
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-8 space-y-3",
							children: bullets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3 text-sm text-ink/80",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gold mt-1",
									children: "✦"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: b })]
							}, b))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: onOpenConsult,
							className: "mt-6 sm:mt-10 inline-flex items-center gap-3 text-forest border-b border-forest/40 pb-1 hover:border-gold hover:text-gold transition-colors eyebrow cursor-pointer bg-transparent border-0 text-left",
							children: ["Enquire about this program", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "→" })]
						})
					]
				})]
			})]
		})
	});
}
function Results() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "results",
		className: "bg-[color:var(--forest-deep)] text-white py-16 lg:py-24 grain",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-6 lg:px-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow text-gold",
						children: "Why Alpha"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl sm:text-5xl lg:text-7xl leading-[0.98] max-w-4xl",
					children: "Guest Testimonials"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10",
					children: [
						{
							v: "40",
							u: "Acres",
							l: "Pristine natural forest"
						},
						{
							v: "18",
							u: "Villas",
							l: "Private luxury villas & cottages"
						},
						{
							v: "100%",
							u: "",
							l: "Organic farm-sourced dining"
						},
						{
							v: "9.8",
							u: "/10",
							l: "Guest satisfaction score"
						}
					].map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * 100,
						className: "bg-[color:var(--forest-deep)] p-5 sm:p-8 lg:p-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-display text-3xl sm:text-5xl lg:text-7xl text-gold flex items-baseline gap-1",
							children: [m.v, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-2xl text-white/60",
								children: m.u
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 text-sm text-white/70 leading-snug",
							children: m.l
						})]
					}, m.l))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 sm:mt-14 grid lg:grid-cols-3 gap-6 sm:gap-8",
					children: [
						{
							name: "Prokshitha Shivu",
							city: "Bengaluru",
							tag: "Absolute Delight",
							quote: "The place is best to relax, absolute best we even consulted doctor here and staff are very well mannered over all absolute delight."
						},
						{
							name: "Karthik Sundaram",
							city: "Dubai",
							tag: "Highly Recommended",
							quote: "It was great experience in the resort. The theme of the resort is very new to India and I highly recommend people who has does lot of white collar job to visit this place."
						},
						{
							name: "Deepak Leo John",
							city: "Bengaluru",
							tag: "Beautiful Escape",
							quote: "Beautiful place to destress and very near to Bangalore on the shores of Kaveri river. The staff are really good and hospitality is at its pinnacle. I would highly recommend 👍"
						}
					].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 120,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "h-full rounded-2xl border border-white/15 p-6 sm:p-8 lg:p-10 bg-white/[0.03] hover:bg-white/[0.06] transition-colors",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow text-gold",
									children: s.tag
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-4 sm:mt-6 font-display text-lg sm:text-[20px] leading-relaxed text-white/95",
									children: [
										"“",
										s.quote,
										"”"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 pt-6 border-t border-white/15",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-white font-medium",
										children: s.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-white/55 mt-1",
										children: s.city
									})]
								})
							]
						})
					}, s.name))
				})
			]
		})
	});
}
function WistiaVideo({ mediaId, aspect = "0.5625" }) {
	(0, import_react.useEffect)(() => {
		if (!document.querySelector("script[src=\"https://fast.wistia.com/player.js\"]")) {
			const script = document.createElement("script");
			script.src = "https://fast.wistia.com/player.js";
			script.async = true;
			document.body.appendChild(script);
		}
		if (!document.querySelector(`script[src="https://fast.wistia.com/embed/${mediaId}.js"]`)) {
			const script = document.createElement("script");
			script.src = `https://fast.wistia.com/embed/${mediaId}.js`;
			script.async = true;
			script.type = "module";
			document.body.appendChild(script);
		}
	}, [mediaId]);
	const numericAspect = parseFloat(aspect);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative w-full rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02] bg-black/5 ring-1 ring-black/5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { dangerouslySetInnerHTML: { __html: `
        wistia-player[media-id='${mediaId}']:not(:defined) {
          background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${mediaId}/swatch');
          display: block;
          filter: blur(5px);
          padding-top: ${isNaN(numericAspect) ? "177.78%" : `${(100 / numericAspect).toFixed(2)}%`};
        }
      ` } }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("wistia-player", {
			"media-id": mediaId,
			aspect
		})]
	});
}
function DoctorInsights() {
	const videos = [{
		id: "1diiad3niw",
		aspect: "0.5625"
	}, {
		id: "lr50km2fi3",
		aspect: "0.5625"
	}];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-sand text-ink py-16 lg:py-24 border-t border-ink/5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-6 lg:px-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-center gap-3 mb-6 flex-wrap",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule w-8 md:w-12" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-forest whitespace-nowrap",
							children: "Wellness Insights"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule w-8 md:w-12" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-3xl sm:text-5xl lg:text-6xl text-forest leading-[0.98] text-center max-w-2xl mx-auto",
					children: [
						"Insights for your",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "italic",
							children: "wellness journey."
						})
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 block sm:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Carousel, {
						opts: {
							align: "start",
							dragFree: true
						},
						className: "w-full overflow-visible",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselContent, {
							className: "-ml-4 max-w-[85vw]",
							children: videos.map((vid, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselItem, {
								className: "pl-4 basis-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WistiaVideo, {
									mediaId: vid.id,
									aspect: vid.aspect
								})
							}, `${vid.id}-${index}`))
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 hidden sm:grid sm:grid-cols-2 gap-8 justify-items-center max-w-3xl mx-auto",
					children: videos.map((vid, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "max-w-sm w-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: index * 150,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WistiaVideo, {
								mediaId: vid.id,
								aspect: vid.aspect
							})
						})
					}, `${vid.id}-${index}`))
				})
			]
		})
	});
}
function Experience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-sand py-16 lg:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-6 lg:px-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-12 gap-12 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow text-forest",
								children: "The Sanctuary"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl sm:text-5xl lg:text-7xl text-forest leading-[0.98]",
							children: "Luxury Cottages"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 150,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-base sm:text-lg text-ink/70 font-light leading-relaxed max-w-xl",
								children: "Each cottage sits quietly within the property — away from the main areas, surrounded by green. Studio & Deluxe cottage options available."
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 250,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 space-y-2",
								children: [
									"Nature Landscape View",
									"Far enough from everything to feel private",
									"Comfortable luxury interiors"
								].map((bullet) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-3 text-sm text-ink/80 font-medium",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gold text-lg",
										children: "✦"
									}), bullet]
								}, bullet))
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-5 pt-4 lg:pt-14",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 300,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2.5",
							children: [
								"LEISURE TRAVELERS",
								"COUPLES & FAMILIES",
								"CORPORATE RETREATS",
								"WELLNESS SEEKERS",
								"INTERNATIONAL GUESTS"
							].map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-block px-4 py-2 bg-white border border-[color:var(--border)] rounded-full text-[11px] tracking-wider font-medium text-forest/90 uppercase hover:border-gold hover:text-gold transition-colors cursor-default",
								children: tab
							}, tab))
						})
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6 auto-rows-[220px] lg:auto-rows-[200px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						className: "col-span-2 lg:col-span-8 row-span-1 lg:row-span-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryTile, {
							src: DSC05744_scaled_jpg_default,
							alt: "Studio Cottage interior",
							caption: "Studio Cottages · Private Sitouts"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 120,
						className: "col-span-1 lg:col-span-4 row-span-1 lg:row-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryTile, {
							src: DSC05710_scaled_jpg_default,
							alt: "Deluxe Cottage view",
							caption: "Deluxe Cottages"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 200,
						className: "col-span-1 lg:col-span-4 row-span-1 lg:row-span-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryTile, {
							src: DSC05639_scaled_jpg_default,
							alt: "Private wooden deck veranda",
							caption: "Private Verandas"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 280,
						className: "col-span-1 lg:col-span-5 row-span-1 lg:row-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryTile, {
							src: DSC05756_scaled_jpg_default,
							alt: "Sunset cottage illumination",
							caption: "Sunset Sanctuary"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 360,
						className: "col-span-1 lg:col-span-7 row-span-1 lg:row-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryTile, {
							src: DSC05563_scaled_jpg_default,
							alt: "Lush gardens meditation paths",
							caption: "Meditation Gardens"
						})
					})
				]
			})]
		})
	});
}
function GalleryTile({ src, alt, caption }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "relative w-full h-full overflow-hidden rounded-2xl group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src,
				alt,
				className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.4s] ease-out",
				loading: "lazy"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
				className: "absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass backdrop-blur-md bg-black/10 border-white/10 rounded-xl px-3 py-2 sm:px-4 sm:py-3 flex items-center justify-between transition-all duration-500 group-hover:border-gold/30",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow text-white tracking-[0.2em] text-[9px] sm:text-xs font-light truncate mr-2",
						children: caption
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/10 flex items-center justify-center border border-white/15 group-hover:border-gold/50 group-hover:bg-gold group-hover:text-navy transition-all duration-500 shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-white group-hover:text-navy transition-colors text-[10px] sm:text-xs",
							children: "→"
						})
					})]
				})
			})
		]
	});
}
function FAQ() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		className: "bg-sand py-16 lg:py-24 border-t border-ink/5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1000px] px-6 lg:px-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "text-center mb-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-center gap-3 mb-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule w-8 md:w-12" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow text-forest",
								children: "Have Questions?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule w-8 md:w-12" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl sm:text-5xl lg:text-6xl text-forest leading-[0.98]",
						children: "Frequently Asked Questions"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mt-4 font-light text-sm sm:text-base",
						children: "Everything you need to know before stepping into the Sanctuary."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-4",
				children: [
					{
						q: "Where is Alpha Wellness Resort located?",
						a: "We are nestled in serene natural surroundings near Mysuru, Karnataka — easily accessible yet far from the noise."
					},
					{
						q: "Do I need to commit to a wellness program to stay?",
						a: "Not at all. The Sanctuary welcomes leisure guests as well. Wellness experiences are optional and can be added on request."
					},
					{
						q: "What kind of accommodation can I expect?",
						a: "Spacious studio and one-bedroom cottages with nature-facing windows, and refined luxury interiors."
					},
					{
						q: "Is the resort suitable for families and couples?",
						a: "Absolutely. The Sanctuary is designed for couples, families, corporate retreats and solo travelers seeking peace."
					}
				].map((faq, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: idx * 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
						className: "group bg-white/40 border border-white/60 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden transition-all duration-300",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
							className: "flex items-center justify-between p-6 cursor-pointer select-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg sm:text-xl md:text-2xl text-forest font-medium pr-4",
								children: faq.q
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "relative flex-shrink-0 ml-1.5 w-6 h-6 text-forest/70 transition-transform duration-300 group-open:-rotate-180",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									xmlns: "http://www.w3.org/2000/svg",
									fill: "none",
									viewBox: "0 0 24 24",
									strokeWidth: "1.5",
									stroke: "currentColor",
									className: "w-6 h-6",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										strokeLinecap: "round",
										strokeLinejoin: "round",
										d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
									})
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "px-6 pb-6 pt-0 border-t border-forest/5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm sm:text-base text-ink/75 leading-relaxed font-light",
								children: faq.a
							})
						})]
					})
				}, idx))
			})]
		})
	});
}
function Serenity({ onOpenConsult }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "serenity",
		className: "bg-sand py-16 lg:py-24 border-t border-ink/5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-[1400px] px-6 lg:px-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-12 gap-12 lg:gap-20 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl sm:text-5xl lg:text-7xl text-forest leading-[0.98]",
							children: "Find Your Way to Serenity"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-base sm:text-lg text-ink/75 font-light leading-relaxed",
							children: "Tucked away from the city, yet closer than you think."
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 space-y-8",
							children: [
								{
									title: "From Bangalore",
									desc: "2 hrs drive (~150 km) via Mysore Road / NH 275.",
									badge: "⚡ Fastest scenic route",
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
										className: "w-6 h-6 text-gold",
										fill: "none",
										viewBox: "0 0 24 24",
										stroke: "currentColor",
										strokeWidth: "2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											strokeLinecap: "round",
											strokeLinejoin: "round",
											d: "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											strokeLinecap: "round",
											strokeLinejoin: "round",
											d: "M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1.76 12h2.44M19.8 12h2.44M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
										})]
									})
								},
								{
									title: "From Mysuru City",
									desc: "15 mins drive (~25 km).",
									badge: "📍 Just off Mysore–Ooty Highway",
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										className: "w-6 h-6 text-gold",
										fill: "none",
										viewBox: "0 0 24 24",
										stroke: "currentColor",
										strokeWidth: "2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											strokeLinecap: "round",
											strokeLinejoin: "round",
											d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
										})
									})
								},
								{
									title: "Payana Car Museum",
									desc: "8 mins drive (~10 km).",
									badge: "",
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										className: "w-6 h-6 text-gold",
										fill: "none",
										viewBox: "0 0 24 24",
										stroke: "currentColor",
										strokeWidth: "2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											strokeLinecap: "round",
											strokeLinejoin: "round",
											d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5"
										})
									})
								}
							].map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
								delay: i * 100,
								className: "flex gap-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-12 h-12 rounded-xl bg-forest/10 flex items-center justify-center flex-shrink-0",
									children: r.icon
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl sm:text-2xl text-forest font-semibold",
										children: r.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-ink/70 mt-1 leading-relaxed",
										children: r.desc
									}),
									r.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-block mt-2 text-xs text-gold font-medium bg-forest/5 px-2.5 py-1 rounded-full",
										children: r.badge
									})
								] })]
							}, r.title))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 400,
							className: "mt-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: onOpenConsult,
								className: "group inline-flex items-center gap-2.5 px-6 h-14 rounded-full bg-forest text-sand text-[12px] tracking-wider uppercase font-semibold hover:bg-[color:var(--forest-deep)] transition-all cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Plan My Visit" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "transition-transform group-hover:translate-x-1",
									children: "→"
								})]
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: 200,
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-3 border border-forest/15 rounded-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: DSC05737_scaled_jpg_default,
							alt: "Scenic road and landscape view near Bengaluru / Mysuru",
							className: "relative w-full h-[320px] sm:h-[500px] object-cover rounded-2xl shadow-xl hover:scale-[1.01] transition-transform duration-700",
							loading: "lazy"
						})]
					})
				})]
			})
		})
	});
}
function FinalCta({ onOpenConsult }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative min-h-[90vh] flex items-center overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: DSC05925_scaled_jpg_default,
				alt: "The beautifully illuminated cottages at Alpha Wellness Resort by night",
				className: "w-full h-full object-cover kenburns",
				loading: "lazy",
				width: 1920,
				height: 1080
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/40" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12 py-20 lg:py-24 text-white text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-center gap-3 mb-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-gold",
							children: "Begin Today"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" })
					]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-4xl sm:text-[80px] lg:text-[112px] leading-[0.98]",
						children: [
							"Ready to get away?",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "italic text-gold",
								children: "Reserve your stay."
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 260,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 sm:mt-8 text-base sm:text-lg lg:text-xl text-white/85 font-light max-w-2xl mx-auto",
						children: "Take the first step toward lasting peace, energy and vitality. Our team will personally design your stay."
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 400,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 flex flex-wrap justify-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: onOpenConsult,
							className: "group inline-flex items-center justify-center whitespace-nowrap gap-2.5 px-6 sm:px-9 h-14 sm:h-15 rounded-full bg-gold text-navy text-[11px] sm:text-[13px] tracking-[0.15em] sm:tracking-[0.2em] uppercase font-medium hover:bg-[color:var(--gold-soft)] transition-all cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Reserve your stay" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "transition-transform group-hover:translate-x-1",
								children: "→"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://wa.link/8vxvsu",
							className: "inline-flex items-center gap-3 px-9 py-4 rounded-full border border-white/40 text-white text-[13px] tracking-[0.2em] uppercase hover:bg-white hover:text-forest transition-all",
							children: "WhatsApp Us"
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 560,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 inline-flex items-center gap-2 text-white/60 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-gold shimmer" }), "Limited villa bookings available each week."]
					})
				})
			]
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-navy text-white pt-14 pb-8 border-t border-white/10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-6 lg:px-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-12 gap-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: white_logo_768x573_default,
								alt: "The Sanctuary Logo",
								className: "h-14 sm:h-16 w-auto object-contain mb-4"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-white/60 mt-5 max-w-md font-light leading-relaxed",
								children: "A private sanctuary near Mysuru offering authentic Ayurveda, Panchakarma, and a peaceful luxury environment to slow down and heal."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hairline mt-8 max-w-xs" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-gold mb-5",
							children: "Visit"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-white/75 leading-relaxed text-sm",
							children: [
								"Alpha Sanctuary, Melapura",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"near Mysuru, Karnataka 571477",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"India"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-gold mb-5",
							children: "Contact"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-2 text-sm text-white/75",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "+91 99457 69973" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "hello@alphawellnessresort.com" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://wa.link/8vxvsu",
									className: "hover:text-gold transition-colors",
									children: "WhatsApp →"
								}) })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-gold mb-5",
							children: "Follow"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-2 text-sm text-white/75",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "hover:text-gold",
									children: "Instagram"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "hover:text-gold",
									children: "YouTube"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "hover:text-gold",
									children: "LinkedIn"
								}) })
							]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-white/45",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Alpha Wellness Resort · All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow",
					children: "Crafted with care · Mysuru, India"
				})]
			})]
		})
	});
}
function StickyCta({ onOpenConsult }) {
	const [show, setShow] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setShow(window.scrollY > 900);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick: onOpenConsult,
		"aria-label": "Reserve your stay",
		className: `fixed bottom-6 left-6 z-40 hidden md:inline-flex items-center gap-3 px-6 h-13 py-4 rounded-full bg-forest text-sand text-[12px] tracking-[0.18em] uppercase shadow-2xl transition-all duration-500 cursor-pointer ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-gold shimmer" }), "Reserve your stay"]
	});
}
function WhatsAppFloat() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: "https://wa.link/8vxvsu",
		"aria-label": "Chat on WhatsApp",
		className: "fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gold text-navy flex items-center justify-center shadow-2xl float-y hover:scale-110 transition-transform",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			className: "w-6 h-6",
			fill: "currentColor",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20.52 3.48A11.86 11.86 0 0012 0C5.37 0 0 5.37 0 12a11.9 11.9 0 001.6 5.96L0 24l6.27-1.65A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 21.8a9.78 9.78 0 01-4.98-1.36l-.36-.21-3.72.98.99-3.63-.23-.37A9.8 9.8 0 1121.8 12 9.8 9.8 0 0112 21.8zm5.4-7.34c-.3-.15-1.74-.86-2.01-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.15-.17.2-.34.22-.63.07-.3-.15-1.24-.46-2.37-1.46a8.9 8.9 0 01-1.64-2.03c-.17-.3 0-.45.13-.6.13-.14.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.91-2.18-.24-.57-.48-.5-.66-.5l-.56-.01a1.07 1.07 0 00-.78.36c-.27.3-1.03 1-1.03 2.45s1.05 2.84 1.2 3.04c.15.2 2.07 3.16 5.02 4.43.7.3 1.25.49 1.68.62.7.22 1.34.19 1.85.12.56-.08 1.74-.71 1.98-1.4.24-.69.24-1.28.17-1.4-.07-.13-.27-.2-.57-.35z" })
		})
	});
}
//#endregion
export { AlphaLanding as component };
