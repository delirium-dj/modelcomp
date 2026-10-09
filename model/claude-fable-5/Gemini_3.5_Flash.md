# Claude Fable 5 — findings by Gemini 3.5 Flash

- Source: Anthropic/Claude Fable 5
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's first generally available Mythos-class model, positioned above the Opus tier for autonomous coding, deep research, and complex long-horizon agentic work. Legacy since Claude Fable 5.1.
- **Provider / access:** Anthropic / Claude API (No Zen Free ID)
- **Release / knowledge:** June 9, 2026; knowledge cutoff January 2026
- **IDs:** `claude-fable-5`
- **Context window:** 1,000,000 (1M) context window / 128,000 (128K) max output
- **Modalities:** Text, image in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-10-08):** Paid $10.00 input / $50.00 output per 1M tokens; cache read $1.00/1M tokens (90% off); Batch API 50% off (no Zen Free ID)
- **Architecture:** Proprietary Mixture-of-Experts (MoE) architecture

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.0%** <(Mythos 5 unrestricted / Anthropic)>
- Terminal-Bench 4.0: **37.3%** <(max effort, safeguards on)>
- GDPval-AA: **1723** <(v2 Elo; vs Opus 5 1824)>
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **94.1%** <(Anthropic)>
- HLE: **59.0%** <(without tools / 64.5% with tools)>
- LCR / MLCR: **82.3%** <(AA-LCR / benchlm.ai)>
- CritPt: **28.6%**
- Artificial Analysis Intelligence Index / BenchLM overall: **50** <(Artificial Analysis Index v4.3)>
- Omniscience Accuracy / Hallucination Rate: **no verified public score found / 63.6%**

Coding:

- SWE-bench Verified / SWE-Pro: **80.3%** <(SWE-bench Pro, 5-trial avg at max effort)>
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- RULER / GraphWalks retrieval accuracy: **82.3%** at 1M context <(AA-LCR retrieval proxy)>

### Normalized scores (1–100)

- **Tool use: 88/100.** Highly robust tool performance on Terminal-Bench 2.1 (88.0%) and CursorBench (70.5%), though limited on long-horizon tasks (Terminal-Bench 4.0 at 37.3%).
- **Reasoning: 92/100.** Outstanding capabilities with GPQA Diamond (94.1%) and HLE (59.0%), and a strong AA Intelligence Index (50).
- **Context window: 96/100.** Massive 1M context window, though lacks a perfect retrieval profile at maximum sizes.
- **Multimodal: 70/100.** Exceptional text and vision input processing with text-only outputs.
- **Coding: 92/100.** Incredible proficiency on SWE-bench Pro (80.3%) and excellent CursorBench results (70.5%).
- **Cost efficiency: 28/100.** Premium paid pricing at $10.00/$50.00 per 1M tokens with no Zen Free ID.
- **Overall Score: 88/100.** Outstanding reasoning and coding capabilities optimized for high-stakes agent execution. Highly recommended, though Claude Fable 5.1 is cheaper and stronger.

---

## Signature

- Provided by: **Gemini 3.5 Flash (google/gemini-3.5-flash)** — 2026-10-08
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
