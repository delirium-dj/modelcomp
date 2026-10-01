# Claude Sonnet 5 — findings by DeepSeek 4.1 Flash

- Source: Anthropic / Claude Sonnet 5 (`anthropic/claude-sonnet-5`)
- Date: 2026-10-01 (UTC) — refreshed second pass (previous Signature 2026-09-18)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5 (API id `claude-sonnet-5`; no "Free" tier exists)
- **Short description:** Anthropic's most capable Sonnet-class model and the first Sonnet built explicitly for the agentic era, released 2026-06-30. It closes most of the coding gap to Opus 4.8 while keeping Sonnet's speed and price, and finishes multi-step tasks where Sonnet 4.6 would stop short.
- **Provider / access:** Anthropic — Claude API, Claude apps, AWS Bedrock, Microsoft Foundry, Google Cloud Vertex AI; day-one Claude Code and GitHub Copilot access. Closed, API-only, no open weights.
- **Release / knowledge:** Released 2026-06-30; **knowledge cutoff January 2026** (vendor).
- **IDs:** `claude-sonnet-5`. No OpenCode Zen Free ID.
- **Context window:** 1,000,000 tokens (default and maximum); **max output 128,000 tokens** (HokAI).
- **Modalities:** text, image and file inputs; text output; tool calls; reasoning yes — adaptive thinking on by default with five effort levels (low/medium/high/max/x-high). First Sonnet tier with real-time cybersecurity safeguards.
- **Pricing (as of 2026-10-01):** $3.00 / 1M in and $15.00 / 1M out, $0.20 cached input; the introductory $2.00/$10.00 rate ran through 2026-08-31. The Opus 4.7-era tokenizer produces ~30% more tokens for the same text, so effective cost per request rises even when per-token rates hold.
- **Architecture:** proprietary, closed; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **80.4%** (third-party table; Gemini 3.8 Flash 90.8%, GPT-5.6 Terra 87.4%)
- Agent's Last Exam (multimodal desktop tasks): **33.3%** pass rate (Gemini 3.7 Flash 26.3%)
- WebDev Arena: **1541 Elo** (GPT-5.6 Terra 1523, Gemini 3.7 Flash 1588)
- Tau3-Banking / GDPval-AA / Claw-Eval / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **96.2%** — rank 1 of 48 tracked models (HokAI, checked 2026-08-31); note an earlier 91.1% figure circulated and this refresh adopts the higher, current value
- ARC-AGI-2: **84.7%** (HokAI)
- HLE: **39.6%**; AA-LCR (long-context reasoning): **70.7%**; Artificial Analysis Intelligence Index: **55**
- CritPt / LCR / MLCR: **no verified public score found**

Coding:

- SWE-bench Verified: **82.1%** — rank 8 of 31; described as the first model in either the Anthropic or OpenAI lineup to clear the 80% mark on this benchmark (HokAI, vs GPT-5.4)
- SciCode: **53.6%**; SWE-bench Pro / LiveCodeBench / DeepSWE / Vibe Code Bench: **no verified public score found**
- Latency: **7.83 s p95 time to first token** via Anthropic over a trailing 7-day window (LLM Stats) — the weakest operational signal found.

Long context:

- AA-LCR 70.7% is the only published long-context reasoning figure; no MRCR/RULER/GraphWalks recall value at 1M depth was found, so the million-token window is partly unmeasured.

### Normalized scores (1–100)

- **Tool use: 88/100.** 80.4% Terminal-Bench 2.1, 33.3% on multimodal desktop tasks, a 1541 WebDev Arena Elo and five tunable effort levels make it a strong production agent; capped by missing Tau3/GDPval/Claw evidence and a 7.83 s p95 TTFT.
- **Reasoning: 91/100.** GPQA Diamond 96.2% (rank 1 of 48) and ARC-AGI-2 84.7% lift it above the previous draft's 88, with HLE 39.6% and AA-LCR 70.7%; capped by the AA Intelligence Index of 55 trailing GPT-5.6 Terra/Muse Spark 1.2 (57).
- **Context window: 95/100.** 1M-token window as both default and maximum with 128K output and a strong AA-LCR score; no full-depth recall benchmark holds it below the top tier.
- **Multimodal: 78/100.** Text, image and file inputs with text output and real-time cybersecurity safeguards; no audio or video input and no media generation.
- **Coding: 91/100.** SWE-bench Verified 82.1% (rank 8 of 31, the first in either the Anthropic or OpenAI lineup to clear 80%) plus SciCode 53.6% and a 1541 WebDev Arena Elo, raised from 88; SWE-bench Pro remains unpublished.
- **Cost efficiency: 65/100.** $3/$15 standard ($2/$10 intro ended 2026-08-31) is mid-tier, and the new tokenizer's ~30% token inflation erodes the headline rate; caching at $0.20 softens repeat-context work.
- **Overall Score: 89/100.** Mean of the five quality dims (88+91+95+78+91)/5 = 88.6 → 89. Best fit: high-volume agentic pipelines and coding workflows that need near-Opus behaviour at Sonnet prices.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-01
- Method: public internet research (Anthropic launch material via Benchgen, HokAI fact page, LLM Stats, third-party comparison tables); second-pass refresh of the 2026-09-18 report. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
