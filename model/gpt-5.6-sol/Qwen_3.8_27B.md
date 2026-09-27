# GPT-5.6 Sol — findings by Qwen 3.8 27B

- Source: OpenAI/gpt-5.6-sol
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI's advanced reasoning and coding specialist tier of the GPT-5.6 family; proprietary, now deprecated in favor of GPT-6 Sol but still benchmarked on the 10k-input workload.
- **Provider / access:** OpenAI API (8 providers per Artificial Analysis). No OpenCode Zen Free ID found.
- **Release / knowledge:** Released 2026-07-09 (Artificial Analysis FAQ); knowledge cutoff not publicly stated.
- **IDs:** `openai/gpt-5.6-sol` (no Zen Free ID exists).
- **Context window:** 1M tokens (Artificial Analysis technical specs).
- **Modalities:** Text + image in; text out; reasoning (adaptive) yes; tool calls yes.
- **Pricing (as of 2026-09-27):** $4.00 in / $20.00 out per 1M on OpenAI API (Artificial Analysis; 90% cache discount); repo meta lists $1.25/$10 on the Zen route.
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
- Artificial Analysis Intelligence Index: **47 / #19 of 211** (AA v4.3.2; median 26; 90M output tokens; $1.99 per Index task; 96.4 t/s)
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

- **Tool use: 78/100.** AA Intelligence Index 47 (#19/211) includes agentic evals (AA-Briefcase, GDPval-AA, AutomationBench-AA); solid but below top-10 composites; no direct TB2.1/Tau3 public numbers.
- **Reasoning: 78/100.** Index 47 interpolates between methodology mid-band (Index 20–35 → 55–65) and frontier band (Index 60+ → 90–100); no direct GPQA/HLE numbers found.
- **Context window: 95/100.** 1M total context per AA specs (≥1M tier = 95–100); no verified ≥98% retrieval at 512K+ to justify 100.
- **Multimodal: 65/100.** Text + image in, text out only (+image in = 60–70 band).
- **Coding: 78/100.** Elite-tier composite (Index 47) includes SciCode and Terminal-Bench 4.0; no direct SWE-bench Verified / LiveCodeBench public numbers to verify.
- **Cost efficiency: 50/100.** $4/$20 per 1M on OpenAI API sits between methodology's $3/$15 → ~60 and $10/$50 → ~30 bands; no free tier.
- **Overall Score: 79/100.** (78 + 78 + 95 + 65 + 78) / 5 = 78.8 → 79. Best fit: paid reasoning/coding specialist where 1M context matters; superseded by GPT-6 Sol on the OpenAI lineup.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** — 2026-09-27
- Method: public internet research (Artificial Analysis model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
