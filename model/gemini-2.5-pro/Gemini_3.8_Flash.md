# Gemini 2.5 Pro — findings by Gemini 3.8 Flash

- Source: Google / Gemini (`gemini-2.5-pro`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google DeepMind's advanced reasoning and coding frontier model from the 2.5 generation, featuring extended thinking and native multimodal capabilities over a 1M context.
- **Provider / access:** Google AI Studio / Vertex AI (`google/gemini-2.5-pro`); OpenCode Zen (`opencode/gemini-2.5-pro`).
- **Release / knowledge:** 2025-03-25 release (expanded rollout 2025-06); knowledge cutoff early 2025.
- **IDs:** `google/gemini-2.5-pro`, `opencode/gemini-2.5-pro`
- **Context window:** 1,048,576 tokens (1.05M total input context, max output 65,536 tokens).
- **Modalities:** text, image, audio, video, PDF in; text and code out; structured JSON mode; function calling / tool use; reasoning thought signatures.
- **Pricing (as of 2026-09-24):** <=200K prompt: $1.25 / 1M input ($0.125 cached read), $10.00 / 1M output; >200K prompt: $2.50 / 1M input ($0.25 cached read), $15.00 / 1M output; free tier on Google AI Studio (rate-limited).
- **Architecture:** Proprietary multimodal sparse Mixture-of-Experts (MoE) with native thinking chains.

### Raw benchmarks found

Agent / tool use:

- GDPval: **919 Elo** (evals.report / Google DeepMind official)
- MCP-Universe: **22.08%** overall success rate (evals.report / verified)
- WebArena: **54.8%** task success rate (evals.report / verified)
- MCP Atlas: **8.8%** pass rate (evals.report / Google DeepMind official)
- GAIA (General AI Assistants): **33.3%** accuracy (evals.report / unverified)
- Terminal-Bench 2.1 / Tau3-Banking: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **85.3%** accuracy (evals.report / Google DeepMind official)
- Humanity's Last Exam (HLE): **21.64%** accuracy (evals.report / Google DeepMind official)
- FrontierMath: **14.14%** accuracy; Tier 4: **4.2%** accuracy (evals.report / official)
- AIME (OTIS Mock): **84.2%** accuracy (evals.report / official)
- MMLU-Pro: **86.2%** accuracy (evals.report / verified)
- Global-MMLU: **90.3%** accuracy (evals.report / unverified)
- SimpleQA Verified: **56.0%** accuracy (evals.report / official)
- LongBench v2: **63.3%** accuracy (evals.report / official)
- FACTS Grounding: **74.2%** grounding accuracy (evals.report / verified)
- Vectara Hallucination Leaderboard: **7.0%** hallucination rate (evals.report / official)
- CritPt: no verified public score found

Coding:

- SWE-bench Verified: **57.6%** % resolved (evals.report / Google DeepMind official)
- LiveCodeBench: **80.1%** pass@1 (evals.report / unverified)
- LiveCodeBench Pro: **1769 Codeforces Elo** (evals.report / official)
- Aider Polyglot: **83.1%** % correct (evals.report / official)
- SciCode: **42.8%** accuracy (evals.report / unverified)
- BigCodeBench: **36.5%** calibrated pass@1 (evals.report / verified)
- GSO (Software Optimization for SWE-Agents): **3.92%** Opt@1 (evals.report / official)
- Vibe Code Bench: **0.40%** overall accuracy (evals.report / verified)

Long context:

- OpenAI-MRCR v2: **58.0%** accuracy (evals.report / verified)
- LongBench v2: **63.3%** accuracy across long documents (evals.report / official)

### Normalized scores (1–100)

- **Tool use: 78/100.** Verified 54.8% WebArena, 22.08% MCP-Universe, and 919 GDPval Elo reflect reliable tool and function execution, though trailing newer agentic frontiers.
- **Reasoning: 88/100.** Strong 85.3% GPQA Diamond, 86.2% MMLU-Pro, and 7.0% low hallucination rate on Vectara show deep analytical capacity, capped by 21.64% HLE and 14.14% FrontierMath.
- **Context window: 92/100.** Full 1M token multimodal context window with solid 58.0% OpenAI-MRCR v2 and 63.3% LongBench v2 retrieval fidelity.
- **Multimodal: 90/100.** High multimodal benchmark marks (84.8% Video-MME, 83.6% Video-MMMU, 81.7% MMMU, 68.0% MMMU-Pro) across audio, video, documents, and vision.
- **Coding: 81/100.** Solid 80.1% LiveCodeBench and 83.1% Aider Polyglot, though capped by 57.6% SWE-bench Verified.
- **Cost efficiency: 74/100.** Sits at $1.25/1M in ($10/1M out) for <=200K, scaling to $2.50/$15 above 200K tokens, balanced by an accessible free tier for evaluation.
- **Overall Score: 86/100.** Mean of quality dimensions: Math.round((78 + 88 + 92 + 90 + 81) / 5) = 85.8 -> 86.0 (half-up). Highly capable multimodal reasoning workhorse for long-document analysis and structured synthesis.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-24 UTC
- Method: Public web research across evals.report and modelcompare.dev verified ledgers; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
