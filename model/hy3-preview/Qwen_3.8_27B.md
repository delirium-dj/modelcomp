# Hy3 Preview — findings by Qwen 3.8 27B

- Source: Tencent (`tencent/hy3-preview`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3 Preview
- **Short description:** Tencent Hy Team's April 2026 preview of the Hy3 Hunyuan MoE (295B total / 21B active, 256K context, MTP speculative layer) — first model on the rebuilt RL infrastructure; superseded by the full Hy3 (July 2026) and Hy4 (August 2026).
- **Provider / access:** Hugging Face `tencent/Hy3-preview` (self-host; vLLM/SGLang recipes), ModelScope/GitCode mirrors; OpenCode Zen `tencent/hy3-preview` per meta.json; no hosted free tier found.
- **Release / knowledge:** open-sourced 2026-04-23 (HF news line); knowledge cutoff not documented in retrieved sources.
- **IDs:** `tencent/hy3-preview` (Zen, per meta.json); `tencent/Hy3-preview` (weights).
- **Context window:** 256K (model card spec table; meta.json: 256K / 32K out).
- **Modalities:** text in/out; reasoning yes (`reasoning_effort` no_think/low/high); tool calls yes (`hy_v3` tool-call parser, auto tool choice). Image input listed in meta.json but not documented on the model card — unverified.
- **Pricing (as of 2026-09-29):** open weights under the Tencent Hy Community License (self-host); TokenHub preview ~$0.18/$0.59 per 1M per meta.json (not re-verified this session).
- **Architecture:** 295B total / 21B active MoE + 3.8B MTP layer, 80 layers, 192 experts top-8, BF16; Tencent Hy Community License.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **54.4** (Hugging Face evaluation results, harborframework/terminal-bench-2.0)
- ClawEval / WildClawBench: claimed "scores well" in vendor card charts only — no verified public score found (image-only benchmark appendix).
- Tau / GDPval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **87.2** (Hugging Face evaluation results, Idavidrein/gpqa)
- HLE: **30** (Hugging Face evaluation results, cais/hle)
- LCR / CritPt / AA Index: no verified public score found

Coding:

- SWE-bench Verified: **74.4** (Hugging Face evaluation results, SWE-bench/SWE-bench_Verified)
- Terminal-Bench 2.0: **54.4** (shared with agent row)
- LiveCodeBench / SciCode / Coding Index: no verified public score found

Long context:

- 256K window (model card); CL-bench/CL-bench-Life are vendor-internal context-learning sets — no independent MRCR/RULER numbers found.

### Normalized scores (1–100)

- **Tool use: 55/100.** TB2.0 54.4 sits in the mid band (45–60%) with no Tau/GDPval/Claw public numbers — capability is real (tool-call parser, agent claims) but thinly evidenced.
- **Reasoning: 68/100.** GPQA-D 87.2 is near the 90% frontier ref and HLE 30 is between the mid (<10) and frontier (40+) refs; missing LCR/CritPt evidence caps it.
- **Context window: 72/100.** 256K in the 200K–500K tier (65–84; 200K = 70, 256K ≈ 72), 32K max output.
- **Multimodal: 15/100.** Text in/out documented on the card; image input unverified.
- **Coding: 70/100.** SWE-bench Verified 74.4 is strong (frontier-adjacent) but TB2.0 54.4 and the missing LiveCode/SciCode data keep it mid-to-high.
- **Cost efficiency: 95/100.** Open weights, self-hostable (Tencent Hy Community License) near-zero marginal cost; hosted preview ~$0.18/$0.59 sits between the 97–99 and ~92 anchors.
- **Overall Score: 56/100.** Mean of the five quality dims (55+68+72+15+70)/5 = 56.0 — best fit: budget self-hosted coding/agent work where 256K suffices; a preview snapshot — Hy4/Hy3-full replace it.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen-3.8-27b)** — 2026-09-29
- Method: public internet research (Hugging Face tencent/Hy3-preview model card + evaluation results, retrieved 2026-09-29); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
