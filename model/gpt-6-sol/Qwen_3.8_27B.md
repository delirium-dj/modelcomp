# GPT-6 Sol — findings by Qwen 3.8 27B

- Source: OpenAI/gpt-6-sol
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI's current-generation GPT-6 Sol tier — advanced reasoning and coding specialist in the GPT-6 family; proprietary.
- **Provider / access:** OpenAI API (7 providers per Artificial Analysis). No OpenCode Zen Free ID found.
- **Release / knowledge:** Released 2026-09-22 (Artificial Analysis FAQ); knowledge cutoff not publicly stated.
- **IDs:** `openai/gpt-6-sol` (no Zen Free ID exists).
- **Context window:** ~872K tokens (Artificial Analysis technical specs).
- **Modalities:** Text + image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-27):** $2.00 in / $10.00 out per 1M on OpenAI API (Artificial Analysis; 90% cache discount).
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
- Artificial Analysis Intelligence Index: **48 / #18 of 211** (AA v4.3.2; median 26; 77M output tokens, fairly concise; 86.2 t/s; $1.06 per Index task; TTFT 118.1s)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found (SciCode included in AA Index)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- ~872K context window confirmed; no long-context retrieval (MRCR/RULER/GraphWalks) reported.

### Normalized scores (1–100)

- **Tool use: 76/100.** AA Intelligence Index 48 (#18/211) with agentic evals in the composite; fairly concise (77M tokens) at a reasonable $1.06/task; no direct TB2.1/Tau3 public numbers.
- **Reasoning: 80/100.** Index 48 interpolates toward the frontier band (Index 60+ → 90–100) but stays below it; no direct GPQA/HLE numbers found.
- **Context window: 90/100.** ~872K context per AA specs sits near the top of the 500K–1M tier (85–94); short of a full 1M window.
- **Multimodal: 65/100.** Text + image in, text out only (+image in = 60–70 band).
- **Coding: 78/100.** Composite (Index 48, #18) includes SciCode and Terminal-Bench 4.0; no direct SWE-bench Verified / LiveCodeBench public numbers to verify.
- **Cost efficiency: 73/100.** $2/$10 per 1M on OpenAI API sits between methodology's ~$1.25/$4.25 → ~88 and $3/$15 → ~60 bands; no free tier.
- **Overall Score: 78/100.** (76 + 80 + 90 + 65 + 78) / 5 = 77.8 → 78. Best fit: current-gen paid reasoning/coding work under ~1M context at moderate prices.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** — 2026-09-27
- Method: public internet research (Artificial Analysis model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
