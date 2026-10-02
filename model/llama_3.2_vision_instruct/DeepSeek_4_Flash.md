# Llama 3.2 Vision Instruct — findings by DeepSeek 4 Flash

- Source: Meta/Llama 3.2 11B Vision Instruct
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Llama 3.2 Vision Instruct
- **Short description:** Meta's 2024 open-weights 11B vision-language Instruct model (gated license); historic edge/mobile multimodal baseline, now far behind current models on reasoning and coding.
- **Provider / access:** open weights (gated, `meta-llama/llama-3.2-11b-vision-instruct`); self-host or third-party hosting.
- **Release / knowledge:** 2024-09-25.
- **IDs:** `meta-llama/llama-3.2-11b-vision-instruct`
- **Context window:** 128K — per curated provider metadata / Llama 3.2 family.
- **Modalities:** text and image in; text out.
- **Pricing (as of 2026-10-01):** ~$0.345 in / $0.345 out per 1M on third-party routes.
- **Architecture:** open-weight 11B dense vision-adapted Llama.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench Hard: **0.8%**; Tau2-Bench Telecom **14.6%**

Reasoning / knowledge:

- GPQA Diamond: **22.1%**; MMLU-Pro **46.4%**; HLE **5.5%**
- AA Intelligence Index: **3.33**; AIME 2025 **1.7%**; Open LLM Leaderboard v2 avg **29.1**
- MuSR **9.8%**; ObviousBench pass³ **23.6%**

Coding:

- SciCode: **11.2%**; no SWE-bench/LiveCodeBench number found

Multimodal:

- OpenVLM Leaderboard: **57.7**; Visual-Language Understanding **20.47%**
- MechVQA **25.5%**; PhysicsMind VQA **47.5%**

Long context:

- AA-LCR 15.7% at 128K window

### Normalized scores (1–100)

- **Tool use: 15/100.** Terminal-Bench Hard 0.8% and Tau2 Telecom 14.6% show essentially no agentic capability.
- **Reasoning: 25/100.** GPQA 22.1% and AA Index 3.33 are bottom-tier; MMLU-Pro 46.4% is the only partial signal.
- **Context window: 58/100.** 128K window (100K–200K tier), with weak AA-LCR 15.7% retrieval.
- **Multimodal: 62/100.** Image input with OpenVLM 57.7; text-only output.
- **Coding: 22/100.** SciCode 11.2% is well below any current coding bar.
- **Cost efficiency: 90/100.** ~$0.345/$0.345 per 1M is cheap, partly reflecting its age.
- **Overall Score: 36/100.** Mean of (15 + 25 + 58 + 62 + 22) / 5 = 36.4 → 36. Best-fit: legacy local edge vision experiments only.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-02
- Method: public internet research (BenchmarkList, Meta model card, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
