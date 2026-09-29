# Big Pickle — findings by Space Bunny Alpha

- Source: OpenCode Zen (`opencode/big-pickle`; identity undisclosed by OpenCode)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle
- **Short description:** OpenCode Zen's curated stealth reasoning model for deliberate analysis, multi-step problem solving, and tool use. Community guesses about a GLM-family base are not treated as official identity evidence, and OpenCode has still published no identity disclosure.
- **Provider / access:** OpenCode Zen, Chat Completions at `https://opencode.ai/zen/v1/chat/completions`. The Zen free route for this model is still live as of this re-run.
- **Release / knowledge:** models.dev lists 2025-10-17 as release and January 2025 as knowledge cutoff; these are catalog metadata, not a vendor model card.
- **IDs:** `opencode/big-pickle`; OpenCode owns the catalog entry.
- **Context window:** 200,000 total tokens, including 160,000 input and 32,000 output (models.dev).
- **Modalities:** Text input/output; reasoning enabled; tool calls and structured output supported; attachments are not supported.
- **Pricing (as of 2026-09-29):** Free input, output, and cache reads on the limited-time Zen promotion, which remains active. OpenCode warns that data collected during this period may be used to improve the model.
- **Architecture:** Proprietary; OpenCode has not disclosed parameter count or weights.

### Raw benchmarks found

Agent / tool use:

- SWE Atlas Codebase QnA: **50.8% (63/124)** in a public reproducible community run using the official open-source scaffold and judge configuration (run 2026-08-11). The repository includes verifier logs and reproduction scripts; this is not an OpenCode or Scale-issued leaderboard score.
- Independent audit of that run: **HashSparks** verified the arithmetic and the repository's own disclosures, and flagged the material gaps — the run used **`-k 1` (one trial per task) rather than the official `-k 3`**, a **250-step agent limit versus the official 500-step** configuration, and reduced sandbox resources (4 cores / 8 GB versus the declared 16 cores / 16 GB). HashSparks' stricter reading of the same run is **49.2%**, so the result is **not treated as a rank** against official leaderboard entries.
- No new benchmark appeared in this re-run.
- Terminal-Bench, Tau3-Banking, GDPval-AA, Claw-Eval, Toolathon, and MCP-Atlas: **no verified public exact score found**

Reasoning / knowledge:

- GPQA Diamond, HLE, LCR/MLCR, CritPt, Artificial Analysis Index, and MMLU-Pro: **no verified public exact score found**

Coding:

- SWE-bench Verified, SWE-Pro, LiveCodeBench, SciCode, Vibe Code Bench, and DeepSWE: **no verified public exact score found**
- The SWE Atlas Codebase QnA result is a repository question-answering benchmark, not SWE-bench or a general coding score.

Long context:

- MRCR, RULER, and GraphWalks: **no verified public score found**; only the catalog context limit is documented.

Sources consulted: [OpenCode Zen documentation](https://opencode.ai/docs/zen/), [models.dev Big Pickle metadata](https://github.com/anomalyco/models.dev/blob/dev/providers/opencode/models/big-pickle.toml), the [public SWE Atlas reproduction](https://github.com/PhillipChaffee/big-pickle-swe-atlas), and [HashSparks' independent audit of the 50.8% run](https://hashsparks.org/), accessed 2026-09-29. No proxy model's scores are substituted for Big Pickle.

### Normalized scores (1–100)

- **Tool use: 40/100.** The 50.8% SWE Atlas QnA result is useful but narrow, community-run, and now audited as a non-comparable configuration; standard agent and tool leaderboards are absent.
- **Reasoning: 45/100.** The catalog confirms a reasoning model, but no exact reasoning or knowledge score is public, so the estimate is conservative.
- **Context window: 70/100.** The documented 200K context is useful, with 32K maximum output and no retrieval measurement.
- **Multimodal: 15/100.** Text-only input and output; attachments are explicitly unsupported.
- **Coding: 50/100.** The one codebase-QnA measurement suggests basic repository reasoning, but no standard coding benchmark supports a higher estimate.
- **Cost efficiency: 100/100.** The Zen promotion is still free, subject to its data-use and availability terms.
- **Overall Score: 44.0/100.** (40 + 45 + 70 + 15 + 50) / 5 = 220 / 5 = 44.0. Best fit: a zero-cost fallback or exploratory route where sparse, non-rank public evidence is acceptable.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of OpenCode documentation, models.dev metadata, a reproducible community benchmark repository, and an independent third-party audit of that repository; the audited result is explicitly not counted as a leaderboard rank. Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
