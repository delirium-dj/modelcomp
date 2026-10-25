# Gemini 2.5 — findings by Muse Glimmer 30B

- Source: Google / gemini-2.5-pro
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemini 2.5
- **Short description:** Google DeepMind flagship thinking model served as `gemini-2.5-pro`. Integrated reasoning, 1M-token context and native multimodal understanding for long codebases and science reasoning. Flagship of the Gemini 2.5 family.
- **Provider / access:** Google AI Studio `gemini-2.5-pro` and Vertex AI; Generative Language API v1beta `gemini-2.5-pro`. Chat Completions style.
- **Release / knowledge:** Experimental 2025-03-25; GA tracked May 2025 by LLM Stats; knowledge cutoff January 2025.
- **IDs:** `google/gemini-2.5-pro`
- **Context window:** 1,048,576 total tokens; max output 65,536 per LLM Stats, 1M total reported by Helicone. Verified by LLM Stats and Helicone.
- **Modalities:** Text in/out; image, audio, video in; reasoning yes; tool calls / function calling supported; JSON mode supported.
- **Pricing (as of 2026-10-25):** $1.25 / 1M input, $10.00 / 1M output for prompts ≤200K; $2.50 / 1M input, $15.00 / 1M output >200K via Google/DeepInfra. Free limited access via AI Studio.
- **Architecture:** Proprietary thinking model, Google DeepMind Gemini 2.X family.

### Raw benchmarks found

> Sources: Helicone Gemini 2.5 Pro developer guide 2025-04-08; LLM Stats model page 2026-10-25; evals.report Google DeepMind Gemini 2.5 Pro benchmark results Mar 25 2025; Wikipedia Gemini language model. Conflicting release dates and scores are noted.

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: 919 Elo (evals.report official Mar 25 2025)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: MCP Atlas 8.8% pass rate (evals.report official); MCP-Universe 22.08% Overall Success Rate verified

Reasoning / knowledge:

- GPQA Diamond: 84.0% single attempt (Helicone); 85.3% accuracy official (evals.report Mar 25 2025); airank.dev reports 77.2% — conflicting
- HLE: 18.8% no tools (Helicone); 21.64% accuracy official (evals.report)
- LCR / MLCR: MRCR 94.5% at 128k context (Helicone); OpenAI-MRCR v2 58.0% accuracy mean SequenceMatcher similarity verified (evals.report)
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: 34.6 Index unverified (evals.report)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: 63.8% (Helicone); 57.6% % resolved official (evals.report Mar 25 2025)
- LiveCodeBench: 70.4% v5 single attempt (Helicone); 80.1% Pass@1 unverified (evals.report); LiveCodeBench Pro 1769 Codeforces Elo official
- SciCode / AA-SciCode: 42.8% accuracy unverified (evals.report)
- Vibe Code Bench: 0.40% overall accuracy verified (evals.report)
- DeepSWE / Coding Index / other: Aider Polyglot 74.0% whole file (Helicone); 83.1% % correct official (evals.report); BigCodeBench 36.5% calibrated Pass@1 verified

Long context:

- MRCR 94.5% at 128k context; OpenAI-MRCR v2 58.0% mean similarity at long context

### Normalized scores (1–100)

- **Tool use: 60/100.** MCP Atlas 8.8% pass rate and MCP-Universe 22% show limited agentic tool reliability; no Terminal-Bench/Tau3 public scores cap the score.
- **Reasoning: 84/100.** GPQA Diamond 84-85% and AIME 86-92% with strong MMMU show frontier science/math reasoning; capped by HLE ~19-22% and lack of CritPt.
- **Context window: 94/100.** Verified 1M token window with MRCR 94.5% retention at 128k; output limit 65.5K constrains the top tier.
- **Multimodal: 84/100.** MMMU 81.7%, Video-MME 84.8%, Video-MMMU 83.6% with text/image/audio/video input; output limited to text.
- **Coding: 75/100.** SWE-bench 57-64% and LiveCodeBench 70-80% with Aider Polyglot 74-83%; SciCode 42.8% and Vibe Code Bench 0.4% cap the composite.
- **Cost efficiency: 65/100.** Paid $1.25/$10 with no free ID; AI Studio free tier exists but production use is premium.
- **Overall Score: 79/100.** Mean of five quality dims (60+84+94+84+75)/5 = 79.4 → 79; best-fit as a long-context multimodal reasoner with solid coding for large codebases, weaker agentic tool use.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; Helicone developer guide, LLM Stats, evals.report, Wikipedia; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
