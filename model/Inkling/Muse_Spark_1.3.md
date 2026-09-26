# Inkling — findings by Muse Spark 1.3

- Source: Thinking Machines Lab/Inkling (`opencode/Inkling`)
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling
- **Short description:** Thinking Machines Lab's first open-weights model (Jul 2026): a 975B/41B-active MoE transformer reasoning natively over text, images, and audio, trained from scratch on 45T tokens — a broad, balanced customization base rather than a benchmark-peak chaser. Top use case: fine-tunable open-weights multimodal agent base.
- **Provider / access:** Thinking Machines Lab (Tinker platform API + fine-tuning; Hugging Face `thinkingmachines/inkling`; NVIDIA NIM); OpenCode Zen ID `opencode/Inkling`.
- **Release / knowledge:** 2026-07-15 release (official model card; WIRED/TechCrunch/Fortune coverage); knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/Inkling` (Zen-hosted; open weights under Apache 2.0).
- **Context window:** Up to 1M tokens (official model card; Raschka notes 1,048,576). Tinker serves 64K/256K length options; 50% launch discount for a limited time.
- **Modalities:** Text, image, audio in (video frames in pretraining/architecture); text out; reasoning yes (controllable thinking effort, evals at effort=0.99); tool calls yes.
- **Pricing (as of 2026-07):** $1.87 input / $4.68 output per 1M (BenchLM compare record); open weights (Apache 2.0) allow self-hosting. Standard paid pricing on hosted routes.
- **Architecture:** 975B total / 41B active sparse MoE (66-layer decoder-only, 256 routed + 2 shared experts, 6 routed active/token), hybrid local-global attention, no RoPE (learned relative-position bias); Apache-2.0 open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (best harness): **63.8%** (official Inkling model card, effort=0.99; vs GLM-5.2 82.7%, GPT-5.6 Sol 89.5% on the same card)
- HLE with tools: **46.0%** (official model card; vs Fable 5 max 64.5%)
- BrowseComp: **77.1%** (BenchLM Grok-4.1-Fast vs Inkling compare page, verified 2026-07-18)
- MCP Atlas: **74.1%** (BenchLM compare page, verified 2026-07-18)
- Terminal-Bench 2.0: **63.8%** (BenchLM compare page — same value as the card's 2.1 best-harness figure)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **87.2%** (official model card; BenchLM AA-GPQA 87.2% corroborates; card also lists GPQA 87.9%)
- HLE (text only): **29.7%** (official model card; AA-HLE 29.7% corroborates)
- AIME 2026: **97.1%** (official model card)
- Global-MMLU-Lite: **88.7%** (NVIDIA NIM model card, from official HF scores)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **40.0% / 63.1%** (BenchLM compare page, AA-Omniscience — elevated hallucination noted)

Coding:

- SWE-bench Verified: **77.6%** (official model card)
- SWE-bench Pro (Public): **54.3%** (official model card)
- SWE-bench Verified, Inkling (Vals AI, by task difficulty): **86% / 75% / 57% / 33%** (Vals AI page, Sep 2026)
- AA-SciCode: **46.1%** (BenchLM compare page)
- AA Coding Index: **52.1** (BenchLM compare page)
- LiveCodeBench: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / other: **no verified public score found**

Long context:

- no long-context retrieval reported (1M window verified via model card; no public MRCR/RULER/GraphWalks number)

### Normalized scores (1–100)

- **Tool use: 82/100.** TB 2.1 63.8% (best harness) plus BrowseComp 77.1%, MCP Atlas 74.1%, and HLE-with-tools 46.0% form a solid verified agentic set; capped by no Tau/GDPval numbers and a clear gap to harness-tuned leaders (Sol 89.5%).
- **Reasoning: 84/100.** GPQA-D 87.2, AIME 2026 97.1, Global-MMLU-Lite 88.7 evidence strong reasoning; HLE text-only 29.7% and 63.1% omniscience hallucination rate cap it at 84.
- **Context window: 97/100.** Verified 1M window clears the ≥1M tier; held below 100 for lack of any published full-length retrieval measurement (and Tinker's 64K/256K serving options as caveat).
- **Multimodal: 90/100.** Native text/image/audio reasoning (VoiceBench 91.4%, MMMU Pro 73.3% per NIM card) hits the audio-in tier; text-only out keeps it at the tier floor of 90.
- **Coding: 84/100.** SWE-Verified 77.6% + SWE-Pro 54.3% + Vals splits (86/75/57/33) is a verified mid-upper coding profile; AA-SciCode 46.1% and missing LiveCode/DeepSWE numbers cap it at 84.
- **Cost efficiency: 82/100.** Hosted $1.87/$4.68 sits just above the ~$1.25/$4.25 (≈88) tier; Apache-2.0 self-hostability noted as upside, not scored.
- **Overall Score: 87/100.** Mean of the five non-cost dims (82 + 84 + 97 + 90 + 84) / 5 = 87.4 → 87; best fit as the premier open-weights multimodal agent base for teams that fine-tune.

---

## Signature

- Provided by: **Muse Spark 1.3 (Meta/muse-spark-1.3-contributor-free)** — 2026-09-26
- Method: public internet research (official Thinking Machines Inkling + Inkling-Small model cards and launch post, NVIDIA NIM card, Raschka architecture notes, BenchLM compare page, Vals AI SWE-bench page, WIRED/TechCrunch/Fortune launch coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
