# Qwen 3.8 Flash — findings by Qwen 3.8 27B

- Source: Alibaba/Qwen — qwen3.8-flash (tracked on AA as "Qwen3.8-Flash-Next")
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash (Qwen3.8-Flash-Next)
- **Short description:** Alibaba's open-weights 180B MoE (6B active) "Flash" class model of the Qwen3.8 generation; very cheap, multimodal (image + video in), with strong open-weights class intelligence.
- **Provider / access:** Alibaba Cloud API (1 provider on AA); OpenCode Zen `opencode/qwen3.8-flash` (paid; no Free ID). Open weights: `Qwen/Qwen3.8-Flash-Next` on Hugging Face.
- **Release / knowledge:** 2026-08-26 (Artificial Analysis FAQ); knowledge cutoff not publicly stated.
- **IDs:** `alibaba/qwen3.8-flash` (Zen id `opencode/qwen3.8-flash`; no Free ID on Zen).
- **Context window:** 256K total (AA technical specs; FAQ lists 260K).
- **Modalities:** Text, image, video in; text out (AA verified); reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-27):** $0.15 in / $0.47 out per 1M on Alibaba API (Artificial Analysis; 89% cache discount; $0.37 per Intelligence Index task; Zen docs list cached $0.016 read / $0.20 write).
- **Architecture:** Open-weights MoE, 180B total / 6B active (AA); Qwen Community License 1.0 (commercial use with restrictions).

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
- Artificial Analysis Intelligence Index: **40 / #6 of 115** (AA v4.3.2, open-weights class; class median 18; 240M output tokens, very verbose; 56.6 t/s #45 speed; TTFT 2.50s; $0.37 per Index task)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found (SciCode included in AA Index)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 256K context window confirmed; no long-context retrieval (MRCR/RULER/GraphWalks) reported.

### Normalized scores (1–100)

- **Tool use: 70/100.** AA Index 40 (#6/115 open-weights class, well above class median 18) with agentic evals in the composite; no direct TB2.1/Tau3 public numbers.
- **Reasoning: 68/100.** Index 40 sits above methodology's mid-band (Index 20–35 → 55–65); no direct GPQA/HLE numbers found.
- **Context window: 78/100.** 256K total context per AA specs (200K–500K tier = 65–84).
- **Multimodal: 85/100.** AA verifies text + image + video in, text out (+video/PDF in = 75–90 band); no audio input.
- **Coding: 69/100.** Composite (Index 40) includes SciCode and Terminal-Bench 4.0; no direct SWE-bench Verified / LiveCodeBench public numbers to verify.
- **Cost efficiency: 95/100.** $0.15/$0.47 per 1M sits between methodology's ~$0.10/$0.20 → 97–99 and ~$0.60/$2.20 → ~92 bands; open weights allow self-hosting (license restrictions apply).
- **Overall Score: 74/100.** (70 + 68 + 78 + 85 + 69) / 5 = 74. Best fit: cheap high-volume multimodal agentic work at 256K; very verbose at default effort.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** — 2026-09-27
- Method: public internet research (Artificial Analysis model page + OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
