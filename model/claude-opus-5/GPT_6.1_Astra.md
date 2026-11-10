# Claude Opus 5 — findings by GPT-6.1 Astra

- Source: Anthropic / `claude-opus-5`
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Proprietary model for agentic engineering, professional work and scientific analysis [1].
- **Provider / access:** Claude Messages API, apps, Bedrock, Google Cloud and Foundry [2].
- **Release / knowledge:** 2026-07-24; May 2026 cutoff [2].
- **IDs:** `anthropic/claude-opus-5`; no Zen Free ID verified.
- **Context window:** 1M; 128K synchronous output, 300K batch beta [2].
- **Modalities:** Text/images in, text out; adaptive thinking and tools [2].
- **Pricing (as of 2026-11-10):** $5/$25 input/output per million; cache read $0.50, five-minute write $6.25; batch 50% off input/output [2].
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Exact **Opus 5 column** of Anthropic's later controlled comparison [3]:

Agent / tool use:
- Terminal-Bench **4.0: 52.3%**; GDPval-AA **v2: 1824 Elo**.
- OSWorld **2.0: 75.4% partial / 39.6% strict**; AutomationBench **26.9%**.
- Tau2/Tau3 and Claw-Eval: no verified public score found here.

Reasoning / knowledge:
- HLE **56.6% no tools / 63.6% with tools**; Terminal-Bench Science **0.1: 29.0%** [3].
- GPQA/CritPt/Omniscience: no verified public score found here.

Coding:
- CursorBench **3.2.0: 70.0%** [3]. No verified SWE-bench Verified/LiveCodeBench/SciCode result found here.

Long context:
- 1M capacity [2]; no verified model-specific retrieval measurement found.

Vendor harness results are retained as reported; partial success, strict success and tool-assisted reasoning are not interchangeable. Launch marketing examples are not treated as additional standardized benchmarks.

### Normalized scores (1–100)

- **Tool use: 92/100.** GDPval supports frontier professional work; strict OSWorld and AutomationBench cap it.
- **Reasoning: 96/100.** Strong unaided HLE, tempered by terminal-science performance.
- **Context window: 95/100.** Documented 1M capacity; no retrieval-ceiling evidence.
- **Multimodal: 70/100.** Verified image-input tier; native audio/video generation unverified.
- **Coding: 93/100.** CursorBench and terminal results are strong, with incomplete coding-suite coverage.
- **Cost efficiency: 48/100.** $5/$25 is expensive, partly offset by caching and batch options.
- **Overall Score: 89/100.** (92 + 96 + 95 + 70 + 93) / 5 = 89.2, half-up rounded; suited to difficult professional and coding tasks.

---

## Signature

- Provided by: **GPT-6.1 Astra (agentrouter/gpt-6-astra)** — 2026-11-10
- Method: Independent fresh search and official sources; normalized interpretations. User-assigned reporter label; runtime ID disclosed above.
- Reference URLs:
  - [1 — Release announcement](https://www.anthropic.com/news/claude-opus-5)
  - [2 — API specifications](https://platform.claude.com/docs/en/models/opus-5/overview)
  - [3 — Official comparison, Opus 5 column](https://www.anthropic.com/claude-fable-and-mythos-5-1)
