# Qwen3.7 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Alibaba Qwen (`qwen3.7-plus`, Qwen3.7 family)
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.7 (Qwen3.7 generation family; specific variants: Qwen3.7-Plus, Qwen3.7-Flash, Qwen3.7-Max; no bare "Qwen3.7" model found)
- **Short description:** Qwen3.7 series from Alibaba Qwen — a generation of models with robust text capabilities, comprehensive vision-language upgrades, and full-stack agent-level intelligence for coding, tool use, and productivity workflows; multi-modal interactive hybrid agent capabilities (perceive real-world scenes, read screens, interact with GUIs, generate code from visual references, end-to-end mobile app navigation).
- **Provider / access:** Alibaba Cloud Model Studio `qwen3.7-plus` (functionally equivalent to snapshot `qwen3.7-plus-2026-05-26`); also Qwen3.7 Flash/Max variants.
- **Release / knowledge:** Qwen3.7-Plus snapshot 2026-05-26 (Model Studio, last updated Oct 11, 2026); Qwen3.7 Flash released Jul 2026 (BenchGecko); knowledge cutoff not disclosed.
- **IDs:** `qwen3.7-plus` (Alibaba Cloud Model Studio); `qwen3-7-flash` (BenchGecko); no Free ID confirmed on Zen.
- **Context window:** 1,000,000 tokens (1M); Max input 991,808; Max output 131,072; Max Chain-of-Thought 262,144 (Qwen3.7-Plus, Model Studio).
- **Modalities:** Input text, image, video; output text; function calling supported; structured outputs supported; web search supported; prefix completion supported; context caching supported.
- **Pricing (as of 2026-10-27):** Qwen3.7-Plus (China Beijing, input <=256k): Input $0.276 / 1M, Output $1.101 / 1M; (256k<Input<=1M): Input $0.826 / 1M, Output $3.301 / 1M. Qwen3.7 Flash (BenchGecko): Input $0.03 / 1M, Output $0.13 / 1M.
- **Architecture:** Qwen3.7 family (Alibaba Qwen); parameter count not publicly disclosed; proprietary.

### Raw benchmarks found

Official (Alibaba Cloud Model Studio qwen3.7-plus): no numeric benchmark scores published — the page documents capabilities, context limits, pricing, rate limits, and regional availability only.

Independent (BenchGecko Qwen3.7 Flash, 5 benchmarks tested, data as 2026-10-26):
- OTIS Mock AIME 2024-2025: **86.7%** (math)
- GPQA diamond: **79.6%** (knowledge)
- FrontierMath-Tiers-1-3-v2-Private: **20.3%** (math)
- Chess Puzzles: **19.0%** (general)
- Mystery Game Puzzles: **6.4%** (general)
- BenchGecko score: **44.1** (rank #184 / 320, better than 43% of all models)
- Capabilities: math 53.5 (#118 globally), knowledge 49.3 (#137 globally), general 6.4 (#211 globally)
- Pricing: $0.03 input / $0.13 output per 1M tokens; sold by 2 providers

BenchGecko family comparison (Qwen 3.7 family):
- Qwen3.7 Flash (Jul 2026): 44.1, $0.03/M in, 1.0M ctx, 5 benchmarks
- Qwen3.7 Max (May 2026): 70.2, $1.48/M in, 1.0M ctx, 24 benchmarks
- Qwen3.7 Plus (Jun 2026): 43.0, $0.32/M in, 1.0M ctx, 23 benchmarks


### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** — scored independently.

- **Tool use: 70/100.** Function calling, structured outputs, web search, prefix completion all supported (Model Studio); multi-modal interactive hybrid agent capabilities (GUI navigation, mobile app end-to-end); no tau2/tau3/BrowseComp/OSWorld verification.
- **Reasoning: 80/100.** GPQA diamond 79.6% (BenchGecko), OTIS Mock AIME 86.7%, FrontierMath 20.3%; strong reasoning profile; Qwen3.7 Max BenchGecko 70.2 suggests higher-tier variants score better.
- **Context window: 90/100.** 1M tokens verified (Model Studio + BenchGecko); Max CoT 262K; no measured long-context retrieval score at full 1M window.
- **Multimodal: 75/100.** Text, image, video input; text output; GUI/screen perception and visual code generation; no dedicated multimodal benchmark scores (V*, MathVision, CharXiv, OCRBench) verified.
- **Coding: 60/100.** Positioned for coding and productivity workflows; visual code generation from references; BenchGecko general capability 6.4 (#211 globally) is weak; no SWE-bench/LiveCodeBench verification.
- **Cost efficiency: 70/100.** Qwen3.7 Flash $0.03/$0.13 per 1M is low-cost; Qwen3.7-Plus $0.276-$0.826 input / $1.101-$3.301 output per 1M is mid-to-high; proprietary API model. Not counted toward Overall.
- **Overall Score: 75/100.** Half-up mean of (70 + 80 + 90 + 75 + 60) / 5 = 75.0 → 75. Strong reasoning (GPQA 79.6%) and 1M context with multimodal agent capabilities; limited independent benchmark verification (5 benchmarks only) caps confidence.

### Conflicts noted

- **Variant identity:** No bare "Qwen3.7" model found — it is a generation family (Plus/Flash/Max). BenchGecko scores are for Qwen3.7 Flash specifically; Model Studio specs are for Qwen3.7-Plus. These may differ in capability.
- **Composite score discrepancy:** BenchGecko Qwen3.7 Flash score 44.1 (rank #184/320) vs Qwen3.7 Max 70.2 — large spread across family variants; the "qwen-3.7" folder may not map cleanly to either.
- **Pricing:** Model Studio Qwen3.7-Plus ($0.276-$0.826 input / $1.101-$3.301 output) vs BenchGecko Qwen3.7 Flash ($0.03/$0.13) — different variants, not directly conflicting but indicates wide price range within the family.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-27
- Method: public internet research (Alibaba Cloud Model Studio qwen3.7-plus official page; BenchGecko independent benchmark for Qwen3.7 Flash); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Nemotron_3.5_Super_VL_120B_A12B.md`, using the same headings.
