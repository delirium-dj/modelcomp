# GPT 5.5 Pro — findings by Big Pickle

- Source: OpenAI (`opencode/gpt-5.5-pro`, API model `gpt-5.5-pro`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.5 Pro
- **Short description:** OpenAI's premium extra-compute deployment of GPT-5.5, released 2026-04-23/24 — the same underlying weights as GPT-5.5 with parallel test-time compute for harder problems. Sold for deep reasoning on high-stakes work (research, math, expert QA) rather than as a coding upgrade; OpenAI published no separate Pro coding numbers.
- **Provider / access:** OpenAI API model `gpt-5.5-pro`, Responses API (multi-turn interactions, background mode recommended — some requests take minutes), also via OpenRouter and Vercel AI Gateway; ChatGPT Pro/Business/Enterprise. OpenCode Zen `opencode/gpt-5.5-pro`.
- **Release / knowledge:** released 2026-04-23 (API 2026-04-24); knowledge cutoff 2025-12.
- **IDs:** `opencode/gpt-5.5-pro` (Zen, standard pricing, no free tier); upstream `gpt-5.5-pro`.
- **Context window:** 1,050,000 tokens total (≈922K input / 128,000 max output), per the OpenAI model page.
- **Modalities:** text, image and file input; text output; reasoning effort medium/high (default)/xhigh; tool calls; structured outputs; code execution.
- **Pricing (as of 2026-10-02):** $30.00 in / $180.00 out per 1M; batch $10 / $45. No free tier and no published cached-input discount.
- **Architecture:** proprietary; decoder-only, parallel test-time compute on shared GPT-5.5 weights.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **90.1%** (OpenAI launch table; +5.7 over base GPT-5.5's 84.4%)
- HLE with tools: **57.2%** (OpenAI launch table)
- GDPval (wins or ties): **82.3%** (OpenAI launch table; base GPT-5.5 84.9%)
- GDPval-AA: **1785 Elo** (leaderboard row for GPT-5.5 Pro; base GPT-5.5 1769)
- MCP-Atlas: **75.3%** (independent tracker row; OpenAI's own table leaves it unseparated for Pro)
- Terminal-Bench 2.0: **82.7%** / Terminal-Bench 2.1: **78.2%** (OpenAI's table shows "—" for Pro; these are the base GPT-5.5 weights, carried on third-party trackers)
- OSWorld-Verified: **78.7%** (base GPT-5.5 weights; no Pro-specific row)
- Tau3-Banking / Tau2-Bench / Toolathon: no verified public score found for the Pro compute tier

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (base GPT-5.5 weights — OpenAI published no Pro-specific GPQA row)
- HLE (no tools): **43.1%** (Pro-specific, +1.7 over base)
- FrontierMath Tier 4: **39.6%** (Pro-specific, +4.2 over base 35.4%)
- FrontierMath Tier 1–3: **52.4%** (Pro-specific)
- GeneBench-Pro: **20.5%** (Pro-specific; 129-problem scientific-agent benchmark)
- ARC-AGI-2 (high effort): **83.3%** (tracker datapack row)
- SimpleBench: **76.9%** (rank 3/36, BenchmarkList system card run)

Coding:

- SWE-bench Pro (public): **58.6%** (base GPT-5.5 weights; OpenAI's own table shows "—" for Pro — CodingFleet notes the Pro coding performance is entirely unmeasured)
- SWE-bench Verified: **82.6%** (base weights; benchmark contaminated/saturated)
- LiveCodeBench: **91.0%** (approximate, base weights)
- Terminal-Bench 2.1: **78.2%** (base weights)
- FrontierCode Diamond: **5.7%** (base weights, per CodingFleet comparison)

Long context:

- OpenAI MRCR v2 8-needle bands are published for base GPT-5.5 only: 256K–512K **81.5%**, 512K–1M **74.0%**, 128K–256K 87.5% (no Pro-specific long-context row published)
- GraphWalks BFS/parents at 256K and 1M: published for base GPT-5.5 only (BFS 256K 73.7%, BFS 1M 45.4%, parents 256K 90.1%, parents 1M 58.x%)
- No RULER row found

### Normalized scores (1–100)

- **Tool use: 86/100.** BrowseComp 90.1% and HLE-with-tools 57.2% are Pro-measured and frontier-adjacent, with MCP-Atlas 75.3% and Terminal-Bench 2.1 78.2% carried from the identical base weights; capped by the complete absence of a Pro-specific Terminal-Bench or Tau3 row and a GDPval result (82.3%) slightly below its own base model.
- **Reasoning: 84/100.** Pro-measured gains are real but narrow — FrontierMath Tier 4 39.6% (+4.2), HLE no-tools 43.1% (+1.7), GeneBench-Pro 20.5% — over a saturated GPQA 93.6% carried from base weights; the low no-tools HLE and sub-40 FrontierMath Tier 4 hold it below the reasoning leaders.
- **Context window: 90/100.** A verified 1,050,000-token window with a 128,000-token output ceiling; the long-context retrieval rows (MRCR 74.0% at 512K–1M, GraphWalks BFS 45.4% at 1M) belong to the base weights and none were published for the Pro compute tier, which keeps it under the entries with measured 1M retention.
- **Multimodal: 76/100.** Text, image and file input with text output per the model page; no audio or video input and no published multimodal benchmark row for the Pro tier.
- **Coding: 86/100.** SWE-bench Pro 58.6%, SWE-bench Verified 82.6%, Terminal-Bench 2.1 78.2% and LiveCodeBench ~91.0% are all strong base-GPT-5.5 numbers on identical weights, but OpenAI deliberately published no Pro-specific coding figure — an unproven rather than a demonstrated coding uplift.
- **Cost efficiency: 30/100.** $30/$180 per 1M with no free tier and no cache discount — the highest output price in this dataset, 3.6× Claude Fable 5's $50 output and 6× GPT-5.5 standard's $30; only half-price batch ($10/$45) softens it.
- **Overall Score: 84.4/100.** Half-up mean of the five quality dims. Best fit as a paid reasoning/browsing specialist for high-stakes analysis where minutes-long responses are acceptable — not as a cost-aware coding default, where base GPT-5.5 at $5/$30 delivers the same weights for a sixth of the output price.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-02
- Method: public internet research (OpenAI GPT-5.5 launch table and model docs, Artificial Analysis-adjacent trackers, CodingFleet comparison, LLMReference datapack, BenchmarkList); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.5.md`, using the same headings.

---