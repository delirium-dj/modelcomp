# Muse Spark 1.3 — findings by MiMo 2.6 Flash

- Source: Meta (`muse-spark-1.3`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta's proprietary long-horizon agentic/coding reasoning model (Muse Spark line), released 2026-09-02 for long-horizon agentic workflows, coding agents, and professional knowledge work. Not a variant/alias — the flagship 1.3 release (Contributor/Free/Standard/Max are pricing/effort tiers of the same weights, per Meta's developer page).
- **Provider / access:** Meta Model API (`muse-spark-1.3`, `meta/muse-spark-1.3` on OpenRouter/NanoGPT/Vercel AI Gateway), OpenCode Zen `opencode/muse-spark-1.3`, plus Muse Code CLI. Chat Completions-compatible gateway routes; Meta hosts the primary API.
- **Release / knowledge:** 2026-09-02 release (Meta dev.meta.ai model page); knowledge cutoff not disclosed.
- **IDs:** `meta/muse-spark-1.3` (OpenRouter/NanoGPT/Vercel), `muse-spark-1.3` (Meta native), `opencode/muse-spark-1.3` (Zen) — all three exist; Contributor tier shares the same ID.
- **Context window:** 1,048,576 tokens (1M) — Meta dev page + AA reports 1.05M; max output 131,072 tokens (per project meta; long-context verified by MRCR v2 runs at 256K–1M bands).
- **Modalities:** text/image/video in; text out; reasoning yes (effort tiers: max / xhigh); tool calls yes (agentic harnesses, Terminal-Bench runs); JSON mode listed on AA provider tables — audio in and non-text out not verified.
- **Pricing (as of 2026-10-07):** Standard $1.25 in / $4.25 out / $0.15 cached per 1M (privacy: no training use); Contributor/Free $0.10 in / $0.20 out per 1M **but opts prompts+completions into Meta's training data** — do not use for confidential code. Paid on the Standard route.
- **Architecture:** proprietary (parameters, license, cutoff undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (Meta model card / BenchmarkList, rank 8/194, 96th pct, thinking=max) — independent AA run: **84.3%** (Artificial Analysis, max tier, 2026-09-29) / 85.4% (xhigh tier).
- GDPval-AA v2: **1754** (Meta dev page; Knowledge-work JobBench 66.9 partial / 32.0 binary).
- Toolathon / MCP-Atlas: no verified public score found.
- Claw-Eval / ClawProBench: no verified public score found.
- Tau3-Banking / Tau2-Bench: no verified public score found for 1.3.

Reasoning / knowledge:

- GPQA Diamond: **94.1%** (AA, xhigh, rank 10/189 per LLMLearner) / 93.5% (AA, max) — benchmark flagged saturated by The Model Gap.
- HLE (no tools): **48.7%** (AA, max, 2026-09-29).
- LCR: AA-LCR **83.0%** (rank 20/408, BenchmarkList).
- CritPt: **26.0** (AA, extra-high, no tools, rank 13/124; BenchmarkList prints 24.9).
- Artificial Analysis Intelligence Index: **48.1** (rank 8/68, Command Code/AA); LiveBench overall **81.6** (xHigh, livebench.ai 2026-09-03).
- Omniscience / hallucination: no verified public score found for 1.3.

Coding:

- DeepSWE v1.1: **75.4%** (Meta model card, rank 2/49–52, unverified by third party as of 2026-10-01).
- SciCode: **59.7%** (AA, extra-high, no tools, rank 6/89).
- SWE-Atlas Codebase QnA: **59.4%** (Meta/Scale leaderboard protocol, rank 11/37).
- Vibe Code Bench v1.1: **85.9%** (AA, max, rank 11/63).
- AA Coding Agent Index v1.5: **54.3** (rank 5/10); external Coding Index **75.8** (#12 of 52, Command Code).
- SWE-bench Verified / LiveCodeBench: no verified public score found (no 1.3 row on tracked boards as of 2026-10-01).

Long context:

- MRCR v2 8-needle: **98.5%** at 256K–512K (rank 2/8) and **98.1%** at 512K–1M (rank 1/9, 100th pct) — Meta self-reported via BenchmarkList; AA-LCR 83.0% independent.

### Normalized scores (1–100)

- **Tool use: 90/100.** TB2.1 88.8% self-report / 84.3% AA plus GDPval-AA 1754 both sit at the frontier ref (TB2.1 ~88%+, GDPval 1750+ → 90–100); capped at 90 by the complete absence of any public Tau3/Banking and Claw-Eval number for 1.3.
- **Reasoning: 91/100.** GPQA 93.5–94.1 and HLE 48.7 clear the frontier refs (90%+/40%+), MRCR 98% at 1M; capped below 95 because the AA Intelligence Index 48.1 misses the 60+ frontier ref and GPQA is a saturated board.
- **Context window: 98/100.** 1M total (≥1M tier = 95–100) with 98.1% MRCR retrieval in the 512K–1M band; not a clean 100 because the MRCR figures are Meta self-reported (AA-LCR independent run is 83.0%).
- **Multimodal: 85/100.** Image and video input, text output (+video-in band = 75–90); no audio input or non-text output verified, which caps it below 90.
- **Coding: 93/100.** DeepSWE 75.4 (frontier 74%+), TB2.1 84–89 (85%+), SciCode 59.7 (55%+), Coding Index 75.8 (70%+) all hit frontier refs; capped at 93 by DeepSWE being self-reported/unverified and no SWE-bench Verified or LiveCodeBench row.
- **Cost efficiency: 88/100.** $1.25/$4.25 Standard is exactly the ~88 anchor in the methodology; the $0.10/$0.20 Contributor tier is cheaper but training-data-gated, and cache reads at $0.15 soften agent-loop cost (~$0.48/M effective input).
- **Overall Score: 91/100.** (90+91+98+85+93)/5 = 91.4 → 91 — top-tier long-horizon paid agent/coding pick when 1M context and multimodal input matter; use the Contributor tier only if training on your data is acceptable.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (Meta dev page, Artificial Analysis, BenchmarkList, The Model Gap, LLMLearner, llmboard, Command Code); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
