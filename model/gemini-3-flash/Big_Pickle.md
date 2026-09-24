# Gemini 3 Flash — findings by Big Pickle

- Source: Google/Gemini 3 Flash (`gemini-3-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** Google's Flash-tier gemini, combining Gemini 3 Pro-grade reasoning with Flash latency/cost; pitched at agentic coding and high-frequency interactive work. Distinct entry from the later `gemini-3.1-flash` (Dec 2025 vs. later refresh).
- **Provider / access:** Google AI Studio / Gemini Developer API (`gemini-3-flash`, also `gemini-3-flash-preview`); on OpenCode Zen `opencode/gemini-3-flash` (Chat Completions-style endpoint).
- **Release / knowledge:** 2025-12-17 (global rollout); evals card Dec-2025.
- **IDs:** `google/gemini-3-flash`, `opencode/gemini-3-flash`
- **Context window:** 1,000,000 tokens total (self-reported; Artificial Analysis lists 1000k). Max output not independently verified — default streaming caps vary by host.
- **Modalities:** text + image + audio input; text output; reasoning modes (Thinking on/off); tool calling (agent harnesses); no verified audio/video output.
- **Pricing (as of 2026-09-24):** $0.50 / $3.00 per 1M input/output tokens (audio input $1/1M), paid.
- **Architecture:** proprietary; parameters not disclosed (Flash-class, MoE unconfirmed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Vals.ai): **53.9%** (BenchLM, Vals harness; Google's Terminal-Bench 2.0 submission pending at Dec-2025 card)
- Tau2-Bench (τ²-bench): **43.3%** (BenchLM)
- Claw-Eval: **49.2%** (BenchLM)
- GDPval-AA: no verified public score found
- Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (Google self-reported) / **87.9%** (Vals.ai, BenchLM)
- HLE: **33.7%** (Google, tool-free) / **15.0%** (AA harness, BenchLM)
- AA-LCR: **53.0%** (BenchLM)
- CritPt: **1.4%** (BenchLM) — weak physics-reasoning flavor
- Artificial Analysis Intelligence Index: **27.9%** (BenchLM) / **39 (estimated, Thinking mode)** (Artificial Analysis comparison page)
- AA-Omniscience Accuracy / Hallucination Rate: **45.8% / 92.4%** (BenchLM)

Coding:

- SWE-bench Verified: **78%** (Google self-reported) / **75.0%** (Vals.ai, BenchLM)
- LiveCodeBench: **85.6%** (Vals.ai, BenchLM)
- AA-SciCode: **49.9%** (BenchLM)
- Vibe Code Bench: **20.2%** (BenchLM)
- MMLU-Pro: **88.6%** (Vals.ai, BenchLM) — proxy for instruction-following

Long context:

- No verified long-context retrieval (MRCR/RULER/GraphWalks) reported for 3 Flash at 1M (Google's card notes no MRCR v2 numbers shared for it). Context size 1M self-reported.

### Normalized scores (1–100)

- **Tool use: 62/100.** Terminal-Bench 2.1 53.9% and τ²-bench 43.3% sit exactly in the mid band (TB 45–60%, Tau 10–25%); Claw-Eval 49.2% is respectable but no GDPval verified. Capped by missing frontier agentic numbers.
- **Reasoning: 80/100.** GPQA Diamond 90.4% (self-reported; 87.9% Vals) and HLE 33.7% (tool-free) are near-frontier, but AA Intelligence Index ~28–39, LCR 53% and CritPt 1.4% pull it back from the 90+ tier.
- **Context window: 98/100.** Full 1M window (≥1M tier); not a perfect 100 because no independently verified ≥98% retrieval at 512K+ was found.
- **Multimodal: 70/100.** Image + audio input with text output and reasoning/image understanding (MMMU Pro 81.2% self-reported); no non-text output.
- **Coding: 85/100.** SWE-bench Verified 78%, LiveCodeBench 85.6%, SciCode 49.9% — comfortably above the mid band (LiveCode 80% + SciCode ~50%); Vibe Code Bench 20.2% caps it below the DeepSWE-74% frontier tier.
- **Cost efficiency: 93/100.** $0.50/$3.00 per 1M — cheap for a frontier-quality Flash (methodology: ~$0.60/$2.20 ≈ 92); not free.
- **Overall Score: 79/100.** Mean of the five quality dims (62+80+98+70+85)/5 = 79.0. Best fit: strong cheap agentic coder for high-frequency/high-volume workflows.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-24
- Method: public internet research (Google blog, Artificial Analysis, BenchLM, Vals.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.