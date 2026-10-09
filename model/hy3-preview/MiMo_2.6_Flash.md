# Hy3 Preview — findings by Mimo v2.6 Flash

- Source: Tencent Hy (Hunyuan)/`hy3-preview`
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3 Preview
- **Short description:** Tencent's April 2026 preview of the Hy3 Hunyuan MoE (295B/21B, Apache 2.0) — first public step of Tencent's pretrain/RL rebuild; strong SWE-Verified/TB jump vs Hy2 for 21B active params; **superseded by full Hy3 GA on 2026-07-06** (same architecture, better post-training). Keep only when pinning the preview snapshot.
- **Provider / access:** Tencent Cloud TokenHub API `hy3-preview` (or family route); OpenRouter/HF/ModelScope/GitCode open weights (vLLM/SGLang). **No OpenCode Zen Free ID** (`noFreeId: true`).
- **Release / knowledge:** 2026-04-23 (Tencent news + GitHub); trained from late January (~3 months to preview). Knowledge cutoff not restated.
- **IDs:** `tencent/hy3-preview` (meta); `tencent/Hy3-preview` (HF/GitHub).
- **Context window:** **256,000** in / **32K** out (meta).
- **Modalities:** **text + image in; text out** (meta); hybrid fast/slow thinking; tool calls yes.
- **Pricing (as of 2026-09-22):** TokenHub preview **~$0.18 in / $0.59 out per 1M**; cache ~$0.06; personal Token Plan from ~$4.10/mo (28 RMB). **No Zen Free ID.**
- **Architecture:** MoE **295B total / 21B active** (+3.8B MTP on GA card); 192 experts top-8; Apache 2.0 open weights.

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Tencent launch + Gate News/Decrypt restatement + GitHub base-model table (base ≠ chat — noted).

Agent / tool use:

- Terminal-Bench 2.0: **54.4%** (Tencent via Gate News; Hy2 was 23.2%)
- BrowseComp: **67.1%** (Tencent via Gate News; Hy2 28.7%)
- SWE-bench Verified: **74.4%** (Tencent via Gate News; Hy2 53.0%) — note: high vs many open peers at preview date; GA Hy3 later reported differently on SWE-Pro (46→57.9) — SWE-V figure is this board, not SWE-Pro
- ClawEval / WildClawBench: "scores well" (Tencent qualitative — **exact % not published** in extracts)
- WideSearch / GDPval / Toolathlon / MCP-Atlas: no verified public score found
- Internal suites (Hy-Backend, Hy-Vibe Bench, Hy-SWE Max): competitive vs open models (Tencent — internal, no public %)

Reasoning / knowledge:

- MMLU (base): **87.42**; MMLU-Pro (base): **65.76** (GitHub Hy3-preview-Base table — base model, not chat post-train)
- STEM/exam claims: "exceptional on complex reasoning" (Tencent qualitative — no GPQA/HLE % in extracts)
- GPQA Diamond / HLE / AA Intelligence Index for chat `hy3-preview`: no verified public score found

Coding:

- SWE-bench Verified: **74.4%** (see above)
- Terminal-Bench 2.0: **54.4%** (above)
- LiveCodeBench-v6 (base): **34.86** (GitHub base table)
- MBPP-plus (base): **78.71**; CRUXEval-I (base): **71.19**
- SWE-bench Pro / DeepSWE / SciCode for chat preview: no verified public score found (GA Hy3 later: SWE-Pro 46.0 preview → 57.9 GA per Swfte)

Long context:

- 256K window; MRCR / RULER: no verified public score found

Multimodal:

- **Text + image in** (meta) — image-in band; no video/audio declared

### Normalized scores (1–100)

- **Tool use: 68/100.** TB2.0 54.4 and BrowseComp 67.1 are real agentic gains over Hy2 (23/28) at 21B active; ClawEval praised without numbers; no GDPval/Toolathlon/MCP/Tau rows — mid agentic stack.
- **Reasoning: 72/100.** Base MMLU-Pro ~66 is solid mid-tier; chat GPQA/HLE/AA-Index all missing — reasoning breadth under-documented for this preview ID.
- **Context window: 74/100.** 256K in the 200–500K tier (~74); 32K out is a mild cap; no retrieval curve.
- **Multimodal: 65/100.** Text + image in (meta), no video/audio — upper image-only band.
- **Coding: 74/100.** SWE-Verified 74.4 (Tencent) and TB2.0 55+ are strong preview coding claims for the size class; base LiveCodeBench 34.9 and no SWE-Pro/DeepSWE chat rows keep it below GA Hy3/5.x flagships.
- **Cost efficiency: 95/100.** ~$0.18/$0.59 + Apache 2.0 self-host is excellent; not free on Zen (`noFreeId: true`), and the preview ID is a superseded snapshot (GA Hy3 same or better price).
- **Overall Score: 71/100.** Mean of five quality dims (68+72+74+65+74)/5 = 70.6 → 71. Best-fit: only when you must pin the **April 2026 preview** weights/API for reproducibility — **new work should use full Hy3** (`tencent/hy3`, GA 2026-07-06) at the same TokenHub price with better post-training.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (Tencent.com Hy3 preview article, GitHub Tencent-Hunyuan/Hy3-preview, Tencent Cloud Techpedia 144775, Gate News/Decrypt benchmark restatement); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
