# GLM 5.2 (coding) — findings by Qwen 3.8 27B

- Source: Z.ai (`glm-5.2`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.2 (coding evaluation)
- **Short description:** Z.ai's open-weight long-horizon engineering flagship (June 2026), "built for long-horizon tasks"; strongest open coding model of its generation — tracked here as the coding workhorse (single Zen id, coding emphasis in this folder).
- **Provider / access:** OpenCode Zen `opencode/glm-5.2` on `https://opencode.ai/zen/v1/chat/completions` (verified in opencode.ai/docs/zen, 2026-09-28); Z.ai API + docs.z.ai. No Zen Free ID (no `glm-5.2-*-free` exists — confirmed absent from Zen model list).
- **Release / knowledge:** released 2026-06-16 (Z.ai blog / docs); knowledge cutoff not disclosed.
- **IDs:** `opencode/glm-5.2` (Zen); Z.ai `glm-5.2`. No Free ID on Zen.
- **Context window:** 1M total (Z.ai docs / BenchLM); max-output split not independently verified.
- **Modalities:** text in / text out; reasoning yes; tool calls yes (MCP Atlas, Toolathlon verified). No image/audio input found — text-only.
- **Pricing (as of 2026-09-29):** $1.40 in / $4.40 out / $0.26 cached in per 1M (OpenCode Zen price table, 2026-09-28).
- **Architecture:** 753B-parameter MoE, open weights, MIT license; IndexShare architecture cuts per-token FLOPs 2.9x at long context (thesys.dev).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **81.0%** (BenchLM 2026-09-28; Vals 67.8%; z.ai reports 81.0 vs GLM-5.1's 63.5)
- Terminal-Bench 3.0: **4.6%** (BenchLM — early-harness, noted)
- Tau3-Banking / Tau2-Bench: tau2-bench **99.1%** (BenchLM, harness-flagged)
- GDPval-AA: **1418** (**42.9%** normalized) (BenchLM)
- Claw-Eval / ClawProBench: ResearchClawBench **20.7%** (BenchLM)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: Toolathlon **48.2%**; MCP Atlas **76.8%** (BenchLM)
- APEX-Agents-AA **33.7%**; AA ITBench **42.7%**; AA Agentic Index **39.4%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **91.2%** (BenchLM; AA 89.5%, Vals 85.6%)
- HLE: **54.7%** (BenchLM; w/o tools 40.5%; AA-HLE 41.1%)
- LCR / MLCR: LCR **78.3%** (BenchLM/AA)
- CritPt: **20.9%** (BenchLM)
- Artificial Analysis Intelligence Index / BenchLM overall: **33.7** / **62.62 (#40 of 512)**
- Omniscience Accuracy / Hallucination Rate: **24.3% / 26.3%** (AA via BenchLM); MMLU-Pro (Vals) **86.7%**

Coding:

- SWE-bench Verified / SWE-Pro: SWE-bench (Vals) **82.8%**; SWE-Pro **62.1%** (BenchLM; z.ai: 62.1 vs GPT-5.5 58.6, GLM-5.1 58.4)
- LiveCodeBench: **69.5%** (Vals, BenchLM)
- SciCode / AA-SciCode: **51.2%** (BenchLM/AA)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: AA Coding Index **68.8%**; ProgramBench **63.7%**; CursorBench 3.2 **55.0%**; NL2Repo **48.9%**; OpenHarmony **58.4%** (BenchLM)

Long context:

- 1M window; no dedicated retrieval benchmark at window length found beyond AA-LCR 78.3%.

Math:

- AIME26 **99.2%**; HMMT Nov 2025 **94.4%**; HMMT Feb 2026 **92.5%** (BenchLM; contamination exposure noted by groundy.com)

### Normalized scores (1–100)

- **Tool use: 80/100.** TB2.1 81.0% just under the 88%+ frontier band, MCP Atlas 76.8% and tau2 99.1% strong, GDPval 1418 above the mid band; capped by Toolathlon 48.2% and TB3.0 4.6%.
- **Reasoning: 82/100.** GPQA 91.2% clears the 90%+ frontier reference and HLE 54.7% well above 40%; capped by CritPt 20.9% and AA Index 33.7 (mid band).
- **Context window: 95/100.** 1M window in the >=1M tier (95–100); no verified >=98% retrieval at 512K+ to justify 100.
- **Multimodal: 15/100.** Text-only input (no image/audio found in any source) → text-only floor tier.
- **Coding: 85/100.** SWE-bench 82.8% and SWE-Pro 62.1% (above GPT-5.5's 58.6) with TB2.1 81.0%; capped just under the 90+ band because TB2.1 < 85%+ and Coding Index 68.8 < 70.
- **Cost efficiency: 87/100.** $1.40/$4.40 per 1M (Zen, 2026-09-28) sits just above the ~$1.25/$4.25 = ~88 reference point.
- **Overall Score: 71/100.** (80 + 82 + 95 + 15 + 85) / 5 = 71.4 → 71. Best fit: top open-weights long-horizon coding/agent pick at 1M context; text-only is the main limitation.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-09-29
- Method: public internet research (BenchLM, Z.ai blog/docs, OpenCode Zen docs + price table, thesys.dev, emergent.sh, groundy.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
