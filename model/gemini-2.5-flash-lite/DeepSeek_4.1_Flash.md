# Gemini 2.5 Flash-Lite — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind / Gemini 2.5 Flash-Lite (`gemini-2.5-flash-lite`)
- Date: 2026-10-01 (UTC) — refreshed second pass (previous Signature 2026-09-18)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash-Lite (no "Free"-tier wording; free AI Studio quota exists)
- **Short description:** The lightweight, ultra-low-latency tier of the Gemini 2.5 family, built for cost efficiency and volume rather than reasoning depth. Superseded by Gemini 3.1 and 3.5 Flash-Lite.
- **Provider / access:** Google — Gemini API and Google AI Studio. Proprietary, closed, no open weights.
- **Release / knowledge:** Catalogue release date 2025-07-22 (BenchmarkList); GA 2025-09-25. Knowledge cutoff not disclosed.
- **IDs:** `gemini-2.5-flash-lite`. No OpenCode Zen Free ID.
- **Context window:** 1,000,000 tokens (tracker, via OpenRouter); max output not reproduced.
- **Modalities:** text, image, audio, video and file input; text output; tool calls; reasoning yes (lightweight thinking).
- **Pricing (as of 2026-10-01):** $0.10 / 1M in and $0.40 / 1M out — the cheapest paid tier tracked in this scan. Free AI Studio quota available.
- **Architecture:** proprietary, closed; parameter count and architecture undisclosed.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench Telecom (τ²-bench): **19.0%** (rank 262 of 332); Tau3-Banking-tier agentic index sits at the 37th percentile (BenchmarkList)
- Berkeley Function-Calling Leaderboard: **36.9%**; GDPval-AA: **321 Elo**
- Terminal-Bench Hard: **4.5%** (rank 207 of 326)
- GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **62.5%**; HLE: **6.8%**; MMLU-Pro: **75.9%**; SciCode: **19.3%**
- BenchmarkList ECI: **107.66 / 100** (rank 169 of 354); Artificial Analysis Intelligence Index: **11.41**
- AIME 2024/2025: **53.3%**; LCR / MLCR / CritPt: **no verified public score found**
- AA-LCR (long-context reasoning): **56.3%** (rank 161 of 409) — the standout long-context figure

Coding:

- LiveCodeBench: **59.3%**; SciCode: **19.3%**
- SWE-bench Verified / Pro / Vibe Code Bench / DeepSWE: **no verified public score found**

Long context:

- AA-LCR **56.3%** at long context; no MRCR/RULER/GraphWalks recall value found.

### Normalized scores (1–100)

- **Tool use: 20/100.** τ²-bench 19.0% and a 37th-percentile agentic placement mark it as effectively unusable as an autonomous tool-using agent; the only upside is that function calling exists.
- **Reasoning: 45/100.** GPQA Diamond 62.5% and MMLU-Pro 75.9% are acceptable for a lite tier, but HLE 6.8% and AA Index 11.41 show shallow frontier reasoning.
- **Context window: 95/100.** A 1M-token window on a $0.10/1M-input model is the standout spec — the cheapest way to push a million tokens found in this scan; no recall evidence keeps it below maximum.
- **Multimodal: 80/100.** Text, image, audio, video and file input with text output covers nearly every ingestion path; no media generation and weaker vision grounding than the full Flash tier.
- **Coding: 45/100.** LiveCodeBench 59.3% is fair, but SciCode 19.3% and the absence of any SWE-bench number rule it out for repository-level work.
- **Cost efficiency: 95/100.** $0.10/$0.40 per 1M with a free AI Studio tier is at the very bottom of the paid market; only an outright $0 model scores higher.
- **Overall Score: 57/100.** Mean of the five quality dims (20+45+95+80+45)/5 = 57.0 → 57. Best fit: high-volume classification, extraction, routing and cheap long-context ingestion — not agents or coding.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-01
- Method: public internet research (BenchmarkList model page + per-eval results, Epoch AI data and OpenRouter specs via Model Beat, Google's October 2025 production-readiness post); second-pass refresh of the 2026-09-18 report. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
