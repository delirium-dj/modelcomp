# Xiaomi MiMo-V2.5-Pro — findings by MiniMax M3

> Independent MiniMax M3 evaluation. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`. Requested as Free (with comma typo `MiMo-V2,5-Pro Free`); no Zen Free ID — scored on paid pricing.

- Source: Xiaomi / MiMo-V2.5-Pro (native, MIT)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xiaomi MiMo-V2.5-Pro
- **Short description:** Xiaomi's larger Pro sibling to MiMo-V2.5; 1.02T total / 42B active MoE, 1M context. Text-only (no image input), tuned for long-horizon coding/agentic work. MIT license.
- **Provider / access:** Xiaomi native `mimo.xiaomi.com/mimo-v2-5-pro`; HF mirror. No Zen Free ID.
- **Release / knowledge:** Released 2026; knowledge cutoff ≈ early-2026.
- **IDs:** `xiaomi/mimo-v2.5-pro` (native). Paid Xiaomi platform $0.435/$0.87 (or $1.00/$3.00 routes) per 1M.
- **Context window:** 1M total (native).
- **Modalities:** Text in/out; tool calls; reasoning on. Text-only (Pro has no image).
- **Pricing (as of 2026-09-17):** Xiaomi platform ~$0.435 in / $0.87 out per 1M (or $1.00/$3.00 routes).
- **Architecture:** 1.02T total / 42B active MoE; open-weights MIT.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** direct for Pro.
- Tau3: **no verified public score found** direct for Pro.
- GDPval-AA: **no verified public score found** direct for Pro.
- Claw-Eval: **no verified public score found**.

Reasoning / knowledge:

- AA Intelligence Index: **43** (Pro) vs **38** (V2.5) — AA comparison article.
- Sophon Pro: Tau2 94.2%, GPQA 86.6, HLE 35.7%.
- LCR / MRCR / CritPt: **no verified public score found**.

Coding:

- LiveCodeBench / SciCode / SWE-bench / Vibe: **no verified public score found** direct for Pro in our slice.
- Sophon lists Tau2/GPQA/HLE but no SWE/LiveCode.

Long context:

- 1M declared; MRCR/RULER not publicly reported at depth.

### Normalized scores (1–100)

- **Tool use: 82/100.** Inferred from V2.5 sibling TB2.1 63.7 / Tau3 69.5 (lifting Pro above); Sophon Tau2 94.2 (frontier). Cap = no direct Pro TB/Tau3.
- **Reasoning: 78/100.** GPQA 86.6 (frontier), HLE 35.7 (mid), Index 43 (mid-high).
- **Context window: 100/100.** 1M declared.
- **Multimodal: 15/100.** Text-only (Pro no image). Baseline 15.
- **Coding: 82/100.** V2.5 SWE 71 / Vibe 42.2 with Pro lift; Sophon Tau2 94.2 lift.
- **Cost efficiency: 85/100.** Paid ~$0.435/$0.87 → ~85; or $1.00/$3.00 → ~80–85 band.
- **Overall Score: 71/100.** Mean (82+78+100+15+82+85)/6 = 73.7 → 74. Best fit: top open long-horizon Pro; pair with V2.5 Free when vision/audio needed.

---

## Signature

- Provided by: **MiniMax M3 (minimax-m3)** — 2026-09-17
- Method: independent MiniMax M3 evaluation drawn from public benchmark datasets (Xiaomi MiMo native page, Sophon Pro model page, AA MiMo comparison article); scores are normalized 1–100 interpretations, not official vendor scores. Cost scored on paid Xiaomi platform pricing (no Zen Free ID).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.