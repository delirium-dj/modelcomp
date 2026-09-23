# Gemini 3.8 Flash — findings by ChatGPT 5.6 Luna

- Source: Google (`gemini-3.8-flash`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google’s Flash-tier reasoning model, released for long-horizon software engineering, autonomous agents, and complex enterprise workflows. It supports configurable `low`, `medium`, and `high` thinking levels and is a proprietary model. ([Google AI for Developers][1])
- **Provider / access:** Google Gemini API, exact API ID `gemini-3.8-flash`; available through Google’s Gemini API and compatible Chat Completions-style provider interfaces. ([Google AI for Developers][2])
- **Release / knowledge:** 2026-09-02; knowledge cutoff: no verified public cutoff found. ([Google DeepMind][3])
- **IDs:** `google/gemini-3.8-flash`
- **Context window:** 1,048,576 input tokens / 65,536 maximum output tokens, verified from Google’s model documentation. ([Google AI for Developers][2])
- **Modalities:** Text, image, video, audio, and PDF input; text output; reasoning/thinking; function calling; code execution; computer use (Preview); file search; structured outputs; grounding/search tools. ([Google AI for Developers][2])
- **Pricing (as of 2026-09-23):** Free Tier: $0 input/output. Paid introductory pricing: $0.75 input / $3.75 output per 1M tokens through 2026-12-31; standard pricing becomes $1.50 / $7.50 from 2027-01-01. Cached input is $0.075/1M during the introductory period. Google’s free-tier data-use/privacy conditions should be checked separately before treating the free tier as equivalent to paid API usage. ([Google AI for Developers][4])
- **Architecture:** Proprietary; parameter count and architecture details such as MoE/active parameters have not been publicly disclosed. ([Artificial Analysis][5])

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.4%** (Google DeepMind model card; evaluation configuration includes multiple thinking levels; BenchmarkList reports rank 2/182). ([Google DeepMind][3])
- Tau3-Banking / Tau2-Bench: **45.8%** (Artificial Analysis / BenchmarkList; Pass@1; rank 9/174). ([BenchmarkList][6])
- GDPval-AA: **1545 Elo** (BenchmarkList; rank 21/340). ([BenchmarkList][6])
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **95.25%** (Artificial Analysis independent evaluation; high reasoning effort). ([UnifyBench][7])
- HLE: **54.9% HLE-Verified** (Google DeepMind model card; evaluation configuration documented by Google). Artificial Analysis independently reports **47.82%** for Humanity's Last Exam at high effort; these are different evaluation configurations and are not merged. ([Google DeepMind][3])
- LCR / MLCR: **81.3% AA-LCR v1.1** (Artificial Analysis, high effort). ([OpenRouter][8])
- CritPt: **18%** (Artificial Analysis, high effort). ([Artificial Analysis][9])
- Artificial Analysis Intelligence Index / BenchLM overall: **41 / #40 of 212** (Artificial Analysis, Gemini 3.8 Flash high). ([Artificial Analysis][5])
- Omniscience Accuracy / Hallucination Rate: **30 / no verified public hallucination-rate percentage found** (Artificial Analysis AA-Omniscience; the published metric is represented as a score rather than a percentage hallucination rate). ([Artificial Analysis][9])

Coding:

- SWE-bench Verified / SWE-Pro: **80.0%** (vals.ai tracked score reported by The Model Gap; SWE-bench Verified). ([The Model Gap][10])
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **54.4%** (BenchmarkList). ([BenchmarkList][6])
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **73.8% DeepSWE v1.1** (BenchmarkList). ([BenchmarkList][6])

Long context:

- **No verified MRCR/RULER retrieval score found.** The documented total context limit is **1,048,576 tokens**; Google explicitly documents the 1M-token input limit, but that should not be treated as equivalent to a measured 1M retrieval-accuracy result. ([Google AI for Developers][2])

### Normalized scores (1-100)

- **Tool use: 90/100.** Terminal-Bench 2.1 at 89.4% reaches the defined frontier region, while Tau3-Banking at 45.8% remains below the specified 50% frontier threshold. GDPval-AA at 1545 further supports strong agentic performance, but the mixed benchmark evidence caps the normalized score at 90 rather than pushing it into the highest range. ([Google DeepMind][3])
- **Reasoning: 95/100.** GPQA Diamond at 95.25% and HLE-Verified at 54.9% are strong frontier-level results; the independently measured AA Intelligence Index and benchmark configuration differences prevent treating every reasoning metric as uniformly frontier-leading. ([Google DeepMind][3])
- **Context window: 95/100.** Google verifies a 1,048,576-token input context, placing the model in the ≥1M tier. A 100 score is reserved by the methodology for verified ≥98% retrieval at 512K+; no such MRCR/RULER result was found. ([Google AI for Developers][2])
- **Multimodal: 95/100.** The model accepts text, images, video, audio, and PDF input and produces text output. Under the supplied methodology, audio/video input places it in the 90-100 multimodal range. ([Google AI for Developers][2])
- **Coding: 90/100.** Terminal-Bench 2.1 at 89.4%, DeepSWE v1.1 at 73.8%, SciCode at 54.4%, and SWE-bench Verified at 80.0% provide strong evidence for advanced coding capability. The absence of a verified LiveCodeBench result and DeepSWE remaining below the supplied 74% frontier threshold by a small margin caps the score at 90. ([BenchmarkList][6])
- **Cost efficiency: 90/100.** The evaluated paid tier is $0.75 input / $3.75 output per 1M tokens through 2026-12-31. This falls between the supplied ~$0.60/$2.20 and ~$1.25/$4.25 reference points, supporting approximately 90/100; the Google Free Tier is separately listed at $0 but should not be treated as equivalent to the paid tier for this normalization. ([Google AI for Developers][4])
- **Overall Score: 93.0/100.** Mean of the five non-cost dimensions: `(90 + 95 + 95 + 95 + 90) / 5 = 93.0`. Best fit: long-context multimodal reasoning, autonomous/tool-using workflows, and software engineering where the 1M-token context and strong Terminal-Bench/DeepSWE results are useful.

---

## Signature

- Provided by: **ChatGPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-09-23
- Method: **Fresh public internet research using official Google/Google DeepMind documentation plus Artificial Analysis and BenchmarkList, with independent benchmark sources used where necessary.** Scores are normalized 1-100 interpretations according to the supplied v4 methodology, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

Available next action: Create a downloadable PDF file here in this chat containing the findings and recommendations above

[1]: https://ai.google.dev/gemini-api/docs/latest-model?authuser=7&utm_source=chatgpt.com "What's new in Gemini 3.8 Flash  |  Gemini API  |  Google AI for Developers"
[2]: https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash?authuser=0&utm_source=chatgpt.com "Gemini 3.8 Flash  |  Gemini API  |  Google AI for Developers"
[3]: https://deepmind.google/models/model-cards/gemini-3-8-flash/?utm_source=chatgpt.com "Gemini 3.8 Flash - Model Card — Google DeepMind"
[4]: https://ai.google.dev/gemini-api/docs/pricing?authuser=451499271&utm_source=chatgpt.com "Gemini Developer API pricing  |  Gemini API  |  Google AI for Developers"
[5]: https://artificialanalysis.ai/models/gemini-3-8-flash?utm_source=chatgpt.com "Gemini 3.8 Flash (high) - Intelligence, Performance & Price Analysis | Artificial Analysis"
[6]: https://benchmarklist.com/models/google-gemini-3.8-flash/?utm_source=chatgpt.com "Gemini 3.8 Flash Benchmark Scores & Evals | BenchmarkList"
[7]: https://unifybench.ai/efforts?configuration=gemini-3.8-flash--effort-medium&evidence=documented&model=gemini-3.8-flash&utm_source=chatgpt.com "Gemini 3.8 Flash · Medium · effort benchmarks | UnifyBench"
[8]: https://openrouter.ai/google/gemini-3.8-flash?utm_source=chatgpt.com "Gemini 3.8 Flash - API Pricing & Benchmarks | OpenRouter"
[9]: https://artificialanalysis.ai/models/comparisons/gemini-3-8-flash-vs-gemini-3-8-flash-low?utm_source=chatgpt.com "Gemini 3.8 Flash (high) vs Gemini 3.8 Flash (low): Model Comparison | Artificial Analysis"
[10]: https://themodelgap.com/models/gemini-3-8-flash?utm_source=chatgpt.com "Gemini 3.8 Flash benchmarks & pricing · The Model Gap"
