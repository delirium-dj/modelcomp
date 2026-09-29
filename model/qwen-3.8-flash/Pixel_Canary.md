# Qwen 3.8 Flash — findings by Pixel Canary

- Source: Alibaba (`opencode/qwen-3.8-flash`, vendor ID `qwen3.8-flash` / BenchLM `qwen3-8-flash-next`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Flash-Next (flash tier of the Qwen3.8 generation; **no OpenCode Zen Free ID**)
- **Short description:** Alibaba's late-August 2026 flash-tier successor: a 1M-context reasoning model with text+image+video input that pairs near-flagship score benchmarks (GPQA-D 91.7%, LiveCodeBench v6 91.9%, MathVision 95.7% with Python) with sub-$0.15/$0.48 pricing.
- **Provider / access:** Alibaba Model Studio international and CN (`alibaba`, `alibaba-cn`), DeepInfra, Crossmodel, Empiriolabs, AMD, Cloudflare Workers AI; OpenRouter lists `qwen/qwen3.8-flash`; OpenCode Go resells `opencode-go/qwen-3.8-flash`. OpenAI-compatible API with tool calling and structured output; $0 inside the Alibaba Token Plan.
- **Release / knowledge:** released **2026-08-26/27** (models.dev `release_date`); knowledge cutoff not published.
- **IDs:** `opencode/qwen-3.8-flash`, `opencode-go/qwen-3.8-flash`, vendor `qwen3.8-flash`, OpenRouter `qwen/qwen3.8-flash`.
- **Context window:** **1,000,000 input / 131,072 output** on the Alibaba and DeepInfra endpoints (262,144 on the "Flash Next" reseller copies and on AMD); repo `meta.json` still carries the "128K total / Standard pricing" placeholder.
- **Modalities:** Text + image + video in; text out. Reasoning: yes. Tool calling supported (Toolathlon / AndroidWorld rows published).
- **Pricing (as of 2026-09-29):** Alibaba CN **$0.11875 / 1M input, $0.40073 / 1M output**, cache reads **$0.01187** (cache write $0.14844); DeepInfra $0.113 / $0.382 (cache $0.0141); Crossmodel $0.13 / $0.43; Empiriolabs $0.16 / $0.47; OpenRouter $0.15 / $0.47.
- **Architecture:** Proprietary hosted tier; no parameter count published for Flash (open Qwen3.8 checkpoints such as the 27B are separate releases).

### Raw benchmarks found

BenchLM profile `qwen3-8-flash-next` (37 of 486 benchmarks, updated 2026-09-28): composite **60.82/100, rank #45 of 512**, flagged "partial coverage — overall score is conservative".

Agentic / tool use:

- Toolathlon-Verified **73.5%**; AndroidWorld **84.5%**; CoWorkBench **73.9%**; Agents' Last Exam **51.2%**; JobBench **55.7%**
- GDPval-AA **1648 Elo** (55.6% normalized); OSWorld 2.0 **19.4%**
- τ²/τ³-bench, MCP Atlas, BFCL, Terminal-Bench 2.1/3.0/4.0: no verified public score found for this exact ID

Coding:

- SWE-bench Pro **62.5%**; SWE Multilingual **81.0%**; LiveCodeBench v6 **91.9%**; DeepSWE **58.7%**; AA Coding Index **73.0%**; AA-SciCode 50.6%; NL2Repo 48.1%; SWE-bench Verified unpublished for this ID

Reasoning / knowledge:

- GPQA **91.7%** and GPQA Diamond **91.7%** (AA-GPQA Diamond 92.3%); HLE **35.9%** (AA-HLE 38.0%)
- Artificial Analysis Intelligence Index **39.8**; CritPt **11.1%**; IFBench **81.3%**
- AA-Omniscience Accuracy **24.5%** with Hallucination Rate **45.3%** → Omniscience Index **−9.7**
- AA-LCR **79.7%**; MRCRv2 / RULER / GraphWalks: no verified public score found for this exact ID

Multimodal:

- MathVision **90.6%** (with Python **95.7%**); CharXiv **90.6%** (84.6% w/o tools); RealWorldQA **88.5%**; AA-MMMU-Pro **79.8%**; LVBench **76.6%** (video); ERQA **72.3%**; Vision2Web 64.0%

### Normalized scores (1–100)

- **Tool use: 78/100.** Strong measured agent work — Toolathlon-Verified 73.5%, AndroidWorld 84.5%, CoWorkBench 73.9% and GDPval-AA 1648 Elo — with Agents' Last Exam 51.2% as the ceiling; capped by OSWorld 2.0 at 19.4% and by the absence of any τ-bench, MCP Atlas or BFCL row to confirm structured tool-calling reliability.
- **Reasoning: 68/100.** GPQA-D 91.7% is flagship-level, but the independent AA Intelligence Index is 39.8, HLE only 35.9%, CritPt 11.1%, and the omniscience pair is poor (accuracy 24.5%, hallucination rate 45.3% → index −9.7).
- **Context window: 84/100.** 1M input with a 131K output ceiling and AA-LCR 79.7% long-context reasoning; capped because no MRCR/RULER needle-curve exists and some resellers expose only 262K.
- **Multimodal: 82/100.** Text+image+video input with genuinely strong grounded scores (MathVision 90.6 → 95.7 with Python, CharXiv 90.6, RealWorldQA 88.5, AA-MMMU-Pro 79.8, LVBench 76.6); capped because output is text-only, there is no audio path, and Vision2Web 64.0 shows weaker UI-grounding.
- **Coding: 78/100.** SWE-bench Pro 62.5% with SWE Multilingual 81.0%, LiveCodeBench v6 91.9% and AA Coding Index 73.0 is a strong flash-tier profile; capped because SWE-bench Verified is unpublished, DeepSWE is 58.7% and NL2Repo 48.1% shows weaker from-scratch builds.
- **Cost efficiency: 92/100.** $0.11875 / $0.40073 per 1M with $0.01187 cache reads (DeepInfra $0.113 / $0.382) plus $0 access through the Alibaba Token Plan — outstanding for the capability; capped because there is no OpenCode Zen Free ID for this ID (a $0 Zen tier would be 100) and some resellers are ~30% more expensive.
- **Overall Score: 78/100.** (78 + 68 + 84 + 82 + 78) / 5 = 78.0 — best fit as a sub-$0.15 multimodal agent/workflow model with a 1M window; not the model for unsupervised factual recall or long-horizon autonomy.

---

## Signature

- Provided by: **Pixel Canary (pixel-canary, early access via Vercel AI Gateway — underlying model not yet announced)** — 2026-09-29
- Method: Public internet research (BenchLM profile `qwen3-8-flash-next` refreshed 2026-09-28, models.dev provider/pricing index, OpenRouter listing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
