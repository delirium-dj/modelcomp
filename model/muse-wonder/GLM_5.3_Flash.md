# Muse Wonder — findings by GLM 5.3 Flash

- Source: Meta (`meta/muse-wonder`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder (bare vendor ID `meta/muse-wonder`; the versioned SKU `muse-wonder-1.0` is the same 2026-10-12 launch as listed on OpenCode Zen and Meta's own pricing page — this folder tracks the bare-ID entry, `muse-wonder-1.0/` tracks the versioned one; every figure below is labelled with the ID actually measured)
- **Short description:** Meta's frontier multimodal reasoning model for personal and professional agents — long-horizon coding, computer use, and complex document work. Combines "Active Memory" (carries relevant context across conversations) with "Active Focus" (keeps working through blockers toward a goal).
- **Provider / access:** Meta Model API, OpenAI-compatible chat completions, exact API ID `meta/muse-wonder`; also served by OpenRouter and major gateways under the same ID. OpenCode Zen lists the launch under `opencode/muse-wonder-1.0` (Responses API, `@ai-sdk/openai`).
- **Release / knowledge:** Released 2026-10-12; knowledge cutoff not published.
- **IDs:** `meta/muse-wonder` (bare, Meta Model API / OpenRouter); `muse-wonder-1.0` (versioned; Zen + Meta docs). No Free ID exists on Zen.
- **Context window:** 1,048,576 tokens total; max output 131,072 (OpenCode model data + models.dev provider table; YFarmX measured 1,048,576 read tokens directly on 2026-10-17; OpenRouter carries 943,718 output = 90% of the window where no max is declared).
- **Modalities:** Text, image, video, PDF, audio in; text out. Reasoning always-on (levels max/xhigh/high/medium/low/minimal, medium default — cannot be fully disabled per the measured identity record). Tool calling yes; structured output support varies by gateway.
- **Pricing (as of 2026-11-01):** $4.00 in / $20.00 out / $0.20 cached-read per 1M tokens (Meta standard mode and OpenCode Zen identical). No free tier; Contributor mode pricing "not available". Muse Wonder Full is the separate Muse Code subscriber tier (own folder).
- **Architecture:** Proprietary, closed weights; parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **49.49%** (Vals AI independent run at max effort, ± 2.20, rank 9/54 — used as primary for 4.0 entries; Artificial Analysis measures **52.0%**, the figure Meta's card quotes)
- JobBench: **70.5%** (self-reported at launch, rank 4/57, 95th percentile; field leader Claude Opus 4.7-under-Code 75.4%)
- AA-Briefcase (long-horizon knowledge work): **Elo 1,659** (rank 7/160, 96th percentile; rubric pass 61.2%)
- OSWorld 2.1 (computer use): **72.6%** (measured); OSWorld-Verified **82.9%** (estimated ± 8.1)
- Toolathlon-Verified: **79.2%** (estimated ± 1.3); Toolathlon **55.9%** (estimated)
- AA Agentic Index: **62.4%** (estimated ± 2.9); AA AutomationBench **39.1%** (measured)
- AA Tau3-Banking: **48.0%** (estimated ± 4.0)
- MCP Atlas: **100.0%** (estimated ± 7.7, low confidence — treat as provisional ceiling)
- SWE-Atlas Codebase QnA: **64.6%** (estimated)

Reasoning / knowledge:

- HLE (no tools): **50.1%** (measured by Artificial Analysis at max effort, Intelligence Index v4.3.2 run) — the strongest verified reasoning figure for this model
- Artificial Analysis Intelligence Index: **43.3%** (measured)
- GPQA Diamond: no verified public score found (not on Meta's card; AA no longer runs it; third-party estimates only, 92–95% — provisional)
- MMLU-Pro: **86.2%** (estimated ± 4.1, high confidence — provisional)
- ARC-AGI-2: **86.4%** (estimated ± 14.6, low confidence — provisional); ARC-AGI-1 **81.4%** (estimated)
- CritPt (research-level physics): **28.3%** (measured, rank 10/32)
- AA-Omniscience Accuracy: **38.0%** (measured)
- SimpleQA: **42.8%** (estimated)

Coding:

- DeepSWE 1.1 (mini-SWE-agent harness, Datacurve): **78.8%** (launch scorecard figure, rank 2/61, 98th percentile; Meta reports Datacurve third-party runs for Muse Wonder/Full)
- SWE-Marathon: **53.1%** (measured); ProgramBench **50.0%** (measured)
- AA-SciCode: **60.3%** (measured); SciCode **59.8%** (estimated)
- AA Coding Index: **77.1%** (estimated ± 2.4)
- Vals LiveCodeBench: **77.4%** (estimated); LiveCodeBench v6 ceiling estimate **100.0%** (± 4.9 — treat as saturated, provisional)
- CursorBench 3.1: **69.4%** (estimated ± 3.4); CursorBench 4.0 **42.2%** (estimated)
- SWE-bench Verified: no vendor-verified public score found (Meta reports DeepSWE/SWE-Marathon/ProgramBench instead; third-party "estimates" only — not counted)

Long context:

- AA-LCR (long-context reasoning): **80.7%** (measured, rank 41/423, 91st percentile)
- MRCRv2: **85.8%** (estimated, low confidence); GraphWalks BFS 256K–1M **71.9%** (estimated)
- MMLongBench-Doc: **61.4%** (estimated)

Vision / multimodal:

- HieroglyphBench (vision sign transcription): **29.7%** (measured, rank 11/34)
- MMMU-Pro: no verified public score found (independent evaluation pending)

### Normalized scores (1–100)

- **Tool use: 78/100.** Elite long-horizon agentic percentile (AA-Briefcase 96th, JobBench 95th, OSWorld 2.1 72.6 measured) capped by mid-pack Terminal-Bench 4.0 (~50–52% across Vals/AA) and a weak Tau3 (48).
- **Reasoning: 88/100.** HLE no-tools 50.1% measured at max effort is frontier-grade; ARC-AGI-2/MMLU-Pro estimates agree (~86); capped by CritPt 28.3 (mid-pack) and AAII 43.3.
- **Context window: 90/100.** Verified 1,048,576-token window (largest tier) with healthy retrieval evidence (AA-LCR 80.7 measured at 91st percentile, MRCRv2 ~86); max output 131K.
- **Multimodal: 84/100.** Full omni-modal input (text/image/video/PDF/audio) with reasoning + tools, but only mid vision-eval evidence so far (HieroglyphBench 29.7, MMMU-Pro pending).
- **Coding: 84/100.** DeepSWE 1.1 78.8% at 98th percentile anchors it; AA Coding Index ~77 and Vals LCB ~77 agree; capped by measured SWE-Marathon 53.1 and ProgramBench 50.0.
- **Cost efficiency: 40/100.** $4.00/$20.00 per 1M (cached $0.20) — premium frontier pricing, same tier as Claude Opus 5.5; no free lane on Zen.
- **Overall Score: 85/100.** Mean of the five quality dims (78+88+90+84+84)/5 = 84.8 → 85. Best fit: long-horizon professional agents and document-heavy work at frontier quality, priced accordingly.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-01
- Method: Public internet research (vendor announcement, Meta API docs, OpenCode Zen catalog, independent benchmark boards); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Muse Wonder and Muse Wonder Full — About Meta](https://about.fb.com/news/2026/10/introducing-muse-wonder-models/)
  - [Meta Model API — Pricing and rate limits](https://dev.meta.ai/docs/pricing-rate-limits)
  - [OpenCode Console — verified model list & pricing](https://opencode.ai/v2/docs/console/models/)
  - [benchgap — Muse Wonder benchmark board](https://benchgap.net/model/muse-wonder)
  - [AI Model Timeline — Muse Wonder methodology notes (Vals TB4 primary, AA HLE measured)](https://ai-model-timeline.org/models/meta-muse-wonder)
  - [BenchmarkList — Muse Wonder ranked evals (JobBench, AA-LCR, CritPt, DeepSWE)](https://benchmarklist.com/models/meta-muse-wonder/)
  - [models.opencode.ai — Muse Wonder 1.0 provider/spec table (1M context, 131K output)](https://models.opencode.ai/models/meta/muse-wonder-1.0/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
