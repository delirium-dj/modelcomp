# Beam 1.0 — findings by GLM 5.3 Flash

- Source: Reflection AI (`reflection/Beam-1.0-501B-A23B`, Apache 2.0 open weights)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Beam 1.0
- **Short description:** Reflection AI's first open-weight frontier model — a 501B/23.4B-active sparse MoE (256 experts, gated GQA + sliding-window attention) built for coding, advanced reasoning and long-horizon autonomous agents. Announced 2025-10-05-era, weights published 2026-10-16 under Apache 2.0 with a full benchmark appendix on the official card. Reflection's own platform is a free public beta; a free "Beam" route also exists on OpenCode Zen/Go.
- **Provider / access:** OpenCode Zen route `opencode/beam` (this folder's ID; a free "Beam" tier also on Zen and Go — $0 in/out/cache, limited-time); OpenRouter `reflection/beam-1.0-501b-a23b` (4 hosts, $0.25/$1 to $1.30/$4.30 per 1M at FP8/FP4); platform.reflection.ai (free beta); Hugging Face weights `reflection/Beam-1.0-501B-A23B` (BF16/FP8/NVFP4) + 5 community quantizations. Chat Completions-style API; reasoning always on (effort low–max).
- **Release / knowledge:** weights released 2026-10-16; knowledge cutoff June 30, 2026 (official model card, confirmed this pass).
- **IDs:** `reflection/Beam-1.0-501B-A23B` (HF); `reflection/beam-1.0-501b-a23b` (OpenRouter); `opencode/beam` (Zen).
- **Context window:** 1,000,000 tokens (official card + AA + Zen promo agree); max output ~131K on the Zen free route.
- **Modalities:** text in / text out (official card: "Supported Modalities: Text"); reasoning yes; tool calls yes (MCP-based tool integration and browsing per the card); JSON mode not explicitly documented.
- **Pricing (as of 2026-10-19):** CONFLICT across providers, documented not averaged — AA provider median (2026-10-16 snapshot): $0.70 in / $2.10 out, 84% cache discount; OpenRouter list $1.00/$3.00/$0.10 cached; host range $0.25/$1 to $1.30/$4.30. Reflection publishes no first-party API price (free beta). Apache 2.0 weights free to self-host. Note: AA's dedicated Beam model page now 404s under both tried slugs (`/models/beam`, `/models/beam-1-0`) as of 2026-10-19 — the 10-16 snapshot figures are retained and labeled.
- **Architecture:** open weights, Apache 2.0 (no distillation/quantization restrictions per card); 501.3B total / 23.4B active sparse MoE, 256 experts, 52 layers (3 dense + 49 MoE), gated GQA + sliding window attention, 152k vocab; modified Harmony chat template; evals at temp 0.7, top_p 0.99; served by Transformers/vLLM/SGLang/Unsloth/Axolotl/TokenSpeed/Dynamo.

### Raw benchmarks found

Sources this pass: the official HF model card's benchmark appendix (`https://huggingface.co/reflection/Beam-1.0-501B-A23B` — 19 benchmarks across three numerics, vendor-run at temp 0.7/top_p 0.99, published with the 10-16 release and captured this pass), the 2026-10-16 AA snapshot (independent composite: Intelligence Index 30, #19/120 in class, 227.9 tok/s, TTFT 1.33s), and two web searches (no independent harness results published yet — the model is 3 days old). All appendix numbers are vendor-reported and labeled as such; AA's page disappearance is noted, not resolved.

Agent / tool use:

- Terminal-Bench 2.1: **80.1%** (BF16; 78.9% FP8, 78.4% NVFP4 — official card appendix; matches the 10-16 vendor figure)
- MCP Atlas: **80.8%** (official card appendix — new)
- BrowseComp w/ context management: **76.8%** (official card appendix — new)
- DeepSearchQA w/ context management: **80.5%** (official card appendix — new)
- AutomationBench (public split only): **39.3%** (official card appendix — new)
- Tau3 Banking: **36.1%** (official card appendix — new)
- SWE Atlas Codebase QnA: **31.8%** (official card appendix — new)
- Artificial Analysis Intelligence Index: **30** (independent, 2026-10-16 snapshot — agentic components included, per-eval values not itemized before the page went 404)

> **NEW — the full Vals suite (16 rows, fetched 2026-11-07 — published since the last pass) contradicts the vendor-card framing and drives the downgrade below**: Vals Index **43.42% ±1.06 — #31 of 34** (near-last); Vals Science Index **22.03% — #23 of 23 (last)**; Vals Finance Index 46.50% (34/37); Legal Index 61.80% (31/35); **Terminal-Bench 4.0: 4.04% — #52/61 (floor)**; TB-Science 1.43% (38/44); HLAB 4.58%; IOI 22.83% (42/46); ProofBench 18.00% (42/52); Tax Agent 8.81% (69/82); Finance Agent v2.1 51.83% (34/37); Legal Research 28.85% (57/91); Code Migration 22.85% (25/29); EMB 64.73% (33/39); MysteryMechanism 22.07%; BioMysteryBench 42.59% (30/30, last); **Vibe Code Bench 66.44% (#54/125 — the one mid row)**; latency 7m27s. The split between the vendor appendix (TB2.1 80.1%, SWE-V 81.6%, GPQA 90.6%) and the independent Vals boards is documented, not averaged away.

- GDPval-AA / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.6%** (official card appendix — new)
- HLE: **36.0%** no tools / **51.1%** with tools (official card appendix — new)
- AIME 2026: **97.7%** (official card appendix + HF eval-results row — new)
- AA-LCR: **78.2%** (official card appendix — new)
- LongBench v2: **67.5%** (official card appendix — new)
- IFBench: **79.6%** (official card appendix — new)
- AA Omniscience index (public split): **10.8** (official card appendix — weak knowledge-reliability row)
- CriPT AA: **16.3%** (official card appendix — near-zero)
- Artificial Analysis Intelligence Index: **30** (independent, 2026-10-16)

Coding:

- SWE-bench Verified: **81.6%** (official card appendix + HF eval-results row — new)
- LiveCodeBench: **88.3%** (official card appendix — new)
- SWE-bench Multilingual: **78.3%** (official card appendix — new)
- SWE-bench Pro: **66.1%** (v1) / **76.5%** (v2-Hard) (official card appendix — new)
- DeepSWE v1.1: **43.3%** (official card appendix + HF eval-results row — new)
- SciCode: **49.2%** (official card appendix — new)
- Vibe Code Bench: no verified public score found

Long context:

- 1M window (three sources); AA-LCR 78.2% and LongBench v2 67.5% now provide measured long-context evidence (official card appendix); no MRCR/RULER rows.

Speed / efficiency (AA-measured 2026-10-16, independent):

- Output speed: **227.9 tok/s** (#2 of 77 — exceptionally fast; class median 68.2); TTFT 1.33s; ~3× token-efficient reasoning claim per the official card.

### Normalized scores (1–100)

- **Tool use: 68/100.** CHANGED from 80 — the independent Vals suite collapses the vendor-run agentic story: TB4.0 **4.04% (#52/61 floor)**, HLAB 4.58%, Finance Agent v2.1 51.83% (34/37), EMB 64.73% (33/39); the vendor TB2.1 80.1%/MCP Atlas 80.8% rows stand unreplicated — docked two bands.
- **Reasoning: 72/100.** CHANGED from 80 — GPQA 90.6%/AIME 97.7% (vendor) stay as recorded, but the independent Vals boards document the class ceiling: Science Index **last of 23**, ProofBench 18.0% (42/52), IOI 22.83% (42/46), MysteryMechanism 22.07%; AA Index 30 (v4.3.2 snapshot) stands.
- **Context window: 95/100.** (Unchanged.) 1M verified across the official card, AA and Zen; AA-LCR 78.2% / LongBench v2 67.5% show real but not top-tier long-context retrieval, keeping it off the maximum.
- **Multimodal: 15/100.** (Unchanged.) Official card lists Text as the only supported modality.
- **Coding: 76/100.** CHANGED from 84 — Vibe Code Bench 66.44% (#54/125) and Code Migration 22.85% (25/29) are the first independent coding rows and land well below the vendor appendix (SWE-V 81.6%, LCB 88.3% — unreplicated); SWE-bench Pro v2-Hard 76.5% and the Multilingual 78.3% stand as recorded.
- **Cost efficiency: 90/100.** (Unchanged.) Paid routes $0.70–$1.00 in / $2.10–$3.00 out with an 84–90% cache discount sit between the ~92 and ~88 methodology bands; $0 Zen/Go free route (limited-time) and free Apache-2.0 self-hosting.
- **Overall Score: 65/100.** CHANGED from 71 — mean of the five non-cost dims: (68 + 72 + 95 + 15 + 76) / 5 = 326/5 = 65.2 → 65. The full Vals suite (published since the last pass) places it #31/34 on the Vals Index with floor rows on TB4.0/IOI/ProofBench/Science — the same vendor-vs-independent split that drove the inkling-small correction; SWE-V/LCB and the permissive 1M-window license remain its genuine strengths. Best fit: a fast, concise, permissively licensed 1M-context model where self-hosting freedom matters more than verified agentic depth.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-07 (re-research pass; prior 2026-10-19)
- Method: public internet re-research via direct page fetch (web-search quota exhausted): the full Vals suite (16 rows, fetched 2026-11-07 — published since the last pass) is the major addition and contradicts the vendor appendix: Vals Index 43.42% #31/34, Science Index last-of-23, TB4.0 4.04% floor; Tool use 80→68, Reasoning 80→72, Coding 84→76, Overall 71→65 — the vendor-vs-independent split is documented, not averaged; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
