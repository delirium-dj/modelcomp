# Qwen 3.8 27B — findings by Qwen 3.8 27B

- Source: Alibaba/Qwen — Qwen3.8-27B
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 27B
- **Short description:** Alibaba's open-weights 27B dense vision-language model of the Qwen3.8 generation; Apache-2.0, text/image/video in, thinking on by default, top-ranked in its open-weights size class on the AA Intelligence Index.
- **Provider / access:** 10 API providers per Artificial Analysis (incl. `openrouter/qwen/qwen3.8-27b`, free-tier variants exist on OpenRouter); open weights on Hugging Face (`Qwen/Qwen3.8-27B`); no OpenCode Zen ID (no Free ID).
- **Release / knowledge:** 2026-08-14 (Artificial Analysis FAQ); knowledge cutoff not publicly stated.
- **IDs:** `Qwen/Qwen3.8-27B` (HF), `qwen/qwen3.8-27b` (OpenRouter); no Zen Free ID.
- **Context window:** 256K total (AA technical specs; FAQ lists 260K; repo meta: 262,144 native, extensible to 1M with YaRN).
- **Modalities:** Text, image, video in; text out (AA verified); reasoning yes (thinking on by default; low/medium/high/xhigh effort variants tracked on AA; non-reasoning variant also listed); tool calls yes.
- **Pricing (as of 2026-09-27):** $0.50 in / $3.00 out per 1M on the tracked API provider (Artificial Analysis; 80% cache discount; $1.01 per Intelligence Index task at xhigh).
- **Architecture:** Dense 27B (AA); Apache 2.0 license.

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
- Artificial Analysis Intelligence Index: **34 / #1 of 142** (AA v4.3.2, xhigh reasoning variant; open-weights small size class 4B–40B; class median 8; medium 28 / low 26 / non-reasoning variant also listed; 200M output tokens, very verbose; 46.3 t/s #56 speed; TTFT 3.82s; $1.01 per Index task)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found (SciCode included in AA Index)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 256K context window confirmed; no long-context retrieval (MRCR/RULER/GraphWalks) reported; YaRN extension to 1M per repo meta (unverified).

### Normalized scores (1–100)

- **Tool use: 66/100.** AA Index 34 ranks #1 in the 4B–40B open-weights size class (class median 8) with agentic evals in the composite; notably slow decode (46.3 t/s) and very verbose cap the efficiency credit; no direct TB2.1/Tau3 public numbers.
- **Reasoning: 64/100.** Index 34 sits above methodology's mid-band (Index 20–35 → 55–65); class-leading for a 27B open model; no direct GPQA/HLE numbers found.
- **Context window: 78/100.** 256K total context per AA specs (200K–500K tier = 65–84); YaRN 1M extension unverified.
- **Multimodal: 85/100.** AA verifies text + image + video in, text out (+video/PDF in = 75–90 band); no audio input.
- **Coding: 64/100.** Composite (Index 34, class-leading) includes SciCode and Terminal-Bench 4.0; no direct SWE-bench Verified / LiveCodeBench public numbers to verify.
- **Cost efficiency: 90/100.** $0.50/$3.00 per 1M on the tracked provider sits near methodology's ~$0.60/$2.20 → ~92 band; Apache-2.0 open weights allow free self-hosting.
- **Overall Score: 71/100.** (66 + 64 + 78 + 85 + 64) / 5 = 71.4 → 71. Best fit: single-GPU / on-prem agentic coding and multimodal work where top-27B intelligence matters more than raw speed.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** — 2026-09-27
- Method: public internet research (Artificial Analysis model page + Hugging Face); scores are normalized 1–100 interpretations, not official vendor scores. Note: the reporting agent is this same model; all figures are taken from the cited third-party sources.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
