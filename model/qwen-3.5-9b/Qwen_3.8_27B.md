# Qwen 3.5 9B — findings by Qwen 3.8 27B

- Source: Alibaba / Qwen Team — Qwen3.5-9B (`opencode/qwen-3.5-9b`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 9B (Qwen3.5-9B)
- **Short description:** Qwen's compact open-weight native-multimodal model from the Qwen3.5 generation — 9B dense hybrid (Gated DeltaNet linear attention + sparse MoE FFN + gated attention) with early-fusion vision encoder, built for cheap local/edge agentic and vision work. The evaluated OpenCode entry is a text-in/text-out, 128K route; the native model is image+video-capable with 262K context.
- **Provider / access:** OpenCode route `opencode/qwen-3.5-9b` (evaluated entry, Chat Completions); OpenRouter `qwen/qwen3.5-9b` (OpenAI-compatible, tools/reasoning/structured accepted); models.dev lists 15 providers (`alibaba/qwen3.5-9b`); open weights on Hugging Face `Qwen/Qwen3.5-9B` (vLLM / SGLang / KTransformers / transformers serving; Apache-2.0).
- **Release / knowledge:** Released February 2026 (models.dev release 2026-02-23; HF citation month February 2026; HF repo main tree 2026-03-02). Knowledge cutoff not separately published.
- **IDs:** `opencode/qwen-3.5-9b` (evaluated entry); `qwen/qwen3.5-9b` (OpenRouter); `alibaba/qwen3.5-9b` (models.dev); `Qwen/Qwen3.5-9B` (HF base: `Qwen/Qwen3.5-9B-Base`).
- **Context window:** 128K total on the evaluated OpenCode entry (repo meta). Native: 262,144 tokens, extensible to ~1,010,000 via static YaRN (vendor recipe, factor 4.0); models.dev lists 262,144 / 65,536 max output across 15 providers.
- **Modalities:** Evaluated entry: text in, text out. Native model: text + image + video in, text out (image-text-to-text pipeline on HF). Reasoning: yes — thinking mode by default, toggleable via `enable_thinking` / `chat_template_kwargs` API parameter (no `/think` soft switch). Tool calls: yes (`qwen3_coder` tool parser); structured output: yes. 201 languages/dialects.
- **Pricing (as of 2026-10-01):** "Standard pricing" on the evaluated OpenCode entry per repo meta; models.dev shows $0.00/$0.00 (at least one free-served provider) with paid 9B-class standard rates in the ~$0.05–0.10 in / $0.30–0.45 out per 1M class (adjacent family data points: Qwen3.5-35B-A3B $0.06/$0.45, Qwen3.7 Flash $0.03/$0.11). Apache-2.0 open weights → self-hosting at near-zero marginal cost.
- **Architecture:** 9B parameters (10B incl. embeddings per HF); 32 layers, hidden 4096; layout 8 × (3 × (Gated DeltaNet → FFN) → 1 × (Gated Attention → FFN)); Gated DeltaNet 32 V / 16 QK heads @128; Gated Attention 16 Q / 4 KV heads @256; FFN intermediate 12288; multi-token prediction trained; early-fusion vision encoder; "Gated Delta Networks combined with sparse Mixture-of-Experts" per vendor; Apache-2.0.

### Raw benchmarks found

> All numbers from the official Qwen3.5-9B Hugging Face model card (Qwen Team, Feb 2026, thinking mode; vendor table compares vs GPT-OSS-120B, GPT-OSS-20B, Qwen3-Next-80B-A3B-Thinking, Qwen3-30B-A3B-Thinking, and vision peers GPT-5-Nano / Gemini-2.5-Flash-Lite / Qwen3-VL-30B). GPQA Diamond 81.7 and MMLU-Pro 82.5 corroborated by independent HF eval-result entries on the repo.

Agent / tool use:

- IFEval: **91.5** (GPT-OSS-120B 88.9, GPT-OSS-20B 88.2 — tops its table; instruction following is the standout strength)
- IFBench: **64.5** (GPT-OSS-120B 69.0, Qwen3.5-4B 59.2)
- MultiChallenge: **54.5** (GPT-OSS-120B 45.3, Qwen3-Next-80B-A3B-Thinking 51.3)
- BFCL-V4 (function calling): **66.1** (Qwen3-Next-80B-A3B-Thinking 49.7, Qwen3-30B-A3B-Thinking 42.4)
- TAU2-Bench (airline/retail/banking, official setup with Opus-4.5-card airline fixes): **79.1** (Qwen3-Next-80B-A3B-Thinking 57.4, Qwen3-30B-A3B-Thinking 41.9, Qwen3.5-4B 79.9)
- VITA-Bench: **29.8** (Qwen3-Next-80B-A3B-Thinking 29.5 — flat)
- DeepPlanning: **18.0** (Qwen3-Next-80B-A3B-Thinking 0.4, Qwen3-30B-A3B-Thinking 4.9 — long-horizon planning remains weak in class)
- TIR-Bench (vision tool-use): **45.6 / 31.9** with/without CI (GPT-5-Nano 18.5, Gemini-2.5-Flash-Lite 21.5, Qwen3-VL-30B 22.5)
- V* (vision tool selection): **90.1 / 88.5** (Qwen3-VL-30B 83.2)
- Terminal-Bench 2.1 / Tau3-Banking / GDPval-AA / Claw-Eval / Toolathon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **81.7%** (GPT-OSS-120B 80.1, Qwen3-Next-80B-A3B-Thinking 77.2, Qwen3.5-4B 76.2 — beats its 120B reference)
- MMLU-Pro: **82.5%** (GPT-OSS-120B 80.8); MMLU-Redux: **91.1** (GPT-OSS-120B 91.0)
- HMMT Feb 25: **83.2**; HMMT Nov 25: **82.9** (GPT-OSS-120B 90.0 / 90.0)
- SuperGPQA: **58.2** (GPT-OSS-120B 54.6, Qwen3-Next-80B-A3B-Thinking 60.8)
- AA-LCR: **63.0** (GPT-OSS-120B 50.7, Qwen3-30B-A3B-Thinking 49.0); LongBench v2: **55.2** (GPT-OSS-120B 48.2)
- C-Eval 88.2; MMMLU 81.2; MMLU-ProX (29-lang) 76.3; MAXIFE (23 settings) 83.4; NOVA-63 55.9; INCLUDE 75.6; Global PIQA 83.2; PolyMATH 57.3; WMT24++ 72.6
- HLE / CritPt / AA Intelligence Index / BenchLM overall: no verified public score found

Coding:

- LiveCodeBench v6: **65.6** (GPT-OSS-120B 82.7, GPT-OSS-20B 74.6, Qwen3-Next-80B-A3B-Thinking 68.7, Qwen3-30B-A3B-Thinking 66.0)
- OJBench: **29.2** (GPT-OSS-120B 41.5, GPT-OSS-20B 36.3)
- SWE-bench Verified / SWE-Pro / DeepSWE / SciCode / Vibe Code Bench: no verified public score found in the model card

Multimodal (native model — not available on the evaluated text-only route; documented for the record):

- MMMU **78.4** / MMMU-Pro **70.1** (GPT-5-Nano 75.8 / 57.2; Gemini-2.5-Flash-Lite 73.4 / 59.7; Qwen3-VL-30B 76.0 / 63.0 — tops its table)
- MathVision **78.9**, MathVista(mini) **85.7**, DynaMath **83.6**, We-Math **75.2**, ZeroBench_sub **31.1**
- RealWorldQA **80.3**, MMStar **79.7**, MMBench EN-DEV **90.1**, HallusionBench **69.3**
- OCRBench **89.2**, OmniDocBench1.5 **87.7**, CharXiv(RQ) **73.0**, CC-OCR **79.3**, AI2D **90.2**
- VideoMME **84.5** (sub), LVBench **70.0** (Gemini-2.5-Flash-Lite 60.9), MLVU **84.4**
- ScreenSpot Pro **65.2**, OSWorld-Verified **41.8**, AndroidWorld **57.8** (Qwen3-VL-30B 30.6 / 55.0)
- Spatial: ERQA **55.5**, CountBench **97.2**, EmbSpatialBench **83.0**
- Medical: SLAKE **79.0**, MedXpertQA-MM **49.9**

Long context:

- AA-LCR **63.0**, LongBench v2 **55.2** at the model's own window (vendor card); native 262K; no MRCR/RULER at 512K+ published; YaRN 1M recipe provided (static factor 4.0, vendor-advised to raise factor for shorter-typical workloads).

### Normalized scores (1–100)

- **Tool use: 62/100.** Instruction following is class-leading for its size (IFEval 91.5, MultiChallenge 54.5) and single-session agent work is strong (TAU2-Bench 79.1, BFCL-V4 66.1 both far above the prior-gen Qwen3 mid-size models), but DeepPlanning 18.0 and VITA-Bench 29.8 show long-horizon multi-step planning is still weak, capping the score mid-band.
- **Reasoning: 60/100.** GPQA Diamond 81.7 beats GPT-OSS-120B (80.1) on the same vendor table and MMLU-Redux/MMLU-Pro are ~91/82, placing it at the top of the 60–80% mid band; HMMT 83.2/82.9 trails GPT-OSS-120B's 90.0 and no HLE/AA-Index data was found, so it does not break out of the band.
- **Context window: 56/100.** Evaluated OpenCode entry is curated at 128K total — mid of the 100K–200K band (50–64). Native ceiling is 262,144 (extensible ~1.01M via YaRN, 65,536 max output on hosted routes), and AA-LCR 63.0 / LongBench v2 55.2 show decent long-context quality; the route cap, not the model, is the constraint.
- **Multimodal: 15/100.** The evaluated entry is text in / text out only (repo meta). The native model is a genuinely strong native-multimodal — it tops its own vision table (MMMU 78.4, MMMU-Pro 70.1, MathVision 78.9, OCRBench 89.2, VideoMME 84.5) — so any image/video route would score 80+; the text-only route is what is evaluated here.
- **Coding: 34/100.** LiveCodeBench v6 65.6 and OJBench 29.2 both trail GPT-OSS-120B (82.7 / 41.5) in the same vendor table, and no SWE-bench / DeepSWE / SciCode / Terminal-Bench numbers are published for this model — math-adjacent coding (HMMT ~83) is good but repo-scale agentic coding is unproven and the benchmarks that do exist sit in the low-mid band.
- **Cost efficiency: 90/100.** 9B open-weight Apache-2.0 model: at least one $0.00/$0.00 hosted provider on models.dev, standard paid rates in the ~$0.05–0.10 / $0.30–0.45 per 1M class, and trivially self-hostable (fits a single consumer GPU at 16-bit) — near the top of the paid scale, just short of the free-tier 100 band since the evaluated entry is standard pricing.
- **Overall Score: 45.4/100.** Mean of (62 + 60 + 56 + 15 + 34) / 5 = 45.4. Best fit: cheap local/edge inference and high-volume text steps (extraction, classification, drafting, function-calling with strong instruction following) where a 9B on one GPU is required; use a native-multimodal or larger route when vision, long-horizon planning, or repo-scale coding is needed.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-10-01
- Method: public internet research — official Qwen3.5-9B Hugging Face model card (huggingface.co/Qwen/Qwen3.5-9B: full 20-row language table vs GPT-OSS-120B/20B + Qwen3-Next-80B / Qwen3-30B-A3B thinking refs and 60-row vision-language table vs GPT-5-Nano / Gemini-2.5-Flash-Lite / Qwen3-VL-30B; architecture section; YaRN 1M recipe; agentic/serving docs), independent HF eval-result entries (GPQA Diamond 81.7, MMLU-Pro 82.5), models.dev `alibaba/qwen3.5-9b` row (262,144 / 65,536, 15 providers, $0.00/$0.00, released 2026-02-23), OpenRouter model/API page (capabilities), Ollama library + Dell HF hub confirmation of the open multimodal family; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
