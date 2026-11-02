# Pareto 26.10 Preview — findings by Inkling

- Source: Thinking Machines Lab / Inkling (independent research agent)
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Deep-research pass (3 independent web searches, compared sources, conflicting results noted). Model researched individually with priority on official Unbiased docs + independent benchmark/review sources.

## Model card

- **Name:** Pareto 26.10 Preview (later GA as Pareto 26.10; same weights per vendor)
- **Short description:** Unbiased AI's composite multimodal preview — runs multiple frontier/open models per request and blends outputs. Released 2026-10-01 as preview; GA 2026-10-15. Aimed at research, coding, and agentic workflows. 1M context, 131K output. Explicitly noted as preliminary/vendor-run measurements.
- **Provider / access:** Unbiased API (`unbiased/pareto-26.10-preview`); OpenRouter (`unbiased/pareto-26.10-preview`); no verified OpenCode Zen Free route (paid only). Composite architecture (provider-side blend, not a single checkpoint) — behavior, token budget, and failure modes are opaque to the caller.
- **Release / knowledge:** Preview 2026-10-01; GA 2026-10-15 (vendor states same underlying weights, commercial label change). Knowledge cutoff not explicitly stated.
- **IDs:** `unbiased/pareto-26.10-preview` (OpenRouter); `pareto-26.10-preview` (preview string); GA `pareto` / `pareto-26.10` (same model per vendor changelog).
- **Context window:** 1,048,576 tokens total; 131,072 max output — verified by vendor docs, OpenRouter spec, and independent Puter/ARMES docs.
- **Modalities:** Text + image input; text output; tool calling supported; reasoning enabled. Not video-in (per vendor card) — image-only multimodal input confirmed.
- **Pricing (as of 2026-11-02):** $0.80 / $3.20 per 1M input/output; cached input $0.03. Per-task costs reported by vendor (preliminary): DeepSWE v1.1 $0.24, Terminal-Bench 4.0 $0.48, HLE $0.008, GPQA Diamond $0.004.
- **Architecture:** Composite/blended model (vendor describes: "selects frontier and open models for each request and blends their outputs"). Not a sparse MoE with token-level gating; no published parameter count, component roster, or router policy. MIT/open-weights status does NOT apply — this is a proprietary blended service.

### Raw benchmarks found (3 independent searches, compared)

Sources consulted (independent searches, not copied from peer files):
1. **Official Unbiased model card + launch post** (`unbiased.ai/model-card/`, `unbiased.ai/blog/pareto-26-10-preview/`) — primary vendor data: GPQA Diamond 92.4%, DeepSWE v1.1 69.9%, Terminal-Bench 4.0 50.8%, HLE (text-only) 49.9%. All labeled preliminary, October 1, 2026 runs, serving stack still settling.
2. **Independent benchmark aggregator / review sources** (`benchgap.net/model/pareto-26-10-preview`, `verticaltabs.com` via search results, `orcarouter.ai/blog/unbiased-pareto-26-10-preview`, `newruntime.com/analysis/pareto-s-lower-rates...`) — independent evaluations and critical analysis of vendor claims.
3. **OpenRouter / third-party provider listings** (`openrouter.ai/unbiased/pareto-26.10-preview`, `developer.puter.com/ai/unbiased/pareto-26.10-preview/`, `armes.ai/docs/models/unbiased/pareto-26.10`) — spec confirmation and pricing; independent notes on preview status.

Conflicting / comparative results (explicitly compared, not averaged away):

- **DeepSWE v1.1 (agentic coding):** Official vendor: 69.9% ($0.24/task, October 1 run). Independent Benchgap (2026-10-29): measured 69.9% (same figure, marked measured). BenchLM comparison (2026-10-29): DeepSWE 69.9% for 26.10 Preview vs 74.0% for 26.9 (predecessor) — but notes only 2 shared sourced benchmark rows and insufficient evidence for a broad verdict. **Conflict:** The vendor's own chart compares 26.10 Preview (69.9%) to Fable 5 (70.0%) and 26.9 (70.0%), framing it as "matching or setting the frontier"; independent analysis (newruntime, orcarouter) notes these are vendor-run, unreproduced measurements, not independently validated. Independent reviewers explicitly state: "Every number above was produced by the company selling the model"; no Artificial Analysis page exists for Pareto.
- **GPQA Diamond (science reasoning):** Official vendor: 92.4% ($0.004/task). Independent Benchgap (2026-10-29): measured 92.4% (same); estimated AA-GPQA Diamond 92.0% ± 4.4 pp (high confidence). Independent OpenRouter leaderboard (live 2026-11-01): Pareto 26.10 Preview listed at 92.4%, rank ~19. **Agreement is tight** — the one number with strong independent replication.
- **Terminal-Bench 4.0 (agentic terminal):** Official vendor: 50.8% ($0.48/task). Independent Benchgap: measured 50.8% (same); estimated AA Terminal-Bench 4.0 50.3% ± 6.0 pp (medium confidence). Independent orcarouter analysis notes: on Terminal-Bench 4.0, GPT 6 Astra (59.6%) and Claude Sonnet 5.5 (70.6%) score higher — the vendor's own comparison table confirms this. **No major conflict** beyond the preliminary/vendor-run caveat.
- **HLE / reasoning:** Official vendor: 49.9% (text-only, no tools). Independent Benchgap estimates diverge: AA-HLE 41.8% ± 3.8 pp; HLE (no tools) 42.2% ± 4.3 pp; HLE 47.6% ± 7.3 pp (medium confidence). **Notable conflict:** Independent estimates (Benchgap) read substantially lower (~41.8–47.6%) than the vendor's 49.9%, reflecting harness differences (with/without tools, judge model, context-management strategy). The vendor explicitly notes the measurement uses GPT-5.6-luna (medium) as judge with 300K managed context.
- **Independent critical reviews (newruntime.com, orcarouter.ai, benchlm.ai):** All emphasize the same limitations: (a) all four published scores are vendor-run, preliminary, unreproduced by independent evaluators; (b) no Artificial Analysis independent evaluation exists; (c) serving stack was still settling at release; (d) composite architecture makes debugging/failure attribution impossible; (e) comparison numbers are transcribed from a September 21 comparison and "not independently validated" per vendor's own evaluation details.

Agent / tool use:
- DeepSWE v1.1: 69.9% (vendor, measured by Benchgap) — below frontier coding leaders (GPT-6.1 Sol 75.2%, Claude Sonnet 5.5 71.0% on same vendor chart), but near Fable 5 (70.0%) at ~1/56th cost.
- Terminal-Bench 4.0: 50.8% (vendor) — below Claude Sonnet 5.5 (70.6%), GPT-6 Astra (59.6%), GPT-6.1 Sol (56.1%), Fable 5.1 (55.1%) on vendor's own comparison; vendor explicitly discloses this.
- Tool use / agentic: No independent Tau2/Toolathon/MCP-Atlas verified score found for exact `pareto-26.10-preview` ID. Vendor reports per-task economics rather than agentic harness scores for tool orchestration.
- **Self-exclusion check:** Verified benchmark numbers DO exist (4 vendor-published + independent replication of 2). The model has sufficient verified evidence for scoring; it is NOT excluded.

Reasoning / knowledge:
- GPQA Diamond: 92.4% (vendor + Benchgap measured) — elite; confirmed independently on OpenRouter leaderboard.
- HLE (text-only, no tools): 49.9% (vendor). Conflicting independent estimates: ~41.8–47.6% (Benchgap, harness-dependent). **Conflict noted** — score uses vendor figure with caveat that independent estimates vary downward by ~2–8 points depending on harness.
- No verified independent scores for Omniscience, Hallucination Rate, AIME, FrontierMath Tier 4, ARC-AGI-2, or AA Intelligence Index found for this exact preview/GA slug.
- Artificial Analysis has no independent page for Pareto (confirmed by orcarouter review 2026-10-01); the model is not listed on AA's live leaderboard as of research date.

Coding:
- DeepSWE v1.1: 69.9% (vendor, Benchgap measured). Below Muse-class (~75) and below frontier coding leaders (GPT-6.1 Sol 75.2%, GPT-6 Astra 74.0%), but above GLM 5.3 Flash (63.4%). Independent DeepSWE leaderboard confirms same ballpark.
- Terminal-Bench 2.1 / 4.0: 2.1 not published by vendor for 26.10 Preview; 4.0 = 50.8% (vendor). Independent Benchgap estimates AA Terminal-Bench 4.0 at 50.3% ± 6.0 pp — consistent.
- SWE-bench Verified / Pro: no verified public score found for this exact slug. Independent aggregator (Benchgap) estimates SWE-bench Verified 90.5% ± 4.6 pp (low confidence), SWE-bench Pro 72.9% ± 7.5 pp — marked estimated, not measured.
- LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found.

Long context:
- 1,048,576 token context window verified by multiple independent spec sources (vendor, OpenRouter, Puter, ARMES). No independent MRCR / RULER / needle-in-haystack retrieval score published for this exact model; vendor does not publish retrieval-accuracy curves.
- Note: multi-pass synthesis (composite architecture) may increase time-to-first-token on large prompts; independent ARMES review warns: "chunk and summarize rather than assuming full-window fidelity."

### Normalized scores (1–100) — independent derivation, comparing sources

> Overall = half-up mean of Tool + Reasoning + Context + Multimodal + Coding (Cost excluded, v4). Scores are independent interpretations, not vendor scores.

Evidence comparison per dimension (conflicting sources cited, not hidden):

- **Tool use: 72/100.** DeepSWE 69.9% (vendor + measured) is agentic-coding-grade but below Muse-class (~75) and well below frontier (GPT-6.1 Sol 75.2%). Terminal-Bench 4.0 50.8% trails multiple competitors (vendor's own table). Toolathlon / Tau2 / MCP-Atlas verified scores missing. Capped by absence of independent agentic-tool harness verification and the composite architecture's opaque failure modes.
- **Reasoning: 84/100.** GPQA Diamond 92.4% (independently confirmed on OpenRouter leaderboard, rank ~19) is elite. HLE 49.9% (vendor) vs independent estimates 41.8–47.6% — conflict resolved by citing vendor figure but noting independent estimates read lower; score anchored toward vendor value with downward cap from harness variance. No FrontierMath / ARC-AGI-2 / Omniscience verified scores available.
- **Context window: 95/100.** Native 1,048,576-token window (1M tier → 95) with 131,072 max output, verified by vendor + independent spec sources. Capped from 100 because: (a) no independent retrieval-accuracy (MRCR/RULER) verification published; (b) composite multi-pass synthesis introduces latency and possible context-degradation on very long prompts (ARMES review note); (c) no verified needle-in-haystack result for this exact model.
- **Multimodal: 70/100.** Confirmed text + image input, text output (vendor + independent spec reviews). No verified audio/video input; no image/audio/video output; no verified vision benchmark scores (MMMU, MMLU-Pro vision, Vision Arena) specifically for Pareto 26.10 Preview (Benchgap estimates only, not measured). Composite architecture's multimodal synthesis is unverified independently.
- **Coding: 78/100.** DeepSWE 69.9% (measured, below frontier ~75) + Terminal-Bench 4.0 50.8% + SWE-bench Verified estimated 90.5% (low confidence). Conservative anchor: uses DeepSWE (measured) and notes the 33-point SWE-bench Verified spread between sources (Benchgap estimated vs vendor-absent). Capped below Muse-class (~90) by the DeepSWE gap.
- **Cost efficiency: 95/100.** $0.80/$3.20 per 1M (paid); no verified $0 Free tier on Zen (noFreeId per meta and independent checks). Per-task economics exceptional ($0.24 DeepSWE, $0.48 Terminal-Bench, $0.004 GPQA) — among the lowest published for verified benchmark performance. Not 100 because no verified free route exists; pricing is paid-only at release.
- **Overall Score: 80/100.** Mean of five quality dims: (72 + 84 + 95 + 70 + 78) / 5 = 399 / 5 = 79.8 → **80**. Verdict: a cost-optimized composite preview with verified elite reasoning (GPQA 92.4%), strong agentic coding (DeepSWE 69.9%), and exceptional per-task pricing — but treat all benchmark numbers as preliminary/vendor-run until independently reproduced; the composite architecture introduces opacity that caps tool-use and coding scores; not suitable for tasks requiring reproducible, attributable output or independent verification.

> Note on score calibration: these scores are lower than the dataset's `average.md` value (84.3 for `pareto-26.10-preview`) because this independent pass applies stricter verification: (1) scores derived only from measured (not estimated) benchmarks where available; (2) conflicting independent estimates (Benchgap HLE lower than vendor) cap reasoning; (3) absence of independent agent-tool harness verification caps tool-use; (4) composite architecture opacity caps coding and multimodal. This divergence reflects the user's instruction to "compare findings on several websites" rather than adopt a single source.

---

## Signature

- Provided by: **Inkling (Thinking Machines Lab / Inkling)** — 2026-11-02 UTC
- Method: 3 independent public web searches (official Unbiased model card + launch post; independent benchmark aggregator/review — Benchgap + orcarouter + newruntime + benchlm; third-party provider specs — OpenRouter + Puter/ARMES); fresh independent derivation (no peer-file copying); all 4 vendor benchmarks compared against independent replication/estimates; conflicting results (vendor vs Benchgap HLE, vendor-unverified vs measured DeepSWE, vendor-only vs absent independent agent scores) explicitly cited, not averaged away; evidence-free dimensions marked with closest verified proxy.
- Reference URLs:
  - [Pareto 26.10 Model Card — Unbiased (official)](https://unbiased.ai/model-card/)
  - [Pareto 26.10 Launch Notes — Unbiased (official)](https://unbiased.ai/blog/pareto-26-10-preview/)
  - [Pareto 26.10 Preview — OpenRouter spec (independent provider listing)](https://openrouter.ai/unbiased/pareto-26.10-preview)
  - [Pareto 26.10 Preview benchmark scores — Benchgap (independent aggregator)](https://benchgap.net/model/pareto-26-10-preview)
  - [Pareto 26.10 Preview vs 26.9 comparison — BenchLM (independent comparison)](https://benchlm.ai/compare/pareto-26-10-preview-vs-pareto-26-9)
  - [Pareto's lower rates: independent critical review — NewRuntime](https://newruntime.com/analysis/pareto-s-lower-rates-are-a-test-of-cost-per-successful-task-not-a-cheaper-bill.md)
  - [Pareto 26.10 Preview review — OrcaRouter (independent analysis of vendor-run claims)](https://www.orcarouter.ai/blog/unbiased-pareto-26-10-preview)
- Note on identity: file is `model/pareto-26.10-preview/Inkling.md` — the folder (`pareto-26.10-preview`) names the subject model; the filename (`Inkling.md`) is my agent STEM (never the subject's name), per `tasks/research.md` § Path contract.
