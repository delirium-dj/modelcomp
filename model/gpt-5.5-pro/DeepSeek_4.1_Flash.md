# GPT 5.5 Pro — findings by DeepSeek 4.1 Flash

- Source: OpenAI / GPT-5.5 Pro (`openai/gpt-5.5-pro`)
- Date: 2026-10-16 (UTC) — rewrite; re-verified 2026-10-18; enriched 2026-10-24; re-researched 2026-11-06
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-research pass — 2026-11-06** (second pass, user-requested). Fresh sources this pass: BenchLM (`gpt-5-5-pro`, **still 9 rows, 72.83/100, #14 of 1015** — was 9 rows, 73.38, #13 of 992), OpenAI docs/launch page, ARC Prize, Epoch AI.
> **Re-verified unchanged:** BrowseComp 90.1%; CritPt 30.6%; ARC-AGI-1 95.0% / ARC-AGI-2 84.2%; HLE 57.2% with tools / 43.1% w/o; FrontierMath legacy 52.4% / v2 T1–3 87.719% / Tier-4 78.049%.
> **No new evidence:** independent Pro-specific evaluation remains absent (AA index still N/A for this ID; Vals Pro Index N/A); all Pro figures remain vendor self-reported. The context (1.05M official vs 922K AA), AA-index rebase and Batch-pricing conflicts stand.
> **No score change:** top-tier reasoning profile unchanged; scores held at 83.
> Sources this pass: https://benchlm.ai/models/gpt-5-5-pro · https://platform.openai.com/docs/models/gpt-5.5-pro · https://arcprize.org/leaderboard · https://epoch.ai/benchmarks/frontiermath-tier-4-v2

> **Enrichment pass — 2026-10-24** (second pass, user-approved). BenchLM (`gpt-5-5-pro`) re-read on 2026-10-23 carried **9 source-displayable rows** (was 8 on 2026-10-18) and computed **73.38/100, #13 of 992** (was #13 of 228). Newly captured then: FrontierMath v2 T1–3 87.719% / Tier-4 78.049% (Epoch AI), FrontierMath (legacy) 52.4%, ARC-AGI-1 95.0% / ARC-AGI-2 84.2% (ARC Prize), CritPt 30.6%, HLE 57.2% / 43.1% no-tools, BrowseComp 90.1%. The near-total absence of independent Pro-specific evaluation and the context/AA-index/pricing conflicts stand.

> **Re-verified 2026-10-18.** BenchLM (`gpt-5-5-pro`, 8 rows) computed an overall **73.39/100 (#13 of 228)**. **No score change.**

> **Rewrite pass — 2026-10-16** (≥3 independent sources). Independent coverage remains scarce: AA shows the Pro ID's Intelligence Index as N/A; Vals has no Pro Index; ApX/LLMReference reuse base-GPT-5.5 rows. OpenAI docs: 1,050,000 context / 128,000 max output, knowledge cutoff 2025-12-01, $30/$180, Responses + Batch. Vendor Pro figures: BrowseComp 90.1%, HLE 57.2% with tools (43.1% no-tools), FrontierMath T1–3 51.7% / T4 39.6%, GeneBench 33.2%, GDPval-AA ~1769–1785 Elo. Base-GPT-5.5 weights: GPQA 93.6%, TB2.0 82.7%, SWE-bench Pro 58.6% (Vals 82.6% Verified), OSWorld-Verified 78.7%, ARC-AGI-2 83.3–85.0%, Vibe Code Bench 69.85%. Conflicts surfaced: context 1.05M vs 922K; AA index N/A/rebased; Batch pricing 50% vs list; GDPval 1769 vs 1785.

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** OpenAI's premium extra-compute ("Pro") deployment of GPT-5.5 — same weights served with additional parallel test-time compute for the hardest tasks; several times slower and costlier than standard GPT-5.5.
- **Provider / access:** OpenAI API (Responses; Chat Completions), OpenRouter, Vercel AI Gateway, AWS Bedrock; Batch + Flex half price. Not open weights.
- **Release / knowledge:** 2026-04-23/24; knowledge cutoff 2025-12-01.
- **IDs:** `gpt-5.5-pro`, `gpt-5.5-pro-2026-04-23`; Zen `opencode/gpt-5.5-pro`. No Zen Free ID.
- **Context window:** 1,050,000 input / 128,000 max output (official) — conflict: 922K (Artificial Analysis).
- **Modalities:** text + image in; text out. Reasoning (Pro = extra test-time compute, highest effort), tools, structured outputs, code execution, batch.
- **Pricing (as of 2026-11-06):** **$30 / $180 per 1M** in/out; long-context $60/$270; Batch/Flex $15/$90 (50%). No prompt-caching discount listed.
- **Architecture:** proprietary; same weights as GPT-5.5 with extra inference compute.

### Raw benchmarks found

Agent / tool use:

- BrowseComp **90.1%** Pro / 84.4% base (OpenAI); GDPval-AA ~1769 (LLMReference) / 1785 Elo (AA, GPT-5.5 xhigh)
- Terminal-Bench 2.0 **82.7%** / 2.1 78.2% (base weights); OSWorld-Verified 78.7%; MCP-Atlas 75.3%; CyberGym 81.8%
- Tau3-Banking / Claw-Eval / Toolathlon: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond **93.6%** (base, self-reported); HLE 41.4% no-tools / **57.2% Pro with tools**; ARC-AGI-1 95.0% / ARC-AGI-2 **84.2%** (ARC Prize)
- FrontierMath legacy 52.4%; v2 T1–3 **87.719%** / Tier-4 **78.049%** (Epoch AI); GeneBench 33.2%; CritPt 30.6%
- Artificial Analysis Intelligence Index **N/A for Pro**; AA-LCR: no Pro figure; AA-Omniscience 21

Coding:

- SWE-bench Pro **58.6%** (base weights); LiveCodeBench ~91.0%; SWE-bench Verified 82.6% (Vals); TB2.1 78.2% / 2.0 82.7%
- Vibe Code Bench 69.85%; cursorBench3.1 59.2%; SciCode 56%; no DeepSWE

Long context:

- 922K–1.05M window; **no MRCR/RULER/GraphWalks published**.

### Normalized scores (1–100)

- **Tool use: 87/100.** TB2.0 82.7%, OSWorld-Verified 78.7%, GDPval-AA ~1769–1785 and BrowseComp 90.1% are frontier-class (vendor-checked); capped by TB2.1 78.2% and no Tau3/Claw.
- **Reasoning: 91/100.** GPQA 93.6%, HLE 57.2% Pro and ARC-AGI-2 84.2% are top-tier; the N/A/rebased AA Index and no independent confirmation cap it.
- **Context window: 93/100.** 1.05M input (≥1M band) per official docs with 128K output; the 922K AA conflict keeps it below the top.
- **Multimodal: 65/100.** Text + image in, text out (image band 60–70); no audio/video.
- **Coding: 79/100.** LiveCodeBench 91.0% and TB 78–83% are strong; SWE-bench Pro 58.6% and no SciCode/DeepSWE cap it.
- **Cost efficiency: 16/100.** $30/$180 per 1M is the most expensive tier tracked; Flex/batch routes stay deep in the top band.
- **Overall Score: 83/100.** (87 + 91 + 93 + 65 + 79) / 5 = 83.0 → 83. Best fit: rare, high-stakes reasoning/agentic jobs where accuracy matters more than cost or latency.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-06
- Method: re-research pass (user-requested second pass) over public internet research (OpenAI GPT-5.5 Pro docs/launch, BenchLM re-read 2026-11-05, ARC Prize, Epoch AI). All rows re-verified; no new evidence surfaced; scores held. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI — GPT-5.5 Pro model docs](https://platform.openai.com/docs/models/gpt-5.5-pro)
  - [OpenAI — Introducing GPT-5.5](https://openai.com/index/introducing-gpt-5-5/)
  - [BenchLM — GPT-5.5 Pro benchmark scores](https://benchlm.ai/models/gpt-5-5-pro)
  - [ARC Prize — leaderboard](https://arcprize.org/leaderboard)
  - [Epoch AI — FrontierMath v2 Tier-4](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
