# Qwen 3.5 27B — findings by Qwen 3.8 Max

- Source: Alibaba / Qwen (`qwen-3.5-27b`)
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 27B
- **Short description:** Alibaba's **February-2026 dense open-weight multimodal model** — 27.8B parameters (not MoE), a **Gated Delta Networks + FFN** dense architecture, Apache 2.0. Punches far above its size: **AA Intelligence Index 42** (the same score as the ~5×-larger Qwen3.5-122B-A10B MoE), GPQA Diamond 85.5%, SWE-bench Verified 72.4%, LiveCodeBench v6 80.7%, with multimodal input, a 262K→1M window, and a **$0.26 hosted / $0 self-host** price. Superseded (not deprecated) by Qwen3.6-27B (AA 46) and the MoE sizes.
- **Provider / access:** Open-weight (Hugging Face `Qwen/Qwen3.5-27B`, Apache 2.0). Hosted on DeepInfra, Alibaba Cloud Model Studio, Novita, GMI, OpenRouter. **Not on OpenCode Zen**; **no free hosted tier** (`noFreeId: true`) — self-hosting the Apache weights is free.
- **Release / knowledge:** Released **February 24, 2026** (Qwen3.5 family); open-weight, still served — but **superseded** by Qwen3.6-27B (April 2026) and the 3.6/3.7/3.8 generations on most axes. Knowledge cutoff not published.
- **IDs:** `qwen/qwen3.5-27b`; HF `Qwen/Qwen3.5-27B`.
- **Context window:** **262,144 native, extensible to ~1,010,000 via YaRN**; **65,536 max output** (some providers cap at 64K). The 1M is a YaRN extension, not the native trained window.
- **Modalities:** **Text + image in → text out** confirmed (llm-stats, DeepInfra "multimodal input … through early fusion"); meta additionally claims **video** (plausible for the native-VL Qwen3.5 family, but not independently confirmed for this 27B size — ⚠ flagged). Reasoning: **thinking + non-thinking modes**; tool calling; 201 languages.
- **Pricing (as of 2026-10-27):** Hosted **$0.27/$2.16** per 1M (OpenRouter, meta), **$0.26/$2.60** DeepInfra FP8 (blended $0.84), **$0.30/$2.40** (Alibaba/Novita/GMI, blended $0.82). **Self-host $0** (Apache 2.0). Extremely cheap for the capability.
- **Architecture:** **Dense** (27.8B) — Gated Delta Networks + Feed-Forward Networks (contrast with the Qwen3.5 MoE variants); early-fusion multimodal; thinking/non-thinking.

### Raw benchmarks found

> Independent anchor: **Artificial Analysis Intelligence Index = 42** for "Qwen3.5 27B (Dense)," per Artificial Analysis's own Qwen3.5-family announcement (the successor Qwen3.6-27B scores 46 — a coherent progression). AA's model page 404'd for the `qwen-3-5-27b` slug and an OpenRouter snippet ambiguously showed "22.9" (a scrambled/partial value, not inherited). Benchmark scores are the official Qwen scorecard as re-reported by DeepInfra/llm-stats. No Vals SWE-bench row or Epoch ECI entry was located for this exact model.

Independent / composite:

- **AA Intelligence Index: 42 (Dense)** — the **same Index as the 122B-A10B MoE**, an outstanding result for a 27B dense model; "well above average" for its class. **AA-Omniscience: −42** (hallucination/knowledge metric, comparable to MiniMax — negative is typical).

Vendor / official scorecard (re-reported by DeepInfra & llm-stats):

- **MMLU-Pro: 86.1%**; **GPQA Diamond: 85.5%**.
- **SWE-bench Verified: 72.4%** (a touch above the 122B MoE's 72.0%); **LiveCodeBench v6: 80.7%** (meta/official scorecard — not re-listed in DeepInfra's 27B article).
- Serving: DeepInfra FP8 **153.3 tok/s**, **0.91s TTFT** (#1 of 4 providers); Function Calling on all, JSON mode on 3 of 4.

> Provenance: **AA Index 42** (Artificial Analysis announcement) is the independent signal and is corroborated by the family progression (3.6-27B = 46). MMLU-Pro/GPQA/SWE-Verified are official-scorecard figures re-reported by DeepInfra (a host) and llm-stats — vendor-adjacent but cross-consistent, and the AA Index corroborates overall strength. **LiveCodeBench v6 80.7%** is meta/scorecard-only in my sources. No neutral SWE harness (Vals/swebench.com) row was found, so coding leans on the vendor 72.4%.
> Meta verification: mostly accurate — Apache 2.0 dense 27.8B ✓, 262K native → ~1M YaRN ✓, 65K out ✓, thinking/non-thinking + tool calling ✓, GPQA 85.5% ✓, SWE-bench Verified 72.4% ✓, "not on Zen" ✓, $0.27/$2.16 + $0 self-host ✓, "superseded by MoE sizes and 3.6/3.7/3.8" ✓ (Qwen3.6-27B AA 46 > 42). **Two flags:** (1) **LiveCodeBench v6 80.7%** appears only in the meta/scorecard, not re-confirmed independently; (2) modality — llm-stats/DeepInfra confirm **text+image** but the meta's **video** claim is not independently verified for this 27B size (the 122B explicitly supports video). Documented, not inherited.

### Normalized scores (1–100)

- **Tool use: 80/100.** **Tool calling** is supported and SWE-bench Verified (72.4%) shows real agentic coding, but unlike the 122B MoE there are **no reported TAU2-Bench / Terminal-Bench / BrowseComp** figures for this exact size in my sources — so the agentic evidence is thinner. Solid mid-band for a dense 27B with function calling.
- **Reasoning: 82/100.** **AA Intelligence Index 42** — matching the ~5×-larger 122B MoE and "well above average" for its class — plus **GPQA Diamond 85.5%** and **MMLU-Pro 86.1%**. Genuinely strong reasoning for a 27B dense model, short of the frontier tier.
- **Context window: 78/100.** **262K native** (the 256K band); the ~1M is a **YaRN extension**, not the native trained window, so not credited at the 1M tier. 65K max output is generous.
- **Multimodal: 80/100.** **Text + image confirmed** (early-fusion native VL); **video is meta-claimed** and family-plausible but **not independently confirmed for this 27B** (llm-stats lists only text+image). Scored at the verified-image tier with a small bump for the native-VL early-fusion design, held below the confirmed-video 122B (83) pending video verification.
- **Coding: 79/100.** **SWE-bench Verified 72.4%** and **LiveCodeBench v6 80.7%** are strong-published but vendor/scorecard-reported with **no neutral Vals/swebench.com row**; mid-pack versus current leaders (SWE-Verified 95%+). Notably, the 27B matches/edges the 122B MoE on SWE-Verified.
- **Cost efficiency: 92/100.** Outstanding — **Apache 2.0 self-host $0** (a 27B dense fits modest hardware), hosted from **$0.26–$0.27/$2.16–$2.60** (blended $0.82–$0.84) at **153 tok/s**. One of the best capability-per-dollar profiles in the open-weight field. Not counted toward Overall.
- **Overall Score: 80/100.** Mean of Tool 80 + Reasoning 82 + Context 78 + Multimodal 80 + Coding 79 = 399 / 5 = 79.8 → 80. Best fit: a **cheap, dense, open-weight multimodal workhorse** that punches far above its 27B size (AA Index 42 ≈ the 122B MoE), ideal for cost-sensitive self-hosted or budget-API vision-language + coding work; step up to Qwen3.6-27B (AA 46), the 122B MoE, or a proprietary frontier model when you need the latest agentic/coding edge. **Divergence note:** curated queue 78.3 vs my 80 → **+1.7**. The positive gap reflects the **AA Index 42** independent anchor (equal to a model ~5× its size) and strong GPQA/SWE-Verified/LiveCodeBench numbers, which I read as slightly under-credited by the curated score; the curated 78.3 likely weights the **supersession** (Qwen3.6-27B already at 46) and the thinner size-specific agentic evidence (no TAU2/Terminal-Bench for the 27B) more heavily. Consistent with its sibling qwen-3.5-122b-a10b (+2.4) — both are stronger than curated on the back of the same AA-42 family result.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-27
- Method: public internet research (Artificial Analysis Qwen3.5-family announcement for Intelligence Index 42 / AA-Omniscience −42; DeepInfra provider/benchmark analysis citing the official Qwen scorecard; llm-stats.com specs/pricing/release/modality; Qwen3.5 blog for dense Gated-Delta-Networks architecture; Artificial Analysis `qwen-3-5-27b` page and OpenRouter benchmark table were ambiguous/404 so the AA announcement was used); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
