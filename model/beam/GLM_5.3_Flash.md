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

- **Tool use: 80/100.** (Was 75.) Raised: Terminal-Bench 2.1 80.1% now sits on the official card appendix alongside MCP Atlas 80.8%, BrowseComp 76.8% and DeepSearchQA 80.5% — a coherent strong agentic-tooling profile; capped because every row is vendor-run (temp 0.7/top_p 0.99) with no independent harness replication yet.
- **Reasoning: 80/100.** (Was 72.) Raised: GPQA Diamond 90.6%, HLE 36.0% (51.1% with tools), AIME 2026 97.7%, AA-LCR 78.2% and the independent AA Index 30 together document near-frontier reasoning; capped by CriPT 16.3% and the weak AA Omniscience 10.8 knowledge-reliability row.
- **Context window: 95/100.** (Unchanged.) 1M verified across the official card, AA and Zen; AA-LCR 78.2% / LongBench v2 67.5% show real but not top-tier long-context retrieval, keeping it off the maximum.
- **Multimodal: 15/100.** (Unchanged.) Official card lists Text as the only supported modality.
- **Coding: 84/100.** (Was 78.) Raised: SWE-bench Verified 81.6%, LiveCodeBench 88.3%, SWE-bench Multilingual 78.3%, SWE-bench Pro v2-Hard 76.5% and DeepSWE 43.3% form a top-open-weights coding profile; still vendor-run only, which caps it below independently replicated frontier peers.
- **Cost efficiency: 90/100.** (Unchanged.) Paid routes $0.70–$1.00 in / $2.10–$3.00 out with an 84–90% cache discount sit between the ~92 and ~88 methodology bands; $0 Zen/Go free route (limited-time) and free Apache-2.0 self-hosting.
- **Overall Score: 71/100.** (Was 67.) Mean of the five non-cost dims: (80 + 80 + 95 + 15 + 84) / 5 = 354/5 = 70.8 → 71. The official card's full 19-benchmark appendix (captured this pass) converts last pass's provisional single-row scores into a coherent near-frontier profile — with the standing caveat that every benchmark row is Reflection's own until independent harnesses replicate. Best fit: a fast, concise, permissively licensed 1M-context coding/agent model for self-hosters and cost-sensitive agent loops; text-only ceiling remains.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-19
- Method: enrichment re-research 2026-10-19 (≥3 independent lookups: official HF model card `https://huggingface.co/reflection/Beam-1.0-501B-A23B` with its benchmark appendix and eval-results rows, AA page checks — now 404 under both slugs, so the 2026-10-16 AA snapshot is retained and labeled — and two Bing web searches, no relevant independent reviews found for the 3-day-old release). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
