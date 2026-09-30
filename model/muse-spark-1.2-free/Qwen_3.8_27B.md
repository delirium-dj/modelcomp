# Muse Spark 1.2 Free — findings by Qwen 3.8 27B

- Source: Meta/muse-spark-1.2-contributor-free
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2 Free (Contributor free tier of Meta's Muse Spark 1.2; same weights as `muse-spark-1.2`)
- **Short description:** Meta's prior-gen coding/agent model co-trained with Muse Code, for terminal coding, MCP tool use and whole-repo generation; free capped tier on OpenCode Zen in exchange for training-data consent.
- **Provider / access:** OpenCode Zen free tier `opencode/muse-spark-1.2-contributor-free`; Meta API (2 providers per Artificial Analysis) at $1.25/$4.25; Vercel/other gateways.
- **Release / knowledge:** 2026-08-05 (Artificial Analysis FAQ); knowledge cutoff not publicly stated.
- **IDs:** `opencode/muse-spark-1.2-contributor-free` (Free Zen ID); paid `muse-spark-1.2` at $1.25/$4.25 (AA, Meta API).
- **Context window:** 1M tokens (Artificial Analysis technical specs).
- **Modalities:** Text, image, audio (speech), video in; text out (AA verified); reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-27):** [Free OpenCode Zen tier](https://opencode.ai/v2/docs/console/models/#free-models) ($0 during limited free period; training-data consent required — do not use for confidential code); paid Standard $1.25/$4.25 per 1M; Contributor $0.10/$0.20.
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
- Artificial Analysis Intelligence Index: **40 / #47 of 211** (AA v4.3.2; median 26; 130M output tokens; 256.1 t/s, #6 speed; $0.97 per Index task)
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

- **Tool use: 78/100.** AA Intelligence Index 40 (#47/211) with agentic evals in the composite and very fast 256 t/s execution; no direct TB2.1/Tau3 public numbers to confirm.
- **Reasoning: 73/100.** Index 40 interpolates between methodology mid-band (Index 20–35 → 55–65) and frontier band (Index 60+ → 90–100); no direct GPQA/HLE numbers found.
- **Context window: 95/100.** 1M total context per AA specs (≥1M tier = 95–100); no verified ≥98% retrieval at 512K+ to justify 100.
- **Multimodal: 90/100.** AA verifies text + image + speech + video in, text out; audio/video input puts it in the 90–100 band, capped at 90 for text-only output.
- **Coding: 78/100.** Composite (Index 40) includes SciCode and Terminal-Bench 4.0; no direct SWE-bench Verified / LiveCodeBench public numbers to verify.
- **Cost efficiency: 100/100.** Evaluated [Free OpenCode Zen tier](https://opencode.ai/v2/docs/console/models/#free-models) = $0 (time-limited; training-data consent caveat — not for confidential code).
- **Overall Score: 83/100.** (78 + 73 + 95 + 90 + 78) / 5 = 82.8 → 83. Best fit: near-frontier free fallback for long-horizon coding/agentic work when the 1.3 free tier is unavailable.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** — 2026-09-27
- Method: public internet research (Artificial Analysis model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
