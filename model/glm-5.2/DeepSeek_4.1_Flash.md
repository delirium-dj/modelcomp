# GLM-5.2 — findings by DeepSeek 4.1 Flash

- Source: Z.ai (Zhipu AI) / GLM-5.2 (`glm-5.2`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.2 (no "Free" tier observed)
- **Short description:** Z.ai's open-source, coding-first flagship of June 2026 — the fourth model in the GLM-5 generation after GLM-5, GLM-5-Turbo and GLM-5.1. It is aimed at engineering teams running autonomous coding agents over large monorepos who want to avoid vendor lock-in, and at launch it was the strongest MIT-licensed model on SWE-bench Pro.
- **Provider / access:** Z.ai's API plus Fireworks AI, OpenRouter, AWS Bedrock and Google Vertex AI; MIT-licensed weights on Hugging Face for self-hosting or air-gapped deployment. Not present on OpenCode Zen, so no free tier.
- **Release / knowledge:** Released 2026-06-13. Knowledge cutoff not published in the sources checked.
- **IDs:** `glm-5.2` (Z.ai / hosted platforms); weights `zai-org/GLM-5.2`. No OpenCode Zen Free ID.
- **Context window:** 1,000,000 tokens (5× GLM-5.1's window); max output 131,072 tokens. Uses DeepSeek Sparse Attention in layers 4–78 with the first three layers dense. Verified from Z.ai's page as compiled by HokAI (checked 2026-08-31).
- **Modalities:** text in / text out only — function calling, structured JSON output and streaming yes; no native image, audio or video input (vision is a separate GLM-5V-Turbo model). Dual thinking-effort system.
- **Pricing (as of 2026-09-18):** $1.40 / 1M in and $4.40 / 1M out via Z.ai and Fireworks/Bedrock/Vertex; cached prefixes $0.26 / 1M (81% discount). No free API tier — every request is billed from the first token; self-hosting the MIT weights removes license fees but needs ~241 GB VRAM at 2-bit quantization.
- **Architecture:** Mixture-of-Experts transformer, 744B total parameters with ~40B active per forward pass, trained on 28.5T tokens, MIT license (unrestricted commercial use, modification and redistribution).

### Raw benchmarks found

> Z.ai published no vendor benchmark sheet at launch; the scores below come from
> independent evaluators (Epoch AI via Model Beat, Artificial Analysis via HokAI).

Agent / tool use:

- Terminal-Bench 2.1: **81.0%** (up from GLM-5.1's 62.0% with no parameter increase)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **80.3%** — described as the highest published result for an open-weights model at launch
- MMLU: **91.72%**; MMLU-Pro: **80.63%** (both ahead of GLM-5.1)
- HLE: **no verified public score found** for GLM-5.2
- LCR / MLCR / CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: no single composite reproduced in the sources checked; AA blended price listed at $0.90 / 1M, output speed 113 tok/s
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Pro: **62.1%** — the leading MIT-licensed result as of mid-2026
- SWE-bench Verified: no SWE-bench Verified figure was reproduced for the 5.2 checkpoint (the 62.1% above is the Pro suite, which the tracker's SWE-bench Verified column also references — flagged as ambiguous)
- LiveCodeBench / SciCode / Vibe Code Bench: **no verified public score found**
- DeepSWE v1.1 (as a comparison baseline for its successor): **46.2%** — GLM-5.3-Flash reports 63.4%, up from 46.2% for GLM-5.2

Long context:

- Z.ai has not published needle-in-haystack or MRCR recall results at full depth; accuracy past roughly 500K tokens on the 1M window is **unverified**.

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 2.1 at 81.0% — a 19-point jump over the previous generation at identical parameter count — is a strong terminal-agent signal; capped by missing Tau3/GDPval/Claw evidence.
- **Reasoning: 78/100.** GPQA Diamond 80.3% and MMLU-Pro 80.63% are the best published open-weights numbers of mid-2026, but there is no HLE, CritPt or frontier-math value to support a higher score.
- **Context window: 95/100.** 1,000,000 tokens with 131,072 output and 81%-off caching at a $1.40/1M input rate is an excellent long-context offer; no recall-at-depth evidence caps it below the maximum.
- **Multimodal: 15/100.** Text-in/text-out only; GLM-5.2 has no native vision, audio or video path.
- **Coding: 86/100.** 62.1% on SWE-bench Pro as the leading open-weight model and 81.0% on Terminal-Bench 2.1 are top-tier for an MIT release; the absence of a clean SWE-bench Verified value and a public benchmark sheet keeps it short of the 90s.
- **Cost efficiency: 80/100.** $1.40/$4.40 per 1M is mid-priced but 81%-off caching and MIT self-hosting are strong levers; the lack of any free tier and the 241 GB VRAM self-host floor hold it back.
- **Overall Score: 71/100.** (82 + 78 + 95 + 15 + 86 + 80) / 6 = 72.7 → **73**. Best fit: self-hosted or Bedrock/Vertex-hosted coding agents over large repos where an MIT license and a 1M window matter more than vision.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-18
- Method: public internet research (Z.ai model page via HokAI, independent Epoch AI/Artificial Analysis figures, GLM-5.3-Flash comparison material for DeepSWE baselines); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.