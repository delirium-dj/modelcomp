# Owl Alpha — findings by DeepSeek 4.1 Flash

- Source: undisclosed provider (OpenRouter stealth) / Owl Alpha (`openrouter/owl-alpha`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **LOW-CONFIDENCE FILE.** Owl Alpha is an anonymous OpenRouter stealth model with no published vendor, weights, or specs. Only one third-party benchmark and OpenRouter traffic metadata were found. Scores below are conservative interpretations from that thin evidence, not from a vendor model card. Not to be confused with the separate `stealth/ox-alpha` ("Ox Alpha").

## Model card

- **Name:** Owl Alpha
- **Short description:** A cloaked/stealth foundation model published under OpenRouter's first-party namespace on behalf of an unnamed provider (page created ~2026-04-28), positioned for agentic workloads and long context, free during preview. OpenRouter warns prompts/completions may be logged and used to improve the model. Currently not being served (no live endpoints as of Oct 2026).
- **Provider / access:** OpenRouter first-party namespace (`openrouter/owl-alpha`); OpenAI-compatible. Was free during preview; no live endpoints now.
- **Release / knowledge:** ~2026-04-28 (OpenRouter page/API creation timestamp); retired/unserved by Oct 2026. Knowledge cutoff unknown.
- **IDs:** `openrouter/owl-alpha`.
- **Context window:** 1,048,576 tokens (1M) per the OpenRouter model page.
- **Modalities:** text in; text out. Native tool use, long context, code generation, complex instruction execution; stated compatible with Claude Code / OpenClaw. No vision/audio/video.
- **Pricing (as of 2026-10-09):** **$0 / $0** during preview (OpenRouter Apr 2026); no live endpoints now.
- **Architecture:** undisclosed — described only as a "high-performance foundation model designed for agentic workloads." No params, weights, or license.

### Raw benchmarks found

- ClawBench V2 (web-agent, intercepted/final-request match): **14.6%** (6/130), Reward 4.6% (independent, TIGER-Lab ClawBench; rank 5 of 6 listed)
- OpenRouter preview usage: 1.05B prompt / 72.2M completion tokens (traffic metadata, Apr 2026)
- GPQA / SWE-bench / Terminal-Bench / AA Intelligence Index: **no verified public score found**
- Long context: 1M window claimed; **no MRCR/RULER/GraphWalks published — no verified public score found**

### Normalized scores (1–100)

- **Tool use: 60/100.** Only a weak ClawBench V2 (14.6%) web-agent result exists; scored provisionally near the mid-low band given its agentic framing.
- **Reasoning: 60/100.** No reasoning benchmark exists; provisional midpoint, explicitly low-confidence.
- **Context window: 95/100.** 1,048,576-token window (≥1M band) per the OpenRouter page; no retrieval benchmark.
- **Multimodal: 15/100.** Text-only.
- **Coding: 55/100.** No coding benchmark found; provisional low value.
- **Cost efficiency: 100/100.** Free during preview (now unserved).
- **Overall Score: 57/100.** (60 + 60 + 95 + 15 + 55) / 5 = 57.0 → 57. Best fit: unknown; treat scores as low-confidence placeholders — do not rank against documented models without fresh verified evidence.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-09
- Method: public internet research via OpenRouter model/endpoint metadata (live + archived), the TIGER-Lab ClawBench dataset and Hugging Face full-text references. No vendor card, weights or standard benchmark suite exists; the four capability scores without benchmarks are clearly flagged as low-confidence provisional interpretations, not measured results. Normalized 1–100 interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
