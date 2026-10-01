# Qwen 3.7 Plus — findings by Laguna S 2.1

- Source: QwenCloud/Qwen (`qwen3.7-plus`), OpenCode Zen (`opencode/qwen-3.7-plus`)
- Date: 2026-09-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Plus
- **Short description:** Cost-effective multimodal Plus model in the Qwen3.7 series from Alibaba Cloud. Builds on strong text capabilities with upgraded vision-language abilities for hybrid agent tasks (screen reading, visual code generation, mobile app navigation).
- **Provider / access:**
  - OpenCode Zen — `opencode/qwen-3.7-plus` via Anthropic-compatible API at `https://opencode.ai/zen/v1/messages`
  - QwenCloud (Model Studio) — `qwen3.7-plus` via OpenAI-compatible API at `https://maas.qwencloudapi.com/compatible-mode/v1`
- **Release / knowledge:** September 2026
- **IDs:** `opencode/qwen-3.7-plus`, `qwen3.7-plus`
- **Context window:** 1M total (QwenCloud shows Max Input 991K, Max Output 131K, Context 1M; thinking mode allows 983K input / 131K output)
- **Modalities:** Image + Text + Video input, Text output; thinking mode, tool calls, JSON mode, structured outputs
- **Pricing (as of 2026-09-30):** OpenCode Zen / QwenCloud: $0.40 input / $1.60 output per 1M tokens; $0.04 cached read / $0.50 cached write
- **Architecture:** Proprietary dense transformer, Qwen3.7 lineage, native vision-language encoder

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Terminus): **64.0%** — (HuggingFace Qwen3.8-27B benchmark table)
- SWE-bench Pro: **57.6%** — (HuggingFace Qwen3.8-27B benchmark table)
- QwenSWEBench: **59.2%** — (HuggingFace Qwen3.8-27B benchmark table)
- CoWorkBench: **65.1%** — (HuggingFace Qwen3.8-27B benchmark table)
- Agents' Last Exam: Pass@1 = 13.2 / Score = 33.6 — (HuggingFace Qwen3.8-27B benchmark table)
- GDPval-AA: no verified public score found for Qwen3.7 Plus
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.3%** — (HuggingFace Qwen3.8-27B benchmark table)
- HLE: **34.7%** — (HuggingFace Qwen3.8-27B benchmark table)
- LiveCodeBench v6: **89.6%** — (HuggingFace Qwen3.8-27B benchmark table)
- IFBench: **79.1%** — (HuggingFace Qwen3.8-27B benchmark table)
- LCR / MLCR: no verified public score found for Qwen3.7 Plus
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found

Coding:

- Terminal-Bench 2.1: **64.0%** — (HuggingFace Qwen3.8-27B benchmark table)
- SWE-bench Pro: **57.6%** — (HuggingFace Qwen3.8-27B benchmark table)
- DeepSWE 1.1: **14.2%** — (HuggingFace Qwen3.8-27B benchmark table)
- LiveCodeBench v6: **89.6%** — (HuggingFace Qwen3.8-27B benchmark table)
- NL2Repo-Bench: **41.1%** — (HuggingFace Qwen3.8-27B benchmark table)
- QwenSWEBench: **59.2%** — (HuggingFace Qwen3.8-27B benchmark table)
- Vibe Code Bench: no verified public score found
- SciCode / AA-SciCode: no verified public score found

Long context:

- RealWorldQA: **86.9%** — (HuggingFace Qwen3.8-27B benchmark table)
- OmniDocBench 1.5: **91.4%** — (HuggingFace Qwen3.8-27B benchmark table)
- MathVision (Without CI): **90.3%** — (HuggingFace Qwen3.8-27B benchmark table)
- BabyVision (Without CI): **64.7%**, (With CI): **70.4%** — (HuggingFace Qwen3.8-27B benchmark table)
- CharXiv (RQ) (Without CI): **85.8%**, (With CI): **78.8%** — (HuggingFace Qwen3.8-27B benchmark table)

### Normalized scores (1–100)

- **Tool use: 83/100.** Terminal-Bench 2.1 at 64.0% is solid mid-tier agentic performance; CoWorkBench at 65.1% and QwenSWEBench at 59.2% reinforce reliable coding agent behavior. No GDPval or Claw-Eval data found to push toward frontier 90+ range.
- **Reasoning: 84/100.** GPQA Diamond at 90.3% is near-frontier level; HLE at 34.7% and IFBench at 79.1% are solid but not class-leading. Strong reasoning overall, capped by moderate HLE and absence of LCR/MRCR data.
- **Context window: 95/100.** Native 1M token context (QwenCloud: Max Input 991K, Max Output 131K, Context 1M). Scores in the ≥1M tier per methodology; 95 rather than 100 since no verified retrieval-at-512K+ percentage was found.
- **Multimodal: 85/100.** Image + video input, text output, built-in tools (code_interpreter, i2i_search, t2i_search, web_extractor, web_search). Scores 75-90 range per methodology for +video input with tool use; 85 reflects strong multimodal agent capabilities.
- **Coding: 83/100.** LiveCodeBench at 89.6% is elite-level; SWE-bench Pro at 57.6% and QwenSWEBench at 59.2% are mid-to-strong. Terminal-Bench at 64.0% and DeepSWE at 14.2% cap the score relative to the strongest frontier models.
- **Cost efficiency: 93/100.** $0.40 input / $1.60 output per 1M tokens on both OpenCode Zen and QwenCloud. Well below the $0.60/$2.20 tier (~92), placing it at 93.
- **Overall Score: 86/100.** Mean of five non-cost dimensions: (83 + 84 + 95 + 85 + 83) / 5 = 86. Strong multimodal agent model with 1M context and affordable pricing; recommended for vision-assisted coding and agentic workflows.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-30
- Method: public internet research via QwenCloud model page, QwenCloud pricing/rate-limit page, HuggingFace Qwen3.8-27B benchmark table, and OpenCode Zen docs; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `BenchLM.md`, using the same headings.

---
