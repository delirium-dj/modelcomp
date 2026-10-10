# GPT 5.5 Pro — findings by DeepSeek 4.1 Flash

- Source: OpenAI / GPT-5.5 Pro (`openai/gpt-5.5-pro`)
- Date: 2026-10-09 (UTC) — deep second pass (previous Signature 2026-10-01)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass re-verification — 2026-10-09** (≥3 independent sources).
> The second pass confirms that **independent coverage is scarce**: Artificial Analysis reports **no benchmark data ("Not publicly available")** for the Pro ID, LLM Stats carries **no benchmark scores**, and Vals AI has **no model page (404)**. The only capability numbers are OpenAI self-reported (BrowseComp 90.1% Pro, GDPval 82.3% wins-or-ties, HLE 43.1% no-tools / 57.2% with-tools, FrontierMath T1–3 52.4% / T4 39.6%) plus base-GPT-5.5 rows (GPQA 93.6%, TB2.0 82.7%, SWE-bench Pro 58.6%). BenchLM ranks it 72.27 (#14) on a single source family.
> **Conflicts surfaced:** (1) **context window 922K (AA) vs 1.1M input (LLM Stats)**; (2) SDK: only vendor numbers exist, so all Pro-specific scores are self-reported; (3) aggregator uplift not independently confirmed (BenchLM 72.27 vs base GPT-5.5 67.79).
> Sources: https://openai.com/index/introducing-gpt-5-5/ · https://artificialanalysis.ai/models/gpt-5-5-pro · https://llm-stats.com/models/gpt-5.5-pro · https://benchlm.ai/

## Model card

- **Name:** GPT 5.5 Pro
- **Short description:** OpenAI's premium extra-compute ("Pro") deployment of GPT-5.5 — same weights served with additional parallel test-time compute for the hardest tasks; several times slower and costlier than standard GPT-5.5.
- **Provider / access:** OpenAI API (Responses/Chat), OpenRouter, Vercel AI Gateway; Flex tier half price. Not open weights.
- **Release / knowledge:** 2026-04-23/24; knowledge cutoff December 2025.
- **IDs:** `gpt-5.5-pro`; Zen `opencode/gpt-5.5-pro`. No Zen Free ID.
- **Context window:** 922K input / 128K max output (AA; OpenRouter) — conflict: 1.1M input (LLM Stats).
- **Modalities:** text + image in; text out. Reasoning (Pro = extra test-time compute), tools, structured outputs, code execution, batch.
- **Pricing (as of 2026-10-09):** **$30 / $180 per 1M** in/out (OpenAI + OpenRouter); batch $10/$45; Flex $15/$90. No prompt-caching discount listed.
- **Architecture:** proprietary; same weights as GPT-5.5 with extra inference compute.

### Raw benchmarks found

Agent / tool use:

- BrowseComp **90.1%** Pro / 84.4% base (OpenAI); GDPval wins-or-ties 82.3% Pro (OpenAI)
- Terminal-Bench 2.0 **82.7%** / 2.1 78.2% (base GPT-5.5 weights); OSWorld-Verified 78.7%; MCP-Atlas 75.3%
- GDPval-AA 1785 Elo (AA, GPT-5.5 xhigh); Tau3-Banking / Claw-Eval / Toolathlon: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond **93.6%** (base, self-reported); HLE 41.4% no-tools / **57.2% Pro**; ARC-AGI-2 83.3%
- FrontierMath T4 39.6%; CritPt 30.6%; Artificial Analysis Intelligence Index **55.0** (GPT-5.5 xhigh)
- AA-LCR / AIME: **no verified public score found for this Pro ID**

Coding:

- SWE-bench Pro **58.6%** (#16/46, base weights); LiveCodeBench ~91.0%; TB2.1 78.2% / 2.0 82.7%
- SciCode / DeepSWE: **no verified public score found**

Long context:

- 922K–1.1M window; **no MRCR/RULER/GraphWalks published**.

### Normalized scores (1–100)

- **Tool use: 87/100.** TB2.0 82.7%, OSWorld-Verified 78.7%, GDPval-AA 1785 and BrowseComp 90.1% are frontier-class (vendor-checked); capped by TB2.1 78.2% and no Tau3/Claw.
- **Reasoning: 91/100.** GPQA 93.6%, HLE 57.2% Pro and ARC-AGI-2 83.3% are top-tier; AA Index 55 (<60) and no independent confirmation cap it.
- **Context window: 93/100.** 922K–1.1M input (500K–1M/≥1M ambiguous band) with 128K output; source conflict unresolved.
- **Multimodal: 65/100.** Text + image in, text out (image band 60–70); no audio/video.
- **Coding: 79/100.** LiveCodeBench 91.0% and TB 78–83% are strong; SWE-bench Pro 58.6% (#16/46) and no SciCode/DeepSWE cap it.
- **Cost efficiency: 16/100.** $30/$180 per 1M is the most expensive tier tracked; Flex/batch routes stay deep in the top band.
- **Overall Score: 83/100.** (87 + 91 + 93 + 65 + 79) / 5 = 83.0 → 83. Best fit: rare, high-stakes reasoning/agentic jobs where accuracy matters more than cost or latency.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-09
- Method: deep second-pass public internet research (OpenAI GPT-5.5 page, Artificial Analysis model page — no data, LLM Stats — no scores, Vals AI — 404, BenchLM). The near-total absence of independent Pro-specific evaluation is stated explicitly; all Pro figures are vendor self-reported. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
