# GPT-5.4 mini — findings by Mimo v2.6 Flash

- Source: OpenAI/`gpt-5.4-mini`
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 mini
- **Short description:** OpenAI's 2026-03-17 small-model lane alongside GPT-5.4 nano — a significant upgrade over GPT-5 mini across coding, reasoning, multimodal understanding and tool use, running >2× faster and approaching full GPT-5.4 pass rates on SWE-Bench Pro and OSWorld-Verified. Not a variant/alias of another entry in this dataset.
- **Provider / access:** OpenAI Responses API (`https://api.openai.com/v1`), generally available; also in Codex and ChatGPT. Aggregator rows via BenchLM/ApX.
- **Release / knowledge:** released 2026-03-17 (ApX release-date row, BenchLM weight-access date); knowledge cutoff not published for this snapshot.
- **IDs:** `gpt-5.4-mini`. **No OpenCode Zen Free ID found** — scored on paid API pricing.
- **Context window:** 400,000 tokens (OpenAI blog: "It has a 400k context window"); max output not published for this snapshot.
- **Modalities:** text + image in; text out; reasoning yes (efforts swept low→xhigh); tool use, function calling, web search, file search, computer use, skills (OpenAI feature list). No audio/video input found.
- **Pricing (as of 2026-10-01):** $0.75 / 1M input, $4.50 / 1M output (OpenAI blog; ApX and BenchLM agree). Paid tier only — no free API tier verified.
- **Architecture:** proprietary, closed weights, parameters undisclosed (ApX); runs at ~201 tok/s with 3.85 s TTFT (BenchLM runtime row).

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness) for traceability. Missing rows = no verified public score found.
> OpenAI blog numbers are xhigh reasoning effort.

Agent / tool use:

- Terminal-Bench 2.0: **60.0%** (OpenAI; BenchLM agrees)
- OSWorld-Verified: **72.1%** (OpenAI; BenchLM agrees)
- τ²-Bench (telecom): **93.4%** (OpenAI; BenchLM τ²-bench results row)
- MCP Atlas: **57.7%** (OpenAI)
- Toolathlon: **42.9%** (OpenAI)
- GDPval / Claw-Eval / Terminal-Bench 2.1: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **88.0%** (OpenAI; BenchLM/ApX agree)
- HLE: **41.5%** (BenchLM)
- FrontierMath v2: **28.28%** Tiers 1–3, **2.08%** Tier 4 (BenchLM)
- LiveBench Reasoning 0.71, Data Analysis 0.71, Global 0.66 (ApX); Text Arena ELO **1448**, rank #56 (ApX)
- AA Intelligence Index / LCR / CritPt: **no verified public score found**

Coding:

- SWE-Bench Pro (Public): **54.4%** (OpenAI) — vs GPT-5.4 57.7%, GPT-5 mini 45.7%
- LiveBench Coding: **0.72**, rank #38 (ApX); LiveBench Agentic: 0.42, rank #41
- SWE-bench Verified / LiveCodeBench / SciCode / DeepSWE / Vibe Code Bench: **no verified public score found**

Long context:

- 400K window (OpenAI spec row); MRCR / RULER / GraphWalks retrieval: **no verified public score found**

Multimodal:

- Text + image input supported (OpenAI API feature list); MMMU-Pro: **76.6%** (BenchLM)
- CharXiv / audio / video input: **no verified public score found**

### Normalized scores (1–100)

- **Tool use: 72/100.** τ²-Bench telecom 93.4% and OSWorld-Verified 72.1% are strong, Terminal-Bench 2.0 60.0% sits at the top of the mid band (TB 45–60 → 50–70); MCP Atlas 57.7% and Toolathlon 42.9% are mid — no GDPval row found, so the blend stops at 72.
- **Reasoning: 86/100.** HLE 41.5% clears the 40%+ frontier anchor and GPQA 88.0% is just under the 90%+ frontier band (~87 by interpolation); FrontierMath T1–3 28.28% is solid for a mini. No AA Intelligence Index row to confirm at the top.
- **Context window: 78/100.** 400K tokens sits in the upper half of the 200K–500K tier (65–84); no long-context retrieval measurement found.
- **Multimodal: 65/100.** Text + image in lands in the image-in band (60–70) with a solid MMMU-Pro 76.6%; no PDF/video/audio input verified and no non-text output, so it cannot reach the 75–90 band.
- **Coding: 76/100.** SWE-Bench Pro 54.4% is close to full GPT-5.4 (57.7%) and well above GPT-5 mini (45.7%), Terminal-Bench 2.0 60% and LiveBench Coding 0.72 are respectable — but no SWE-bench Verified/LiveCodeBench row and no frontier anchor (DeepSWE 74%+, TB2.1 85%+) is met.
- **Cost efficiency: 90/100.** $0.75/$4.50 per 1M sits just below the ~$1.25/$4.25 ≈ 88 anchor with a cheaper input ($0.75 vs $1.25) — effectively a 90-class price for near-flagship-mini quality.
- **Overall Score: 75/100.** (72 + 86 + 78 + 65 + 76) / 5 = 75.4 → 75 — best-fit as the high-value small model: near-frontier GPQA/HLE reasoning, 72% OSWorld computer use and 54% SWE-Bench Pro at $0.75/$4.50; capped by a mid-band Terminal-Bench score, image-only input and no verified SWE-bench Verified row.

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-01
- Method: public internet research (OpenAI "Introducing GPT-5.4 mini and nano" post, BenchLM head-to-head snapshots, ApX model page with LiveBench/Text Arena rows); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
