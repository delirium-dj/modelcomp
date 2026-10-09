# GPT-6 Sol — findings by ChatGPT 5.6 Luna

- Source: OpenAI (`gpt-6-sol`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** GPT-6 Sol is OpenAI’s mid-tier GPT-6 reasoning model for complex coding and agentic workflows. It is the `gpt-6-sol` API model, with configurable reasoning effort and a 1.05M-token context window. ([OpenAI Developers][1])
- **Provider / access:** OpenAI API `gpt-6-sol` via Responses API and Chat Completions; Responses is required for built-in tools and function calling with reasoning enabled. OpenCode Zen exposes `opencode/gpt-6-sol` through its Responses endpoint. No Free ID is documented on OpenCode Zen; Zen access is charged per request. ([OpenAI Developers][1])
- **Release / knowledge:** 2026-09-22 release; knowledge cutoff 2026-04-20. ([OpenAI][2])
- **IDs:** `openai/gpt-6-sol`; OpenCode Zen: `opencode/gpt-6-sol` — **no Free ID exists/documented on Zen**. ([OpenAI Developers][1])
- **Context window:** 1,050,000 tokens total; maximum output 128,000 tokens. OpenAI documents the 1,050,000-token window; OpenCode’s model catalog independently lists 1,050,000 context and 128,000 max output. ([OpenAI Developers][1])
- **Modalities:** text/image in; text out; reasoning yes; function/tool calls yes; structured outputs yes. Audio and video are not supported as native modalities. OpenAI documents web search, file search, code interpreter, hosted shell, computer use, MCP and other Responses tools. PDF is not listed by OpenAI as a native model modality, although OpenCode’s catalog exposes PDF/file handling for the model. ([OpenAI Developers][1])
- **Pricing (as of 2026-10-03):** standard short-context input **$2.00/M**, cached input **$0.20/M**, cache write **$2.50/M**, output **$10.00/M**. For prompts above 272K input tokens, OpenAI prices input/cache at 2× and output at 1.5×: **$4.00/$0.40/$5.00/$15.00 per M**. Paid API; OpenAI lists Free as unsupported. OpenCode Zen is paid-per-request and does not document a GPT-6 Sol free ID. ([OpenAI Developers][1])
- **Architecture:** proprietary; parameters/model size not disclosed; weights are not publicly available. Reasoning model with configurable `none`, `low`, `medium`, `high`, `xhigh`, and `max` effort. ([Artificial Analysis][3])

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **1509 Elo** (Artificial Analysis, GPT-6 Sol Max, GDPval-AA v2.1) ([Artificial Analysis][4])
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **48%** (Artificial Analysis, GPT-6 Sol Max, Humanity’s Last Exam) ([Artificial Analysis][4])
- LCR / MLCR: **84%** (Artificial Analysis, GPT-6 Sol Max, AA-LCR v1.1) ([Artificial Analysis][4])
- CritPt: **31%** (Artificial Analysis, GPT-6 Sol Max, CritPt) ([Artificial Analysis][4])
- Artificial Analysis Intelligence Index / BenchLM overall: **48 / #25 of 690** (Artificial Analysis Intelligence Index v4.3.2); **79.2 / #7 of 212** (BenchLM, evidence-limited/estimated profile) ([Artificial Analysis][3])
- Omniscience Accuracy / Hallucination Rate: **no verified public score found / no verified public score found** (Artificial Analysis publicly exposes the two measures but the current GPT-6 Sol page does not publish the underlying numeric values) ([Artificial Analysis][5])

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **58%** (Artificial Analysis, GPT-6 Sol Max, SciCode) ([Artificial Analysis][4])
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **DeepSWE v1.1 = 68.8%** (OpenAI, GPT-6 Sol at max effort; BenchLM independently records the same provider-exact result) ([OpenAI][2])

Long context:

- **no long-context retrieval reported** for MRCR / RULER / GraphWalks at 512K+; AA-LCR v1.1 reports **84%**, but its benchmark is a long-context reasoning evaluation rather than a verified 512K+ retrieval test. ([Artificial Analysis][4])

### Normalized scores (1-100)

- **Tool use: 77/100.** Evidence includes GDPval-AA v2.1 **1509 Elo**, AutomationBench-AA **62%**, and Terminal-Bench 4.0 **44%** for GPT-6 Sol Max; these indicate substantial agentic/tool capability, but the requested Terminal-Bench 2.1 and Tau3 scores are not verified, and the TB4 result remains well below the stated frontier threshold. ([Artificial Analysis][4])
- **Reasoning: 82/100.** HLE **48%**, AA-LCR **84%**, and CritPt **31%** provide strong evidence, but the Artificial Analysis Intelligence Index is **48**, below the user's 60+ frontier-index reference, and no verified GPQA Diamond score was found. ([Artificial Analysis][4])
- **Context window: 95/100.** Verified **1.05M tokens**, placing it in the ≥1M tier. The score is capped below 100 because no verified MRCR/RULER/GraphWalks retrieval result at 512K+ was found. ([OpenAI Developers][1])
- **Multimodal: 65/100.** Text plus image input and text output are verified; no native audio/video output or input is documented. Under the supplied methodology, image-in capability maps to the 60–70 band. ([OpenAI Developers][1])
- **Coding: 85/100.** DeepSWE v1.1 **68.8%** and SciCode **58%** establish strong coding-agent performance, while the absence of verified SWE-bench Verified/SWE-Pro, LiveCodeBench and Terminal-Bench 2.1 results keeps it below the supplied 90–100 frontier coding band. ([OpenAI][2])
- **Cost efficiency: 78/100.** Paid pricing is $2/$10 per 1M input/output tokens with $0.20 cached input; this sits between the supplied ~$1.25/$4.25 ≈88 and $3/$15 ≈60 reference points, so the normalized value is approximately 78/100. ([OpenAI Developers][1])
- **Overall Score: 80.4/100.** Mean of the five non-cost dimensions: `(77 + 82 + 95 + 65 + 85) / 5 = 80.4`; best fit: complex coding and agentic workflows where the 1.05M context window and lower Sol pricing are useful, with the strongest verified coding evidence coming from DeepSWE rather than SWE-bench. ([OpenAI][2])

---

### Multi-source deep-research addendum (2026-10-09)

- OpenAI’s current model documentation confirms the Sol family’s 1.05M context; independent tracking for the newer GPT-6.1 Sol provides a useful comparison, reporting near-Astra capability at much lower cost per task. This is evidence about the successor and is not transferred directly to GPT-6 Sol.
- Recalculation: retained existing score; successor evidence is informative but not exact-model evidence.
- Sources: https://developers.openai.com/api/docs/models/gpt-6.1-sol ; https://openai.com/index/introducing-gpt-6-1-sol/ ; https://themodelgap.com/models/gpt-6-1-sol

## Signature

- Provided by: **ChatGPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-03
- Method: public internet research using current OpenAI model documentation/release material, Artificial Analysis, BenchLM, and OpenCode Zen documentation; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

[1]: https://developers.openai.com/api/docs/models/gpt-6-sol?utm_source=chatgpt.com "GPT-6 Sol Model | OpenAI API"
[2]: https://openai.com/index/introducing-gpt-6-sol-and-luna/ "Introducing GPT-6 Sol and Luna | OpenAI"
[3]: https://artificialanalysis.ai/models/gpt-6-sol "GPT-6 Sol (max) - Intelligence, Performance & Price Analysis | Artificial Analysis"
[4]: https://artificialanalysis.ai/models/comparisons/gpt-6-sol-vs-gpt-5-6-sol?utm_source=chatgpt.com "GPT-6 Sol (Max) vs GPT-5.6 Sol (Max): Model Comparison | Artificial Analysis"
[5]: https://artificialanalysis.ai/evaluations/omniscience "AA-Omniscience: Knowledge and Hallucination Benchmark | Artificial Analysis"
