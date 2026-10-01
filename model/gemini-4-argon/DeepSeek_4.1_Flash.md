# Gemini 4 Argon — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind/Gemini 4 Argon
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon (Google DeepMind frontier flagship; paid, gated availability — no free tier)
- **Short description:** Google's next-era frontier flagship (announced 2026-09-30 by SVP Koray Kavukcuoglu), succeeding Gemini 3. Google reports it beats GPT-6 Astra on 13 of 18 published benchmarks, led by software engineering, cyber defense and long-video understanding, and it sharply raises the output limit. Ground-up independent reproduction is still pending.
- **Provider / access:** Google DeepMind Gemini API (AI Studio / Vertex) once GA; initially limited to select cyber-defense teams in the "Fairwind" program, then paid API customers and Google AI Ultra subscribers. No public API id/endpoint at launch (OrcaRouter reports it is not callable yet).
- **Release / knowledge:** Announced 2026-09-30; knowledge cutoff not disclosed.
- **IDs:** No public model id published at launch (this repo's `meta.json` placeholder uses `opencode/gemini-4-argon`); no OpenCode Zen Free ID.
- **Context window:** 1,000,000-token input; output limit raised to **1,000,000 tokens** (from 64K) per launch coverage — both ends at the 1M band.
- **Modalities:** text, image and video in, text out; long-horizon reasoning with chain-of-thought monitoring; tool use. (LVBench video comprehension 91.7%.)
- **Pricing (as of 2026-09-30):** introductory $2.00 / 1M input, $10.00 / 1M output, $0.10 / 1M cached input; rises to $4.00 / $20.00 after the introductory period — roughly a fifth of GPT-6 Astra's $10/$50 at intro pricing.
- **Architecture:** proprietary; no parameter count published. Includes misalignment monitoring and hardened sandboxes (vendor).

### Raw benchmarks found

Agent / tool use:

- AutomationBench: **51.3%** — 1st place, above Claude Opus 5.5 (42.5%) (Google / VentureBeat via Basic Tutorials, 2026-10-01)
- OSWorld 2.0 offline (max): **within 2.1 points of GPT-6 Astra** (Google, vendor-reported)
- Terminal-Bench Science 0.1: **57.6%** — behind GPT-6 Astra (68.1%) (VentureBeat)
- Terminal-Bench 2.1 / Tau3-Banking / GDPval-AA / Claw-Eval / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GraphWalks (long context): **84.2%** vs GPT-6 Astra 71.8% (VentureBeat)
- Vals Finance: **65.4%** vs GPT-6 Astra 53.5% (VentureBeat)
- Artificial Analysis Intelligence Index (top effort): **52.6** (OrcaRouter, 2026-09-30)
- GPQA Diamond / HLE / LCR / CritPt: **no verified public score found**

Coding:

- DeepSWE v1.1: **77.9%** — claimed new SOTA, above GPT-6 Astra (74.1%) and Opus 5.5 (74.2%) (Google, vendor-reported; not reproduced outside Google)
- CWE-Bench v1 (security): **68%** — tied with GPT-6 Astra (VentureBeat)
- FrontierSWE v2: **55.0%** — behind GPT-6 Astra (65.5%) (VentureBeat)
- SWE-bench Verified / LiveCodeBench / SciCode: **no verified public score found**

Long context:

- GraphWalks **84.2%** at long context; no MRCR/RULER figure found.

### Normalized scores (1–100)

- **Tool use: 90/100.** AutomationBench 51.3% leads the field and OSWorld 2.0 trails only Astra; capped by vendor-only sourcing and a trailing Terminal-Bench Science 57.6%.
- **Reasoning: 88/100.** GraphWalks 84.2% and Vals Finance 65.4% lead GPT-6 Astra, with AA Index 52.6 comparable to it; capped by missing independent GPQA/HLE.
- **Context window: 95/100.** 1M input and a headline 1M output limit is the widest documented band in this dataset; held just under 100 by an undisclosed output caveat and unverified retrieval at full length.
- **Multimodal: 80/100.** Text, image and video input with best-in-class video comprehension (LVBench 91.7%); no audio input reported.
- **Coding: 90/100.** DeepSWE v1.1 77.9% would be SOTA and beats Astra, but the figure is vendor-reported and FrontierSWE v2 (55.0%) trails Astra — hence not 95+.
- **Cost efficiency: 70/100.** Intro $2/$10 undercuts Astra ~5×, but the post-intro $4/$20 doubles the bill, there is no free tier, and availability is gated.
- **Overall Score: 89/100.** Mean of the five quality dims (90+88+95+80+90)/5 = 88.6 → 89. Best-fit: frontier software engineering, cybersecurity defense and long-video/knowledge work once GA — pending independent reproduction.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-01
- Method: public internet research (Google DeepMind launch blog, Basic Tutorials/VentureBeat summary, OrcaRouter analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
