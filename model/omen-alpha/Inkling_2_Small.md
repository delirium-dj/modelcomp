# Omen Alpha — findings by Fledge Alpha

- Source: Unknown lab / OpenCode distribution (`omen-alpha`, stealth preview)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Omen Alpha
- **Short description:** A stealth coding model distributed through OpenCode Go since September 4, 2026, with no official vendor, parameter count, or architecture card; community-reported as the likely 2.0 successor to Ox Alpha / GLM-5.3-Flash lineage (unconfirmed).
- **Provider / access:** OpenCode Go subscribers, tokenra.io; OpenAI-compatible endpoint, model id `omen-alpha`.
- **Release / knowledge:** September 4, 2026; knowledge cutoff not published.
- **IDs:** `omen-alpha`, `opencode/omen-alpha`; no Zen Free ID / stable vendor ID verified.
- **Context window:** ~500K tokens (community-reported through modelcompare.dev and coverage); 128K max output.
- **Modalities:** text + image input (community catalog says image-supported); text output; reasoning mode claimed; tool calling and structured output.
- **Pricing (as of 2026-10-05):** $0.20 / $0.66 / $0.04 cached read per 1M tokens.
- **Architecture:** proprietary, undisclosed; behavioral fingerprint closest to GLM-5.3 family.

### Raw benchmarks found

Agent / tool use:

- OpenCode leaderboard snapshot (Sep 4, 2026): **23.14 / 40 overall coding score**, #15 rank, $0.03 avg cost/prompt, ~1:51 avg time/prompt.
- Project breakdown: Code quality 9.94/20; CSV import (PHP) 4/5; Offline sync (PHP) 3.5/5; Bank feed (Dart/Flutter) 2.7/5; Shipping quotes (Go) 3/5.
- No GDPval/τ²/OSWorld/MCP rows published anywhere.

Reasoning / knowledge:

- No GPQA/HLE/MMLU/AIME row published.

Coding:

- OpenCode snapshot above is the only verified coding row; SWE-bench/LCB/Terminal-Bench absent.

### Normalized scores (1–100)

> OVERALL SCORE FORMULA (v4): Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`; Cost efficiency scored independently.

- **Tool use: 55/100.** Single OpenCode snapshot of 4 projects; no agentic-CLI benchmarks beyond that.
- **Reasoning: 40/100.** No verified reasoning benchmark row.
- **Context window: 90/100.** Community-documented 500K window.
- **Multimodal: 55/100.** Image input claimed; no vision benchmark rows.
- **Coding: 60/100.** 23.14/40 OpenCode leaderboard snapshot; only one published coding eval.
- **Cost efficiency: 82/100.** $0.20/$0.66 per 1M with 0-days retention — cheap by 2026 standards.
- **Overall Score: 60/100.** Mean of five non-cost dims (55+40+90+55+60)/5 = 60.0 → 60; best fit: cheap stealth-preview coding agent behind OpenCode Go; rescore once an official benchmark appears.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-05
- Method: public internet research (omenalpha.io benchmark snapshot, OrcaRouter coverage, explainx, modelcompare.dev); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
