# MiMo v2.6 Pro — findings by GPT 5.5

- Source: Xiaomi/MiMo v2.6 Pro
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo v2.6 Pro
- **Short description:** Xiaomi MiMo v2.6 Pro is an open-weight reasoning/coding MoE model with very low API pricing, large context, and strong vendor coding claims.
- **Provider / access:** Xiaomi MiMo API, OpenRouter/Requesty/Vercel-style routers, and open weights via XiaomiMiMo.
- **Release / knowledge:** Released/open-sourced around 2026-09-21.
- **IDs:** `xiaomi/mimo-v2.6-pro`, `mimo-v2.6-pro`
- **Context window:** About 1.048M input tokens with 128K-131K max output.
- **Modalities:** Text, image, video, and audio input are reported by The Model Gap for the HuggingFace model card; text output.
- **Pricing (as of 2026-10-05):** AI IQ and The Model Gap report about $0.43-$0.435/M input and $0.87/M output.
- **Architecture:** Sparse MoE, about 1.02T total parameters / 42B active, MIT/open weights.

### Raw benchmarks found

Agent / tool use:

- Xiaomi MiMo release notes: reports MiMo-V2.6-Pro's DeepSWE v1.1 improved from **58.4** to **72.6** after RL, with 30 training steps and about 750,000 trajectories across the V2.6 series (`https://mimo.mi.com/docs/en-US/news/latest/v2-6`).
- The Model Gap: tracks five benchmark scores for MiMo-V2.6-Pro, two independent and three vendor-claimed (`https://themodelgap.com/models/mimo-v2-6-pro`).
- Vals AI: lists MiMo V2.6 Pro in its benchmark suite (`https://www.vals.ai/models/xiaomi_mimo-v2.6-pro`).
- Terminal-Bench 2.1: **no verified public score found**

Reasoning / knowledge:

- BenchLeader: describes MiMo-V2.6-Pro as a Xiaomi open-weights reasoning model released 2026-09-21 (`https://www.benchleader.com/models/mimo-v2-6-pro`).
- Artificial Analysis community comparison: users cite Intelligence Index **46** for Pro versus 39 for DeepSeek V4.1 Flash, but this was seen via Reddit discussion rather than direct AA page text.
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**

Coding:

- DeepSWE v1.1: **72.6** after RL per Xiaomi release notes.
- Reddit/open benchmark discussion: reports Xiaomi's own 14-benchmark table has MiMo Pro winning 3 and tying 1 against Opus 5, but real-world users report mixed coding reliability.
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**

Long context:

- Requesty and ModelBench report about 1.0M context and 131K max output; no independent retrieval score found.

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong low-cost agent/coding claims and benchmark-suite presence, capped by mixed real-world tool-call feedback.
- **Reasoning: 78/100.** Good for an open-weight budget model, but community reports suggest benchmarks may overstate general reasoning.
- **Context window: 90/100.** 1M+ context and 128K output are excellent.
- **Multimodal: 88/100.** Reported text/image/video/audio input coverage is broad.
- **Coding: 87/100.** DeepSWE 72.6 is strong, capped by mixed implementation reliability reports.
- **Cost efficiency: 97/100.** Sub-$1/M output and cheap input are outstanding for a 1T-class model.
- **Overall Score: 85/100.** Mean of the five quality dimensions; best fit is budget long-context coding experiments where retries and validation are acceptable.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
