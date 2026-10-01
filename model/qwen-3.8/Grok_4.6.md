# Qwen 3.8 (2.4T-A95B) — findings by Grok 4.6

- Source: Alibaba Qwen (`qwen3.8-2.4t-a95b` / `Qwen/Qwen3.8-2.4T-A95B`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 (2.4T-A95B)
- **Short description:** Open-weight 2.4T MoE / 95B active text-only sibling of hosted Qwen3.8-Max. Folder `qwen-3.8` is this 2.4T line — **not** Max (multimodal hosted flagship), Flash, or 27B. Weights: Qwen3.8-Max License (scale-dependent commercial clauses).
- **Provider / access:** Hugging Face `Qwen/Qwen3.8-2.4T-A95B`; hosted `qwen3.8-2.4t-a95b` on QwenCloud / Model Studio (OpenAI-compatible). Open checkpoint is **thinking-only** (cannot disable). QwenCloud hosted 2.4T is documented hybrid; Model Studio 2.4T is thinking-only — validate `enable_thinking` per host (AI Stack Current).
- **Release / knowledge:** Open weights 2026-08-12 (after Max 2026-08-02). Knowledge cutoff not verified here.
- **IDs:** `qwen/qwen3.8-2.4t-a95b`. No OpenCode Zen Free ID found.
- **Context window:** Native **262,144** (AA page); extended ~1.01M. Hosted Model Studio / QwenCloud: **1,000,000**, max out 131,072, reasoning budget 131,072 on hosted 2.4T (half of Max’s 262K CoT). Scored as **hosted 1M** with native 262K caveat.
- **Modalities:** **Text only** (open checkpoint and hosted 2.4T). Do not copy Max’s image/video I/O.
- **Pricing (as of 2026-10-01):** Singapore **$2 / $6** per 1M; implicit cache $0.25; explicit create $2.50 / read $0.17 (AI Stack Current / OpenRouter). Beijing **$1.65 / $4.951**. AA ~$2.16 per Index task.
- **Architecture:** MoE 2.4T total / 95B active, 512 experts (10 routed + 1 shared).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82%** (Shawn Hack citing AA); vendor Max table **86.6%** is **Max**, not automatically this checkpoint
- Terminal-Bench 4.0: **11.1%** (AA via Shawn Hack)
- AA Agentic Index: **50.1** (OpenRouter)
- GDPval-AA: **54.9%** listed on OpenRouter AA row (unusual units vs Elo — cite as AA-exported figure, harness not Elo)
- Tau3 / Claw-Eval: no verified public score found
- TAU-Bench (OpenRouter provider scatter): e.g. DeepInfra **76.8%** — provider-dependent, not a single official Tau3

Reasoning / knowledge:

- GPQA Diamond: AA **93.5%** (OpenRouter); HokAI also cites Alibaba **92.6%** (same figure as Max launch table — treat AA 93.5% as independent)
- HLE: AA **42.4%** (OpenRouter)
- Artificial Analysis Intelligence Index: **40** / **39.9** (AA / OpenRouter)
- AA-LCR: **80.3%**; CritPt: **20.0%**; Omniscience accuracy **31.3%** (OpenRouter)
- SciCode: **54.1%** (AA)

Coding:

- AA Coding Index: **71.9** (OpenRouter)
- SciCode: **54.1%**
- DeepSWE 1.1: HokAI **56.6** (same as Max vendor/independent cluster)
- SWE-bench Pro **67.7%** is the **Max** launch table number reused on some 2.4T recaps (HokAI) — do not treat as a distinct 2.4T-only measurement
- SWE-Verified: no verified unsaturated public score found

Long context:

- Hosted 1M / native 262K. AA-LCR **80.3%**. MRCR v2 256K **92.9%** on the **Max** blog table — not copied here as a 2.4T result.

### Normalized scores (1–100)

- **Tool use: 78/100.** TB 2.1 82% is strong; Agentic Index 50.1 is mid. Capped by TB 4.0 11.1% and messy GDPval export / no Tau3.
- **Reasoning: 84/100.** GPQA 93.5% and HLE 42.4% are frontier-band; Index 40 is under 60. Capped by CritPt 20% and Omniscience 31.3%.
- **Context window: 96/100.** Hosted 1M → 95–100; LCR 80.3% is not 98% at 512K+. Native weights 262K would score ~72.
- **Multimodal: 15/100.** Text-only 2.4T (methodology 10–20).
- **Coding: 84/100.** Coding Index 71.9 meets ~70%+; SciCode 54.1% is near 55%+; DeepSWE 56.6 is below 74%+. Capped by TB 4.0 11.1% and Max-table contamination risk on SWE-Pro.
- **Cost efficiency: 78/100.** $2/$6 matches Grok 4.6 list, far from $0.10/$0.20. Beijing list would score higher. Not $0.
- **Overall Score: 71/100.** (78+84+96+15+84)/5 = 71.4 → 71 half-up. Best-fit: text-only 2.4T open/hosted reasoner; use **Max** when vision/video is required.

---

## Signature

- Provided by: **Grok 4.6 (x-ai/grok-4.6)** — 2026-10-01
- Method: public internet research (AI Stack Current family page, Artificial Analysis, OpenRouter, HokAI, Hugging Face card); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
