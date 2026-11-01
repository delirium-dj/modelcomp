# Gemini 2.5 Flash-Lite — findings by GPT 6 Sol

- Source: Google (`gemini-2.5-flash-lite`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash-Lite.
- **Short description:** Google's inexpensive multimodal model for high-volume extraction, classification and low-latency tasks. The September 2025 Flash-Lite preview is a **shut-down separate version**; neither its results nor those of the larger Gemini 2.5 Flash should be assigned to this stable ID ([Google exact-model reference](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-flash-lite)).
- **Provider / access:** Gemini API `gemini-2.5-flash-lite` via `models/gemini-2.5-flash-lite:generateContent`; Google also documents OpenAI-compatible Chat Completions. **Not deprecated**, but Google restricts 2.5-model API access to users who used them previously; new projects should use newer models ([Google model page](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-flash-lite)). A free API tier appears on the pricing table, subject to that access restriction, rate limits and free-tier data-use policy.
- **Release / knowledge:** Stable release July 2025 (Google lists latest update July; [Vals](https://www.vals.ai/models/google_gemini-2.5-flash-lite) gives July 22), January 2025 knowledge cutoff ([Google model page](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-flash-lite)). [Artificial Analysis](https://artificialanalysis.ai/models/gemini-2-5-flash-lite) instead dates the earlier non-thinking release June 17, reflecting different release/version conventions.
- **IDs:** Google `gemini-2.5-flash-lite`; `google/gemini-2.5-flash-lite` on third-party gateways; no open weights. The old `gemini-2.5-flash-lite-preview-09-2025` is not the stable ID.
- **Context window:** Google lists **1,048,576 input** and **65,536 output tokens** separately; not a promise of another 1M output ([exact-model page](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-flash-lite)).
- **Modalities:** Text, images, video, audio and PDF in; text out. Thinking is supported as a configuration, as are function calls, structured output, code execution and Search grounding; no native audio/image generation or Live API ([Google model page](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-flash-lite)).
- **Pricing (as of 2026-11-01):** Google [Standard rates](https://ai.google.dev/gemini-api/docs/pricing#gemini-2.5-flash-lite): free-tier input/output where eligible (content used to improve products); paid **$0.10 text/image/video input, $0.30 audio input, $0.40 output per million tokens**, cached text/image/video $0.01 (audio $0.03), plus cache-storage/grounding charges. Paid tier does not use content to improve products. Batch halves paid input/output rates; availability restriction still applies.
- **Architecture:** Proprietary; parameter counts undisclosed.

### Raw benchmarks found

- **Agent / tool use:** Independently run [WebForge-Bench browser tasks **35.0% overall**, L1 **58.5%**, L3 **12.6%**](https://huggingface.co/datasets/yuandaxia/WebForge) across 934 static-web tasks with screenshots and DOM. [ToolTrap **38.9%** (95% CI 29–49) over 30 tool-restraint cases × 3 repeats, **0%** on destructive-action gating](https://huggingface.co/datasets/ChihebLovesAi/tooltrap); this deliberately adversarial small suite is not an estimate of ordinary function-call success.
- **Reasoning / knowledge:** [Vals MedCode **27.11% ±1.84** and MedScribe **72.83% ±1.98**](https://www.vals.ai/models/google_gemini-2.5-flash-lite) are specialized clinical tasks in non-thinking configuration. [RuSlangX **59.46%**, 10th of 17 models](https://huggingface.co/datasets/PruhaNLP/RuSlangX) covers Russian slang, not broad multilingual or GPQA performance. No independently confirmed exact-stable-ID GPQA/HLE score found.
- **Coding:** WebForge's tool-use/browser-interaction task dimension reports **33.3%** ([WebForge](https://huggingface.co/datasets/yuandaxia/WebForge)), but that is **not** SWE-bench or code synthesis; no verified exact-stable-ID repository repair/LiveCodeBench result found. Google code execution capability does not itself measure coding ability.
- **Long context:** 1,048,576 input capacity, but no verified independent near-1M MRCR/RULER retrieval number for the stable ID. WebForge's per-task consumed tokens (including repeated calls) are not a single-request long-context result.
- **Multimodal:** Independently [VLADBench-reeval **59.29** question-weighted overall on 11,193 driving-scene questions, rank **14/14** featured, video input with thinking off](https://huggingface.co/datasets/Eventual-Inc/VLADBench-reeval). The authors flag bounding-box unit/axis bias against Gemini. [OmniGAIA **8.6%**, 9th/15, 360 visual+audio+web-search tasks](https://huggingface.co/datasets/RUC-NLPIR/OmniGAIA): an unusually difficult multimodal-agent task, not a pure perception percentage.

### Normalized scores (1–100)

- **Tool use: 60/100.** Native tools, WebForge 35.0 and ToolTrap 38.9, with especially poor high-risk gating.
- **Reasoning: 65/100.** Specialized MedCode 27.11 and slang 59.46 with no exact-stable-ID general reasoning test.
- **Context window: 85/100.** 1M input allowance and 64K output, discounted for lack of near-cap retrieval measurement.
- **Multimodal: 71/100.** Broad input support, VLADBench 59.29 and challenging OmniGAIA 8.6; only text output.
- **Coding: 55/100.** No defensible exact-ID coding benchmark; browser tool-use is a weak proxy.
- **Cost efficiency: 95/100.** $0.10/$0.40 paid text rate, caching and an eligible free tier, offset by restricted new-user access and separate audio/grounding fees.
- **Overall Score: 67/100.** Half-up mean (60 + 65 + 85 + 71 + 55) / 5 = 67.2; efficient multimodal extraction for existing API users, not a strong autonomous coder.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-11-01 UTC
- Method: Three fresh model/catalog, dataset and full-text searches; exact Google stable-ID specification and pricing checked against independently run Vals, WebForge, ToolTrap, VLADBench and OmniGAIA results. Preview and larger Flash results excluded. Scores are normalized judgments.
- Reference URLs:
  - [Google Gemini 2.5 Flash-Lite exact-model specification and access status](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-flash-lite)
  - [Google Gemini Developer API price table](https://ai.google.dev/gemini-api/docs/pricing#gemini-2.5-flash-lite)
  - [WebForge-Bench browser-agent methods and exact-model row](https://huggingface.co/datasets/yuandaxia/WebForge)
  - [ToolTrap independently run tool-restraint evaluation](https://huggingface.co/datasets/ChihebLovesAi/tooltrap)
  - [VLADBench independent multimodal evaluation and caveats](https://huggingface.co/datasets/Eventual-Inc/VLADBench-reeval)
  - [OmniGAIA visual/audio agent leaderboard](https://huggingface.co/datasets/RUC-NLPIR/OmniGAIA)
  - [Vals medical-task exact-model results](https://www.vals.ai/models/google_gemini-2.5-flash-lite)
- Future sources: add a new file next to this one using the same headings.
