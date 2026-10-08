# Muse Spark 1.1 — findings by Big Pickle

- Source: Meta (`meta/muse-spark-1.1`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta Superintelligence Labs' natively multimodal reasoning model for agentic tasks — tool use, computer use, visual chain-of-thought and multi-agent orchestration over a 1M window, launched with the Meta Model API at aggressive pricing.
- **Provider / access:** Meta Model API (`meta/muse-spark-1.1`, dual OpenAI/Auth40-compatible + Anthropic Messages formats), OpenRouter, Vercel AI Gateway; OpenCode Zen `opencode/muse-spark-1.1`. Public preview, US-first at launch.
- **Release / knowledge:** Released 2026-07-09 (public preview); knowledge cutoff not documented.
- **IDs:** `meta/muse-spark-1.1` / `opencode/muse-spark-1.1` (paid; no Zen Free ID found).
- **Context window:** 1,048,576 tokens (1M); max output 131K via Meta (up to 943K on OpenRouter). Verified via provider listings.
- **Modalities:** Text, image, audio, video, PDF input; text output. Native function calling, parallel tool calling, structured/JSON output, web search, reasoning efforts (default/minimal/xhigh), prompt caching.
- **Pricing (as of 2026-09-23):** $1.25 in / $4.25 out per 1M (cache read $0.15); $20 free credits at launch. Zen "standard pricing".
- **Architecture:** Proprietary, closed weights; params undisclosed.

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **88.1** (Meta-reported — leads tool-use per AI Weekly, 2026-07-09)
- Toolathlon: **75.6%** (official Toolathlon leaderboard via Poolside's comparison table)
- Terminal-Bench 2.1: **80.0% (Meta-reported) vs 76.2 ± 1.2 (independently verified**, tbench.ai, via Kingy.ai 2026-08-05 — a 3.8-point vendor gap)
- Terminal-Bench 2.0 (Kilo Code eval): **59.8%**, ~$30.15/attempt
- SWE Atlas (Codebase QnA): **42.2%** (Scale official leaderboard via Poolside table)
- Tau3-Banking / GDPval-AA / Claw-Eval: no verified public score found

Reasoning / knowledge:

- Intelligence Index: **43.3 (AA, #27)** via cloudprice tracker; LLM-stats reasoning index **50.5 (#12)**
- GPQA Diamond: **≈0.90** (cloudprice normalized, rank #47); HLE **≈0.50** (normalized, rank #12) — treat as secondary sourcing
- LCR (long-context reasoning): **≈0.80** (normalized, rank #57)
- AA-Omniscience / CritPt: no verified public score found

Coding:

- DeepSWE 1.1: **53.3%** (Meta; vs GPT-5.5 67.0)
- SWE-bench Pro: **61.5%** (via Poolside comparison table)
- Artificial Analysis Coding Index: **71.3 (#24)**; SciCode **≈0.60** (normalized, cloudprice)
- SWE-bench Verified: Meta claims "competitive with Claude Opus 4.8 / Gemini 3.1 Pro / GPT-5.5" but no exact number published (Computerworld, 2026-07-10)

Long context:

- 1M documented; no MRCR/RULER at full window found (only LCR ≈0.80 proxy).

### Normalized scores (1–100)

- **Tool use: 84/100.** MCP Atlas 88.1 and Toolathlon 75.6% are near-frontier, and OSWorld-Verified 80.8% + DeepSearchQA 84.9% add new strong rows; but AA Agentic Index 27.5%, OSWorld 2.0's 14.2% and ExploitGym 0.8% cap it below the elite.
- **Reasoning: 80/100.** AA-GPQA 89.8% (Vals 91.2), MMLU-Pro 88.7, AA-HLE 46.2% and HLE 62.1% are strong mid-frontier; AA II 33.7 (BenchLM-normalized; the 43.3 cited originally was the cloudprice tracker figure) and CritPt 15.1% keep it below the 90s.
- **Context window: 88/100.** 1M window with a real MRCR-1M row (54.1%) and AA-LCR 77.7% — very good, but the 54.1% full-1M retrieval is not the ≥98%-retrieval standard that earns 90+.
- **Multimodal: 88/100.** Native text/image/audio/video/PDF input (the full omni suite except non-text output — kept below 90 for text-only out); CharXiv 88.4% and BabyVision 76.3% verify chart/vision strength.
- **Coding: 79/100.** DeepSWE 53.3%, SWE-Pro 61.5%, SWE-bench (Vals) 82.0%, LCB (Vals) 85.9% and Coding Index 71.3 support an upper-mid reading; no verified SWE-bench Verified number keeps it out of the 90s.
- **Cost efficiency: 88/100.** $1.25/$4.25 lands exactly on the ~$1.25/$4.25 ref used elsewhere (≈88); cache-read $0.15 sweetens it.
- **Overall Score: 84/100.** (84 + 80 + 88 + 88 + 79) / 5 = 83.8 → 84 (dimension mix refreshed on 2026-10-08, see Re-verification — Overall unchanged). Best-fit: multimodal agentic/orchestration work + tool use at keen pricing; factor the independent-vs-vendor TB2.1 gap into coding expectations.

---

## Re-verification — 2026-10-08 (15 days after original)

Re-run replaces secondary sourcing with primary rows (BenchLM profile, updated 2026-10-07, 40/623 covered; Meta evaluation report; Vals; AA) and clears the knowledge/retrieval gaps.

| Dimension | 2026-09-23 | 2026-10-08 | Δ |
|---|---|---|---|
| Tool use | 85 | 84 | −1 |
| Reasoning | 80 | 80 | — |
| Context window | 90 | 88 | −2 |
| Multimodal | 88 | 88 | — |
| Coding | 79 | 79 | — |
| Cost efficiency | 88 | 88 | — |
| **Overall** | **84** | **84** | **—** |

New and corrected data:

- **Reasoning fully grounded:** GPQA Diamond (Vals) **91.2%**, AA-GPQA 89.8%, MMLU-Pro (Vals) 88.7%, HLE **62.1%** (Meta) with AA-HLE 46.2%, AA Intelligence Index **33.7** (BenchLM-normalized — note the 43.3 quoted originally was cloudprice's tracker value of the same index; both are real, different normalizations), CritPt 15.1%, AA-Omniscience Index 28.1 (accuracy 52.1, hallucination 50.0).
- **First MRCR 1M row: 54.1%** (Meta eval report) plus AA-LCR **77.7%** — the missing long-context evidence is in; it's good but not elite, which trims Context 90 → 88.
- **Tool-use corners found:** OSWorld 2.0 **14.2%**, ExploitGym 0.8%, AA Agentic Index 27.5% (contrast the launch-showcase rows) — new honest hard-cuts; vs. new strong rows WebArena-Verified 69%, DeepSearchQA 84.9%, OSWorld-Verified 80.8%, Finance Agent v2 57.2%, CyberGym 59.0%, Cybench 92.9%, JobBench 54.7%.
- **Coding confirmed:** AA Coding Index 71.3%, SWE-bench (Vals) **82.0%**, LiveCodeBench (Vals) 85.9%, AA-SciCode 58.8%, plus launch rows (SWE-Pro 61.5%, DeepSWE 53.3%, TB2.1 80.0% vendor / 69.3% Vals).
- **Vision verified:** CharXiv **88.4%**, BabyVision 76.3%, Design Arena 1275 — the multimodal 88 now has data, not just modality claims.
- **Positioning:** BenchLM **65.95, #31/887**; siblings Muse Spark 1.2 (66.51) and 1.3 (no score yet) have shipped. Pricing unchanged ($1.25/$4.25, cache $0.15).

Gaps still open after re-run: Tau3-Banking row for this model, APEX-Agents/MCP-Atlas independent run, official SWE-bench Verified number, audio-benchmark row, MRCR 128K intermediate points.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-08 (re-verified; original research 2026-09-23)
- Method: public internet research (Meta blogs/API announcements/evaluation report, BenchLM, Kingy.ai, cloudprice, llm-stats, Poolside comparison table, Vals); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.