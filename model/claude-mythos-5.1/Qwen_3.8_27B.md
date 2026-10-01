Provided by: **Qwen 3.8 27B (cerebras/qwen-3.8-27b)** — 2026-09-24
Updated: **2026-10-01 (UTC)** — re-verified against Anthropic's official page; additional findings appended below; scores unchanged

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

## Additional findings (2026-10-01, re-research pass)

Re-verified against Anthropic's official page `anthropic.com/claude-fable-and-mythos-5-1` (fetched 2026-10-01). All prior numbers confirmed unchanged: TB 4.0 60.9% (Mythos 5.1 exact) / 55.8% (Fable 5.1), GDPval-AA v2 1,853, OSWorld 2.0 77.9% partial / 41.7% strict, HLE 60.9% no-tools / 65.0% with tools, AutomationBench 31.4%, CursorBench 3.2.0 73.4%, $10/$50 with $0.25/MTok cache reads. No score changes.

New information found this pass:

- **Terminal-Bench-Science 0.1 (agentic scientific research):** Fable 5.1 underlying model scores **52.6%** vs Fable 5 24.7%, Opus 5 29.0%, GPT-5.6 Sol 22.4% — more than doubles the predecessor on the hardest agentic-science harness. (Not in the original report; no Mythos-specific figure published, Fable 5.1 is the identical underlying model.)
- **Pricing mechanics confirmed:** the $0.25/MTok cache-read price is a **75% cut**; Anthropic estimates ~25% lower cost for typical workloads and up to ~45% for highly agentic workloads vs Fable 5 (measured over 4 weeks of August 2026 default-effort usage).
- **Access/availability (Mythos 5.1):** served through two trusted access programs — **Cyber Verification Program (CVP)** and **Life Sciences Verification Program (LSVP)** (built with the US government; first participants enrolled, expansion planned). Still US-organizations-only as of today. **Claude Security** (Anthropic's codebase vulnerability-scanning product) is now powered by Claude Mythos 5.1.
- **Enterprise Frontier Safeguards (EFS):** zero-data-retention-equivalent privacy (data stays in customer-controlled cloud infra), rolling out in phases starting this fall; until then eligible customers get Fable 5.1 with zero data retention.
- **Safeguard precision:** cyber safeguards now allow Fable 5.1 to find (but not exploit) software vulnerabilities; ~60% fewer false-positive interventions in Claude Code vs Fable 5's safeguards.
- **Anti-distillation:** new API accounts can no longer manually edit prior context while preserving Claude's thinking transcript (closes a documented distillation vector); rolling out gradually.
- **Scientific-research showcases (Mythos 5.1):** high-affinity protein binder designs ~10× better than Adaptyv Bio competition bests on 3 targets (EGFR, Nipah G, 15-PGDH), ~50% hit rate across 12 targets; sped up 7 open-source genomics/protein DL models up to 2.5× (30–60% GPU-cost savings on genome-wide analyses). Fable 5.1 produced a new high-resolution elevation map of a third of Venus from Magellan radar data (released CC-licensed on Zenodo).
- **EU AI Act:** models released after 2026-08-02 carry an invisible text watermark; detection API in private preview.

None of the above changes the dimension scores; it corroborates the Coding/Tool/Reasoning caps and refines the Cost note (batch discount unchanged, cache-read economics confirmed).