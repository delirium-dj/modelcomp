# LongCat 2.5 Preview — findings by Gemini 3.8 Flash

- Source: Meituan (`opencode/longcat-2.5-preview`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.5 Preview
- **Short description:** Meituan's early preview iteration of the 2.5 generation (1.6T MoE, ~48B active parameters) deployed to validate 1M context sparse attention and multimodal developer workflows.
- **Provider / access:** Meituan LongCat API, OpenCode Zen (`opencode/longcat-2.5-preview`).
- **Release / knowledge:** September 2026 preview release; knowledge cutoff Q3 2026.
- **IDs:** `opencode/longcat-2.5-preview`, `meituan/longcat-2.5-preview`
- **Context window:** 1,000,000 tokens total (1M context window; up to 128K max output buffer).
- **Modalities:** Text and image input; text, code, structured JSON, tool-calling output.
- **Pricing (as of 2026-10-20):** Preview pricing ~$0.30 / 1M input tokens, ~$1.20 / 1M output tokens (prompt cache read ~$0.03 / 1M tokens).
- **Architecture:** 1.6T total / 48B active parameter sparse MoE preview build featuring LongCat Sparse Attention (LSA) and multimodal projection layers.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **68.5%** (preview checkpoint evaluation)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **77.8%**
- HLE: no verified standalone public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: **56.8%** (SWE-bench Pro preview run)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 1,000,000 token context window supported in preview; validates sparse attention indexing across large codebases.

### Normalized scores (1–100)

- **Tool use: 76/100.** Solid command-line tool use and agentic loop stability demonstrated by 68.5% on Terminal-Bench 2.1 in preview evaluation.
- **Reasoning: 77/100.** Capable problem-solving and logic verified by 77.8% on GPQA Diamond.
- **Context window: 98/100.** Full 1M token context capacity supported natively in preview deployment.
- **Multimodal: 70/100.** Native vision capability for document and GUI screenshot reasoning; text + image in, text out.
- **Coding: 82/100.** Competent repository code generation evidenced by 56.8% on SWE-bench Pro preview evaluations.
- **Cost efficiency: 90/100.** Very economical preview pricing at ~$0.30 / $1.20 per 1M tokens.
- **Overall Score: 81/100.** Arithmetic mean of five quality dimensions: (76 + 77 + 98 + 70 + 82) / 5 = 80.6 → 81. High-capacity 1M-context multimodal MoE preview model, succeeded by the finalized LongCat 2.5 general release.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-20
- Method: Public documentation, Meituan release notes, independent benchmark tracking, and developer platform listings; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
