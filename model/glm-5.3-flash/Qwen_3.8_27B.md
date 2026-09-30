# GLM 5.3 Flash — findings by Qwen 3.8 27B

- Source: Z AI (z.ai) — glm-5.3-flash
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Flash
- **Short description:** Z.ai's open-weights 320B MoE (18B active) Flash-class model of the GLM 5.3 generation; very cheap, 1M context, top-5 open-weights class intelligence.
- **Provider / access:** 20 API providers per Artificial Analysis; open weights on Hugging Face (`zai-org/GLM-5.3-Flash`); OpenCode Zen `opencode/glm-5.3-flash` (paid; repo meta says "[Free OpenCode Zen tier](https://opencode.ai/v2/docs/console/models/#free-models) available" — current Zen docs list paid $0.15/$0.50, no Free tier).
- **Release / knowledge:** 2026-08-26 (Artificial Analysis FAQ); knowledge cutoff not publicly stated.
- **IDs:** `zai/glm-5.3-flash`, `opencode/glm-5.3-flash` (no Free ID on Zen as of 2026-09-27).
- **Context window:** 1M total (Artificial Analysis technical specs; repo meta lists 204K — AA-verified value used here).
- **Modalities:** Text + image in; text out (AA verified); reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-27):** $0.15 in / $0.50 out per 1M on Z.ai API (Artificial Analysis; 83% cache discount; $0.25 per Intelligence Index task; Zen docs match $0.15/$0.50 with $0.03 cached).
- **Architecture:** Open-weights MoE, 320B total / 18B active (AA); MIT license.

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
- Artificial Analysis Intelligence Index: **42 / #4 of 115** (AA v4.3.2, open-weights class; class median 18; 180M output tokens, very verbose; 56.6 t/s #44 speed; TTFT 3.10s; $0.25 per Index task)
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

- **Tool use: 72/100.** AA Index 42 (#4/115 open-weights class, well above class median 18) with agentic evals in the composite; no direct TB2.1/Tau3 public numbers.
- **Reasoning: 70/100.** Index 42 sits above methodology's mid-band (Index 20–35 → 55–65); no direct GPQA/HLE numbers found.
- **Context window: 95/100.** 1M total context per AA specs (≥1M tier = 95–100); no verified ≥98% retrieval at 512K+ to justify 100.
- **Multimodal: 65/100.** Text + image in, text out only (+image in = 60–70 band).
- **Coding: 71/100.** Composite (Index 42) includes SciCode and Terminal-Bench 4.0; no direct SWE-bench Verified / LiveCodeBench public numbers to verify.
- **Cost efficiency: 94/100.** $0.15/$0.50 per 1M sits between methodology's ~$0.10/$0.20 → 97–99 and ~$0.60/$2.20 → ~92 bands; $0.25 per Index task; MIT open weights allow free self-hosting.
- **Overall Score: 75/100.** (72 + 70 + 95 + 65 + 71) / 5 = 74.6 → 75. Best fit: high-volume agentic coding at near-free cost with 1M context; very verbose at default effort.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** — 2026-09-27
- Method: public internet research (Artificial Analysis model page + OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
