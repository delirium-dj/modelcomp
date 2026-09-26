# Kimi K2.7 Code — findings by GLM 5.3

- Source: Moonshot AI (`kimi-k2.7-code`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Moonshot AI's open-weights coding/agent model (K2.7 generation, "Code" variant), positioned between K2.6 and the flagship K3. Top use case: tool-calling coding agents with MCP workflows.
- **Provider / access:** OpenCode Zen `opencode/kimi-k2.7-code` (OpenAI-compatible Chat Completions, `https://opencode.ai/zen/v1/chat/completions`); open weights (BenchLM lists Source Type "Open Weight").
- **Release / knowledge:** 2026 (current Zen catalog); exact release date not re-verified. Knowledge cutoff not stated publicly.
- **IDs:** `opencode/kimi-k2.7-code`; no Free ID on Zen (paid tier).
- **Context window:** 256K (BenchLM model page).
- **Modalities:** text in / text out (no image/audio/video rows on BenchLM; Design Arena Website participation is a website-generation eval, not image input); reasoning yes; tool calls yes (MCP-oriented); JSON mode not separately verified.
- **Pricing (as of 2026-09-25):** $0.95 in / $4.00 out per 1M, cached read $0.19 (OpenCode Zen pricing table).
- **Architecture:** open weights; parameters undisclosed in the sources found.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Vals): **67.0%** (BenchLM)
- Tau2-Bench: **90.1%** (BenchLM); Tau3-Banking: **no verified public score found**
- GDPval-AA: **1114 Elo** (BenchLM; normalized field 26.3%)
- MCP Atlas: **76%** (BenchLM); MCP Mark Verified **81.1%** (BenchLM)
- Kimi Claw 24/7: **46.9%** (BenchLM); AA Agentic Index **22.5%** (BenchLM)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **89.6%** (BenchLM, AA-GPQA)
- HLE: **35.0%** (BenchLM, AA-HLE)
- LCR / MLCR: AA-LCR **79.3%** (BenchLM); MLCR no verified public score found
- CritPt: **10.0%** (BenchLM)
- Artificial Analysis Intelligence Index: **25.8** (BenchLM)
- Omniscience: Index **-10.2**, Accuracy **39.6%**, hallucination-rate field **82.4%** (BenchLM; label ambiguous vs AA's "Non-Hallucination Rate" — flagged, not double-counted)
- AA-IFBench: **63.1%** (BenchLM)

Coding:

- SWE-bench (Vals): **78.2%** (BenchLM); SWE-bench Verified official: **no verified public score found**
- LiveCodeBench (Vals): **82.1%** (BenchLM)
- Kimi Code Bench v2: **62.0%** (BenchLM)
- ProgramBench: **53.6%** (BenchLM); CursorBench 3.2 **49.7%** (BenchLM)
- AA-SciCode: **47.8%** (BenchLM); AA Coding Index **60.8%** (BenchLM)
- MLS-Bench Lite **35.1%**, OpenHarmony Bench **52.1%** (BenchLM)
- Vibe Code Bench: **no verified public score found**

Long context:

- AA-LCR 79.3% (BenchLM) at the 256K window; no MRCR/RULER/GraphWalks per-length data — no long-context retrieval score found.

### Normalized scores (1–100)

- **Tool use: 78/100.** τ²-bench 90.1%, MCP Atlas 76%, MCP Mark Verified 81.1% and TB 2.1 67% are strong tool-calling credentials; GDPval-AA 1114 is mid-band and AA Agentic Index 22.5% plus Kimi Claw 46.9% cap it below frontier.
- **Reasoning: 72/100.** GPQA Diamond 89.6% and HLE 35.0% are near-frontier, AA-LCR 79.3% solid; CritPt 10.0%, an AA Index of 25.8 and a negative Omniscience Index (-10.2, weak knowledge reliability) hold it down.
- **Context window: 72/100.** 256K verified (200K–500K tier; 200K anchor = 70), no retrieval-at-length data.
- **Multimodal: 15/100.** Text in/out only — no verified image, audio, or video input and no non-text output (per template: 15 if text-only).
- **Coding: 74/100.** SWE-bench (Vals) 78.2% and LiveCodeBench (Vals) 82.1% are competitive open-weights results, but Kimi Code Bench 62%, CursorBench 3.2 49.7%, AA Coding Index 60.8% and AA-SciCode 47.8% sit well below frontier agentic-coding levels.
- **Cost efficiency: 88/100.** $0.95/$4.00 per 1M with $0.19 cached reads sits at the ~$1.25/$4.25 (~88) anchor with slightly cheaper input.
- **Overall Score: 62/100.** Half-up mean of the five quality dims (78+72+72+15+74)/5 = 62.2 → 62 — a strong value pick for text-only MCP-driven coding agents; skip it for multimodal work.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-25
- Method: public internet research (BenchLM, OpenCode Zen docs/pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
