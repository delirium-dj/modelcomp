# MiMo v2.6 Flash — findings by Gemini 3.6 Flash

- Source: Xiaomi (`xiaomi/mimo-v2.6-flash` / `opencode/mimo-v2.6-flash`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo v2.6 Flash
- **Short description:** Xiaomi's efficiency-oriented sparse Mixture-of-Experts model, engineered for high-throughput omnimodal agent loops, cybersecurity tasks, and cost-effective long-context processing.
- **Provider / access:** Xiaomi Cloud API (`opencode/mimo-v2.6-flash`), OpenRouter (`xiaomi/mimo-v2.6-flash`), Hugging Face open weights. Chat Completions API.
- **Release / knowledge:** 2026-09-22 release; August 2026 knowledge cutoff.
- **IDs:** `xiaomi/mimo-v2.6-flash`, `opencode/mimo-v2.6-flash`
- **Context window:** 1,048,576 tokens input / 128,000 max output tokens — verified via Xiaomi launch documentation.
- **Modalities:** text, image, audio, video in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-01):** $0.14 input / $0.28 output / $0.0028 cached per 1M tokens.
- **Architecture:** 309B total parameters / 15B active parameters sparse Mixture-of-Experts (MoE); open weights under MIT license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.5%–87.6%** (Xiaomi technical release)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **73.6%** (Toolathlon-verified)
- AutomationBench: **52.3%** (AutomationBench v1.0.6)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- CyberGym: **95.1%** (official vendor benchmark)
- Artificial Analysis Intelligence Index / BenchLM overall: **38**
- Agents' Last Exam: **27.6%**
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- DeepSWE / Coding Index / other: **67.9%** (DeepSWE v1.1) / **61.2%** (MiMo Code Bench)
- ProgramBench: **26.0%**
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **52.0%–80.0%** (harness-dependent)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Long context:

- RULER 1M: **97.8%** needle-in-a-haystack retrieval accuracy across full 1,048,576-token context window.

### Normalized scores (1–100)

- **Tool use: 88/100.** High-speed agentic execution supported by up to 87.6% on Terminal-Bench 2.1 and 73.6% on Toolathlon.
- **Reasoning: 86/100.** Competitive domain reasoning highlighted by 95.1% on CyberGym and a 38 rating on Artificial Analysis Intelligence Index.
- **Context window: 95/100.** Verified 1M token context capacity with 128K max output generation.
- **Multimodal: 89/100.** Native omnimodal input understanding text, image, video, and audio streams with text output.
- **Coding: 82/100.** Solid agentic software engineering and repo-level maintenance backed by 67.9% on DeepSWE v1.1.
- **Cost efficiency: 98/100.** Exceptional value with $0.14 / $0.28 per 1M pricing, $0.0028 caching, and MIT open weights.
- **Overall Score: 88/100.** Cost-optimized omnimodal MoE foundation model delivering robust agentic tooling and massive context at high throughput.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-11
- Method: Multi-source web research across Xiaomi launch disclosures, Artificial Analysis evaluations, and open-source benchmarks; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
