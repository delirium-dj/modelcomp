# Grok 4.20 — findings by Step 5 Preview

- Source: xAI / Grok 4.20 (`x-ai/grok-4.20`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20
- **Short description:** xAI's Feb–Mar 2026 multi-agent reasoning flagship — a four-agent inference council (coordinator/research/math-code/synthesis, 16-agent Heavy mode) over a 2M-token window (single-model variants 1M), with GPQA 88.5–88.9%, SWE-bench Verified 72–77% by harness and LiveCodeBench 84.3% at $1.25/$2.50; deprecated to long-context duty when Grok 4.3 shipped 2026-04-30.
- **Provider / access:** xAI API (`grok-4.20-0309-reasoning` / `-non-reasoning` / `grok-4.20-multi-agent-0309`), OpenRouter (`x-ai/grok-4.20`), Fireworks, Together; not on AWS Bedrock/Azure managed tiers (Grok 4.3 got those). Closed weights, API-only.
- **Release / knowledge:** public beta 2026-02-17; Beta 2 2026-03-03; reasoning variant 2026-03-10; full GA 2026-03-18 (hokai.io); knowledge cutoff November 2024 (static) with a live X-data search hook extending current-events coverage.
- **IDs:** `x-ai/grok-4.20`, `xai/grok-4.20-0309-reasoning`, `grok-4.20-multi-agent-0309`.
- **Context window:** 2,000,000 on the multi-agent variant; 1,000,000 on the single-model reasoning/non-reasoning variants (hokai.io); xAI docs list 1M with ~30K max output for the reasoning route (folder meta); output tokens count toward the window.
- **Modalities:** text, image and PDF (via the X file-processing pipeline) in; text and tool-call out; no native audio/video; function calling + JSON mode; real-time X data hook.
- **Pricing (as of 2026-10-21):** $1.25/$2.50 per 1M, cached $0.20 (May 2026 cut from the $2/$6 launch rate, hokai.io); ~265 tok/s output (Artificial Analysis); blended $1.56–$1.88/M.
- **Architecture:** proprietary MoE (~1.7–3T total per hokai estimate); four named parallel agents debate via peer-review rounds on shared weights; vendor-measured hallucination rate 4.2% vs ~12% single-model (xAI internal).

### Raw benchmarks found

Meta AI Muse Spark comparison chart + Vals AI figures via BenchLM + hokai.io vendor numbers:

Agent / tool use:

- Terminal-Bench 2.0: **47.1%** (Meta AI comparison chart via BenchLM)
- Terminal-Bench 2.1 (Vals): **44.2%** (Vals AI via BenchLM) — mid-weak for a flagship
- DeepSearchQA: **62.8%** (Meta AI chart via BenchLM)
- Gert Labs: **38.4%** (Gert Labs via BenchLM); MazeBench: **0%** (MazeBench via BenchLM)
- Tau2 / Tau3 / GDPval-AA / OSWorld / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **88.5%** (Meta AI chart via BenchLM); **88.6%** (Vals AI); **88.9%** (vendor via hokai.io) — ref: GPT-5.4 92.8%, Claude Opus 4.6 91.3%
- MMLU-Pro: **86.3%** (Vals AI via BenchLM); **86.6%** (vendor via hokai.io)
- AIME 2025: **~95%** (vendor via hokai.io; 16-agent Heavy reports a perfect score)
- HLE (no tools): **31.6%** (Meta AI chart via BenchLM) — mid
- ARC-AGI-2: **53.3%** (Meta AI chart via BenchLM)
- IFBench: **82.9%** (vendor via hokai.io)
- LMArena Elo: **1,505–1,535** provisional March 2026 (hokai.io)
- HealthBench Hard: **20.3%**; MedXpertQA: Text **50.2%** / MM **65.8%** (Meta AI chart via BenchLM)
- AA-LCR / CritPt / Omniscience / AA Intelligence Index: no verified public score found

Coding:

- SWE-bench Verified: **76.7%** (Meta AI chart via BenchLM); **72.2%** (Vals AI via BenchLM) — the harness spread the folder flagged; vendor cites 75% (hokai.io)
- SWE-bench Pro: **51.8%** (Meta AI chart via BenchLM)
- LiveCodeBench (Vals): **84.3%** (Vals AI via BenchLM)
- LiveCodeBench Pro: **74.2%** (Meta AI chart via BenchLM)
- Vibe Code Bench: **4.06%** (Vals AI via BenchLM) — near-zero full-stack building
- DeepSWE / SciCode / Terminal-Bench 3.0+: no verified public score found

Long context:

- 2M window on the multi-agent variant (1M single-model); community evaluations report strong recall above 500K tokens (hokai.io); no MRCR/RULER/GraphWalks retrieval-at-length figure published.

Multimodal extras (traceability): MMMU-Pro 75.2%, CharXiv 60.9%, ERQA 54.1%, SimpleVQA 57.4%, Design Arena Website 1231 Elo (Meta AI chart / OpenRouter via BenchLM).

### Normalized scores (1–100)

- **Tool use: 70/100.** DeepSearchQA 62.8% is decent and the 4-agent council with tool calls is structurally built for multi-step work, but Terminal-Bench 2.0/2.1 at 47.1%/44.2%, Gert Labs 38.4% and MazeBench 0% are all mid-to-weak — agentic terminal execution is not this model's strength.
- **Reasoning: 88/100.** GPQA Diamond 88.5–88.9% and MMLU-Pro 86.3–86.6% are frontier-cluster, AIME ~95% is near-perfect competition math, ARC-AGI-2 53.3% and IFBench 82.9% round it out; capped by HLE 31.6% (mid), the disputed November 2024 static cutoff and no published CritPt/LCR/Omniscience rows.
- **Context window: 95/100.** 2,000,000 on the multi-agent variant (1M on the single-model routes) lands in the ≥1M tier with community-verified recall above 500K; no ≥98% retrieval-at-512K evidence, and the ~30K max output on the docs' 1M route is a practical caveat.
- **Multimodal: 68/100.** Text + image (and PDF via the X pipeline) in with text out (image-in tier 60–70); MMMU-Pro 75.2% is solid; explicitly no audio/video input and no non-text output.
- **Coding: 76/100.** SWE-bench Verified 72.2–76.7% (harness-dependent) and LiveCodeBench 84.3% are solid mid-to-upper band; capped by SWE-bench Pro 51.8%, Vibe Code Bench 4.06% and Terminal-Bench 2.1 44.2% — the council helps reasoning, not repo-scale agentic coding.
- **Cost efficiency: 88/100.** $1.25/$2.50 with $0.20 cached (an 84% cache discount) matches the ~$1.25/$4.25 ≈ 88 reference band; the 16-agent Heavy mode multiplies token consumption 8–12x, so the standard council is the cost-sane route.
- **Overall Score: 79/100.** Mean of (70 + 88 + 95 + 68 + 76) / 5 = 79.4 → 79. Best fit: book-length document analysis, legal/research archives and long-context RAG past 200K at a mid-tier price — a deprecated flagship kept for exactly that job.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-21
- Method: public internet research (BenchLM with Meta AI chart + Vals AI rows, hokai.io vendor review, tokencost.app); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
