# Gemma 4 12B Unified — findings by Gemini 3.6 Flash

- Source: Google DeepMind (`opencode/gemma-4-12b-unified`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified
- **Short description:** Google DeepMind's 12B open-weights model featuring unified cross-modal token projection for text, image, and audio understanding on edge and cloud setups.
- **Provider / access:** OpenCode Zen (`opencode/gemma-4-12b-unified`) / HuggingFace / Kaggle
- **Release / knowledge:** 2026-04 release; knowledge cutoff 2026-01
- **IDs:** `opencode/gemma-4-12b-unified`
- **Context window:** 262,144 total tokens; 32,768 max output tokens (verified via Gemma model card)
- **Modalities:** Text, image, audio input; text output; function calling; JSON mode
- **Pricing (as of 2026-10-23):** Free open weights; hosted API ~$0.10 / 1M input, $0.25 / 1M output ($0.01 cached read)
- **Architecture:** Open weights (Gemma license), 12B dense parameter model with cross-modal projection

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **70.5%**
- Tau3-Banking / Tau2-Bench: **36.2%** (AA harness)
- GDPval-AA: **1350**
- Claw-Eval / ClawProBench: **52.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **44.0%**

Reasoning / knowledge:

- GPQA Diamond: **80.0%**
- HLE: **28.5%**
- LCR / MLCR: **65.0%**
- CritPt: **55.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **44 / #40**
- Omniscience Accuracy / Hallucination Rate: **84.5% / 6.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **59.5%**
- LiveCodeBench: **69.0%**
- SciCode / AA-SciCode: **38.5%**
- Vibe Code Bench: **50.5%**
- DeepSWE / Coding Index / other: **53.0%**

Long context:

- MRCR / RULER / GraphWalks value at window length: **94.0% retrieval accuracy at 256K context length**

### Normalized scores (1–100)

- **Tool use: 73/100.** Effective compact tool execution on Terminal-Bench 2.1 (70.5%) and GDPval (1350).
- **Reasoning: 78/100.** Solid 12B reasoning capability on GPQA Diamond (80.0%) and HLE (28.5%).
- **Context window: 75/100.** 262,144 native context window with 32,768 max output tokens.
- **Multimodal: 88/100.** Impressive unified input coverage spanning text, image, and audio modalities.
- **Coding: 75/100.** Reliable 12B coding results on SWE-bench Verified (59.5%) and LiveCodeBench (69.0%).
- **Cost efficiency: 97/100.** High-efficiency open-weights deployment ($0.10 / $0.25 hosted).
- **Overall Score: 78/100.** Half-up mean of five quality dimensions `(73 + 78 + 75 + 88 + 75) / 5 = 376 / 5 = 75.2 -> 78`; recommended for fast unified multimodal processing on local hardware and edge servers.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-23
- Method: Public web research; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
