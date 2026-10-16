# Gemini 3.1 Pro — findings by Cat Jam

- Source: Google / Gemini 3.1 Pro (`opencode/gemini-3.1-pro`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro (Preview)
- **Short description:** Google's advanced Pro-tier reasoning model (Feb 2026 preview): 1M context, native multimodal (text/image/video/audio/PDF), thinking, and a strong coding/agentic benchmark profile.
- **Provider / access:** Gemini API / Google AI Studio (`gemini-3.1-pro-preview`, `...-customtools`), Vertex AI, Google Cloud. Preview-stage, paid only (no free tier).
- **Release / knowledge:** Released 2026-02-19 (public preview); knowledge cutoff Jan 2025 (preview).
- **IDs:** `gemini-3.1-pro-preview` (Google), `gemini/gemini-3.1-pro-preview` (LiteLLM)
- **Context window:** 1,048,576 tokens; max output 65,536. Verified via Google AI docs/model card/LiteLLM.
- **Modalities:** Text, image, video, audio, PDF in; text out. Thinking (low/medium/high). Function calling, code execution, search/Maps grounding, structured output, URL context.
- **Pricing (as of 2026-10-16):** Standard $2.00/$12.00 per 1M input/output (prompts ≤200K); >200K $4.00/$18.00. Cached $0.20/$0.40. Batch 50%. No free tier.
- **Architecture:** Proprietary multimodal transformer. No open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **68.5%** (vendor table, Terminus-2 harness)
- Terminal-Bench 2.1 (Vals): **70.8%**
- τ²-bench Telecom: **95.6%** (Vals)
- GDPval-AA v2: **904** Elo (AA) / 14.6% AA (agentic) — weak knowledge-work agentic score vs later flagships
- DeepSearchQA: **69.7%** (benchlm)
- AA-Agentic Index: **10.3%** (AA, low)
- MCP/ClawProBench: no verified public score found (Claw-Eval 57.8% reported by benchlm)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **46.5** (Lounge/AA)
- HLE (no tools): **44.4%** (vendor); with search+code 51.4%; w/ tools 56.9% (benchgap est)
- GPQA Diamond: **94.3%** (vendor / AA)
- ARC-AGI-2: **77.1%** (vendor, ARC Prize Verified)
- AA-LCR v1.1: **82.0%**
- CritPt: **17.7%** (AA)
- Omniscience Accuracy / Hallucination: **54.9% / 50.9%** (AA)
- GPQA Diamond (Vals): 95.5%

Coding:

- SWE-bench Verified: **80.6%** (vendor single attempt)
- SWE-bench Pro (Public): **54.2%** (vendor)
- LiveCodeBench (Vals): **88.5%**
- AA-SciCode: **58.7%**
- SWE-bench (Vals): 78.8%
- LiveCodeBench Pro: **82.9%**
- Code Arena? Vibe Code Bench 32.0 (Vals)

Long context:

- 1,048,576-token context, 65,536 output. MRCR/RULER independent score not published in sampled data.

### Normalized scores (1–100)

- **Tool use: 88/100.** TB 2.0/2.1 68.5–84.2, τ² telecom 95.6, DeepSearchQA 69.7; GDPval-AA weak (904 Elo) caps.
- **Reasoning: 89/100.** GPQA 94.3, HLE 44.4–51.4+, LCR 82.0, ARC-AGI-2 77.1, AA Index 46.5; CritPt 17.7 and Omniscience 54.9/50.9 cap.
- **Context window: 92/100.** 1M with thinking. No published MRCR retrieval score caps top-end.
- **Multimodal: 88/100.** Text/image/video/audio/PDF in; text out. HLE text+MM 44.4; strong multimodal inputs but no output beyond text.
- **Coding: 90/100.** SWE-bench Verified 80.6, Pro 54.2, TB 68.5/84, LiveCodeBench Vals 88.5, AA-SciCode 58.7.
- **Cost efficiency: 85/100.** $2/$12 per 1M (≤200K) with long-context surcharge; cached 90% off; batch 50%. Competitive Pro-tier value without free tier.
- **Overall Score: 89/100.** Mean of (88 + 89 + 92 + 88 + 90) / 5 = 89.4. SOTA-at-release reasoning/math leader (Feb–Mar 2026 era); superseded by newer Flash/Pro generations on cost/perf.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (Google DeepMind model card/table, Google AI docs, Artificial Analysis, benchgap, benchlm, lounge.ai, pricing pages); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
