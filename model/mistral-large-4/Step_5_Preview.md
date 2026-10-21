# Mistral Large 4 — findings by Step 5 Preview

- Source: Mistral AI / Mistral Large 4 (`opencode/mistral-large-4`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4 ("Le Chonk")
- **Short description:** Mistral AI's largest model — a from-scratch European 1.05T-total / 49B-active MoE with a 1.6B vision encoder, 1M context and hybrid instruct-and-reasoning for multilingual document, legal/finance and agentic work; public preview since 2026-10-06 with open weights announced for later in October (not yet published).
- **Provider / access:** Mistral AI Studio (`mistral-large-4-0`), OpenRouter (`mistralai/mistral-large-4-0`), Vercel AI Gateway, Opper (`mistral:eu/mistral-large-4` EU residency / `mistral:global/...`), LiteLLM/Portkey/Martian routers; OpenCode Zen (`opencode/mistral-large-4`). Chat Completions API; tools, structured outputs, prompt caching, batch API.
- **Release / knowledge:** public preview launched 2026-10-06 (llmreference, opper.ai); knowledge cutoff not published; weights not yet released despite the open-weight claim — currently served under Mistral's proprietary terms.
- **IDs:** `mistral-large-4-0` (official), `mistralai/mistral-large-4-0` (OpenRouter), `opencode/mistral-large-4` (Zen).
- **Context window:** 1M total (llmreference, OpenRouter, opper.ai); 256K max output (Vals AI harness config).
- **Modalities:** text and image in; text out; optional/hybrid reasoning (High effort configurable); tool calling; structured outputs; multilingual 160+ languages including all official EU languages.
- **Pricing (as of 2026-10-21):** OpenRouter/Vercel $0.68/$2.09 per 1M (cache $0.07); Opper EU $0.75/$2.30 (cache $0.08); Mistral AI Studio list $1.36/$4.18 (cache $0.14).
- **Architecture:** granular MoE, 1.05T total / 49B active per token (52B incl. embeddings + output layers), 1.6B vision encoder, trained from scratch (multi-stage); parameter-level details otherwise unpublished.

> **Spec discrepancy surfaced:** the folder's `meta.json` (131K context / 32K output / text-only / $2/$6 / no Free ID) conflicts with every live source checked (1M context / 256K output / text+image in / $0.68–$1.36 in · $2.09–$4.18 out). The verified web facts above are used for scoring; the curated meta should be corrected by the maintainer.

### Raw benchmarks found

Epoch AI Benchmarking Hub (independent, high effort) + Vals AI (third-party) + Artificial Analysis via Opper + BenchLeader:

Agent / tool use:

- Finance Agent v2 (Vals): **54.7%** (Vals AI harness, $1.20/task; Mistral's own chart read matches at 54.7)
- Harvey Legal Agent Benchmark v1 (Vals): **15.8%** task all-pass rate (Vals AI, ±2.96, $4.18/task; Mistral chart read matches)
- Terminal-Bench / Tau2 / Tau3 / GDPval-AA / OSWorld / Claw-Eval / MCP-Atlas / Toolathlon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **88.1%** (Epoch AI Inspect harness, high effort, run started 2026-10-12 — evaluator of record, confirmed)
- FrontierMath Tier 4 v2 (private): **26.8%** (Epoch AI, high effort, confirmed)
- Humanity's Last Exam: **35%** (Artificial Analysis via Opper)
- AA Intelligence Index: **38.4** (Artificial Analysis via Opper; global rank #76 of 696)
- Long-context reasoning (AA-LCR): **81%** (Artificial Analysis via Opper)
- BenchLeader Index: **56.7 ±5.9**, rank #194/778 — its highest category is long context (66) (benchleader.com)
- CritPt / MMLU-Pro / Omniscience: no verified public score found

Coding:

- SciCode: **54%** (Artificial Analysis via Opper — near the 55%+ frontier reference)
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / DeepSWE / Terminal-Bench / Vibe Code Bench: no verified public score found (LLM Reference: "No task-mapped benchmark peers are available for this model yet")

Long context:

- AA-LCR **81%** long-context reasoning (Artificial Analysis via Opper); BenchLeader ranks long context as its strongest category (66); 1M window native with 256K max output; no MRCR/RULER/GraphWalks retrieval-at-length figure published.

### Normalized scores (1–100)

- **Tool use: 78/100.** Finance Agent v2 54.7% is a respectable professional-agent result and tool calling/structured outputs are first-class API features; capped by Harvey LAB 15.8% (weak task all-pass) and a total absence of Terminal-Bench, Tau, GDPval, OSWorld, Claw-Eval and MCP-Atlas numbers in any harness.
- **Reasoning: 84/100.** GPQA Diamond 88.1% (Epoch AI, evaluator of record) is strong and AA-LCR 81% shows good long-context reasoning; capped by HLE 35%, FrontierMath Tier 4 26.8%, AA Intelligence Index 38.4 (mid band, rank #76/696) and no CritPt/Omniscience data.
- **Context window: 95/100.** 1M native window with 256K max output lands in the ≥1M tier; AA-LCR 81% and BenchLeader's long-context category (66, its best) are solid but below the ≥98% retrieval-at-512K evidence needed for 100.
- **Multimodal: 68/100.** Text + image input with text out (image-in tier 60–70) via the built-in 1.6B vision encoder — document/chart/photo understanding is a stated strength, but no video/audio input and no MMMU-class published score.
- **Coding: 68/100.** The only verified coding number is SciCode 54% (near the frontier reference); every SWE-bench/LiveCodeBench/Terminal-Bench cell is unmeasured for this ID, so the score is provisional and evidence-thin.
- **Cost efficiency: 85/100.** $0.68/$2.09 on OpenRouter/Vercel (cache $0.07) sits between the ~$0.60/$2.20 ≈ 92 and ~$1.25/$4.25 ≈ 88 reference bands on the cheaper side; Mistral Studio list pricing ($1.36/$4.18) is materially higher, so the score follows the cheaper verified route.
- **Overall Score: 79/100.** Mean of (78 + 84 + 95 + 68 + 68) / 5 = 78.6 → 79. Best fit: long-document multilingual analysis (legal/finance) in EU residency — the coding and agentic profiles remain provisional until independent harnesses measure them.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-21
- Method: public internet research (LLM Reference with Epoch AI/Vals AI rows, Opper with Artificial Analysis figures, BenchLeader, opper.click); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
