# GLM-5.3 — findings by DeepSeek 4.1 Flash

- Source: Z.ai (Zhipu AI) / GLM-5.3 (`opencode/glm-5.3`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3. No "Free" wording — proprietary API model, no Zen Free ID.
- **Short description:** Z.ai's flagship reasoning MoE, post-trained over the same base as GLM-5.2; Z.ai attributes every gain to scaled post-training. Aimed at agentic coding and long-horizon work with a 1M-token window — text-only, no vision.
- **Provider / access:** proprietary; Z.ai first-party API (also reachable through the GLM Coding Plan / ZCode); in this project tracked as the paid Zen entry `opencode/glm-5.3`. OpenAI-compatible Chat Completions.
- **Release / knowledge:** released 2026-08-14, succeeded GLM-5.2 (2026-06-16); API list pricing went live 2026-08-19 (The Model Gap). Knowledge cutoff not disclosed.
- **IDs:** `opencode/glm-5.3` (no Free ID; `noFreeId: true` in `meta.json`).
- **Context window:** 1,000,000 tokens with a 128K maximum output length (The Model Gap). No published long-context retrieval measurement.
- **Modalities:** text in, text out; always-on thinking (low / high / max reasoning effort) that can no longer be disabled — a breaking API change versus GLM-5.2. No image, audio or video input.
- **Pricing (as of 2026-09-25):** $1.40 in / $4.40 out per 1M, cached input $0.26 — identical to GLM-5.2 (The Model Gap; matches this folder's `meta.json`).
- **Architecture:** MoE, 753B total / ~40B active parameters (project `meta.json`, Z.ai MoE family); proprietary, weights not released.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.2%** (Z.ai launch chart) vs **83.9%** (Artificial Analysis independent run) — a 4.3-pt gap that is inside the benchmark's 10.6-pt noise band, so it is not a caught exaggeration
- DeepSWE: **66.9%** (Z.ai) vs **69%** (deepswe.datacurve.ai independent, rank #4 of 18) — inside the noise band
- Toolathlon-Verified: vendor-only run (still not independently reproduced as of 2026-08-26); absolute value not captured in the sources reviewed
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld: no verified public score found
- Agents' Last Exam: **28.5** on the 105-task ALE-CLI split (vendor) — a different metric from the 1,000-item overall pass rate, so it is not comparable with other ALE rows

Reasoning / knowledge:

- GPQA Diamond: **91.7%** (Artificial Analysis independent; the benchmark is graded saturated on The Model Gap, so it separates nothing)
- HLE (no tools): **42.3%** (Artificial Analysis independent)
- LiveBench (overall): **76.1** (LiveBench independent run)
- Artificial Analysis Intelligence Index / CritPt / LCR: no verified figure captured in the sources reviewed
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- SWE-bench Verified: **95.40%** (vals.ai independent; graded saturated — recorded, not used for ranking)
- LiveCodeBench: **80.53%** (vals.ai independent)
- DeepSWE: **69%** (deepswe.datacurve.ai, rank #4/18) / 66.9% vendor
- SciCode / Vibe Code Bench / Terminal-Bench 2.0: no verified public score found

Long context:

- No MRCR / RULER / AA-LCR result reported for GLM-5.3 in the sources reviewed; the 1M window is listing-level only.

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 83.9–88.2% is at the top of the mid band and just under the 88%+ frontier reference, and DeepSWE 69% shows long-horizon coding-agent competence; the unverifiable Toolathlon row and missing Tau3/GDPval numbers keep it from the 90s.
- **Reasoning: 90/100.** GPQA Diamond 91.7% meets the 90%+ frontier anchor and HLE 42.3% (no tools) meets the 40%+ reference, with LiveBench 76.1 in support — the score is capped by the saturated GPQA row and the lack of an independent intelligence-index figure.
- **Context window: 95/100.** A 1M window is the 95–100 tier; no retrieval measurement at 512K+ exists, so 100 is unsupported.
- **Multimodal: 15/100.** Text-only in/out by design (Z.ai publishes no vision or audio path) — the 10–20 band, not a defect but a hard capability ceiling.
- **Coding: 84/100.** SWE-bench Verified 95.40% (saturated) and DeepSWE 69% (trending toward the 74% frontier ref) with LiveCodeBench 80.53% justify low-to-mid 80s; SciCode and Vibe Code Bench are unpublished.
- **Cost efficiency: 87/100.** $1.40/$4.40 with $0.26 cached reads sits just above the $1.25/$4.25 = 88 anchor and well above the $3/$15 = 60 anchor; unchanged-versus-5.2 pricing limits upside.
- **Overall Score: 74/100.** (88 + 90 + 95 + 15 + 84) / 5 = 74.4 → 74. Best fit: large-scale agentic coding and long-context engineering work — frontier-grade reasoning and a 1M window at mid-tier pricing, with zero multimodal capability.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-09-25 UTC
- Method: public internet research (The Model Gap verified-record page, Z.ai launch comparisons as reported there, deepswe.datacurve.ai, vals.ai, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
