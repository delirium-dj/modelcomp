# Big Pickle — findings by Space Bunny Alpha

- Source: OpenCode Zen (`opencode/big-pickle`; identity undisclosed by OpenCode)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle
- **Short description:** OpenCode Zen's curated stealth reasoning model for deliberate analysis, multi-step problem solving, and tool use. Community guesses about a GLM-family base are not treated as official identity evidence.
- **Provider / access:** OpenCode Zen, Chat Completions at `https://opencode.ai/zen/v1/chat/completions`.
- **Release / knowledge:** models.dev lists 2025-10-17 as release and January 2025 as knowledge cutoff; these are catalog metadata, not a vendor model card.
- **IDs:** `opencode/big-pickle`; OpenCode owns the catalog entry.
- **Context window:** 200,000 total tokens, including 160,000 input and 32,000 output (models.dev).
- **Modalities:** Text input/output; reasoning enabled; tool calls and structured output supported; attachments are not supported.
- **Pricing (as of 2026-09-24):** Free input, output, and cache reads on the limited-time Zen promotion. OpenCode warns that data collected during this period may be used to improve the model.
- **Architecture:** Proprietary; OpenCode has not disclosed parameter count or weights.

### Raw benchmarks found

Agent / tool use:

- SWE Atlas Codebase QnA: **50.8% (63/124)** in a public reproducible community run using the official open-source scaffold and judge configuration (run 2026-08-11). The repository includes verifier logs and reproduction scripts; this is not an OpenCode or Scale-issued leaderboard score.
- Terminal-Bench, Tau3-Banking, GDPval-AA, Claw-Eval, Toolathon, and MCP-Atlas: **no verified public exact score found**

Reasoning / knowledge:

- GPQA Diamond, HLE, LCR/MLCR, CritPt, Artificial Analysis Index, and MMLU-Pro: **no verified public exact score found**

Coding:

- SWE-bench Verified, SWE-Pro, LiveCodeBench, SciCode, Vibe Code Bench, and DeepSWE: **no verified public exact score found**
- The SWE Atlas Codebase QnA result is a repository question-answering benchmark, not SWE-bench or a general coding score.

Long context:

- MRCR, RULER, and GraphWalks: **no verified public score found**; only the catalog context limit is documented.

Sources consulted: [OpenCode Zen documentation](https://opencode.ai/docs/zen/), [models.dev Big Pickle metadata](https://github.com/anomalyco/models.dev/blob/dev/providers/opencode/models/big-pickle.toml), and the [public SWE Atlas reproduction](https://github.com/PhillipChaffee/big-pickle-swe-atlas), accessed 2026-09-24. No proxy model's scores are substituted for Big Pickle.

### Normalized scores (1–100)

- **Tool use: 40/100.** The 50.8% SWE Atlas QnA result is useful but narrow and community-run; standard agent and tool leaderboards are absent.
- **Reasoning: 45/100.** The catalog confirms a reasoning model, but no exact reasoning or knowledge score is public, so the estimate is conservative.
- **Context window: 70/100.** The documented 200K context is useful, with 32K maximum output and no retrieval measurement.
- **Multimodal: 15/100.** Text-only input and output; attachments are explicitly unsupported.
- **Coding: 50/100.** The one codebase-QnA measurement suggests basic repository reasoning, but no standard coding benchmark supports a higher estimate.
- **Cost efficiency: 100/100.** The current Zen promotion is free, subject to its data-use and availability terms.
- **Overall Score: 44.0/100.** (40 + 45 + 70 + 15 + 50) / 5 = 44.0. Best fit: a zero-cost fallback or exploratory route where sparse public evidence is acceptable.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of OpenCode documentation, models.dev metadata, and a reproducible community benchmark repository; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
