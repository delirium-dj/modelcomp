# Ling 3.0 Flash — findings by GLM 5.3

- Source: inclusionAI / Ant Group (`inclusionAI/Ling-3.0-flash`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash
- **Short description:** inclusionAI (Ant Group)'s next-generation native hybrid reasoning model — a 124B-total / 5.1B-active hybrid-linear MoE built for token efficiency and production-scale agentic inference, matching or beating its 1T-class predecessor Ring-2.6-1T at ~12% of the total and ~8% of the active size.
- **Provider / access:** Hugging Face open weights (`inclusionAI/Ling-3.0-flash`, plus `-int4` and FP8 variants); OpenRouter (`inclusionai/ling-3.0-flash`, free listing) and kilo.ai free endpoint; no OpenCode Zen paid ID (only the Fin Free variant is on Zen).
- **Release / knowledge:** 2026-07-23 (HF model card + BenchLM snapshot); knowledge cutoff not published.
- **IDs:** `inclusionAI/Ling-3.0-flash` (Hugging Face); `inclusionai/ling-3.0-flash` (OpenRouter).
- **Context window:** 262,144-token serving context (256K training schedule; verified via BenchLM's snapshot of the HF model card); some trackers claim a 1M extension — not verified in serving.
- **Modalities:** text in / text out; native hybrid (thinking / non-thinking) reasoning; tool calls; JSON mode per platform docs. Text-only — vision lives in the separate Ling-3.0-Flash-VL model (`ling-3.0-flash-vl`).
- **Pricing (as of 2026-10-09):** $0.00 / 1M tokens on free listings (OpenRouter free tier, kilo.ai `ling-3-0-flash-free`); open weights for self-hosting at 5.1B active params. Earlier project notes list `opencode/ling-3.0-flash-fin-free` for the Fin variant; the base flash has no paid Zen line item.
- **Architecture:** 124B total / 5.1B active hybrid-linear Mixture-of-Experts (open weights, MIT-style inclusionAI license per HF); designed for 10,000+ parallel agent environments and low-latency execution.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **57.0%** (official HF model card via BenchLM; Vals AI cross-check: 50.2%)
- AA Tau3 Banking: **28.0%** (official HF model card via BenchLM)
- MCP Atlas: **65.5%** (official HF model card via BenchLM)
- BFCL v4: **73.0%** (official HF model card via BenchLM)
- skillsBench: **44.8%** (official HF model card via BenchLM)
- GDPval-AA: **1107 Elo / 22.4% normalized** (official card + Artificial Analysis)
- BrowseComp: **72.2%** (official HF model card via BenchLM)
- WideResearch: **73.6%**; DRACO: **70.4%** (official HF model card via BenchLM)
- AA Agentic Index: **21.0%** (Artificial Analysis)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **85.0%** (official card; AA cross-check 85.5%, Vals 84.8%)
- HLE: **22.7%** (official card; AA cross-check 23.7%)
- AA-LCR: **73.0%** (Artificial Analysis)
- CritPt: **1.7%** (Artificial Analysis)
- AIME26: **93.2%**; HMMT Feb 2026: **87.0%**; IMOAnswerBench: **83.7%** (official HF model card via BenchLM)
- MMLU-Pro: **82.0%** (Vals AI)
- Artificial Analysis Intelligence Index: **20.1** (Artificial Analysis)
- AA-Omniscience: **-17.9 index / 18.2% accuracy / 44.1% hallucination rate** (Artificial Analysis — weak knowledge reliability)

Coding:

- SWE-bench Pro: **56.6%** (official HF model card via BenchLM)
- SWE-bench: **65.2%** (Vals AI)
- SWE Multilingual: **72.4%** (official HF model card via BenchLM)
- LiveCodeBench v5: **82.8%** (official card; Vals cross-check 84.0%)
- SciCode: **41.2%** (official card; AA cross-check 42.0%)
- AA Coding Index: **50.6%** (Artificial Analysis)

Long context:

- MRCR / RULER: no long-context retrieval benchmark score found (262K serving window verified; 1M extension claims unverified)

Multimodal:

- Text-only base model — no verified multimodal benchmark (vision is the separate `Ling-3.0-flash-vl` model)

### Normalized scores (1–100)

- **Tool use: 68/100.** Genuinely broad agentic profile for its size (MCP Atlas 65.5%, BFCL v4 73%, BrowseComp 72.2%, DRACO 70.4%) with GDPval-AA 1107 Elo sitting in the ~900–1200 mid band; capped by modest TB2.1 (57%) and a low Tau3 Banking (28%) plus a weak AA Agentic Index (21%).
- **Reasoning: 66/100.** Strong math and science reasoning (AIME26 93.2%, HMMT 87.0%, GPQA 85%) but HLE at 22.7% is far below the 40%+ frontier ref and the negative AA-Omniscience index (-17.9 with 44.1% hallucination) shows unreliable open-domain knowledge; CritPt 1.7% is near-zero.
- **Context window: 72/100.** Verified 262,144-token serving window lands the 200K–500K tier just above the 200K=70 anchor; no verified retrieval-rate benchmark and unverified 1M-extension claims keep it low in the band.
- **Multimodal: 15/100.** Text-only input/output; vision is a separate model (`Ling-3.0-Flash-VL`).
- **Coding: 72/100.** Solid mid-tier engineering numbers (SWE-bench Pro 56.6%, SWE-bench 65.2% Vals, SWE Multilingual 72.4%, LiveCodeBench v5 82.8%) with usable terminal work (TB2.1 57%); SciCode 41.2% and AA Coding Index 50.6% keep it below the frontier band.
- **Cost efficiency: 98/100.** $0 free listings on OpenRouter/kilo, open weights, and a 5.1B-active MoE that self-hosts cheaply — near-free at every access path.
- **Overall Score: 59/100.** Half-up mean of (68 + 66 + 72 + 15 + 72) = 58.6 → 59. Best fit: free, fast token-efficient agent worker for browsing/tool workflows and everyday coding — keep a stronger model for deep reasoning or knowledge-critical answers.

---

## Signature

- Provided by: **GLM 5.3 (zai-org/GLM-5.3)** — 2026-10-09
- Method: public internet research (BenchLM official-snapshot of the HF model card, Artificial Analysis, Vals AI cross-checks, OpenRouter/kilo listings); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
