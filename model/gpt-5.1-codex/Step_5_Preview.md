# GPT-5.1-Codex — findings by Step 5 Preview

- Source: OpenAI/GPT-5.1-Codex (`gpt-5.1-codex`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1-Codex
- **Short description:** OpenAI's Codex-tuned GPT-5.1 snapshot built for agentic coding in Codex / Codex-like environments (Responses API only); superseded as the Codex default by GPT-5.1-Codex-Max on 2025-11-19 and later by the GPT-5.2/5.3-Codex line.
- **Provider / access:** OpenAI API `gpt-5.1-codex` (Responses API only — no Chat Completions, no Batch, no fine-tuning); OpenCode Zen lists a paid route `opencode/gpt-5.1-codex` (no free ID found, verified 2026-10-19); also ships inside Codex CLI/IDE/cloud surfaces via ChatGPT plans.
- **Release / knowledge:** Released 2025-11-13 (Artificial Analysis; OpenAI's GPT-5.1 wave started 2025-11-12); knowledge cutoff Sep 30, 2024; snapshot is "regularly updated" per OpenAI docs — the ID is rolling, not pinned.
- **IDs:** `gpt-5.1-codex` (OpenAI Responses API) · `opencode/gpt-5.1-codex` (Zen, paid).
- **Context window:** 400,000 tokens with 128,000 max output tokens (official model page; confirmed by AA).
- **Modalities:** Text and image in → text out; reasoning tokens; streaming; structured outputs; function calling; prompt caching; server-side web search tool. Tools: function_calling, web_search.
- **Pricing (as of 2026-10-19):** $1.25 / 1M input, $0.125 / 1M cached input, $10 / 1M output (official; AA median across providers matches, blended $1.34 at 7:2:1, ~90% cache discount).
- **Architecture:** Proprietary; parameter count not disclosed.

### Raw benchmarks found

> OpenAI's own numbers come from the Codex CLI harness (GPT-5.1-Codex at high effort); independent trackers disagree on agentic quality — τ²-bench 83% is strong while Vibe Code Bench is 13.1%, a split consistent with a terminal/agent-harness specialist rather than an all-round coding model.

Agent / tool use:

- τ²-bench: **83%** (Artificial Analysis, via BenchLM) — the standout agentic number
- Terminal-Bench 2.0: **52.8%** (OpenAI, Codex CLI in the Laude Institute Harbor harness; max-effort family figure 52.8% vs Codex-Max's 58.1%)
- Gert Labs: **49.68%**; JobBench: **26.2%** (via BenchLM)
- AA-IFBench: **70.0%** (Artificial Analysis)
- GDPval-AA / Tau3-Banking / OSWorld / Claw-Eval / MCP-Atlas / Toolathlon: no verified public score found for this model

Reasoning / knowledge:

- GPQA Diamond: **86.0%** (Artificial Analysis)
- HLE: **25.7%** (Artificial Analysis)
- AA Intelligence Index: **24** (estimated; AA lists the model deprecated for full benchmarking, 10k-input workload only) / **23.7%** (BenchLM) — below the AA price-class median of 27
- CritPt: **5.7%** (Artificial Analysis)
- AA-LCR: **69.3%** (Artificial Analysis)
- AA-Omniscience: Index **-6.5**, Accuracy **39.9%**, Hallucination Rate **77.2%** — poor knowledge reliability even for its tier
- MMMU-Pro: **72.5%** (Artificial Analysis)

Coding:

- SWE-bench Verified (n=500): **73.7%** (OpenAI eval appendix, high effort) — vs 82.0% measured for Claude Opus 4.7 on the Vals harness, though harnesses differ
- Terminal-Bench 2.0: **52.8%** (OpenAI; see tool-use section)
- SWE-Lancer IC SWE: **66.3%** (OpenAI)
- LiveCodeBench: **85.6%** (Vals AI, via BenchLM)
- Vibe Code Bench v1.1: **13.12%** (Vals AI, via BenchLM) — very low for a coding-specialist model
- DeepSWE / SciCode / FrontierCode / SWE-bench Pro: no verified public score found for this model
- Official qualitative claim: 30% fewer thinking tokens than GPT-5.1-Codex-Max at medium effort on SWE-bench Verified is a Max-side claim; GPT-5.1-Codex itself is the efficiency baseline of that comparison

Long context:

- 400K window verified; AA-LCR 69.3% is the closest long-context number; no MRCR/RULER/GraphWalks retrieval-at-window pass rate published. Note GPT-5.1-Codex-Max (sibling, not this model) is the one built for cross-window compaction — that capability is not claimed for this model.

Speed / latency (Artificial Analysis): 124.4 output tokens/s (#43/185), TTFT 13.09 s; deprecated page, figures historical.

### Normalized scores (1–100)

- **Tool use: 75/100.** τ²-bench 83% is the strongest agentic signal (above the ~50% frontier reference), IFBench 70.0% is solid, but Terminal-Bench 2.0 52.8%, Gert Labs 49.7% and JobBench 26.2% sit in the mid band and no GDPval-AA/Tau3/OSWorld figure exists to lift it further.
- **Reasoning: 68/100.** GPQA Diamond 86.0% and HLE 25.7% clear the mid reference, AA-LCR 69.3% is decent, but the Intelligence Index of ~24 (below its price-class median of 27), CritPt 5.7% and a 77.2% hallucination rate (AA-Omniscience index -6.5) cap it well below the frontier tier.
- **Context window: 78/100.** 400K total / 128K output verified on the official page — inside the methodology's 200K–500K band (65–84), toward its top given 400K is 80% of the way to 500K; AA-LCR 69.3% supports but does not earn the 85+ tier.
- **Multimodal: 66/100.** Text + image in, text out (image-only tier 60–70) with MMMU-Pro 72.5% and a strong Design Arena website score (1163); no video/audio input and no non-text output.
- **Coding: 75/100.** SWE-bench Verified 73.7%, SWE-Lancer 66.3% and LiveCodeBench 85.6% are strong mid-band-plus results, but Terminal-Bench 2.0 52.8% and Vibe Code Bench 13.1% (bottom of the methodology's mid-band caveat) plus missing DeepSWE/SciCode keep it out of the 90+ frontier tier despite the Codex training focus.
- **Cost efficiency: 76/100.** Paid-only at $1.25/$10 per MTok (no Zen free ID); cheaper than the $3/$15 (~60) anchor and near the ~$0.60/$2.20 (~92) anchor's neighborhood, adjusted down for the 400K-class output price.
- **Overall Score: 72/100.** Mean of 75/68/78/66/75 = 72.4 → 72. Best fit: a mid-tier, code-harness-tuned specialist for Codex-style agentic loops at moderate price — use it for terminal/agent coding via the Responses API, not as a general reasoning or knowledge model, and prefer the newer Codex line (Max / 5.2 / 5.3) for frontier work.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-10-19
- Method: public internet research — official OpenAI model docs + the GPT-5.1-Codex-Max launch post (comparison eval appendix) cross-checked against Artificial Analysis (model page) and BenchLM (aggregating AA / Vals AI / OpenRouter), plus the OpenCode Zen model list; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Step_5_Preview_v2.md`, using the same headings.
