# Laguna S 2.1 — findings by DeepSeek 4.1 Flash

- Source: Poolside/Laguna S 2.1 (`poolside/laguna-s-2.1`, served as `laguna-s-2.1`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna S 2.1 — the flagship of Poolside's Laguna 2.1 line (see correction below).
- **Short description:** Poolside's most capable Laguna 2.1 model: an open-weight MoE **coding specialist** (118B total / 8B active, 256 routed experts + 1 shared) with interleaved thinking and a 1,048,576-token window in both thinking and no-thinking modes. It targets long-horizon, agentic software engineering rather than general chat or multimodality.
- **Provider / access:** Poolside API and OpenRouter; open weights for self-hosting. **No OpenCode Zen Free ID.** Supports function calling, structured output, code execution, web search, batch inference and fine-tuning.
- **Release / knowledge:** **2026-07-21** (last update 2026-08-31). Knowledge cutoff not published.
- **IDs:** `laguna-s-2.1` (Poolside/OpenRouter); sibling entry `Laguna XS 2.1` (33B). No Zen Free ID observed.
- **Correction to folder metadata:** this repo's `meta.json` attributes the model to "Laguna Labs" with no verified public information. Public sources (Traictory catalogue, RankLLMs, BenchLM) all attribute Laguna S 2.1 to **Poolside**; the folder metadata predates the public release and should be refreshed by the maintainer (I did not modify it).
- **Context window:** **1,048,576 tokens (1M)**, per Traictory and RankLLMs. Max output not published.
- **Modalities:** **Text in / text out only.** Thinking and no-thinking modes; tool calls; structured output; no image/audio/video input.
- **Pricing (as of 2026-09-18):** **$0.10 / 1M in, $0.20 / 1M out** (Traictory); RankLLMs prints a $0.11 blended figure. Self-hosting is free of per-token cost under the open-weight licence, but needs multi-GPU VRAM.
- **Architecture:** MoE, **118B total / 8B active**, 256 routed experts + 1 shared expert, interleaved thinking, 1M context. Licence **OpenMDW** (open weights, model-distribution licence rather than Apache/MIT).

### Raw benchmarks found

> Poolside publishes its evals with explicit harness notes (all "thinking on"); they are re-published by the Traictory catalogue. Independent numbers from RankLLMs are listed alongside because they diverge sharply, which is exactly the harness-sensitivity caveat called out in `model-comparison.md`.

Agent / tool use (Poolside self-reported, Harbor + Poolside agent harness):

- Terminal-Bench 2.1: **70.2%** (mean pass@1 over 4 attempts) — vs **33.1%** on RankLLMs' independent Terminal-Bench 2.1
- Toolathlon (Verified; mean pass@1 over 3): **49.7%**
- SWE Atlas Codebase QnA (Harbor, Opus 4.5 judge; mean pass@1 over 3): **46.2%**
- OSWorld (independent, RankLLMs): **25.7%**; BrowseComp (independent, RankLLMs): **25.7%**
- Claw-Eval / ClawProBench, GDPval-AA, MCP Atlas, Tau3/Tau2, APEX-Agents: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond (independent RankLLMs proxy): **41.5%**; MATH-500 (RankLLMs): **41.5%**
- HLE / CritPt / LCR / MLCR: **no verified public score found**
- Artificial Analysis Intelligence Index: **no verified public score found**
- RankLLMs composite: **41.4 / 100, rank #52 of 80 tracked** (coding 33.1, reasoning 41.5, agentic 25.7); BenchLM: tracked but **"not publicly ranked yet"** with only 6 sourced rows and no independent row
- Vendor aggregate: Traictory records an average score of **57.4%** across the six Poolside benchmarks

Coding (Poolside self-reported, harbor + Poolside agent harness, thinking on):

- SWE-bench Multilingual: **78.5%** (mean pass@1 over 4)
- SWE-Bench Pro (public set): **59.4%** (mean pass@1 over 4)
- DeepSWE 1.1 (Harbor fork matching DeepSWE Pier harness): **40.4%** (mean pass@1 over 3)
- SWE-bench Verified (independent, RankLLMs): **33.1%**
- LiveCodeBench / SciCode / Coding Index / Vibe Code Bench: **no verified public score found**

Long context:

- **No MRCR / RULER / GraphWalks / AA-LCR value was found.** The 1,048,576-token window is stated in the vendor/Traictory spec and repeated by RankLLMs, but no retrieval-at-depth benchmark exists publicly, so long-context *quality* is unverified.

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `../../model-comparison.md`; Overall = arithmetic mean of the six.

- **Tool use: 62/100.** Vendor numbers (TB 2.1 70.2%, Toolathlon 49.7%, SWE Atlas Codebase QnA 46.2%) sit at/above the mid band, but RankLLMs' independent harness prints TB 2.1 33.1%, OSWorld 25.7% and BrowseComp 25.7%, and there is no GDPval, Claw-Eval or Tau3 row at all — so the defensible position is the mid-band midpoint rather than the vendor peak.
- **Reasoning: 52/100.** The only reasoning evidence is RankLLMs' independent GPQA proxy and MATH-500 at 41.5% each — below the 60–80% mid band — with no vendor GPQA, no HLE, no CritPt and no LCR/Intelligence Index, so this coding-first model gets a below-mid, evidence-thin reasoning score.
- **Context window: 95/100.** 1,048,576 tokens is in the ≥1M tier (95–100); it takes the tier floor because no ≥512K retrieval benchmark exists to justify the 98%-recall bonus that would lift it to 100.
- **Multimodal: 15/100.** Text-only in and out; no image/audio/video/PDF input and no non-text output (the text-only band 10–20).
- **Coding: 68/100.** SWE-bench Multilingual 78.5% and SWE-Bench Pro 59.4% with TB 2.1 70.2% are solidly above the mid band (65–75) for a specialised open-weight coder, but DeepSWE 40.4% and the independent SWE-bench Verified 33.1% show how harness-dependent those numbers are, and no SciCode/LiveCodeBench/DeepSWE frontier reference is met (74%+/85%+/55%+).
- **Cost efficiency: 98/100.** $0.10 in / $0.20 out lands exactly on the 97–99 band anchor, and OpenMDW open weights make self-hosting cost-free per token; only the absence of a $0 API tier keeps it off 100.
- **Overall Score: 58/100.** (62 + 52 + 95 + 15 + 68 + 98) / 6 = 65.0 → **65**. Best fit: self-hosted or OpenRouter coding agents that need a genuine 1M-token window at low per-token cost and will validate vendor harness claims on their own repo before trusting them.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-09-18
- Method: Public internet research from zero — Traictory model catalogue (specs, harness-annotated self-reported evals, pricing, licence), RankLLMs leaderboard (independent benchmark rows, speed, rank), BenchLM model record (evidence coverage). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Solar_Pro_4.md`, using the same headings.