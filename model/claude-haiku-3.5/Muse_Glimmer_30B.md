# Claude Haiku 3.5 — findings by Muse Glimmer 30B

- Source: Anthropic / Claude Haiku 3.5
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Claude Haiku 3.5
- **Short description:** Anthropic’s fast small model from the Claude 3.5 family, optimized for high-volume classification, extraction, routing and summarization. Text-only at initial launch with image/PDF input added later; retired in 2026.
- **Provider / access:** Anthropic API `claude-3-5-haiku-20241022`, Amazon Bedrock `anthropic.claude-3-5-haiku-20241022`, Google Vertex AI. OpenCode Zen `opencode/claude-haiku-3.5`. Chat Completions API.
- **Release / knowledge:** 2024-10-22 release per model ID; knowledge cutoff not publicly disclosed in the October addendum.
- **IDs:** `anthropic/claude-3-5-haiku-20241022`. No Free-tier Zen ID on record.
- **Context window:** 200,000 tokens total; 8,192 tokens max output. Verified by `meta.json` and Anthropic Claude 3 Model Card October Addendum.
- **Modalities:** Input text, image, PDF; Output text. Reasoning generation off; tool calls supported via API; JSON mode supported.
- **Pricing (as of 2026-10-25):** Final published rate before retirement: $0.80 /1M input, $4.00 /1M output, $0.08 /1M cached read. Batch $0.40 / $2.00. Paid model, retired 2026-02-19.
- **Architecture:** Proprietary Anthropic; parameter count undisclosed, non-open weights.

### Raw benchmarks found

> Sources: Anthropic Claude 3 Model Card October Addendum PDF, `meta.json` for claude-haiku-3.5, RankedAGI model record, Artificial Analysis comparison pages. Conflicting price reporting across aggregators was resolved in favour of the final Anthropic published rate in `meta.json`. No verified public Terminal-Bench 2.1 / Claw-Eval scores found.

Agent / tool use:

- TAU-bench retail: **51.0%**; airline: **22.8%** — Anthropic model-card addendum 2024-10, outperforms Claude 3 Opus in retail.
- GDPval-AA v2.1: **~198 Elo** — Artificial Analysis comparison cohort, estimated index.
- Terminal-Bench 2.1: no verified public score found for this exact ID
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **41.6%** — RankedAGI model record
- MMLU: **81.0%**; MMLU Pro: **65.0%** — RankedAGI
- HLE: **4%** — Artificial Analysis comparison page
- LCR / MLCR: AA-LCR v1.1 **27%** — Artificial Analysis comparison page
- CritPt: **0%** — Artificial Analysis comparison page
- Artificial Analysis Intelligence Index: **~9** estimated — Artificial Analysis
- Omniscience Accuracy / Hallucination Rate: AA-Omniscience **-23**; Hughes HHEM hallucination rate **4.9%** summarization — RankedAGI

Coding:

- SWE-bench Verified: **40.6%** — Anthropic model-card addendum, beats original Claude 3.5 Sonnet 33.4%
- HumanEval: **88.1%** — RankedAGI
- Aider Polyglot: **28.0%** — RankedAGI
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: RankedAGI Coding **32.9%**, ChatArena coding ELO **1263** with style control — RankedAGI

Long context:

- No verified MRCR / RULER / GraphWalks retrieval-at-length score found. 200K window claimed, no public long-context retrieval benchmark.

### Normalized scores (1–100)

- **Tool use: 60/100.** TAU-bench retail 51.0% shows real API routing ability and beats Opus 3 in that domain, but airline 22.8% and lack of Terminal-Bench/Claw scores caps the rating.
- **Reasoning: 55/100.** MMLU 81% and GPQA 41.6% are solid for a fast small model, yet HLE 4%, CritPt 0% and AA-LCR 27% place it well below 2025-2026 reasoning tiers.
- **Context window: 70/100.** 200K total with 8.2K output maps to the 200K tier anchor; no verified long-context retrieval data and modest output cap limit the score.
- **Multimodal: 60/100.** Text + image/PDF input, text output; image support arrived post-launch and no verified MMMU-class scores are public.
- **Coding: 61/100.** SWE-bench Verified 40.6% is strong for the speed class and HumanEval 88.1% is high, but Aider Polyglot 28.0% and absence of LiveCodeBench/SciCode verification hold the score down.
- **Cost efficiency: 78/100.** Final $0.80/$4.00 pricing is cheap on input for a 200K Claude, but output pricing is higher than $1-$2 peers and model is retired.
- **Overall Score: 61.2/100.** Mean of five quality dims (60+55+70+60+61)/5 = 61.2. Best-fit as a retired low-latency router/small-model coder, not current frontier work.

---
## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; Anthropic Claude 3 Model Card October Addendum PDF, `meta.json`, RankedAGI record, Artificial Analysis comparison pages; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g., `GPT_5.md`, using the same headings.

---
