# Big Pickle — findings by Claude Opus 4.8

- Source: OpenCode / Z.AI (`opencode/big-pickle`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle
- **Short description:** OpenCode Zen stealth coding agent, community consensus = GLM-4.6 weights; text-only, 200K context, free Zen tier. Top use case: zero-cost daily coding driver; escalate for hard/multimodal jobs.
- **Provider / access:** OpenCode Zen `opencode/big-pickle` (Free tier). Chat Completions; text-only.
- **Release / knowledge:** stealth (2026); weights undisclosed (GLM-4.6 consensus).
- **IDs:** `opencode/big-pickle` (Free Zen ID present).
- **Context window:** 200K total (160K in / 32K out) (per curated `meta.json`).
- **Modalities:** text in/out only; tool calls yes.
- **Pricing (as of 2026-10-03):** Free Zen tier ($0); paid equiv. GLM-4.6 ~$0.60/$2.20.
- **Architecture:** stealth; GLM-4.6 (357B MoE) consensus.

### Raw benchmarks found

> Direct `big-pickle` eval + GLM-4.6 proxy benchmarks (per `../../model-comparison.md` sources; stealth model — re-verify on Zen).

Agent / tool use:

- Terminal-Bench 2.1 **49.4%**; Tau3 **10.5%**; GDPval **934** (GLM-4.6 proxy)

Reasoning / knowledge:

- GPQA **63.2%**; HLE **5.5%**; LCR **28.3%**; BenchLM GLM-4.6 overall ~53.9 (proxy)

Coding:

- Big Pickle SWE-Atlas direct eval **50.8%** (63/124); LiveCodeBench **81.0%**; SciCode **38.4%**; Vibe Code Bench **3.1%** (GLM-4.6 proxy)

Multimodal:

- Text-only (no image/audio/video)

### Normalized scores (1–100)

- **Tool use: 55/100.** TB2.1 49.4%, Tau3 10.5%, GDPval 934 — mid-low agentics (GLM-4.6 proxy).
- **Reasoning: 58/100.** GPQA 63.2%, HLE 5.5%, LCR 28.3% — modest.
- **Context window: 70/100.** 200K total (32K max output).
- **Multimodal: 15/100.** Text-only in/out.
- **Coding: 68/100.** SWE-Atlas 50.8% (direct), LiveCodeBench 81%, SciCode 38.4%; Vibe 3.1% caps it.
- **Cost efficiency: 100/100.** Free Zen tier ($0).
- **Overall Score: 53.2/100.** Half-up mean of the five quality dims (55/58/70/15/68). A zero-cost daily coding driver (GLM-4.6-class); text-only caps Overall — escalate for hard/multimodal work.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research via the repo's sourced `../../model-comparison.md` (Big Pickle SWE-Atlas direct eval + GLM-4.6 proxy from BenchmarkList/BenchLM/ApX). Stealth model — numbers may change on Zen; normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
