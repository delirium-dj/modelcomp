# Gemini 3 Flash Preview — findings by Space Bunny Alpha

- Source: Google (`gemini-3-flash-preview`; OpenCode alias `opencode/gemini-3-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash Preview
- **Short description:** Google's December 2025 fast multimodal reasoning and agent model, positioned between high-volume Flash workloads and more capable Pro models. The OpenCode folder uses a shortened alias, while the public Google model code is preview-qualified.
- **Provider / access:** Google Gemini API (`gemini-3-flash-preview`); Google AI Studio. OpenCode Zen lists `gemini-3-flash` as a model route, but the exact provider variant should be confirmed before comparing runs.
- **Release / knowledge:** Google lists December 2025 as the latest update; no public knowledge cutoff was shown on the official model page.
- **IDs:** `gemini-3-flash-preview` (Google); `opencode/gemini-3-flash` (repository route).
- **Context window:** 1,048,576 input tokens; 65,536 output tokens (Google Gemini API documentation, verified 2026-09-24).
- **Modalities:** Text, image, video, audio, and PDF input; text output; thinking, code execution, computer use, function calling, structured outputs, URL context, and search grounding supported. Audio generation, image generation, and Live API are not supported.
- **Pricing (as of 2026-09-24):** Artificial Analysis reports $0.50 per 1M input and $3.00 per 1M output tokens, with a 90% cache discount. The official page reviewed did not show price.
- **Architecture:** Proprietary; Google has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **26/100**, rank **#99/210** for Gemini 3 Flash Preview reasoning (Artificial Analysis, accessed 2026-09-24; composite benchmark)
- Output speed: **200.7 tokens/s**; time to first token **6.88s** (Artificial Analysis, accessed 2026-09-24)
- Terminal-Bench 2.1 / 4.0: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found** as a standalone value
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **26** (Artificial Analysis, accessed 2026-09-24)
- GPQA Diamond: **90.4%** (Benchgen model profile, labeled Benchgen evaluation, 2025-12; profile is marked draft)
- Humanity's Last Exam: **43.5%** (Benchgen model profile, labeled Benchgen evaluation, 2025-12; profile is marked draft)
- MATH: **97.5%**; GSM8K: **96.8%**; SimpleQA: **68.7%** (same Benchgen draft profile; not official Google scores)
- LCR / MLCR, CritPt, and hallucination metrics: **no verified public score found**

Coding:

- SWE-bench Verified: **78%** (Benchgen model profile, labeled Benchgen evaluation, 2025-12; profile is marked draft)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- No public retrieval-at-length result for this exact preview was found. Google verifies a 1,048,576-token input limit and 65,536-token output limit.

Sources consulted: [Google Gemini 3 Flash Preview documentation](https://ai.google.dev/gemini-api/docs/models/gemini-3-flash-preview), [Artificial Analysis Gemini 3 Flash reasoning](https://artificialanalysis.ai/models/gemini-3-flash-reasoning), and [Benchgen Gemini 3 Flash profile](https://benchgen.com/models/google/gemini-3-flash), accessed 2026-09-24. Benchgen figures are explicitly marked draft and are not treated as official Google claims.

### Normalized scores (1–100)

- **Tool use: 78/100.** Google documents computer use, code execution, function calling, and other agent features; exact Terminal-Bench, Tau, GDPval, and tool-call values were not found.
- **Reasoning: 82/100.** The AA Index 26 is only slightly above the compared median of 25, but the draft Benchgen profile reports 90.4% GPQA and 43.5% HLE. The conflicting evidence levels keep the score below newer Gemini models.
- **Context window: 95/100.** Google verifies 1,048,576 input tokens, meeting the top context tier; no retrieval-at-length result was published.
- **Multimodal: 95/100.** Google verifies text, image, video, audio, and PDF input with text output.
- **Coding: 82/100.** The draft Benchgen profile reports 78% SWE-bench Verified, but the source is not an official Google model card; exact independent coding evidence is otherwise sparse.
- **Cost efficiency: 90/100.** Artificial Analysis reports $0.50/$3.00 per 1M input/output tokens and a 90% cache discount, making this a strong paid Flash-tier route.
- **Overall Score: 86.4/100.** (78 + 82 + 95 + 95 + 82) / 5 = 86.4. Best fit: high-volume multimodal agents and software workflows where Flash-class latency and price matter; verify the exact OpenCode alias and benchmark harness.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of Google model documentation, Artificial Analysis, and a draft Benchgen profile; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
