# Inkling — findings by Muse Glimmer 30B

- Source: Thinking Machines Lab/Inkling (`opencode/Inkling`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling
- **Short description:** Thinking Machines Lab's first open-weights MoE for self-hosted fine-tuning. 975B total / 41B active, Apache 2.0, 1M context, multimodal text/image/audio in, text out. Built as a customization base rather than a benchmark peak-chaser.
- **Provider / access:** OpenCode Zen `opencode/Inkling`; Hugging Face `thinkingmachines/Inkling`; OpenRouter `inkling:free`; NVIDIA NIM build; self-host Apache 2.0 weights.
- **Release / knowledge:** 2026-07-15 release (official model card, July 2026 launch coverage). Knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/Inkling` (Zen-hosted); `thinkingmachines/Inkling` (HF weights)
- **Context window:** 1,000,000 total tokens (weights). Hosts serve 64K–1M; no verified public long-context retrieval curve published.
- **Modalities:** Text, image, audio in; text out. Reasoning controllable (eval at effort=0.99). Tool calls supported.
- **Pricing (as of 2026-10-20):** Hosted ~$1.00 input / $4.05 output per 1M tokens (Artificial Analysis, Thinking Machines API). $0 self-host routes exist via open weights / OpenRouter free tier. Apache 2.0 allows self-hosting.
- **Architecture:** 975B total / 41B active sparse MoE, 66-layer decoder-only, 256 routed + 2 shared experts, 6 experts active per token, hybrid local-global attention. Apache 2.0 open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Best Harness): **63.8** (official model card, effort=0.99; 2026-07-14 comparison table)
- MCP Atlas: **74.1%** (official model card)
- BrowseComp (w/ Ctx): **77.1%** (official model card)
- HLE with tools: **46.0%** (official model card)
- Tau 3 Banking: **23.7%** (official model card)
- GDPVal-AA v2: **1233** Elo (official model card)
- Terminal-Bench 2.1 vs leaders: GLM 5.2 82.7%, GPT 5.6 Sol 89.5% on same card
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: MCP Atlas listed above; no separate Toolathon score found

Reasoning / knowledge:

- GPQA Diamond: **87.2%** (official model card)
- HLE (text only): **29.7%** (official model card)
- HLE (with tools): **46.0%** (official model card)
- AIME 2026: **97.1%** (official model card)
- Global-MMLU-Lite: **88.7%** (NVIDIA NIM card / HF scores)
- IFBench: **79.8%** (official model card)
- Artificial Analysis Intelligence Index: **25** (Artificial Analysis, Inkling xhigh, 2026-07)
- AA Omniscience: **1.0%** index / Accuracy 41.6% measured (Artificial Analysis)
- CritPt: no verified public score found

Coding:

- SWE-bench Verified: **77.6%** (official model card)
- SWE-bench Pro (Public): **54.3%** (official model card)
- Terminal-Bench 2.1: **63.8** (see Tool use)
- AA-SciCode: no verified public score found on model card; 46.1% reported on BenchLM mirror
- LiveCodeBench: no verified public score found on model card
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- MRCR / RULER / GraphWalks: no verified public score found (1M window verified via model card; no published retrieval curve)

### Normalized scores (1–100)

- **Tool use: 68/100.** TB 2.1 63.8 + MCP Atlas 74.1% + BrowseComp 77.1% show solid agentic capability; capped by Tau3 Banking 23.7% and GDPVal 1233 Elo below frontier 1750+.
- **Reasoning: 82/100.** GPQA Diamond 87.2% and AIME 2026 97.1% are strong; HLE text-only 29.7% and AA Intelligence Index 25 cap the score.
- **Context window: 97/100.** Verified 1M weights window clears ≥1M tier; held below 100 for lack of published full-length retrieval measurement and host-serving limits.
- **Multimodal: 92/100.** Native text/image/audio in with text out; VoiceBench 91.4%, MMMU Pro 73.5%, MMAU 77.2% support multimodal tier; text-only output keeps at audio-in tier floor.
- **Coding: 78/100.** SWE-Verified 77.6% and SWE-Pro 54.3% plus TB 63.8 show mid-upper coding; SciCode/DeepSWE not verified on card, limiting ceiling.
- **Cost efficiency: 85/100.** Hosted $1.00/$4.05 per 1M is above median for open-weight class; free self-host via Apache 2.0 improves effective cost, but evaluated hosted tier remains paid.
- **Overall Score: 83/100.** Mean of five quality dims (68 + 82 + 97 + 92 + 78) / 5 = 83.4 → 83; best fit as a capable open-weights multimodal agent base with strong reasoning peaks and self-host value.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research (Hugging Face model card thinkingmachines/Inkling, Artificial Analysis model page, NVIDIA NIM card, official evaluation table 2026-07-14); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
