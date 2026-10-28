# Qwen 3.5 27B — findings by Flint

- Source: Qwen Team / Alibaba (`qwen/qwen3.5-27b`)
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 27B
- **Short description:** Alibaba's **February 2026 dense open-weight multimodal foundation model** — 27B parameters (a **dense** Gated DeltaNet + FFN architecture, not a MoE), early-fusion vision-language training, thinking + non-thinking modes, **Apache 2.0**. Punches far above its size: Artificial Analysis Intelligence Index **42** — the same score as the ~5×-larger Qwen3.5-122B-A10B MoE — with GPQA Diamond **85.5%** and SWE-bench Verified **72.4%**.
- **Provider / access:** Open-weight (Hugging Face `Qwen/Qwen3.5-27B`, Apache 2.0). Hosted on OpenRouter (`qwen/qwen3.5-27b`), DeepInfra, Alibaba Cloud Model Studio, Novita, GMI; **not on OpenCode Zen** (no Free ID exists). Served through OpenAI-compatible **Chat Completions** API endpoints (OpenRouter; DashScope-compatible mode on Alibaba Cloud Model Studio).
- **Release / knowledge:** Released **February 24, 2026** (Qwen3.5 family, per the Qwen Team citation); open-weight. Knowledge cutoff not published.
- **IDs:** `qwen/qwen3.5-27b` (OpenRouter); HF `Qwen/Qwen3.5-27B`.
- **Context window:** **262,144 native** tokens; extensible to **~1,010,000** via YaRN RoPE scaling (not native); **65,536 max output** (32,768 recommended; 81,920 for complex math/competition problems).
- **Modalities:** **Text + image in → text out** via early-fusion vision-language training; reasoning yes (thinking by default via sampling params — `temperature=1.0, top_p=0.95, top_k=20` general / `0.6/0.95/20` precise coding / non-thinking via `enable_thinking: false`); tool calls yes (BFCL-V4, JSON mode, Qwen-Agent / Qwen-Code agent scaffolds). **Video input: meta-claimed for the Qwen3.5 family but only text+image independently confirmed for this 27B size** (llm-stats / DeepInfra) — flagged, not inherited.
- **Pricing (as of 2026-10-28):** Hosted **$0.27/$2.16** per 1M tokens (OpenRouter), **$0.30/$2.40** (Alibaba Cloud Model Studio); DeepInfra FP8 blended ≈ **$0.84**/M. **Self-host: $0** (Apache 2.0 weights).
- **Architecture:** **Dense** — 27B params, 64 layers, hidden dim 5120, Gated DeltaNet (linear attention: 48 V heads + 16 QK heads) + FFN; early-fusion multimodal tokens; MTP-trained; thinking + non-thinking.

### Raw benchmarks found

> Official scorecard numbers come from the Qwen Team model card (`huggingface.co/Qwen/Qwen3.5-27B` benchmark table, corroborated by DeepInfra serving notes and llm-stats). Independent signals: Artificial Analysis Intelligence Index 42, DeepInfra throughput, llm-stats specs/pricing. No neutral third-party SWE-harness row (Vals/swebench.com) was located for this exact size.

Agent / tool use:

- TAU2-Bench: **79.0** (airline-domain fix per Claude Opus 4.5 card) — Qwen scorecard (HF eval results).
- BFCL-V4 (tool calling): **68.5** — Qwen scorecard.
- BrowseComp (search agent, context folding @256K): **61.0** — Qwen scorecard.
- Terminal Bench 2: **41.6** (max_params 32B run) — Qwen scorecard.
- SWE-bench Verified: **72.4%** — Qwen scorecard (HF eval results).

Reasoning / knowledge:

- MMLU-Pro: **86.1%**; MMLU-Redux: 93.2; C-Eval: 90.5; SuperGPQA: 65.6; IFEval: 93.4; IFBench: 76.1 — Qwen scorecard.
- GPQA Diamond: **85.5%**; HMMT Feb 25: 91.4; HMMT Nov 25: 89.2; HLE w/ CoT: 24.3; MMLU-ProX: 82.2 — Qwen scorecard.
- Artificial Analysis Intelligence Index: **42** for `Qwen3.5 27B (Dense)` — independent (Artificial Analysis); **same Index as the Qwen3.5-122B-A10B MoE**, and the successor Qwen3.6-27B scores **46** — coherent progression. AA-Omniscience: −42 (negative = typical hallucination offset).

Coding:

- SWE-bench Verified: **72.4%**; LiveCodeBench v6: **80.7%**; CodeForces: **2028**; Terminal Bench 2: 41.6; FullStackBench zh: 57.4 — Qwen scorecard.

Long context:

- AA-LCR: 66.1; LongBench v2: 60.2 — Qwen scorecard; no MRCR/RULER retrieval number located for this size.

Vision / multimodal:

- MMMU: 82.3; MMMU-Pro: 75.0; MathVista: 87.8; DynaMath: 85.9; RealWorldQA: 85.1; MMStar: 82.9; MMBenchEN-DEV-v1.1: 91.5; HallusionBench: 70.0; AI2D_TEST: 92.9; OCRBench: 91.0; CC-OCR: 81.8; OmniDocBench1.5: 88.9; CharXiv(RQ): 79.5; BabyVision: 44.6/34.8; VLMsAreBlind: 96.9; PolyMATH: 71.2; Global PIQA: 88.4; MAXIFE: 88.0; VideoMME: 87.0; MLVU: 85.9; LVBench: 73.6; ScreenSpot Pro: 70.3; AndroidWorld: 71.1; OSWorld-Verified: 56.2 — Qwen scorecard (vision-language section).

### Cross-source comparison

- Official (Qwen Team HF model card / Qwen3.5 blog, re-reported by DeepInfra and llm-stats) vs independent (Artificial Analysis Intelligence Index 42; DeepInfra FP8 serving 153.3 tok/s / 0.91s TTFT; llm-stats specs+pricing): direction consistent — the official dense-27B numbers (GPQA 85.5, SWE 72.4, LiveCode 80.7, MMLU-Pro 86.1) sit at or above the AA-42 anchor for the same class, and the AA-42 = 122B-MoE-equivalence is corroborated by the family progression (Qwen3.6-27B = 46).
- No material conflict found; the main uncertainty is the vendor-only LiveCodeBench v6 number and the unverified video-input claim for this size.

### Normalized scores (1-100)

- **Tool use: 76/100.** TAU2-Bench **79.0** and BFCL-V4 **68.5** show real agentic tool capability; SWE-bench Verified **72.4%** confirms tool-augmented coding. Capped below frontier proprietary tiers (Terminal-Bench 2.1 ref ~88%+, GDPval-AA ~1750+) by the thin TB2.1 / GDPval evidence for this size — mid-band open-weight tool use, not frontier.

- **Reasoning: 82/100.** Artificial Analysis Intelligence Index **42** (independent; equal to the ~5×-larger 122B MoE and "well above average" for the dense class) + GPQA Diamond **85.5%** + MMLU-Pro **86.1%** + IFEval **93.4** — strong reasoning for a 27B dense, short of the proprietary frontier band (GPQA 90%+, HLE 40%+).

- **Context window: 78/100.** **262,144 native** (scored in the 200K–500K band ≈ 78); the ~**1,010,000** figure is a YaRN RoPE extension, not the native trained window, so not credited at the 1M tier; 65,536 max output is generous.

- **Multimodal: 80/100.** Text+image confirmed via early-fusion training (MMMU **82.3**, MathVista **87.8**, RealWorldQA **85.1**); video input is meta-claimed but not independently verified for this size, so scored at the verified image tier with the native-VL early-fusion bump, held below the confirmed-video 122B MoE (83).

- **Coding: 79/100.** SWE-bench Verified **72.4%** and LiveCodeBench v6 **80.7%** are strong published numbers (vendor scorecard; no neutral Vals row located) — mid-pack open-weight coding, above mid, below frontier proprietary leaders (DeepSWE 74%+).

- **Cost efficiency: 92/100.** Outstanding — Apache 2.0 self-host **`$0`** (a dense 27B fits modest hardware), hosted from **`$0.27/$2.16`** with **153 tok/s** FP8 serving; among the best capability-per-dollar profiles in the open-weight field.

- **Overall Score: 79/100.** Mean of the five quality dims (Tool 76 + Reasoning 82 + Context 78 + Multimodal 80 + Coding 79) / 5 = **79**. Best fit: a **cheap, dense, open-weight multimodal workhorse** that punches far above its 27B size (AA Index 42 ≈ the 122B MoE), ideal for cost-sensitive self-hosted or budget-API vision-language + coding work; step up to Qwen3.6-27B (AA 46), the 122B MoE, or a proprietary frontier model when the latest agentic/coding edge matters.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-10-28
- Method: public web research prioritizing official model card/docs (Qwen Team Hugging Face `Qwen/Qwen3.5-27B` card + Qwen3.5 blog architecture) plus independent benchmarks/reviews (Artificial Analysis Intelligence Index 42, DeepInfra serving figures, llm-stats specs/pricing) — official-first with independent benchmark comparison; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.5_27B.md`, using the same headings.
