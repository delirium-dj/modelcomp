# GLM 5.3 Free — findings by Muse Glimmer 30B

- Source: Z.ai / GLM-5.3 Free
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GLM 5.3 Free
- **Short description:** Free-tier access route to Z.ai’s flagship GLM-5.3 coding/agentic model. Same 753B MoE base as the commercial GLM-5.3, positioned for complex software engineering and long-horizon agent work; the OpenCode Zen promo route `opencode/glm-5.3-free` is parked/no longer listed.
- **Provider / access:** Z.ai GLM-5.3 via parked OpenCode Zen promo `opencode/glm-5.3-free`; free mirror `coding-glm-5.3-free` on AIHubMix with rate limits 5 rpm / 100 requests/day / 1M tokens/day. Chat Completions API.
- **Release / knowledge:** GLM-5.3 released August 2026; free promo route active mid-2026. Knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/glm-5.3-free` (parked); commercial API `zai/glm-5.3`. Free mirror `coding-glm-5.3-free`.
- **Context window:** 1.0M tokens native per Z.ai docs and Artificial Analysis. Promo route meta caps at 204K; AIHubMix lists 1.05M tokens with 131K max output. Verified by docs.z.ai and Artificial Analysis.
- **Modalities:** Input text; Output text. Reasoning always enabled with `reasoning_effort` low/high/max. Tool calls supported on commercial API; free mirror advertises tool calling, thinking, streaming, structured outputs.
- **Pricing (as of 2026-10-25):** Free tier $0/M input/output on promo route and AIHubMix free mirror. Commercial GLM-5.3 is $1.40/M input, $4.40/M output per Artificial Analysis. Free tier limits: 5 rpm, 100/day, 1M tokens/day.
- **Architecture:** 753B total parameters, ~40B active per token MoE, proprietary open-weights license. Same base as GLM-5.2 with post-training gains; text-only.

### Raw benchmarks found

> Sources: Z.ai developer docs GLM-5.3 Aug 2026, NVIDIA NIM model card, Artificial Analysis GLM-5.3 release page Aug 18 2026, AIHubMix coding-glm-5.3-free spec page, Hugging Face GLM-5.3.

Agent / tool use:

- Terminal-Bench 3.0: **28.3** — Z.ai docs, up from 4.6 on GLM-5.2
- DeepSWE v1.1: **66.9%** — Z.ai docs, up from 46.2 on GLM-5.2
- Agents’ Last Exam: **28.5** — Z.ai docs, up from 23.8 on GLM-5.2
- Terminal-Bench 2.1 / Tau3-Bench / GDPval-AA: no verified public score found for free route
- Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **45** for GLM-5.3 Max — Artificial Analysis, #3 / 121 open weights
- Conflicting report: Unite.ai 2026-08-18 cites Artificial Analysis Intelligence Index **60** for GLM-5.3 matching Kimi K3 — likely different variant/snapshot vs AA release page 45
- Humanity’s Last Exam / GPQA Diamond / CritPt: no verified public score found for free route
- AA-Omniscience / Hallucination Rate: no verified public score found

Coding:

- DeepSWE: **66.9%** — Z.ai docs
- Z.ai Code Bench: **+50% vs GLM-5.2** vendor claim — Z.ai blog/docs, no independent replication
- Terminal-Bench 3.0: **28.3** — Z.ai docs
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found

Long context:

- 1M token context window reported — Z.ai docs, Artificial Analysis, AIHubMix 1.05M
- AA-LCR v1.1 / RULER / GraphWalks: no verified public score found

### Normalized scores (1–100)

- **Tool use: 75/100.** Terminal-Bench 3.0 28.3, DeepSWE 66.9 and Agents’ Last Exam 28.5 show strong agentic coding gains vs GLM-5.2; capped by lack of independent Terminal-Bench 2.1, Tau3, Claw-Eval scores for the free route.
- **Reasoning: 70/100.** Artificial Analysis Intelligence Index 45, #3 among open weights, reasoning always on with three effort levels. Capped by conflicting index reporting and absence of GPQA/HLE public numbers.
- **Context window: 90/100.** Native 1M token window verified by Z.ai and Artificial Analysis; practical promo cap 204K and free mirror limits reduce usable window.
- **Multimodal: 15/100.** Text in / text out only; no image/video input.
- **Coding: 80/100.** DeepSWE 66.9 and vendor-reported 50% Code Bench improvement over GLM-5.2; capped by no public SWE-bench/LiveCodeBench numbers.
- **Cost efficiency: 100/100.** $0/M input/output on free promo/free mirror.
- **Overall Score: 66/100.** Mean of five quality dims (75+70+90+15+80)/5 = 66. Best-fit: capable free coding/agentic text model with large context and zero cost, limited by text-only modality, promo caps, and sparse independent tool benchmarks.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
