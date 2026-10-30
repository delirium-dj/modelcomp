# Gemini 3.8 Flash Cyber — findings by GPT 6 Sol

- Source: Google DeepMind (Gemini 3.8 Flash Cyber)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Google's September 2026 defensive-cybersecurity fine-tune/variant of Gemini 3.8 Flash, focused on finding and patching vulnerabilities; separately deployed through the Fairwind trusted-defender program, **not** the general-purpose Gemini 3.8 Flash API ([Google launch](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/)).
- **Provider / access:** Restricted [Google DeepMind Fairwind Program](https://deepmind.google/fairwind-program/); Google does **not** publish a general-access API model string or publicly available Zen Free ID in the reviewed [announcement](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/). Project metadata `google/gemini-3-8-flash-cyber` is a catalog label, not proof of an exposed API route or Chat Completions support.
- **Release / knowledge:** September 2, 2026 ([Google](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/)); Cyber-specific knowledge cutoff not verified.
- **IDs:** Product name Gemini 3.8 Flash Cyber; exact first-party API ID **not verified**; do not attribute `gemini-3.8-flash` base benchmarks to this restricted variant.
- **Context window:** No separate public Cyber model card/API documentation verified ([Google announcement](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/)); the project metadata's inherited 1,048,576 / 65K figures remain **provisional**, not a confirmed Fairwind deployment limit.
- **Modalities:** Google describes cybersecurity code-repository analysis and text/code patches, with no verified Cyber-specific public modality matrix; do not import base Flash's audio/video/vision support without an API specification.
- **Pricing (as of 2026-10-13):** Public Fairwind API pricing **not verified**. Google's $0.75/$3.75 introductory rate in its [launch](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/) is explicitly for **base Gemini 3.8 Flash**, not an established Cyber price.
- **Architecture:** Restricted proprietary Flash-family specialist; size and variant training details undisclosed beyond Google's shared-core description ([Google](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/)).

### Raw benchmarks found

There are **two numeric model-specific public capability results** in the [Google Cyber section](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/), also indexed separately by [BenchLM](https://benchlm.ai/models/gemini-3-8-flash-cyber); the variant has no broad independent public suite. Google's cited Chrome/Wiz comparisons are different internal tasks and should not be used as agentic benchmark pass rates. Figures may require Fairwind access and a particular defensive harness.

Agent / tool use:

- [Google-reported CyberGym **86.2% pass@1**](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/) as attributed in [BenchLM](https://benchlm.ai/models/gemini-3-8-flash-cyber); Google additionally describes **>70%** vulnerability-discovery success on its **internal 20-language** benchmark, which is not independent.
- [CWE-Bench **47.2% pass@1**](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/) for patching on the external [Collinear CWE-Bench](https://cwe-bench.com/#leaderboard), Google-reported. Toolathlon, Terminal-Bench, OSWorld and Claw-Eval for Cyber: **no verified public score found**.

Reasoning / knowledge:

- GPQA, HLE, CritPt, AA Index for Cyber: **no verified public score found**. Reasoning score is an explicitly weak provisional inference from demonstrated multi-step cyber patching and the shared Flash core, not a measured general-reasoning result.

Coding:

- [CWE-Bench **47.2%** real-vulnerability patch pass@1 and CyberGym **86.2%** discovery pass@1](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/); no verified Cyber-specific SWE-bench, DeepSWE, LiveCodeBench or SciCode result. A 47.2% patch pass rate is not interchangeable with SWE-bench Verified.

Long context / multimodal:

- Cyber-specific maximum input/output and MRCR/full-window retrieval: **no verified public score found**; family capacity of ~1M is only a proxy pending Fairwind model docs. No verified Cyber vision/audio/video benchmark.

### Normalized scores (1–100)

- **Tool use: 78/100.** CyberGym 86.2% and CWE-Bench 47.2% show specialist multi-step use; absent public terminal/GUI/MCP scores cap generalization.
- **Reasoning: 70/100.** Provisional inference from patch discovery and shared core only; no variant-specific GPQA or HLE figure.
- **Context window: 80/100.** Family 1M/65K proxy is not a verified Fairwind limit; no full-window retrieval result, so reduced confidence.
- **Multimodal: 15/100.** Only text/code input/output verified for the Cyber deployment; base Flash's multimedia matrix must not be silently inherited.
- **Coding: 86/100.** Strong CyberGym 86.2% and CWE-Bench patching 47.2% for authorised defensive work; broader software engineering unmeasured.
- **Cost efficiency: 40/100.** Restricted access and no verified public Cyber price make cost comparison provisional; do not import the base tier's price.
- **Overall Score: 66/100.** (78 + 70 + 80 + 15 + 86) / 5 = 65.8, half-up 66; use for specialist vulnerability research where Fairwind access and the actual deployment matrix are established.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-13
- Method: Fresh Google primary release and Collinear-attributed patching result with sparse exact-variant evidence explicitly marked; normalized scores are provisional interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
