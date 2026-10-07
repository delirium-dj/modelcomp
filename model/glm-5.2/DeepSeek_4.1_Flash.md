# GLM-5.2 — findings by DeepSeek 4.1 Flash

- Source: Z.ai (Zhipu AI) / GLM-5.2 (`glm-5.2`)
- Date: 2026-10-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Re-verified 2026-10-06: filled previously-missing GPQA/HLE/LCR/CritPt/SWE-bench-Vals
> and agentic figures from BenchLM's Oct-6 snapshot, LLM Stats and Z.ai's Hugging Face
> model card; corrected the Overall prose to the cost-excluded v4 mean.

## Model card

- **Name:** GLM-5.2 (no "Free" tier observed)
- **Short description:** Z.ai's open-source, coding-first flagship of June 2026 — the fourth model in the GLM-5 generation after GLM-5, GLM-5-Turbo and GLM-5.1. It is aimed at engineering teams running autonomous coding agents over large monorepos who want to avoid vendor lock-in, and at launch it was the strongest MIT-licensed model on SWE-bench Pro.
- **Provider / access:** Z.ai's API plus Fireworks AI, OpenRouter, AWS Bedrock and Google Vertex AI; MIT-licensed weights on Hugging Face for self-hosting or air-gapped deployment. Not present on OpenCode Zen, so no free tier.
- **Release / knowledge:** Released 2026-06-16. Knowledge cutoff not published in the sources checked.
- **IDs:** `glm-5.2` (Z.ai / hosted platforms); weights `zai-org/GLM-5.2`. No OpenCode Zen Free ID.
- **Context window:** 1,000,000 tokens; max output 128K (Z.ai) / 131,072 (third-party hosts). Uses DeepSeek Sparse Attention in layers 4–78 with the first three layers dense.
- **Modalities:** text in / text out only — function calling, structured JSON output and streaming yes; no native image, audio or video input (vision is a separate GLM-5V-Turbo model). Dual thinking-effort system.
- **Pricing (as of 2026-10-06):** $1.40 / 1M in and $4.40 / 1M out via Z.ai, Fireworks, FriendliAI, Novita and Together; cheaper DeepInfra route at $0.75 / $2.40 with $0.14 / 1M cached input. No free API tier; self-hosting the MIT weights removes license fees but needs a large VRAM budget.
- **Architecture:** Mixture-of-Experts transformer, 753B total parameters (LLM Stats; some trackers list 744B) with a small active slice per forward pass, MIT license (unrestricted commercial use, modification and redistribution).

### Raw benchmarks found

> Z.ai published no standalone benchmark sheet at launch; the figures below now combine
> the Z.ai Hugging Face model card, BenchLM's 2026-10-06 snapshot and Artificial Analysis.

Agent / tool use:

- Terminal-Bench 2.1: **81.0%** (Z.ai model card; up from GLM-5.1's 62.0% at identical parameter count). Terminal-Bench 3.0: **4.6%** (FrontierBench leaderboard) — hard successor suite still weak.
- Tau3 / Tau2-Bench: τ²-bench **99.1%** (Artificial Analysis tau2 leaderboard)
- GDPval-AA: **1418** raw / **43.7%** normalized; AA Agentic Index **39.4%**; APEX-Agents-AA **33.7%** (Artificial Analysis)
- MCP Atlas: **76.8%**; Toolathlon: **48.2%**; AA ITBench **42.7%**; ResearchClawBench **20.7%** (Z.ai model card / AA)

Reasoning / knowledge:

- GPQA Diamond: **91.2%** (Z.ai model card); AA-GPQA Diamond **89.5%**; Vals GPQA-D **85.6%**
- MMLU-Pro: **86.7%** (Vals); HLE **54.7%** (with tools) / **40.5%** (no tools); AA-HLE **41.1%**
- LCR / MLCR: AA-LCR **78.3%**; CritPt **20.9%** (Z.ai model card)
- Artificial Analysis Intelligence Index: **33.7%**; BenchLM overall **61.52/100**, #46 of 882
- Omniscience Accuracy **24.3%** / Hallucination Rate **26.3%**; AA-IFBench **73.3%** (Artificial Analysis)
- Math: AIME26 **99.2%**, HMMT Nov-2025 **94.4%**, HMMT Feb-2026 **92.5%**, MMAnswerBench **91.0%** (Z.ai model card)

Coding:

- SWE-bench Pro: **62.1%** — the leading MIT-licensed result as of mid-2026; SWE-bench (Vals) **82.8%**; NL2Repo **48.9%**
- LiveCodeBench (Vals): **69.5%**; AA-SciCode **51.2%**; AA Coding Index **68.8%**; ProgramBench **63.7%**; CursorBench 3.2 **55.0%**; PostTrainBench v1.1 **31.7%**
- DeepSWE v1.1 (successor baseline): **46.2%** — GLM-5.3-Flash reports 63.4%, up from 46.2% for GLM-5.2

Long context:

- AA-LCR **78.3%** is the only long-context retrieval signal; Z.ai has not published needle-in-haystack/MRCR at full depth, so accuracy past roughly 500K tokens on the 1M window remains unverified.

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 2.1 81.0%, τ²-bench 99.1%, GDPval-AA 1418, MCP Atlas 76.8% and AA Agentic Index 39.4% form a strong terminal/agent profile; capped by Terminal-Bench 3.0 at just 4.6%.
- **Reasoning: 85/100.** GPQA Diamond 91.2%, HLE 54.7% (tools), AA-LCR 78.3% and near-perfect AIME/HMMT make it a top open-weights reasoner; CritPt 20.9% and AA Index 33.7% keep it short of the frontier band.
- **Context window: 95/100.** 1,000,000 tokens with ~131K output and cached-prefix pricing at a $1.40/1M input rate; AA-LCR 78.3% is solid but below the ≥98% condition for a full 100.
- **Multimodal: 15/100.** Text-in/text-out only; GLM-5.2 has no native vision, audio or video path.
- **Coding: 88/100.** SWE-bench Pro 62.1%, Vals SWE-bench 82.8%, LiveCodeBench 69.5%, AA-SciCode 51.2% and Coding Index 68.8% are top-tier for an MIT release; the vendor-run SWE-bench Pro and no clean official Verified number keep it out of the 90s.
- **Cost efficiency: 90/100.** The DeepInfra route ($0.75/$2.40, $0.14 cached) and MIT self-hosting are strong value; the $1.40/$4.40 first-party rate and no free tier hold it back slightly.
- **Overall Score: 74/100.** Cost-excluded v4 mean of the five quality dims (85 + 85 + 95 + 15 + 88) / 5 = 73.6 → **74**. Best fit: self-hosted or Bedrock/Vertex-hosted coding agents over large repos where an MIT license and a 1M window matter more than vision.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-06
- Method: public internet research (Z.ai Hugging Face model card, BenchLM 2026-10-06 snapshot, LLM Stats, Artificial Analysis, Vals AI, GLM-5.3-Flash comparison material); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
