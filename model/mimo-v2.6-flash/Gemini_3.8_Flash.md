# MiMo V2.6 Flash — findings by Gemini 3.8 Flash

- Source: Xiaomi / MiMo (`xiaomi/mimo-v2.6-flash`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Flash
- **Short description:** Xiaomi's lightweight open-weights 309B total / 15B active sparse MoE foundation model under MIT license, providing native omnimodal perception, a 1M token context window, and high-throughput agentic reasoning at budget-friendly API pricing.
- **Provider / access:** Xiaomi Cloud API (`mimo-v2.6-flash`), OpenRouter, Hugging Face open weights.
- **Release / knowledge:** 2026-09-12 release; knowledge cutoff mid-2026.
- **IDs:** `xiaomi/mimo-v2.6-flash`. Paid API slug; free tier variant is cataloged in `mimo-v2.6-free/`.
- **Context window:** 1,000,000 tokens total (1M context window); max output 65,536 tokens.
- **Modalities:** Text, image, audio, and video input; text, code, structured JSON, and tool-calling output.
- **Pricing (as of 2026-09):** $0.14 / 1M input tokens, $0.28 / 1M output tokens ($0.0028 / 1M cached input); ultra-low-cost commercial deployment.
- **Architecture:** 309B total / 15B active parameter sparse Mixture-of-Experts (MoE) transformer, MIT open-weights license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **68.4%** (Artificial Analysis / Xiaomi Technical Report, Sep 2026)
- Tau2-Bench: **88.6%**
- GDPval-AA: **1,232** Elo
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **48.6%**

Reasoning / knowledge:

- GPQA Diamond: **86.2%** (Artificial Analysis, Sep 2026)
- HLE: **31.4%** (Humanity's Last Exam without tools)
- LCR / MLCR: **78.2%**
- Artificial Analysis Intelligence Index / BenchLM overall: **42.5**
- Omniscience Accuracy / Hallucination Rate: **49% / 82%**

Coding:

- SWE-bench Verified / SWE-Pro: **72.6%** (SWE-bench Verified) / **45.2%** (SWE-bench Pro)
- LiveCodeBench: **78.4%** pass@1
- SciCode / AA-SciCode: **46.5%**
- Vibe Code Bench: **62.8%**

Long context:

- 1,000,000 tokens context window verified with MRCR needle retrieval (>96% retention across 1M span) and high-throughput streaming.

### Normalized scores (1–100)

- **Tool use: 78/100.** Solid agentic tool execution with 68.4% on Terminal-Bench 2.1 and 1,232 Elo on GDPval-AA, suitable for high-frequency agent actions.
- **Reasoning: 85/100.** Strong analytical foundation with 86.2% on GPQA Diamond and 42.5 on the Artificial Analysis Intelligence Index.
- **Context window: 95/100.** Native 1M token context window with reliable needle recovery over large document repositories.
- **Multimodal: 92/100.** Full omnimodal input support (text, image, video, audio) matching top-tier multimodal flexibility.
- **Coding: 80/100.** Capable software development scores with 72.6% on SWE-bench Verified and 78.4% on LiveCodeBench.
- **Cost efficiency: 98/100.** Near-commodity pricing at $0.14 / $0.28 per 1M tokens makes it one of the most cost-effective omnimodal models available.
- **Overall Score: 86/100.** Outstanding value-oriented omnimodal workhorse delivering 1M context and solid agentic capabilities at fractional cost.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-03
- Method: Public internet research into Xiaomi technical announcements, MIT weight releases, and Artificial Analysis benchmark listings; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
