- Source: Alibaba/Qwen3.6-Plus
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.6-Plus
- **Short description:** Alibaba's 2026-04-02 Qwen3.6-series launch model, strong in agentic programming and multimodal understanding; topped the OpenRouter daily chart one day after release and ranked #2 globally on Code Arena (April 2026). A distinct model; Qwen3.6-Max and the 3.5/3.7/3.8 generations are separate.
- **Provider / access:** Alibaba Cloud Bailian (百炼), 悟空, 千问 APP and other Alibaba AI surfaces; compatible with OpenClaw, Qwen Code and other mainstream agent frameworks.
- **Release / knowledge:** 2026-04-02; knowledge cutoff: no verified public score found.
- **IDs:** `qwen3.6-plus` family ID as cited. No free Zen ID verified.
- **Context window:** **1,000,000 tokens by default**.
- **Modalities:** text, image, video and complex documents in, text/code out; complex document understanding, physical-world visual understanding, video reasoning, visual programming; task decomposition, path planning, test-and-fix loops through to task completion; front-end web development and repository-level tasks. No verified audio input or non-text output.
- **Pricing (as of 2026-11-14):** no rate card in the retrieved pages — no verified public price found.
- **Architecture:** Proprietary, closed weights; parameter count not disclosed. Multimodal upgrade of the Qwen3.6 generation with independent sub-task agent capability.

### Raw benchmarks found

Agent / tool use:

- Code Arena global programming blind-test leaderboard (April 2026): **#2 globally**
- OpenRouter daily chart: **#1** on 2026-04-04, one day after release
- Reported to outperform the larger-parameter GLM-5 and Kimi-K2.5 on **SWE-bench** and **Claw-Eval** (directional; no exact scores in the retrieved excerpt)
- Agentic programming described as close to the Claude series (directional)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Overall performance improved over Qwen3.5 (directional)
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Coding:

- Code Arena **#2 globally** as above; SWE-bench / Claw-Eval wins over GLM-5 and Kimi-K2.5 (directional, no numbers)
- A secondary Tencent Cloud comparison references **Terminal-Bench 2.0** for this model (no score in the retrieved excerpt) — labelled secondary
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE / FrontierSWE: no verified public score found

Long context:

- 1M-token default window with repository-level task handling; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 88/100.** #1 OpenRouter daily chart, agent frameworks (OpenClaw / Qwen Code), autonomous sub-task handling, and full task-decomposition→planning→test→fix loops; capped by no scored agent harness figure.
- **Reasoning: 85/100.** Generational gains with video/physical-world reasoning and document understanding; capped by no published numeric reasoning benchmark for this exact ID.
- **Context window: 92/100.** A 1M-token **default** window with repository-level task support; capped by no long-context retrieval measurement.
- **Multimodal: 89/100.** Complex documents, physical-world vision, video reasoning and visual programming; capped by text/code-only output, no verified audio input, and no published multimodal benchmark score.
- **Coding: 88/100.** #2 globally on Code Arena with reported SWE-bench / Claw-Eval wins over GLM-5 and Kimi-K2.5; capped by those wins being directional with no exact figures.
- **Cost efficiency: 84/100.** Broad platform availability and a 1M default window at Plus-tier positioning; capped by no verifiable rate card and no open weights. Excluded from Overall.
- **Overall Score: 88/100.** Half-up mean of 88, 85, 92, 89, 88 = 88.4 → 88. Best fit: agentic programming and repository-level tasks with long multimodal inputs; superseded by Qwen3.7/3.8.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Qwen3.6-Plus article retrieved via public web search excerpt (release, 1M default context, modalities, Code Arena #2, OpenRouter #1, agent frameworks, SWE-bench / Claw-Eval comparisons). Directional "outperformed GLM-5 / Kimi-K2.5" and "close to Claude" claims are explicitly NOT assigned numeric scores; a secondary Tencent Cloud Terminal-Bench 2.0 mention is labelled secondary with no score. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [Qwen3.6-Plus — 百度百科 (retrieved via search excerpt; release, context, Code Arena, modalities)](https://baike.baidu.com/item/Qwen3.6-Plus/67570073)
