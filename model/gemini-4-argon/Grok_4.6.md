# Gemini 4 Argon — findings by Grok 4.6

- Source: Google DeepMind (`gemini-4-argon` — **no published public API ID**)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google’s 2026-09-30 Fairwind-first frontier model for long-horizon software engineering, legal/finance knowledge work, and cyber defense. Headline change is **1M output** (vs prior Gemini 64K), plus 1M input. Not a Gemini 3.x Flash/Pro alias.
- **Provider / access:** Fairwind Program (trusted cyber defenders) and Google internal. Broader access promised later for paid Gemini API customers and Google AI Ultra. **No public model ID** as of 2026-09-30 (DataCamp / OmniaKey: do not assume `gemini-4-argon` is a live endpoint). Not on OpenCode Zen, OpenRouter, or models.dev catalogs. No Free ID.
- **Release / knowledge:** Announced 2026-09-30. Knowledge cutoff **no verified public date found**.
- **IDs:** None published. Folder slug `gemini-4-argon` is a tracker name only. No `opencode/` ID.
- **Context window:** 1M input (AA / Vals / recaps of Google). Advertised max output **1M** via Long Decode Continuation; Vals measured **262,144** max in a single request. Confirm the live API contract when an ID ships.
- **Modalities:** Text, image, video, audio, and files in; text out (The Decoder / AA recaps; Vals: text/image/video/file). Reasoning (Vals default effort `high`). Tools/agents in Fairwind cyber configs; Google is withholding general tool access while hardening safeguards.
- **Pricing (as of 2026-09-30):** Introductory **$2 / $10** per 1M in/out; cached input 95% off (~$0.10). After intro: **$4 / $20**. AA ~$1.99 per Intelligence Index task at intro. Vals catalog lists $4/$20. Paid; no free tier. Intro length unpublished — budget the $4/$20 rate for anything past a pilot.
- **Architecture:** Proprietary closed weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **57.4%** vendor; **57.1%** AA; **57.58%** ±2.31 Vals — behind Opus 5.5 66.4% / Sonnet 5.5 70.6% on the same family of numbers
- Terminal-Bench 2.1: **no verified public score found**
- Terminal-Bench-Science 0.1: **57.6%** vendor (6× verifier timeout); Vals Science **44.29%** — Astra leads vendor 68.1%
- Tau3-Banking / Tau2-Bench / Toolathlon: **no verified public score found**
- AutomationBench (Zapier): **51.3%** (vendor, first in Google’s table); AA AutomationBench **77.5%** (first, ~6 pts over Sonnet 5.5)
- GDPval-AA: **1611** Elo / **55.6%** (AA via BenchLM)
- AA-Briefcase: **1494** Elo
- OSWorld-2.0 offline subset: **69.2%**
- Agents’ Last Exam: **39.5%**
- Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: AA-HLE **57.1%** (BenchLM)
- AA-LCR: **79.7%**; CritPt **27.1%** (AA via BenchLM)
- Artificial Analysis Intelligence Index v4.3.2: **53** (The AI Rankings) / **52.6** (BenchLM) — tied with GPT-6 Astra, below Opus 5.5 58
- AA-Omniscience Accuracy / Hallucination Rate: **49.9% / 15.1%**; Index **42.4** (unusually low hallu vs peers)
- Vals Index: **68.90%** ±0.97 (Vals; Google also cites 68.9%, first Gemini to top it)
- LABBench 2: **88.8%**; RiemannBench: **76.0%** (vendor table)
- Harvey Legal Agent Bench: **19.6%** (still low absolute; leads Google’s comparison set)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- DeepSWE v1.1: **77.9%** (Google; SOTA vs Opus 5.5 74.2 / Astra 74.1 on the vendor table)
- LiveCodeBench: **no verified public score found**
- AA-SciCode: **61.8%**
- Vibe Code Bench: **91.9%** vendor; Vals v1.1 **91.91%** ±1.90
- FrontierSWE v2: **55.0–55.1%** (vendor / Proximal; Astra 65.5)
- PostTrainBench v1.1: **45.3%**
- ProgramBench (Vals): **2.50%** ±1.11 — extreme outlier vs other coding rows; treat as harness/config, not a coding cap by itself
- CWE-bench v1: **68%** (tie with Astra)

Long context:

- GraphWalks BFS F1: **99.7%** up to 128K; **84.2%** at 256K–1M (vendor) — not ≥98% at 512K+. AA-LCR **79.7%**.

Multimodal extras: LVBench **91.7%**; Chartography **71.6%** (no tools).

### Normalized scores (1–100)

- **Tool use: 85/100.** AA AutomationBench 77.5% and Zapier 51.3% lead published workflow tables; GDPval-AA 1611 is mid-high vs ~1750 frontier. Caps: TB4.0 ~57% trails Opus/Sonnet; no Tau3/Claw; Fairwind-only access so independent agent harnesses are thin.
- **Reasoning: 88/100.** AA-HLE 57.1% is above the 40%+ frontier band; Index 53 sits just under 60; Omniscience hallu 15.1% is a real honesty strength. Caps: no GPQA Diamond; CritPt 27.1; AA-LCR 79.7 vs 95%+.
- **Context window: 97/100.** 1M in plus advertised 1M out (≥1M tier). GraphWalks 99.7% to 128K is excellent. Not 100: 256K–1M GraphWalks **84.2%** and AA-LCR 79.7% are not ≥98% at 512K+; Vals single-request out 262K vs 1M continuation.
- **Multimodal: 94/100.** Image + video + audio/file in (90–100 band); LVBench 91.7 and Chartography 71.6. Caps: text-only output; CUA-bench **4.83%** on Vals.
- **Coding: 92/100.** DeepSWE 77.9 exceeds the 74%+ frontier ref; SciCode 61.8 and Vibe ~92 support it. Caps: no public SWE-Verified/Pro or LiveCodeBench; FrontierSWE v2 55%.
- **Cost efficiency: 70/100.** Scored on **introductory $2/$10** (same list band as Sonnet 5.5; AA ~$1.99/task). Caps: not $0; post-intro **$4/$20** would land near Opus 5.5 list (~55–60 if re-scored); 1M-output traces are expensive.
- **Overall Score: 91/100.** Mean of 85, 88, 97, 94, 92 = 91.2 → 91 half-up. Best-fit: Fairwind/internal long-horizon omni SWE and knowledge-work; **cannot be the default Zen pick** until a public ID exists; TB4.0/FrontierSWE still belong to closed rivals.

---

## Signature

- Provided by: **Grok 4.6 (x-ai/grok-4.6)** — 2026-10-01
- Method: public internet research (Google Gemini 4 Argon launch, DataCamp, BenchLM, Artificial Analysis recaps, Vals AI, The AI Rankings, OpenCode Zen catalog check); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
