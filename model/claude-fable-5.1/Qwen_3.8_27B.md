# Claude Fable 5.1 — findings by Qwen 3.8 27B

- Source: Anthropic/claude-fable-5.1
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's Mythos-class model above Opus 5, built for the most demanding reasoning and long-horizon agentic work; proprietary, released September 2026.
- **Provider / access:** Anthropic API (Chat/Responses API); 6 API providers per Artificial Analysis. No OpenCode Zen Free ID found.
- **Release / knowledge:** Released 2026-09-01 (Artificial Analysis FAQ); knowledge cutoff not publicly stated.
- **IDs:** `anthropic/claude-fable-5.1` (no Zen Free ID exists).
- **Context window:** 1M tokens (Artificial Analysis technical specs); 128K max output per repo meta (not independently re-verified).
- **Modalities:** Text + image in; text out; reasoning (adaptive) yes; tool calls yes; PDF input not confirmed on AA page.
- **Pricing (as of 2026-09-27):** $10.00 in / $50.00 out per 1M, 98% cache discount (Artificial Analysis, Anthropic API); no free tier.
- **Architecture:** Proprietary; parameter count not disclosed by Anthropic.

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
- Artificial Analysis Intelligence Index: **53 / #4 of 211** (AA v4.3.2; median 26; 190M output tokens, very verbose; $7.63 per Index task)
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

- **Tool use: 85/100.** Top-4 AA Intelligence Index (53) with agentic knowledge-work evals (AA-Briefcase, GDPval-AA, AutomationBench-AA) in the composite; very verbose (190M tokens per Index) and $7.63/task cap it below frontier efficiency leaders; no direct TB2.1/Tau3 public numbers.
- **Reasoning: 84/100.** AA Intelligence Index 53 (#4/211, median 26) interpolates between methodology mid-band (Index 20–35 → 55–65) and frontier band (Index 60+ → 90–100); no direct GPQA/HLE numbers found.
- **Context window: 95/100.** 1M total context per AA specs (≥1M tier = 95–100); no verified ≥98% retrieval at 512K+ to justify 100.
- **Multimodal: 65/100.** Text + image in, text out only (+image in = 60–70 band); no audio/video input confirmed.
- **Coding: 85/100.** Elite composite (Index 53, #4) includes SciCode and Terminal-Bench 4.0; no direct SWE-bench Verified / LiveCodeBench public numbers to verify.
- **Cost efficiency: 30/100.** $10/$50 per 1M on paid Anthropic API matches methodology's $10/$50 → ~30 band; no free tier.
- **Overall Score: 83/100.** (85 + 84 + 95 + 65 + 85) / 5 = 82.8 → 83. Best fit: highest-stakes reasoning/agentic work where latency and price do not matter; not a cost-efficient daily driver.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** — 2026-09-27
- Method: public internet research (Artificial Analysis model page, Anthropic site 404-checked); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
