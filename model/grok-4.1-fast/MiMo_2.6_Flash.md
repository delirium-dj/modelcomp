# Grok 4.1 Fast — findings by Mimo v2.6 Flash

- Source: xAI (SpaceXAI)/grok-4-1-fast (alias `grok-4-1-fast-reasoning`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast (reasoning-capable fast tier of the Grok 4 line; not to be confused with the older `grok-4-fast`)
- **Short description:** xAI's high-throughput multimodal model purpose-built for agentic tool calling at low cost, with a 2M window; top use case is high-volume agent/coding pipelines. Not a variant of another tracked entry (`grok-4-fast` is a separate older model).
- **Provider / access:** xAI API (`grok-4-1-fast` / `grok-4-1-fast-reasoning`, regions us-east-1 + eu-west-1), OpenRouter, xAI console; OpenAI-compatible Chat Completions with function calling + structured outputs.
- **Release / knowledge:** 2025-11 (OpenRouter listing dated 2025-11-19); knowledge cutoff not published on the model page.
- **IDs:** `grok-4-1-fast` (xAI API), `grok-4-1-fast-reasoning` (canonical docs name), OpenRouter `x-ai/grok-4.1-fast`.
- **Context window:** 2,000,000 tokens (xAI docs "Context window 2,000,000"; CloudPrice 2.0M / 30K max output; BenchLM 2M). Higher-context pricing applies above 128K (xAI docs note).
- **Modalities:** text + image in; text out; reasoning yes (thinking modes); function calling + structured outputs yes; live search add-on available.
- **Pricing (as of 2026-10-03):** $0.20 in / $0.50 out per 1M, cached input $0.05 (xAI official docs); live search $25/1K sources. Paid — no $0 tier verified today (an earlier free-window promo is not confirmed current).
- **Architecture:** proprietary; no parameter count published.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **93.3%** (BenchLM `grok-4-1-fast-reasoning` page, 2026-09-28)
- Terminal-Bench 2.1 / Tau3 / GDPval-AA: no verified public score found (xAI has not published TB/GDPval for this tier)
- Claw-Eval / MCP-Atlas: no verified public score found
- Positioning: xAI docs describe it as "optimized specifically for high-performance agentic tool calling" (vendor claim, not a score)

Reasoning / knowledge:

- GPQA Diamond: **72.0%** (Serenities AI comparison set) / **AA-GPQA Diamond 85.3%** (BenchLM, AA harness) — both listed, harnesses differ
- AA-HLE: **19.3%** (BenchLM)
- MMLU-Pro: **87.0%** (Serenities AI)
- ARC-AGI: **48.0%** (Serenities AI)
- AA-LCR: **74.0%**; CritPt: **2.9%** (BenchLM)
- Artificial Analysis Intelligence Index: **20.4** (BenchLM)
- Chatbot Arena ELO: **1482** (Serenities AI)

Coding:

- SWE-bench Verified: **60.0%** (Serenities AI)
- LiveCodeBench: **62.0%** (Serenities AI)
- HumanEval+: **88.0%** (Serenities AI)
- Vibe Code Bench: **1.20%** (BenchLM)
- SciCode / DeepSWE: no verified public score found

Long context:

- 2M window declared; no MRCR / RULER figure published (no long-context retrieval reported)

Multimodal:

- AA-MMMU-Pro: **63.3%** (BenchLM)

### Normalized scores (1–100)

- **Tool use: 72/100.** τ²-bench 93.3% is near the top of the agentic band and the model is purpose-built for tool calling, but the complete absence of TB2.1/Tau3/GDPval/Claw-Eval rows caps it at 72.
- **Reasoning: 64/100.** MMLU-Pro 87% and AA-GPQA 85.3% are strong, but AA-HLE 19.3% and AA Index 20.4 both sit in the documented mid band (Index 20–35 → 55–65) with CritPt 2.9% — mid-pack reasoning at 64.
- **Context window: 95/100.** 2M tokens is in the ≥1M tier (95–100); no ≥98%-retrieval-at-512K evidence to award 100, and pricing above 128K is a caveat, not a score cut.
- **Multimodal: 65/100.** Text + image in, text out (the +image-in band is 60–70); AA-MMMU-Pro 63.3% places it mid-band; no video/audio in, no non-text out.
- **Coding: 65/100.** SWE-bench Verified 60% and LiveCodeBench 62 are solid mid, but Vibe Code Bench 1.20% mirrors the documented "Vibe <10 → 65–75" penalty band and SWE-Pro/DeepSWE are unpublished, holding it at 65.
- **Cost efficiency: 96/100.** $0.20/$0.50 with $0.05 cached input sits just above the ~$0.10/$0.20 ≈ 97–99 anchor — excellent value for a 2M-context frontier-lab model.
- **Overall Score: 72/100.** (72 + 64 + 95 + 65 + 65) / 5 = 72.2 → 72 — best-fit as a cheap, huge-context agentic executor when frontier reasoning depth isn't required.

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-03
- Method: public internet research (xAI official docs, BenchLM model page 2026-09-28, Serenities AI comparison sets, CloudPrice/OpenRouter listings); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
