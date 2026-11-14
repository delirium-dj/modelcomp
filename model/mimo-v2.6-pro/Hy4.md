- Source: Xiaomi/Xiaomi MiMo-V2.6-Pro
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xiaomi MiMo-V2.6-Pro
- **Short description:** Xiaomi's 2026-09-22 open-weight **omni-modal** flagship — the first MiMo model supporting text, image, video and audio input, positioned as a reasoning model for complex projects, long-horizon tasks, high-value work, cybersecurity and research. A distinct model; MiMo-V2.6-Flash is its sibling and the Ultraspeed mode is a serving profile, not a separate model.
- **Provider / access:** Xiaomi MiMo Open Platform and Xiaomi MiMo Desktop; onboarded to WorkBuddy on 2026-10-20. On 2026-10-21 the older `mimo-v2.5-pro` / `mimo-v2.5` were retired and replaced by `mimo-v2.6-pro` / `mimo-v2.6-flash`. Weights, RL research and the MiMo-V2.6-Distill-Qwen-9B distillation (7K+ task environments, end-to-end RL framework, composable agent framework) were open-sourced.
- **Release / knowledge:** 2026-09-22 (RL post-training livestream 2026-09-17); knowledge cutoff: no verified public score found.
- **IDs:** `mimo-v2.6-pro`, with `mimo-v2.6-pro-ultraspeed` as the serving profile. No free Zen ID verified.
- **Context window:** RL training supports **1M context length** with 3.5–3.7B tokens per training step; a production inference window figure is not separately stated — reported as a training-time capability, not an inferred API limit.
- **Modalities:** **text, image, video and audio in**, text out; native omni-modal understanding extended to 3D world construction, Blender modelling, embodied intelligence and digital content creation (interactive game generation, 3D assets, robotic-arm control, web/Figma/slides/video/music creation); native tool calling and web search; multi-agent collaboration.
- **Pricing (as of 2026-11-14):** V2.6 keeps the V2.5 API rate card — **¥3 / 1M input tokens, ¥6 / 1M output tokens** for Pro (Flash ¥1 / ¥2), with a **99% cache discount**. Artificial Analysis measured a **$0.13 single-task cost**.
- **Architecture:** Pretraining architecture and parameter count unchanged from V2.5 (exact figures not published in the retrieved page); open weights. RL post-training took ~**6 days** over ~**750,000 trajectories**, with 1,568 samples per update, at a training cost of ~**$2.62M** for Pro (~$0.85M Flash, ~$3.47M combined). Frozen router to suppress training drift; reward-hacking defences across reward design, adversarial evaluation, anomaly detection and verifier cross-checks.

### Raw benchmarks found

Agent / tool use:

- Long-horizon software-engineering benchmark: **72.57**, up from **58.4** for the previous generation
- Design Arena: results reported (no exact score published in the retrieved page)
- Code Arena: **#3 among open-weight models**, tied with the high-tier Claude Fable 5 configuration
- Native tool calling, web search and multi-agent collaboration; "Co-Scientist" workflow (literature/patent review, hypothesis generation, novelty assessment, simulation environment setup) cut a ~1-month R&D cycle to **2–3 days**, ~**10x** efficiency
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Artificial Analysis composite Intelligence Index: **46** — **highest-ranked open-weight model** on the index at the time, above Kimi K3 (**44**) and GLM-5.3 (**45**), and **+20** over MiMo-V2.5-Pro's **26**
- Lean 4 formalisation of the original main theorem of Li–Yorke's "Period Three Implies Chaos": **6,000+ lines** of Lean source, all proofs kernel-verified, no placeholders, with **no Lean-specific post-training**
- GPQA Diamond / HLE / LCR / CritPt / Omniscience: no verified public score found

Coding:

- Long-horizon software engineering **72.57** (from 58.4) as above; Code Arena **#3** among open weights
- Terminal-Bench / SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 1M-token **RL training** context with 3.5–3.7B tokens/step and long-horizon task gains; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 90/100.** A big long-horizon SWE jump (58.4→72.57), native tool/web use, multi-agent collaboration, and a real 10x "Co-Scientist" R&D acceleration; capped by no scored τ-bench/OSWorld/GDPval/Terminal-Bench figure.
- **Reasoning: 89/100.** The top open-weight AA Intelligence Index score (46, +20 over its predecessor) and a complete, kernel-verified Lean 4 formalisation of a classic theorem with no specialised training; capped by 46 being well below the 65-point closed frontier and no GPQA/HLE numbers.
- **Context window: 91/100.** 1M-context RL training with 3.5–3.7B tokens/step and explicit long-horizon optimisation; capped by no verified production inference window and no retrieval benchmark.
- **Multimodal: 96/100.** True native text + image + video + audio omni-modal input, uniquely extended to 3D/Blender/robotics/game/Figma/video/music creation — the broadest modality coverage in this comparison set; capped only by text-centric output documentation.
- **Coding: 90/100.** 72.57 long-horizon SWE and #3 open-weight Code Arena; capped by no SWE-bench Verified / Terminal-Bench figure and an AA index of 46.
- **Cost efficiency: 97/100.** ¥3/¥6 per 1M with a 99% cache discount and AA's record **$0.13 per task** ("first to bring frontier intelligence into the $0.1 range"), plus free open weights; the best value in this comparison set. Excluded from Overall.
- **Overall Score: 91/100.** Half-up mean of 90, 89, 91, 96, 90 = 91.2 → 91. Best fit: cost-sensitive omni-modal agent workloads, 3D/content generation and open-weight self-hosting where the $0.13/task economics matter more than top-5 closed-frontier reasoning.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Xiaomi MiMo-V2.6-Pro article (release, modalities, pricing, AA index with comparand scores, long-horizon SWE 58.4→72.57, RL training details, Lean 4 formalisation, Co-Scientist case study, Code Arena rank). The 1M-context figure is explicitly labelled training-time rather than a verified production API window. The Ultraspeed mode is treated as a serving profile of the same model, not a separate model. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [Xiaomi MiMo-V2.6-Pro — 百度百科 (omni-modal specs, AA index, pricing, RL, Lean 4, benchmarks)](https://baike.baidu.com/item/Xiaomi%20MiMo-V2.6-Pro/69122572)
  - [MiMo-V2.6 — 百度百科 (series context, Pro/Flash lineup)](https://baike.baidu.com/item/MiMo-V2.6/69089987)
