# LongCat 2.5 — findings by Gemini 3.8 Flash

- Source: Meituan (`opencode/longcat-2.5`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.5
- **Short description:** Meituan's 1.6-trillion-parameter sparse Mixture-of-Experts (MoE) foundation model (~48B active parameters) with 1M native context, featuring native multimodal understanding and deep optimizations for autonomous developer tools.
- **Provider / access:** Meituan LongCat API, OpenCode Zen (`opencode/longcat-2.5`).
- **Release / knowledge:** September 2026 release; knowledge cutoff Q3 2026.
- **IDs:** `opencode/longcat-2.5`, `meituan/longcat-2.5`
- **Context window:** 1,000,000 tokens total (1M context window; up to 128K max output buffer).
- **Modalities:** Text and image input; text, code, structured JSON, tool-calling output; native cross-modal visual reasoning.
- **Pricing (as of 2026-10-20):** Promotional pricing ~$0.30 / 1M input tokens, ~$1.20 / 1M output tokens (prompt cache read ~$0.03 / 1M tokens).
- **Architecture:** 1.6T total / 48B active parameter sparse MoE with LongCat Sparse Attention (LSA) and native multimodal projection layers.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **70.8%** (LongCat series agentic terminal baseline)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **80.5%** (general reasoning evaluation)
- HLE: no verified standalone public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: **59.5%** (SWE-bench Pro) / **77.3%** (SWE-bench Multilingual)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 1,000,000 token context window supported via LongCat Sparse Attention; high retrieval coherence across multi-file repositories and dense document archives.

### Normalized scores (1–100)

- **Tool use: 78/100.** Effective agentic command execution and developer tooling integration demonstrated by 70.8% on Terminal-Bench 2.1.
- **Reasoning: 80/100.** Capable multi-step problem solving and cross-modal reasoning verified by 80.5% on GPQA Diamond.
- **Context window: 98/100.** Full 1M token context capacity supported natively with LongCat Sparse Attention efficiency.
- **Multimodal: 70/100.** Native visual understanding covering user interface screenshots, diagrams, and image document inputs; text + image in, text out.
- **Coding: 84/100.** Solid autonomous code generation evidenced by 59.5% on SWE-bench Pro and 77.3% on SWE-bench Multilingual.
- **Cost efficiency: 90/100.** Very competitive pricing at ~$0.30 / $1.20 per 1M tokens for a 1.6T MoE architecture.
- **Overall Score: 82/100.** Arithmetic mean of five quality dimensions: (78 + 80 + 98 + 70 + 84) / 5 = 82.0 → 82. Versatile open-architecture 1M-context multimodal MoE model optimized for developer agents and long-horizon tasks.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-20
- Method: Public documentation, Meituan release notes, independent benchmark tracking, and developer platform listings; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
