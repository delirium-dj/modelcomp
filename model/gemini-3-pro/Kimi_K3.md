# Gemini 3 Pro — findings by Kimi K3

- Source: Google / Gemini 3 Pro (`gemini-3-pro`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google's Gemini 3-generation Pro flagship, succeeded by Gemini 3.1 Pro (Feb 2026) and Gemini 4 Argon (Sep 2026). Broad multimodal strength (video/docs); the new rows below come from the Thinking (High) configuration in Google's own comparison tables (my 2026-09-24 pass measured the non-reasoning base config — conflict noted).
- **Provider / access:** Google Gemini API (`gemini-3-pro`), Vertex AI, AI Studio.
- **Release / knowledge:** 2026 (exact date not verified); cutoff not verified.
- **IDs:** `google/gemini-3-pro` (OpenCode Data stub page exists with zero usage; no Free-tier ID verified on Zen).
- **Context window:** third-party trackers (benchlm.ai) list 2M input — not confirmed on Google's own pages; the official 3.1 Pro comparison table probes MRCR v2 at 128K and 1M only; output limit not verified.
- **Modalities:** text/image/video in (VideoMMMU measured); text out; reasoning via Thinking configs (High measured in official tables); tool calls; JSON mode.
- **Pricing (as of 2026-10-11):** no verified public price found in my sources; Pro-tier pricing — provisional.
- **Architecture:** proprietary (Google DeepMind).

### Raw benchmarks found

Agent / tool use:

- τ2-bench (official, Thinking High): Retail **85.3%**, Telecom **98.0%** (deepmind.google 3.1 Pro comparison table; third-party composite 87.1% — benchlm.ai)
- MCP Atlas: **54.1%** (official table, new this pass); APEX-Agents: **18.4%** (official table, new)
- BrowseComp: **59.2%** (official table, new)
- Terminal-Bench 2.0 (Terminus-2 harness): **56.9%** (official table, new — fills my earlier TB gap)
- GDPval-AA: **1195 Elo** (official table, new — fills my earlier GDPval gap)
- Gert Labs: **63.2%**; JobBench: **11.4%** (benchlm.ai)
- Claw-Eval / Toolathon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.9%** (official table, Thinking High; benchlm.ai had AA 90.8%)
- Humanity's Last Exam: **37.5%** no tools / **45.8%** Search+Code (official table; benchlm.ai AA-HLE 39.7% consistent)
- ARC-AGI-2 (ARC Prize Verified): **31.1%** (official table; matches benchlm.ai)
- MMMLU: **91.8%** (official table, new); AA MMLU-Pro: **89.8%** (benchlm.ai)
- AA-LCR: **76.0%**; CritPt: **9.1%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **28.0**; BenchLM overall **61.01/100, #40 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **55.8% / 91.5%** — accurate when answered, but hallucination-prone (benchlm.ai)
- Global-MMLU-Lite: **92.2%**; FrontierMath v2: **37.6%** T1–3 / **18.8%** T4; AA-IFBench: **70.4%** (benchlm.ai)

Coding:

- SWE-Bench Verified (single attempt): **76.2%** (official table, new this pass — fills my earlier zero-SWE-bench gap)
- SWE-Bench Pro (Public): **43.3%** (official table, new)
- LiveCodeBench Pro: **Elo 2439** (official table, new); AA LiveCodeBench: **91.7%** (benchlm.ai)
- SciCode: **56%** (official table, new)
- Vibe Code Bench: **14.3%** (benchlm.ai)

Long context:

- MRCR v2 (8-needle): **77.0%** at 128K average; **26.3%** at 1M pointwise (official 3.1 Pro comparison table, new this pass — measured max-window retrieval is weak)
- AA-LCR 76.0% (benchlm.ai); no RULER/GraphWalks rows.

Multimodal:

- MMMU-Pro: **81.0%** no-tools (official table; matches benchlm.ai AA 80.2%)
- VideoMMMU: **87.6%**; V*: **88.0%**; MathVision: **86.6%**; CharXiv: **81.4%**; ScreenSpot Pro: **72.7%** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 78/100.** Raised from 74: official τ2 (85.3/98.0), MCP Atlas 54.1, TB 2.0 56.9% and GDPval-AA 1195 fill the two earlier gaps; still capped by Jobs/APEX-style rows (JobBench 11.4%, APEX-Agents 18.4%) and below-par GDPval vs the 1500+ frontier cohort.
- **Reasoning: 77/100.** Raised from 74: official GPQA 91.9%, HLE 37.5/45.8%, MMMLU 91.8% are flagship-adjacent for the 3.0 generation; capped by ARC-AGI-2 31.1%, CritPt 9.1%, hallucination 91.5%.
- **Context window: 84/100.** Lowered from 92: the "2M window" is third-party-only, and official MRCR v2 now shows 77.0% @128K / 26.3% @1M pointwise — usable but far from the 90+ retrieval tier.
- **Multimodal: 90/100.** Unchanged: excellent breadth (VideoMMMU 87.6%, MathVision 86.6%, V* 88%, official MMMU-Pro 81.0%); text-only output caps it.
- **Coding: 78/100.** Raised from 70: official SWE-Bench Verified 76.2%, SWE Pro 43.3%, LCB Pro 2439, SciCode 56% replace the earlier zero-SWE cap; Vibe Code Bench 14.3% still drags.
- **Cost efficiency: 60/100.** Unchanged: Pro-tier flagship pricing expected; still unverified.
- **Overall Score: 81/100.** Mean of the five quality dims (78+77+84+90+78)/5 = 81.4 → 81 (raised from 80). Best fit: multimodal-heavy analysis (video/doc corpora); for hard reasoning prefer Gemini 3.1 Pro or 4 Argon.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-11
- Method: fresh public web research (official deepmind.google Gemini 3.1 Pro model-page comparison table incl. the "Gemini 3 Pro Thinking (High)" column — new SWE-Bench Verified/Pro, LCB Pro, SciCode, MCP Atlas, APEX, GDPval, BrowseComp, MRCR v2 rows; OpenCode Data `google/gemini-3-pro` stub; benchlm.ai scorecard). Second pass over my 2026-09-24 file: official Thinking-High numbers replace my base-config-only gaps; conflict between "2M window" (third-party) and official 1M MRCR probing noted, scored on the measured retrieval. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
