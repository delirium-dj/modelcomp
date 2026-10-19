# GPT-5-Codex — findings by Step 5 Preview

- Source: OpenAI/GPT-5-Codex (`gpt-5-codex`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5-Codex
- **Short description:** The original Codex-tuned GPT-5 snapshot (2025-09-15 Codex / 2025-09-23 API), trained for agentic software engineering in Codex — quick interactive pairing and long independent runs; now superseded by the GPT-5.1/5.2/5.3-Codex line.
- **Provider / access:** OpenAI API `gpt-5-codex` (Responses API only — no Chat Completions, no Batch, no fine-tuning); OpenCode Zen lists a paid route `opencode/gpt-5-codex` (no free ID found, verified 2026-10-19); default model for Codex cloud tasks and code review at launch.
- **Release / knowledge:** Released 2025-09-15 (Codex surfaces), API access 2025-09-23; knowledge cutoff Sep 30, 2024; rolling snapshot, regularly updated.
- **IDs:** `gpt-5-codex` (OpenAI Responses API) · `opencode/gpt-5-codex` (Zen, paid).
- **Context window:** 400,000-token window with a **272,000 max input** cap and 128,000 max output tokens (official model page) — the effective single-request input is smaller than the window.
- **Modalities:** Text, image, and file input; text output (per Vals AI: image yes, file yes, video no); reasoning tokens; streaming; structured outputs; function calling; prompt caching; server-side web search tool. Tools: function_calling, web_search.
- **Pricing (as of 2026-10-19):** $1.25 / 1M input, $0.125 / 1M cached input, $10 / 1M output (official — identical to GPT-5 list pricing).
- **Architecture:** Proprietary; parameter count not disclosed.

### Raw benchmarks found

> Independent coverage exists mainly for coding (Vals AI, Sep 2025); reasoning/knowledge benchmarks for this exact model were not published — the AA Intelligence Index is the only independent composite and it is estimated/deprecated.

Agent / tool use:

- Terminal-Bench: **58.8%** (Vals AI, 1st place at evaluation time; +10 points over GPT-5) — mid-band top
- τ²-bench / Tau3-Banking / GPTval-AA / OSWorld / Claw-Eval / MCP-Atlas / Toolathlon: no verified public score found for this model
- Official qualitative claims: 7+ hours of independent work on large tasks in testing; trained code-review capability; 93.7% fewer tokens than GPT-5 on the bottom 10% of user turns (2× more reasoning on the top 10%)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **25** (estimated; AA marks the model deprecated for full benchmarking, 10k-input workload only) — below its price-class median of 27
- GPQA Diamond / HLE / CritPt / AA-Omniscience / LCR for this exact model: no verified public score found

Coding:

- SWE-bench Verified: **1st place** at evaluation time, narrowly above GPT-5 by under one percentage point (Vals AI, Sep 2025) — the exact percentage was not published in the reviews text, so no verified value is claimed here
- Terminal-Bench: **58.8%** (Vals AI; see agentic section)
- LiveCodeBench: **84.72% ±1.03** (Vals AI, rank 37/143) — near-frontier competitive-programming
- IOI v1: **9.8%** overall (Vals AI; first model to receive full credit on a single IOI question)
- DeepSWE / SciCode / Vibe Code Bench / SWE-bench Pro: no verified public score found for this model

Long context:

- 400K window / 272K max input verified (official); no MRCR/RULER/GraphWalks retrieval-at-window pass rate published. Codex CLI-side session compaction existed at this generation but is a product feature, not a model-level capability claim.

Speed / latency (Artificial Analysis, median across providers): 189.0 output tokens/s (#18/185), TTFT 8.10 s; Vals AI measured 2 min 15 s average latency on its coding suite at high effort.

### Normalized scores (1–100)

- **Tool use: 70/100.** Terminal-Bench 58.8% (Vals, #1 at the time) is the top of the methodology's mid band and the official 7-hour autonomous-run and code-review claims support strong agency, but with no τ²/Tau3/GDPval-AA/OSWorld figure published for this exact model the frontier tier cannot be evidenced.
- **Reasoning: 60/100.** Only an estimated, deprecated composite (AA Intelligence Index 25, below its price-class median) is public for this model — squarely the methodology's mid band; no verified GPQA/HLE/CritPt value for GPT-5-Codex itself, so the score is capped at mid rather than inferred from base GPT-5.
- **Context window: 75/100.** 400K total window verified, but the official 272K max-input cap means effective single-request input sits at the lower-middle of the 200K–500K band (65–84); no independent long-context retrieval figure to push higher.
- **Multimodal: 72/100.** Text + image + file input with text output — file/PDF support moves it above the image-only 60–70 band, while video and non-text output stay unsupported; no MMMU-Pro style figure found for this model.
- **Coding: 76/100.** LiveCodeBench 84.7% and a Sept-2025 SWE-bench Verified #1 (just above GPT-5) plus Terminal-Bench 58.8% clear the mid band, but IOI v1 9.8%, the unpublished SWE-bench percentage, and missing DeepSWE/SciCode keep it below the 90+ frontier tier.
- **Cost efficiency: 76/100.** Paid-only at $1.25/$10 per MTok (no Zen free ID), the same anchor math as the rest of the Codex family: well below the $3/$15 (~60) tier, moderated by the 400K-class output price and rolling-snapshot risk.
- **Overall Score: 71/100.** Mean of 70/60/75/72/76 = 70.6 → 71. Best fit: a solid, mid-tier agentic-coding workhorse for Codex-style loops at GPT-5 list price — fine for interactive pairing, large refactors and code review in its harness, but every dimension is now outclassed by the GPT-5.1/5.2/5.3-Codex successors and it should not be picked for reasoning or knowledge work.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-10-19
- Method: public internet research — official OpenAI model docs + the Codex launch post cross-checked against Artificial Analysis (model page) and Vals AI (Sep 2025 coding evaluations), plus the OpenCode Zen model list; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Step_5_Preview_v2.md`, using the same headings.
