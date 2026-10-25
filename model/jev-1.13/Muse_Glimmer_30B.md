# Jev 1.13 — findings by Muse Glimmer 30B

- Source: TypeSafe AI / jev-1.13
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Jev 1.13
- **Short description:** TypeSafe AI's System One decision model. Does not generate text or code; evaluates a state and returns typed decisions — Choice, Score, Noul — with calibrated probabilities for automation pipelines.
- **Provider / access:** TypeSafe hosted API `POST /v1/systemone` with model `jev-1.13.0`; OpenCode Zen `opencode/jev-1.13` / `jev-1.13-free`; also on OpenRouter `typesafe/jev-1.13`, Vercel AI Gateway, Cloudflare AI Gateway. Decisions API only, not Chat Completions.
- **Release / knowledge:** Early access 2026-09-15; general availability ~2026-09-21. Knowledge cutoff not applicable — decision model, no disclosed cutoff.
- **IDs:** `jev-1.13.0`, aliases `jev-latest`, `jev-preview`; `typesafe/jev-1.13` on OpenRouter; `opencode/jev-1.13` on Zen.
- **Context window:** 64k per-request / 32k per-question default, verifiable in TypeSafe docs. Opt-in `TypeSafe-Danger-Zone-Long-Context: true` raises both to 262,144 tokens. No verified public RULER/GraphWalks.
- **Modalities:** Input text, JSON object/array; experimental image input PNG/JPEG behind `TypeSafe-Danger-Zone-Images: true` since 2026-10-14, official docs still list text-only. Output typed decision objects only, no text generation. Reasoning yes in decision sense, tool calls no, JSON mode N/A.
- **Pricing (as of 2026-10-25):** $0.042 per 1M input tokens, output tokens free. Zen paid slot `opencode/jev-1.13` $0.042/M in / free out; limited-time free slot `jev-1.13-free`. Rate limited ~100K tok/s.
- **Architecture:** proprietary closed weights, parameters undisclosed. System One class trained with Reinforcement Learning for Calibrated Decisions RLCD, parallel sampler. Not open weights.

### Raw benchmarks found

> Sources: arXiv:2609.37647 Deußer/Sparrenberg/Sifa 2026-09-29, TrueStandard blog 2026-09-18 re-checked 2026-10-16, VulcanBench Verdict v1 2026-09-22 corrected 2026-09-23, TypeSafe docs 2026-10-15.

Agent / tool use:

- No verified public score found for Terminal-Bench, Tau3-Bench, GDPval-AA, Claw-Eval, Toolathon/MCP-Atlas. Model is not a tool-using agent by design.

Reasoning / knowledge:

- arXiv:2609.37647 zero-shot on 37 datasets / 346,009 requests: **95–99%** accuracy on IMDB, SST-2, HellaSwag, ARC; **86.7%** on Belebele across 122 languages; beats Qwen3.8-27B on 27/37 datasets and Gemma-4-E4B on all 37.
- TrueStandard 108-claim grounding test: **96.3%** accuracy for jev-1.13, **91.7%** on adversarial near-miss tier 4; Expected calibration error **0.066**, Brier 0.0331.
- VulcanBench Verdict v1 patch-judgment: Does patch pass every hidden test? **62.8%** at dev-fitted cutoff vs floor 62.7%; AUROC **0.690**. Does it break? **93.1%** vs floor 94.1%; AUROC 0.652. Style pair maintainability: **89.7%** agreement with Muse Spark 1.3/Grok 4.6 panel, AUROC 0.962.
- Artificial Analysis / BenchLM: no verified public score found.

Coding:

- No verified public SWE-bench Verified / SWE-Pro, LiveCodeBench, SciCode, Vibe Code Bench. Model cannot generate code by construction; no verified public score found.

Long context:

- No MRCR / RULER / GraphWalks public score found. Official default 64k per-request, 32k per-question; long-context opt-in 262k verified in docs, accuracy degrades per vendor warning.

### Normalized scores (1–100)

- **Tool use: 35/100.** Decision-only endpoint with no tool calling or agentic harness; VulcanBench verdict shows usable ranking but no standard tool benchmarks exist. Capped by construction as non-agent.
- **Reasoning: 60/100.** Strong zero-shot classification 95–99% on IMDB/SST-2/HellaSwag/ARC and 86.7% Belebele multilingual, 96.3% on grounding claims with 91.7% on adversarial tier. Capped by poor calibration on patch judgments and lack of general reasoning benchmarks.
- **Context window: 52/100.** 64k/32k default with opt-in 262k; usable for long state but no public long-context retrieval scores and vendor warns degradation. Mid-tier mapping.
- **Multimodal: 25/100.** Text input primary; image input exists behind danger-zone flag since 2026-10-14 with no image benchmarks, official docs still text-only, output decision-only. Well above text-only floor but far below verified multimodal.
- **Coding: 20/100.** Cannot generate code; VulcanBench code-judgment shows discriminative ranking but no generation or SWE-bench scores. Capped by design.
- **Cost efficiency: 98/100.** $0.042/M input with free output, ~1/498th of GPT-6 Astra cost per independent measurement; limited-time free Zen slot. Near-perfect price point.
- **Overall Score: 38/100.** Mean of five quality dims (35+60+52+25+20)/5 = 38.4 → 38. Best-fit: ultra-cheap calibrated decision primitive for classification/routing, not a generative assistant.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
