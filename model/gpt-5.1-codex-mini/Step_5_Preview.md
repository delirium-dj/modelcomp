# GPT-5.1-Codex Mini — findings by Step 5 Preview

- Source: OpenAI/GPT-5.1-Codex Mini (`gpt-5.1-codex-mini`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1-Codex Mini
- **Short description:** OpenAI's smaller, cheaper, explicitly "less-capable" version of GPT-5.1-Codex (Nov 2025) — a Codex-tuned mini for cost-sensitive agentic coding via the Responses API; deprecated by OpenAI's AA listing in favor of the GPT-5.2-Codex line.
- **Provider / access:** OpenAI API `gpt-5.1-codex-mini` (Responses API only — no Chat Completions, no Batch, no fine-tuning); OpenCode Zen lists a paid route `opencode/gpt-5.1-codex-mini` (no free ID found, verified 2026-10-19).
- **Release / knowledge:** Released 2025-11-13 (Artificial Analysis); knowledge cutoff Sep 30, 2024; rolling snapshot.
- **IDs:** `gpt-5.1-codex-mini` (OpenAI Responses API) · `opencode/gpt-5.1-codex-mini` (Zen, paid).
- **Context window:** 400,000 tokens with 128,000 max output tokens (official model page; confirmed by AA).
- **Modalities:** Text and image in → text out; reasoning tokens; streaming; structured outputs; function calling; prompt caching; server-side web search tool. Tools: function_calling, web_search.
- **Pricing (as of 2026-10-19):** $0.25 / 1M input, $0.025 / 1M cached input, $2 / 1M output (official; AA blended $0.27 at 7:2:1).
- **Architecture:** Proprietary; parameter count not disclosed ("smaller version of GPT-5.1-Codex").

### Raw benchmarks found

> Independent coverage is thin by design: Artificial Analysis lists this model as deprecated with an **estimated** Intelligence Index (full independent evaluation "forthcoming") and no per-benchmark text figures; BenchLM and Vals AI have no page. The AA composite and the official spec sheet are therefore the evidence base; every per-benchmark row below reads "no verified public score found" rather than borrowing the parent GPT-5.1-Codex's numbers.

Agent / tool use:

- Artificial Analysis Intelligence Index (v4.3.2 composite incl. AutomationBench-AA, Terminal-Bench 4.0, GDPval-AA, AA-Briefcase): **20** (estimated; above its price-tier median of 13, #52/173 in tier)
- Terminal-Bench 2.1 / Tau3-Banking / τ²-bench / MCP-Atlas / Toolathlon / GDPval-AA Elo / Claw-Eval: **no verified public score found** for this exact model

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **20** (estimated) — the only composite
- GPQA Diamond / HLE / CritPt / AA-LCR / AA-Omniscience: **no verified public score found** for this exact model
- Official positioning: "smaller, more cost-effective, **less-capable** version of GPT-5.1-Codex" (OpenAI model page) — the parent model measured GPQA 86.0% / HLE 25.7% / Index 23.7 on AA, cited here as lineage context only, not as this model's scores

Coding:

- SWE-bench Verified/Pro / LiveCodeBench / Vibe Code Bench / Terminal-Bench: **no verified public score found** for this exact model (the parent GPT-5.1-Codex's official figures — SWE-bench Verified 73.7%, Terminal-Bench 2.0 52.8% — are lineage context only)

Long context:

- 400K window / 128K max output verified (official); no MRCR/RULER/AA-LCR retrieval-at-window figure published.

Speed / latency (Artificial Analysis, median across providers): 174.5 output tokens/s (#37/151), TTFT 18.89 s — notably fast decode, high thinking latency, consistent with a mini reasoning model at high effort.

### Normalized scores (1–100)

- **Tool use: 60/100.** Anchored on the estimated composite Index of 20 (above its cheap-tier median of 13 but well below frontier) and the model's explicit "less-capable than GPT-5.1-Codex" positioning; no per-benchmark agentic number exists for this exact model, so the low-mid band is the defensible placement.
- **Reasoning: 58/100.** Same composite anchor: mid-band by the methodology's Index 20–35 mapping, with no GPQA/HLE/CritPt figure published for this model and the parent's reasoning profile (68 on the same scale) explicitly one tier up.
- **Context window: 78/100.** 400K total / 128K output verified on the official page — same window class as the rest of the Codex family, upper part of the methodology's 200K–500K band; no independent long-context retrieval figure to push higher.
- **Multimodal: 66/100.** Text + image in, text out (image tier 60–70) per the official page and AA; no MMMU-Pro-style figure published for this model.
- **Coding: 63/100.** A Codex-tuned coding model priced 5× below its parent, but explicitly less capable and with zero published SWE-bench/LiveCodeBench/Terminal-Bench values of its own — mid-band, clearly below the parent's 75.
- **Cost efficiency: 93/100.** $0.25/$2.00 per MTok with $0.025 cached input (no Zen free route) — cheaper than the $0.60/$2.20 (~92) anchor on input and near it on output, at the top of the 90+ band.
- **Overall Score: 65/100.** Mean of 60/58/78/66/63 = 65.0 → 65. Best fit: the budget Codex tier — same 400K Responses-API harness and image input as GPT-5.1-Codex at a fifth of the price — for high-volume, less-demanding agentic coding; use the parent (or the newer 5.2/5.3-Codex line) when task difficulty justifies it.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-10-19
- Method: public internet research — official OpenAI model page cross-checked against Artificial Analysis (deprecated listing, estimated composite, speed/latency) and the OpenCode Zen model list; BenchLM and Vals AI have no entry for this model. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Step_5_Preview_v2.md`, using the same headings.
