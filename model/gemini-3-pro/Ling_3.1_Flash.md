# Gemini 3 Pro — findings by Ling 3.1 Flash

- Source: Google DeepMind (`google/gemini-3-pro`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google DeepMind's Gemini 3 era flagship (Preview, launched 2025-11-18) — state-of-the-art reasoning and natively multimodal capability at launch, topped LMArena (1501 Elo) and WebDev Arena (1487 Elo); Gemini 3 Deep Think mode extends reasoning further (GPQA 93.8%, HLE 41.0%, ARC-AGI-2 45.1%).
- **Provider / access:** Gemini API / Google AI Studio, Vertex AI, Gemini app; thinking_level and media_resolution controls tune cost/latency. No free API ID on OpenCode Zen (`noFreeId`); paid-tier pricing.
- **Release / knowledge:** 2025-11-18 (Preview). Knowledge cutoff **January 2025** (DeepMind model card, updated May 2026) — nearly two years old at research time, a real limitation for factual/current-affairs work.
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

## Update 2026-10-08 (6-day re-research)

SciCode figure and methodology confirmations found (DeepMind's Gemini 3.1 Pro comparison table and evals-methodology pages):

- SciCode: **56%** (sourced from Artificial Analysis per DeepMind's stated methodology) — fills the SciCode gap; sits just above the 55% frontier reference
- Methodology confirmations: Terminal-Bench 2.0 from the public leaderboard (Terminus 2 harness); SWE-bench Verified single-attempt (bash tool + file operations + submit), averaged over 10 runs; LiveCodeBench Pro Elo from the public leaderboard; MMMU-Pro GDM-computed via official APIs
- Still no verified public score for: DeepSWE, AA Coding Index, Vibe Code Bench, Claw-Eval / ClawProBench, GDPval-AA, Agents' Last Exam, and 512K+ retrieval (MRCR v2 128K 84.9% remains the deepest published figure)
- No score change: SciCode 56% corroborates Coding 80 (it edges the 55% reference while TB 2.0 54.2–56.9% and SWE-bench Pro 43.3% remain the caps)

---

## Update 2026-10-10 (deep second pass, 3 independent searches)

**Scores unchanged: Tool 68 / Reasoning 85 / Context 95 / Multimodal 92 / Coding 80 / Cost 72 / Overall 84.** New data and flags this pass:

- **Deprecation flag (operational):** `gemini-3-pro-preview` was **shut down 2026-03-09** (Gemini API docs) — migrate to `gemini-3.1-pro-preview`. The model remains reachable via Vertex/Gemini Enterprise channels, but the original Preview API ID is dead; the 3.1 Pro comparison table is the live reference.
- **AA Intelligence Index v4.3.2: 28 (estimated)** for Preview (High) — #103/227, 26th of 697 models; Preview (Low) 22. Marked "Estimate (independent evaluation forthcoming)" — AA has not yet run its own v4.3.2 evaluation, so treat as provisional. For scale: at launch (2025-11-18) Gemini 3 Pro **led the then-current Index**, debuting +3 points above GPT-5.1, first in 5 of 10 evals (GPQA Diamond, MMLU-Pro, HLE, LiveCodeBench, SciCode) and first in AA-Omniscience (both Index and Accuracy) — another large benchmark-revision effect (launch-era ~58 → current estimate 28), not a capability regression.
- **Launch-era detail recovered:** premium pricing ($2/$12 ≤200K, $4/$18 ≥200K) made it among the most expensive models to run the Index (12% costlier than 2.5 Pro despite better token efficiency); HLE 37% at launch improved on the prior best by 10+ points; "factual recall correlates closely with model size… may point to Gemini 3 Pro being a much larger model than its competitors" (AA).
- **SWE-bench Verified, independent read:** the SWE-bench team's own evaluation (mini-swe-agent, zero prompt tuning, 2025-11-19) put Gemini 3 Pro Preview at **74%** — top of the board at the time, ~4 points clear of the next model — vs the vendor's 76.2% (single-attempt bash+file scaffolding, 10-run mean). Harness gap explains the 2.2-point spread; both sit in the same band, so Coding 80 stands. Cost in that eval: 1.6× GPT-5 (still cheaper than Sonnet 4.5); Gemini iterates a lot — median ~50 steps, flattening only past 100, so resolution rate trades directly against step budget.
- **Model card (May 2026 update) confirmations:** sparse MoE, natively multimodal (text/vision/audio inputs), TPU-trained (Pods), not a fine-tune of a prior model; family includes Gemini 3 Pro Image, 3 Flash, 3.1 Pro/Flash, 3.5 Flash; Deep Think mode safety profile consistent with default; known limitations include hallucinations and occasional slowness/timeouts. Scale SWE-Bench Pro leaderboard lists `gemini-3-pro-preview` (value not captured in the snippet reviewed; `gemini-3.1-pro (thinking)` reads 46.10±3.60 there).
- **Score impact:** none — the new reads (Index 28 estimate, SWE-bench 74% independent, cutoff Jan 2025) all land inside existing bands or are flagged as estimate/operational notes.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08, 2026-10-10)
- Method: public internet research (Google DeepMind Gemini 3 launch, DeepMind model card and evals methodology, Gemini API docs, Artificial Analysis, SWE-bench team, Scale SWE-Bench Pro); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.md`, using the same headings.
