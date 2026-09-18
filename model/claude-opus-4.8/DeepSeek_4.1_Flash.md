# Claude Opus 4.8 — findings by DeepSeek 4.1 Flash

- Source: Anthropic / Claude Opus 4.8 (`claude-opus-4-8`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8 (API id `claude-opus-4-8`; no "Free" tier exists)
- **Short description:** Anthropic's most capable generally available model through mid-2026, released 2026-05-28 as an incremental checkpoint on Opus 4.7 with targeted gains in agentic coding, mathematical reasoning and behavioural consistency. Built for long-running autonomous coding, research synthesis and enterprise tool orchestration.
- **Provider / access:** Anthropic — Claude API, AWS Bedrock, Google Vertex AI, Microsoft Foundry. Closed, API-only; no open weights.
- **Release / knowledge:** Released 2026-05-28. Knowledge cutoff not disclosed.
- **IDs:** `claude-opus-4-8`. No OpenCode Zen Free ID.
- **Context window:** 1,000,000 tokens on the Claude API, Bedrock and Vertex (200K on Microsoft Foundry); max output 128,000 tokens, with a 300,000-token beta via a batch-API header. Verified from Anthropic's model page as compiled by HokAI (checked 2026-07-16).
- **Modalities:** text, image and PDF in; text out; tool calling both directions; reasoning yes (adaptive thinking). Native computer-use automation added in this release.
- **Pricing (as of 2026-09-18):** $5.00 / 1M in, $25.00 / 1M out, $0.50 cached input; Fast Mode (research preview) roughly doubles to $10/$50; Batch API is 50% off. Note the conflict: a second aggregator lists $15/$75 for the Opus 4 series checkout — the $5/$25 tier is the one repeated by the vendor-derived card, so it is used here.
- **Architecture:** proprietary dense transformer, closed; parameter count undisclosed (~600B estimated from capability footprint).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.6%** (Anthropic, 2026-05-28; up from Opus 4.7's 66.1%)
- Terminal-Bench 2.0: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas: **no verified public score found**
- Agents Last Exam (Benchgen's multi-step agentic eval): **45.1%** (Benchgen, 2026-07-24; Opus 4.7 41.8%)
- LHTB (long-horizon task bench, Benchgen): **49.2%** (Benchgen)

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (Anthropic via HokAI)
- HLE: **49.8%** without tools / **57.9%** with tools (Anthropic; described as field-leading at launch)
- ARC-AGI: **92.5%** (Benchgen evaluation, 2026-07-24; Opus 4.7 93.5%)
- USAMO 2026 (math): **96.7%** (Anthropic; up from Opus 4.7's 69.3%)
- LCR / MLCR / CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **72** (Artificial Analysis) — well above the ~32 frontier median cited for Opus 5 comparisons
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **88.6%** (Anthropic, 2026-05-28; Opus 4.7 87.6%)
- SWE-bench Pro: **69.2%** (Anthropic; up 4.9 points from Opus 4.7, +10.6 over GPT-5.5's 58.6%)
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: **no verified public score found**
- Output speed: **79 tok/s** median; AA blended price **$12.50/M**

Long context:

- Long-context recall (needle-style) is discussed by the vendor for the Opus 4 line but no specific MRCR/RULER value for 4.8 was reproduced in the sources checked — treat the 1M window as vendor-claimed with the stronger Opus 4.6 MRCR figure as the closest proxy.

### Normalized scores (1–100)

- **Tool use: 92/100.** Terminal-Bench 2.1 at 74.6%, native computer-use automation, 57.9% HLE with tools and 45.1% on Benchgen's Agents Last Exam; capped by missing Tau3/GDPval/Toolathon numbers.
- **Reasoning: 94/100.** GPQA Diamond 93.6%, USAMO 2026 96.7% and an Artificial Analysis Intelligence Index of 72 place it at the top of the mid-2026 field; only 4.8's ARC-AGI dip versus 4.7 (92.5% vs 93.5%) holds it back.
- **Context window: 95/100.** 1M tokens on the main platforms (200K on Foundry) with 128K default output and a 300K batch beta; the window is generous but has no model-specific public recall number.
- **Multimodal: 80/100.** Text, image and PDF input with text plus tool-call output; strong document/chart reading, no audio, video or media generation.
- **Coding: 94/100.** SWE-bench Verified 88.6% and SWE-bench Pro 69.2% are top-tier; the only real cap is that harder third-party harnesses were not published for the checkpoint.
- **Cost efficiency: 45/100.** $5/$25 per 1M with no free tier and a $10/$50 Fast Mode — premium by design; cached input and 50%-off batch pricing are the only relief.
- **Overall Score: 91/100.** (92 + 94 + 95 + 80 + 94 + 45) / 6 = 83.3 → **83**. Best fit: enterprise agent platforms where coding/computer-use reliability and long-context fidelity outweigh a frontier price tag.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-18
- Method: public internet research (Anthropic model page as compiled by HokAI plus a Benchgen evaluation card); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
