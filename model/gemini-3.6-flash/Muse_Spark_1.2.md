# Gemini 3.6 Flash — findings by Muse Spark 1.2

- Source: Google/gemini-3.6-flash (opencode/muse-spark-1.2-contributor-free)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's workhorse Flash (July 2026) — better coding/knowledge/multimodal with token efficiency vs 3.5 Flash.
- **Provider / access:** Google AI Studio `gemini-3.6-flash`, Vertex AI `gemini-3.6-flash` — via OpenCode Zen `opencode/gemini-3.6-flash`
- **Release / knowledge:** 2026-07-21 (DeepMind model card); knowledge cutoff 2026-07
- **IDs:** `google/gemini-3.6-flash` (and `deepmind/gemini-3-6-flash` card)
- **Context window:** 1,048,576 total (1M) / 32K out tier — verified via DeepMind card (GDM-MRCR v2 at 1M 54.0% pointwise, 128k 91.8% avg)
- **Modalities:** Text, image, audio, video, PDF in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-23):** $1.50 in / $7.50 out per 1M (discounted $0.75/$3.75 through end 2026) — from DeepMind card
- **Architecture:** Proprietary (Gemini 3.6)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **78.0%** (Terminus-2 harness) vs 3.5 Flash 76.2% / 3.1 Pro 73.8% / Luna 84.7% / Grok 4.5 83.3% (source: DeepMind Gemini 3.6 Flash card 2026-07-21, AA Gemini 3.6 comparison)
- GDPVal-AA v2: **1421 Elo** (or 1422 per AA Gemini 3.7 table) vs 3.5 Flash 1349 / 3.1 Pro 965 / Luna 1584 (source: DeepMind card, Artificial Analysis Gemini 3.7 table)
- OSWorld-Verified: **83.0%** vs 3.5 Flash 78.4% / 3.1 Pro 76.2% (source: DeepMind card)
- Tau3-Banking / Tau2-Bench: **no verified isolated Tau2 for 3.6 Flash** — Artifical Analysis notes Telecom proxy via AutomationBench but no standalone Tau
- GDPval-AA: see 1421 above
- Claw-Eval / ClawProBench: **no verified public Claw for 3.6 Flash**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified Toolathon for 3.6 Flash**

Reasoning / knowledge:

- HLE-Verified: **51.2%** (DeepMind card per AA table) — proxy for HLE (source: AI/TLDR Gemini 3.7 table shows 3.6 Flash 51.2% HLE-Verified)
- LCR / MLCR: **91.8% GDM-MRCR v2 128k avg (8-needle)** vs 3.5 Flash 77.3% / 3.1 Pro 84.9%; **54.0% at 1M pointwise** vs 26.6%/26.3% predecessors (source: DeepMind card)
- CritPt: **no verified CritPt for 3.6 Flash isolated**
- Artificial Analysis Intelligence Index / BenchLM overall: **52** (AA Index for 3.6 Flash, +? vs 3.5) — per Gemini 3.7 article: 3.6 Flash 52, 3.7 Flash 56 (source: Artificial Analysis 2026-08-13, AA Gemini 3.6 vs 3 Pro preview 34)
- Omniscience: **no verified AA-Omniscience for 3.6 Flash isolated**
- CharXiv Reasoning: **85.2% no tools / 89.4% with tools** (information synthesis from charts) (source: DeepMind card)
- GPQA / MMLU-Pro: **no verified isolated GPQA for 3.6 Flash** — closest is AA Intelligence composite

Coding:

- SWE-bench Pro: **58.7%** (public diverse agentic coding) vs 3.5 Flash 55.1% / 3.1 Pro 54.2% / Luna 62.7% / Grok 4.5 64.7% (source: DeepMind card)
- LiveCodeBench: **no verified LCB for 3.6 Flash isolated** — DeepMind cites Terminal-Bench as coding proxy
- SciCode / AA-SciCode: **no verified SciCode for 3.6 Flash isolated**
- Vibe Code Bench: **no verified Vibe for 3.6 Flash**
- DeepSWE / Coding Index / other: **49% DeepSWE v1.1** vs 3.5 Flash 37% / 3.1 Pro 12% / Luna 67% (source: DeepMind card); **63.9% MLE-Bench** vs 49.7% 3.5 Flash (source: DeepMind card)

Long context:

- 1M total — GDM-MRCR v2 91.8% at 128k avg (vs 77.3% 3.5 Flash) and 54.0% at 1M pointwise indicates strong long-context vs predecessors

### Normalized scores (1–100)

- **Tool use: 80/100.** TB2.1 78.0% + GDPVal 1421 + OSWorld 83.0% show solid agentic workhorse; capped by missing Tau2/Claw verification and trailing Luna 84.7% / Grok 83.3% on TB.
- **Reasoning: 84/100.** CharXiv 85-89% + LCR 91.8% + HLE-Verified 51.2% + AA Index 52 indicate strong reasoning with long-context synthesis; capped by MRCR 1M 54% (good but not 90%+).
- **Context window: 96/100.** 1M verified with 54% at 1M pointwise (2× predecessors 26%) — top tier; capped below 100 due to 54% not 97% at 1M.
- **Multimodal: 88/100.** Text, image, audio, video, PDF in; text out — full omni with Video understanding; same tier as Gemini 3 Flash family.
- **Coding: 80/100.** SWE-Pro 58.7% + DeepSWE 49% + MLE 63.9% show improved coding over 3.5 Flash (55.1%/37%/49.7%) but still trailing Grok 4.5 64.7%/62% and Luna 62.7%/67% frontier.
- **Cost efficiency: 78/100.** $1.50/$7.50 per 1M (discount $0.75/$3.75) — 2× cheaper than Pro $2/$12, mid-tier Flash pricing; 30% lower cost per task than 3.6 at discounted rate per AA.
- **Overall Score: 86/100.** Mean of five non-cost dims (80+84+96+88+80)/5=85.6 → 86; best-fit as speed/quality workhorse where 3.5 insufficient and Pro overkill.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-23
- Method: public internet research (Google DeepMind Gemini 3.6 Flash model card 2026-07-21, Artificial Analysis Gemini 3.7 vs 3.6 table, AA Gemini 3.6 vs Pro preview); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
