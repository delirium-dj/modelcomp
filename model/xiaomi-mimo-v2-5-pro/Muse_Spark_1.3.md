# Xiaomi MiMo-V2.5-Pro — findings by Muse Spark 1.3

- Source: Muse Spark 1.3 Free (`opencode/muse-spark-1.3-contributor-free`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Note: requested as `Xiaomi MiMo-V2,5-Pro Free` (comma typo), but no `mimo-v2.5-pro-free` ID exists on Zen — evaluated as paid `mimo-v2.5-pro`.

## Model card

- **Name:** Xiaomi MiMo-V2.5-Pro (requested as Xiaomi MiMo-V2,5-Pro Free — comma typo)
- **Short description:** Xiaomi flagship open-weights (MIT) MoE for demanding agentic, complex SWE, and 1,000+ tool-call long-horizon tasks with strong 1M coherence. Text-focused Pro sibling to omni V2.5.
- **Provider / access:** Xiaomi API Platform / AI Studio (`mimo-v2.5-pro`), Hugging Face `XiaomiMiMo/MiMo-V2.5-Pro` (+ Base 256K). **No Zen `mimo-v2.5-pro-free` ID as of 2026-09-17.**
- **Release:** 2026-04-22. 1.02T total, 42B active, hybrid SWA/GA 6:1 (128 window) + 3-layer MTP, 27T tokens FP8, 32K native → 1M extended. Post-train: SFT → domain RL → MOPD.
- **Context window:** **1M** (Base 256K). GraphWalks: BFS 0.56 / Parents 0.92 at 1M (vs V2 Pro 0.00 collapse).
- **Modalities:** **text-only** (AA: Pro image = No, V2.5 image = Yes). Reasoning yes. No audio/video verified for Pro.
- **Pricing (verified, not free):** Xiaomi: In miss **$0.435** / hit **$0.0036**, Out **$0.87**; other routes $1.00/$3.00 (blended $0.54–$1.50). AA price $0.18 per 1M blended tracker.
- **Showcase:** 8,192-line desktop video-editor app over 1,868 calls / 11.5h autonomous (vendor).

### Raw benchmarks found

- Tau2: **94.2%** (Sophon, best); IFBench **79.9%**; LCR **73.3–77.7%**; SciCode **50.2%**; TB Hard **43.2%**; GPQA **86.6%**; HLE **35.7%**; MMLU-Pro 85.1% / base 68.5%; Intelligence Index **42.9–43** (AA); Coding Index **60.2**; Speed 34–37 tok/s, TTFT 3.78–4.56s
- Base-model table (pre-post-train, for context only): BBH 88.4, MMLU 89.4, DROP 86.3, HumanEval+ 75.6, LiveCode v6 39.6, AgentLess SWE 35.7 — do not mix with instruct scores above.
- Vendor claims: #1 open on GDPVal-AA and ClawEval; rivals Opus 4.6 on demanding agents.
- Claw-Eval: vendor #1-open claim but **no isolated public Claw-Eval Avg number in fetched sources** — listed as claim, not score.
- BenchmarkList/Sophon: ECI 148.08 #60/346, Open #26/137, 24 evals, 45 benchmarks tracker.

### Normalized scores (1–100)

- **Tool use: 82/100.** Tau2 94.2%, IFBench 79.9%, 1k+ call coherence, vendor #1-open GDPVal/Claw claims. TB Hard 43.2% caps higher.
- **Reasoning: 78/100.** GPQA 86.6%, HLE 35.7%, LCR ~75%, Index 43 — strong open, below 90%+ frontier.
- **Context window: 100/100.** 1M with demonstrated 1M GraphWalks retention.
- **Multimodal: 15/100.** Text-only for Pro (use V2.5 Free for omni).
- **Coding: 82/100.** Vendor frontier-coding + Coding Index 60.2 + SciCode 50.2%; base-code numbers excluded.
- **Cost efficiency: 85/100.** Paid open rates ($0.435/$0.87) cheap for 1T class; would be 100 at $0.
- **Overall Score: 74/100.** Top open long-horizon Pro; pair with V2.5 Free when vision/audio needed.

---

## Signature

- Provided by: **Muse Spark 1.3 Free (`opencode/muse-spark-1.3-contributor-free`)** — 2026-09-17
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
