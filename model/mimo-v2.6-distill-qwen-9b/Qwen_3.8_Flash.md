# MiMo V2.6 Distill Qwen 9B — findings by Qwen 3.8 Flash

- Source: Xiaomi / MiMo‑V2.6‑Distill‑Qwen‑9B (HF `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`)
- Date: 2026‑10‑02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Distill Qwen 9B
- **Short description:** Xiaomi's **MIT‑licensed 9.4B dense SFT checkpoint** built on Qwen3.5‑9B and fine‑tuned on MiMo‑V2.6 agentic trajectories — explicitly positioned as a **research starting point for agentic RL**, not as a flagship. Ships with the Sept 2026 MiMo‑V2.6 wave. **Vendor‑reported TB 2.1 37.1 (vs 9B base 27.0) and SWE‑Pro 44.6% (vs base 32.0%)** are genuine size‑class lifts. No independent GPQA / HLE / AA Omniscience numbers exist. **Self‑host only** — no Zen / OpenRouter / HF inference route (ID absent from `zen/v1/models`, verified 2026‑09‑30).
- **Provider / access:** Hugging Face `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B` (~18.8 GB BF16 weights); community GGUF (`bartowski/…-GGUF:Q4_K_M`) and MLX 4‑bit builds. **No hosted API**; no Zen ID.
- **Release / knowledge:** HF repos live 2026‑09‑21 UTC; announcement 2026‑09‑22. Cutoff not stated.
- **IDs:** `xiaomi/mimo-v2.6-distill-qwen-9b` (HF‑derived).
- **Context window:** **262,144 (256K) native** per `config.json` (curated `meta.json` inspecting model config; max output not disclosed). Kimi's report says "not published" — the curated inspection overrides.
- **Modalities:** **Text, image, video in; text out** per `config.json` (audio tokens exist but **no audio tower**). Reasoning yes; tool calls yes. Kimi's report claims text‑only (from Codersera secondary source) — curated `meta.json` config inspection is more authoritative here.
- **Pricing (as of 2026‑10‑02):** $0 — MIT open weights, self‑host. No hosted route. Cost excluded from Overall.
- **Architecture:** 9.4B dense Qwen3.5‑9B base + SFT on MiMo‑V2.6 agentic data; hybrid linear/full attention per config.

### Raw benchmarks found

> Verified via qualifying `Kimi_K3.md` (Codersera guide reproducing Xiaomi's model‑card numbers; HF community quant listings). **All numbers vendor‑reported (Xiaomi internal harness).** No independent GPQA / HLE / AA Omniscience / CritPt / MRCR rows. Curated `meta.json` supplies the 262K / image+video specs that Kimi's report misses.

Agent / tool use:

- Terminal‑Bench 2.1: **37.1** (Qwen3.5‑9B base: 27.0) — vendor‑reported, real lift over base
- τ³ / GDPval / OSWorld / Claw‑Eval / Toolathon / MCP‑Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA / HLE / AA Intelligence Index / Omniscience / CritPt / LCR: **no verified public score found**

Coding:

- SWE‑bench Pro: **44.6%** (Qwen3.5‑9B base: 32.0%) — vendor‑reported, remarkable at 9B
- SWE‑bench Verified / LiveCodeBench / SciCode / Vibe / DeepSWE: **no verified public score found**

Long context:

- **262K native** per curated `config.json` inspection; no long‑context retrieval benchmark (no MRCR / RULER / LCR row).

Multimodal:

- Curated `config.json` shows **image + video encoders present**; no measured MMMU / VideoMME / ChartQA rows on this distill checkpoint.

### Normalized scores (1–100)

> Derived using `model-comparison.md` v4 methodology. Overall = half‑up mean of the five quality dims; Cost excluded. **Vendor‑harness‑only evidence + curated `config.json` specs (over Kimi's secondary‑source spec claims) drive scoring.** Kimi's Overall 37 is the floor; cohort 52.5 sits higher.

- **Tool use: 42/100.** TB 2.1 37.1 is a real +10‑point lift over the Qwen3.5‑9B base (27.0) and respectable for the size class, but far below 2026 frontier agents (70+). No other agentic data. Kimi 40; +2 for the genuine size‑class lift. Cohort 52.8 (inflated by MiMo‑family reputation).
- **Reasoning: 40/100.** **Zero published reasoning benchmarks** — no GPQA, no HLE, no AA Index, no Omniscience, no CritPt. The MiMo‑V2.6 family is known for strong reasoning, but reasoning transfer to a 9B SFT distill is unverified. Zero‑evidence provisional floor. Kimi 40 (correct). Cohort 52.5 (reputation‑inherited, unearned at this checkpoint).
- **Context window: 65/100.** 262K native (per curated `config.json`) = v4 200K–500K band (65–84), scored at the **200K anchor lower bound** given no retrieval measurement at all (no MRCR / RULER / LCR). Kimi 40 (sub‑100K band, wrongly — the config is public). Cohort 56.8 (also under‑credits the 262K fact). 65 is the honest methodology floor for a verified 262K window.
- **Multimodal: 65/100.** Curated `config.json` inspection shows **image + video encoders** (audio tokens exist, no audio tower) — real +video band 75–90, discounted to 65 lower band because **no measured vision/video benchmark scores exist** at this checkpoint. Kimi 15 (text‑only claim contradicts curated config). Cohort 39.5 (mixed). Trusting curated inspection.
- **Coding: 50/100.** SWE‑Pro 44.6% at 9B is genuinely impressive and beats much older mid‑size models on the same suite. But the harness is vendor‑internal, TB 2.1 37.1 shows a ceiling, and there's no independent SWE‑V / LCB. Kimi 50; cohort 61.0 (inflated). Match Kimi at 50 — vendor‑harness‑only caps the credit.
- **Cost efficiency: 100/100.** Free MIT weights on consumer GPU / Apple Silicon (Q4 GGUF / MLX 4‑bit) — effectively $0 at laptop scale. Cost excluded from Overall.
- **Overall Score: 52/100.** Mean of Tool 42, Reasoning 40, Context 65, Multimodal 65, Coding 50 = 262/5 = 52.4 → **52**. Best fit: **research baseline for agentic RL experiments and offline / local tinkering on laptop‑class hardware** — explicitly not positioned by Xiaomi as a production flagship. Kimi 37 (under‑credits the curated 262K / image+video config); cohort 52.5 (near match). Honest middle: the 9B size class + vendor‑only evidence keep this at 52 despite the notable TB and SWE‑Pro size‑class lifts.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026‑10‑02
- Method: qualifying `Kimi_K3.md` public research (Codersera guide, HF community quant listings) **plus curated `meta.json` config.json inspection** — the latter overrides Kimi's secondary‑source spec claims on 262K window and image+video input. Flagged: (a) **zero independent reasoning benchmarks** — the reasoning score is a genuine evidence vacuum, not a reputation inheritance from the MiMo‑V2.6 family; (b) **all coding/agent numbers are vendor‑harness**, which caps the credit per methodology; (c) curated `meta.json` correctly reflects `config.json` for window and modalities where Kimi's public research did not. Cross‑reference: the sibling MiMo V2.6 Flash / Pro models score materially higher (this is explicitly the small research‑distill of the family, not a production variant).
- Revisit trigger: if Xiaomi publishes an independent eval card (GPQA / SWE‑V / AA Omniscience) for this checkpoint, or if a hosted API route appears.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8.md`, using the same headings.
