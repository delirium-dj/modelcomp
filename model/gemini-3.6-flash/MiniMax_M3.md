# Gemini 3.6 Flash — findings by MiniMax M3

- Source: Google (`google/gemini-3.6-flash`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's workhorse Flash-tier model (post-3.5 Flash), shipped 2026-07-21 with deliberate token-efficiency improvements and stronger coding/agentic performance than 3.5 Flash. Sweeps 3.1 Pro on Google's published coding/agentic benchmark set.
- **Provider / access:** Gemini API; Google AI Studio; Gemini Enterprise; Vertex AI; OpenCode Zen `opencode/gemini-3.6-flash`. Chat Completions-compatible.
- **Release / knowledge:** Released 2026-07-21 (Google blog).
- **IDs:** `google/gemini-3.6-flash`; `opencode/gemini-3.6-flash` (Zen). Free tier available on Google AI Studio and OpenCode Zen.
- **Context window:** 1,048,576 (1M) tokens.
- **Modalities:** Text, image, audio, PDF in; text out. Tool calls: yes (function calling, structured output, code execution).
- **Pricing (as of 2026-10-13):** Paid ~$0.75 / per-1M input (per OpenRouter); free tier with rate limits on Google AI Studio and OpenCode Zen.
- **Architecture:** Proprietary Google MoE. Builds directly on 3.5 Flash with token-efficiency + quality improvements.

### Raw benchmarks found

Agent / tool use:

- SWE-Bench Pro: **beats Gemini 3.1 Pro** (emergent.sh head-to-head; Google's published comparison).
- DeepSWE v1.1: **beats Gemini 3.1 Pro** (emergent.sh head-to-head).
- Terminal-Bench (2.1 / 4.0): **beats Gemini 3.1 Pro** (emergent.sh head-to-head; specific numbers for this exact model/ID require the DeepMind model card).
- MLE-Bench: **beats Gemini 3.1 Pro** (emergent.sh head-to-head).
- 72 matched benchmark scores across 69 BenchmarkList benchmarks (per benchmarklist.com).
- MCP Atlas / OSWorld-Verified / Toolathlon / Tau3 / Claw-Eval: **no verified public score found** for this exact model/ID at standard harness.

Reasoning / knowledge:

- GPQA Diamond / Humanity's Last Exam / ARC-AGI-2 / AA Intelligence Index: **no verified public score found** for this exact model/ID at independent third-party harness.
- 72 matched scores on BenchmarkList — specific top-line score not surfaced (benchmarklist.com lists counts only).

Multimodal:

- Beats Gemini 3.5 Flash on token-efficient multimodal pipelines per Google blog framing.
- CharXiv / MMMU-Pro / Blueprint-Bench: **no verified public score found** for this exact model/ID.

Long context:

- 1M context window. Specific MRCR v2 / RULER at window length: **no verified public score found** for this exact model/ID.

### Normalized scores (1–100)

- **Tool use: 88/100.** Sweeps Gemini 3.1 Pro on SWE-Bench Pro, DeepSWE, Terminal-Bench, and MLE-Bench per Google's published comparison (emergent.sh). 72 matched benchmarks tracked on BenchmarkList. Capped at 88 because specific third-party-verified Terminal-Bench / MCP Atlas / SWE-bench Pro percentages are not surfaced for this exact model/ID.
- **Reasoning: 82/100.** Builds on the 3.5 Flash foundation (AA Intelligence Index 55.3, rank #7 of 147). 3.6 Flash improves on 3.5 Flash per Google. Capped at 82 because GPQA / HLE / ARC-AGI-2 specific numbers for this exact model/ID at independent third-party harness are not published.
- **Context window: 95/100.** 1M context window. Capped at 95 because no MRCR / RULER retrieval figure at window length is published for this exact model/ID.
- **Multimodal: 90/100.** Text + image + audio + PDF in (full coverage). Strong on token-efficient multimodal pipelines per Google. Capped at 90 because CharXiv / MMMU-Pro specific numbers for this exact model/ID are not published.
- **Coding: 86/100.** Beats Gemini 3.1 Pro on coding benchmarks per Google's published comparison. Capped at 86 because LiveCodeBench / SciCode / DeepSWE specific percentages for this exact model/ID are not separately published.
- **Cost efficiency: 88/100.** Free tier on Google AI Studio and OpenCode Zen with rate limits. Paid tier ~$0.75/MTok input (OpenRouter). Capped at 88 because exact paid output price for this model/ID needs verification (likely $3-4 range per Gemini Flash pricing pattern).
- **Overall Score: 88/100** Half-up mean of Tool 88, Reasoning 82, Context 95, Multimodal 90, Coding 86 = 441/5 = 88.2 → half-up 88. Gemini 3.6 Flash is Google's mid-2026 workhorse Flash: token-efficiency improvements over 3.5 Flash, beats 3.1 Pro on coding/agentic axes per Google, full multimodal coverage, 1M context, with a free tier available — but no independent-verified Terminal-Bench / MCP Atlas / SWE-Bench Pro specific percentages for this exact model/ID cap the upside.

---

## Signature

- Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-13
- Method: public internet research (Google blog announcement, DeepMind Gemini 3.6 Flash model card, emergent.sh head-to-head comparison vs Gemini 3.1 Pro, BenchmarkList score list, OpenRouter pricing). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.6_Flash_Google.md`, using the same headings.
