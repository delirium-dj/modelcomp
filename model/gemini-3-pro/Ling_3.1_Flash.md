# Gemini 3 Pro — findings by Ling 3.1 Flash

- Source: Google DeepMind (`google/gemini-3-pro`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google DeepMind's Gemini 3 era flagship (Preview, launched 2025-11-18) — state-of-the-art reasoning and natively multimodal capability at launch, topped LMArena (1501 Elo) and WebDev Arena (1487 Elo); Gemini 3 Deep Think mode extends reasoning further (GPQA 93.8%, HLE 41.0%, ARC-AGI-2 45.1%).
- **Provider / access:** Gemini API / Google AI Studio, Vertex AI, Gemini app; thinking_level and media_resolution controls tune cost/latency. No free API ID on OpenCode Zen (`noFreeId`); paid-tier pricing.
- **Release / knowledge:** 2025-11-18 (Preview). Knowledge cutoff not stated in the launch materials reviewed; benchmarks span capabilities as of November 2025.
- **IDs:** `google/gemini-3-pro` (API model-id `gemini-3-pro-preview`).
- **Context window:** 1M tokens input / 65K output; prompts over 200K bill at the long-context rate.
- **Modalities:** text, image, audio, video, PDF in; text out (natively multimodal sparse MoE).
- **Pricing (as of 2026-10-02):** $2.00/$12.00 per 1M input/output for prompts ≤200K; $4.00/$18.00 above 200K; context caching and Batch API reduce costs further.
- **Architecture:** proprietary sparse MoE, natively multimodal; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **54.2%** (vendor launch, Terminus 2 harness) / **56.9%** (high thinking, per Gemini 3.1 Pro comparison table)
- SWE-bench Verified: **76.2%** (single-attempt bash+file-tools scaffolding, averaged over 10 runs)
- SWE-bench Pro: **43.3%** (high thinking, comparison table)
- Terminal-Bench Hard: **41.7%** (Artificial Analysis, 2026-02-16)
- WebDev Arena: **1487 Elo** (top at launch)
- Claw-Eval / ClawProBench / GDPval-AA / Agents' Last Exam: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.9%** (Pro, default) / **90.8%** (AA, 2026-02-16) / **93.8%** (Deep Think)
- Humanity's Last Exam (no tools): **37.5%** (Pro) / **41.0%** (Deep Think) / **45.8%** (with search+code, high thinking)
- MathArena Apex: **23.4%** (state-of-the-art at launch)
- ARC-AGI-2 (code execution, ARC Prize Verified): **31.1%** (Pro, high) / **45.1%** (Deep Think)
- SimpleQA Verified: **72.1%**
- LMArena: **1501 Elo** (top at launch)
- MMMU-Pro: **81%** (GDM-computed via official APIs)

Coding:

- LiveCodeBench Pro: **2439 Elo** (#2 on the public leaderboard at launch)
- SWE-bench Verified: **76.2%** (above)
- WebDev Arena: **1487 Elo** (above)
- DeepSWE / SciCode / AA Coding Index / Vibe Code Bench: no verified public score found

Long context:

- 1M-token window; MRCR v2 (128K): **84.9%** (high thinking, comparison table); no 512K+ retrieval figure published

Multimodal:

- Video-MMMU: **87.6%** (GDM-computed); MMMU-Pro 81% (above); ScreenSpot-Pro / CharXiv / OmniDocBench: computed by GDM but figures not captured in the sources reviewed

### Normalized scores (1–100)

- **Tool use: 68/100.** Terminal-Bench 2.0 54.2–56.9% and TB Hard 41.7% sit in the mid band (45–60% → 50–70), with SWE-bench Verified 76.2% and WebDev Arena 1487 Elo (launch-era toppers) as offsets; SWE-bench Pro 43.3% and the 2026 agentic benchmarks (GDPval-AA, ALE) are unpublished.
- **Reasoning: 85/100.** GPQA Diamond 91.9% (93.8% Deep Think) clears the 90%+ frontier bar and HLE reaches 41.0% (Deep Think) / 45.8% (with search+code) against the 40%+ bar; the no-tools HLE of 37.5%, MathArena Apex 23.4% and ARC-AGI-2 31.1% (45.1% Deep Think) cap the score.
- **Context window: 95/100.** 1M-token window; MRCR v2 84.9% at 128K but no ≥98% retrieval-at-512K+ figure, so 100 is not justified.
- **Multimodal: 92/100.** text/image/audio/video/PDF in with text out — the +audio-in band (90–100), corroborated by MMMU-Pro 81% and Video-MMMU 87.6%.
- **Coding: 80/100.** LiveCodeBench Pro 2439 Elo (#2 at launch), SWE-bench Verified 76.2% and WebDev Arena 1487 Elo were launch-era toppers, but by 2026-10 references (DeepSWE 74%+, TB 85%+, SciCode 55%+, Coding Index 70%+) only SWE-bench Verified remains competitive; TB2.0 54.2–56.9% and SWE-bench Pro 43.3% cap the score.
- **Cost efficiency: 72/100.** $2/$12 per 1M (≤200K) interpolates between the ~88 ($1.25/$4.25) and ~60 ($3/$15) references to ~72; the >200K rate ($4/$18) drops to ~56 for long requests; no free tier.
- **Overall Score: 84/100.** (68+85+95+92+80)/5 = 84.0 — a November-2025 frontier model: still top-band GPQA/multimodal/context, but its launch-era agentic-coding leads (TB2.0 54.2%, SWE-bench Pro 43.3%) have been overtaken by 2026 releases.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02
- Method: public internet research (Google DeepMind Gemini 3 launch, DeepMind evals methodology, Artificial Analysis, AI/TLDR, LLM Registry, Model Beats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.md`, using the same headings.
