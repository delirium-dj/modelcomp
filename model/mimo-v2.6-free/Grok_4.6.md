# MiMo-V2.6-Flash Free — findings by Grok 4.6

- Source: Xiaomi via OpenCode Zen (`mimo-v2.6-flash-free`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Flash Free
- **Short description:** OpenCode Zen (and Cline free-tier) $0 route of Xiaomi MiMo-V2.6-Flash: same 309B/15B omni MoE weights as paid Flash, with a 200K/32K serving cap. Not a separately trained checkpoint.
- **Provider / access:** OpenCode Zen Chat Completions `opencode/mimo-v2.6-flash-free` (catalog ID `mimo-v2.6-flash-free`). Cline free: `cline-free/mimo-v2.6-flash`. Paid native Xiaomi API remains `mimo-v2.6-flash` at 1M/128K.
- **Release / knowledge:** Flash weights ~2026-09-21/22; Zen free route documented by 2026-09-29 (UseThisModel). Xiaomi shipped a repetition-loop fix to the API on 2026-09-25; Zen cutover time unverified.
- **IDs:** `mimo-v2.6-flash-free` (Zen); weights `XiaomiMiMo/MiMo-V2.6-Flash-RL`. Free-tier training-data/privacy: follow Zen terms — not independently audited here.
- **Context window:** Zen free **200,000** total / **32,000** max output (airatecard 2026-10-19; pgupai). Native Flash is 1M/128K — score this folder on the free cap.
- **Modalities:** Same as Flash: text/image/video/audio in, text out, tools, thinking (Xiaomi card; airatecard: accepts audio, images, text, video).
- **Pricing (as of 2026-10-20):** $0 / $0 / $0 cache on OpenCode Zen. Paid Flash is $0.14/$0.28. Free does not mean unlimited (airatecard).
- **Architecture:** Sparse MoE 309B total / 15B active, MIT (HF Flash-RL card).

### Raw benchmarks found

No separate free-route leaderboard. Numbers are **MiMo-V2.6 Flash** vendor/AA figures (same weights). Context/cost are the Zen cap.

Agent / tool use:

- Terminal-Bench 2.1: **87.6%** (Xiaomi HF Flash)
- Terminal-Bench 4.0: **28.8%** (Xiaomi HF); **22.7%** (AA via OpenRouter Flash)
- OSWorld-Verified: **80.8%** (Xiaomi HF)
- Toolathlon-Verified: **73.6%** (Xiaomi HF)
- JobBench: **61.2%**; AutomationBench: **52.3%**; Agents' Last Exam: **27.6%** (Xiaomi HF)
- GDPval-AA 2.1: **no Flash Elo** (blank on Xiaomi table)
- Tau3 / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3.2: **38** (AA Flash page)
- AA-HLE: **35.1%**; AA-LCR: **74.3%**; CritPt: **12.0%**; Omniscience accuracy: **27.0%** (OpenRouter AA table for Flash)
- GPQA Diamond: **no verified measured public score found**

Coding:

- DeepSWE v1.1: **67.9%** (Xiaomi HF)
- AA-SciCode: **51.3%** (OpenRouter AA)
- ProgramBench: **26.0%** (Xiaomi HF)
- Vibe Code Bench v1.1: **79.0%** (Vals via OpenRouter)

Long context:

- Native 1M; **Zen scored window 200K**. AA-LCR 74.3% is a native-window figure, not a 200K Zen measurement.

### Normalized scores (1–100)

- **Tool use: 90/100.** Same Flash evidence: TB 2.1 87.6% on the ~88% frontier band. Capped by TB 4.0 ~23–29% and missing GDPval. Free-route tool-loop bugs were reported then patched — not a published harness score.
- **Reasoning: 79/100.** Same Flash AA Index 38 / HLE 35.1%. Capped by no measured GPQA and CritPt 12%.
- **Context window: 70/100.** Methodology: 200K = 70. Native 1M is a different SKU (`mimo-v2.6-flash`). Max out 32K is a caveat, not a second axis.
- **Multimodal: 92/100.** Vendor omni (audio+video+image) is the 90–100 band. Capped by text-only output.
- **Coding: 88/100.** Same Flash DeepSWE 67.9% / TB 2.1 87.6% / SciCode 51.3%. Capped by ProgramBench 26% and no measured SWE-Verified.
- **Cost efficiency: 100/100.** $0 on the evaluated Zen Free ID.
- **Overall Score: 84/100.** Mean of 90 + 79 + 70 + 92 + 88 = 83.8 → 84 half-up. Best fit: $0 omni coding on small contexts; switch to paid Flash when you need 1M.

---

## Signature

- Provided by: **Grok 4.6 (xAI / grok-4.6)** — 2026-10-20
- Method: public internet research (OpenCode/Zen free listings, Xiaomi Flash card, HF Flash-RL, AA Flash); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
