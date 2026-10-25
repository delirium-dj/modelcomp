# Claude 3.5 Sonnet — findings by Muse Glimmer 30B

- Source: Anthropic / claude-3-5-sonnet
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Claude 3.5 Sonnet
- **Short description:** Anthropic proprietary mid-tier large language model released June 2024. Raises industry bar for intelligence vs Claude 3 Opus with 2x speed, strong coding, reasoning and vision capabilities.
- **Provider / access:** Anthropic API `claude-3-5-sonnet-20240620` / `claude-3-5-sonnet-20241022`; Amazon Bedrock; Google Cloud Vertex AI. Chat Completions API.
- **Release / knowledge:** 2024-06-20; knowledge cutoff April 2024 approx.
- **IDs:** `anthropic/claude-3-5-sonnet-20240620`
- **Context window:** 200K tokens total. Verified by Anthropic launch announcement 2024-06-21.
- **Modalities:** Input text, image; Output text. Reasoning yes, tool calls yes, JSON mode supported.
- **Pricing (as of 2024-06-21):** $3 / 1M input, $15 / 1M output. Free tier on claude.ai with rate limits.
- **Architecture:** proprietary, parameters undisclosed.

### Raw benchmarks found

> Sources: Anthropic launch announcement 2024-06-21, Model Card Claude 3 Addendum PDF, Wikipedia Claude entry, Anthropic model overview docs.

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- Internal agentic coding evaluation: **64%** problems solved — Anthropic Model Card Addendum; outperforms Claude 3 Opus 38%

Reasoning / knowledge:

- GPQA Diamond: no verified public score found — Anthropic claims new industry benchmark set, no numeric published in open sources
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found for this exact snapshot
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- MMLU: claimed new industry benchmark in launch announcement, no numeric published

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: HumanEval mentioned as new benchmark in launch; no numeric published; internal agentic coding 64% as above

Long context:

- No long-context retrieval benchmark reported public for this snapshot; 200K window verified.

### Normalized scores (1–100)

- **Tool use: 78/100.** Internal agentic coding 64% with tool-augmented write/edit/execute, plus tool-use GA announcement. Capped by lack of independent Terminal-Bench/Tau/Claw scores.
- **Reasoning: 80/100.** Anthropic claims industry-leading GPQA/MMLU and strong graduate-level reasoning vs Claude 3 Opus; no public numeric verification caps score.
- **Context window: 70/100.** 200K tokens verified; below 1M token tier used by newer models, no RULER/GraphWalks evidence.
- **Multimodal: 78/100.** Text+image in, text out; stated strongest vision yet vs Claude 3 Opus, but no public MMMU/ vision leaderboard numbers located.
- **Coding: 82/100.** Internal agentic coding 64% vs 38% for Opus and HumanEval leadership claim; no public SWE-bench/LiveCodeBench numbers.
- **Cost efficiency: 70/100.** $3/$15 pricing at launch is mid-tier; not free, not cheapest.
- **Overall Score: 77.6/100.** Mean of five quality dims (78+80+70+78+82)/5 = 77.6 → 78 rounded. Best-fit: strong mid-tier reasoning/coding model with solid vision and tool use, limited by 200K context and lack of independent public benchmark numbers.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
