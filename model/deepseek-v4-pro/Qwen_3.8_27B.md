# DeepSeek V4 Pro — findings by Qwen 3.8 27B

- Source: DeepSeek/deepseek-v4-pro
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro (V4 Pro 0813 on AA)
- **Short description:** DeepSeek's MIT-licensed 1.6T open-weights MoE (49B active) flagship of the V4 line; 1M context, text-only, top-10 open-weights class intelligence at max reasoning effort.
- **Provider / access:** 11 API providers per Artificial Analysis; open weights on Hugging Face (`deepseek-ai/DeepSeek-V4-Pro-0813`); OpenCode Zen `opencode/deepseek-v4-pro` (paid; no Free ID).
- **Release / knowledge:** 2026-08-13 (Artificial Analysis FAQ); knowledge cutoff not publicly stated.
- **IDs:** `deepseek/deepseek-v4-pro`, `opencode/deepseek-v4-pro` (no Free ID on Zen).
- **Context window:** 1M total (Artificial Analysis technical specs).
- **Modalities:** Text in; text out only (AA verified — not multimodal); reasoning yes (reason-effort variants, "max" tracked); tool calls yes.
- **Pricing (as of 2026-09-27):** $1.32 in / $3.96 out per 1M on DeepSeek API (Artificial Analysis, max effort; 97% cache discount; $0.67 per Index task). Zen docs list $1.74/$3.48 ($0.145 cached) for `deepseek-v4-pro`.
- **Architecture:** Open-weights MoE, 1.6T total / 49B active (AA); MIT license.

### Raw benchmarks found

Agent / tool use:

- AA-Briefcase / GDPval-AA / AutomationBench-AA / Terminal-Bench 4.0: no verified public standalone score found (folded into AA Intelligence Index; harness: Artificial Analysis v4.3.2).
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public standalone score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found (included in AA Intelligence Index)
- LCR / MLCR: no verified public score found (AA-LCR included in Index)
- CritPt: no verified public score found (included in AA Intelligence Index)
- Artificial Analysis Intelligence Index: **36 / #8 of 115** (AA v4.3.2, reasoning max effort; open-weights class median 18; 160M output tokens; 100.4 t/s #19 speed; TTFT 1.69s; $0.67 per Index task)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found (SciCode included in AA Index)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 1M context window confirmed; no long-context retrieval (MRCR/RULER/GraphWalks) reported.

### Normalized scores (1–100)

- **Tool use: 65/100.** AA Index 36 (#8/115 open-weights class, well above class median 18) with agentic evals in the composite; no direct TB2.1/Tau3 public numbers.
- **Reasoning: 65/100.** Index 36 sits just above methodology's mid-band (Index 20–35 → 55–65); no direct GPQA/HLE numbers found.
- **Context window: 95/100.** 1M total context per AA specs (≥1M tier = 95–100); no verified ≥98% retrieval at 512K+ to justify 100.
- **Multimodal: 15/100.** Text-only in/out (AA verified) — methodology text-only band 10–20.
- **Coding: 65/100.** Composite (Index 36) includes SciCode and Terminal-Bench 4.0; no direct SWE-bench Verified / LiveCodeBench public numbers to verify.
- **Cost efficiency: 85/100.** $1.32/$3.96 per 1M sits near methodology's ~$1.25/$4.25 → ~88 band; $0.67 per Index task (4/4 cost units on AA); MIT open weights allow free self-hosting.
- **Overall Score: 61/100.** (65 + 65 + 95 + 15 + 65) / 5 = 61. Best fit: max-effort 1M-context text-only agentic/coding work at open-weights prices; use the V4.1 Flash line when image input matters.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** — 2026-09-27
- Method: public internet research (Artificial Analysis model page + OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
