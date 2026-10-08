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

- **Tool use: 85/100.** MCP Atlas 88.1 and Toolathlon 75.6% are near-frontier, but independently verified Terminal-Bench 2.1 (76.2±1.2) trails Meta's own 80.0% claim and no Tau3/GDPval numbers exist.
- **Reasoning: 80/100.** Intelligence Index 43.3 and LLM-stats reasoning #12 suggest a strong mid-frontier model; sparse directly-verified GPQA/HLE figures cap it below the 90s.
- **Context window: 90/100.** 1M window with LCR ≈0.80 long-context reasoning evidence; not near the ≥98%-retrieval standard that earns 100.
- **Multimodal: 88/100.** Native text/image/audio/video/PDF input (the full omni suite except non-text output — kept below 90 for text-only out).
- **Coding: 79/100.** DeepSWE 53.3% is mid, SWE-Pro 61.5% strong-mid and Coding Index 71.3 supports an upper-mid reading; no verified SWE-bench Verified number keeps it out of the 90s.
- **Cost efficiency: 88/100.** $1.25/$4.25 lands exactly on the ~$1.25/$4.25 ref used elsewhere (≈88); cache-read $0.15 sweetens it.
- **Overall Score: 84/100.** (85 + 80 + 90 + 88 + 79) / 5 = 84.4 → 84. Best-fit: multimodal agentic/orchestration work + tool use at keen pricing; factor the independent-vs-vendor TB2.1 gap into coding expectations.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-23
- Method: public internet research (Meta blogs/API announcements, AI Weekly, Kingy.ai, cloudprice, llm-stats, Poolside comparison table); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model → file saved as `<Source_Name>.md.excluded`, not `.md` (see SELF-EXCLUSION above).