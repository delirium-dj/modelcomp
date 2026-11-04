# Gemini 4 Carbon — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Google / Gemini 4 Carbon
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemini 4 Carbon
- **Short description:** Google DeepMind's next frontier model, announced October 28, 2026; Google describes it as its strongest model, with state-of-the-art cybersecurity and long-horizon (agentic) capabilities; successor in the Gemini 4 family after Gemini 4 Argon.
- **Provider / access:** Google (Google DeepMind); early rollout to selected users via the Gemini API / Vertex AI (Google Cloud), not yet publicly available at time of research; the official announcement does not specify Chat Completions vs Responses API.
- **Release / knowledge:** Released 2026-10-28; knowledge cutoff not disclosed (Epoch AI lists it as unknown).
- **IDs:** gemini-4-carbon (Google Gemini API / Vertex AI); exact public API ID not confirmed in vendor docs at research time; no Free ID on OpenCode Zen (model still in selected-user rollout).
- **Context window:** 1,000,000 tokens total; max output 1,048,576 tokens (Vals AI hyperparameters) — verified identically by Google's official blog, Artificial Analysis, Vals AI and llm-stats.
- **Modalities:** Text, image, video, and speech input per Google's official announcement; text output. Vals AI lists text/image/video/file input; llm-stats lists text+image only — the official source is the broadest, and no generative image/audio/video output is reported anywhere.
- **Pricing (as of 2026-11-04):** $4.00 per 1M input tokens and $20.00 per 1M output tokens at standard pricing (Google official; Vals AI agrees); 50% launch discount during the introductory period, no confirmed end date (Artificial Analysis); cached input tokens 95% off ($0.20 per 1M). Paid model — no free tier identified.
- **Architecture:** Proprietary / closed weights; parameter count, MoE density and training compute not disclosed (Epoch AI: unknown; Google's announcement does not state model size).

## Raw benchmarks found

Agent / tool use:
- SEC-bench Pro (vulnerability finding, cyber defense): 88.2% (Google official blog) — Google's claimed state-of-the-art result.
- Artificial Analysis Coding Agent Index (Antigravity CLI): 59, #2 behind Claude Opus 5.5 (max 62) (Artificial Analysis).
- Terminal-Bench 4.0: 64%, #2 behind Claude Opus 5.5 (max) (Artificial Analysis); Vals AI: 63.13%, #4 of 59 (Vals AI) — rank conflict between sources (2nd vs 4th) at near-identical values.
- FrontierCS 2 (48 agentic research tasks, independent): 54% pass rate, tied with Gemini 4 Argon and second only to Claude Opus 5.5 (58%); FrontierCS Capabilities Index 52.9 vs Argon 46.7; mean score where both submitted 57.7 vs Argon 52.9; cost per run $40.56 vs Argon $19.52 (~2x) (FrontierCS).
- AutomationBench-AA: #1 of the 9 Intelligence Index v5 evaluations (Artificial Analysis).
- Internal: successful cheating on Terminal-Bench 4.0 reduced to 0.0% (alignment result, not a capability score) (Google official).

Reasoning / knowledge:
- Artificial Analysis Intelligence Index v5: 59, #1 overall; #1 in 4 of 9 evaluations (HLE-Diamond, Terminal-Bench-Science, AA-Omniscience, AutomationBench-AA) (Artificial Analysis).
- AA-Omniscience v1.1: 54 (#1, +6 over Claude Opus 5.5 max 48); accuracy 58%, hallucination rate 11% (2nd lowest, behind Argon's 4%) (Artificial Analysis).
- CritPt v1: 36% (Epoch AI scorecard, tied with GPT-6 Astra) — modest relative to leading scores.
- SciCode: 67%, tied #1 with Muse Wonder (Epoch AI).

Coding:
- FrontierCode v1.1: 51%, #2 behind Claude Opus 5.5 (Artificial Analysis).
- SciCode: 67%, tied #1 with Muse Wonder (Epoch AI).
- Vibe Code Bench v1.1: 89.06%, #8 of 123 (Vals AI).
- AA-Briefcase (agentic knowledge work): 1609 Elo (high reasoning), +126 over Gemini 4 Argon but behind Grok 4.7 (1638), Muse Wonder max (1659) and Kimi K3.1 Pro (1678) (Artificial Analysis).

Long context:
- 1M-token context window; no public needle/retrieval score (MRCR/RULER/GraphWalks) found for this exact model — no verified long-context retrieval reported beyond the advertised window.

### Normalized scores (1–100)
Overall = half-up mean of the five quality dims (Tool + Reasoning + Context + Multimodal + Coding) / 5. Cost efficiency is scored independently and excluded from the mean.

- **Tool use: 88/100.** SEC-bench Pro 88.2% and AutomationBench-AA #1, but consistently runner-up to Claude Opus 5.5 on agentic coding (Coding Agent Index 59 vs 62; Terminal-Bench 4.0 #2); FrontierCS pass ties Gemini 4 Argon at 54%.
- **Reasoning: 88/100.** Intelligence Index v5 #1 at 59, #1 in 4/9 evals, AA-Omniscience 54 (#1, accuracy 58%, hallucination 11%); capped by CritPt v1 at only 36% and Artificial Analysis noting it is not leading in all knowledge work.
- **Context window: 100/100.** 1M tokens total / 1M max output, confirmed by Google, Artificial Analysis, Vals AI and llm-stats; ties the top tier (Muse Spark 1.3 precedent in model-comparison.md).
- **Multimodal: 85/100.** Text/image/video/speech input (official; Vals AI: text/image/video/file); text-only output caps the score; llm-stats lists only text+image input (coverage understated vs the official announcement).
- **Coding: 85/100.** Coding Agent Index 59 (#2), Terminal-Bench 4.0 64% (#2), FrontierCode 51% (#2), SciCode 67% (tied #1), Vibe Code Bench 89.06%; capped by consistent runner-up finishes to Claude Opus 5.5 on agentic coding benchmarks.
- **Cost efficiency: 40/100.** Paid $4/$20 per 1M (50% intro discount; cached input 95% off at $0.20/M); far above free tiers (cost 100) and above GLM 5.1 Coding's $1.40/$4.40 (scored 75 in model-comparison.md).
- **Overall Score: 89/100.** Mean of (88 + 88 + 100 + 85 + 85) / 5 = 89.2 → 89; best-fit recommendation: top-tier paid choice for cybersecurity and long-horizon agentic work where budget allows; not the cost-effective pick.

---

## Signature
- Provided by: **Nemotron 3.5 Super VL 120B A12B (NVIDIA nemotron-3.5-super-vl)** — 2026-11-04
- Method: public internet research across the official Google announcement plus five independent benchmark/review sources (Artificial Analysis, FrontierCS, Epoch AI, Vals AI, llm-stats); scores are normalized 1–100 interpretations, not official vendor scores. Conflicting values reported where sources disagree: Vals AI's own Tax Agent Bench figures disagree with each other (51.78% #1 of 80 vs 48.86% #3 of 78); Terminal-Bench rank differs (Artificial Analysis #2 vs Vals AI #4 of 59); modality coverage differs (official claims speech input; llm-stats lists text+image only).
- Reference URLs:
  - [Google — Gemini 4 Carbon: our next frontier model (official announcement)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/)
  - [Artificial Analysis — Gemini 4 Carbon is the new #1 on the Intelligence Index v5](https://artificialanalysis.ai/articles/gemini-4-carbon-new-number-1)
  - [FrontierCS — Details about our evaluation of Gemini 4 Carbon (independent agentic evaluation)](https://frontier-cs.org/blog/gemini-4-carbon/)
  - [Epoch AI — Gemini 4 Carbon model page](https://epoch.ai/models/gemini-4-carbon)
  - [Vals AI — Gemini 4 Carbon Benchmarks, Cost and Capabilities](https://www.vals.ai/models/google_gemini-4-carbon)
  - [llm-stats — Gemini 4 Carbon Benchmarks, Pricing & Context Window](https://llm-stats.com/models/gemini-4-carbon)