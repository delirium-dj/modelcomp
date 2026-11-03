# Gemini 3.8 Flash Cyber — findings by GPT-6 Luna

- Source: Google (`gemini-3.8-flash-cyber`)
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Google's post-trained Gemini 3.8 Flash variant specialized for defensive cybersecurity, including vulnerability discovery and patching. It is a distinct model ID, not the general Gemini 3.8 Flash endpoint.
- **Provider / access:** Google Cloud Gemini Enterprise Agent Platform. The model is generally available behind an allowlist; access is requested through Google's Fairwind Program or a Google account team. GenerateContent and Chat Completions APIs are supported. [Google Cloud model documentation](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/3-8-flash-cyber) · [Google launch post](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/)
- **Release / knowledge:** Announced September 2, 2026. No exact-model knowledge cutoff found. [Google launch post](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/)
- **IDs:** Google Cloud model ID `gemini-3.8-flash-cyber`. Google describes it as a cybersecurity post-training version of Gemini 3.8 Flash. [Google Cloud model documentation](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/3-8-flash-cyber)
- **Context window:** 1,048,576 tokens; maximum output 65,536 tokens. [Google Cloud model documentation](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/3-8-flash-cyber)
- **Modalities:** Text input and output; image, audio, and video input. Supports thinking, system instructions, structured output, context caching, and agentic video understanding. Function calling, code execution, search grounding, and URL context are not supported. [Google Cloud model documentation](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/3-8-flash-cyber)
- **Pricing (as of 2026-10-28):** No public per-token price for the Cyber endpoint was found. Google Cloud lists Standard PayGo, Flex PayGo, and Priority PayGo, but access is allowlisted; the $0.75/$3.75 price Google publishes for general Gemini 3.8 Flash is not assumed to apply to this distinct endpoint. [Google Cloud model documentation](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/3-8-flash-cyber) · [Google Cloud pricing](https://cloud.google.com/vertex-ai/generative-ai/pricing)
- **Architecture:** Proprietary; no parameter count or architecture details published. Google states the Cyber model shares foundational intelligence with Gemini 3.8 Flash and is specifically post-trained for cybersecurity. [Google Cloud model documentation](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/3-8-flash-cyber)

### Raw benchmarks found

> The exact endpoint is `gemini-3.8-flash-cyber`. Google's September 2026 model-evaluation document says Gemini results are pass@1 unless stated otherwise, generally use default API sampling settings, and describes the harness/source for each score. Its internal vulnerability benchmark is vendor-internal and is labeled accordingly.

Agent / tool use:

- CyberGym: **86.2% pass@1** on Google's internal version of the Antigravity harness, configured without cyber-specific specialization; the comparison models' scores came from model cards or public leaderboards and may use proprietary harnesses. [Google evaluation methodology and results](https://storage.googleapis.com/deepmind-media/gemini/gemini_3-8_flash_cyber_model_evaluation.pdf)
- Real-world vulnerability discovery: **71.0% recall** on Google's internal test of 1,200 recent, confirmed historical vulnerabilities across 20 programming languages; this is not an external benchmark. [Google evaluation methodology and results](https://storage.googleapis.com/deepmind-media/gemini/gemini_3-8_flash_cyber_model_evaluation.pdf)
- Function calling, general tool-use, Tau3-Banking, and Claw-Eval: **no verified exact-model result found**. The API documentation says function calling and code execution are unsupported. [Google Cloud model documentation](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/3-8-flash-cyber)

Reasoning / knowledge:

- No verified exact-model GPQA Diamond, HLE, MMLU-Pro, CritPt, or general Intelligence Index result found. The official evaluations are cybersecurity-specific and do not establish general reasoning performance.
- Gray Swan IPI: **6.0% ASR@15** (lower is better), using its combined attack set in transfer-only mode without computer use. Google says Gray Swan independently set up and ran this evaluation. [Google evaluation methodology and results](https://storage.googleapis.com/deepmind-media/gemini/gemini_3-8_flash_cyber_model_evaluation.pdf)

Coding / cybersecurity:

- CWE-Bench: **47.2% pass@1**. The benchmark owner, Collinear AI, computed the result using the Antigravity agent harness with high thinking; Google's launch post compares it with a leading frontier result of 47.8%. [Google evaluation methodology and results](https://storage.googleapis.com/deepmind-media/gemini/gemini_3-8_flash_cyber_model_evaluation.pdf) · [Google launch post](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/)
- Internal real-world vulnerability discovery: **71.0% recall** as above. Google's launch post additionally says the Chrome Security team produced **2.6× more correct vulnerability patches** than the best commercial models it compared; this is a vendor case-study claim, not a published benchmark score. [Google launch post](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/)
- General SWE-bench / SWE-Pro, DeepSWE, Terminal-Bench, LiveCodeBench, and SciCode: **no verified exact-model score found**.

Multimodal:

- The exact Google Cloud endpoint accepts text, image, audio, and video input and produces text. No exact-model multimodal benchmark such as MMMU-Pro was found in the sources reviewed. [Google Cloud model documentation](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/3-8-flash-cyber)

Long context:

- Google documents a **1M-token** context window. No exact-model MRCR/RULER or other 512K/1M retrieval score was found. [Google Cloud model documentation](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/3-8-flash-cyber)

### Normalized scores (1–100)

- **Tool use: 82/100.** CyberGym is 86.2% and internal real-world vulnerability recall is 71%, but these are specialized tasks; no general agent, business workflow, or function-calling benchmark is available.
- **Reasoning: 75/100.** The vulnerability-discovery and patching results indicate strong specialized reasoning, but there are no general reasoning/knowledge benchmarks to calibrate this dimension.
- **Context window: 95/100.** The published 1M-token limit meets the ≥1M tier, with no 512K/1M retrieval test to justify a higher score.
- **Multimodal: 90/100.** The endpoint accepts image, audio, and video in addition to text, with text output; no exact-model multimodal benchmark is available.
- **Coding: 88/100.** CWE-Bench is 47.2% pass@1, CyberGym is 86.2%, and Google's internal vulnerability-recall result is 71%; these support a high security-coding score but do not substitute for general SWE benchmarks.
- **Cost efficiency: 15/100.** Google provides no public per-token price for this allowlisted endpoint. This conservative score reflects unverified public pricing and restricted access, not a claim that its actual unit cost is high; the general Flash rate is not transferred.
- **Overall Score: 86/100.** Half-up mean of the five quality dimensions: (82 + 75 + 95 + 90 + 88) / 5 = 86.0. Best suited to vetted defensive-security work; do not generalize its cyber scores to ordinary coding or agent workflows, and obtain an authorized quote before evaluating cost.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Three independent web searches followed by source checks of Google's Cloud model documentation, launch announcement, and exact-model cybersecurity evaluation PDF, plus BenchLM and LLM Stats indexing. CyberGym harness provenance, CWE-Bench's independent evaluator, Gray Swan IPI methodology, and Google's internal 1,200-case result are distinguished. The base Gemini 3.8 Flash price and general benchmarks were not transferred. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
