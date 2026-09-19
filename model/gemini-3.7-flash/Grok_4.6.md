# Gemini 3.7 Flash — findings by Grok 4.6

- Source: Google (`google/gemini-3.7-flash`; OpenCode Zen `opencode/gemini-3.7-flash` expected same suffix pattern as 3.8)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google DeepMind Flash workhorse released **2026-08-13**, three weeks before 3.8 Flash. Long-horizon coding/agents at Flash price; predecessor, not a Free SKU.
- **Provider / access:** Gemini API `gemini-3.7-flash` (generateContent); OpenRouter `google/gemini-3.7-flash`; Vertex. Thinking levels low/medium/high (family pattern).
- **Release / knowledge:** **2026-08-13** (OpenRouter); knowledge cutoff not published on the model card snippet.
- **IDs:** `google/gemini-3.7-flash`. No Zen Free ID found.
- **Context window:** 1,048,576 input / 65,536 max output (OpenRouter / AI Atlas).
- **Modalities:** Text, image, video, audio, PDF in; text out (Gemini API / OpenRouter). Function calling and thinking supported.
- **Pricing (as of 2026-09-19):** Intro through 2026-12-31: **$0.75 / $3.75** per 1M (thinking included); cache **$0.075** intro / **$0.15** after 2027-01-01 when list becomes **$1.50 / $7.50**. Paid.
- **Architecture:** Proprietary closed weights (Gemini 3 Flash line).

### Raw benchmarks found

> DeepMind 3.7 Flash card (August 2026) plus AA/AI Atlas.

Agent / tool use:

- Terminal-Bench 2.1: **85.8%** (DeepMind card / AA high).
- Tau3-Banking: **30.9%** (Google Cloud 3.8 Flash developer guide comparison table for 3.7 Flash).
- GDPval-AA v2: **1525 Elo** (DeepMind; 3.8 card listed 1482 for 3.7 — use the 3.7 card **1525**).
- OSWorld-2.0: **50.6%** (DeepMind 3.8 comparison column for 3.7).
- AutomationBench (private): **30.4%** (DeepMind).
- Claw-Eval / ClawProBench: **no verified public score found**.
- Toolathon / MCP-Atlas / SWE Atlas QnA: **no verified public score found**. Cloud 3.8 guide listed 3.7 SWE-Atlas **48.0%** (provisional, provider table).

Reasoning / knowledge:

- GPQA Diamond: **94.5%** (AA / AI Atlas); OpenRouter studio/vertex **94.5% / 93.7%**.
- HLE-Verified: **53.6%** (DeepMind 3.8 Flash card, 3.7 column). Cloud guide HLE **45.7%**.
- LCR / MLCR: **no verified public AA-LCR score found** in these pages.
- CritPt: **no verified public score found**.
- Artificial Analysis Intelligence Index: **56** (DeepMind card).
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**.

Coding:

- SWE-bench Verified: **no verified public score found**. SWE-Bench Pro **60.4%** (Cloud 3.8 guide, 3.7 column).
- LiveCodeBench: **no verified public score found**.
- SciCode: AA **59.8%** medium / **55.7–57.2%** other efforts (AI Atlas).
- Vibe Code Bench: **no verified public score found**.
- DeepSWE v1.1: **65.3%** (DeepMind).
- FrontierCode 1.1 Main: **43.6%** (DeepMind).

Long context:

- GDM-MRCR v2 8-needle **97.0%** at **128k average** (DeepMind) — not a 512K+ figure, so ≥98% at 512K+ is **not verified**. Window 1,048,576.

### Normalized scores (1–100)

- **Tool use: 86/100.** TB2.1 85.8% is just under the ~88%+ frontier ref. Caps: Tau3 30.9%, GDPval 1525 vs ~1750+, OSWorld 50.6%, missing Claw-Eval.
- **Reasoning: 91/100.** GPQA ~94% and HLE-V 53.6% meet GPQA 90%+ / HLE 40%+. Caps: Index 56 under 60+.
- **Context window: 95/100.** 1M maps to 95–100; published MRCR is 128k-average 97.0%, not ≥98% at 512K+.
- **Multimodal: 92/100.** Audio + video + PDF + image in, text out → 90–100; capped by text-only output.
- **Coding: 84/100.** SciCode ~56–60% hits 55%+; DeepSWE 65.3% is below 74%+ so not 90–100. TB 85.8% supports mid-high 80s.
- **Cost efficiency: 90/100.** Intro **$0.75 / $3.75** sits between ~$0.60/$2.20 ≈92 and ~$1.25/$4.25 ≈88.
- **Overall Score: 90/100.** Mean of (86 + 91 + 95 + 92 + 84) / 5 = 89.6 → **90**. Best-fit: cheap omni Flash agent before 3.8; escalate to 3.8 for DeepSWE/TB.

---

## Signature

- Provided by: **Grok 4.6 (xAI/grok-4.6)** — 2026-09-19
- Method: public internet research (DeepMind 3.7/3.8 cards, OpenRouter, AI/TLDR, AI Atlas, Cloud 3.8 comparison table); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
