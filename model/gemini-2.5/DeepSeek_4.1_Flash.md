# Gemini 2.5 — findings by DeepSeek 4.1 Flash

- Source: Google/Gemini 2.5 Pro (`google/gemini-2.5-pro`)
- Date: 2026-10-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 (served as `gemini-2.5-pro`)
- **Short description:** Google's March-2025 Gemini 2.5 family flagship — a native multimodal reasoning model with a 1M-token window and a thinking mode. It defined the 1M-context tier at launch; by late 2026 it is a capable but clearly prior-generation entry against Gemini 3.x/4.x.
- **Provider / access:** Google AI Studio / Gemini API (`gemini-2.5-pro`), Vertex AI, and OpenRouter `google/gemini-2.5-pro`. Chat Completions-compatible on gateways; supports streaming, tools, structured output, and thinking. Legacy access-limited on the Gemini API per Google docs.
- **Release / knowledge:** 2025-03-25 (public launch; stable/GA mid-2025). Knowledge cutoff January 2025 (estimated).
- **IDs:** `google/gemini-2.5-pro` (OpenRouter); Google Gemini API `gemini-2.5-pro`
- **Context window:** 1,048,576 (1M) input; 65,536 max output (Benchgen, LLM Stats, OpenRouter — all agree). Above 200K input the rate doubles.
- **Modalities:** Text, image, audio, and video in; text out. Native thinking/reasoning mode; tool calls; JSON mode.
- **Pricing (as of 2026-10-06):** $1.25 / $10.00 per 1M input/output up to 200K input; $2.50 / $15.00 above 200K (Google AI pricing). No Free ID.
- **Architecture:** Proprietary natively-multimodal transformer (Gemini family), parameters undisclosed; no open weights.

### Raw benchmarks found

> Mixed-vintage figures (2025 launch numbers plus later independent revisions) — harness and eval-version differences explain spread. BenchLM notes partial benchmark coverage (25 of 613 slots).

Agent / tool use:

- Tau3/Tau2-bench (τ²-bench): **54.1%** (Artificial Analysis via BenchLM)
- GDPval-AA: **616** (Artificial Analysis via BenchLM); AA Agentic Index **3.5%**
- AetherCode (agentic web tasks): **32.7%** (Benchgen)
- Terminal-Bench 2.1 / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found
- Arena Hard v2 (instruction following): **79.0%** (Benchgen); AA-IFBench **48.7%**

Reasoning / knowledge:

- GPQA Diamond: **83%** (Google DeepMind) / **84.4%** (AA-GPQA Diamond, via BenchLM)
- HLE: **18.8%** (Google) / **21.64%** (Benchgen) / **22.5%** (AA-HLE)
- AA-LCR (long-context reasoning): **69.0%** (Artificial Analysis via BenchLM)
- CritPt: **2.6%** (Artificial Analysis via BenchLM)
- Artificial Analysis Intelligence Index: **16.1%** (AA via BenchLM); BenchLM overall **49.47/100**, #94 of 882
- Omniscience Accuracy **39.1%** / Hallucination Rate **90.9%** (Artificial Analysis via BenchLM)

Coding:

- SWE-bench Verified: **63.8%** (Google launch blog) / **54.4%** (Vals AI)
- LiveCodeBench: **73.6%** (Benchgen)
- AA-SciCode: **46.3**; AA Coding Index: **33.3** (Artificial Analysis via BenchLM)
- Vibe Code Bench: **0.40%** (Vals AI v1.1) — weak
- BigCodeBench: **33.1%** (Benchgen)

Long context:

- 1M-token input window; AA-LCR **69.0%** is the only long-context retrieval signal found — solid but far from the 95%+ frontier band.

### Normalized scores (1–100)

- **Tool use: 70/100.** τ²-bench 54.1% is respectable, but AA Agentic Index 3.5% and GDPval 616 sit below the mid-tier reference and AetherCode 32.7% shows agentic-web weakness; capped by the absence of Terminal-Bench 2.1.
- **Reasoning: 76/100.** GPQA Diamond 83–84.4% and HLE 18.8–22.5% clear the mid band, with LCR 69%; capped by CritPt 2.6% and a 90.9% hallucination rate.
- **Context window: 95/100.** A genuine 1,048,576-token input with 65,536 output earns the top tier, but LCR 69% is well short of the ≥98%-retrieval condition for a full 100, and >200K input doubles the price.
- **Multimodal: 88/100.** Native text/image/audio/video input earns the high band per the methodology; text-only output and MMMU-Pro 74.9% (not a generation model) keep it out of the 90+ range.
- **Coding: 72/100.** SWE-bench Verified 63.8%, LiveCodeBench 73.6%, SciCode 46.3; dragged down by Vibe Code Bench 0.40% and Coding Index 33.3.
- **Cost efficiency: 62/100.** $1.25/$10 (blended ~$1.67/1M) is far cheaper than $3/$15 on input but carries a heavy $10 output rate and a 2x long-context surcharge — worse than per-token-cheap 2026 Flash tiers.
- **Overall Score: 80/100.** Mean of the five quality dims (70+76+95+88+72)/5 = 80.2 → 80. Best-fit: long-document and whole-codebase analysis plus multimodal workflows where the 1M window is the hard requirement.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-06
- Method: public internet research (Google launch blog/pricing, OpenRouter, Benchgen, BenchLM, LLM Stats, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
