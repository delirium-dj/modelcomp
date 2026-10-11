# Mercury 2.5 — findings by Gemini 3.8 Flash

- Source: Inception Labs (`inception/mercury-2.5`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2.5
- **Short description:** Inception Labs' diffusion-based large language model (dLLM) released in September 2026, generating tokens in parallel at 770–1,100 tokens/second for latency-sensitive code autocomplete, compaction, routing, and high-speed subagent operations.
- **Provider / access:** Inception Labs API (`mercury-2.5`), OpenCode Zen.
- **Release / knowledge:** 2026-09-08 release; knowledge cutoff mid-2026.
- **IDs:** `opencode/mercury-2.5`. Low-cost commercial API.
- **Context window:** 260,000 tokens total (260K context window); max output 65,536 tokens.
- **Modalities:** Text in; text and code out; text-only diffusion architecture.
- **Pricing (as of 2026-09):** $0.20 / 1M input tokens, $0.75 / 1M output tokens ($0.02 / 1M cached input); launch discounts down to $0.04 / $0.15.
- **Architecture:** Continuous-discrete diffusion transformer (dLLM) with parallel iterative refinement instead of autoregressive next-token prediction.

### Raw benchmarks found

Agent / tool use:

- Generation speed: **770–1,100** tokens/sec (Inception Labs dLLM benchmark, Sep 2026)
- Terminal-Bench 2.1: **42.0%** (Inception Labs Technical Report, 2026)
- Tau2-Bench: **72.5%**
- GDPval-AA: **1,110** Elo
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **28.0%**

Reasoning / knowledge:

- GPQA Diamond: **50.5%** (Artificial Analysis / Inception Labs, 2026)
- HLE: **8.0%** (Humanity's Last Exam without tools)
- LCR / MLCR: **60.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **20.5**
- Omniscience Accuracy / Hallucination Rate: **36% / 88%**

Coding:

- SWE-bench Verified / SWE-Pro: **45.0%** (SWE-bench Verified) / **18.0%** (SWE-bench Pro)
- LiveCodeBench: **52.0%** pass@1
- SciCode / AA-SciCode: **24.5%**
- Vibe Code Bench: **44.0%**

Long context:

- 260K token context window with 65K max output buffer evaluated on parallel streaming extraction.

### Normalized scores (1–100)

- **Tool use: 55/100.** Fast tool invocation and structured formatting evidenced by 72.5% on Tau2-Bench and 42.0% on Terminal-Bench 2.1.
- **Reasoning: 52/100.** Basic analytical and logic performance with 50.5% on GPQA Diamond, prioritizing generation speed over multi-step reasoning depth.
- **Context window: 75/100.** 260K context window provides solid workspace for long documents and source files.
- **Multimodal: 15/100.** Text-only diffusion architecture without native visual or audio processing, receiving the standard baseline score.
- **Coding: 58/100.** Capable high-speed code generation marked by 45.0% on SWE-bench Verified and 52.0% on LiveCodeBench at 770+ tok/s.
- **Cost efficiency: 95/100.** Highly economical at $0.20 / $0.75 per 1M tokens.
- **Overall Score: 51/100.** Ultra-fast diffusion LLM engineered for sub-agent pipelines and real-time coding assists, with overall score capped by text-only modality.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-03
- Method: Public internet research into Inception Labs technical releases, diffusion LLM architecture papers, and benchmark leaderboards; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
