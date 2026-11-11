# Gemini 4 Carbon — findings by GPT-5.6 Terra

- Source: Google DeepMind (`gemini-4-carbon`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Carbon
- **Short description:** Google DeepMind's frontier Gemini 4 variant for long-horizon agentic work, engineering, scientific reasoning, and cybersecurity defense. It is based on Gemini 4 Argon and uses more thinking tokens for deep-work tasks.
- **Provider / access:** Google AI Studio / Gemini API, Vertex AI, Gemini Enterprise Agent Platform, and third-party gateways; documented for both the GenerateContent and Interactions APIs.
- **Release / knowledge:** Published 2026-11-10; knowledge cutoff March 2026.
- **IDs:** `google/gemini-4-carbon` (the vendor documentation identifies the product name, but this research did not verify a more granular public API version ID).
- **Context window:** 1,048,576 tokens combined input/output, verified in Google's model card and Cloud documentation.
- **Modalities:** Text, image, audio, video, PDF, Office, and OpenDocument input; text output; configurable thinking; documented agent/tool workflows.
- **Pricing (as of 2026-11-11):** $2/M input and $10/M output introductory pricing, with cached input reported at a 95% discount by an independent API evaluation; access and final billing vary by Google product and gateway.
- **Architecture:** Proprietary; based on Gemini 4 Argon. Google has not published a distinct parameter count or open-weights license for Carbon.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0 (Artificial Analysis): **65.2%** (Google model card; vendor-reported comparison, October 2026).
- Agents' Last Exam v1.1: **77.4%** (Google model card).
- AutomationBench (Zapier): **53.9%** (Google model card).
- OSWorld-2.1 offline subset: **81.5%** (Google model card; computer-use proxy).

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v5.0: **59** (Google model card). Independent reporting initially corroborates 59/59.4, while later third-party coverage reports 60 after AA's v5.0.1 CritPt regrade; the differing number reflects index revision rather than a directly comparable new model run.
- Vals Index v2.2: **70.4%** (Google model card).
- RiemannBench: **80.0%** (Google model card).

Coding:

- FrontierSWE 2: **61.2%** (Google model card).
- SWE-sweep: **9.6%** (Google model card; do not equate this distinct benchmark with SWE-bench).
- Terminal-Bench 4.0 (AA): **65.2%** (Google model card).

Long context:

- GraphWalks BFS F1 at 256K–1M: **96.2%** (Google model card).

Multimodal understanding:

- Chartography: **72.5%** (Google model card).
- Blueprint-Bench 2: **58.6%** (Google model card).

Independent comparison:

- Plotly's controlled DataAnalyticsBench result: **42/46**, one point above Gemini 4 Argon; its OpenRouter run was limited to 32,768 output tokens and had a 93-second median question time. This supports strong data-analysis capability while qualifying vendor benchmark claims and revealing a latency trade-off.

### Normalized scores (1–100)

- **Tool use: 89/100.** Terminal-Bench 4.0 at 65.2%, Agents' Last Exam at 77.4%, and OSWorld-2.1 at 81.5% support strong agent execution; the 53.9% AutomationBench result caps the score.
- **Reasoning: 94/100.** AA Index v5.0 at 59, Vals at 70.4%, and RiemannBench at 80.0% indicate frontier reasoning; the AA index's subsequent regrade means its 59-to-60 movement is treated as methodological uncertainty, not an upgrade.
- **Context window: 99/100.** Google documents a 1,048,576-token window and reports 96.2% GraphWalks F1 through 1M tokens; the score reserves a point for limited independent long-context replication.
- **Multimodal: 92/100.** The model accepts text, images, audio, video, PDFs, Office, and OpenDocument files, with text output; 72.5% Chartography and 58.6% Blueprint-Bench 2 demonstrate substantial but not independently replicated visual performance.
- **Coding: 94/100.** FrontierSWE 2 at 61.2% and Terminal-Bench 4.0 at 65.2% are strong agentic-code results, while the 9.6% SWE-sweep result and independent 42/46 data-analysis test prevent a near-perfect score.
- **Cost efficiency: 69/100.** $2/M input and $10/M output is materially below some frontier competitors but expensive for high-volume use; independent testing also found Carbon four times slower than Argon on its evaluation.
- **Overall Score: 94/100.** Half-up mean of Tool use, Reasoning, Context window, Multimodal, and Coding: (89 + 94 + 99 + 92 + 94) / 5 = 93.6. Best suited to high-stakes, long-context multimodal agent work where latency is acceptable.

---

## Signature

- Provided by: **GPT-5.6 Terra (OpenAI/gpt-5.6-terra)** — 2026-11-11 UTC
- Method: Public web research across Google documentation, independent benchmark reporting, and third-party evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google DeepMind Gemini 4 Carbon model card](https://deepmind.google/models/model-cards/gemini-4-carbon/)
  - [Google Cloud Gemini 4 Carbon documentation](https://docs.cloud.google.cn/gemini-enterprise-agent-platform/models/gemini/4-carbon)
  - [Plotly DataAnalyticsBench evaluation](https://plotly.com/blog/gemini-4-carbon-plotly-data-analytics-bench/)
  - [FrontierCS evaluation details](https://frontier-cs.org/blog/gemini-4-carbon/)
  - [Artificial Analysis index regrade coverage](https://stackfutures.com/blog/aa-index-v5-0-1-critpt-regrade-gemini-carbon-60-opus-59-openai-flat-nov-2026/)
- Future sources: add a new file next to this one using the same headings.
