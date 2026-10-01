# Claude Opus 4.8 — findings by DeepSeek 4.1 Flash

- Source: Anthropic / Claude Opus 4.8 (`anthropic/claude-opus-4.8`)
- Date: 2026-10-01 (UTC) — refreshed second pass (previous Signature 2026-09-18)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8 (API id `claude-opus-4-8`; no "Free" tier exists)
- **Short description:** Anthropic's most capable generally available model through mid-2026, released 2026-05-28 as an incremental checkpoint on Opus 4.7 with targeted gains in agentic coding, mathematical reasoning and behavioural consistency. Built for long-running autonomous coding, research synthesis and enterprise tool orchestration.
- **Provider / access:** Anthropic — Claude API, AWS Bedrock, Google Vertex AI, Microsoft Foundry. Closed, API-only; no open weights.
- **Release / knowledge:** Released 2026-05-28. Knowledge cutoff not disclosed.
- **IDs:** `claude-opus-4-8`. No OpenCode Zen Free ID.
- **Context window:** 1,000,000 tokens (200K on Microsoft Foundry); max output 128,000, with a 300,000-token beta via a Batch-API header.
- **Modalities:** text, image and PDF in; text out; tool calling both directions; reasoning yes (adaptive thinking); native computer-use automation added in this release.
- **Pricing (as of 2026-10-01):** $5.00 / 1M in, $25.00 / 1M out, $0.50 cached input; Fast Mode (research preview) $10/$50; Batch 50% off.
- **Architecture:** proprietary dense transformer, closed; parameter count undisclosed (~600B estimated).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **86.9%** (rank 1 of 9; Gemini 3.8 Flash 89.4% leads the wider board) (BenchmarkList)
- Terminal-Bench Hard: **58.3%** (rank 3 of 326); Terminal-Bench 3.0: 21.1%; Terminal-Bench-Science 0.1: 10.5%
- Toolathlon: **79.9% Pass@1 / 88.0% Pass@3** (rank 2 of 37); APEX-Agents: **59.4%** (rank 2 of 44)
- OSWorld-Verified (computer use): **83.4%** (rank 1 of 5); WebArena-Verified: **71.2%**
- GDPval-AA: **1890 Elo**; Tau2-Bench Telecom: **94.4%**; Tau3-Banking: **34.2%**
- MCP Atlas: **83.6%**; AutomationBench: **69.4%**
- Agents Last Exam: **45.1%** (Benchgen, 2026-07-24); LHTB: **49.2%** (Benchgen)
- Tau3-Banking 34.2% is the checkpoint's weakest agentic row; Long-Horizon Terminal-Bench 0.49

Reasoning / knowledge:

- GPQA Diamond: **93.6%**; HLE: **49.8%** without tools / **57.9%** with tools
- ARC-AGI-1: **92.5%**; ARC-AGI-2: **72.1%**; ARC-AGI-3: **1.5%** (effort-dependent)
- USAMO 2026 (math): **96.7%**
- Artificial Analysis Intelligence Index: **72**; BenchmarkList ECI: **146.97 / 100** (rank 7 of 354)
- LCR / MLCR / CritPt: **no verified public score found**

Coding:

- SWE-bench Verified: **88.6%**; SWE-bench Pro: **69.2%**
- GBA Eval (Game Boy Advance in Rust/Wasm, 24h): **70.9%** overall; KernelBench CUDA: **37.3%**
- LiveCodeBench / SciCode / DeepSWE: **no verified public score found**
- Output speed: **79 tok/s** median; AA blended price **$12.50/M**

Long context:

- No model-specific MRCR/RULER value for 4.8 was reproduced; the Opus 4.6 MRCR v2 8-needle 76% at 1M is the closest proxy for the shared window.

### Normalized scores (1–100)

- **Tool use: 93/100.** Terminal-Bench 2.1 86.9% (rank 1 of 9), Toolathlon 79.9%/88.0%, OSWorld-Verified 83.4%, GDPval-AA 1890 Elo and 45.1% Agents Last Exam put it at the top of the agent field (raised from 92); capped by a weak Tau3-Banking 34.2%.
- **Reasoning: 94/100.** GPQA Diamond 93.6%, ARC-AGI-2 72.1%, USAMO 2026 96.7% and an AA Intelligence Index of 72 (ECI 146.97, #7/354) are frontier-grade; only the ARC-AGI-3 dip (1.5%) holds it back.
- **Context window: 95/100.** 1M tokens (200K on Foundry) with 128K default output and a 300K batch beta; no model-specific public recall number.
- **Multimodal: 80/100.** Text, image and PDF input with text + tool-call output; strong document/chart reading, no audio, video or media generation.
- **Coding: 94/100.** SWE-bench Verified 88.6% and SWE-bench Pro 69.2% (plus the 70.9% GBA Eval) are top-tier; capped by missing LiveCodeBench/DeepSWE for the checkpoint.
- **Cost efficiency: 45/100.** $5/$25 per 1M with no free tier and a $10/$50 Fast Mode — premium by design; cached input and 50%-off batch are the only relief.
- **Overall Score: 91/100.** Mean of the five quality dims (93+94+95+80+94)/5 = 91.2 → 91. Best fit: enterprise agent platforms where coding/computer-use reliability and long-context fidelity outweigh a frontier price tag.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-01
- Method: public internet research (BenchmarkList model page + per-eval results, Anthropic model page via HokAI, Benchgen evaluation card); second-pass refresh of the 2026-09-18 report. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
