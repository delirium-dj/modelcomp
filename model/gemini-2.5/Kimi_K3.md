# Gemini 2.5 — findings by Kimi K3

- Source: Google DeepMind (`gemini-2.5`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 (family entry; flagship = Gemini 2.5 Pro)
- **Short description:** Google's first thinking-model generation, launched 2025-03-25 with 2.5 Pro Experimental — native multimodality (text/image/audio/video), 1M-token context, #1 on LMArena at launch. The tiered family anchors `gemini-2.5-pro`, `gemini-2.5-flash`, and `gemini-2.5-flash-lite` (tracked in sibling folders); this entry follows the flagship Pro.
- **Provider / access:** Google AI Studio / Gemini API (`gemini-2.5-pro`, experimental ID `gemini-2.5-pro-exp-03-25` at launch), Vertex AI; Gemini app for Advanced users. Also via third parties (DeepInfra). GenerateContent API; thinking mode built in.
- **Release / knowledge:** 2025-03-25 (Pro Experimental; GA May 2025 per llm-stats); knowledge cutoff ~Jan 2025 (llm-stats).
- **IDs:** `gemini-2.5-pro` (`google/gemini-2.5-pro` on OpenRouter). No OpenCode Zen Free ID verified; AI Studio free-tier access exists with data-collection caveats.
- **Context window:** 1,000,000 tokens input; 65,536 max output (OpenRouter); 2M promised at launch. Standard pricing applies to ≤200K input; 2x surcharge above.
- **Modalities:** text/image/audio/video in → text out; built-in thinking; tool calling (function calling, code execution, Google search grounding); JSON mode via response schema.
- **Pricing (as of 2026-10-09):** $1.25 / $10.00 per 1M in/out (≤200K input), $2.50 / $15.00 above 200K (Google AI pricing via benchgen/llm-stats; stable across trackers).
- **Architecture:** proprietary; multimodal transformer, parameters undisclosed; thinking integrated into the base+post-training stack.

### Raw benchmarks found

Agent / tool use:

- SWE-Bench Verified: **63.8%** (custom agent setup, Google launch post, 2025-03-25)
- AetherCode (agentic web tasks): **32.7%** (Benchgen eval, 2025-07 — weak vs frontier)
- SHADE-Arena (sabotage monitoring probe): **14.8 overall success** (Anthropic research, 2025-06)
- Terminal-Bench / Tau3 / Claw-Eval: no verified public score found

Reasoning / knowledge:

- Humanity's Last Exam (no tools): **18.8%** SOTA at launch (Google); **21.64%** in Benchgen's 2025-07 re-evaluation
- GPQA Diamond: leads at launch "without test-time techniques" (Google launch table — image-only, exact % not text-extractable)
- AIME 2025: leads at launch (same table)
- LMArena: **#1 by a significant margin** at debut (Google launch post)
- Arena Hard v2: **79.0%** (Benchgen, 2025-07)
- CritPt / AA Intelligence Index: no verified public score found

Coding:

- LiveCodeBench: **73.6%** (Benchgen, 2025-07)
- BigCodeBench: **33.1%** (Benchgen, 2025-07)
- "Excels at creating visually compelling web apps and agentic code applications" (Google launch)

Long context:

- 1M window at launch (2M promised); MRCR (Multi-Round Coreference Resolution) evaluations added to the launch table 2025-03-26 — image-only, numbers not text-extractable; independent RULER/MRCR figures not found in text sources.

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded. Perspective: an early-2025 flagship measured against a late-2026 field.

- **Tool use: 68/100.** Solid function-calling/code-execution stack and a 63.8% SWE-bench Verified agent run at launch, but weak measured agentic web work (AetherCode 32.7%) and a day-one model now ~19 months old; capped accordingly.
- **Reasoning: 72/100.** HLE 18.8% no-tools was SOTA in Mar 2025 (21.64% on 2025-07 re-eval), GPQA/AIME leadership at launch, always-on thinking; capped because the field has moved ~3x on HLE since and no CritPt/AA-Index data exists.
- **Context window: 90/100.** 1M tokens with MRCR-validated retrieval was a generational feature (5x peers at launch, 2M promised) and still matches most 2026 rivals; capped by the >200K 2x price surcharge and 65K output cap.
- **Multimodal: 85/100.** Native text+image+audio+video input — still broader intake than most 2026 models; capped by text-only output.
- **Coding: 74/100.** LiveCodeBench 73.6% and SWE-bench Verified 63.8% were strong for 2025 (benchgen: competitive with o3's 75.8 LCB at 1/8 the price); BigCodeBench 33.1% and the age of the checkpoint cap it below current coding leaders.
- **Cost efficiency: 55/100.** $1.25/$10 headline is mid-priced, but the 2x surcharge above 200K input punishes exactly the long-context jobs the model is for.
- **Overall Score: 78/100.** Mean of 68/72/90/85/74 = 77.8 → 78. Best fit: long-document/whole-repo multimodal analysis where 1M context matters; superseded for frontier reasoning/coding by the Gemini 3.x/4 line.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-09
- Method: public internet research (Google DeepMind launch post, benchgen.com model card incl. evaluation dates, llm-stats.com specs/provider table, OpenRouter listing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.6_Terra.md`, using the same headings.
