# Hy3 — findings by Kimi K3

- Source: Tencent / Hy3 (Hunyuan 3, `tencent/hy3`; HF `tencent/Hy3`)
- Date: 2026-10-13 (UTC) — deep second pass (first pass 2026-09-24; HF hub metadata verifies the repo (live, ungated, Apache 2.0), corrects total params to ~299B BF16, and reveals the reasoning-effort + tool-call template machinery)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3 (Hunyuan 3, instruct)
- **Short description:** Tencent's open-weight Hunyuan MoE — ~299B total params (safetensors BF16), 21B-active reported, 256K context, hybrid fast-and-slow thinking, Apache 2.0. Mid-pack results with a decent LCR (79.0%) but weak agentic scores. **Superseded by Hy4 preview (770B/49B) in Aug 2026.**
- **Provider / access:** open weights HF `tencent/Hy3` (Apache 2.0, ungated, inference "warm" — verified 2026-10-13; created 2026-07-02, last modified 2026-07-20); hosted preview on TokenHub ~$0.18/$0.59 per 1M (first-pass catalog note); not on Zen (2026-10-13 listing). Serves via vLLM/SGLang; full finetuning+RL pipeline shipped in-repo.
- **Release / knowledge:** July 2026 per HF created/lastModified stamps (2026-07-02 / 07-20 — new this pass); cutoff not verified.
- **IDs:** `tencent/Hy3` (HF, canonical).
- **Context window:** 256K tokens / 32K max output (catalog + benchlm.ai, first pass).
- **Modalities:** text in → text out; **reasoning with `reasoning_effort`: `no_think` (default) / low / high** — verified from the shipped chat template this pass; tool calls have a full `<tool_calls>` template path (capability confirmed at template level); JSON mode per serving stack. Note: first pass said "text/image in" — the HF repo is `text-generation` pipelines only; image-in was a catalog claim, not verified — corrected.
- **Pricing (as of 2026-10-13):** open weights → self-host; TokenHub ~$0.18/$0.59 preview (first-pass note, not re-verified).
- **Architecture:** MoE, **safetensors total 298.8B params BF16** (verified — first-pass "295B" was catalog-rounded), **192 routed experts, top-8 per token** (config.json — new this pass), Apache 2.0.

### Raw benchmarks found (benchlm.ai, first-pass snapshot — HF repo carries eval-results tag but no new tracker rows since)

Agent / tool use:

- GDPval-AA: **1136 Elo** (27.3% normalized)
- AA Agentic Index: **25.6%**
- Terminal-Bench / Tau2/Tau3 / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond (AA): **89.7%**
- HLE (AA-HLE): **33.5%**
- AA-LCR: **79.0%**; CritPt: **4.9%**
- Artificial Analysis Intelligence Index: **25.3**; BenchLM overall **51.45/100, #69 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **32.0% / 74.1%**

Coding:

- AA Coding Index: **58.8**; AA-SciCode: **48.6%**
- SWE-bench / LiveCodeBench / DeepSWE: no verified public score found

Long context:

- AA-LCR 79.0% within 256K; no MRCR/RULER rows.

Multimodal:

- Design Arena Website: **1193 Elo** (only vision-adjacent row); HF pipeline is text-generation — treat image-in as unverified.

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded. (Score changes vs first pass shown inline.)

- **Tool use: 58/100.** Unchanged — GDPval 1136 and Agentic Index 25.6% below mid-tier; template-level tool-calling confirmed but no measured terminal/tau row exists.
- **Reasoning: 68/100.** Unchanged — GPQA 89.7% and LCR 79.0% solid; capped by HLE 33.5%, CritPt 4.9%, hallucination 74.1%. (Thinking defaults to `no_think`; `high` effort exists but no effort-split benchmark rows.)
- **Context window: 68/100.** Unchanged — 256K window with LCR 79.0%; below the 1M tier.
- **Multimodal: 60/100.** −6 — image-in claim could not be verified against the HF repo (text-generation pipeline only); only one Design Arena row remains as evidence.
- **Coding: 62/100.** Unchanged — Coding Index 58.8, SciCode 48.6%; no SWE-bench-family rows cap it.
- **Cost efficiency: 86/100.** Unchanged — Apache 2.0 open weights (ungated, verified) + ~$0.18/$0.59 preview hosting note.
- **Overall Score: 63/100.** Half-up mean of the five quality dims (58+68+68+60+62)/5 = 63.2 → 63 (was 64). Best fit: Apache-licensed 256K self-hosting for Chinese/English chat and light coding; Hy4 preview supersedes it for capability.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-13
- Method: deep second-pass public web research (HF API metadata for `tencent/Hy3` fetched 2026-10-13 — ungated Apache 2.0, 298.8B BF16 safetensors, 192 experts / top-8 config, created 2026-07-02, shipped chat template with `reasoning_effort` no_think/low/high and a full tool-call path; Zen listing 2026-10-13 — absent). First-pass benchlm.ai rows retained as that snapshot. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
