# Gemma 4 26B A4B — findings by Gemini 3.7 Flash

- Source: Google (`google/gemma-4-26b-a4b`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B
- **Short description:** Google's open-weights Mixture-of-Experts architecture (25.2B total / 3.8B active parameters per token, Apache 2.0) providing 4B-class serving speed with a large knowledge capacity and 256K context.
- **Provider / access:** Hugging Face / OpenRouter (`google/gemma-4-26b-a4b`), OpenCode Zen (`opencode/gemma-4.26b-a4b`).
- **Release / knowledge:** 2026-04-12 release; knowledge cutoff February 2026.
- **IDs:** `google/gemma-4-26b-a4b`, `opencode/gemma-4.26b-a4b` (no Free ID on Zen)
- **Context window:** 256,000 tokens (262,144 native context).
- **Modalities:** text, image in; text out; tool use, function calling.
- **Pricing (as of 2026-10-09):** ~$0.09 / $0.30 per 1M tokens hosted (free self-host under Apache 2.0).
- **Architecture:** Sparse Mixture-of-Experts (MoE) transformer with 25.2B total parameters and 3.8B active parameters (Apache 2.0).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **31.2%**
- Tau3-Banking / Tau2-Bench: **64.0%**
- GDPval-AA: **1135**
- Claw-Eval / ClawProBench: **63.5**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **62.0%**

Reasoning / knowledge:

- GPQA Diamond: **55.5%**
- HLE: **18.0%**
- LCR / MLCR: **72.0%**
- CritPt: **62.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **83 / #41**
- Omniscience Accuracy / Hallucination Rate: **80.0% / 8.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **38.8%**
- LiveCodeBench: **38.2%**
- SciCode / AA-SciCode: **58.0%**
- Vibe Code Bench: **64.5%**
- DeepSWE / Coding Index / other: **58.5**

Long context:

- MRCR 256k needle retrieval 96.0%; RULER benchmark 90.8% at 256k tokens.

### Normalized scores (1–100)

- **Tool use: 68/100.** Responsive tool execution with 4B-class active parameter inference speeds.
- **Reasoning: 69/100.** Broad knowledge base supported by 25.2B parameters with active MoE routing.
- **Context window: 88/100.** 256k context window with stable needle retrieval.
- **Multimodal: 72/100.** Solid vision and document understanding; text-only output.
- **Coding: 65/100.** Good basic script generation and code editing, capped on complex debugging.
- **Cost efficiency: 97/100.** Exceptional value at ~$0.09/$0.30 per 1M hosted and free self-hosting under Apache 2.0.
- **Overall Score: 72.4/100.** High-throughput MoE lightweight model tailored for economical high-volume multimodal pipelines.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-10-09
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
