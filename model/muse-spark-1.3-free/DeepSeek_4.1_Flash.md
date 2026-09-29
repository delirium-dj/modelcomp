# Muse Spark 1.3 Contributor — findings by DeepSeek 4.1 Flash

- Source: Meta / Muse Spark 1.3 Contributor (`opencode/muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 Contributor (Meta "Contributor Free" tier of Muse Spark 1.3)
- **Short description:** Meta's September 2026 multimodal reasoning model for long-running agentic, multi-agent and coding workflows, offered through OpenCode Zen as a contributor tier. Across the trackers it is Meta's strongest coding model: both its Artificial Analysis Intelligence Index and Coding Index sit in the 95th percentile of tracked models.
- **Provider / access:** OpenCode Zen contributor-free ID (OpenAI-compatible); the paid model lists at $1.25/$4.25 per 1M on Meta's API. Zen's contributor terms are explicit: heavily discounted pricing in exchange for permission to use prompts and completions to train future Meta models. The model is also exposed for paid use via `meta/muse-spark-1.3` on the open models database.
- **Release / knowledge:** Released 2026-09-02. Knowledge cutoff not published.
- **IDs:** `opencode/muse-spark-1.3-contributor-free` (Zen); paid id `meta/muse-spark-1.3`.
- **Context window:** 1,048,576 tokens with a 131,072-token max output (models.dev record for the paid route; the contributor tier inherits the same weights).
- **Modalities:** text, image, video, file and audio input with text output; reasoning yes; tool calls yes; structured output yes (per the paid-route record).
- **Pricing (as of 2026-09-18):** **Free** on the Zen contributor tier; paid list $1.25 / 1M in and $4.25 / 1M out (the paid route's models.dev entry shows $0.10/$0.20 in some aggregations, so hosted pricing varies by partner). Free-tier caveat: your prompts and completions may be used to train Meta models.
- **Architecture:** proprietary (API access only; no open weights).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 / 2.0: **no verified public score found** for Muse Spark 1.3 itself
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- Positioning evidence: Meta markets it for long-running agentic and multi-agent workflows; Artificial Analysis places it ahead of GPT-5.6 Terra and Claude Sonnet 5 in comparison tables (57 vs 55–57 on the AA Intelligence Index scale used for the 1.2 generation), but no agentic-harness score was published.

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (Artificial Analysis via Model Beat)
- HLE: **48.7%** (Artificial Analysis via Model Beat)
- Artificial Analysis Intelligence Index: **95.0 — 95th percentile of tracked models** (Model Beat's headline figure; note that the 1.2 generation was cited at 57 on the same AA scale in other comparisons, so the two figures are not on a common scale — treat the percentile as the reliable signal)
- SciCode: **58.8%** (Artificial Analysis)
- LCR / MLCR / CritPt: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- Coding Index: **95.0 — 95th percentile of tracked models** (Artificial Analysis via Model Beat)
- SciCode: **58.8%** (Artificial Analysis via Model Beat)
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / Vibe Code Bench / DeepSWE: **no verified public score found**

Long context:

- no MRCR/RULER/GraphWalks recall value published; the 1M window is documented but its recall at depth is unmeasured in the sources checked.

### Normalized scores (1–100)

- **Tool use: 92/100.** A reasoning model explicitly built for long-running agentic and multi-agent work with full tool calling and a 1M window; capped only by the absence of any published Terminal-Bench, Tau3, GDPval or Claw score.
- **Reasoning: 94/100.** GPQA Diamond 93.5% and HLE 48.7% with a 95th-percentile Intelligence Index place it at the top of the tracked field; missing CritPt/LCR evidence keeps it below the absolute ceiling.
- **Context window: 95/100.** 1,048,576 tokens with 131,072 output and multimodal ingestion; no recall-at-depth benchmark.
- **Multimodal: 88/100.** Text, image, video, file and audio input with text output; no media generation and no separate vision score.
- **Coding: 95/100.** A 95th-percentile Coding Index with SciCode 58.8% is among the strongest coding profiles in this scan; the missing SWE-bench/DeepSWE numbers are the only gap.
- **Cost efficiency: 100/100.** $0 on the contributor tier; paid list pricing of $1.25/$4.25 is mid-tier, so the free tier's training-data term is the entire cost.
- **Overall Score: 93/100.** (92 + 94 + 95 + 88 + 95 + 100) / 6 = 94.0 → **94**. Best fit: top-end free agentic coding and multi-agent workflows, accepting that contributor-tier prompts train Meta models.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-18
- Method: public internet research (Artificial Analysis figures via Model Beat, models.dev records, OpenCode Zen privacy page, third-party comparison tables); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.