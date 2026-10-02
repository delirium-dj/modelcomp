# LongCat-2.5-Preview — findings by Muse Spark 1.3

- Source: Meituan (`meituan/longcat-2.5-preview`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat-2.5-Preview
- **Short description:** Meituan sparse-MoE frontier preview (~1.6T total / ~48B active per vendor metadata) with 1M context and native image understanding; positioned for long-horizon agentic coding work.
- **Provider / access:** Meituan LongCat API; Vercel AI Gateway (`meituan/longcat-2.5-preview`); OpenCode free-window listing. Chat Completions, Messages, Responses.
- **Release / knowledge:** 2026-09-25 vendor changelog ("LongCat-2.5-Preview Now Available"); Vercel lists 09/26/2026. Knowledge cutoff unknown.
- **IDs:** `LongCat-2.5-Preview` (vendor); `meituan/longcat-2.5-preview` (gateway route)
- **Context window:** 1,048,576 total, 131,072 max output per Vercel provider table (2.0s latency, 87 tps observed).
- **Modalities:** Text in/out; image in (understanding, VQA, summarisation); reasoning toggle (`thinking` on/off, interleaved reasoning_content); tool calls yes; no audio/video I/O found.
- **Pricing (as of 2026-10-02):** $0.30 per 1M input, $1.20 per 1M output, $0.006 per 1M cached (Vercel, marked 59% off); vendor limited-time discount rate.
- **Architecture:** Sparse MoE ~1.6T total / ~48B active per vendor site metadata and trade coverage 2026-09-26; no technical report or weights; proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- AI Coding Daily LLM Coding Leaderboard: **46.65/80 total** (OpenCode harness, evaluated 2026-10-02; Laravel 16.98/20, React-TS 16.67/20, Bug Finding 2.4/20, CSV Import 3, Offline Sync 2.7, Bank Feed 4, Shipping Quotes 0.9; ~rank 36 beside Qwen 3.8 27B 47.76 and GLM-5.3-Flash 47.51)
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- No verified MRCR / RULER / GraphWalks score found; 1M/131K are listing ceilings only.

### Normalized scores (1–100)
- **Tool use: 70/100.** No verified agentic harness number found; tool-calling support documented only — capped hard for missing evidence.
- **Reasoning: 72/100.** Reasoning toggle documented but no GPQA/HLE-class number found; capped vendor-spec only.
- **Context window: 92/100.** 1M total with 131K max output is top-tier ceiling; capped for zero measured retention at length.
- **Multimodal: 55/100.** Image input with VQA/summarisation documented via gateway; capped for no measured vision benchmark.
- **Coding: 74/100.** AI Coding Daily 46.65/80 (Oct 2026, OpenCode harness; mid-pack near Qwen 3.8 27B 47.76) is a real third-party coding run; capped for single-harness scope and weak Bug-Finding subscore (2.4/20).
- **Cost efficiency: 88/100.** $0.30/$1.20 per 1M is cheap frontier-adjacent pricing (59% off flag); cached $0.006 helps long-context spend.
- **Overall Score: 73/100.** Mean of five non-cost dims (70+72+92+55+74=363/5=72.6, half-up 73); 1M multimodal agentic coder best on image-grounded long-context coding.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-10-02
- Method: public internet research (Vercel AI Gateway listing 2026-10-02, AI Coding Daily leaderboard evaluated 2026-10-02, vendor changelog 2026-09-25); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

