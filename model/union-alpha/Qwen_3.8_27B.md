# Union Alpha — Evaluation Report

**Model:** Union Alpha (`opencode/union-alpha`)
**Auditor:** Qwen 3.8 27B (qwen/qwen3.8-27b)
**Date:** 2026-09-28

## Model card

**Name:** Union Alpha (revealed identity: **Pareto 26.9** by Circuit & Chisel, hosted via Unbiased; OpenRouter production id `unbiased/pareto`)
**Short:** Anonymous "stealth" endpoint that was a multi-model orchestration system: routes work across existing open and frontier models, verifies outputs, and escalates hard tasks.
**Provider:** Circuit & Chisel / Unbiased — hosted endpoint, no downloadable weights; composition may change without version bumps.
**Release date:** 2026-09-16 (stealth launch on OpenRouter/OpenCode as `stealth/union-alpha`); 2026-09-18 (public reveal + paid endpoint).
**Architecture:** Multi-model ensemble with difficulty routing, candidate generation, learned verification, and frontier escalation. No single foundation model.
**Context window:** 262,144 in / 131,072 out.
**Modalities:** Text + image in; text out; tool calling supported.
**Pricing:** Paid endpoint $2.50/M input, $0.25/M cached, $7.50/M output; free limited-preview endpoint existed under the Union Alpha name (OpenRouter free tier, ~50–1,000 requests/day).

### Raw benchmarks found

**Pareto 26.9 model card (Unbiased, 2026-09-18; vs GPT-6 Astra):**
- DeepSWE: **74** (Astra: 74 — tied on the hardest repo-SWE test in the table)
- Terminal-Bench 4.0: **51** (Astra: 58)
- MMMU-Pro: **78** (Astra: 87)
- HLE (no tools): **49** (Astra: 54)
- ArXivMath: **88** (Astra: 91)

**Independent / preview-era:**
- AI BENCHY (2026-09-18, 22-test private suite): **8.9/10**, 18/22 fully passed, 86.4% attempt pass rate, $1.172 total suite cost; avg response 31.5s, max 143.3s (material tail latency from serial verification/escalation stages)
- LiveBench preview (2026-09-17): overall **76.1** — coding 82.1, mathematics **95.3**, instruction following 59.5
- ARI Bench: provisional **32/100** hidden exact-match (1 of 3 seeds only)
- buildfastwithai coding snapshot (2026-09-16): 23.14/40 across four benchmark projects

**Gaps:** No SWE-bench Verified / LiveCodeBench / GPQA published; no disclosure of worker composition, routing policy, or per-task escalation frequency; ARI Bench has 2 missing seeds; internals are unauditable (no weights, composition can change).

### Normalized scores (1–100)

- **Tool use: 62/100.** Terminal-Bench 4.0 51 is competitive with the new hard task set (above MiMo-V2.6-Pro 34.9, below GPT-6 Astra 58), tool calling is supported, and the verify-then-escalate loop suits agentic work. But ARI Bench 32/100 (provisional), LiveBench instruction following 59.5, and 31–143s tail latency from serial verification stages keep this mid-band.
- **Reasoning: 84/100.** HLE (no tools) 49 is upper-frontier (above the Opus 4.8 ~46 band; below GPT-6 Astra 54 and the 53–55 top tier), ArXivMath 88 near-Astra, and preview math 95.3. Multimodal reasoning trails (MMMU-Pro 78 vs 87) and the system's HLE gap to Astra shows verification adds less on open-ended knowledge.
- **Context window: 74/100.** 262,144 tokens in / 131,072 out — above the 200K = 70 reference but short of the 500K–1M = 85–94 band; no retrieval or synthesis measurement published. The huge 128K output ceiling is a genuine plus for long generation.
- **Multimodal: 45/100.** Image in + text out with strong image understanding (MMMU-Pro 78 — near frontiers at Lite/Astra-minus-9), but no video/audio and no image/audio output.
- **Coding: 80/100.** DeepSWE 74 ties GPT-6 Astra — the top published repo-SWE result in this cohort (Grok 4.7's 71–73% earned the same tier), LiveBench coding 82.1, and the architecture is maximally favorable to verifiable code (tests + repo state as feedback). Offsets: buildfastwithai's 4-project aggregate 23.14/40 and TB4.0 51 below Astra.
- **Cost efficiency: 68/100.** $2.50/$7.50 with $0.25 cached input undercuts the $3/$15 ≈ 60 anchor, and a free preview endpoint exists; but the per-request internal compute is undisclosed (ensemble calls, discarded candidates, frontier escalation all happen server-side), so effective cost-per-task can exceed the token sticker.
- **Overall Score: 69/100.** Half-up mean of (62 + 84 + 74 + 45 + 80) / 5 = 69.0.

### Why not higher
Two structural caps: (1) the orchestration model trades latency and reproducibility for quality — serial verify/escalate stages produce 31–143s responses and moving internals, and (2) it trails GPT-6 Astra on 4 of 5 published benchmarks (TB4.0 51/58, MMMU-Pro 78/87, HLE 49/54, ArXivMath 88/91), matching only on DeepSWE. The 69 reflects "elite coding at near-Astra price with unknown internals," not "frontier parity."

## Signature

Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** — 2026-09-28
