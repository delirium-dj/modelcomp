# North Mini Code — findings by Muse Glimmer 30B

- Source: Cohere / North-Mini-Code-1.0
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** North Mini Code 1.0
- **Short description:** Cohere open-weights agentic coding model optimized for software engineering, terminal tasks and code generation. 30B total / 3B active MoE released June 2026 as first model in Cohere’s North family.
- **Provider / access:** Cohere API `north-mini-code-1-0` Chat Completions / v2 Chat; Hugging Face `CohereLabs/North-Mini-Code-1.0`; OpenRouter `cohere/north-mini-code:free`; Model Vault. Chat Completions API.
- **Release / knowledge:** 2026-06-09; knowledge cutoff not publicly disclosed.
- **IDs:** `cohere/north-mini-code-1-0` / `CohereLabs/North-Mini-Code-1.0`
- **Context window:** 256K tokens total, 64K max output. Verified by Cohere docs and Hugging Face model card.
- **Modalities:** Input text only; Output text. Reasoning yes, tool calls yes, JSON mode supported. No image/audio/video input.
- **Pricing (as of 2026-10-25):** $0.00 / 1M input, $0.00 / 1M output via Cohere API free tier until rate limits; OpenRouter free. Open weights Apache 2.0.
- **Architecture:** 30B total parameters, 3B active per token sparse MoE with 128 experts, 8 active per token. Decoder-only Transformer with interleaved sliding-window RoPE + global attention 3:1. Apache 2.0.

### Raw benchmarks found

> Sources: Cohere product page 2026-06-09, Cohere docs north-mini-code-1.0, Hugging Face model card CohereLabs/North-Mini-Code-1.0 eval results, Artificial Analysis model page north-mini-code, Cohere blog introducing North Mini Code 2026-06-09.

Agent / tool use:

- Terminal-Bench 2.0: **36** <Hugging Face eval results, terminal-bench-2.0 leaderboard>
- Terminal-Bench v2 pass@10: **55.1%** <Cohere blog SFT checkpoint, internal report>
- SWE-bench Verified: **67.6** <Hugging Face eval results, SWE-bench Verified leaderboard>
- SWE-bench Pro: **40.2** <Hugging Face eval results, SWE-bench Pro leaderboard>
- GDPval-AA / AutomationBench-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3.2: **10** <Artificial Analysis, #41 / 141 open-weights small class>
- Humanity's Last Exam / GPQA Diamond / HLE / CritPt: no verified public score found
- AA-LCR v1.1 / long-context reasoning: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **67.6** <Hugging Face eval>
- SWE-bench Pro: **40.2** <Hugging Face eval>
- Artificial Analysis Coding Index: **33.4** <Cohere blog, compared to Qwen3.5 35B-A3B, Gemma4 26B-A4B>
- SciCode / AA-SciCode: no verified public score found
- LiveCodeBench v6: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- MRCR / RULER / GraphWalks: no long-context retrieval reported; 256K context verified by docs.

### Normalized scores (1–100)

- **Tool use: 68/100.** Terminal-Bench 2.0 36 on public Hugging Face eval with SWE-bench Verified 67.6 and SWE-bench Pro 40.2 indicating solid agentic coding. Internal Cohere pass@10 Terminal-Bench v2 55.1% suggests harness dependence. Capped by lack of independent Terminal-Bench 4.0 / Claw-Eval numbers.
- **Reasoning: 62/100.** Artificial Analysis Intelligence Index 10, above median 8 for 4B–40B open-weights class, reasoning enabled. No public GPQA/HLE/CritPt scores. Capped by missing independent reasoning benchmarks.
- **Context window: 73/100.** 256K tokens verified, 64K output. 200K–500K tier mapping. No RULER/GraphWalks public measurement.
- **Multimodal: 15/100.** Text-in / text-out only. No image/video/audio support.
- **Coding: 72/100.** SWE-bench Verified 67.6 and SWE-bench Pro 40.2 with Artificial Analysis Coding Index 33.4. Strong for 30B MoE size class. Capped by absence of LiveCodeBench/SciCode public scores.
- **Cost efficiency: 100/100.** $0 per 1M input/output on Cohere API free tier and OpenRouter free.
- **Overall Score: 58/100.** Mean of five quality dims (68 + 62 + 73 + 15 + 72) / 5 = 58.0. Best-fit: efficient open-weights agentic coding model with large context and free access, text-only.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
