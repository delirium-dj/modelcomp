# Gemini 4 Argon — findings by GPT-6 Luna

- Source: Google/DeepMind Gemini 4 Argon
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google's proprietary frontier reasoning model for agentic software engineering, enterprise knowledge work, science and cybersecurity. At the research date its API listing is live, but the product launched through staged access.
- **Provider / access:** Google Gemini Developer API (`models.generateContent`) and Google AI Studio; model code `gemini-4-argon`.
- **Release / knowledge:** Announced 2026-09-30; the DeepMind model card was published 2026-10-13. Google lists a March 2026 knowledge cutoff.
- **IDs:** Gemini API `gemini-4-argon`. Google states the API model is not available on the Free tier; no OpenCode Zen Free ID verified in this review.
- **Context window:** 1,048,576 combined input/output tokens; synchronous output defaults to at most 65,536, with long-decode support up to 1,048,576.
- **Modalities:** Text, image, video, audio and PDF input; text output. Function calling, search grounding, code execution and preview computer-use tools are supported.
- **Pricing (as of 2026-10-28):** Standard paid API $2/M input, $10/M output, $0.10/M cached input through 2026-11-30; scheduled to rise to $4/$20 and $0.20/M cache on 2026-12-01. No Free tier.
- **Architecture:** Sparse mixture-of-experts transformer; parameter count and weights are not disclosed.

### Raw benchmarks found

Agent / tool use:

- Vals Index: **68.9%**; AutomationBench: **51.3%**; Vals Finance Agent v2: **65.4%** (Google model card).
- Agent's Last Exam: **39.5%** pass rate; OSWorld 2.0 offline subset: **69.2%** partial score (Google model card).
- Terminal-Bench 4.0: **57.4%** (Google model card).
- Claw-Eval: **no verified public score found**.

Reasoning / knowledge:

- LABBench 2: **88.8%**; RiemannBench: **76.0%** (Google model card).
- GraphWalks BFS: **99.7% through 128K** and **84.2% from 256K to 1M** (Google model card).
- Artificial Analysis Intelligence Index: **50** on its current model page. BenchLM reports **52.6** in its Index field; these are separate trackers/snapshots, not a vendor benchmark result.

Coding:

- DeepSWE v1.1: **77.9%**; FrontierSWE v2: **55.0%**; Vibe Code Bench: **91.9%** (Google model card).
- Terminal-Bench Science 0.1: **57.6%** (Google model card).
- CWE-bench v1: **68.0%**, tied in Google's report (Google model card / CWE-bench leaderboard).

Multimodal:

- Chartography: **71.6%** and LVBench: **91.7%** (Google model card). These are distinct visual/chart and long-video tasks, not a general image-generation result.

Long context:

- GraphWalks BFS is **84.2%** in the 256K–1M band; the API supports a 1M unified context and long decode.

### Normalized scores (1–100)

- **Tool use: 85/100.** Vals Index 68.9%, AutomationBench 51.3%, Finance Agent v2 65.4%, and OSWorld 69.2% support strong tool/enterprise ability; Terminal-Bench 4.0 and Agent's Last Exam show remaining long-horizon headroom.
- **Reasoning: 88/100.** LABBench 88.8%, RiemannBench 76.0%, and the current AA Index 50 show broad high capability, but the composite is below the leaders and differs from BenchLM's 52.6 report.
- **Context window: 92/100.** The unified window is 1M and GraphWalks remains 84.2% at 256K–1M, but that is below the project's near-perfect retrieval threshold.
- **Multimodal: 95/100.** Official specs cover audio, video, images and PDF input; Chartography and LVBench provide task-level visual/video evidence. Output is text-only.
- **Coding: 90/100.** DeepSWE 77.9%, Vibe Code Bench 91.9%, FrontierSWE 55.0%, and Terminal-Bench 4.0 57.4% indicate a strong but not uniformly leading coding agent.
- **Cost efficiency: 70/100.** The introductory $2/$10 pricing is competitive for this capability class, but it is paid and scheduled to double on 2026-12-01.
- **Overall Score: 90/100.** (85 + 88 + 92 + 95 + 90) / 5 = 90; recommended for multimodal enterprise and coding agents where a 1M unified window is useful, with pricing and access limits considered.

---

## Evidence comparison and source notes

- Google's model card gives the most directly traceable exact-model table, including Vals Index 68.9%, DeepSWE 77.9%, 57.4% Terminal-Bench 4.0, and GraphWalks 84.2% at 256K–1M. Artificial Analysis reports an Intelligence Index of 50; BenchLM lists 52.6. Those composite values are not averaged because the pages use different tracker snapshots/aggregation, while the primary model card gives individual task scores.
- The September 30 launch post says the model first rolled out to trusted cyber defenders and was expanding gradually; later Google API docs list `gemini-4-argon` as available. Access is therefore not equivalent to a broadly available Free-tier model.
- Google lists a temporary price through November 30, 2026 and the higher rate effective December 1. The cost score is dated and should be revisited after that price change.

## Sources

- Google DeepMind, [Gemini 4 Argon model card](https://deepmind.google/models/model-cards/gemini-4-argon/) — architecture, release/card date, cutoff, modalities and primary evaluation table.
- Google, [Gemini 4 Argon API reference](https://ai.google.dev/gemini-api/docs/models/gemini-4-argon) — model code, input/output token limits, tools and availability.
- Google, [Gemini Developer API pricing](https://ai.google.dev/gemini-api/docs/pricing) — dated Standard, Batch, Flex and Free-tier pricing.
- Google, [Gemini 4 Argon launch announcement](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/) — rollout/access status, introductory price and selected public benchmark claims.
- Artificial Analysis, [Gemini 4 Argon (High)](https://artificialanalysis.ai/models/gemini-4-argon) — independent current Index, context, modality, speed and price cross-check.
- BenchLM, [Gemini 4 Argon benchmark scores](https://benchlm.ai/models/gemini-4-argon) — secondary tracker with individual benchmark citations and its own composite score.
- Bing searches performed 2026-10-28: [official card / API / release](https://www.bing.com/search?q=%22Gemini+4+Argon%22+official+model+card+benchmarks+release+API), [Artificial Analysis benchmark](https://www.bing.com/search?q=%22Gemini+4+Argon%22+Artificial+Analysis+benchmark), [independent evaluation / review](https://www.bing.com/search?q=%22Gemini+4+Argon%22+independent+benchmark+evaluation+review).

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna-fast)** — 2026-10-28
- Method: Three successful Bing searches followed by direct review of Google model/API documentation, Artificial Analysis and BenchLM. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
