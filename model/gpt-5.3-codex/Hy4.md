- Source: OpenAI/GPT-5.3-Codex
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3-Codex
- **Short description:** OpenAI's 2026-02-05 agentic programming model, repositioned from a coding tool to a **general computer collaborator**. Combined GPT-5.2-Codex coding with GPT-5.2 reasoning, set records on SWE-Bench Pro / Terminal-Bench 2.0, and was the first model to participate in its own training (debugging training jobs, managing deployment infrastructure, optimising test frameworks). A distinct model; GPT-5.3-Codex-Spark is a separate lightweight variant.
- **Provider / access:** Codex app, CLI, IDE extensions and web, for ChatGPT paid tiers (Plus / Team / Enterprise); a standalone Apple-devices app followed. Codex users grew ~**50%** in the five days to 2026-02-10.
- **Release / knowledge:** 2026-02-05; knowledge cutoff: no verified public score found.
- **IDs:** `gpt-5.3-codex` family ID as cited. No free Zen ID verified.
- **Context window:** no verified token figure in the retrieved pages — no verified public score found. Documented **long-context memory** with cross-session project state (an "engineering context snapshot" workflow in secondary coverage).
- **Modalities:** text and image/code in, text and code out; builds applications from scratch, real-time conversational course correction, long-horizon computer operation, voice progress reporting. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** no rate card in the retrieved pages — no verified public price found. **>50% fewer tokens per completed task** than the previous generation and **25% faster** processing (vendor claims, relative).
- **Architecture:** Proprietary, closed weights; parameter count not disclosed. Merges the GPT-5.2-Codex and GPT-5.2 capability stacks with a compaction-style long-context memory.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **77.3%**
- SWE-Bench Pro: **56.8%**
- **>50% fewer tokens** per completed task than the prior generation; **25% faster** (vendor claims, relative)
- Codex weekly user growth **~50%** in the first five days (2026-02-10)
- First model used in its own training loop — debugging training tasks, managing deployment infra, optimising test frameworks
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Inherits GPT-5.2's reasoning and professional-knowledge ability (qualitative)
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Coding:

- SWE-Bench Pro **56.8%** and Terminal-Bench 2.0 **77.3%** — both described as record-setting at launch
- From-scratch application construction with real-time steering; long-context engineering snapshots (secondary, qualitative)
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE / FrontierSWE: no verified public score found

Long context:

- Long-context memory with cross-session state; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 88/100.** 77.3% Terminal-Bench 2.0, general computer-collaborator positioning, >50% token savings, 25% speed gain and real-time user steering; capped by no τ-bench/OSWorld/GDPval figure.
- **Reasoning: 84/100.** GPT-5.2-class reasoning integrated with coding and self-training-loop participation; capped by no published numeric reasoning benchmark for this exact ID.
- **Context window: 86/100.** Explicit long-context memory with cross-session project state; capped by no verified token window and no retrieval benchmark.
- **Multimodal: 78/100.** Text/image/code input with computer operation and voice progress reporting (output side); capped by text/code-only generation, no verified audio/video input, and no multimodal benchmark.
- **Coding: 89/100.** Record-setting SWE-Bench Pro 56.8% and Terminal-Bench 2.0 77.3% at launch, with from-scratch app delivery; capped by those figures being vendor-reported and no SWE-bench Verified / LiveCodeBench result.
- **Cost efficiency: 84/100.** >50% fewer tokens per task and 25% faster at unchanged GPT-5-series pricing per secondary coverage; capped by no verifiable rate card. Excluded from Overall.
- **Overall Score: 85/100.** Half-up mean of 88, 84, 86, 78, 89 = 85.0 → 85. Best fit: long-horizon agentic software engineering inside Codex; superseded by GPT-5.4's unified Computer Use model.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike GPT-5.3-Codex article retrieved via public web search excerpt (release, repositioning, self-training participation, token/speed gains, Codex growth), with launch coverage (CSDN / 百家号, retrieved via search excerpt) for the SWE-Bench Pro 56.8% and Terminal-Bench 2.0 77.3% figures — labelled as launch-reported, not independently verified. GPT-5.3-Codex-Spark is treated as a separate variant. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [GPT-5.3-Codex — 百度百科 (retrieved via search excerpt; release, features, efficiency)](https://baike.baidu.com/item/GPT-5.3-Codex/67346790)
  - [Claude Opus 4.6 与 GPT-5.3-Codex 同时发布 — 百家号 (retrieved via search excerpt; SWE-Bench Pro / Terminal-Bench numbers)](https://baijiahao.baidu.com/s?id=1856340066738763568&wfr=spider&for=pc)
