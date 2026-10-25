# GPT 5.5 Pro — findings by DeepSeek 4.1 Flash

- Source: OpenAI / GPT-5.5 Pro (`openai/gpt-5.5-pro`)
- Date: 2026-10-16 (UTC) — rewrite pass (previous Signature 2026-10-09); re-verified 2026-10-18; enriched 2026-10-24
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Enrichment pass — 2026-10-24** (second pass, user-approved). BenchLM (`gpt-5-5-pro`) re-read on 2026-10-23 carries **9 source-displayable rows** (was 8 on 2026-10-18) and computes **73.38/100, #13 of 992** (was #13 of 228). Newly captured: **FrontierMath v2 T1–3 87.719% / Tier-4 78.049%** (Epoch AI), FrontierMath (legacy) 52.4%, **ARC-AGI-1 95.0% / ARC-AGI-2 84.2%** (ARC Prize), CritPt 30.6%, HLE 57.2% / 43.1% no-tools, BrowseComp 90.1%.
> **Refreshed / conflicts:** the Epoch **FrontierMath v2 Tier-4 78.049%** is far above the 39.6% legacy FrontierMath row the launch file carried; ARC-AGI-2 is now anchored at **84.2%** (ARC Prize). The near-total absence of independent Pro-specific evaluation and the context/AA-index/pricing conflicts stand.
> **No material score change:** the added rows confirm the top-tier reasoning profile, so scores are held.
> Sources this pass: https://benchlm.ai/models/gpt-5-5-pro · https://epoch.ai/benchmarks/frontiermath-tier-4-v2 · https://arcprize.org/leaderboard · https://openai.com/index/introducing-gpt-5-5/

> **Re-verified 2026-10-18.** BenchLM (`gpt-5-5-pro`, 8 rows) computed an overall **73.39/100 (#13 of 228)** and re-confirms the prior pass. **No score change.**

> **Rewrite pass — 2026-10-16** (≥3 independent sources).
> Re-sourced this pass. **Independent coverage remains scarce**: Artificial Analysis shows the Pro ID's Intelligence Index as **N/A ("Not publicly available")**; Vals AI carries a GPT-5.5 page but **no Vals Index** (N/A); ApX and LLMReference note "no Pro-specific evaluation" and reuse base-GPT-5.5 rows. OpenAI official docs: **1,050,000 context / 128,000 max output, knowledge cutoff 2025-12-01, $30/$180, Responses API + Batch**; system card lists xhigh-effort evals. Vendor Pro figures: BrowseComp **90.1%**, HLE **57.2% with tools** (43.1% no-tools), FrontierMath T1–3 51.7% / **T4 39.6%**, GeneBench 33.2%, GDPval-AA ~1769–1785 Elo, MMMU-Pro 64.5% (AA-sourced). Base-GPT-5.5 weights: GPQA **93.6%**, TB2.0 **82.7%**, SWE-bench Pro 58.6% (Vals 82.6% SWE-bench Verified), OSWorld-Verified 78.7%, ARC-AGI-2 83.3–85.0%, Vibe Code Bench 69.85%, BrowseComp 84.4%. Economize/LLM Stats: Batch $15/$90, Flex $15/$90, long-context surcharge $60/$270.
> **Conflicts surfaced:** (1) **Context window 1.05M (OpenAI docs, LLM Stats, LLMReference) vs 922K (Artificial Analysis)** — unresolved. (2) **AA Intelligence Index** for the Pro ID is N/A and for GPT-5.5 varies 38 (xhigh, current) vs 55 (prior snapshot) — the index has been rebased. (3) **Batch pricing** — 50% off ($15/$90, Economize) vs OpenAI docs showing list price on the Batch row. (4) **GDPval-AA 1769 vs 1785** across sources. (5) All Pro-specific scores are **vendor self-reported**; no independent Pro suite exists.
> Sources: https://platform.openai.com/docs/models/gpt-5.5-pro · https://openai.com/index/introducing-gpt-5-5/ · https://artificialanalysis.ai/models/gpt-5-5-pro · https://www.vals.ai/compare · https://llm-stats.com · https://www.economize.cloud/resources/open-ai/pricing/gpt-5.5-pro · https://apxml.com/models/gpt-55-pro

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** OpenAI's premium extra-compute ("Pro") deployment of GPT-5.5 — same weights served with additional parallel test-time compute for the hardest tasks; several times slower and costlier than standard GPT-5.5.
- **Provider / access:** OpenAI API (Responses; Chat Completions), OpenRouter, Vercel AI Gateway, AWS Bedrock; Batch + Flex half price. Not open weights.
- **Release / knowledge:** 2026-04-23/24; knowledge cutoff 2025-12-01.
- **IDs:** `gpt-5.5-pro`, `gpt-5.5-pro-2026-04-23`; Zen `opencode/gpt-5.5-pro`. No Zen Free ID.
- **Context window:** 1,050,000 input / 128,000 max output (official) — conflict: 922K (Artificial Analysis).
- **Modalities:** text + image in; text out. Reasoning (Pro = extra test-time compute, highest effort), tools, structured outputs, code execution, batch.
- **Pricing (as of 2026-10-16):** **$30 / $180 per 1M** in/out (OpenAI + OpenRouter); long-context $60/$270; Batch/Flex $15/$90 (50%). No prompt-caching discount listed.
- **Architecture:** proprietary; same weights as GPT-5.5 with extra inference compute.

### Raw benchmarks found

Agent / tool use:

- BrowseComp **90.1%** Pro / 84.4% base (OpenAI); GDPval-AA ~1769 (LLMReference) / 1785 Elo (AA, GPT-5.5 xhigh)
- Terminal-Bench 2.0 **82.7%** / 2.1 78.2% (base GPT-5.5 weights); OSWorld-Verified 78.7%; MCP-Atlas 75.3%; CyberGym 81.8%
- Tau3-Banking / Claw-Eval / Toolathlon: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond **93.6%** (base, self-reported); HLE 41.4% no-tools / **57.2% Pro with tools**; ARC-AGI-2 83.3–85.0%
- FrontierMath T1–3 51.7% / **T4 39.6%**; GeneBench 33.2%; CritPt 30.6%; AA-Omniscience 21
- Artificial Analysis Intelligence Index **N/A for Pro** / GPT-5.5 xhigh 38 (prior snapshot 55); AA-LCR: no Pro figure

Coding:

- SWE-bench Pro **58.6%** (base weights); LiveCodeBench ~91.0%; SWE-bench Verified 82.6% (Vals); TB2.1 78.2% / 2.0 82.7%
- Vibe Code Bench 69.85%; cursorBench31 59.2%; SciCode 56%; no DeepSWE

Long context:

- 922K–1.05M window; **no MRCR/RULER/GraphWalks published**.

### Normalized scores (1–100)

- **Tool use: 87/100.** TB2.0 82.7%, OSWorld-Verified 78.7%, GDPval-AA ~1769–1785 and BrowseComp 90.1% are frontier-class (vendor-checked); capped by TB2.1 78.2% and no Tau3/Claw.
- **Reasoning: 91/100.** GPQA 93.6%, HLE 57.2% Pro and ARC-AGI-2 83.3–85% are top-tier; the N/A/rebased AA Index and no independent confirmation cap it.
- **Context window: 93/100.** 1.05M input (≥1M band) per official docs with 128K output; the 922K AA conflict keeps it below the top.
- **Multimodal: 65/100.** Text + image in, text out (image band 60–70); no audio/video.
- **Coding: 79/100.** LiveCodeBench 91.0% and TB 78–83% are strong; SWE-bench Pro 58.6% and no SciCode/DeepSWE cap it.
- **Cost efficiency: 16/100.** $30/$180 per 1M is the most expensive tier tracked; Flex/batch routes stay deep in the top band.
- **Overall Score: 83/100.** (87 + 91 + 93 + 65 + 79) / 5 = 83.0 → 83. Best fit: rare, high-stakes reasoning/agentic jobs where accuracy matters more than cost or latency.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-24
- Method: rewrite-pass public internet research (OpenAI GPT-5.5 Pro docs + launch page, Artificial Analysis model page — no index data, Vals AI, LLM Stats, Economize, ApX, Wikipedia). The near-total absence of independent Pro-specific evaluation is stated explicitly; all Pro figures are vendor self-reported, and the context/AA-index pricing conflicts are surfaced. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
