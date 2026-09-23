# Gemini 3.8 Flash — findings by Grok 4 (xAI/grok-4)

- Source: Google DeepMind / Gemini 3.8 Flash
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- Name: Gemini 3.8 Flash (no free-tier API wording; introductory paid pricing)
- Short description: Google DeepMind’s most intelligent Flash-tier workhorse model for long-horizon software engineering, autonomous agents, and complex enterprise workflows. Variant of the Gemini 3 Flash line; Cyber sibling exists for restricted cybersecurity use.
- Provider / access: Google AI Studio / Gemini API (gemini-3.8-flash), Gemini Enterprise Agent Platform / Google Cloud (gemini-3.8-flash). Chat Completions-style generateContent API; also Responses-compatible via enterprise.
- Release / knowledge: 2026-09-02 release; knowledge cutoff March 2026 (some domains limited to January 2025)
- IDs: google/gemini-3.8-flash (no Free ID exists on OpenCode Zen)
- Context window: 1,048,576 total (input); 65,536 max output — verified via official Google AI for Developers docs and Cloud model page
- Modalities: text/image/audio/video/PDF in; text out; reasoning/thinking yes (low/medium/high levels); tool calls (function calling, code execution, computer use preview, search grounding); JSON/structured output yes
- Pricing (as of 2026-09-23): introductory $0.75 input / $3.75 output per 1M tokens through 2026-12-31 (then $1.50 / $7.50); cached input ~90% discount; paid only (no free API tier noted; consumer Pro/Ultra access exists)
- Architecture: proprietary (based on Gemini 3.7 Flash); params/MoE not publicly disclosed

### Raw benchmarks found
Agent / tool use:

- Terminal-Bench 2.1: 89.4% (Google DeepMind model card); 90.8% (Google Cloud developer guide)
- Tau3-Banking / Tau2-Bench: 38.1% (τ³-bench Banking, Google Cloud developer guide)
- GDPval-AA: 1545 Elo (GDPVal-AA v2, Google DeepMind model card)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: SWE-Atlas 51.9% (Google Cloud developer guide)
  Reasoning / knowledge:
- GPQA Diamond: 95.3% (Artificial Analysis / DataLearnerAI independent)
- HLE: 45.4% (Google Cloud developer guide); HLE-Verified 54.9% (Google DeepMind model card / blog)
- LCR / MLCR: no verified public score found
- CritPt: 18.3% high (DataLearnerAI / Artificial Analysis reports)
- Artificial Analysis Intelligence Index / BenchLM overall: 59 (high reasoning, Artificial Analysis)
- Omniscience Accuracy / Hallucination Rate: no verified public score found
  Coding:
- SWE-bench Verified / SWE-Pro: SWE-Bench Pro 61.6% (Google Cloud developer guide)
- LiveCodeBench: 89.48% (Vals.ai)
- SciCode / AA-SciCode: 56.6% high (DataLearnerAI)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: DeepSWE v1.1 73.7% (Google DeepMind model card / blog)
  Long context:
- no long-context retrieval reported (1M window verified; no MRCR/RULER/GraphWalks numbers found)

### Normalized scores (1–100)

- **Tool use: 92/100.** Terminal-Bench 2.1 89.4–90.8% and Tau3 38.1% place it at frontier mid-high; GDPval-AA 1545 Elo supports strong agentic knowledge work but not top Elo.
- **Reasoning: 95/100.** GPQA Diamond 95.3% and HLE-Verified 54.9% are frontier-level; AA Index 59 confirms high intelligence tier.
- **Context window: 97/100.** Verified 1,048,576-token total maps to >=1M tier (95–100); no independent high-retrieval (e.g. MRCR >=98% at 512K) reported so not 100.
- **Multimodal: 95/100.** Full image/video/audio/PDF input + text output (no non-text generation) reaches upper multimodal band.
- **Coding: 93/100.** DeepSWE 73.7% is frontier (near 74%+ threshold), LiveCodeBench 89.48% and SWE-Pro 61.6% reinforce strong coding/agentic coding; Terminal-Bench 4.0 ~19% caps absolute ceiling.
- **Cost efficiency: 90/100.** Introductory $0.75/$3.75 per 1M sits between ~$0.60/$2.20 (~92) and $1.25/$4.25 (~88) mapping; higher token use on complex tasks noted by Google.
- **Overall Score: 94.4/100.** Mean of the five non-cost dims (92+95+97+95+93)/5 = 94.4; best-fit for high-volume agentic coding and multimodal enterprise workflows at Flash cost/latency.

## Signature

- Provided by: Grok 4 (xAI/grok-4) — 2026-09-23
- Method: public internet research (Google DeepMind model card, Google AI/Cloud docs, official blog, Artificial Analysis, Vals.ai, DataLearnerAI); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
