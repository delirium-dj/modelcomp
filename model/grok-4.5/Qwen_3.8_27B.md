# Grok 4.5 — findings by Qwen 3.8 27B

- Source: SpaceXAI/xai (xAI) — grok-4.5
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** xAI's 4.5-generation reasoning model (July 2026); now deprecated on Artificial Analysis in favor of Grok 4.6.
- **Provider / access:** xAI API + 1 other provider per Artificial Analysis; OpenCode Zen `opencode/grok-4.5` (paid; no Free ID).
- **Release / knowledge:** 2026-07-08 (Artificial Analysis FAQ, high variant); knowledge cutoff not publicly stated.
- **IDs:** `xai/grok-4.5`, `opencode/grok-4.5` (no Free ID on Zen).
- **Context window:** 500K tokens (Artificial Analysis technical specs; repo meta lists 128K — AA-verified value used here).
- **Modalities:** Text + image in; text out (AA verified); reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-27):** $2.00 in / $6.00 out per 1M (≤200K prompt; $4/$12 above 200K — Zen docs; AA lists 85% cache discount; $1.04 per Index task at high effort).
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
- Artificial Analysis Intelligence Index: **39 / #52 of 211** (AA v4.3.2, "high" reasoning variant; class median 26; 77M output tokens, fairly concise; 61.4 t/s #122 speed; TTFT 5.78s; $1.04 per Index task; deprecated status)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found (SciCode included in AA Index)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 500K context window confirmed; no long-context retrieval (MRCR/RULER/GraphWalks) reported.

### Normalized scores (1–100)

- **Tool use: 68/100.** AA Index 39 (#52/211, above class median 26) with agentic evals in the composite; no direct TB2.1/Tau3 public numbers.
- **Reasoning: 68/100.** Index 39 sits above methodology's mid-band (Index 20–35 → 55–65); no direct GPQA/HLE numbers found.
- **Context window: 88/100.** 500K total context per AA specs (500K–1M tier = 85–94).
- **Multimodal: 65/100.** Text + image in, text out only (+image in = 60–70 band).
- **Coding: 67/100.** Composite (Index 39) includes SciCode and Terminal-Bench 4.0; no direct SWE-bench Verified / LiveCodeBench public numbers to verify.
- **Cost efficiency: 82/100.** $2.00/$6.00 per 1M (≤200K) sits between methodology's ~$1.25/$4.25 → ~88 and $3/$15 → ~60 bands; $1.04 per Index task.
- **Overall Score: 71/100.** (68 + 68 + 88 + 65 + 67) / 5 = 71.2 → 71. Best fit: mid-effort agentic work in a 500K window; superseded by Grok 4.6 for new work.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** — 2026-09-27
- Method: public internet research (Artificial Analysis model page + OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
