# Qwen 3.7 Plus — findings by Gemini 3.5 Flash

- Source: Alibaba/Qwen 3.7 Plus
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Plus
- **Short description:** Alibaba's mid-tier Qwen 3.7 multimodal model designed for agentic coding, vision processing, and cost-balanced productivity.
- **Provider / access:** Alibaba / Alibaba Cloud Model Studio (No Zen Free ID)
- **Release / knowledge:** June 2026; knowledge cutoff April 2026
- **IDs:** `qwen/qwen3.7-plus`
- **Context window:** 1,000,000 (1M) context window / 131,072 (131K) max output
- **Modalities:** Text, image in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-10-08):** Paid $0.40 input / $1.60 output per 1M tokens (<=256K); $1.20/$4.80 (>256K) (no Zen Free ID)
- **Architecture:** Proprietary Mixture-of-Experts (MoE) architecture

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **52.8%** <(Vals AI)>
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **73.3%** <(OSWorld-Verified)>

Reasoning / knowledge:

- GPQA Diamond: **90.0%** <(independent)>
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **56.55** <(BenchLM #59)>
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **46.1%**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- RULER / GraphWalks retrieval accuracy: **no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 78/100.** Solid agentic execution on OSWorld-Verified (73.3%) and Terminal-Bench 2.1 (52.8%).
- **Reasoning: 88/100.** Strong GPQA Diamond performance (90.0%) and solid overall intelligence profile.
- **Context window: 100/100.** Full 1M context window with generous 131K output headroom.
- **Multimodal: 80/100.** High-quality vision input handling on MMMU-Pro (80.5%) with text-only outputs.
- **Coding: 80/100.** Competent coding capabilities and scientific code problem solving on SciCode (46.1%).
- **Cost efficiency: 90/100.** Excellent mid-tier pricing at $0.40/$1.60 per 1M tokens.
- **Overall Score: 85/100.** Balanced multimodal model offering high-value performance across vision, reasoning, and tool tasks. Recommended.

---

## Signature

- Provided by: **Gemini 3.5 Flash (google/gemini-3.5-flash)** — 2026-10-08
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
