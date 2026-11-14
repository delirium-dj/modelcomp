- Source: xAI/Grok 4.3
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3
- **Short description:** xAI's "pragmatic upgrade" workhorse model — a fully retrained, agent-native design with a sharply lower API price and faster output. A distinct model; `Grok 4.3 Fast` (2026-04-30) is a serving variant, and Grok 4.5 / 4.6 / 4.7 are later versions.
- **Provider / access:** API and agent workflows; cost-sensitive large-scale deployments.
- **Release / knowledge:** 2026 (Baike article; the Fast variant dated 2026-04-30 in secondary coverage); knowledge cutoff: no verified public score found.
- **IDs:** `grok-4.3` family ID as cited. No free Zen ID verified.
- **Context window:** **1,000,000 tokens** (third-party Model Field Guide and launch coverage; a secondary spec table likewise lists grok-4.3 at 1M).
- **Modalities:** text and image in, text out; agent workflows, instruction following, high factual accuracy, high-frequency content generation, tone rewriting, long-text first-pass screening and lightweight agent workflows. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** **$1.25 / 1M input, $2.50 / 1M output** (third-party Model Field Guide and secondary CSDN analysis) — far below same-tier competitors.
- **Architecture:** Fully retrained "work-type" model; **0.5T parameters** per a secondary spec table (labelled secondary). Activation count not disclosed.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1500 Elo**
- Positioned for high-frequency content generation, tone rewriting, long-text screening and lightweight agent workflows (qualitative)
- Agent-native design with 1M context (qualitative)
- Tau3-Banking / Tau2-Bench / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **53**
- Explicitly noted as still behind GPT-5.5 and Claude Opus 4.7 on hard reasoning, stability and trustworthiness — a documented weakness
- GPQA Diamond / HLE / LCR / CritPt / Omniscience: no verified public score found

Coding:

- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 1M-token window with long-text screening use cases; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 83/100.** 1500 GDPval-AA Elo, agent-native 1M context and high-throughput work positioning; capped by no scored agent harness and explicit "lightweight agent" positioning.
- **Reasoning: 82/100.** AA index 53 with a full retrain; capped by trailing GPT-5.5 / Opus 4.7 on hard reasoning, stability and trustworthiness, and no GPQA/HLE figure.
- **Context window: 92/100.** A 1M-token window at the cheapest price point in its class, explicitly used for long-text screening; capped by no long-context retrieval measurement.
- **Multimodal: 80/100.** Text and image input; capped by text-only output, no verified audio/video input, and no multimodal benchmark score.
- **Coding: 80/100.** General coding/agent ability in a work-oriented model; capped by zero published named coding benchmark scores for this exact ID.
- **Cost efficiency: 95/100.** $1.25/$2.50 per 1M with 1M context — among the best price/context combinations in this comparison set. Excluded from Overall.
- **Overall Score: 83/100.** Half-up mean of 83, 82, 92, 80, 80 = 83.4 → 83. Best fit: very high-volume content generation, rewriting and long-document triage where a 1M window at minimal cost dominates; not hard reasoning or coding.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Grok 4.3 article retrieved via public web search excerpt (AA index 53, GDPval-AA 1500 Elo, positioning, documented weaknesses), plus a third-party Model Field Guide and secondary CSDN spec analysis for the 1M context, $1.25/$2.50 pricing and 0.5T params — explicitly labelled third-party/secondary. The Grok 4.3 Fast variant is treated as a serving variant, not a separate model. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [Grok 4.3 — 百度百科 (retrieved via search excerpt; AA index, GDPval, positioning)](https://baike.baidu.com/item/Grok%204.3/67749699)
  - [Grok 4.3 价格、参数与上下文 — Model Field Guide (third-party specs)](https://www.airedirector.com/model/grok-4.3)
