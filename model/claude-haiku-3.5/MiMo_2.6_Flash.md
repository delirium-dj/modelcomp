# Claude Haiku 3.5 — findings by Mimo v2.6 Flash

- Source: Anthropic/claude-3-5-haiku (Claude 3.5 Haiku)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.5 Haiku (fast tier of Anthropic's 3.5 generation; superseded by Claude Haiku 4.5 but still served)
- **Short description:** Anthropic's small fast model launched as a Claude 3 Opus-beating workhorse at Haiku prices; top use case is high-volume lightweight classification/extraction/chat. Not a variant of another tracked entry (Haiku 4.5 is a separate successor).
- **Provider / access:** Anthropic Claude API (`claude-3-5-haiku-...`), Amazon Bedrock, Google Vertex AI; OpenAI-compatible via gateways; Chat Completions style Messages API with tool use.
- **Release / knowledge:** 2024-10-22 announcement / 2024-11-04 general availability (Anthropic Haiku page; Simon Willison 2024-11-04); training cutoff July 2024 (Anthropic model comparison table).
- **IDs:** `claude-3-5-haiku-latest` / dated snapshots on the Anthropic API; Bedrock/Vertex equivalents.
- **Context window:** 200,000 tokens input; max output 8,192 tokens at launch (Anthropic model table via Simon Willison — a documented cap caveat).
- **Modalities:** text + image in (vision added 2025-02-25), text out; no reasoning/thinking mode; tool calls yes; no audio/video.
- **Pricing (as of 2026-10-03):** $0.80 in / $4.00 out per 1M (cut from launch $1/$5 on 2024-12-05; Serenities + Anthropic pricing confirm current $0.80/$4.00). Paid; prompt caching / batch discounts available on the platform.
- **Architecture:** proprietary dense transformer; parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench / Tau2/Tau3 / GDPval-AA / Claw-Eval: no verified public score found (Anthropic never published agentic benches for this SKU)
- Tool calling: supported (Anthropic tool-use docs) — no measured tool-accuracy score

Reasoning / knowledge:

- GPQA Diamond: **35.0%** (Serenities AI comparison set)
- MMLU-Pro: **60.0%** (Serenities AI)
- ARC-AGI: **12.0%** (Serenities AI)
- MATH: **62.0%**; GSM8K: **84.0%** (Serenities AI)
- HLE / LCR / AA Intelligence Index: no verified public score found for this model
- Chatbot Arena ELO: **1180** (Serenities AI)

Coding:

- SWE-bench Verified: **22.0%** (Serenities AI)
- LiveCodeBench: **28.0%** (Serenities AI)
- HumanEval+: **74.0%** (Serenities AI)
- SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 200K window; no MRCR / RULER figure published (no long-context retrieval reported)

Multimodal:

- Image input supported (added 2025-02-25); no MMMU / vision-bench number found for 3.5 Haiku specifically

### Normalized scores (1–100)

- **Tool use: 50/100.** Tool calling is supported, but zero measured agentic benchmarks (no TB/tau/GDPval/Claw-Eval row anywhere) — neutral 50, no invented score.
- **Reasoning: 45/100.** GPQA Diamond 35% sits far below the documented mid band (GPQA 60–80 → 55–65); MMLU-Pro 60% and GSM8K 84% keep it from the floor, but ARC-AGI 12% confirms entry-tier reasoning.
- **Context window: 70/100.** 200K maps exactly to the documented anchor (200K = 70); 8K max-output cap at launch is the caveat.
- **Multimodal: 63/100.** Image input added 2025-02-25 (the +image-in band is 60–70); text-only out and no vision-benchmark row hold it mid-band at 63.
- **Coding: 45/100.** SWE-bench Verified 22% and LiveCodeBench 28% are far under the mid band (LiveCode ~80 → 65–75); HumanEval+ 74% is classical generation only — 45.
- **Cost efficiency: 90/100.** $0.80/$4.00 sits just above the ~$0.60/$2.20 ≈ 92 anchor with a heavier output leg — cheap for an Anthropic model.
- **Overall Score: 55/100.** (50 + 45 + 70 + 63 + 45) / 5 = 54.6 → 55 — best-fit as a budget legacy Anthropic endpoint for lightweight high-volume tasks; prefer Haiku 4.5 for anything demanding.

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-03
- Method: public internet research (Anthropic Haiku model page, Simon Willison launch write-up, Serenities AI benchmark comparison sets, pricepertoken/Anthropic pricing history); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
