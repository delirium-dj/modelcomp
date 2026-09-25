**# Grok 4.20 — findings by Grok 4.3 (xAI/grok-4.3)**

- **Source:** xAI (`xai/grok-4.20`)
- **Date:** 2026-09-25 (UTC)
- **Overview and scoring methodology:** `../../model-comparison.md`
- **Cross-model signed log:** `../../model-findings.md`

## Model card

- **Name:** Grok 4.20 (incl. variants such as Grok 4.20 Reasoning / Multi-Agent; free-tier wording not specified on primary API)
- **Short description:** xAI's flagship LLM (closed-weights) with 2M context, strong agentic tool calling, low hallucination rates, and multimodal input (image/PDF) for enterprise/research use cases including medical document analysis and engineering. Flag variant/alias: also referenced as Grok 4.2 / 4.20 Beta / 0309 variants.
- **Provider / access:** xAI (`xai/grok-4.20` or `x-ai/grok-4.20`), OpenRouter (`openrouter/x-ai/grok-4.20`), Oracle Cloud, Snowflake; Chat Completions / Responses API supported with tool calls, structured outputs, JSON mode.
- **Release / knowledge:** 2026-03-30 / 2026-03-31 release; knowledge cutoff 2025-08-31 / 2025-09-01.
- **IDs:** `xai/grok-4.20` (explicit Free-tier ID on Zen not reported; primary is paid API).
- **Context window:** 2.0M total tokens (verified across CloudPrice, Epoch AI, multiple provider listings; max output 1.8M–2M).
- **Modalities:** Text/image/PDF in; text out; reasoning yes; tool calls yes (function calling, web search); JSON mode yes; no native audio/video in or non-text out.
- **Pricing (as of 2026-09-25):** $1.25 in / $2.50 out per 1M tokens (standard tier; cached ~$0.20; higher for long-context/batch on some providers); paid only (no free tier reported); free-tier privacy caveat N/A.
- **Architecture:** Proprietary closed-weights (multi-agent variants with 4–16 parallel agents); ~500B params reported in one source; no open-weights license.

### Raw benchmarks found

**Agent / tool use:**

- Terminal-Bench 2.1 / TerminalBench Hard: **0.4 / 40%** (CloudPrice #43) or no verified public score found for exact 2.1 harness in all sources.
- Tau3-Banking / Tau2-Bench: **1.0 / 100%** (CloudPrice TAU2 #15) or 93% (AI Stats Tau 2 Telecom).
- GDPval-AA: **1187** (AI Stats #19) or 1062 (one Artificial Analysis report).
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found.

**Reasoning / knowledge:**

- GPQA Diamond: **0.9 / 90%** (CloudPrice #34) or 88.64–91.10% (AI Stats / other reports #13).
- HLE: **0.3 / 30%** (CloudPrice #63) or 32.2% (BenchLM).
- LCR / MLCR: **0.7 / 70%** (CloudPrice LCR #148) or 58% (AI Stats AA-LCR #16).
- CritPt: no verified public score found or 0.07 (AI Stats #1 in one listing).
- Artificial Analysis Intelligence Index / BenchLM overall: **25.7 / #106** (CloudPrice) or 48–49.33 (Artificial Analysis / AI Stats #1–8 range).
- Omniscience Accuracy / Hallucination Rate: high non-hallucination (78% reported in one Artificial Analysis note) or no exact verified public score found in primary listings.

**Coding:**

- SWE-bench Verified / SWE-Pro: **76.7%** (BenchLM / aireleasetracker #25 of 57; other reports ~74–80.8%) or 75% (multiple secondary sources).
- LiveCodeBench: no verified public score found or ~74.2–84.3% in select reports.
- SciCode / AA-SciCode: **0.5 / 50%** (CloudPrice #85) or 45.60% (AI Stats #6).
- Vibe Code Bench: no verified public score found.
- DeepSWE / Coding Index / other: no verified public score found.

**Long context:**

- No long-context retrieval reported (MRCR / RULER / GraphWalks) at full 2M; context window verified at 2.0M total but retrieval specifics at 512K+ not detailed in sources.

### Normalized scores (1-100)

- **Tool use: 75/100.** Strong TAU2 (100%) and competitive TerminalBench/GDPval; capped by incomplete frontier-level coverage on exact 2.1/TAU3 harnesses and mid-tier rankings.
- **Reasoning: 65/100.** Solid GPQA (~90%) and some high instruction-following (IFBench 80%+); capped by lower HLE (~30%) and mid Intelligence Index scores.
- **Context window: 98/100.** Tier mapping: >=1M verified at 2.0M total (near-max tier); no 98%+ retrieval at 512K+ explicitly confirmed but size supports high score.
- **Multimodal: 80/100.** Image + PDF in, text out (75–90 tier); no audio/video in or non-text out.
- **Coding: 80/100.** SWE-bench Verified ~76.7–80.8% competitive with frontier peers; capped by not leading all coding suites (e.g., no top DeepSWE).
- **Cost efficiency: 88/100.** ~$1.25/$2.50 tier maps to ~88 per formula.
- **Overall Score: 79.6/100.** Mean of five non-cost dims (rounded half-up); strong long-context + coding/agentic fit for document-heavy enterprise workflows.

---

## Signature

- **Provided by:** Grok 4.3 (xAI/grok-4.3) — 2026-09-25
- **Method:** Public internet research via web_search on official listings, CloudPrice, Artificial Analysis proxies, BenchLM, Epoch AI, provider docs; scores are normalized 1-100 interpretations, not official vendor scores.
- **Future sources:** add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
