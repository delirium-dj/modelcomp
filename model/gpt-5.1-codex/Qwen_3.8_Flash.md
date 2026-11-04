# GPT-5.1 Codex — findings by Qwen 3.8 Flash

- Source: OpenAI (`openai/gpt-5.1-codex`), cross-checked against SWE-bench leaderboard, Artificial Analysis, Vals AI, OpenAI launch notes
- Date: 2026-10-17 / second pass 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex
- **Short description:** OpenAI's agentic coding model (Nov 2025), the base Codex tier beneath GPT-5.1-Codex-Max; 400K-context, tool-coding specialist that made a large Terminal-Bench 2 jump over its predecessor. Independent Vals runs found no significant GPT-5→5.1 delta on AIME/SWE-bench, so it's an efficiency/agentics refresh rather than a raw-intelligence leap.
- **Provider / access:** OpenAI Responses API / Codex (`openai/gpt-5.1-codex`); also surfaced as `gpt-5.1-codex-max` ($1.25/$10) and `gpt-5.1-codex-mini` ($0.25/$2.00) siblings. Proprietary.
- **Release / knowledge:** 2025-11-19 release (Codex-Max announced same day); knowledge cutoff not separately announced.
- **IDs:** `openai/gpt-5.1-codex` (base); distinct SKUs `openai/gpt-5.1-codex-max`, `openai/gpt-5.1-codex-mini`.
- **Context window:** 400,000 tokens (benchlm + pricepertoken for the mini; base Codex on the same 400K tier). Max output not published for the base SKU.
- **Modalities:** text/code in, image input supported (UI/screenshot reading in the GPT-5.1 family); text out; reasoning yes (effort levels: low/medium/high); tool calls yes.
- **Pricing (as of 2026-10-17):** $1.75 in / $14.00 out per 1M; cached input $0.13/1M (benchlm); Artificial Analysis blended cost ~$1.34/1M at a 7:2:1 cache profile.
- **Architecture:** proprietary; OpenAI's first model natively trained to operate across multiple context windows (Codex-Max framing).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **substantial jump vs prior Codex (~+7.7 pts)** (community-reported deltas; tbench.ai leaderboard)
- Multi-context-window agentic operation: **natively trained** (OpenAI launch note)
- Tau2 / GDPval: **no verified public score found for this exact base SKU**

Reasoning / knowledge:

- Vals AI independent run: **no significant difference vs GPT-5 on AIME / GPQA-class reasoning** (Vals via Medium comparison)
- Artificial Analysis Intelligence Index: not separately published for the base Codex SKU in this pass (AA lists cost $1.34/1M blended for GPT-5.1 Codex High)

Coding:

- SWE-bench Verified: **66.00%** (official swebench.com leaderboard, "GPT 5.1 Codex medium", mini-SWE-agent harness, 2025-11-20, ~$0.31/task)
- LiveCodeBench / SciCode: **no verified public score found** for this exact SKU

Long context:

- 400K window verified across benchlm/pricepertoken; **no MRCR/RULER retrieval score published** at that length.

### Normalized scores (1–100)

- **Tool use: 75/100.** Purpose-built agentic coder with tool calling and a Terminal-Bench 2 jump plus native multi-context operation; capped by no independent Tau/GDPval row for the base SKU.
- **Reasoning: 72/100.** Solid GPT-5-class reasoning behind adaptive effort levels, but Vals found no meaningful GPT-5→5.1 uplift, so it inherits rather than advances the family's reasoning ceiling.
- **Context window: 72/100.** 400K is a strong working window for repo-scale coding but sits a full tier below the 1M-class leaders, and no long-context retrieval score is published — mid-band mapping.
- **Multimodal: 50/100.** Text/code-centric with image (screenshot) input inherited from the GPT-5.1 family, but no image/audio/video output and no vision-emphasis for a coding agent; well above the text-only floor.
- **Coding: 82/100.** Its core mandate: 66% SWE-bench Verified on the official leaderboard, a large Terminal-Bench 2 gain, and multi-context agentic training; held below 85 by the medium-harness score and Vals' no-significant-delta note.
- **Cost efficiency: 64/100.** $1.75/$14 per 1M is a mid-premium developer price; caching ($0.13/1M, ~$1.34 blended) softens it, but it is pricier than the mini tier for routine edits.
- **Overall Score: 70.2/100.** Half-up mean of the five quality dims (75+72+72+50+82)/5 = 70.2. The coding/agentics strength is offset by a text-centric modality profile. Best fit: tool-driven software engineering and terminal automation where agentic reliability matters more than peak raw reasoning.

---

## Second-pass update — 2026-11-04 (UTC)

- Sources checked this pass: developers.openai.com/api/docs/deprecations (official OpenAI deprecation table: “gpt-5.1-codex-max, gpt-5.6-sol. July 23, 2026”); developersdigest.tech migration guide (confirms “gpt-5.1-codex-max, gpt-5.2-codex, Apr 22, 2026, Jul 23”); benchlm.ai/blog/posts/openai-codex-deprecation (Aug 27, 2026: “Four of [codex variants] From the 22 April 2026 announcement to the 23 July 2026 shutdown”); projectcozy.me (Oct 16, 2026: “Is GPT-5.1-Codex-Max still available? Not on OpenAI’s own API.”).
- **Lifecycle: `legacy` — API shut down July 23, 2026** (deprecated Apr 22; requests return errors; replacement: gpt-5.6-sol / gpt-5.6-terra). Same retirement wave as gpt-5.2-codex (flagged in batch 11) and gpt-5.1-codex-max. The OpenAI Codex family (gpt-5-codex, gpt-5.1-codex, gpt-5.1-codex-max, gpt-5.2-codex) was ALL retired Jul 23, 2026.
- No new benchmarks (model is dead; no future data possible). Pass-1 Oct 17 data is preserved as historical reference.
- Bands unchanged: Tool 75 / Reasoning 72 / Context 72 / Multimodal 50 / Coding 82. Overall remains **70/100**.
- Verdict: lifecycle flag added. Pass-1 missed the retirement (despite being dated 3 months after shutdown). Scores preserved for historical comparison.

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-17
- Method: public internet research — official SWE-bench leaderboard, Artificial Analysis cost/comparison pages, OpenAI GPT-5.1-Codex-Max launch note, Vals AI comparison (via Medium), benchlm/pricepertoken spec listings; scores are normalized 1–100 interpretations, not official vendor scores.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-04 (lifecycle `legacy` — API shut down Jul 23, 2026, confirmed by OpenAI deprecations page + 3 secondary sources; replacement gpt-5.6-sol; no band change; Overall 70 holds; historical entry).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
