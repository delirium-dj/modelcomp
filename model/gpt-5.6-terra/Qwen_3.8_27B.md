# GPT-5.6 Terra — findings by Qwen 3.8 27B

- Source: OpenAI/gpt-5.6-terra
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's flagship 5.6-generation model optimized for agentic research, tool usage, long-context reasoning, and code synthesis; proprietary.
- **Provider / access:** OpenAI API (7 providers per Artificial Analysis). No OpenCode Zen Free ID found.
- **Release / knowledge:** Released 2026-07-09 (Artificial Analysis FAQ); knowledge cutoff not publicly stated.
- **IDs:** `openai/gpt-5.6-terra` (no Zen Free ID exists).
- **Context window:** 1M tokens (Artificial Analysis technical specs).
- **Modalities:** Text + image in; text out (AA verified); repo meta additionally claims audio/video/PDF in, not confirmed on the AA page. Reasoning (adaptive) yes; tool calls yes.
- **Pricing (as of 2026-09-27):** $2.00 in / $12.00 out per 1M on OpenAI API (Artificial Analysis; 90% cache discount).
- **Architecture:** Proprietary; parameter count not disclosed.

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
- Artificial Analysis Intelligence Index: **42 / #38 of 211** (AA v4.3.2; median 26; 120M output tokens; $1.40 per Index task; 100.5 t/s)
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

- **Tool use: 74/100.** AA Intelligence Index 42 (#38/211) includes agentic evals (AA-Briefcase, GDPval-AA, AutomationBench-AA); solid upper-mid agentic composite; no direct TB2.1/Tau3 public numbers.
- **Reasoning: 74/100.** Index 42 interpolates between methodology mid-band (Index 20–35 → 55–65) and frontier band (Index 60+ → 90–100); no direct GPQA/HLE numbers found.
- **Context window: 95/100.** 1M total context per AA specs (≥1M tier = 95–100); no verified ≥98% retrieval at 512K+ to justify 100.
- **Multimodal: 65/100.** AA verifies text + image in, text out only (+image in = 60–70 band); audio/video/PDF claims unverified.
- **Coding: 74/100.** Composite (Index 42) includes SciCode and Terminal-Bench 4.0; no direct SWE-bench Verified / LiveCodeBench public numbers to verify.
- **Cost efficiency: 65/100.** $2/$12 per 1M on OpenAI API sits between methodology's ~$1.25/$4.25 → ~88 and $3/$15 → ~60 bands; no free tier.
- **Overall Score: 76/100.** (74 + 74 + 95 + 65 + 74) / 5 = 76.4 → 76. Best fit: mid-priced 1M-context agentic/coding work where max-effort reasoning is needed.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** — 2026-09-27
- Method: public internet research (Artificial Analysis model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
