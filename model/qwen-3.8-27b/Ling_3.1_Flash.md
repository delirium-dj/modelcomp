# Qwen3.8-27B — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Qwen3.8-27B
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-27B
- **Short description:** Alibaba's dense 27B open-weights vision-language model — native image/video understanding plus frontier-class agentic coding in a locally deployable footprint; a "compact, deployment-friendly" version of the Qwen3.8 generation.
- **Provider / access:** Alibaba — Apache 2.0 weights on Hugging Face (`Qwen/Qwen3.8-27B`, FP8 quantization available); Alibaba Cloud API; hosted Qwen Cloud version with 1M default context and built-in tools announced (coming). vLLM / SGLang / TokenSpeed compatible; Multi-Token Prediction support.
- **Release / knowledge:** Released 2026-08-14; 3M Hugging Face downloads in its first three days. Knowledge cutoff not stated in captured sources.
- **IDs:** `Qwen/Qwen3.8-27B` (repo meta.json). No Free ID on Zen (meta.json `noFreeId: true`).
- **Context window:** 262,144 tokens native (extensible to 1M with YaRN per repo meta.json).
- **Modalities:** Text, image, video in; text out; thinking on by default (low / medium / xhigh / non-reasoning variants).
- **Pricing (as of 2026-10):** $0.50 input / $3.00 output per 1M tokens at Alibaba's API (Artificial Analysis; 80% cache discount, blended ~$0.47); list $0.42/$2.55 per ModelBeat; Novita cheapest at $3/1M output. Self-hosting is free (Apache 2.0).
- **Architecture:** 27B dense, Apache 2.0; ~56GB BF16 / ~28GB FP8 / ~17GB Q4 memory footprint.

### Raw benchmarks found

Qwen's official launch table (Hugging Face model card, 2026-08-14; Claude Code harness, temp=1.0, top_p=0.95, 256K context unless noted):

Agent / tool use:

- Terminal-Bench 2.1 (Terminus): **73.0%** (vs Opus 4.6 Max 78.2%, Qwen3.7-Plus 64.0%).
- CoWorkBench (long-horizon office work): **70.7%**.
- Agents' Last Exam: **Pass@1 20.4 / Score 42.9**.
- JobBench: **33.4%**.
- ClawEval-MM (multimodal tool use): **Pass@3 57.4 / Average 56.9**.
- Tau3-Banking / GDPval-AA / MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **89.2%** (Epoch AI tracks 90.5%).
- HLE: **30.8%** (judged GPT-4o).
- IFBench: **79.5%**.
- Artificial Analysis Intelligence Index: **34** (AA's own page, xhigh preset); VentureBeat reported **52** — conflicting, unresolved. AA Agentic Index: **51** (per VentureBeat, ahead of Claude Opus 4.8 max).

Coding:

- LiveCodeBench v6: **90.3%**.
- SWE-bench Pro: **61.7%** (vs Opus 4.6 Max official 53.4%).
- DeepSWE 1.1: **42.2%**.
- NL2Repo-Bench: **42.3%**; QwenSWEBench (in-house): **79.0%**.
- SciCode / Vibe Code Bench: no verified public score found.

Computer use / browser / mobile (VL):

- OSWorld-Verified: **84.3%** (vs Qwen3.7-Plus 73.3%, Opus 4.6 Max 72.7%).
- WebArena-Verified: **64.8%**; AndroidWorld: **81.9%**; RecreationBench: **47.1%**; Vision2Web: **62.9%**; SWE-MM: **38.6%**.

Long context:

- No MRCR/RULER/GraphWalks score found; 256K native (1M only via YaRN extension).

Multimodal:

- MathVision: **90.0%** without CI / **94.6%** with CI; BabyVision: **65.7%** / **85.6%** with CI; CharXiv (RQ): **83.7%** / **90.2%** with CI; OmniDocBench 1.5: **91.1**; RealWorldQA: **85.9%**; ERQA: **65.5%**.

Caveats: defaults to xhigh reasoning — extremely verbose and slow (one documented test took 21 minutes and 22K reasoning tokens for a single SVG); launch benchmarks "still need more independent validation" (VentureBeat).

### Normalized scores (1–100)

- **Tool use: 73/100.** TB2.1 73.0% (Terminus) and CoWorkBench 70.7% are above the mid band and OSWorld 84.3% is strong, but Agents' Last Exam Pass@1 20.4% is weak and no MCP-Atlas/τ³ evidence exists.
- **Reasoning: 73/100.** GPQA 89.2–90.5% approaches the frontier line and IFBench 79.5% is strong; capped by HLE 30.8% and a conflicting AA Intelligence Index (34 per AA, 52 per VentureBeat).
- **Context window: 74/100.** 256K native (1M only via YaRN extension) sits between the 200K=70 and 1M=95 anchors.
- **Multimodal: 80/100.** Text/image/video input; MathVision 94.6% (CI), OmniDocBench 91.1, CharXiv 90.2% (CI) and BabyVision 85.6% (CI) are strong image/video-band evidence.
- **Coding: 73/100.** LiveCodeBench v6 90.3% is elite and TB2.1 73.0% is solid, but DeepSWE 1.1 42.2% and SWE-bench Pro 61.7% sit below frontier anchors.
- **Cost efficiency: 95/100.** Apache 2.0 weights are $0 to self-host; Alibaba's $0.50/$3.00 per 1M is cheap for the capability.
- **Overall Score: 74.6/100.** Mean of the five quality dimensions; an exceptional open-weights value — frontier-adjacent coding, vision and computer-use at 27B — held below the frontier by HLE, DeepSWE and long-horizon-agent evidence.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03
- Method: public internet research (Exa web search); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
