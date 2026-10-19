# GLM-5.3 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: build.nvidia.com/z-ai/glm-5-3 (NVIDIA NIM page), docs.z.ai/guides/llm/glm-5.3 (official Z.AI docs), huggingface.co/zai-org/GLM-5.3 (official HF card + benchmark table), z.ai/blog/glm-5.3 (official launch blog), glmmodel.net/en (third-party report), vals.ai/models/zai_glm-5.3 (independent), benchlm.ai/models/glm-5-3 + benchlm.ai comparisons (vs GLM-5.2, GLM-4.7, GPT-5 nano, GPT-5.6 Luna, GLM-5-Turbo, Claude Fable 5.1, GLM-5.1), artificialanalysis.ai/models/glm-5-3 + artificialanalysis.ai/models/releases/glm-5-3 + artificialanalysis.ai/models/comparisons (AA model page, comparisons vs GLM-5.2/o3/Qwen3.5 Omni Plus/Claude Opus 5)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3 (Z.AI / Zhipu AI)
- **Short description:** Z.AI's latest flagship, built on the same base model as GLM-5.2 with every gain from post-training; 753B total / 40B active text Mixture-of-Experts with DeepSeek-style sparse attention, native FP8 weights; 1M context; reasoning and tool calling; aimed at complex coding and long-horizon agentic work; reports 50% improvement over GLM-5.2 on Z.ai's in-house Code Bench and open-weights SOTA on Terminal Bench 3.0 and Agents' Last Exam; leads CyberGym for vulnerability discovery; released August 2026 (HF 08/27/2026).
- **Provider / access:** Z.AI (GLM Coding Plan subscribers first, then all), Hugging Face (zai-org/GLM-5.3), NVIDIA NIM (build.nvidia.com/z-ai/glm-5-3); GLM-5.3 License (commercial use allowed with restrictions — not fully permissive like MIT).
- **Release / knowledge:** Released August 2026 (AA: August 18, 2026); knowledge cutoff not stated.
- **IDs:** `zai-org/GLM-5.3` (HF), `z-ai/glm-5-3` (build.nvidia.com), `glm-5-3` (benchlm).
- **Context window:** 1,000,000 tokens (official docs; NVIDIA; AA; benchlm). Verified.
- **Modalities:** Text in, text out (text-only — NOT multimodal; multimodal is the separate GLM-5.3-Flash); reasoning yes; tool calls yes; structured output not explicitly advertised.
- **Pricing (as of 2026-10-16):** AA lists $1.40/M input, $4.40/M output, cache discount 81%, $2.01 per Intelligence Index task; benchlm compare tables list $0.00/$0.00 (inconsistent — treat AA as directional, confirm on Z.AI API). GLM-5.3 License governs use.
- **Architecture:** 753B total / 40B active MoE, DeepSeek-style sparse attention, FP8 native.

### Raw benchmarks found

Official Z.AI docs/blog + HF eval_results table + NVIDIA NIM page, corroborated by glmmodel.net, vals.ai, benchlm.ai, Artificial Analysis.

Agent / tool use:

- Terminal-Bench 2.1: **88.2%** (official HF table; glmmodel.net; benchlm)
- Terminal-Bench 3.0: **28.3%** (official; open-weights SOTA)
- DeepSWE v1.1: **66.9%** (official)
- NL2Repo: **58.0%** (official)
- ProgramBench (Almost Solved): **19.0%** (official)
- FrontierSWE: **78.1%** (official) / **30.2%** (FrontierSWE v2, benchlm compare)
- SWE-Marathon v1.1: **42.5%** (official)
- PostTrainBench: **39.8%** (official)
- CyberGym: **84.5%** (official; SOTA, ahead of Mythos 5 83.8%, GPT-5.6 Sol 83.6%)
- ExploitGym 2h/6h: **105/130** (official)
- ExploitBench: **54.4%** (official; >2× GLM-5.2's 24.4%)
- Toolathlon Verified: **73.0%** (official)
- AutomationBench: **48.2%** (official)
- HLE (with tools): **62.5%** (official; glmmodel.net)
- LiveCodeBench (Vals): **80.5%** (benchlm compare)
- SWE-bench (Vals): **95.4%** (benchlm compare)
- Bug Hunt Bench: **19.0 fixes** (benchlm compare)
- VulcanBench v3: **78.3%** (benchlm compare)
- OpenHarmony Bench: **60.8%** (benchlm compare)
- Hermes Index: **39.2%**; Hermes Bench: **71.8%**; MazeBench: **0%** (benchlm compare)

Reasoning / knowledge:

- GPQA Diamond (Vals): **88.1%** (benchlm compare) / GPQA-D **88.1%**
- MMLU-Pro (Vals): **86.8%** (benchlm compare)
- HLE: **42%** (AA, vs GLM-5.2 41%)
- SciCode: **59%** (AA)
- CritPt: **19%** (AA)
- GDP.pdf: **11%** (AA)
- AA-Omniscience: **14** (AA, vs o3 −16)
- AA-LCR v1.1: **80%** (AA, vs o3 75%)
- Artificial Analysis Intelligence Index: **45** (#2/116, released August 2026)
- AA-LCR (benchlm model page): **79.7%**

Coding:

- LiveCodeBench (Vals): **80.5%** — see above
- SWE-bench (Vals): **95.4%** — see above
- DeepSWE v1.1: **66.9%** — see above
- NL2Repo: **58.0%** — see above
- ProgramBench: **19.0%** — see above
- FrontierSWE: **78.1%** — see above
- SWE-Marathon v1.1: **42.5%** — see above
- PostTrainBench: **39.8%** — see above
- AA Coding Index: **56.4** (benchlm compare public-lane #28/150)

Multimodal & grounded:

- Text-only — NOT multimodal (GLM-5.3-Flash is the multimodal sibling). Multimodal dim reflects text-only reality.

Long context:

- 1M context declared; AA-LCR 79.7%/80%; no public full-1M needle-recall curve isolated.

Instruction following:

- Not isolated as IFEval/IFBench for GLM-5.3 in fetched sources.

### Conflicting results noted

- **Pricing:** AA lists $1.40/$4.40 per M; benchlm compare tables list $0.00/$0.00. AA is directional; confirm on Z.AI API. GLM-5.3 License has commercial-use restrictions (not fully open).
- **ProgramBench:** official "Almost Solved" 19.0% vs GLM-5.2 9.5% — different metric slices exist (inferencex noted "Almost Solved" vs full). Official HF table used as primary.
- **Terminal-Bench 2.1:** 88.2% (official) vs GLM-5.2 81.0% — clear generational gain.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 78/100.** Terminal-Bench 2.1 88.2, CyberGym 84.5, Toolathlon 73.0, MCP-Atlas n/a (not reported for 5.3), AutomationBench 48.2, ExploitBench 54.4 — strong agentic/cyber profile; capped by ProgramBench 19.0 and AutomationBench 48.2.
- **Reasoning: 80/100.** AA Intelligence Index 45 (#2/116), GPQA-D 88.1, SciCode 59, HLE 42, AA-LCR 80 — top-tier open reasoning; CritPt 19 and GDP.pdf 11 cap it slightly.
- **Context window: 90/100.** Declared 1M with AA-LCR ~80; no public full-window retrieval curve beyond AA-LCR.
- **Multimodal: 50/100.** Text in / text out only — NOT multimodal.
- **Coding: 74/100.** Terminal-Bench 2.1 88.2, SWE-bench (Vals) 95.4, DeepSWE 66.9, FrontierSWE 78.1, LiveCodeBench 80.5, AA Coding Index 56.4 — elite open-weight coder; ProgramBench 19.0 and SWE-Marathon 42.5 cap it.
- **Cost efficiency: 65/100.** $1.40/$4.40 per M (mid-range, GLM-5.3 License restrictions); not counted toward Overall.
- **Overall Score: 74/100.** Half-up mean of (78 + 80 + 90 + 50 + 74) / 5 = 74.4 → 74. Best-fit recommendation: frontier open-weight long-horizon coding/agent/cyber model; text-only; strong on Terminal-Bench/CyberGym, weaker on ProgramBench-style subset tasks.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (official Z.AI docs/blog + HF card + NVIDIA NIM + glmmodel.net + vals.ai + benchlm.ai + Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores. Pricing conflict (AA vs benchlm) flagged; AA used as directional.
- Future sources: add a new file next to this one, using the same headings.
