# Claude Sonnet 5.5 — findings by Muse Spark 1.3

- Source: Anthropic/Claude Sonnet 5.5, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's Sonnet-class everyday-work model, second in the Claude 5.5 family after Opus 5.5. Top use case is well-scoped feature work, bug fixes, and polished documents/slides/spreadsheets with fast iteration.
- **Provider / access:** Anthropic Claude API `claude-sonnet-5-5` at `https://api.anthropic.com/v1/messages` (Messages API); also Amazon Bedrock `anthropic.claude-sonnet-5-5`, Google Cloud, Microsoft Foundry, Claude Platform on AWS. Chat Completions-compatible via OpenCode Zen (`anthropic/claude-sonnet-5.5`).
- **Release / knowledge:** 2026-09-28 release; reliable knowledge cutoff June 2026
- **IDs:** `anthropic/claude-sonnet-5-5` (API/Bedrock `anthropic.claude-sonnet-5-5`); no Zen Free ID exists (Paid only)
- **Context window:** 1,000,000 tokens total, native no beta header; max output 128,000 tokens (up to 300,000 on Message Batches API with `output-300k-2026-03-24` beta header) — verified via Anthropic launch page 2026-09-28 and claude.dev build notes
- **Modalities:** text/image in; text out; reasoning yes (adaptive thinking on by default, effort levels low/medium/high/xhigh/max); tool calls yes (batches tool calls, fewer steps); JSON/structured output via standard API
- **Pricing (as of 2026-09-28):** Paid $2 in / $10 out per 1M; cache reads $0.20 per 1M; cache writes $2.50 (5-min) / $4 (1-hr) per 1M; Batch API 50% off; US-only inference 1.1x. Same per-token price as Sonnet 5, but up to 30% lower cost per task via fewer tokens (Anthropic 2026 testing). No free tier.
- **Architecture:** proprietary (undisclosed params/MoE; tokenizer same as Sonnet 5)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **70.6%** (Anthropic launch 2026-09-28; Sonnet 5 10.3%, Opus 5.5 66.4% same setup; independent Artificial Analysis rerun 63.6% vs Opus 5.5 59.6%, GPT-6 Astra 59.1% — Decrypt 2026-09-28)
- Terminal-Bench 2.1: **no verified public score found** (launch used 4.0 harness only)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA v2.1: **1844 Elo** (Anthropic launch; Sonnet 5 1449, Opus 5.5 1846, GPT-6 Sol 1487 same table; Artificial Analysis ran the Elo per AlphaCorp 2026-09-28)
- AA-Briefcase v1.1: **1811 Elo** (Anthropic launch; Sonnet 5 1359, Opus 5.5 1822, GPT-6 Sol 1483)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- OSWorld-Verified 2.1 (computer use, partial credit): **80.1%** (Anthropic launch; Sonnet 5 57.0%, Opus 5.5 81.8%)
- CursorBench 4.0: **55.5%** (Anthropic launch; Sonnet 5 34.1%, Opus 5.5 57.8% — ambiguous multi-file Cursor sessions)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** (launch did not publish GPQA)
- HLE (Humanity's Last Exam, with tools): **64.5%** (Anthropic launch; Sonnet 5 54.9% with tools, Opus 5.5 67.7% with tools)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found for Sonnet 5.5** (no AA Index number published as of 2026-09-29)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- Chartography (visual chart recognition, no tools): **61.6%** (Anthropic launch; Sonnet 5 15.6%, Opus 5.5 64.4%, GPT-6 Sol 53.6%)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** (launch used FrontierCode/CursorBench/TB4.0 instead)
- FrontierCode 1.1 (Main): **46.2% Max, 52.1% Xhigh** (Anthropic launch; Sonnet 5 42.4%, Opus 5.5 54.4%, GPT-6 Sol 49.3%; at High effort +10 pts over Sonnet 5 same setting at ~1/15 cost per task)
- CursorBench 4.0: **55.5%** (see above; within ~2 pts of Opus 5.5)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **No long-context retrieval reported at a stated window length** (1M native claimed, no MRCR/RULER/GraphWalks percentage at 512K/1M published as of 2026-09-29)

### Normalized scores (1–100)

- **Tool use: 92/100.** TB4.0 70.6 beats Opus 5.5 (66.4) with OSWorld 80.1 near Opus and GDPval 1844 tied with Opus; capped by no TB2.1/Tau3/Claw same-harness runs.
- **Reasoning: 92/100.** HLE 64.5 with tools (+9.6 over Sonnet 5, −3.2 vs Opus) with GDPval 1844 / Briefcase 1811 near-flagship; capped by no GPQA/LCR/CritPt/Index runs.
- **Context window: 97/100.** 1M native tier with 128K out (300K batch) per tier mapping; capped below 100 with no 98%+ retrieval proof at 512K+.
- **Multimodal: 68/100.** Text+image in with Chartography 61.6 (4x Sonnet 5) and screenshot-only computer use; capped as text-out only with no video/audio in.
- **Coding: 91/100.** TB4.0 70.6 outright lead plus FrontierCode Xhigh 52.1 beating GPT-6 Sol and CursorBench 55.5 within 2 pts of Opus; capped by no SWE-Verified/LiveCode direct runs.
- **Cost efficiency: 70/100.** Paid $2/$10 ($0.20 cache read) with up to 30% lower per-task cost and 30%+ faster output vs Sonnet 5; capped well below $0 free tiers and $0.10–$0.30 budget leaders.
- **Overall Score: 88/100.** Mean of the five non-cost dims (92+92+97+68+91)/5 = 88.0 → 88; best-fit as default fast worker for scoped coding/bug-fix/doc work, escalate to Opus 5.5 for complex open-ended judgment.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-09-29
- Method: public internet research (Anthropic Sonnet 5.5 launch page 2026-09-28, claude.dev build notes, the-decoder/Decrypt/VentureBeat/AlphaCorp launch coverage, Claude Platform model overview); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
