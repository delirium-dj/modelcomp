# Gemini 2.5 Flash — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind / Gemini 2.5 Flash (`gemini-2.5-flash`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash (no "Free"-tier wording; free AI Studio quota exists)
- **Short description:** Google DeepMind's 2025-generation workhorse Flash model for advanced reasoning, coding, mathematics and scientific tasks at low latency. It is now three Flash generations behind — Gemini 3.6/3.7/3.8 Flash supersede it — and there is community push-back against retirement (a "Don't discontinue Gemini 2.5 Flash" thread on Hacker News, 2026-07-10).
- **Provider / access:** Google — Gemini API and Google AI Studio (free tier with rate limits, no card). Proprietary, no open weights.
- **Release / knowledge:** Released 2025-09-25 (GA). Knowledge cutoff not disclosed here.
- **IDs:** `gemini-2.5-flash` (Google API). No OpenCode Zen Free ID.
- **Context window:** 1,000,000 tokens (third-party tracker via OpenRouter). Max output not reproduced in the sources checked.
- **Modalities:** text, image, audio, video and file/PDF input; text out; tool calls and structured output yes; reasoning yes (configurable thinking budget).
- **Pricing (as of 2026-09-18):** $0.30 / 1M in and $2.50 / 1M out (list, via tracker). A free Google AI Studio tier exists with account-specific limits.
- **Architecture:** proprietary, closed; parameter count and architecture not disclosed by Google.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: **17.1%** (Epoch AI via Model Beat)
- Tau3-Banking / Tau2-Bench (τ²-bench): **31.6%** (Epoch AI via Model Beat)
- APEX multi-step agentic: **1.8%** (Epoch AI via Model Beat)
- GDPval-AA / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **79.0%** (Epoch AI via Model Beat)
- HLE: **12.1%** (Epoch AI via Model Beat)
- MMLU-Pro: **83.2%** (Epoch AI via Model Beat)
- ARC-AGI: **33.3%**; ARC-AGI-2: **2.5%** (Epoch AI via Model Beat)
- SimpleBench **41.2%**; WeirdML **41.9%** (Epoch AI via Model Beat)
- FrontierMath **4.8%**; FrontierMath Tier 4 **4.2%**; AIME 2024/2025 **73.1%**
- Artificial Analysis Intelligence Index / BenchLM overall: **no single composite published in the sources checked** — the tracker places it at the 13th percentile of models it follows
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- LiveCodeBench: **69.5%** (Epoch AI via Model Beat)
- SciCode: **39.4%** (Epoch AI via Model Beat)
- SWE-bench Verified / SWE-bench Pro / Vibe Code Bench / DeepSWE / Coding Index: **no verified public score found**

Long context:

- no MRCR/RULER/GraphWalks recall value found; the 1M window is documented but its recall at depth is unmeasured in the sources checked.

### Normalized scores (1–100)

- **Tool use: 35/100.** Terminal-Bench 17.1%, τ²-bench 31.6% and APEX 1.8% put it near the bottom of the current field — this is a chat/analysis workhorse, not an agent.
- **Reasoning: 68/100.** GPQA Diamond 79.0% and MMLU-Pro 83.2% are respectable, but HLE 12.1%, FrontierMath 4.8% and ARC-AGI-2 2.5% show it is two generations behind on frontier reasoning.
- **Context window: 95/100.** A 1M-token window at $0.30/1M input remains a strong price-per-context offering; no recall-at-depth evidence caps it below maximum.
- **Multimodal: 85/100.** Text, image, audio, video and PDF input in a single call with text output — one of the broadest input matrices available at this price; no media generation.
- **Coding: 60/100.** LiveCodeBench 69.5% is decent for the class, but SciCode 39.4% and no published SWE-bench number keep it out of agentic-coding contention.
- **Cost efficiency: 85/100.** $0.30/$2.50 per 1M is cheap in absolute terms and a free AI Studio tier exists; the missing cached-input discount in this listing and the availability of newer, better-value Flash models hold it below 90.
- **Overall Score: 69/100.** (35 + 68 + 95 + 85 + 60 + 85) / 6 = 71.3 → **71**. Best fit: high-volume multimodal ingestion and cheap long-context analysis where agentic tool use is not required.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-18
- Method: public internet research (Epoch AI benchmark data and OpenRouter specs via Model Beat); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.