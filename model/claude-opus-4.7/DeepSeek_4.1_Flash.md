# Claude Opus 4.7 — findings by DeepSeek 4.1 Flash

- Source: Anthropic (`claude-opus-4-7`, hosted as `opencode/claude-opus-4.7`)
- Date: 2026-10-18 (UTC); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-verified 2026-10-18.** BenchLM (`claude-opus-4-7`, 17 rows) computes an overall **65.3/100 (#36 of 228)** and re-confirms the prior pass. **No score change.**

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's generally-available Opus-class frontier model (April 2026), a direct upgrade to Opus 4.6 aimed at long-horizon agentic software engineering, tool use, and high-resolution vision. Sits below the restricted Claude Mythos Preview in raw capability but is the strongest broadly released Claude model.
- **Provider / access:** Anthropic API (`claude-opus-4-7`); also Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry; OpenCode route `opencode/claude-opus-4.7`. Messages API with vision input; tool calls and JSON mode supported.
- **Release / knowledge:** 2026-04-16; knowledge cutoff not published in the launch post.
- **IDs:** `anthropic/claude-opus-4-7`, `opencode/claude-opus-4.7` (no Free tier ID).
- **Context window:** 1,000,000 input tokens / 128,000 max output tokens (Anthropic launch post + llm-stats; the scaffold `meta.json` 128K total is a generic placeholder and understates the real 1M input window).
- **Modalities:** text + image in (images up to 2,576 px long edge ≈ 3.75 MP, ~3.3× prior Claude), PDF/document input; text out; extended thinking with `low/medium/high/xhigh/max` effort levels; tool calls; JSON mode.
- **Pricing (as of 2026-10-18):** $5.00 / 1M input, $25.00 / 1M output (≤200K prompts); >200K prompts $10 / $37.50. No cached-input discount published on the tracked providers. Not a free tier. An updated tokenizer maps the same text to ~1.0–1.35× more tokens than Opus 4.6.
- **Architecture:** proprietary (weights undisclosed).

### Raw benchmarks found

> Independent trackers disagree with the vendor on several rows — both are listed where found.

Agent / tool use:

- MCP-Atlas (Scaled tool use): **77.3%** (Anthropic system card / Vellum; best-in-class at release, vs Opus 4.6 62.7–75.8% depending on harness)
- Terminal-Bench 2.0: **69.4%** (Anthropic, Terminus-2 harness, thinking disabled) — Terminal-Bench 2.1: **68.5%** (Vals AI, via BenchLM)
- Tau2-Bench (τ²-bench): **74%** (Artificial Analysis, via BenchLM)
- OSWorld-Verified (computer use): **78.0%** (Anthropic)
- GDPval-AA: **state-of-the-art** per Anthropic (exact Elo not disclosed in the launch post)
- ApprenticeBench (GUI): **7%** (NeoCognition, via BenchLM)
- ResearchClawBench: **20.7%** (via BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **94.2%** (Anthropic) — **88.5%** (Artificial Analysis) — **90.2%** (Vals AI, via BenchLM); harness/elicitation differences
- HLE: **46.9%** no tools / **54.7%** with tools (Anthropic) — AA-HLE **33.3%** (Artificial Analysis)
- AA-LCR: **75.7%** (Artificial Analysis, via BenchLM)
- CritPt: **5.1%** (Artificial Analysis)
- MMLU-Pro: **89.9%** (Vals AI); MMMLU **91.5%** (Anthropic)
- Artificial Analysis Intelligence Index: **30.9%** (via BenchLM); BenchLM overall **66.74/100, #29 of 954**
- AA-Omniscience Accuracy: **44.7%** / Hallucination Rate: **54.1%** (Artificial Analysis)
- FrontierMath v2 (Tiers 1–3): **70.2%** / (Tier 4): **31.7%** (Epoch AI, via BenchLM)

Coding:

- SWE-bench Verified: **87.6%** (Anthropic) — **82.0%** (Vals AI, via BenchLM)
- SWE-bench Pro: **64.3%** (Anthropic; multi-language variant)
- LiveCodeBench: **85.1%** (Vals AI)
- CursorBench: **70%** (Cursor, early-access partner)
- Vibe Code Bench v1.1: **71.0%** (Vals AI, via BenchLM)
- FrontierCode 1.1 Main: **38.5%** (Cognition, via BenchLM)
- React Native Evals: **82.8%** (via BenchLM)

Long context:

- No MRCR/RULER figure found; AA-LCR 75.7% is the closest independent long-context signal at 1M-token input support.

### Normalized scores (1–100)

- **Tool use: 90/100.** Best-in-class MCP-Atlas (77.3%), τ²-bench 74%, OSWorld 78% and strong partner agent benchmarks, capped by Terminal-Bench 2.0 only ~69% (below the ~88%+ frontier ref) and weak ApprenticeBench GUI (7%).
- **Reasoning: 88/100.** GPQA Diamond 94.2% and HLE 54.7% with tools are frontier-grade, but AA-LCR 75.7%, AA Intelligence Index 30.9% and a low CritPt 5.1% keep it below the top reasoning tier.
- **Context window: 95/100.** 1M-token input / 128K output is top tier; lacks a verified ≥98% retrieval-at-512K figure, so it lands at the 95–100 tier's lower end.
- **Multimodal: 76/100.** Text + image (3.75 MP, ~3.3× prior Claude) plus PDF input with a large CharXiv visual-reasoning jump (82.1% no tools / 91.0% with tools); no audio or video input, so it sits at the +image/+PDF band.
- **Coding: 92/100.** SWE-bench Verified 87.6% and Pro 64.3% lead generally-available models, LiveCodeBench 85.1%; independent Vals SWE-bench (82.0%) is lower, which caps the top of the range.
- **Cost efficiency: 48/100.** $5/$25 per 1M with a 1.0–1.35× heavier tokenizer is premium frontier pricing (between the ~$3/$15 ≈ 60 and ~$10/$50 ≈ 30 anchors).
- **Overall Score: 88/100.** (90 + 88 + 95 + 76 + 92) / 5 = 88.2 → 88. Best fit: production coding agents, multi-tool orchestration, and computer-use workflows where tool reliability outranks price.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: public internet research (Anthropic launch post/system card, Artificial Analysis, Vals AI, BenchLM, llm-stats, Vellum, Epoch AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
