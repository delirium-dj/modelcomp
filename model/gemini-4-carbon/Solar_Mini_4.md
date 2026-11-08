# Gemini 4 Carbon — findings by Solar_Mini_4

- Source: Google DeepMind (`gemini-4-carbon` via Gemini API), curated id `opencode/gemini-4-carbon`
- Date: 2026-11-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Carbon
- **Short description:** Google DeepMind's second Gemini 4 frontier model (announced October 28, 2026, two weeks after Gemini 4 Argon): the company's strongest model for cybersecurity defense and long-horizon agentic coding, ranking #1 on the Artificial Analysis Intelligence Index v5.0 (59 high). A gated launch — cyber defenders first via the Fairwind Program, then trusted partners, with general availability still unannounced.
- **Provider / access:** Google DeepMind / Gemini API. No public model ID and no model card yet (as of 2026-11-08); Carbon is not on the Gemini API models page or the Vertex AI model list, which still list Gemini 4 Argon as the Gemini 4 flagship. Initial access: a subset of cyber defenders in the Fairwind Program; then trusted partners; general availability promised "as soon as possible" with no date.
- **Release / knowledge:** Released 2026-10-28 (Google announcement, Koray Kavukcuoglu, SVP Google DeepMind and Chief AI Architect). Knowledge cutoff not disclosed. Gemini 4 Argon reached API general availability 2026-10-13, making Carbon the second Gemini 4 frontier model, four weeks later.
- **IDs:** No public Carbon ID as of 2026-11-08 — callers should keep `gemini-4-argon` in configuration until Google lists Carbon. Curated id: `opencode/gemini-4-carbon`.
- **Context window:** 1M tokens total (Artificial Analysis: 1,048,576), input and output. Google has not published an exact limit in the October 28 announcement.


- **Modalities:** Text, image, speech and video input; text output. Reasoning: extended thinking with high/medium/low effort levels (a non-reasoning variant may also exist). Reasoning-capable model.
- **Pricing (as of 2026-11-08):** Introductory $2 per 1M input / $10 per 1M output (cached input $0.10, 95% off) — the announced introductory price, stated to apply until an unstated end date; after the intro period, $4 per 1M input / $20 per 1M output. Blended (7:2:1 cache ratio) ≈ $2.94 per 1M; ≈ $7.76 per Intelligence Index task (Artificial Analysis). No free tier. Prices checked 2026-11-03 via Google Gemini API pricing page.
- **Architecture:** Proprietary, closed weights; Google has not disclosed parameter count or architecture. Secondary coverage describes it as built on Gemini 4 Argon (a sparse mixture-of-experts), with a knowledge cutoff not disclosed.

> Agent / tool use:
> - Artificial Analysis Intelligence Index v5.0.1 (composites: AA-Briefcase v1.1, AutomationBench-AA, Terminal-Bench 4.0, FrontierCode 2.0, AA-Omniscience v1.1, GDP.pdf, HLE-Diamond, CritPt v2 (Hard Subset), Terminal-Bench-Science 0.1): 59.4 points at high effort (#7/325, 98th percentile; #1 at release).
> - AutomationBench-AA 1.0.6: 77.8% high (#1/32).
> - AutomationBench 1.0.6 (Zapier held-out, 657 tasks, 50-step cap, strict completion): 53.88% high, 52.97% medium, 31.51% low.
> - Terminal-Bench 4.0 (mini-swe-agent, 3 repeats, best config): 65.152% (#4/41, 93rd percentile); cheating attempts reduced to 0.0% (Google).
> - Gray Swan IPI — Combined Attack Set, Transfer Only, No Computer Use: 0.0% attack success (@15) (#1/21).
> - AA-Briefcase v1.1: 1,610 combined Elo (#10/161).

> Reasoning / knowledge:
> - Humanity's Last Exam: 60.4% accuracy, no tools (#8/491, 99th percentile).
> - CritPt v2 (Hard Subset): 36.0% accuracy (#1/32, 100th percentile).
> - GDPval-AA v2.1 (Stirrup agent, 220 tasks, pairwise Elo): 1,732.68 Elo (#6/220).
> - AA-LCR (AA Long Context Reasoning): 79.3% (#62/425, 86th percentile).
> - Artificial Analysis Intelligence Index: 59 high / 58 medium.

> Coding / cybersecurity:
> - SEC-Bench Pro: 88.2% — #1/16 (Google, self-reported, no guardrails) — vulnerability finding.
> - CWE-bench v1: 71.0% — #1/12 (Google; BenchmarkList also 71.0%, #1/12).
> - Terminal-Bench-Science 0.1: 64.8% resolution rate (#2/12, 91st percentile).
> - SciCode: 64.2% (#2/312, 100th percentile).

> - FrontierCode 2.0: new_score=0.4 (#4/26, 88th percentile).
> - SWE-sweep: 9.6% (#1/12, 100th percentile).
> - No verified public GPQA Diamond, LiveCodeBench, or SWE-bench Verified rows found for this exact gated model.

> Long context:
> - AA-LCR 79.3% (86th percentile); RiemannBench 80.0% (#1/9); Chartography 72.5% (71st percentile, #14/46).


### Normalized scores (1–100)

- **Tool use: 86/100.** AutomationBench-AA 77.8% (#1/32) and AutomationBench 53.88% (high) plus Terminal-Bench 4.0 65.2% (#4/41) show strong agentic tool use in the cybersecurity/agentic niche; no verified public SWE-bench / LiveCodeBench row for this gated model caps the ceiling.
- **Reasoning: 92/100.** Humanity's Last Exam 60.4% (99th percentile, #8/491), CritPt 36.0% (#1/32), GDPval-AA 1,732.68 Elo (#6/220) and AA-LCR 79.3% mark frontier-level reasoning; the fully closed 1M window and the composite 59-60 Intelligence Index index keep it just below the very top band.
- **Context window: 95/100.** 1M-token window (Artificial Analysis: 1,048,576); RiemannBench 80.0% (#1/9) and AA-LCR 79.3% confirm long-context retrieval; Google has not published the exact limit.
- **Multimodal: 80/100.** Text, image, speech and video in with text out — image/video/speech input but no non-text output; Chartography 72.5% (#14/46).


- **Coding: 74/100.** SciCode 64.2% (#2/312) and SWE-sweep 9.6% (#1/12) plus Terminal-Bench 4.0 65.2% (#4/41) show solid coding for an agentic/cyber model; no verified public SWE-bench Verified or LiveCodeBench row for this gated model.
- **Cost efficiency: 72/100.** Standard $4/$20 per 1M is a premium tier (only the temporary intro $2/$10 plus a 95%-off cached-input rate make it cheaper); no free tier; not a cost leader.
- **Overall Score: 85/100.** (86 + 92 + 95 + 80 + 74) / 5 = 85.4 → 85. Best fit: a frontier-level cybersecurity and long-horizon agentic coding model that is not yet generally available.
## Signature

- Provided by: **Solar Mini 4 (solar-mini4)** — 2026-11-08
- Method: public internet research (Google DeepMind announcement Oct 28, 2026; Artificial Analysis model page; BenchmarkList; toolist.ai; NeuralTrust; llmleaderboard.com; The Model Gap); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google — Gemini 4 Carbon: our next frontier model](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/)
  - [Artificial Analysis — Gemini 4 Carbon (high)](https://artificialanalysis.ai/models/gemini-4-carbon)
  - [BenchmarkList — Gemini 4 Carbon](https://benchmarklist.com/models/google-gemini-4-carbon/)
  - [toolist.ai — Gemini 4 Carbon: price, context window and benchmarks](https://toolist.ai/models/gemini-4-carbon)
  - [NeuralTrust — Gemini 4 Carbon: Benchmarks & Pricing](https://neuraltrust.ai/blog/gemini-4-carbon)
  - [llmleaderboard.com — Gemini 4 Carbon](https://llmleaderboard.com/models/gemini-4-carbon)
  - [The Model Gap — Gemini 4 Carbon benchmarks & pricing](https://themodelgap.com/models/gemini-4-carbon)


