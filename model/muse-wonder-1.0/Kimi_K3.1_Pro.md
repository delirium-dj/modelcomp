# Muse Wonder 1.0 — findings by Kimi K3.1 Pro

- Source: Meta (`muse-wonder-1.0`; OpenRouter `meta/muse-wonder`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder 1.0
- **Short description:** Meta's preview reasoning model for long-horizon agentic work, complex software engineering, computer use, and multimodal understanding. This report covers only standard Muse Wonder; Muse Wonder Full is a separate, higher-capability Muse Code variant.
- **Provider / access:** Meta Model API and Muse Code, with Responses, Chat Completions, and Messages API compatibility; also listed on OpenRouter. Standard Model API access is pay-as-you-go in Standard mode only. Wonder Full is not available through Model API, and selecting `max` effort on `muse-wonder-1.0` does not select it.
- **Release / knowledge:** Released 2026-10-12; knowledge cutoff not verified in the consulted public documentation. The model remains in preview and is not currently available in South Korea.
- **IDs:** Meta `muse-wonder-1.0`; OpenRouter `meta/muse-wonder`. No separate free Standard-mode API ID was verified.
- **Context window:** 1,048,576 tokens, verified in Meta's model catalog. No official universal maximum-output-token figure was verified; third-party 128K claims are therefore not treated as official.
- **Modalities:** Text, image, video, audio, and PDF input; text output. Reasoning is always enabled, with `minimal`, `low`, `medium`, `high`, `xhigh`, and `max` efforts; `none` returns HTTP 400. Tool calling, structured output, search grounding, computer use, and sub-agent orchestration are documented.
- **Pricing (as of 2026-11-06):** $4.00 input, $0.20 cached input, and $20.00 output per million tokens on Meta Model API; no long-context premium. Web-search grounding costs $2.50 per 1,000 queries. Documented team limits are 3,000 RPM and 4,000,000 TPM.
- **Architecture:** Proprietary; parameter count and detailed architecture are undisclosed. Standard mode does not use prompts, code, files, context, or responses to train Meta models; Contributor mode is unavailable for pay-as-you-go Wonder.

### Raw benchmarks found

Agent / tool use:

- Scale HiL-Bench: **79.67 ± 4.17**, ranked first on the fetched leaderboard (independent, common SWE-Agent/SQL tooling; measures selective escalation and task completion).
- AA-Briefcase: **1,659 Elo** and **61.2% rubric pass**, max effort (Artificial Analysis verified record dated 2026-10-29 via BenchmarkList).
- Harvey LAB-AA: **10.0** in Meta's 2026-10-12 launch table; a later verified Artificial Analysis record reports **23.1% all-pass**, **95.1% criteria pass**, and **117.04 turns/task**. These are different runs/versions and are not averaged.
- JobBench: **70.5% overall**, max effort (Meta self-reported, 2026-10-12).
- OSWorld V2.1: **72.6% partial**, max effort (Meta launch table).
- AutomationBench-AA: **39.1** in Meta's launch table versus **68.1% partial score** in the later verified Artificial Analysis record dated 2026-10-29; preserved separately because the records are not equivalent.
- Vals Finance Agent V2: **56.6%**, max effort (Meta launch table).
- HealthBench Professional: **60.5%**, max effort (Meta launch table).
- LifeSci Diamond: **9.1% strict pass**, **5 fully passed tasks**, **73.2 mean task score**, and **$4.15/task** (source record dated 2026-11-04 via BenchmarkList).
- Personal Superintelligence Index: **54.3**, Meta-internal launch evaluation; useful only with its internal status explicit.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **52** at launch on v4.3.2 versus **44** on the current v5.0.1 page. The composite changed substantially, so these values are not directly comparable or averaged.
- Humanity's Last Exam: **50.1%** (Artificial Analysis source record dated 2026-10-29 via BenchmarkList).
- CritPt: **28.3%**, max effort (Artificial Analysis verified record dated 2026-10-29 via BenchmarkList).
- AA-Omniscience: **25.1 net index points**, max effort (Artificial Analysis verified record dated 2026-10-29 via BenchmarkList).
- GDP.pdf: **30.8% strict pass**, max effort (Meta launch table).
- AIIQ Composite IQ: **130**, with abstract 107, mathematical 140, academic 135, programmatic 141, computer use 128, and reliability 125 (independent composite estimate, not an official IQ measurement).

Coding:

- DeepSWE 1.1: **78.8% pass@1**, max effort (Meta self-reported launch result; mini-SWE-agent/Datacurve harness as recorded by BenchmarkList).
- SWE-Marathon: **53.1% pass@1**, max effort (Meta self-reported launch result).
- Terminal-Bench 4.0-AA: **52.0% resolution**, max effort (Meta self-reported launch result).
- ProgramBench: **50.0% raw pass rate** and **50.0% almost resolved**, max effort (Meta self-reported launch result).
- SciCode: **60.3% accuracy** (source record dated 2026-10-29 via BenchmarkList).
- No exact-standard-model SWE-bench Verified or SWE-Pro score was verified. Wonder Full's stronger Terminal-Bench, DeepSWE, SWE-Marathon, and ProgramBench results are excluded.

Long context:

- AA-LCR: **80.7%** (Artificial Analysis source record dated 2026-10-29 via BenchmarkList).
- MemoryBench: **85.6%**, Meta-internal, using approximately 64K–100K-token conversations containing conflicting or updated facts. This does not establish retrieval quality across the full 1M window.

Multimodal:

- HieroglyphBench: **29.7% sign accuracy** (source record dated 2026-10-29 via BenchmarkList).
- GDP.pdf: **30.8% strict pass** provides professional-PDF evidence in addition to its reasoning value.
- The broad text/image/video/audio/PDF input surface is officially verified, but no exact-standard-model MMMU-Pro, video, or audio benchmark was found. Modality support is therefore not treated as proof of uniformly strong quality.

Operational measurements:

- Artificial Analysis reports **124 output tokens/s**, **21.98 s to first answer token**, **12.9 minutes per Intelligence Index task**, **113M output tokens across the Index**, and **$6.95 average cost per Index task** on the current page. These are time-sensitive endpoint and harness measurements, not permanent model specifications.

### Normalized scores (1–100)

> Overall = half-up mean of Tool use, Reasoning, Context window, Multimodal, and Coding. Cost efficiency is excluded.

- **Tool use: 93/100.** First-place HiL-Bench, strong AA-Briefcase and JobBench results, good computer-use evidence, and high legal criteria-pass performance support excellent agency; low strict all-pass rates and conflicting AutomationBench records cap it.
- **Reasoning: 89/100.** HLE 50.1%, strong long-horizon knowledge work, and solid scientific coding indicate frontier reasoning; CritPt 28.3%, Omniscience 25.1, and the lower current composite show substantial difficult-science and factual-reliability headroom.
- **Context window: 93/100.** A verified 1M window, AA-LCR 80.7%, and strong internal conflicting-fact memory results justify a high score; the absence of a full-window independent retrieval result and an official output cap prevents a higher rating.
- **Multimodal: 85/100.** Exceptional input breadth includes images, video, audio, and PDFs, but text-only output, sparse independent audio/video evaluations, HieroglyphBench 29.7%, and GDP.pdf 30.8% limit the evidence-based score.
- **Coding: 91/100.** DeepSWE 78.8%, SWE-Marathon 53.1%, SciCode 60.3%, and leading human-in-the-loop performance show strong long-horizon engineering; Terminal-Bench 52.0% and ProgramBench 50.0% leave clear execution gaps.
- **Cost efficiency: 62/100.** A 95% cache discount and no long-context surcharge help repeated-context workloads, but $4/$20 pricing, $6.95 per Index task, slow time to first answer, and high reasoning-token consumption make routine use expensive.
- **Overall Score: 90.2/100.** Half-up mean of 93, 89, 93, 85, and 91; best fit for long-running coding, document-heavy professional agents, and workflows that benefit from broad multimodal input and selective human escalation.

---

## Signature

- Provided by: **Kimi K3.1 Pro (Moonshot AI/kimi-k3.1-pro)** — 2026-11-06
- Method: Fresh public internet research across official Meta documentation and launch material, Artificial Analysis, BenchmarkList's source-labeled records, Scale's independent leaderboard, and OpenRouter; scores are normalized 1–100 interpretations, not official vendor scores. Exact-standard-model evidence is kept separate from Muse Wonder Full, and incompatible benchmark/index versions are preserved rather than blended.
- Reference URLs:
  - [Meta — Muse Wonder research announcement](https://research.meta.ai/blog/muse-wonder)
  - [Meta — Introducing Muse Wonder and Muse Wonder Full](https://about.fb.com/news/2026/10/introducing-muse-wonder-models/)
  - [Meta Model API — Models](https://dev.meta.ai/docs/models)
  - [Meta Model API — Reasoning](https://dev.meta.ai/docs/reasoning)
  - [Meta Model API — Pricing and rate limits](https://dev.meta.ai/docs/pricing-and-rate-limits)
  - [Artificial Analysis — Muse Wonder (max)](https://artificialanalysis.ai/models/muse-wonder)
  - [Artificial Analysis — Intelligence Index methodology](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index)
  - [BenchmarkList — Muse Wonder benchmark records](https://benchmarklist.com/models/meta-muse-wonder/)
  - [Scale Labs — HiL-Bench](https://labs.scale.com/leaderboard/hil)
  - [OpenRouter — Meta Muse Wonder](https://openrouter.ai/meta/muse-wonder)
  - [Fello AI — independent transcription of Meta's launch benchmark table](https://felloai.com/muse-wonder/)
- Future sources: add a new file next to this one using the same headings; do not overwrite this report.
