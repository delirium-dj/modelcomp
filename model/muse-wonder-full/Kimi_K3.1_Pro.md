# Muse Wonder Full — findings by Kimi K3.1 Pro

- Source: Meta (`muse-wonder-full-1.0`)
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full
- **Short description:** Meta's higher-capability Muse Wonder variant for frontier coding, long-running agents, and computer use. It is a distinct, subscription-only product tier; selecting `max` reasoning on standard Muse Wonder does not select Muse Wonder Full.
- **Provider / access:** Muse Code only, on Power Usage and Maximum Usage plans. Meta explicitly lists Full as unavailable on the pay-as-you-go Model API; standard Muse Wonder separately supports Responses, Chat Completions, and Messages APIs.
- **Release / knowledge:** Released 2026-10-12; no verified public knowledge cutoff found in the cited sources.
- **IDs:** Meta's pricing table lists `muse-wonder-full-1.0`, but there is no public Model API route for Full. Standard Muse Wonder's `muse-wonder-1.0` is a different model and must not be substituted. No free OpenCode Zen ID was verified.
- **Context window:** 1M tokens on the Muse Wonder Full product page; the family documentation gives 1,048,576 tokens. No separately verified maximum output-token limit was found.
- **Modalities:** Text, image, video, audio/speech, and PDF input; text output; reasoning with efforts from `minimal` to `max`; tool calling, structured output, search grounding, parallel tools, sub-agents, and computer use are documented for the Muse Wonder family.
- **Pricing (as of 2026-11-03):** No public per-token API price. Muse Code Power Usage is $50/month and Maximum Usage is $200/month. Standard mode does not use customer content for training; Contributor mode is on by default for subscribers, grants more usage, and allows Meta to use content for training unless disabled.
- **Architecture:** Proprietary; parameter count and weights are undisclosed. Meta says the series builds on larger base models, pretraining and reinforcement learning, and training at its gigawatt-scale Prometheus data center.

### Raw benchmarks found

Agent / tool use:

- AA-Briefcase: **1,729 Elo; 61.3% rubric pass rate**, max effort (Artificial Analysis verified, 2026-10-29).
- JobBench: **75.3% overall**, max effort (Meta launch table; second of 57 in BenchmarkList's record).
- OSWorld 2.1: **78.4% partial / 39.4% binary**, max effort (Meta launch table).
- AutomationBench-AA: **45.4% in Meta's launch table**; a later Artificial Analysis verified run reports **71.3% partial at max** (2026-10-29). Different dated records are preserved rather than averaged.
- Harvey LAB-AA: **13.1% in Meta's launch table**; a later Artificial Analysis v1.1 verified run reports **25.6% hallucination-gated all-pass, 95.5% criteria pass, 99.05 turns/task**. Benchmark version and date differ.
- MemoryBench: **85.5%**, max effort (Meta launch table).

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **56 at max in Meta's 2026-10-12 launch table**. Artificial Analysis' current independently maintained v5.0.1 page reports **50**, with 110M output tokens across the index; these are different dated runs/composite versions.
- Humanity's Last Exam: **53.6%** (source-linked 2026-10-29 record).
- CritPt: **32.9% at max** (Artificial Analysis verified; research-level physics).
- AA-Omniscience Index: **30.6 at max** (Artificial Analysis verified, 2026-10-29).
- HealthBench Professional: **62.3% at max** (Meta launch table).
- No separately verified public GPQA Diamond score was found in the cited sources.

Coding:

- DeepSWE 1.1: **79.0% Pass@1 at max** (Meta launch table; mini-SWE-agent/Datacurve harness described by BenchmarkList; first of 61 in that record).
- SWE-Marathon: **57.5% Pass@1 at xhigh** (Meta launch table; 20 multi-hour tasks; first of 37 in that record).
- Terminal-Bench 4.0-AA: **57.1% at max** (Meta launch table).
- ProgramBench: **59.0% raw pass / almost resolved at max** (Meta launch table).
- SciCode: **62.6%** (source-linked 2026-10-29 record).
- No separately verified public SWE-bench Verified score was found; no value is inferred.

Long context:

- AA-LCR: **83.7%** (source-linked 2026-10-29 record).
- MemoryBench: **85.5% at max** (Meta launch table), providing a separate memory/context measure rather than a needle-retrieval substitute.
- The 1M window is verified, but no public MRCR, RULER, or Graphwalks series was found for Muse Wonder Full.

Multimodal:

- GDP.pdf: **33.2% strict pass at max** (Meta launch table; professional PDF reasoning).
- Artificial Analysis verifies text, image, speech, and video input with text output; Meta's family documentation additionally lists PDF input.
- No verified public MMMU-Pro, MathVision, CharXiv, or LVBench score was found for this exact Full variant; broad modality support is not treated as a benchmark score.

### Normalized scores (1–100)

- **Tool use: 96/100.** AA-Briefcase 1,729 Elo, JobBench 75.3%, strong OSWorld results, and later AutomationBench/Harvey runs demonstrate frontier agentic work; conflicting launch versus later results and subscription-only access cap the score.
- **Reasoning: 93/100.** CritPt 32.9% is excellent and HLE 53.6% plus AA Index 50–56 is strong, but factual reliability and the lack of a verified GPQA result prevent a higher rating.
- **Context window: 94/100.** The verified 1M window, AA-LCR 83.7%, and MemoryBench 85.5% indicate strong long-context performance; absent MRCR/RULER evidence and an unreported output cap prevent a higher score.
- **Multimodal: 87/100.** Unusually broad text/image/audio/video/PDF input is verified, but only GDP.pdf 33.2% supplies direct multimodal benchmark evidence and no MMMU-Pro or video-understanding result was found.
- **Coding: 96/100.** DeepSWE 79.0% and SWE-Marathon 57.5% lead their cited fields, with solid Terminal-Bench and SciCode results; ProgramBench 59.0% trails the strongest models and no SWE-bench Verified result was found.
- **Cost efficiency: 66/100.** The $50/$200 monthly plans can be economical for intensive coding, but usage limits, lack of per-token API access, and Contributor-mode privacy tradeoffs reduce flexibility and comparability.
- **Overall Score: 93.2/100.** Half-up mean of 96, 93, 94, 87, and 96; best fit for Muse Code users running long-horizon software engineering, research, and computer-use agents.

---

## Signature

- Provided by: **Kimi K3.1 Pro (Moonshot AI/kimi-k3.1-pro)** — 2026-11-03
- Method: Independent public internet research using Meta's product documentation and launch material, Artificial Analysis, and source-linked BenchmarkList records; scores are normalized 1–100 interpretations, not official vendor scores. Conflicting launch and later independent results are retained with dates and configurations.
- Reference URLs:
  - [Meta — Muse Wonder and Muse Wonder Full](https://dev.meta.ai/models/muse-wonder)
  - [Meta Model API — Models and variant availability](https://dev.meta.ai/docs/models)
  - [Meta Research — Introducing Muse Wonder](https://research.meta.ai/blog/introducing-muse-wonder/)
  - [Artificial Analysis — Muse Wonder Full](https://artificialanalysis.ai/models/muse-wonder-full)
  - [BenchmarkList — Muse Wonder Full source-linked evaluations](https://benchmarklist.com/models/meta-muse-wonder-full/)
- Future sources: add a new file next to this one using the same headings.
