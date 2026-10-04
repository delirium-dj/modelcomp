# Inkling Small — findings by Space Bunny

- Source: Thinking Machines Lab (`thinkingmachines/Inkling-Small`; Zen route `opencode/inkling-small`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling-Small (Thinking Machines Lab's smaller open-weight Inkling; the flagship `Inkling` is a separate 975B-total model)
- **Short description:** Thinking Machines Lab's released open-weight general-purpose multimodal reasoning model — 276B total / 12B active MoE, 1M context, native text+image+audio input, controllable reasoning effort. Positioned as the efficient sibling of the 975B `Inkling`, explicitly aimed at agentic/tool-use systems, coding assistants, chatbots and RAG. Not a tier alias: it is a distinct checkpoint with different weights from the flagship `Inkling` (2026-07-15).
- **Provider / access:** open weights on Hugging Face (`thinkingmachines/Inkling-Small`, plus `Inkling-Small-NVFP4`); API via the Tinker fine-tuning platform and third-party providers (Artificial Analysis, DeepInfra, Baseten, OpenRouter `thinkingmachines/Inkling-Small`). Self-host via SGLang / vLLM / TokenSpeed / Unsloth / Transformers. Chat Completions-compatible gateway.
- **Release / knowledge:** released **2026-07-30**. Knowledge cutoff not stated numerically on the model card — described only as "information available as of its training cutoff" (**not verified**).
- **IDs:** `opencode/inkling-small` (Zen). Also `thinkingmachines/Inkling-Small` (HF), `inkling-small` (AA / OpenRouter), `inkling-small:free` and `inkling-small:batch` variants listed by Vector Wire. No Zen Free ID confirmed as a distinct $0 tier — scored on paid pricing.
- **Context window:** **1M tokens** (model card, "supports a context window of up to 1M tokens"). Max output not stated on the card.
- **Modalities:** text, image (pixel input, 40px–4096px per dimension), and **audio** (WAV, 16kHz, ideally under 2 min) in; text out. Reasoning: supported with controllable effort (Vector Wire records minimal / low / medium / high / xhigh settings; launch figures are at effort 0.99). Tool calling: supported per OpenRouter listing.
- **Pricing (as of 2026-10-04):** **$0.30 in / $1.20 out per 1M** (Artificial Analysis, 2026-10-04). Other providers: DeepInfra $0.45/$1.20, Thinking Machines via OpenRouter $0.45/$1.20, Baseten $0.50/$1.20. Cheaper than 59% of 328 priced models at a 3:1 blend.
- **Architecture:** 42-layer decoder-only transformer with sparse MoE feed-forward — each token routed to **6 of 256 experts** plus 2 shared experts active every token. Hybrid local/global attention. Natively multimodal: hierarchical patch encoder for images, discrete token encoding for audio, projected into a shared hidden space. **276B total, 12B active.** Numerics: BF16, MXFP8, NVFP4. Self-hosting needs ≥600 GB aggregated VRAM (BF16: 4× B300 or 8× H200) or ≥180 GB (NVFP4). **Apache 2.0** — fully open, commercial use allowed.

### Raw benchmarks found

> 71 results across 48 benchmarks from 12 sources (Vector Wire, latest 2026-10-04), 18 independently verified. Launch-post figures are vendor-reported by Thinking Machines at reasoning effort 0.99; BenchmarkList supplies ranks/percentiles. Ranks in parentheses.

Agent / tool use:

- MCP Atlas: **79.6%** (#17/48)
- Tau3-Banking: **18.8%** (#59/176)
- ARC-AGI-2: **40.1%** (#40/99) · ARC-AGI-1: **84.0%** (#41/97)
- Terminal-Bench 2.1: **55.1%** (#71/194); best-reported-harness variant **64.7%** (#23/27)
- Toolathlon Verified: **54.4%** (vendor, 2026-07-30)
- τ³-Banking (alternate harness): **23.7%** (vendor) / 15.5% (LLM Stats, 2026-10-03)
- GDPval-AA: **1269 Elo** (#58/352) · AA-Briefcase: **917** (#62/145)
- BrowseComp: **77.4%** (#38/60) · Agentic median **79.6%** (#6/7) — behind leaders by 28.6%
- Terminal-Bench 4.0: **1.01** (2026-10-04) — near-total collapse on the newest agentic suite

Reasoning / knowledge:

- GPQA Diamond: **89.5%** (#45/468, 91st percentile) — Reasoning rank **3rd of 7** measured
- Humanity's Last Exam: **33.3%** (#69/478); with tools **47.8%** (#26/29 — but 11th percentile, i.e. tool-assisted HLE is weak)
- Artificial Analysis Intelligence Index: **25.7** (#126/427, 71st percentile)
- CritPt (research physics): **8.3%** (#22/28)
- SimpleQA: **20.6%** (#21/30) · AA-Omniscience: **−9** (#27/30) — weak factuality, Vector Wire ranks factuality −36.3% vs leaders
- IFBench (instruction following): **82.2%** (#4/39, 92nd percentile)

Coding:

- SWE-bench Verified: **80.2%** (#16/50, 69th percentile) — strong, launch-reported
- SWE-bench Pro: **55.9%** (#42/58, 28th percentile) — much weaker than Verified
- SciCode: **49.7%** (#57/296) · ReactBench: **6.7%** (#24/24 — worst in field)
- AI WebDev Arena: **1404.64** (#60/105)
- Coding median **48.70%**, behind leaders by 30.4% (5th of 10 measured)

Long context:

- AA-LCR: **75.7%** (#84/408, 80th percentile) — one of the model's three "capable" axes
- Context Arena (GDM-MRCRv2 multi-needle retrieval): **24.4%** median (#4/5), **14.0%** (#47/51), **22.9%** (#30/31), **26.8%** (#30/30), **24.6%** (#20/20), **29.2%** (#15/15) across reasoning modes; AUC at 128K ~20–25%, **AUC at 1M only ~4.5–5.0%**
- Read as a whole: effective retrieval collapses at the far end of the 1M window despite the advertised size.

Multimodal / speech:

- MMMU-Pro: **74.0%** (#23/72) · MMAU: **77.0%** (#3/33, 94th percentile) · CharXiv-R: **77.4%** (#24/35)
- VoiceBench: **90.1%** (#6/47) / 91.4% (vendor README) · AudioMC: **54.9%** (#3/39)
- Multimodal median **74.0%**, behind leaders by 31.4%

Math:

- AIME 2026: **95.5%** (#15/36) · HMMT February 2026: **90.2%** (#9/25)
### Normalized scores (1–100)

- **Tool use: 62/100.** MCP Atlas 79.6% (#17/48) and GDPval-AA 1269 (#58/352) show real agentic competence, and tool calling is supported — but Tau3-Banking 18.8% (#59/176) is poor, Terminal-Bench 2.1 is 55.1% (#71/194) rising only to 64.7% on the best-reported harness, and **Terminal-Bench 4.0 collapses to 1.01**. Vector Wire ranks agentic 6th of 7 measured, 28.6% behind leaders.
- **Reasoning: 74/100.** GPQA Diamond **89.5% (#45/468)** and IFBench 82.2% (#4/39, 92nd percentile) are genuinely strong — BenchmarkList rates reasoning **3rd of 7** measured. Held well below the top band by HLE 33.3% (#69/478), AA Index 25.7 (#126/427), CritPt 8.3%, and weak factuality (SimpleQA 20.6%, Omniscience −9).
- **Context window: 72/100.** The 1M window is real and advertised, but measured behaviour undercuts it: AA-LCR 75.7% (#84/408) is merely capable, and Context Arena multi-needle retrieval AUC falls to **~4.5–5.0% at the 1M mark**, with several runs ranking last of 20–51. Scored on native size, penalised hard for verified retrieval collapse at length.
- **Multimodal: 82/100.** Genuinely broad native I/O — text, image **and audio** — with excellent MMAU 77.0% (#3/33, 94th pct), VoiceBench 90.1% (#6/47) and AudioMC 54.9% (#3/39) making it one of the better open-weight audio-capable models. Capped by MMMU-Pro 74.0% (#23/72), CharXiv-R 77.4% (#24/35) and an overall multimodal gap of −31.4% to leaders.
- **Coding: 72/100.** SWE-bench Verified **80.2% (#16/50)** is a strong headline number and SciCode 49.7% is respectable, but the harder SWE-bench Pro drops to 55.9% (28th percentile), ReactBench 6.7% is last of 24, and the coding median sits 30.4% behind leaders (5th of 10).
- **Cost efficiency: 88/100.** $0.30 in / $1.20 out (cheapest tracked at AA; others $0.45–0.50 in) is cheap for a 276B/12B-active multimodal model, and cheaper than 59% of 328 priced models; not 100 because it is a paid SKU at list and the "free" variant is not a confirmed $0 Zen tier.
- **Overall Score: 72/100.** Best-fit as an open-weights (Apache 2.0), cheap, audio-and-image capable reasoning model you can actually self-host and fine-tune — with a 1M window best treated as marketing rather than a working long-context budget. Mean of the five non-cost dims: (62 + 74 + 72 + 82 + 72) / 5 = 72.4 → 72.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-04
- Method: public internet research (Thinking Machines Lab model card + HF model card, BenchmarkList, Vector Wire rollup, LLMLearner, Artificial Analysis pricing); scores are normalized 1–100 interpretations, not official vendor scores. Vendor-reported launch figures are distinguished from independently verified ones.
- Future sources: add a new file next to this one, e.g. `Inkling_Small_2.md`, using the same headings.
- Math median **90.2%**, but Vector Wire rates math **−44.7%** vs leaders (2 of 5) on FrontierMath-family evals

Safety:

- StrongREJECT: **98.4%** (#9/10) · FORTRESS: **71.6%** adversarial / 96.9% benign (#5/10)