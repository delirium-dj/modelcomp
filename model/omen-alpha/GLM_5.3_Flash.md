# Omen Alpha — findings by GLM 5.3 Flash

- Source: Anonymous / OpenCode Go stealth (`zhipu/omen-alpha` — vendor unconfirmed), served via Tokenra
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Omen Alpha (anonymous stealth coding model; vendor unconfirmed)
- **Short description:** OpenCode's stealth coding model added to its $10/month Go subscription on 2026-09-04, launched without a model card, parameter count, or benchmark table. Community/backend evidence (a 'zhipu' namespace URL tagging and tokenizer probe analysis) points to a possible Zhipu AI GLM lineage — an early GLM-5.4 checkpoint or a specialized high-speed derivative of GLM-5.3-Flash — but attribution is unconfirmed; treat as a stealth alias of unknown origin.
- **Provider / access:** OpenAI-compatible Chat Completions via Tokenra `POST https://tokenra.io/v1/chat/completions` with model ID `omen-alpha`; OpenCode Go subscription route; referenced on `https://opencode.ai/data/zhipu/omen-alpha` (no model facts published there as of 2026-10-01).
- **Release / knowledge:** Surfaced 2026-09-04 on OpenCode Go; knowledge cutoff not disclosed.
- **IDs:** `omen-alpha` (Tokenra) / `zhipu/omen-alpha` (OpenCode data namespace). State explicitly: no Free ID exists on Zen — access is via paid OpenCode Go ($10/mo) or Tokenra.
- **Context window:** no verified public context window figure found (Tokenra docs make the provider the source of truth; omenalpha.io and OpenCode data pages publish no limit). Unverified.
- **Modalities:** text in/out (Chat Completions format); image/audio/video input not verified; tool-call controls (`tools`/`tool_choice`) and a `reasoning` parameter are documented as optional fields — behavior must be confirmed against the live route.
- **Pricing (as of 2026-10-01):** $0.20 / 1M input, $0.66 / 1M output, $0.04 / 1M cached read (omenalpha.io listed token pricing; confirm with Tokenra). Zero data retention per omenalpha.io. OpenCode Go subscription: $10/month.
- **Architecture:** anonymous; parameters undisclosed; community tokenizer probes suggest possible Zhipu GLM lineage (unconfirmed, not an official attribution).

### Raw benchmarks found

Agent / tool use:

- OpenCode leaderboard snapshot (2026-09-04, "High" configuration, 4 agentic coding projects): **23.14 / 40** overall coding score, **rank #15** (source: omenalpha.io transcription of the OpenCode snapshot + https://opencode.ai/data/zhipu/omen-alpha). Project breakdown: CSV import (PHP) 4/5; offline sync (PHP) 3.5/5; bank feed (Dart/Flutter) 2.7/5; shipping quotes (Go) 3/5; code-quality component 9.94/20 (expanded view).
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- OpenCode coding leaderboard: **23.14/40** overall (57.9%), code quality 9.94/20 (49.7%) — see above (the only verified coding-specific numbers; five-point project rubric, grader weights not published).

Long context:

- No long-context retrieval reported (no MRCR/RULER measurement; window limit itself unverified).

Speed / cost / other verified measurements (omenalpha.io benchmark snapshot, 2026-09-04):

- Average cost per prompt: **$0.03**; average time per prompt: **01:51**.
- Cache ratio: not included in the snapshot — reported unavailable, not estimated.

### Normalized scores (1–100)

- **Tool use: 58/100.** OpenCode leaderboard 23.14/40 (~57.9%) across four agentic coding projects with a documented rubric maps to the mid band (methodology mid refs: 45–60% harness scores → 50–70); rank #15 on that leaderboard. Capped by a single snapshot from an unconfirmed vendor and no Terminal-Bench/Tau/GDPval numbers.
- **Reasoning: 55/100.** No verified public reasoning benchmarks (GPQA/HLE/Index all missing); provisional mid-band estimate — marked provisional, capped by zero measured reasoning numbers.
- **Context window: 55/100.** No verified public context window figure found on Tokenra docs, omenalpha.io, or the OpenCode data page — provisional mid-low score, capped by entirely unverified limits (never invent a window size).
- **Multimodal: 15/100.** Text-only Chat Completions verified; no image/audio/video input verified → text-only band (10–20).
- **Coding: 59/100.** OpenCode leaderboard 23.14/40 (57.9%) overall plus code-quality 9.94/20 (49.7%) → mid band; capped by the unpublished grader weights and absence of SWE-bench/LiveCodeBench numbers.
- **Cost efficiency: 95/100.** $0.20/$0.66 per 1M with $0.04 cached read and $0.03/prompt observed cost — very cheap (between the ~$0.10/$0.20 ≈ 97–99 and ~$0.60/$2.20 ≈ 92 anchors); zero data retention is a plus. Excluded from Overall.
- **Overall Score: 48/100.** (58 + 55 + 55 + 15 + 59) / 5 = 48.4 → 48. Best-fit recommendation: a cheap, privacy-first execution-layer coder for everyday tasks (PHP/Dart/Go project work scored mid-band) — not a primary planner; verify the live Tokenra route and treat all identity claims as unconfirmed.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-01
- Method: public internet research (omenalpha.io benchmarks/API/homepage, OpenCode data page, rankllms.com and StartupFortune coverage, fetched 2026-10-01); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
