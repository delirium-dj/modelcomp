# Ling 3.0 Flash VL — findings by Fledge Alpha

- Source: Ant Group / InclusionAI (`ling-3.0-flash-vl`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash VL
- **Short description:** Vision-language sibling of Ling 3.0 Flash, adding image/video inputs and visual agent capabilities on the same 124B/5.1B-active MoE base.
- **Provider / access:** OpenRouter `inclusionai/ling-3.0-flash-vl`; Blackbox; Ant developer console; open weights via Hugging Face/ModelScope for the family.
- **Release / knowledge:** September 8, 2026; knowledge cutoff not published.
- **IDs:** `inclusionai/ling-3.0-flash-vl`, `opencode/ling-3.0-flash-vl` (scaffolded); no Zen Free ID verified.
- **Context window:** 256K per provider cards (Ant press release describes the series as extensible to 1M).
- **Modalities:** text, image, video in; text out; reasoning; function calling.
- **Pricing (as of 2026-10-05):** ~$0.021 in / $0.062 out per 1M (Ant pricing), Blackbox lists $0.075/$0.22; cache read ~$0.004–0.015.
- **Architecture:** Ling 3.0 Flash hybrid KDA+MLA linear-attention MoE (124B total, 5.1B active) plus vision encoder; open weights (family).

### Raw benchmarks found

Agent / tool use:

- BFCL v4: **73.0%** (BenchLM, Ling 3.0 Flash base; VL provisional)
- MCP Atlas: **65.5%** (BenchLM, base; provisional)
- Tau3 Banking: **28.0%** (AA, base; provisional)

Reasoning / knowledge:

- GPQA Diamond: **85.0–85.5%** (BenchLM/AA, base; provisional)
- MMLU-Pro: **82.0%** (BenchLM, base; provisional)
- HLE: **22.7–23.7%** (base; provisional)
- AA Intelligence Index: **20.1** (base; provisional)

Coding:

- SWE-bench Pro: **56.6%** (BenchLM, base; provisional)
- LiveCodeBench v5: **82.8%** (base; provisional)
- Terminal-Bench 2.1: **50.2–57.0%** (base; provisional)
- SciCode: **41.2%** (base; provisional)

Long context:

- AA-LCR: **73.0%** (base; provisional); no MRCR/GraphWalks for VL published.

Multimodal:

- No verified VL-specific numbers (MMMU, MathVista, Video-MME) published for this checkpoint; text/image/video input support documented by vendor and Blackbox spec sheet.

### Normalized scores (1–100)

> OVERALL SCORE FORMULA (v4): Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`; Cost efficiency scored independently.

- **Tool use: 74/100.** BFCL 73 and MCP Atlas 65.5 on the sibling base; no VL-specific tool eval.
- **Reasoning: 78/100.** GPQA 85 and MMLU-Pro 82 on the base; HLE 23 caps it. Provisional for VL.
- **Context window: 90/100.** 256K documented; series family extends to 1M.
- **Multimodal: 76/100.** Image+video in with a shared early-fusion encoder per vendor; no published VL benchmark numbers yet, so held below verified-flagship levels.
- **Coding: 76/100.** SWE-bench Pro 56.6 and LCB 82.8 on base; VL iteration presumed comparable, provisional.
- **Cost efficiency: 97/100.** ~$0.021/$0.062 per 1M is among the cheapest multimodal APIs listed.
- **Overall Score: 79/100.** Mean of five non-cost dims (74+78+90+76+76)/5 = 78.8 → 79; best fit: budget vision-language agent on Ling 3.0 Flash base — language scores provisional pending VL evals.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-05
- Method: public internet research (Ant Group press releases, BenchLM Ling 3.0 Flash table, Blackbox spec sheet, developer.ant-ling.com pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
