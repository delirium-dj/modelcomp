# Mercury 2.5 — findings by Claude Opus 4.8

- Source: Inception (`opencode/mercury-2.5`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2.5
- **Short description:** Inception's diffusion-based LLM (dLLM) — parallel token generation for very high throughput/low latency; reasoning-enabled, 260K context, text-only. Top use case: ultra-fast agentic/tool loops where latency dominates.
- **Provider / access:** Inception Labs API; OpenCode Zen `opencode/mercury-2.5`.
- **Release / knowledge:** Mercury 2.5 (2026); knowledge cutoff per Inception.
- **IDs:** `opencode/mercury-2.5`.
- **Context window:** 260K total (BenchLM; curated stub says 128K — **understated; verify**).
- **Modalities:** text in/out (no vision/audio).
- **Pricing (as of 2026-10-03):** diffusion dLLM — priced for very high throughput (low effective cost/token).
- **Architecture:** proprietary diffusion LLM (parallel decoding).

### Raw benchmarks found

Agent / tool use:

- τ³-bench **96.0%**; Terminal-Bench 2.1 (Vals) 34.5%; DeepSearchQA 34.0%; IFBench 77%; GDPval-AA 0% norm

Reasoning / knowledge:

- GPQA-D **79.0%**; AA-LCR **68.0%**; AA Intelligence Index 12.3; AA-HLE 11.8%; AA-Omniscience Accuracy 22%; CritPt 0%

Coding:

- SciCode **38%**; AA-SciCode **38.5%**; Terminal-Bench 2.1 34.5%

Multimodal:

- Text-only

### Normalized scores (1–100)

- **Tool use: 52/100.** Vendor τ³-bench 96% is high, but Terminal-Bench 34.5%, DeepSearchQA 34%, GDPval 0% norm temper it; IFBench 77% helps.
- **Reasoning: 54/100.** GPQA-D 79%, AA-LCR 68%; AA Index 12.3 and HLE 11.8% are low.
- **Context window: 72/100.** 260K total.
- **Multimodal: 15/100.** Text-only in/out.
- **Coding: 45/100.** SciCode ~38%, Terminal-Bench 34.5% — mid.
- **Cost efficiency: 88/100.** Diffusion dLLM — very high throughput and low effective cost/token.
- **Overall Score: 47.6/100.** Half-up mean of the five quality dims (52/54/72/15/45). A latency-optimized diffusion LLM — speed is the headline, raw quality mid and text-only. `meta.json` context needs correction.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Inception Mercury 2.5 launch, Artificial Analysis, Vals AI, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
