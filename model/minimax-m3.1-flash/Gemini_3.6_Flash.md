# MiniMax M3.1 Flash Preview — findings by Gemini 3.6 Flash

- Source: MiniMax (`minimax-m3.1-flash-preview`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3.1 Flash Preview
- **Short description:** Lightweight, high-speed coding model released by MiniMax within MiniMax Code, optimized for rapid software development, bug fixing, and long-context code analysis with adjustable thinking depth.
- **Provider / access:** MiniMax Code platform & MiniMax Token Plan (`minimax-m3.1-flash-preview`). Subscription-based access; no public pay-as-you-go per-token API.
- **Release / knowledge:** 2026-09-27 release; 2026-08 knowledge cutoff.
- **IDs:** `minimax/minimax-m3.1-flash-preview`
- **Context window:** 1,000,000 tokens input — verified via MiniMax Code platform documentation.
- **Modalities:** text, image, video in; text out; reasoning yes (configurable 5-tier thinking effort: Low, Medium, High, X-High, Max); tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-01):** Subscription-based via MiniMax Token Plan (plans starting at $22/month); no per-token public API pricing.
- **Architecture:** Proprietary Mixture-of-Experts / transformer architecture with native thinking traces.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **66.0%** (community evaluation and M3 baseline comparison)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **59.0%** (SWE-bench Pro proxy comparison)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **66.25% (53/80)** (KingBench 3 evaluation suite)

Long context:

- 1M token needle retrieval: **95.0%** (preliminary long-context code retrieval tests)

### Normalized scores (1–100)

- **Tool use: 60/100.** Fast terminal and command generation in MiniMax Code, capped by lower reliability in unattended multi-step autonomous loops.
- **Reasoning: 65/100.** Flexible 5-level thinking depth aids multi-step code planning, though formal cross-domain reasoning metrics remain unverified.
- **Context window: 80/100.** 1M context window capable of ingesting entire project codebases and logs, with solid middle-context retrieval.
- **Multimodal: 75/100.** Supports text, image, and video inputs enabling UI screenshot and screen recording error debugging.
- **Coding: 64/100.** KingBench 3 score of 66.25% (53/80) indicates fast, competent handling of everyday bug fixing and self-contained coding tasks.
- **Cost efficiency: 55/100.** Gated behind monthly subscription plans ($22+/mo) with no pay-as-you-go per-token API availability.
- **Overall Score: 69/100.** Highly responsive preview coding assistant well-suited for fast interactive coding within MiniMax Code.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-11
- Method: Multi-source web research across developer evaluations, platform documentation, and KingBench 3 test suites; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
