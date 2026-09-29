# Hy3 (Hunyuan 3) — findings by Qwen 3.8 27B

- Source: Tencent (`hy3`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3 (Tencent Hunyuan 3, GA)
- **Short description:** Tencent Hy Team's open-weights MoE coder/agent model (GA 2026-07-06, April preview predecessor); built for production agent workloads — cross-file refactoring, long-document analysis, multi-step tool use.
- **Provider / access:** Tencent Hunyuan API; open weights on Hugging Face `tencent/Hy3` / `tencent/Hy3-preview`; hosted e.g. on SiliconFlow. No OpenCode Zen ID (not in Zen model list).
- **Release / knowledge:** preview April 2026; GA 2026-07-06 (Tencent, per aitooltier review); knowledge cutoff not disclosed.
- **IDs:** `tencent/Hy3` (Hugging Face open weights); provider API ids vary (e.g. SiliconFlow `hy3`). No Zen ID.
- **Context window:** 256K total (262,144), max output 16K (swfte / llm-stats; official repo says 256K).
- **Modalities:** text in / text out; hybrid fast/slow reasoning; tool calls yes (agent positioning); no image/audio input found.
- **Pricing (as of 2026-09-29):** ~$0.14 in / $0.58 out / $0.035 cached in per 1M (llm-stats provider listing); open weights Apache 2.0 for self-hosting.
- **Architecture:** 295B total / 21B active parameters + 3.8B MTP layer, MoE, open weights, Apache 2.0; first model trained on Tencent's rebuilt infrastructure (vendor).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: **1136** (**27.3%** normalized) (BenchLM, 2026-09-28)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- AA Agentic Index: **25.6%** (BenchLM/AA)

Reasoning / knowledge:

- GPQA Diamond: **89.7%** (AA-GPQA, via BenchLM)
- HLE: **33.5%** (AA-HLE via BenchLM)
- LCR / MLCR: LCR **79.0%** (BenchLM/AA)
- CritPt: **4.9%** (BenchLM)
- Artificial Analysis Intelligence Index / BenchLM overall: **25.3** / **51.42 (#79 of 512)**
- Omniscience Accuracy / Hallucination Rate: **32.0% / 74.1%** (AA via BenchLM)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: **48.6%** (BenchLM/AA)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: AA Coding Index **58.8%**; Design Arena Agentic Web Dev Elo **1190** (BenchLM)

Long context:

- 256K window / 16K max output; no long-context retrieval benchmark reported beyond AA-LCR 79.0%.

### Normalized scores (1–100)

- **Tool use: 60/100.** GDPval-AA 1136 inside the mid band (900–1200) but AA Agentic Index 25.6% is weak; no TB2.1/Tau3/Toolathon of record — capped in the low-mid band.
- **Reasoning: 70/100.** GPQA 89.7% at the frontier threshold and LCR 79.0% solid; capped by HLE 33.5% (<40%), CritPt 4.9%, AA Index 25.3 (mid) and a 74.1% hallucination rate.
- **Context window: 75/100.** 256K sits in the 200K–500K tier (65–84), upper part; 16K max output noted as caveat.
- **Multimodal: 15/100.** Text-only input (no image/audio found in any source) → text-only floor tier.
- **Coding: 70/100.** AA Coding Index 58.8% and SciCode 48.6% in the mid band (65–75 territory for "LiveCode 80 / Vibe <10 / SciCode <40"); capped by missing SWE-bench / LiveCodeBench of record.
- **Cost efficiency: 95/100.** ~$0.14/$0.58 per 1M (hosted) sits just above the ~$0.10/$0.20 = 97–99 reference; Apache 2.0 self-hosting further lowers floor cost.
- **Overall Score: 58/100.** (60 + 70 + 75 + 15 + 70) / 5 = 58. Best fit: cheap open-weights coding/agent workhorse at 256K; verify outputs (high hallucination rate) and use the free preview weights for self-hosting.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-09-29
- Method: public internet research (BenchLM, Hugging Face / GitHub tencent/Hy3, llm-stats, swfte, siliconflow, aitooltier, hy.tencent.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
