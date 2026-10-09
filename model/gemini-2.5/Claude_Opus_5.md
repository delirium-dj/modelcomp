# Gemini 2.5 — findings by Claude Opus 5

- Source: Google / Google DeepMind (generation tracked via its flagship serving ID `gemini-2.5-pro`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5
- **Short description:** Google DeepMind's 2025 "family of thinking models" — the generation in which reasoning stopped being a separate product and became default behaviour. It shipped as **Gemini 2.5 Pro**, **2.5 Flash** and **2.5 Flash-Lite**, documented together with 2.0 Flash in a single unusually detailed technical report, *Gemini 2.5: Pushing the Frontier with Advanced Reasoning, Multimodality, Long Context, and Next Generation Agentic Capabilities* ([arXiv 2507.06261](https://arxiv.org/html/2507.06261v2)).
- **Flagging a dataset overlap up front:** Google never shipped a model called plain "Gemini 2.5" — it is a generation label. This folder's own `meta.json` resolves it to `"id": "google/gemini-2.5-pro"` and describes it as "Google's Gemini 2.5 family flagship (served as `gemini-2.5-pro`)", and `model/gemini-2.5-pro/`, `model/gemini-2.5-flash/` and `model/gemini-2.5-flash-lite/` all exist as separate folders in this dataset. I have therefore scored **the generation as it is actually served on that flagship ID**, which is what the curated metadata asks for, and I am recording the overlap explicitly rather than quietly scoring a second copy of the Pro tier. Resolving the duplication is an orchestrator decision, not mine — `RULES.md` makes model folders permanent and this is not a hyphen, vendor-prefix or tier duplicate, so it is neither skippable nor mergeable by a research agent.
- **Provider / access:** Gemini API / Google AI Studio and Vertex AI (`gemini-2.5-pro`); also OpenRouter (`google/gemini-2.5-pro`). Vertex AI additionally shipped a **Model Optimizer** for this generation that routes between Pro and Flash per prompt on a quality/cost preference ([Google Cloud blog](https://cloud.google.com/blog/products/ai-machine-learning/gemini-2-5-pro-flash-on-vertex-ai)). **Not listed on OpenCode Zen**, whose Gemini line starts at Gemini 3 Flash ([Zen docs](https://opencode.ai/docs/zen/)).
- **Release / knowledge:** Gemini 2.5 Pro first announced **March 2025** ([blog.google](https://blog.google/technology/google-deepmind/gemini-model-thinking-updates-march-2025/)); **generally available and stable on 2025-06-17**, unchanged from the 06-05 preview, alongside 2.5 Flash GA and 2.5 Flash-Lite in preview ([Google developers blog](https://developers.googleblog.com/en/gemini-2-5-thinking-model-updates/)). The Gemini 2.5 Pro model card was published **2025-06-27**. Knowledge cutoff: no verified public date found. **Lifecycle:** this repo's curated metadata records it as a "legacy access-limited model per Gemini API docs", which is consistent with Google having shipped 3.x and 4-Argon generations since.
- **IDs:** `gemini-2.5-pro` (Gemini API / Vertex AI), `google/gemini-2.5-pro` (OpenRouter). **No free ID** — the folder's metadata sets `noFreeId: true`, and there is no Zen route at all.
- **Context window:** **1,048,576 tokens (1M)**, corroborated by [BenchLM](https://benchlm.ai/models/gemini-2-5-pro). Long context is one of the four pillars named in the generation's own report title. Max output: no verified public figure found.
- **Modalities:** **Text + image + audio + video in → text out** — genuine four-way input, which in 2025 made this generation the broadest multimodal surface of any frontier family, and which still beats most 2026 models in this dataset on input breadth. Reasoning ("thinking"): **on**, and the defining feature of the generation. Tool calls: yes; the report headlines "next generation agentic capabilities". No generated media (the 2.5 TTS and Native Audio previews are separate models with their own BenchLM entries).
- **Pricing (as of 2026-10-08):** **$1.25 / MTok input, $10.00 / MTok output** for `gemini-2.5-pro`. Transparency note: this is the figure recorded in this folder's curated `meta.json`, stated there as verified on 2026-10-04 against the Google API and OpenRouter's `google/gemini-2.5-pro` listing; **I did not independently re-verify the live rate today** and flag it as second-hand rather than restating it as my own observation. No free tier.
- **Architecture:** Proprietary, closed weights. Parameter counts and activation scheme undisclosed; the technical report describes a sparse-MoE Gemini 2.X lineage with staged long-context training, but publishes no size. BenchLM classifies the tracked row as **Non-Reasoning**, which is a harness-configuration label, not a claim that thinking is absent.

### Raw benchmarks found

> All figures are for `gemini-2.5-pro`, the serving ID this folder resolves to. Google-published and independently-measured values are separated, and they diverge sharply on coding and agentics.

Agent / tool use:

- τ²-bench: **54.1%** ([Artificial Analysis](https://artificialanalysis.ai/models/gemini-2-5-pro))
- Gert Labs rankings: **42.01%** ([Gert Labs](https://gertlabs.com/rankings))
- GDPval-AA: **616 Elo** / **0.0%** normalized (Artificial Analysis) — a normalized zero on real professional work
- AA Agentic Index: **3.5%** (Artificial Analysis) — effectively floor
- Terminal-Bench (any version), OSWorld, MCP-Atlas, Toolathon, Claw-Eval, BrowseComp: no verified public score found
- The generation's report advertises "next generation agentic capabilities"; the measured agentic record a year on does not support that claim, and I am scoring the measurements.

Reasoning / knowledge:

- GPQA: **83%** ([Google, deepmind.google/models/gemini/pro](https://deepmind.google/models/gemini/pro/)); independently **AA-GPQA Diamond 84.4%** (Artificial Analysis) — independent harness slightly *higher*
- HLE: **18.8%** ([Google](https://blog.google/technology/google-deepmind/gemini-model-thinking-updates-march-2025/)); independently **AA-HLE 22.5%** — again independently higher
- AA-LCR: **69.0%** (Artificial Analysis)
- CritPt: **2.6%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **16.1**; BenchLM overall **49.4/100, rank #95 of 889** (25 of 625 benchmarks, flagged conservative)
- AA-Omniscience: Index **−16.3**, Accuracy **39.1%**, **Hallucination Rate 90.9%** — the highest hallucination rate I have recorded anywhere in this pass
- AA-IFBench: **48.7%**
- FrontierMath v2: Tiers 1–3 **14.14%**, Tier 4 **4.17%** ([Epoch AI](https://epoch.ai/benchmarks/frontiermath-tier-4-v2?view=graph&tab=leaderboard))

Coding:

- SWE-bench Verified: **63.8%** (Google); independently **54.4%** ([Vals AI](https://www.vals.ai/models/google_gemini-2.5-pro)) — a **9.4-point** vendor premium
- AA-SciCode: **46.3%**; AA Coding Index: **33.3%** (Artificial Analysis)
- **Vibe Code Bench: 0.40%** ([Vals AI](https://www.vals.ai/benchmarks/vibe-code)) — near-zero, as with the Grok family on this harness; flagged as a probable scaffold incompatibility rather than averaged in as capability
- LiveCodeBench, SWE-bench Pro, FrontierCode: no verified public score found

Multimodal:

- AA-MMMU-Pro: **74.9%** (Artificial Analysis) — strong, and notably it is the *independent* figure rather than a vendor one
- Design Arena — Website: **1172 Elo** ([OpenRouter](https://openrouter.ai/google/gemini-2.5-pro/benchmarks))
- No MathVision, CharXiv, Video-MME, OmniDocBench, audio-understanding or GUI-grounding number found — which is a striking gap for a model whose headline was four-way multimodality

Long context:

- **No MRCR / RULER / needle-retrieval number surfaced in any source I consulted**, despite "Long Context" being one of four pillars in the generation's own report title. **AA-LCR 69.0%** is the only quantified long-context signal against a 1M-token window.

### Normalized scores (1–100)

- **Tool use: 48/100.** The weakest dimension and the clearest case of a claim aging badly: the generation was marketed on "next generation agentic capabilities", and the independent record shows **τ²-bench 54.1%, GDPval-AA normalized to 0.0%, and an AA Agentic Index of 3.5%** — with no Terminal-Bench, OSWorld, MCP or BrowseComp figure in existence to argue the other way. What was genuinely frontier agentic behaviour in mid-2025 is now floor-level against 2026 harnesses, and the score reflects measurement rather than reputation.
- **Reasoning: 65/100.** Respectable and, unusually, *conservatively* reported by the vendor — Google published GPQA 83% and HLE 18.8%, and Artificial Analysis independently measured **higher** on both (84.4% and 22.5%), which is the opposite of the usual direction and earns real credibility. Capped by CritPt 2.6%, FrontierMath Tier 4 4.17%, AA-IFBench 48.7%, an AA Intelligence Index of 16.1, and a **90.9% hallucination rate** against 39.1% accuracy — the worst abstention behaviour in this entire research pass.
- **Context window: 85/100.** A vendor-documented 1,048,576-token window, delivered as a headline pillar of the generation and usable in practice (AA-LCR 69.0%). Held below the 90s because for a model that put "Long Context" in its own paper title, **not one retrieval measurement is publicly available** — no MRCR, no RULER, no needle curve at any depth — so the 1M figure remains a capacity claim rather than a demonstrated capability.
- **Multimodal: 80/100.** Four-way input — text, image, **audio** and **video** — was this generation's genuine differentiator and still exceeds most 2026 entrants in this dataset on breadth; AA-MMMU-Pro 74.9% is a solid *independent* vision result, not a vendor one. Capped by text-only output and by the near-total absence of modality-specific measurement: no video benchmark, no audio-understanding benchmark, no document/OCR benchmark. The capability is credible; the evidence for its *quality* outside still images is thin.
- **Coding: 57/100.** SWE-bench Verified 63.8% was a strong number in 2025, but the independent reproduction lands at **54.4%** — a 9.4-point vendor premium that has to be priced in — and the supporting evidence is weak: AA Coding Index 33.3%, AA-SciCode 46.3%, no LiveCodeBench, no SWE-bench Pro, and a 0.40% result on Vals' agentic coding harness. Scored on the independent figure, not the vendor's.
- **Cost efficiency: 42/100.** $1.25 in / $10.00 out per MTok, **no free tier**, and recorded as a legacy access-limited model — for a BenchLM rank of #95. The comparison that settles it is internal to Google's own catalogue: **Gemini 3.5 Flash-Lite costs $0.30 / $2.50 and scores 50.79**, i.e. roughly a quarter of the input price and a quarter of the output price for a *higher* aggregate score. There is no workload for which paying 2.5 Pro's rate is rational today, which is what a cost-efficiency score is supposed to capture.
- **Overall Score: 67/100.** Mean of the five non-cost dims (48 + 65 + 85 + 80 + 57) / 5 = 67.0. Best fit: historically important and still technically interesting — a 1M-token, four-way-multimodal thinking model, and the generation that made reasoning default — but on current evidence it is outclassed within its own vendor's catalogue on price, agentics and coding. The only workload I would still choose it for is bulk audio/video ingestion at 1M context where a newer Gemini tier is unavailable, and even then the 90.9% hallucination rate demands verification downstream.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — the Gemini 2.5 technical report (arXiv 2507.06261) for the generation's composition and stated pillars, Google's developer-blog GA announcement of 2025-06-17 for the Pro/Flash/Flash-Lite lifecycle, the March-2025 thinking-updates post and `deepmind.google/models/gemini/pro` for vendor benchmark figures, the Vertex AI launch post for the Model Optimizer, BenchLM's aggregated `gemini-2-5-pro` page, and the underlying Artificial Analysis, Vals AI, Epoch AI, Gert Labs and OpenRouter leaderboards. The OpenCode Zen catalogue was checked and contains no Gemini 2.5 route. This folder's `meta.json` was read only to establish which serving ID it tracks; its pricing figure is reported as second-hand and explicitly **not** independently re-verified today. The overlap with `model/gemini-2.5-pro/` is disclosed rather than silently duplicated, and no data was imported from `gemini-2.5-flash` or `gemini-2.5-flash-lite`, which have their own folders. Where vendor and independent figures diverge (SWE-bench 63.8% vs 54.4%), the independent value drives the score. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
