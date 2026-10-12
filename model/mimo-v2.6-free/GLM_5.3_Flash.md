# MiMo V2.6 Flash Free — findings by GLM 5.3 Flash

- Source: Xiaomi (`XiaomiMiMo/MiMo-V2.6-Flash-RL`, MIT open weights; free route `mimo-v2.6-flash:free`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Flash (Free) — free-tier route of the MiMo-V2.6-Flash model
- **Short description:** Xiaomi's efficiency-balanced 309B/15B-active omnimodal MoE, offered free through gateway routes (e.g. Token Harbor `mimo-v2.6-flash:free`) alongside a cheap paid API; best for routine coding-agent work, automation, and multimodal understanding at very low cost. Trails its MiMo V2.6 Pro sibling on hard terminal/security tasks. BenchLM ranks the underlying Flash model #32 of 889 (66.03, updated 2026-10-10).
- **Provider / access:** Free route `mimo-v2.6-flash:free` (Token Harbor, OpenAI-compatible Chat Completions; text input only on that route); paid real-time API via Xiaomi MiMo (`mimo-v2.6-flash`, $0.14/$0.28 per 1M); OpenRouter `xiaomi/mimo-v2.6-flash`; MIT-licensed weights `XiaomiMiMo/MiMo-V2.6-Flash-RL` on Hugging Face. No Free ID on OpenCode Zen.
- **Release / knowledge:** Released 2026-09-21/22 (weights + API); knowledge cutoff not disclosed.
- **IDs:** `mimo-v2.6-flash:free` (Token Harbor free tier); `xiaomi/mimo-v2.6-flash` (OpenRouter / Xiaomi MiMo API); `XiaomiMiMo/MiMo-V2.6-Flash-RL` (open weights).
- **Context window:** 1,048,576 tokens (1M; verified via Token Harbor free-route listing, Xiaomi model card and BenchLM); up to 128,000 output tokens.
- **Modalities:** underlying checkpoint natively processes text, image, video and audio, returns text; the free route is text-input only (follow the capabilities shown for this specific route); reasoning yes; tool calling yes; JSON mode via OpenAI-compatible API.
- **Pricing (as of 2026-10-11):** Free on gateway free tiers (allowance-based, never billed on that route — availability/rate limits apply); underlying paid API $0.14 / $0.28 per 1M in/out (cached input $0.0028, 22% savings); Batch API 50% ($0.07/$0.14).
- **Architecture:** 309B total / 15B active sparse MoE, 48 layers, 256 routed experts (8 active per token); 681M vision encoder, 308M AudioTokenizer + 127M audio patch encoder, five-layer speculative decoder, Multi-Token Prediction, hybrid attention; MIT license.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: normalized **55.5%** (AA, independent — fills the gap the prior passes marked missing; solid for the class)
- Terminal-Bench 2.1: **87.6%** (Xiaomi technical report via benchlm.ai, updated 2026-10-10; vs V2.6 Pro 89.9, V2.5 Pro 65.2)
- Toolathlon-Verified: **73.6%** (technical report; vs Pro 76.9)
- AutomationBench v1.0.6: **52.3%**; OSWorld-Verified: **80.8%**; JobBench: **61.2%**; Agents' Last Exam: **27.6%** (technical report)
- Terminal-Bench 4.0: **28.8%** (technical report — trails Pro's 34.9)
- CyberGym: **95.1%** (leads Pro's 94.0); ExploitGym: **6.0%** (very weak)
- Tau3-Banking: no verified public score found

Reasoning / knowledge:

- AA-HLE: **35.1%** (AA, independent — fills the HLE gap; under the 40% bar)
- Artificial Analysis Intelligence Index: **37.9** (AA current board — corroborates the 38 cited 2026-10-05)
- BenchLM composite: **66.03, #32 of 889** (updated 2026-10-10, recomposed from the 65.33 #33/212 prior reading)
- AA-LCR v1.1: **74.3%** (AA — fills the long-context gap); CritPt: **12.0%** (weak)
- AA-Omniscience: **27.0% accuracy / 54.4% non-hallucination row / −12.7 index** (AA — weak)
- GPQA Diamond: no verified public score found for Flash
- MLCR: no verified public score found

Coding:

- AA-SciCode: **51.3%** (AA, independent — fills the SciCode gap)
- DeepSWE v1.1: **67.9%** (technical report; vs Pro 71.9, V2.5 Pro 19.0)
- MiMo Code Bench: **61.2%**; ProgramBench: **26.0%**; MiMo VisualCoding: **71.5%**; SEC Bench Pro: **47.5%** (technical report)
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / Vibe Code Bench: no verified public score found

Long context:

- 1M-token window; AA-LCR 74.3% is the first measured long-context number (mid)
- MRCR/RULER/GraphWalks: no verified public score for this exact model

Multimodal:

- AA-MMMU-Pro: **73.1%** (AA, independent — fills the vision gap, solid for the class)

### Normalized scores (1–100)

> Scores unchanged on the 2026-10-11 second pass: the newly published AA rows (GDPval 55.5% normalized, HLE 35.1%, SciCode 51.3%, LCR 74.3%, MMMU-Pro 73.1%) all land inside the bands the existing scores occupied — verification, not correction.

- **Tool use: 88/100.** Terminal-Bench 2.1 87.6% sits just under the ~88%+ frontier reference, with Toolathlon 73.6%, OSWorld 80.8%, JobBench 61.2% and the new independent GDPval 55.5%-normalized all strong; the weak Terminal-Bench 4.0 (28.8%) and ExploitGym 6.0% keep it at the band edge.
- **Reasoning: 70/100.** The AA Index of 37.9 is corroborated and AA-HLE 35.1% now fills the gap (under the 40% bar); the negative Omniscience index (−12.7) and CritPt 12.0% confirm mid-band reasoning; GPQA remains unpublished for Flash.
- **Context window: 95/100.** 1,048,576 tokens maps to the ≥1M tier (95–100); AA-LCR 74.3% is the first measured evidence (mid); no ≥98% retrieval at 512K+ keeps it off the maximum.
- **Multimodal: 85/100.** The checkpoint natively handles text, image, video and audio (band 75–90), now with measured vision (AA-MMMU-Pro 73.1%); the free route caps input to text, which is the caveat.
- **Coding: 84/100.** DeepSWE v1.1 67.9% and TB2.1 87.6% are strong, AA-SciCode 51.3% adds independent evidence; ProgramBench 26.0% and SEC Bench Pro 47.5% trail Pro on the hardest engineering, and no SWE-bench Verified/LiveCodeBench numbers prevent 90+.
- **Cost efficiency: 100/100.** $0 on the free route ($0 = 100 per methodology); the underlying paid API at $0.14/$0.28 per 1M is also among the cheapest tracked — free tiers flagged as allowance-based with availability caveats.
- **Overall Score: 84.4/100.** Five-dim mean per `RULES.md` (Cost excluded): (88 + 70 + 95 + 85 + 84) / 5 = 422/5 = 84.4 — unchanged. Best-fit: the free workhorse for routine coding-agent loops, automation and multimodal triage — now with independently verified reasoning, coding and vision rows; reserve Pro escalation for hard terminal/security work.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-11
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: benchlm.ai updated 2026-10-10 citing the Xiaomi MiMo-V2.6 technical report, Artificial Analysis independent boards (GDPval/HLE/SciCode/LCR/MMMU-Pro/Omniscience) via benchlm.ai, plus the prior 2026-09-24/10-05 passes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Mimo_v2.md`, using the same headings.
