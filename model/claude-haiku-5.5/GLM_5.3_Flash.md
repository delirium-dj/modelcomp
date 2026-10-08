# Claude Haiku 5.5 — findings by GLM 5.3 Flash

- Source: Anthropic (`claude-haiku-5-5`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's smallest and fastest Claude 5.5-family model, launched 2026-10-07 to replace Haiku 4.5. Built for high-volume, latency-sensitive work (extraction, routing, subagents) with the family toolkit — adaptive thinking with effort, 1M context, computer/browser use — at the bottom of the price ladder.
- **Provider / access:** Anthropic Claude API `claude-haiku-5-5` (Messages API, adaptive thinking on by default); Amazon Bedrock `anthropic.claude-haiku-5-5`; Google Cloud, Microsoft Foundry, Claude Platform on AWS `claude-haiku-5-5`. OpenCode Zen lists `opencode/claude-haiku-5.5`.
- **Release / knowledge:** Released 2026-10-07 (verified via DataCamp launch coverage and Anthropic availability pages); knowledge cutoff Jun 2026 per the Anthropic 5.5-family lineup table.
- **IDs:** `claude-haiku-5-5` (Claude API); Zen `opencode/claude-haiku-5.5` (no Free ID confirmed — standard pricing).
- **Context window:** 1M tokens total; 128K max output (shared across the 5.5 family; verified via Anthropic model comparison table and meta).
- **Modalities:** Text, image, PDF in → text out; reasoning yes (adaptive, effort `low`–`max`, default `medium`); tool calls yes (computer use needs `computer_toolset_20260801`); browser use tool; JSON/structured output supported. Breaking changes vs 4.5: no `budget_tokens`, no prefill, no custom temperature/top_p/top_k.
- **Pricing (as of 2026-10-08):** Tiered by prompt size — prompts ≤100K: $0.10 in / $0.50 out; >100K: $0.50 / $2.50; cache read $0.01 / $0.05; 5m cache write $0.125 / $0.625; Batch API 50% off. A new tokenizer turns the same text into ~30% more tokens than Haiku 4.5; Anthropic's realized average saving is "75% cheaper" vs the 90% sticker cut. Paid only.
- **Architecture:** Proprietary, closed weights; Haiku tier of the Claude 5.5 family. Anthropic commits to no retirement before 2027-10-07.

### Raw benchmarks found

All figures from Anthropic's launch post (as compiled by DataCamp, 2026-10-07):

Agent / tool use:

- GDPval-AA v2.1 (**Elo**): **1620** (vs Haiku 4.5 735, Sonnet 5.5 1840, GPT-6 Luna 1437)
- AA-Briefcase v1.1 (**Elo**): **1578** (Haiku 4.5 614, Sonnet 5.5 1824)
- OSWorld 2.1 (desktop automation): **72.4%** (Haiku 4.5 15.7%, Sonnet 5.5 83.9%, GPT-6 Luna 48.9%)
- Terminal-Bench 4.0: **39.2%** (Haiku 4.5 0.0%, Sonnet 5.5 70.6%, GPT-6 Luna 16.4%)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA (legacy v2.1 scale verified above); Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE (no tools): **45.9%** (Haiku 4.5 10.2%, Sonnet 5.5 56.9%); HLE (with tools): **57.4%** (Haiku 4.5 18.7%, Sonnet 5.5 64.5%)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: top Haiku 5.5 variant (Max, Default Fallback) **43**; Xhigh variant lowest cost per task at $0.12 (artificialanalysis.ai release page)
- Omniscience Accuracy / Hallucination Rate: no verified public score found; Chartography (no tools, chart reading): **46.4%** (Haiku 4.5 6.4%, Sonnet 5.5 61.6%)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- FrontierCode 1.1 (Main): **46.4%** (Sonnet 5.5 52.1%, GPT-6 Luna 42.4%)

Long context:

- no long-context retrieval reported (1M window documented; MRCR/RULER/GraphWalks values not found)

### Normalized scores (1–100)

- **Tool use: 78/100.** GDPval-AA 1620 and AA-Briefcase 1578 are strong (above the ~1200 mid-band ceiling, below the ~1750+ frontier band → upper 70s); OSWorld 2.1 72.4% makes desktop automation genuinely usable; capped by Terminal-Bench 4.0 at just 39.2% and no Tau3/Toolathon coverage.
- **Reasoning: 74/100.** HLE 45.9% (no tools) is solid but ~11 points behind Sonnet 5.5; AA Index 43 sits between the mid (20–35) and frontier (60+) reference bands; no GPQA/LCR published, which caps the score.
- **Context window: 95/100.** Documented 1M tokens (tier ≥1M = 95–100); capped at 95 because no MRCR/RULER retrieval percentage at length is published.
- **Multimodal: 78/100.** Text, image and PDF input with text output maps to the +PDF-in 75–90 band; Chartography 46.4% shows real chart-reading; no audio/video input documented, which caps it.
- **Coding: 62/100.** Terminal-Bench 4.0 39.2% and FrontierCode 1.1 46.4% are mid-band (Sonnet 5.5 leads at 70.6%/52.1%); no SWE-bench Verified/SWE-Pro number published, so the coding score rests on mid-tier agent results.
- **Cost efficiency: 96/100.** $0.10/$0.50 per MTok (≤100K prompts) maps to the ~$0.10/$0.20 ≈ 97–99 band, shaved slightly for the $0.50 output rate and the tiered >100K rate ($0.50/$2.50); a ~25× cost cut over Haiku 4.5 was measured in independent hands-on testing.
- **Overall Score: 77.4/100.** Mean of the five quality dims (78+74+95+78+62)/5 = 77.4; best fit: high-volume classification/extraction, routing, and cheap subagent work under a Sonnet 5.5 or Opus 5.5 orchestrator — not the hardest coding or reasoning tasks.

---

## Signature

- Provided by: **GLM 5.3 Flash (zai-org/glm-5.3-flash)** — 2026-10-08
- Method: public internet research (Anthropic launch figures via DataCamp, Artificial Analysis release page, availability/docs pages); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
