# GPT-5.1 Codex Max — findings by Muse Glimmer 30B

- Source: OpenAI / gpt-5.1-codex-max
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GPT-5.1 Codex Max
- **Short description:** OpenAI frontier agentic coding model for Codex, natively trained for compaction across multiple context windows for long-running, project-scale software engineering work. First model trained to operate in Windows environments and optimized for the Codex CLI/IDE workflow.
- **Provider / access:** OpenAI Codex, Responses API only. Model ID `gpt-5.1-codex-max`. Available in Codex CLI, IDE extension, cloud, and code review. API access announced Nov 2025; ID shut down 2026-07-23 per meta. Not available via Chat Completions.
- **Release / knowledge:** 2025-11-19 product announcement. Knowledge cutoff not publicly disclosed in product materials; developer docs list 2024-09-30 cutoff which conflicts with announcement date.
- **IDs:** `opencode/gpt-5.1-codex-max`
- **Context window:** 400,000 total tokens; 128,000 max output tokens per developer docs. Native compaction enables coherent work over millions of tokens in a single task via automatic session compaction.
- **Modalities:** Input text, image; Output text. Reasoning yes, tool calls yes, JSON mode supported. No audio/video output.
- **Pricing (as of 2026-10-25):** Paid $1.25 / 1M input, $0.125 / 1M cached input, $10.00 / 1M output via Responses API. No free tier ID on OpenCode Zen.
- **Architecture:** proprietary, parameters undisclosed. Agentic coding stack with compaction training on software engineering, math, research, medicine, computer use.

### Raw benchmarks found

> Sources: OpenAI product page “Building more with GPT-5.1-Codex-Max” 2025-11-19, OpenAI developers model page gpt-5.1-codex-max, OpenAI System Card 2025-11-19, Simon Willison weblog 2025-11-19 independent coverage.

Agent / tool use:

- Terminal-Bench 2.0: **58.1%** xhigh reasoning effort — OpenAI Appendix, Laude Institute Harbor harness
- SWE-Lancer IC SWE: **79.9%** xhigh — OpenAI Appendix
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified n=500: **77.9%** xhigh — OpenAI Appendix. Simon Willison notes self-reported 76.5% for high effort and 77.9% for xhigh, conflicting minor reporting.
- SWE-Lancer IC SWE: **79.9%** xhigh — OpenAI Appendix
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- Native compaction reported; model automatically compacts session as context approaches limit, enabling >24 hour internal evaluations. No public RULER/GraphWalks/MRCR score found.

### Normalized scores (1–100)

- **Tool use: 70/100.** Terminal-Bench 2.0 58.1% xhigh and strong SWE-Lancer 79.9% indicate solid agentic tool use for coding workflows. Capped by lack of independent Claw/Toolathon/Tau3 scores.
- **Reasoning: 75/100.** SWE-bench gains with compaction and long-horizon agent loops suggest strong sustained reasoning for code tasks; no public GPQA/HLE numbers to verify general reasoning.
- **Context window: 85/100.** 400K verified window with native compaction to millions of tokens for long tasks. Competitive long-horizon capability, capped by smaller base window vs 1M+ models.
- **Multimodal: 55/100.** Text and image in, text out only. No public multimodal benchmark numbers.
- **Coding: 88/100.** SWE-bench Verified 77.9% xhigh and SWE-Lancer 79.9% place it at top tier for agentic coding. Token efficiency improvements reported.
- **Cost efficiency: 45/100.** $1.25/$10.00 pricing with high output cost; expensive for sustained long-running agent work despite token efficiency gains.
- **Overall Score: 75/100.** Mean of five quality dims (70+75+85+55+88)/5 = 74.6 → 75. Best-fit: frontier agentic coding specialist with compaction-driven long context, premium pricing.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Glimmer_30B.md`, using the same headings.

---
