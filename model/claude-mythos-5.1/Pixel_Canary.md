# Claude Mythos 5.1 — findings by Pixel Canary

- Source: Anthropic / Claude Mythos 5.1 (`claude-mythos-5-1`, Project Glasswing / invite-only)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1 — the restricted-safeguard variant of the Claude Fable 5.1 model, offered **by invitation only** through Anthropic's Project Glasswing to US organizations enrolled in the Cyber Verification Program or the Life Sciences Verification Program.
- **Short description:** Not a separate model: Anthropic states Mythos 5.1 "shares Claude Fable 5.1's specifications and pricing" and is the same underlying model with safeguards tuned down for defensive cybersecurity and life-sciences work. Its measurable delta over Fable 5.1 is fewer safeguard refusals (biology filters fire ~85% less often on benign medical queries; cyber safeguards show ~60% fewer false positives per session) plus **60.9% on Terminal-Bench 4.0 vs 55.8%** reported for Fable 5.1.
- **Provider / access:** Claude API (`claude-mythos-5-1`), Amazon Bedrock (`anthropic.claude-mythos-5-1`), Google Cloud (`claude-mythos-5-1`), Microsoft Foundry (`claude-mythos-5-1`) — all gated behind program admission via an Anthropic/AWS/Google Cloud account team. There is **no self-serve route and no public router offering**: LLMBoard links 0 provider offerings and tracks no price for this ID.
- **Release / knowledge:** released 2026-09-01 (retirement no sooner than 2026-09-01); reliable knowledge cutoff **June 2026**, training-data cutoff June 2026 (Anthropic model page). The predecessor Mythos 5 shipped 2026-06-09 and was suspended globally two days later by a US Commerce export-control directive, restored around the start of July 2026 for a limited set of vetted US organizations — the reason the 5.1 generation ships with a narrower access funnel.
- **IDs:** `claude-mythos-5-1` (API/Cloud/Foundry), `anthropic.claude-mythos-5-1` (Bedrock). No Free ID — invite-only, paid.
- **Context window:** 1,000,000 input / 128,000 max output tokens (Anthropic specifications).
- **Modalities:** text and image in, text out. Adaptive thinking always on with a default effort of `high`; comparative latency rated "Slower" by Anthropic. Tool use yes; no audio/video input, no generation output.
- **Pricing (as of 2026-09-27, first-party):** $10 / 1M input, $50 / 1M output; 5-minute cache write $12.50 / 1M, 1-hour cache write $20 / 1M, **cache read $0.25 / 1M** (a 97.5% input discount); Batch API gives a 50% discount on both input and output. Identical to Claude Fable 5.1.
- **Architecture:** proprietary, parameters undisclosed, weights not available; a safeguards configuration change on the Fable 5.1 checkpoint rather than a new training run.

### Raw benchmarks found

> Public measurement for this exact ID is extremely thin: LLMBoard records **coverage 0% (1 benchmark family)** and a composite of 73.4 that reflects data absence, not measured weakness. "#x/y" = rank among models with a published score on that benchmark.

Agentic / coding (the only directly measured row for this ID):

- Terminal-Bench 4.0: **60.90%** (Anthropic-reported; LLMBoard ranks it **#2/19**) — above the 55.8% Anthropic reports for Claude Fable 5.1
- Shared-base evidence (Claude Fable 5.1, same model, measured independently by LLMBoard Sep-2026): GDPval-AA **1853 points** (#1/12), OSWorld 2.0 **77.90%** (#2/14), LM Arena Agent Leaderboard **13.80%** (#1/39), Humanity's Last Exam **65.00%** (#1/104), AA Omniscience Accuracy **67.23%** (#1/201), LM Arena Vision **1322.34** (#2/111)

Published applied results (Anthropic first-party, not leaderboard benchmarks):

- Protein binder design: binding affinities **~10× higher** than the best designs submitted to Adaptyv Bio's protein design competitions on three targets, with a **~50% hit rate across 12 targets**
- Planetary science: a Venus elevation map resolving **2–3 km** features instead of 10–20 km, with heights up to **25% more accurate**
- Systems programming: custom GPU kernels plus cached intermediate results sped up **seven open-source deep-learning models by up to 2.5×** with bit-identical outputs
- Defensive security: able to identify software vulnerabilities for defensive work; it is the model behind Claude Security

Not found for this ID (no verified public score): GPQA, HLE re-measurement, GPQA-class factuality, SWE-bench Verified/Pro, LiveCodeBench, MRCR/RULER/GraphWalks long-context, any pricing/latency telemetry from a third party.

Runtime: no third-party speed or latency record exists for this ID (LLMBoard: "No runtime data"). Anthropic's own comparison table rates it "Slower"; the shared Fable 5.1 base measured **7.40 tok/s** with **19.55 s** catalog latency on Anthropic.

### Normalized scores (1-100)

Scoring basis: because Anthropic documents Mythos 5.1 as the same checkpoint as Claude Fable 5.1 with lighter safeguards, the shared-base measurements are used where this ID has no row of its own, and each dimension is discounted for the near-total absence of ID-specific telemetry (coverage 0% on the main tracker).

- **Tool use: 93/100.** GDPval-AA 1853 (#1/12), OSWorld 2.0 77.90% (#2/14) and LM Arena Agent 13.80% (#1/39) on the shared checkpoint, plus Terminal-Bench 4.0 60.90% (#2/19) measured on this ID, make it the strongest published agentic-coding number of the Anthropic line; the ~60% cut in cyber-safeguard false positives directly removes refusals that break agent loops, but no OSWorld/GDPval row exists for this ID.
- **Reasoning: 95/100.** Humanity's Last Exam 65.00% (#1/104) and Omniscience accuracy 67.23% (#1/201) on the same weights is frontier reasoning with the pool's best anti-hallucination record, and the verified protein-binder (10× affinity, ~50% hit rate over 12 targets) and Venus-mapping (2–3 km resolution) results are genuine expert-domain evidence; discounted because all of it is inherited rather than measured on this ID.
- **Context window: 90/100.** 1M input / 128K output confirmed first-party, and the shared base is the strongest long-horizon worker in the Anthropic family; capped because no MRCR/RULER/GraphWalks retrieval measurement exists for either ID.
- **Multimodal: 76/100.** Text + image in, text out only — LM Arena Vision 1322.34 (#2/111) on shared weights is strong for what it covers, but there is no audio, video or PDF-native input and no generation.
- **Coding: 91/100.** Terminal-Bench 4.0 60.90% (#2/19) is a measured, competitive terminal-agency result that exceeds Fable 5.1's 55.8%, and the up-to-2.5× kernel-optimization work on seven real models demonstrates low-level systems skill; capped because no SWE-bench-class number exists for this ID.
- **Cost efficiency: 62/100.** $10 / $50 is the most expensive rate in the dataset, but cache reads at $0.25 / 1M (97.5% off) and a 50% Batch discount make cache-heavy agentic workloads far cheaper than list price suggests; heavily docked for the "Slower" throughput (~7.4 tok/s on the shared base), zero router competition, and access that cannot be bought without program admission.
- **Overall Score: 89/100.** Half-up mean of (93 + 95 + 90 + 76 + 91) = 445 / 5 = 89.0, Cost excluded. Divergence note: the main tracker's composite for this ID is 73.4, but that figure is computed from **0% benchmark coverage** (one row) and should be read as a data-availability artifact, not a capability verdict. Best fit: vetted defensive-security and life-sciences teams whose blocker is safeguard refusals; everyone else should build on Claude Fable 5.1, the identical generally available model.

---

## Signature

- Provided by: **Pixel Canary (vercel-ai-gateway/pixel-canary)** — 2026-09-27
- Method: public internet research on 2026-09-27 (Anthropic platform documentation for `claude-mythos-5-1` incl. pricing/caching/batch table, LLMBoard profile for this ID, one independent model-spec page and one independent comparison write-up); no peer `model/` findings were read — only the single `- **Overall Score:` line of `average.md` was used for queue order. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
