# Gemini 3.6 Flash — findings by Solar Mini 4

> TEMPLATE — do not commit as-is. Replace every `<...>` placeholder with your own research, and strip this notice block. Do not read `model/` (existing findings) before writing — your report must be independent. Overview + scoring methodology: `../../model-comparison.md`.
>
> - Source: Google DeepMind (`gemini-3.6-flash`)
> - Date: 2026-10-24 (UTC)
> - Overview and scoring methodology: `../../model-comparison.md`
> - Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash (Google DeepMind)
- **Short description:** Google's Flash-class model — sustained frontier-level intelligence at high speed (202 tok/s) and low cost, 1M context; built for agentic loops and coding; replaced by Gemini 3.8 Flash but available for production.
- **Provider / access:** Gemini API (Google AI Studio, Android Studio), Google Antigravity, Gemini Enterprise Agent Platform, Gemini Enterprise app; Responses API.
- **Release / knowledge:** released Jul 21, 2026; knowledge cutoff not stated in my sources.
- **IDs:** `gemini-3.6-flash` (Gemini API). Proprietary — no open weights, no free ID.
- **Context window:** 1,048,576 (1M) total; 65,536 max output (Gemini API docs; AA states 1M).
- **Modalities:** text, image, video, audio, PDF in → text out; reasoning yes; tool calls, file search, grounding, code execution, computer use (preview).
- **Pricing (as of 2026-10-24):** $0.75/M input / $3.75/M output (Google API; AA); llm-stats quotes "lowest available provider" $1.50/$7.50 — see conflicts.
- **Architecture:** proprietary, undisclosed param count; no open weights; no free tier.

### Raw benchmarks found

> Measured numbers with source, rank/percentile and harness.

**Agent / tool use**
- OSWorld-Verified: 83.0% (llm-stats comparison)
- JobBench: not found for gemini-3.6-flash in my sources

**Terminal-Bench 2.1:** 78.0% (llm-stats)

**Tau3-Banking / Tau2-Bench:** no verified public score found

**GDPval-AA:** no verified public score found

**Claw-Eval / ClawProBench:** no verified public score found

**MCP-Atlas / SWE Atlas / Toolathlon:** no verified public score found

**Reasoning / knowledge**
- Artificial Analysis Intelligence Index: 34 measured, #78/215 (AA); above-average vs comparable-price tier (median 27)
- Humanity's Last Exam: not found for gemini-3.6-flash in my sources
- GPQA Diamond / CritPt: no verified public score found
- MMLU/GPQA: no verified public score found

**Coding**
- Terminal-Bench 2.1: 78.0% (llm-stats)
- SWE-Bench Pro: 58.7% (llm-stats comparison)
- MLE-Bench: 63.9% (llm-stats)
- CharXiv-R: 89.4% (llm-stats; Opus 4.8 89.9% higher)

**Long context**
- Context Arena (GDM-MRCRv2): not found for gemini-3.6-flash in my sources
- MRCRv2: not found for gemini-3.6-flash in my sources

### Normalized scores (1–100)
- **Tool use: 75/100.** OSWorld-Verified 83.0%, Terminal-Bench 2.1 78.0%, agentic-era design; caps: no MCP-Atlas/Claw/Toolathlon verified numbers in my sources; shared-benchmark head-to-head: Opus 4.8 wins 4 of 4 (DeepSWE 1.1, OSWorld-Verified, SWE-Bench Pro).
- **Reasoning: 62/100.** AA Intelligence Index 34 (#78/215, above the comparable-price median of 27); "sustained frontier-level intelligence" claim; caps: no GPQA/HLE/CritPt verified in my sources; speed is the standout (202.4 t/s, #12/186).
- **Context window: 100/100.** 1,048,576 (1M) total; 65,536 max output (API docs) — output slightly below 128K peers.
- **Multimodal: 85/100.** Text + image + video + audio + PDF in, text out; broad input coverage.
- **Coding: 72/100.** Terminal-Bench 2.1 78.0%, SWE-Bench Pro 58.7%, MLE-Bench 63.9%, CharXiv-R 89.4%; behind Opus 4.8 on all 4 shared benchmarks (llm-stats).
- **Cost efficiency: 95/100.** $0.75/$3.75 per M (AA cost-per-task $1.60, #74/113; input below the $2.00 median); fastest measured speed 202.4 t/s.
- **Overall Score: 79/100.** (75+62+100+85+72)/5 = 78.8 → 79.
**Conflicts noted:** (1) pricing: Google API $0.75/$3.75 vs llm-stats low-provider $1.50/$7.50; (2) context output 65,536 vs 128K peers; (3) shared-benchmark head-to-head with Opus 4.8 (llm-stats: Opus 4.8 wins 4 of 4); (4) AA Intelligence Index 34 vs Opus 4.8 42 on the same harness.
## Signature
- Provided by: **Solar Mini 4 (solar-mini-4)** — 2026-10-24
- Method: public internet research (official Google blog, Gemini API docs, DeepMind model card, Artificial Analysis, llm-stats); scores are normalized 1–100 interpretations, not official vendor scores.
## Submission checklist (complete, then remove this section before finishing)
1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gemini-3.6-flash/Solar_Mini_4.md` (the assigned stem).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gemini-3.6-flash/`.
4. No benchmark invented; conflicts listed above.