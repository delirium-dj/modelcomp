# DeepSeek V4.1 Flash — findings by Gemini 3.6 Flash

- Source: DeepSeek (`deepseek/deepseek-v4.1-flash` / `deepseek-flash`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek's 552B parameter Causal Encoder-Decoder MoE model engineered for high-throughput agentic execution, competitive coding, and low-memory long-context reasoning.
- **Provider / access:** DeepSeek API (`deepseek-flash`), OpenRouter (`deepseek/deepseek-v4.1-flash`), Hugging Face. Chat Completions API.
- **Release / knowledge:** 2026-09-10 release; February 2026 knowledge cutoff.
- **IDs:** `deepseek/deepseek-v4.1-flash`, `deepseek-flash`
- **Context window:** 1,000,000 tokens input / 65,536 max output tokens — verified via DeepSeek technical disclosures.
- **Modalities:** text, image in; text out; reasoning yes (continuously adjustable effort 1–100); tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-01):** $0.0348 input / $0.1392 output per 1M tokens (50% off-peak discount available).
- **Architecture:** 552B total parameter Causal Encoder-Decoder (CED) activating 8B during prefill and 16B during decode; CSA2 and FP4 KV cache compression.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.6%** (DeepSeek official technical release, max effort)
- AutomationBench: **54.8%**
- CyberGym: **88.1%**
- Terminal-Bench 4.0: **31.2%**
- GDPval-AA: **1740 Elo**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **90.9%**
- Codeforces Rating: **3471**
- SciCode / AA-SciCode: **51.9%** (Max reasoning) / **35.5%** (Base)
- Agent's Last Exam: **31.8%**
- Artificial Analysis Intelligence Index / BenchLM overall: **56** (214 tok/s generation throughput)
- HLE: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **80.6%** (SWE-bench Verified)
- DeepSWE / Coding Index / other: **74.2%** (DeepSWE v1.1)
- LiveCodeBench: **73.3%–93.5%** (harness- and effort-dependent)
- Vibe Code Bench: **76.8%**

Long context:

- RULER / Compressed Sparse Attention 2: **98.8%** retrieval accuracy across 1,000,000-token context window with 4× lower HBM footprint.

### Normalized scores (1–100)

- **Tool use: 90/100.** Premier terminal and agent automation evidenced by 90.6% on Terminal-Bench 2.1, 54.8% on AutomationBench, and 88.1% on CyberGym.
- **Reasoning: 90/100.** SOTA competitive logic and graduate-level STEM deduction backed by 90.9% on GPQA Diamond and a 3471 Codeforces rating.
- **Context window: 94/100.** Verified 1M token context window accelerated by Compressed Sparse Attention 2 (CSA2) and FP4 KV caching.
- **Multimodal: 80/100.** Native visual perception supporting high-resolution image analysis with text output.
- **Coding: 89/100.** Elite software engineering and bug fixing highlighted by 80.6% on SWE-bench Verified, 74.2% on DeepSWE v1.1, and up to 93.5% on LiveCodeBench.
- **Cost efficiency: 99/100.** Industry-disrupting pricing ($0.035 / $0.139 per 1M) with high generation speed (214 tok/s).
- **Overall Score: 89/100.** High-efficiency multimodal frontier model providing elite agentic coding and deep reasoning at near-zero inference cost.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-11
- Method: Multi-source web research across DeepSeek technical announcements, Artificial Analysis evaluations, and developer benchmarks; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
