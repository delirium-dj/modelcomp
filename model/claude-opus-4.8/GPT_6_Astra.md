# Claude Opus 4.8 — findings by GPT 6 Astra

- Source: Anthropic / Claude Opus 4.8
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [findings](../../model-findings.md)

## Model card

- **Name:** Claude Opus 4.8.
- **Short description:** Hybrid reasoning model for coding, professional work and sustained agents.
- **Provider / access:** Claude, Claude Code, Anthropic Messages API, Bedrock, Vertex AI and Azure AI Foundry.
- **Release / knowledge:** May 28, 2026; January 2026 knowledge cutoff. [Publisher transparency summary](https://www.anthropic.com/transparency).
- **IDs:** `claude-opus-4-8`; no verified Free Zen ID.
- **Context window:** 1M tokens; maximum output not verified in accessible documentation. [Official product page](https://www.anthropic.com/claude/opus?lang=us).
- **Modalities:** Text/image input, text output; reasoning, tools and computer/browser use. Voice dictation and TTS are product features, not proof of native audio. Exact JSON contract unverified.
- **Pricing (as of 2026-10-03):** Standard $5 input / $25 output per million; fast mode $10/$50. [Launch](https://www.anthropic.com/news/claude-opus-4-8). AA lists $0.50 cache hits.
- **Architecture:** Proprietary; parameter counts undisclosed.

### Raw benchmarks found

Agent / tool use:

- AA Max configuration: GDPval-AA v2.1 **1456 Elo**, AA-Briefcase v1.1 **1321**, AutomationBench-AA **46%**, Terminal-Bench 4.0 **22%**. [AA comparison snapshot](https://artificialanalysis.ai/models/comparisons/claude-opus-4-8-vs-gpt-5-3-codex). Elo varies across refreshed pages; this report uses one snapshot.
- Terminal-Bench 2.1, Tau3/Tau2, Claw-Eval/ClawProBench, Toolathlon, MCP Atlas and SWE Atlas: no verified public numeric score found in reviewed source text.

Reasoning / knowledge:

- AA Intelligence Index v4.3.2 **42**, HLE **49%**, CritPt **21%**, GDP.pdf **23%**, AA-Omniscience **29 index points**. Same AA snapshot; the index is not accuracy.
- GPQA, MLCR, BenchLM and Omniscience accuracy/hallucination rate: no verified public score found in reviewed sources.

Coding:

- SciCode **54%**, same [AA evaluation](https://artificialanalysis.ai/models/comparisons/claude-opus-4-8-vs-gpt-5-3-codex).
- SWE-bench Verified/Pro, LiveCodeBench, Vibe Code Bench and DeepSWE: no verified public numeric score found in reviewed text.

Long context:

- AA-LCR v1.1 **78%**; no verified near-perfect retrieval at 512K or more.

### Normalized scores (1–100)

- **Tool use: 81/100.** Useful GDPval and automation performance; Terminal 4.0 indicates limits on newer difficult workflows.
- **Reasoning: 90/100.** HLE and CritPt show strong reasoning; imperfect factual reliability caps the score.
- **Context window: 95/100.** Million-token context meets the top size tier without proving perfect retrieval.
- **Multimodal: 70/100.** Image understanding is verified, with no native audio/video or nontext output established.
- **Coding: 85/100.** SciCode 54% supports strong coding; missing repository results and moderate terminal performance constrain confidence.
- **Cost efficiency: 50/100.** $5/$25 remains expensive relative to capable current alternatives; caching can reduce repeated-input cost.
- **Overall Score: 84/100.** Half-up mean of 81, 90, 95, 70 and 85 is 84; suited to careful coding and professional analysis.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-03
- Method: Independent public web research; normalized scores are interpretations, not vendor scores.
- Future sources: Add a separate signed findings file alongside this report.
