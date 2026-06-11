import { r as __toESM } from "../_runtime.mjs";
import { t as hero_section_1536x1024_jpg_default } from "./hero-section-1536x1024.jpg-8OKI4y7H.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CWHvX2TM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DSC05737_scaled_jpg_default = "/assets/DSC05737-scaled.jpg-CnwQHUcO.jpeg";
var program_diabetes_default = "/assets/program-diabetes-tbmaMRkv.jpg";
var program_obesity_default = "/assets/program-obesity-B_z7KcKx.jpg";
var program_thyroid_default = "/assets/program-thyroid-DPjdysYk.jpg";
var doctor_default = "/assets/doctor-BToY4Ewc.jpg";
var DSC05710_scaled_jpg_default = "/assets/DSC05710-scaled.jpg-D1YPwMHH.jpeg";
var DSC05744_scaled_jpg_default = "/assets/DSC05744-scaled.jpg-BRgtOmyF.jpeg";
var DSC05756_scaled_jpg_default = "/assets/DSC05756-scaled.jpg-CeNBizP3.jpeg";
var DSC05925_scaled_jpg_default = "/assets/DSC05925-scaled.jpg-m4u74jSH.jpeg";
var DSC05563_scaled_jpg_default = "/assets/DSC05563-scaled.jpg-DbE6jDV4.jpeg";
var DSC05639_scaled_jpg_default = "/assets/DSC05639-scaled.jpg-B-0zXLDq.jpeg";
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Results, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experts, {}),
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
		className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[color:var(--sand)]/85 backdrop-blur-xl border-b border-[color:var(--border)]" : "bg-transparent"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-6 lg:px-12 h-20 flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#top",
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `font-display text-xl tracking-tight ${scrolled ? "text-forest" : "text-white"}`,
					children: "Alpha"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `eyebrow hidden sm:inline-block ${scrolled ? "text-[color:var(--muted-foreground)]" : "text-white/70"}`,
					children: "Wellness Resort"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: onOpenConsult,
				className: `inline-flex items-center gap-2 px-5 h-11 rounded-full text-[13px] tracking-wider uppercase transition-all cursor-pointer ${scrolled ? "bg-forest text-sand hover:bg-[color:var(--forest-deep)]" : "bg-white/10 text-white border border-white/30 hover:bg-white hover:text-forest"}`,
				children: "Book Now"
			})]
		})
	});
}
function Hero({ onOpenConsult }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative min-h-[75vh] sm:min-h-screen w-full overflow-hidden bg-navy",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_section_1536x1024_jpg_default,
						alt: "Wellness consultation in a tropical pavilion at golden hour",
						className: "w-full h-full object-cover kenburns",
						width: 1920,
						height: 1080
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
								children: "A Sanctuary For Root-Cause Healing"
							})]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 120,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "font-display text-4xl sm:text-6xl lg:text-[104px] leading-[1.02] text-white",
								children: [
									"Reverse Chronic",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Disease ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
										className: "italic font-normal text-gold",
										children: "Naturally."
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 260,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 sm:mt-8 max-w-xl text-sm sm:text-[17px] leading-relaxed text-white/80 font-light",
								children: "Functional Medicine, Ayurveda and Advanced Diagnostics — converging in one private sanctuary to help you heal the root cause, not just the symptoms."
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 400,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex flex-wrap gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: onOpenConsult,
									className: "group inline-flex items-center gap-3 px-7 h-14 rounded-full bg-gold text-navy text-[13px] tracking-[0.18em] uppercase font-medium hover:bg-[color:var(--gold-soft)] transition-all cursor-pointer",
									children: ["Book Free Consultation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "transition-transform group-hover:translate-x-1",
										children: "→"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://wa.me/910000000000",
									className: "inline-flex items-center gap-3 px-7 h-14 rounded-full border border-white/40 text-white text-[13px] tracking-[0.18em] uppercase hover:bg-white hover:text-forest transition-all",
									children: "Talk To A Specialist"
								})]
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 border-t border-white/15 bg-black/30 backdrop-blur-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-[1400px] px-6 lg:px-12 py-8 grid grid-cols-2 md:grid-cols-4 gap-6",
					children: [
						["99%", "Satisfaction"],
						["20+", "Years Experience"],
						["28+", "Specialists"],
						["5,000+", "Patients Healed"]
					].map(([n, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-white",
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
		"Functional Medicine",
		"Ayurveda",
		"Naturopathy",
		"Advanced Diagnostics",
		"Clinical Nutrition",
		"Yoga Therapy",
		"Hydrotherapy",
		"Mind-Body Healing"
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
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-forest",
							children: "The Modern Crisis"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-3xl sm:text-5xl lg:text-7xl text-forest leading-[0.98]",
						children: [
							"Tired of managing",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"symptoms instead of",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "italic",
								children: "solving them?"
							})
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 150,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 sm:mt-8 text-base sm:text-lg leading-relaxed text-ink/70 font-light max-w-md",
							children: "Conventional medicine excels at acute care but rarely heals chronic disease. At Alpha, we don't suppress your body — we listen to it, decode it, and restore it."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 300,
						className: "mt-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-2xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: DSC05737_scaled_jpg_default,
								alt: "The serene main pavilion at Alpha Wellness Resort",
								className: "w-full h-[280px] sm:h-[420px] object-cover hover:scale-105 transition-transform duration-[1.4s]",
								loading: "lazy",
								width: 1080,
								height: 1800
							})
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-7 lg:pl-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid sm:grid-cols-2 gap-px bg-[color:var(--border)] rounded-2xl overflow-hidden border border-[color:var(--border)]",
					children: [
						{
							n: "01",
							t: "Diabetes",
							d: "Daily injections, rising HbA1c, no real recovery."
						},
						{
							n: "02",
							t: "Thyroid",
							d: "Lifelong medication that never restores balance."
						},
						{
							n: "03",
							t: "Obesity",
							d: "Stubborn weight, fluctuating energy, low confidence."
						},
						{
							n: "04",
							t: "Fatigue",
							d: "Constant exhaustion no test can explain."
						},
						{
							n: "05",
							t: "Gut Issues",
							d: "Bloating, IBS, food sensitivities silenced — never solved."
						},
						{
							n: "06",
							t: "Stress & Burnout",
							d: "A nervous system stuck in permanent overdrive."
						}
					].map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * 80,
						className: "bg-sand p-6 sm:p-8 group",
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "method",
		className: "bg-navy text-white py-16 lg:py-24 overflow-hidden grain",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-6 lg:px-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-12 gap-12 mb-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-gold",
							children: "The Alpha Method"
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
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden lg:block absolute left-0 right-0 top-[78px] h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-6",
					children: [
						{
							n: "I",
							t: "Advanced Diagnostics",
							d: "World-class lab panels, gut microbiome, hormone & metabolic mapping."
						},
						{
							n: "II",
							t: "Root-Cause Discovery",
							d: "Your data interpreted by functional medicine experts to find the source."
						},
						{
							n: "III",
							t: "Personalized Protocol",
							d: "A bespoke plan blending modern medicine, ayurveda and lifestyle."
						},
						{
							n: "IV",
							t: "Immersive Healing",
							d: "Stay in our sanctuary as your body recalibrates under expert care."
						},
						{
							n: "V",
							t: "Lifetime Recovery",
							d: "Long-term coaching ensures the results stay with you for years."
						}
					].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * 120,
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative flex items-center justify-center w-20 h-20 rounded-full border border-gold/40 mb-8 bg-navy",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-2xl text-gold",
									children: s.n
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl text-white mb-3",
								children: s.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-white/60 leading-relaxed",
								children: s.d
							})
						]
					}, s.n))
				})]
			})]
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
					body: "A 14–28 day immersive protocol that addresses insulin resistance at the source — most guests see HbA1c drop by 1.5–3 points and reduce medication.",
					bullets: [
						"Continuous glucose tracking",
						"Personalised meal protocols",
						"Reduce or eliminate medication"
					],
					img: program_diabetes_default
				},
				{
					tag: "Program 02",
					title: "Obesity Reset",
					body: "Metabolic recalibration through clinical nutrition, hormone rebalancing and movement therapy — sustainable, never extreme.",
					bullets: [
						"8–18 kg fat loss typical",
						"Hormone & thyroid optimization",
						"Lifelong lifestyle blueprint"
					],
					img: program_obesity_default
				},
				{
					tag: "Program 03",
					title: "Thyroid Harmony",
					body: "Restore thyroid function naturally through stress modulation, gut healing, and targeted micronutrient therapy.",
					bullets: [
						"Hashimoto's & hypothyroid protocols",
						"Autoimmune modulation",
						"TSH, T3, T4 normalization"
					],
					img: program_thyroid_default
				},
				{
					tag: "Program 04",
					title: "Gut Healing",
					body: "Rebuild the microbiome that governs your immunity, energy and mood. A foundational program every guest benefits from.",
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
					body: "Calm a hyperactive nervous system through panchakarma, breathwork, and circadian recalibration. Sleep returns within days.",
					bullets: [
						"HRV & cortisol mapping",
						"Deep sleep restoration",
						"Burnout reversal"
					],
					img: DSC05756_scaled_jpg_default
				},
				{
					tag: "Program 06",
					title: "Detox & Longevity",
					body: "Cellular renewal through panchakarma, fasting protocols and advanced biomarker tracking. For those who want to live long, and live well.",
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
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `lg:col-span-5 ${reverse ? "lg:order-1 lg:pr-10" : "lg:pl-10"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
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
				] })
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
						children: "Real Results"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-3xl sm:text-5xl lg:text-7xl leading-[0.98] max-w-4xl",
					children: [
						"Measured in lab reports.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "italic text-gold",
							children: "Felt for a lifetime."
						})
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10",
					children: [
						{
							v: "−2.8",
							u: "pts",
							l: "Average HbA1c reduction"
						},
						{
							v: "12.4",
							u: "kg",
							l: "Average fat loss in 21 days"
						},
						{
							v: "73%",
							u: "",
							l: "Reduced or stopped medication"
						},
						{
							v: "9.4",
							u: "/10",
							l: "Energy & vitality score"
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
							name: "Rohan M.",
							city: "Mumbai · Age 52",
							tag: "Diabetes Reversal",
							quote: "I arrived on 90 units of insulin and four medications. Twenty-eight days later, I left on lifestyle alone. My HbA1c went from 9.8 to 6.1."
						},
						{
							name: "Priya S.",
							city: "Bangalore · Age 38",
							tag: "Thyroid Harmony",
							quote: "After a decade of medication, my thyroid normalised. Alpha didn't just treat my numbers — they gave me my energy and my mornings back."
						},
						{
							name: "Anand R.",
							city: "Dubai · Age 47",
							tag: "Stress Recovery",
							quote: "I came in exhausted and dependent on sleep medication. Within ten days, I was sleeping nine hours without a pill. The sanctuary did what years of clinics couldn't."
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
									className: "mt-4 sm:mt-6 font-display text-lg sm:text-2xl leading-snug text-white/95",
									children: [
										"“",
										s.quote,
										"”"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 pt-6 border-t border-white/15",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-white",
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
function Experience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-sand py-16 lg:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-6 lg:px-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-12 gap-12 items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "lg:col-span-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-forest",
							children: "The Sanctuary"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-3xl sm:text-5xl lg:text-7xl text-forest leading-[0.98]",
						children: [
							"Where healing",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "italic",
								children: "feels like a retreat."
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 200,
					className: "lg:col-span-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base sm:text-lg text-ink/70 font-light leading-relaxed",
						children: "Private villas, ayurvedic pavilions, an organic kitchen and 40 acres of healing forest. Designed by a team obsessed with both clinical precision and quiet luxury."
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid grid-cols-12 gap-4 lg:gap-6 auto-rows-[160px] lg:auto-rows-[200px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						className: "col-span-12 lg:col-span-8 row-span-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryTile, {
							src: DSC05744_scaled_jpg_default,
							alt: "Row of luxury cottages surrounded by green lawns",
							caption: "40 Acres · 18 Private Villas"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 120,
						className: "col-span-6 lg:col-span-4 row-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryTile, {
							src: DSC05710_scaled_jpg_default,
							alt: "Paved path leading to white modern wellness pavilion",
							caption: "Wellness Pavilion"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 200,
						className: "col-span-6 lg:col-span-4 row-span-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryTile, {
							src: DSC05639_scaled_jpg_default,
							alt: "Private wooden veranda of a villa with a deck lounge chair",
							caption: "Private Verandas"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 280,
						className: "col-span-6 lg:col-span-5 row-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryTile, {
							src: DSC05756_scaled_jpg_default,
							alt: "Glass-walled villa illuminated during golden hour sunset",
							caption: "Sunset Sanctuary"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 360,
						className: "col-span-6 lg:col-span-7 row-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryTile, {
							src: DSC05563_scaled_jpg_default,
							alt: "Paved stone path winding through lush green gardens",
							caption: "Healing Forest Paths"
						})
					})
				]
			})]
		})
	});
}
function GalleryTile({ src, alt, caption }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "relative w-full h-full overflow-hidden rounded-2xl group",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src,
				alt,
				className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.4s]",
				loading: "lazy"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
				className: "absolute bottom-5 left-5 right-5 flex items-center justify-between text-white",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow text-white/90",
					children: caption
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gold opacity-0 group-hover:opacity-100 transition-opacity",
					children: "→"
				})]
			})
		]
	});
}
function Experts() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "experts",
		className: "bg-navy text-white py-16 lg:py-24 grain",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-6 lg:px-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow text-gold",
						children: "Meet Your Doctors"
					})]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid lg:grid-cols-12 gap-12 lg:gap-20 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						className: "lg:col-span-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-3 border border-gold/30 rounded-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: doctor_default,
								alt: "Dr. Rajiv Menon, Chief Medical Officer",
								className: "relative w-full h-[360px] sm:h-[640px] object-cover rounded-2xl",
								loading: "lazy",
								width: 1080,
								height: 1800
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow text-gold",
									children: "Chief Medical Officer"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-3xl sm:text-5xl lg:text-7xl mt-4 leading-[0.98]",
									children: "Dr. Rajiv Menon"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display italic text-xl sm:text-2xl text-white/70 mt-3",
									children: "MBBS · MD · IFMCP"
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: 150,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 sm:mt-8 text-base sm:text-lg text-white/75 font-light leading-relaxed max-w-xl",
									children: "With 25 years bridging conventional and functional medicine, Dr. Menon has guided over 3,000 patients to lasting recovery. A certified IFM practitioner trained at Cleveland Clinic, he leads Alpha's research and clinical protocols."
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: 300,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8 max-w-xl",
									children: [
										["25+", "Years"],
										["3,200+", "Patients"],
										["IFMCP", "Certified"]
									].map(([v, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-3xl text-gold",
										children: v
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "eyebrow text-white/55 mt-1",
										children: l
									})] }, l))
								})
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 lg:mt-20 border-t border-white/10 pt-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-white/60 mb-10",
						children: "Supporting Specialists"
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10",
						children: [
							{
								n: "Dr. Aarti Mehta",
								r: "Endocrinology & Diabetology",
								y: "18 yrs"
							},
							{
								n: "Dr. Karthik Iyer",
								r: "Ayurveda · Panchakarma",
								y: "22 yrs"
							},
							{
								n: "Dr. Sneha Kapoor",
								r: "Functional Nutrition",
								y: "14 yrs"
							},
							{
								n: "Dr. Vikram Rao",
								r: "Integrative Cardiology",
								y: "20 yrs"
							}
						].map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * 100,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-t border-gold/30 pt-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-2xl text-white",
										children: m.n
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm text-white/65 mt-2",
										children: m.r
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "eyebrow text-gold mt-3",
										children: [m.y, " Experience"]
									})
								]
							})
						}, m.n))
					})]
				})
			]
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
							"Your healing journey",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "italic text-gold",
								children: "starts today."
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 260,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 sm:mt-8 text-base sm:text-lg lg:text-xl text-white/80 font-light max-w-2xl mx-auto",
						children: "Take the first step toward lasting health, energy and vitality. A specialist will personally design your recovery path."
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 400,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 flex flex-wrap justify-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: onOpenConsult,
							className: "inline-flex items-center gap-3 px-9 h-15 py-4 rounded-full bg-gold text-navy text-[13px] tracking-[0.2em] uppercase font-medium hover:bg-[color:var(--gold-soft)] transition-all cursor-pointer",
							children: "Book Free Consultation →"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://wa.me/910000000000",
							className: "inline-flex items-center gap-3 px-9 py-4 rounded-full border border-white/40 text-white text-[13px] tracking-[0.2em] uppercase hover:bg-white hover:text-forest transition-all",
							children: "WhatsApp Us"
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 560,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 inline-flex items-center gap-2 text-white/60 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-gold shimmer" }), "Limited consultation slots available each week."]
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
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-3xl",
								children: "Alpha Wellness Resort"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-white/60 mt-5 max-w-md font-light leading-relaxed",
								children: "A private sanctuary where functional medicine, ayurveda and advanced diagnostics converge to reverse chronic disease — naturally."
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
								"Alpha Sanctuary, Forest Drive",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Coorg, Karnataka 571201",
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
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "+91 90000 00000" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "hello@alphawellness.com" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://wa.me/910000000000",
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
					children: "Crafted with care · Coorg, India"
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
		"aria-label": "Book free consultation",
		className: `fixed bottom-6 left-6 z-40 hidden md:inline-flex items-center gap-3 px-6 h-13 py-4 rounded-full bg-forest text-sand text-[12px] tracking-[0.18em] uppercase shadow-2xl transition-all duration-500 cursor-pointer ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-gold shimmer" }), "Book Free Consultation"]
	});
}
function WhatsAppFloat() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: "https://wa.me/910000000000",
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
