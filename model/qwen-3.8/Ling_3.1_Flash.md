# Qwen 3.8 — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Qwen 3.8
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **IDENTITY NOTE (read first):** Qwen's lineup has no bare "Qwen 3.8" — the generation shipped as Qwen3.8-Max (flagship, 2026-08-02/03), Qwen3.8-Flash, Qwen3.8-27B, Qwen3.8-2.4T-A95B (open-weight Max-class checkpoint, 2026-08-13) and Qwen3.8-Flash-Next. This folder's meta.json is a stale stub ("128K total", "Text in/out"), and peer raters disputed the folder's target (excluded findings files for the Flash and 27B interpretations exist inside this folder). I score the generation's flagship-tier public evidence (Qwen official launch table, 2026-08-02) as the best-documented interpretation. If the folder instead tracks the text-only open checkpoint (Qwen3.8-2.4T-A95B), Multimodal drops to 15/100 and Overall to 63.6/100.

## Model card

- **Name:** Qwen 3.8 (generation entry; identity ambiguous — scored on Qwen3.8-Max-tier public evidence)
- **Short description:** Alibaba's Qwen3.8 generation flagship tier — 2.4T-parameter sparse MoE (95B active) with hybrid attention, 1M context, native multimodality and thinking mode; the generation's defining release was Qwen3.8-Max.
- **Provider / access:** Alibaba — Alibaba Cloud Model Studio / QwenCloud, QwenWork, OpenRouter; open-weight Max-class checkpoint (Qwen3.8-2.4T-A95B) on Hugging Face / ModelScope under a custom "qwen3.8-max" license (text-only, 262K native context).
- **Release / knowledge:** GA 2026-08-03 (preview 2026-07-19, World AI Conference Shanghai; open weights 2026-08-13). Knowledge cutoff not stated in captured sources.
- **IDs:** `opencode/qwen-3.8` (repo meta.json, stale stub); `qwen3.8-max` / `qwen3.8-max-0902` / `qwen3.8-2.4t-a95b` (QwenCloud).
- **Context window:** 1M tokens hosted (991,800 input non-thinking / 983,616 thinking); 131,072 max output; 262,144 thinking budget. Open checkpoint: 262,144 native.
- **Modalities:** Text, image, video in; text out; thinking mode; function calling, built-in tools, structured output.
- **Pricing (as of 2026-10):** $2.00 input / $6.00 output per 1M, flat across the full 1M window ($0.25 implicit cache, $2.50 explicit cache write, $0.17 explicit cache read); China region $1.65/$4.95; Batch API 50%.
- **Architecture:** 2.4T total / 95B active sparse MoE + hybrid attention (proprietary hosted; open checkpoint under custom license).

### Raw benchmarks found

Qwen's official launch table (qwen.ai blog, 2026-08-02; SWE rows evaluated with the Claude Code harness, temp=1.0, top_p=0.95, 256K):

Agent / tool use:

- Toolathlon Verified (Pass@1): **72.5%** (Claude Fable 5.1: 77.9%).
- CoWorkBench: **74.8%** (Fable 5.1: 75.9%); WorkSpaceBench: **67.7%**; JobBench: **53.4%**; SkillsBench: **70.2%**.
- Agents' Last Exam: **Pass@1 27.0 / Score 52.4** (GPT-5.6 Sol: 30.6 / 53.6).
- Automation-Bench (Pass@1): **27.3%**; WideSearch: **81.9%** (Fable 5.1: 81.2%); HLE with tools: **56.2%** (Fable 5.1: 64.5%).
- MCP-Atlas / Tau3-Banking: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (Fable 5.1: 92.6%; GPT-5.6 Sol: 94.1%).
- HLE (no tools): **43.6%** (Fable 5.1: 53.3%; GPT-5.6 Sol: 47.2%).
- IFBench: **82.8%** (GPT-5.6 Sol: 72.7%); $OneMillion-Bench (expert): **52.5%**; HealthBench: **60.2%**; PLawBench: **73.2%**; PRBench-Legal: **57.6%**; PRBench-Finance: **58.3%**.
- MRCR v2 8-needle at 256K: **92.9%** (GPT-5.6 Sol: 93.8%); LongBench v2: **66.3%**.

Coding:

- Terminal-Bench 2.1: **86.6%** (GPT-5.6 Sol: 88.8%; Fable 5.1 / Opus 4.8: 84.6%).
- SWE-bench Pro: **67.7%** (Fable 5.1: 80.0%).
- DeepSWE 1.1: **56.6%** (Fable 5.1: 70.0%); FrontierSWE: **73.5%** (Fable 5.1: 88.8%); NL2Repo-Bench: **55.9%**.
- PaperBench: **93.0%** (GPT-5.6 Sol: 90.5%); AndroidBench: **75.1%**; QwenSWEBench (in-house): **80.7%**; QwenQoderBench: **58.4%**.
- SciCode / LiveCodeBench / Vibe Code Bench: no verified public score found.

Long context: MRCR v2 92.9% at 256K (above); no 1M-pointwise retrieval score found.

Multimodal:

- MMMU-Pro: **82.3%**; MathVision: **95.2%** / **97.7%** with CI; BabyVision: **82.0%** / **91.3%** with CI; HLE-VL (w/ tools): **52.2%**; ZeroBench (Pass@5): **24.0 / 49.0**; LogicVista: **91.9%**; HiPhO: **90.0%**.
- OSWorld-Verified: **86.1%** (Fable 5.1: 85.0%); OSWorld 2.0: **19.4% / 46.7%**; ScreenSpot Pro: **84.5%**; WebArena-Verified: **66.8%**; AndroidWorld: **85.3%**; MobileWorld: **77.8%**; ClawEval-MM: **77.2 / 74.8**; Vision2Web: **69.0%**; Parametric CAD Bench: **91.5%**; RecreationBench: **51.7%**.
- CharXiv (RQ): **88.4% / 93.5%** with CI; OmniDocBench 1.5: **92.1**; RealWorldQA: **88.0%**; VideoMME (w/ sub.): **90.4%**; VideoMME v2: **68.3%**.
- Arena: #5 Text Arena, #2 Vision Arena (Alibaba press release).

### Normalized scores (1–100)

- **Tool use: 74/100.** Toolathlon Verified 72.5%, CoWorkBench 74.8%, WideSearch 81.9% and OSWorld 86.1% are above the mid band, but Agents' Last Exam Pass@1 27.0% and Automation-Bench 27.3% lag; no MCP-Atlas/τ³ evidence.
- **Reasoning: 79/100.** GPQA 92.6% is frontier-tier and HLE 43.6% (56.2% with tools) clears the 40% anchor; Fable 5.1 (53.3%) and GPT-5.6 Sol (47.2%) still lead.
- **Context window: 95/100.** 1M confirmed on the hosted API (991K usable); MRCR v2 92.9% at 256K is strong retrieval evidence.
- **Multimodal: 80/100.** Native text/image/video input; MMMU-Pro 82.3%, MathVision 97.7% (CI), OmniDocBench 92.1 and VideoMME 90.4% are top-band evidence. (15/100 if the folder tracks the text-only open checkpoint — see identity note.)
- **Coding: 76/100.** Terminal-Bench 2.1 86.6% and PaperBench 93.0% lead or tie the frontier, but SWE-bench Pro 67.7%, DeepSWE 56.6% and FrontierSWE 73.5% trail Fable 5.1 by 12–15 points.
- **Cost efficiency: 85/100.** $2/$6 per 1M flat across the full 1M window undercuts most frontier rivals; China region $1.65/$4.95.
- **Overall Score: 80.8/100.** Mean of the five quality dimensions (63.6/100 under the text-only open-checkpoint interpretation). Identity ambiguity is the dominant uncertainty — treat all scores as interpretation-dependent.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03 (updated 2026-10-10)
- Method: public internet research (Qwen official launch table and HF model card/discussions, OrcaRouter, Codersera, 7minAI, Simon Willison, Ridge); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3_8.md`, using the same headings.
