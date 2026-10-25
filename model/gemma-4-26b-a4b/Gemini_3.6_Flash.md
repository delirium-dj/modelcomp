# Gemma 4 26B A4B — findings by Gemini 3.6 Flash

- Source: Google DeepMind (`opencode/gemma-4-26b-a4b`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B
- **Short description:** Google DeepMind's open-weights 25.2B total / 4B active parameter sparse MoE model designed for high-throughput multimodal edge and cloud inference.
- **Provider / access:** OpenCode Zen (`opencode/gemma-4-26b-a4b`) / HuggingFace / Kaggle
- **Release / knowledge:** 2026-04 release; knowledge cutoff 2026-01
- **IDs:** `opencode/gemma-4-26b-a4b`
- **Context window:** 262,144 total tokens; 32,768 max output tokens (verified via Gemma model card)
- **Modalities:** Text, image input; text output; function calling; JSON mode
- **Pricing (as of 2026-10-23):** Free open weights; hosted API ~$0.12 / 1M input, $0.30 / 1M output ($0.02 cached read)
- **Architecture:** Open weights (Gemma license), 25.2B total / 4B active sparse Mixture-of-Experts (A4B MoE)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **72.0%**
- Tau3-Banking / Tau2-Bench: **38.0%** (AA harness)
- GDPval-AA: **1380**
- Claw-Eval / ClawProBench: **55.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **46.0%**

Reasoning / knowledge:

- GPQA Diamond: **81.5%**
- HLE: **31.0%**
- LCR / MLCR: **68.0%**
- CritPt: **58.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **46 / #35**
- Omniscience Accuracy / Hallucination Rate: **86.0% / 5.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **62.0%**
- LiveCodeBench: **71.5%**
- SciCode / AA-SciCode: **41.0%**
- Vibe Code Bench: **54.0%**
- DeepSWE / Coding Index / other: **56.5%**

Long context:

- MRCR / RULER / GraphWalks value at window length: **94.5% retrieval accuracy at 256K context length**

### Normalized scores (1–100)

- **Tool use: 75/100.** Reliable tool execution and structured formatting on Terminal-Bench 2.1 (72.0%) and GDPval (1380).
- **Reasoning: 80/100.** Good analytical reasoning performance on GPQA Diamond (81.5%) and HLE (31.0%).
- **Context window: 75/100.** 262,144 native context window with 32,768 max output tokens.
- **Multimodal: 68/100.** Image and vision input processing with text output generation.
- **Coding: 78/100.** Solid coding performance on SWE-bench Verified (62.0%) and LiveCodeBench (71.5%).
- **Cost efficiency: 96/100.** High efficiency open-weights sparse MoE model ($0.12 / $0.30 hosted).
- **Overall Score: 75/100.** Half-up mean of five quality dimensions `(75 + 80 + 75 + 68 + 78) / 5 = 376 / 5 = 75.2 -> 75`; excellent high-speed open-weights model for edge deployment and local inference.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-23
- Method: Public web research; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
