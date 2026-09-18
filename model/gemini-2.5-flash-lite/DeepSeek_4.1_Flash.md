# Gemini 2.5 Flash-Lite — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind / Gemini 2.5 Flash-Lite (`gemini-2.5-flash-lite`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash-Lite (no "Free"-tier wording; free AI Studio quota exists)
- **Short description:** The lightweight, ultra-low-latency tier of the Gemini 2.5 family, built for cost efficiency and volume rather than reasoning depth. Google declared it ready for scaled production use in October 2025; it is now superseded by Gemini 3.1 and 3.5 Flash-Lite.
- **Provider / access:** Google — Gemini API and Google AI Studio. Proprietary, closed, no open weights.
- **Release / knowledge:** Released 2025-09-25 (GA). Knowledge cutoff not disclosed here.
- **IDs:** `gemini-2.5-flash-lite`. No OpenCode Zen Free ID.
- **Context window:** 1,000,000 tokens (tracker, via OpenRouter). Max output not reproduced in the sources checked.
- **Modalities:** text, image, audio, video and file input; text output; tool calls; reasoning yes (lightweight thinking).
- **Pricing (as of 2026-09-18):** $0.10 / 1M in and $0.40 / 1M out — the cheapest paid tier tracked in this scan. Free AI Studio quota available.
- **Architecture:** proprietary, closed; parameter count and architecture undisclosed.

### Raw benchmarks found

Agent / tool use:

- Tau3-Banking / Tau2-Bench (τ²-bench): **18.4%** (Epoch AI via Model Beat)
- Terminal-Bench: **no verified public score found**
- APEX multi-step agentic: **no verified public score found**
- GDPval-AA / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **62.5%** (Epoch AI via Model Beat)
- HLE: **6.8%** (up from 6.4% in an August tracker revision)
- MMLU-Pro: **75.9%**; WeirdML: **35.2%** (Epoch AI via Model Beat)
- AIME 2024/2025: **53.3%** (Epoch AI via Model Beat)
- LCR / MLCR / CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: no composite published in the sources checked; the tracker places it at the 3rd percentile of models it follows (agentic index 0th percentile)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- LiveCodeBench: **59.3%** (Epoch AI via Model Beat)
- SciCode: **19.3%** (Epoch AI via Model Beat)
- SWE-bench Verified / SWE-bench Pro / Vibe Code Bench / DeepSWE / Coding Index: **no verified public score found**

Long context:

- no MRCR/RULER/GraphWalks recall value found; the 1M window is documented but untested at depth in the sources checked.

### Normalized scores (1–100)

- **Tool use: 20/100.** τ²-bench at 18.4% (and a 0th-percentile agentic index) marks it as effectively unusable as an autonomous tool-using agent; the only upside is that function calling exists.
- **Reasoning: 45/100.** GPQA Diamond 62.5% and MMLU-Pro 75.9% are acceptable for a lite tier, but HLE 6.8% and AIME 53.3% show shallow frontier reasoning.
- **Context window: 95/100.** A 1M-token window on a $0.10/1M-input model is the standout spec — the cheapest way to push a million tokens found in this scan; no recall evidence keeps it below maximum.
- **Multimodal: 80/100.** Text, image, audio, video and file input with text output covers nearly every ingestion path; no media generation and weaker vision grounding than the full Flash tier.
- **Coding: 45/100.** LiveCodeBench 59.3% is fair, but SciCode 19.3% and the absence of any SWE-bench number rule it out for repository-level work.
- **Cost efficiency: 95/100.** $0.10/$0.40 per 1M with a free AI Studio tier is at the very bottom of the paid market; only an outright $0 model scores higher.
- **Overall Score: 57/100.** (20 + 45 + 95 + 80 + 45 + 95) / 6 = 63.3 → **63**. Best fit: high-volume classification, extraction, routing and cheap long-context ingestion — not agents or coding.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-18
- Method: public internet research (Epoch AI benchmark data and OpenRouter specs via Model Beat, plus Google's October 2025 production-readiness post); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.