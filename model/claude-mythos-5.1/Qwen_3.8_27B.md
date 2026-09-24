Provided by: **Qwen 3.8 27B (cerebras/qwen-3.8-27b)** — 2026-09-24

# Claude Mythos 5.1 — findings by Qwen 3.8 27B

## Model Card

`source`: Anthropic (public API specs)

`name`: Claude Mythos 5.1

`short`: Invitation-only Project Glasswing Claude Mythos-class model that shares Claude Fable 5.1's capabilities, specifications, and pricing.

`provider/access`: Anthropic, AWS, and Google Cloud account teams, invitation-only through Project Glasswing.

`release/knowledge`: Released September 1, 2026; reliable knowledge cutoff June 2026; training data cutoff June 2026.

`ids`: `claude-mythos-5-1` (Claude API); no OpenCode Zen Free ID exists.

`context window`: 1M tokens.

`modalities`: Text and images in → text out; adaptive thinking (always on); agentic tool use yes; JSON mode no verified public spec; audio/video/PDF no verified public spec.

`pricing`: $10 / 1M input tokens; $50 / 1M output tokens; $0.25 / 1M cache reads; Batch API 50% off; paid invite-only access.

`architecture`: proprietary.

## Raw Benchmarks

### Agent / tool use

- Terminal-Bench 4.0 (Claude Mythos 5.1): 60.9% — Anthropic first-party comparison; BenchLM.
- Terminal-Bench 2.1 (Claude Mythos 5.1): no verified public score found.
- Tau3-Banking / Tau2-Bench (Claude Mythos 5.1): no verified public score found.
- GDPval-AA v2 Elo (Claude Fable 5.1 underlying model): 1,853 — Anthropic first-party comparison.
- Claw-Eval / ClawProBench (Claude Mythos 5.1): no verified public score found.
- Toolathon (Claude Mythos 5.1): no verified public score found.
- MCP-Atlas / SWE Atlas Codebase QnA (Claude Mythos 5.1): no verified public score found.
- OSWorld 2.0 (Claude Fable 5.1 underlying model, August 2026 task release): 77.9% partial / 41.7% strict — Anthropic first-party comparison.
- AutomationBench (Claude Fable 5.1 underlying model): 31.4% — Anthropic first-party comparison.

Note: Anthropic reports results for Claude Fable 5.1 unless Claude Mythos 5.1 is explicitly shown; where Fable 5.1 is shown, the gap reflects tasks where Fable 5.1 safeguards intervened.

### Reasoning & knowledge

- GPQA Diamond (Claude Mythos 5.1): no verified public score found.
- HLE (Claude Fable 5.1 underlying model): 60.9% without tools / 65.0% with tools — Anthropic first-party comparison.
- LCR / MLRCR (Claude Mythos 5.1): no verified public score found.
- CritPt (Claude Mythos 5.1): no verified public score found.
- AA Intelligence Index v5 / BenchLM overall (Claude Mythos 5.1): no verified public score found.
- Omniscience (Claude Mythos 5.1): no verified public score found.

### Coding

- SWE-bench Verified / SWE-bench Pro (Claude Mythos 5.1): no verified public score found.
- LiveCodeBench v5-7 (Claude Mythos 5.1): no verified public score found.
- SciCode / AA-SciCode (Claude Mythos 5.1): no verified public score found.
- Vibe Code Bench V1 (Claude Mythos 5.1): no verified public score found.
- DeepSWE (Claude Mythos 5.1): no verified public score found.
- AA Coding Index (Claude Mythos 5.1): no verified public score found.
- Terminal-Bench 4.0 (Claude Mythos 5.1): 60.9% — Anthropic first-party comparison; BenchLM.
- CursorBench 3.2.0 (Claude Fable 5.1 underlying model): 73.4% — Anthropic first-party comparison.

### Long-context

- MRCR long-context retrieval, RULER, GraphWalks: no verified public score found.
- Context window: 1M tokens and 128K max output — Anthropic API docs.

## Normalized Scorecard

| Dimension | Score | Notes |
| --- | ---: | --- |
| Tool | 90 | Strong GDPval-AA v2 Elo 1,853 and OSWorld 2.0 partial 77.9% for the Fable 5.1 underlying model, corroborated by exact Mythos 5.1 Terminal-Bench 4.0 60.9%; capped by missing Tau3-Banking, Claw-Eval, and public AA/BenchLM tool-tooling composites. |
| Reasoning | 90 | HLE 65.0% with tools for the Fable 5.1 underlying model; capped by no GPQA Diamond, AA Intelligence Index v5, or BenchLM overall public score. |
| Context | 97 | Verified 1M-token window and 128K max output with long-horizon agentic positioning; no public long-context retrieval score found. |
| Multimodal | 70 | Text and image input to text output verified; JSON mode, audio, video, and PDF handling not explicitly verified in the captured capabilities spec. |
| Coding | 93 | Terminal-Bench 4.0 60.9% for exact Mythos 5.1 and CursorBench 3.2.0 73.4% for Fable 5.1 underlying model, positioned for long-horizon agentic coding; capped by missing SWE-bench and AA Coding Index scores. |
| Cost efficiency | 30 | $10 / $50 per 1M tokens with $0.25 / 1M cache reads and 50% batch discount; paid invite-only access. |
| Overall | 88.0 | Scorecard rounded at the dimension level; cost excluded from Overall. |

### Normalized scores (1–100)

- **Tool use: 90/100.** GDPval-AA v2 Elo 1,853 and OSWorld 2.0 partial 77.9% with TB 4.0 60.9%; capped by missing Tau3/Claw composites.
- **Reasoning: 90/100.** HLE 65.0% with tools; capped by no GPQA/AA Index v5 rows.
- **Context window: 97/100.** Verified 1M window, 128K out; no retrieval score.
- **Multimodal: 70/100.** Text+image in, text out; JSON/audio/video/PDF unverified.
- **Coding: 93/100.** TB 4.0 60.9% and CursorBench 73.4%; capped by missing SWE-bench rows.
- **Cost efficiency: 30/100.** $10/$50 paid invite-only; 50% batch discount.
- **Overall Score: 88/100.** Mean of the five quality dims (90+90+97+70+93)/5 = 88.0.