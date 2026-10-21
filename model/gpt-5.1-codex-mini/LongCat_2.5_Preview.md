# GPT-5.1 Codex Mini — findings by LongCat 2.5 Preview

- Source: OpenAI/gpt-5.1-codex-mini
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex Mini
- **Short description:** OpenAI's smallest Codex tier (Nov 2025) — a cheaper, less-capable GPT-5.1-Codex for agentic coding in Codex-like environments, Responses API only. Removed from Codex surfaces April 2026 and deprecated on OpenCode Zen July 2026.
- **Provider / access:** OpenAI Responses API (`v1/responses` only — no Chat Completions); also hosted on Azure OpenAI / Microsoft Foundry and OpenCode Zen. `opencode/gpt-5.1-codex-mini`.
- **Release / knowledge:** Launched Nov 2025 (Azure version 2025-11-13); knowledge cutoff Sep 30, 2024.
- **IDs:** `gpt-5.1-codex-mini` (OpenAI/Azure); `opencode/gpt-5.1-codex-mini` (Zen). No Free ID.
- **Context window:** 400,000 total; 128,000 max output.
- **Modalities:** text, image in; text out. Reasoning tokens, function calling, structured output, web search (Responses API).
- **Pricing (as of 2026-10-21):** $0.25 in / $2.00 out per 1M, $0.025 cached read (native and Zen identical).
- **Architecture:** proprietary OpenAI reasoning model (Codex-mini variant); no weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **46.1%** (third-party tracker)
- Website Arena (Design Arena, via OpenRouter): **Elo 1123** (78th/108); Design Arena: **Elo 1087**
- GDPval-AA / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **52.0%** (third-party)
- MMLU-Pro: **72.0%**; MATH: **78.0%**; GSM8K: **92.0%**; ARC-AGI: **35.0%** (third-party)
- Chatbot Arena ELO: **1310** (mid-tier)
- HLE / CritPt / AA Intelligence Index: no verified public score found

Coding:

- SWE-bench Verified: **55.0%** (third-party; 25th/67)
- LiveCodeBench: **65.0%** (12th/66); HumanEval+: **88.0%**
- SWE-bench Pro: **49.0%**; Vibe Code Bench: **22.2%**

Multimodal:

- Accepts text + image input; no MMMU/CharXiv figure published.

Long context:

- 400K window; no RULER/MRCR retrieval figure reported.

### Normalized scores (1–100)

- **Tool use: 55/100.** Terminal-Bench 2.0 46.1% is at the bottom of the mid band (TB2.1 45–60 → 50–70), and the low Website/Design Arena Elo and the absence of GDPval-AA/Claw-Eval keep it near the mid anchor.
- **Reasoning: 52/100.** GPQA Diamond 52.0% is below the 60–80 mid band, ARC-AGI 35.0% is weak, and MMLU-Pro 72.0%/MATH 78.0% only partly compensate; no AA Intelligence Index is published.
- **Context window: 78/100.** 400,000-token window sits in the upper half of the 200K–500K band (65–84); no measured retrieval accuracy at long context.
- **Multimodal: 64/100.** Text + image input only (no video/PDF/audio), squarely in the methodology's +image-in band (60–70); text-only output caps it.
- **Coding: 58/100.** SWE-bench Verified 55.0%, LiveCodeBench 65.0% and HumanEval+ 88.0% are modest, and SWE-bench Pro 49.0% with Vibe Code Bench 22.2% keeps it well below the frontier coding anchors.
- **Cost efficiency: 90/100.** $0.25 in / $2.00 out per 1M with a $0.025 cached read — between the methodology's ~$0.10/$0.20 (97–99) and ~$0.60/$2.20 (~92) anchors.
- **Overall Score: 61/100.** Half-up mean of Tool use (55), Reasoning (52), Context window (78), Multimodal (64), Coding (58) = 307/5 = 61.4 → 61. Best fit: a cheap, fast, long-context coding assistant for lightweight agent tasks; not a frontier coder and now deprecated.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-21
- Method: public internet research (OpenAI developer model docs, Microsoft Foundry / Azure catalog, Serenities AI benchmark pages + head-to-head, LLM Stats, OpenAI GPT-5.1-Codex-Max announcement for context); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
