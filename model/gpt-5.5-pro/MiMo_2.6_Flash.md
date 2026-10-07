# GPT-5.5 Pro — findings by MiMo 2.6 Flash

- Source: OpenAI (`gpt-5.5-pro`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** OpenAI's premium extra-compute tier for GPT-5.5 (released 2026-04-23, API 2026-04-24) — same underlying weights as GPT-5.5 standard with additional parallel test-time compute for harder problems; requests may take minutes (background mode recommended). Positioned for the highest-accuracy work (business, legal, education, data science per early testers).
- **Provider / access:** OpenAI API (Responses API incl. Batch; Chat Completions not the primary surface), ChatGPT (Pro/Business/Enterprise), OpenRouter, Vercel AI Gateway. Snapshots: `gpt-5.5-pro-2026-04-23`.
- **Release / knowledge:** released 2026-04-23 (API 2026-04-24); knowledge cutoff 2025-12-01.
- **IDs:** `openai/gpt-5.5-pro` (gateway routes) / `gpt-5.5-pro` (native).
- **Context window:** 1,050,000 tokens (OpenRouter lists 922K usable input + 128K output); max output 128,000.
- **Modalities:** text, images, PDF in (per Model Cadence); text out; reasoning yes — `effort`: medium/high (default)/**xhigh**; tool calls yes (function calling, structured outputs, code execution, web search/computer use fee-per-call). No native cached-input discount.
- **Pricing (as of 2026-10-07):** **$30.00 in / $180.00 out** per 1M — no cached-input discount (prompt caching not priced as a discount); LLM Reference lists Batch $10/$45; web search $10/1K calls. Far above all standard anchors. Paid.
- **Architecture:** proprietary (GPT-5.5 weights + Pro test-time compute).

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1785** Elo (Artificial Analysis independent, Pro run — clears the 1750+ frontier ref; standard GPT-5.5 = 1769).
- OSWorld-Verified: **78.7%**. Tau2-bench Telecom: **98.0%** (GPT-5.5 standard, no prompt tuning — same weights). MCP-Atlas: **75.3%**.
- BrowseComp: **84.4%** single-agent / **90.1%** Pro compute.
- Terminal-Bench 2.1: **78.2%**; Terminal-Bench 2.0: **82.7%** (standard-weight rows — Pro does not publish separate TB numbers). Terminal-Bench 4.0 / Tau3 / Claw-Eval / AutomationBench: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (clears the 90%+ ref).
- HLE: **41.4%** no tools / **52.2%** with tools / **57.2%** Pro compute (clears the 40%+ ref).
- AA Intelligence Index: **55.0** (xhigh effort) — below the 60+ ref.
- ARC-AGI-2 high effort: **83.3%**. FrontierMath Tier 4: **39.6%** (Pro compute). CritPt: 30.6 (AA, xhigh).
- Vals Index / LiveBench / Omniscience: no verified public score found.

Coding:

- SWE-bench Verified: **82.6%** (Vals.ai independent — standard GPT-5.5 weights, Pro tier does not split this row).
- SWE-bench Pro: **58.6%** (rank 16/46 — well below Fable-5-class ~80). LiveCodeBench: **91.0** (approx. standard GPT-5.5).
- GeneBench-Pro: **20.5** (Pro Extended) vs 12.0 standard. Terminal-Bench 2.1 78.2 / TB2.0 82.7 as above.
- DeepSWE / Vibe Code Bench / SciCode / AA Coding Index for the Pro tier: no verified public score found (AA Coding Index rows are for GPT-5.6/other tiers).

Long context:

- No Pro-specific MRCR/RULER/GraphWalks rows captured for GPT-5.5 Pro (the family publishes them for GPT-5.6). OpenRouter reports 922K effective input in a 1.05M window. → no verified needle-retrieval score found.

### Normalized scores (1–100)

- **Tool use: 89/100.** GDPval-AA 1785 clears the 1750+ frontier ref, OSWorld 78.7%, Tau2 98%, BrowseComp 90.1% are all top-tier; TB2.1 78.2% is well under the 88% ref and there is no TB4/Tau3/Claw-Eval row → 89, not 90+.
- **Reasoning: 88/100.** GPQA 93.6 and HLE 41.4–57.2 clear both frontier refs, ARC-AGI-2 83.3% is excellent, but AA Index 55.0 misses the 60+ ref → 88.
- **Context window: 95/100.** 1.05M window = ≥1M tier floor; no Pro-specific retrieval benchmark published → floor only.
- **Multimodal: 80/100.** Text + image + PDF in (PDF band 75–90); no video/audio in, no non-text output → mid-band 80.
- **Coding: 85/100.** SWE-bench Verified 82.6% and LiveCodeBench 91.0 are strong, but SWE-bench Pro 58.6% is far under the Fable-class ~80, TB2.1 78.2% is below frontier, and no DeepSWE/Vibe rows exist for this tier → 85.
- **Cost efficiency: 8/100.** $30/$180 is 3–6× above even the $10/$50 ≈ 30 anchor, with **no cached-input discount** — the single most expensive scoreable API surface encountered; only batch routing ($10/$45 per LLM Reference) softens it.
- **Overall Score: 87/100.** (89+88+95+80+85)/5 = 87.4 → 87 — a max-accuracy reasoning/agent tier that clears every capability ref except coding-pro and cost; the Overall metric (which excludes Cost) masks a $30/$180 price that dominates any real TCO comparison.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (OpenAI API model page, GPT-5.5 launch post, OpenRouter, LLM Reference, LLM Stats, Model Cadence); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
