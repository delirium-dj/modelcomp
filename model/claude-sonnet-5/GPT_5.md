EXCLUDED — no wait, verified benchmarks exist. Proceeding with full findings.

# Claude Opus 5.5 — findings by ChatGPT 5 (openai/gpt-5)

- Source: Anthropic/Claude Opus 5.5 (`claude-opus-5-5`)
- Date: 2026-09-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5 (no free tier; paid API / Pro-Max-Team-Enterprise chat access only)
- **Short description:** Claude Opus 5.5, Anthropic's most capable Opus model for agentic coding, knowledge work, and long-running tasks. It is the first release in the new Claude 5.5 family, succeeding Claude Opus 5.
- **Provider / access:** Anthropic Claude Platform, Amazon Bedrock, Google Cloud, and Microsoft Azure. Model ID claude-opus-5-5, Provider Anthropic. Uses Anthropic's native Messages API (not OpenAI-style Chat Completions/Responses API); no OpenCode Zen listing found in search results.
- **Release / knowledge:** Released September 22, 2026; knowledge cutoff Jun 2026 (per Anthropic's Opus 5.5 vs Opus 5 comparison table).
- **IDs:** `anthropic/claude-opus-5.5` (OpenRouter); `claude-opus-5-5` (Anthropic/Cursor). No confirmed Free-tier ID exists on OpenCode Zen based on available search results.
- **Context window:** Context window: 1M tokens, Max output: 128K tokens, verified across Anthropic platform docs, AWS Bedrock model card, and OpenRouter listing. On the Message Batches API, Claude Opus 5.5 supports up to 300k output tokens with the output-300k-2026-03-24 beta header.
- **Modalities:** 1 million token context with image and text input support, unchanged from Opus 5; text output only. Adaptive thinking is always on and can't be turned off; control thinking depth with the effort parameter. Tool/computer-use calling supported (breaking change noted: on the Claude API and Google Cloud, the earlier computer_20251124 computer use tool is not accepted). JSON mode not independently verified in search results.
- **Pricing (as of 2026-09-30):** Opus 5.5 bills at $4 per million input tokens and $20 per million output tokens, down from $5 and $25 for Opus 5. Prompt-cache reads are $0.20 per million tokens (0.05x the input rate), down from 0.10x on Opus 5. Paid only; no free tier or associated privacy caveat found.
- **Architecture:** Proprietary; Anthropic does not publicly disclose parameter counts or MoE structure. Not open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found (Anthropic has moved to Terminal-Bench 4.0 for this model generation)
- Terminal-Bench 4.0 (successor metric): Anthropic-reported 66.4% on Terminal-Bench 4.0 for agentic coding; independently, on Terminal-Bench 4.0 specifically, it scores 59.6%, level with GPT-6 Astra's top score and 11 points ahead of Opus 5 (Artificial Analysis, max effort)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: **1846 Elo** — an 1846 Elo score on GDPval-AA v2.1 for knowledge work (Anthropic system card); AA's own private "AA-Briefcase" knowledge-work Elo was an Elo of 1,822 — 143 points ahead of Fable 5.1
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found (SWE-bench Pro cited under Coding below)

Reasoning / knowledge:

- GPQA Diamond: no verified public score found for this exact model ID
- HLE: Anthropic-reported Humanity's Last Exam at 67.7% (with tools); independently, Artificial Analysis measured Humanity's Last Exam, where it scores 61.4% against a previous best of 59.1% set by Fable 5.1
- LCR / MLCR: AA-LCR listed as an evaluated dimension but no numeric score found; it remains behind on CritPt, AA-LCR, and GDP.pdf (no digit reported)
- CritPt: no verified public score found (only qualitative "trails" noted, no numeric value)
- Artificial Analysis Intelligence Index: **58 / #1 rank (max effort)** — Opus 5.5 scores 58 on the index — five points clear of GPT-6 Astra and Claude Fable 5.1, which are tied at 53, and seven points ahead of the outgoing Claude Opus 5's score of 51. At other effort tiers: 54 (high effort) and 51 (medium effort)
- Omniscience Accuracy / Hallucination Rate: no verified public score found (metric listed as an evaluated category by AA but no percentage disclosed in available sources)

Coding:

- SWE-bench Verified: no verified public score found for this exact model ID
- SWE-bench Pro: **89.9%** — Best verified: Claude Opus 5.5 · 89.9% (BenchLM, comparator row on Claude Opus 5 ledger page)
- LiveCodeBench: no verified public score found
- SciCode: **66.9%** — SciCode 66.9% (63.1%, Fable 5.1) (Artificial Analysis)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found for this exact model ID (DeepSWE best-verified currently held by a different model per BenchLM)

Long context:

- No MRCR / RULER / GraphWalks retrieval score reported for Claude Opus 5.5; context window size is vendor/marketplace-confirmed at 1M tokens but no long-context retrieval accuracy benchmark found in public sources.

### Normalized scores (1-100)

- **Tool use: 90/100.** Driven by GDPval-AA at 1846 Elo, well above the ≥1750 frontier threshold (an 1846 Elo score on GDPval-AA v2.1 for knowledge work), and a leading but not-fully-independently-matched Terminal-Bench 4.0 result (66.4% vendor vs 59.6% AA-verified). Capped by absence of Tau-bench/Tau3-Banking data and no verified Terminal-Bench 2.1 figure for direct tier mapping.
- **Reasoning: 93/100.** HLE at 67.7% (vendor, with tools) / 61.4% (AA-independent) both clear the 40%+ frontier bar (Humanity's Last Exam at 67.7% (with tools)), and the model holds the #1 Artificial Analysis Intelligence Index slot at 58 (seven points ahead of the outgoing Claude Opus 5's score of 51). Capped slightly below the top band because GPQA Diamond is unverified for this ID and the AA Index (58) sits just under the 60 "frontier" cutoff in the mapping.
- **Context window: 96/100.** Verified total of 1M tokens (Context window: 1M tokens, Max output: 128K tokens) places it in the ≥1M tier (95-100), but held below 100 because no MRCR/RULER retrieval-accuracy benchmark at 512K+ was found to confirm ≥98% retrieval.
- **Multimodal: 68/100.** Confirmed text + image input with text-only output (1 million token context with image and text input support, unchanged from Opus 5); no audio or video input, and no non-text output confirmed, placing it in the "+image in" band rather than higher tiers.
- **Coding: 93/100.** SWE-bench Pro best-verified at 89.9% (Best verified: Claude Opus 5.5 · 89.9%) and SciCode at 66.9%, clearing the 55%+ frontier SciCode threshold (SciCode 66.9% (63.1%, Fable 5.1)). Capped slightly since a standalone SWE-bench Verified percentage and LiveCodeBench score for this exact ID were not found.
- **Cost efficiency: 56/100.** At $4 per million input tokens and $20 per million output tokens, pricing sits between the $3/$15 (~60) and $10/$50 (~30) reference tiers, interpolating to roughly 56; cache reads at $0.20 per million tokens (0.05x the input rate) improve effective cost for repeated-context workloads but do not change the base tier.
- **Overall Score: 88.0/100.** Mean of Tool use (90) + Reasoning (93) + Context window (96) + Multimodal (68) + Coding (93) ÷ 5 = 88.0. Best fit: large-context, high-reasoning agentic coding and long-horizon knowledge-work tasks where text/image input suffices and per-task cost (not per-token) is the deciding factor; not the top pick for multimodal-heavy (audio/video) workloads.

---

## Signature

- Provided by: **ChatGPT 5 (openai/gpt-5)** — 2026-09-30
- Method: Public web research via search across Anthropic's official announcement and system card, Anthropic/AWS/Cursor platform docs, OpenRouter listing, Artificial Analysis model pages and articles, BenchLM, and independent tech press (VentureBeat, 9to5Mac, OfficeChai, emergent.sh, Kingy AI, Vellum); scores are normalized 1-100 interpretations per the specified mapping rubric, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
