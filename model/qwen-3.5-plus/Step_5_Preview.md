# Qwen 3.5 Plus — findings by Step 5 Preview

- Source: Alibaba / Qwen3.5-Plus (`opencode/qwen-3.5-plus`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Plus
- **Short description:** Alibaba's hosted Qwen3.5 flagship on Model Studio — the production API over the 397B-A17B open weights with a 1M default context and built-in adaptive tools; strong multilingual multimodal agent scores (MMMU 85.0, VideoMME 87.5) at mid-tier pricing, superseded by Qwen3.6 Plus and later.
- **Provider / access:** Alibaba Cloud Model Studio (official hosted API with built-in search/code-interpreter tools); third-party gateways; OpenCode Zen (`opencode/qwen-3.5-plus`); Chat Completions API, reasoning + non-reasoning modes, adaptive tool use.
- **Release / knowledge:** released 2026-02-16/17 alongside the Qwen3.5-397B-A17B open weights (Alibaba Cloud blog 2026-02-17, Analytics Vidhya); knowledge cutoff not published; superseded by Qwen3.6 Plus (folder meta).
- **IDs:** `opencode/qwen-3.5-plus` (Zen); Model Studio hosted route `Qwen3.5-Plus` (hosted variant of `Qwen3.5-397B-A17B`).
- **Context window:** 1,000,000 hosted default (991,808 in / 65,536 out per folder meta; 262,144 native on the open-weight base, extended in the hosted route).
- **Modalities:** text, image, video in; text out; native vision-language; thinking mode + non-thinking mode; tool calls with adaptive routing.
- **Pricing (as of 2026-10-21):** ~$0.26–$0.40 in / $1.56–$2.40 out per 1M with ~$0.04 cache (folder meta; Model Studio tiered).
- **Architecture:** hosted over the Qwen3.5-397B-A17B foundation — 397B total / 17B active MoE, hybrid Gated DeltaNet linear attention + sparse MoE, unified text+vision architecture; 201 languages/dialects.

### Raw benchmarks found

Alibaba Cloud official evaluation (2026-02-17, Qwen3.5-397B-A17B = the Plus base; hosted Plus adds tools/1M context) + independent JobBench / Vibe Code Bench via BenchLM:

Agent / tool use:

- TAU2-Bench: **86.7%** (Alibaba; ref: Claude 4.5 Opus 91.6%, Gemini-3 Pro 85.4%)
- WideSearch: **74.0%** (Alibaba)
- BrowseComp: **69.0%** simple context-folding / **78.6%** with DeepSeek-V3.2-style discard-all (Alibaba; two strategies)
- HLE w/ tool (search agent): **48.3%** (Alibaba; ref: K2.5-1T 50.2%)
- BFCL-V4: **72.9%** (Alibaba; ref: Claude 4.5 Opus 77.5%)
- Tool Decathlon: **38.3%** (Alibaba); DeepPlanning: **34.3%** (Alibaba); VITA-Bench: **49.7%** (Alibaba)
- MCP-Mark: **46.1%** (Alibaba)
- JobBench: **18.5%** (JobBench paper via BenchLM — independent, weak)
- Tau3-Banking / GDPval-AA / OSWorld / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA: **88.4%** (Alibaba; ref: GPT5.2 92.4%, Gemini-3 Pro 91.9%)
- HLE: **28.7%** (Alibaba); HLE-Verified: **37.6%** (Alibaba's revised harness)
- AIME26: **91.3%**; HMMT Feb 25 **94.8%**, Nov 25 **92.7%**; IMOAnswerBench: **80.9%** (Alibaba)
- MMLU-Pro: **87.8%**; MMLU-Redux: **94.9%**; SuperGPQA: **70.4%**; C-Eval: **93.0%** (Alibaba)
- AA-LCR (long-context reasoning): **68.7%** (Alibaba; ref: Claude 4.5 Opus 74.0%) — mid-low
- LongBench v2: **63.2%** (Alibaba)
- IFEval: **92.6%**; IFBench: **76.5%**; MultiChallenge: **67.6%** (Alibaba)
- CritPt / Omniscience / AA Intelligence Index: no verified public score found

Coding:

- SWE-bench Verified: **76.4%** (Alibaba; ref: Claude 4.5 Opus 80.9%, GPT5.2 80.0%)
- SWE Multilingual: **69.3%** (Alibaba)
- LiveCodeBench v6: **83.6%** (Alibaba; ref: Gemini-3 Pro 90.7%)
- Terminal Bench 2: **52.5%** (Alibaba; ref: Claude 4.5 Opus 59.3%)
- SecCodeBench: **68.3%** (Alibaba)
- Vibe Code Bench: **15.74%** (Vals AI via BenchLM — independent, very weak)
- SWE-bench Pro / DeepSWE / SciCode: no verified public score found

Long context:

- AA-LCR **68.7%** and LongBench v2 63.2% (Alibaba) show mid-band long-context reasoning on the 1M hosted window; no MRCR/RULER/GraphWalks retrieval-at-length figure published.

Multimodal extras (traceability): MMMU 85.0%, MMMU-Pro 79.0%, MathVision 88.6%, MathVista 90.3%, RealWorldQA 83.9%, OmniDocBench 1.5 90.8%, OCRBench 93.1%, V* 95.8%/91.1%, BabyVision 52.3%/43.3%, VideoMME 87.5% (w/ sub.) / 83.7% (w/o), VideoMMMU 84.7%, MMMLU 88.5%, NOVA-63 59.1%, WMT24++ 78.9% (all Alibaba).

### Normalized scores (1–100)

- **Tool use: 80/100.** TAU2-Bench 86.7%, BFCL-V4 72.9% and WideSearch 74.0% are solid tool-calling results with the hosted route adding built-in search/code-interpreter tools; capped by Tool Decathlon 38.3%, DeepPlanning 34.3%, MCP-Mark 46.1%, the independent JobBench 18.5% and no Tau3/GDPval/OSWorld numbers.
- **Reasoning: 82/100.** GPQA 88.4%, AIME26 91.3% and MMLU-Pro 87.8% are strong; capped by HLE 28.7% (mid, below the 40%+ frontier ref), AA-LCR 68.7% and LongBench v2 63.2% (mid-low long-context), and no published Intelligence Index or CritPt.
- **Context window: 95/100.** 1M hosted default (65,536 max output) lands in the ≥1M tier; 100 requires ≥98% retrieval evidence at 512K+ and the published AA-LCR 68.7% is mid-band, so 95.
- **Multimodal: 88/100.** Native vision-language with text, image and video input (video-in tier 75–90) and text-only output; MMMU 85.0%, MathVision 88.6%, VideoMME 87.5% and OCRBench 93.1% are excellent; BabyVision 52.3% (fine-grained visual puzzles) is a known soft spot.
- **Coding: 74/100.** SWE-bench Verified 76.4% and LiveCodeBench v6 83.6% are mid-to-upper band, but Terminal Bench 2 52.5%, SWE Multilingual 69.3% and the independent Vibe Code Bench 15.74% are well below the frontier DeepSWE/TB2.1 reference levels; no SciCode/DeepSWE numbers exist.
- **Cost efficiency: 90/100.** ~$0.26–$0.40 in / $1.56–$2.40 out with ~$0.04 cache sits near the ~$0.60/$2.20 ≈ 92 reference band on the cheaper side for a 397B-class hosted model.
- **Overall Score: 84/100.** Mean of (80 + 82 + 95 + 88 + 74) / 5 = 83.8 → 84. Best fit: long-context multilingual multimodal document and video work at a mid-tier price — superseded generations (Qwen3.6 Plus and later) lead on agentic coding.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-21
- Method: public internet research (Alibaba Cloud official Qwen3.5 evaluation blog, JobBench/Vibe Code Bench independent figures via BenchLM, Analytics Vidhya, GPTCrunch); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
