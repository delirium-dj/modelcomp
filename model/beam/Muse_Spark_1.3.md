# Beam — findings by Muse Spark 1.3

- Source: Reflection/Beam, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Beam (Reflection AI, 501B-A23B)
- **Short description:** Reflection's first open-weight sparse MoE (501B total / 23B active) for coding, reasoning and agentic workloads; pretrained on 23.8T tokens + 100M RL rollouts, Apache 2.0 weights.
- **Provider / access:** Reflection API Platform, Hugging Face weights (BF16/FP8/NVFP4), partners; OpenCode Zen `opencode/beam` (Free limited-time tier).
- **Release / knowledge:** 2026-10-05 announcement (preview/waitlist), 2026-10-16 GA (Reflection blog); knowledge cutoff 2026-06-30 (model card)
- **IDs:** `opencode/beam` (Free Zen tier exists per repo metadata)
- **Context window:** 1,000,000 native (256K served on beta; 128K max output) — verified via Reflection model card + AA article
- **Modalities:** text in; text out only; reasoning yes; tool calls yes (MCP, browsing, Mirror CLI harness)
- **Pricing (as of 2026-10-17):** Free limited-time Zen / Command Code tier; Apache 2.0 self-host free; AA provider median ~$0.70/$2.10 per 1M
- **Architecture:** 501.3B total / 23.4B active sparse MoE (52 layers: 3 dense + 49 MoE, 256 experts, Gated GQA + sliding window, 152K vocab); Apache 2.0

### Raw benchmarks found

Agent / tool use:

- AA Intelligence Index: **30** (AA — #2 US open weights behind Muse Spark Open 39, ahead of Super VL 26; ~26k out/task, token-efficient)
- Terminal-Bench 2.1: **80.1% BF16 / 78.9% FP8 / 78.4% NVFP4** (Reflection model card + blog — near-lossless quantization)
- Terminal-Bench 4.0: **3.0%** (AA — weak lane vs Qwen3.8-27B 5.6%)
- AutomationBench (public): **37.0%** (Reflection); AA lane **48.5%** (AA — +11 over K2 Horizon, level with Qwen3.8-27B)
- MCP Atlas: **78.7%** (Reflection blog)
- Tau3-banking: **38.0%** (Reflection blog)
- BrowseComp w/ ctx-mgmt: **77.4%** (Reflection); DeepSearchQA w/ ctx-mgmt: **80.1%** (Reflection)
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **90.5–90.6%** (Reflection blog + model card BF16 90.6%)
- HLE no tools: **36.0–36.2%** (Reflection); HLE with tools: **51.1%** (model card, all numerics)
- AA-LCR: **no verified public score found** (closest: CritPt below)
- CritPt (CriPT AA): **16.3% BF16** (Reflection; AA lane 13.1% — 2x+ K2 Horizon/Qwen3.8-27B)
- AA-Omniscience: **accuracy 33%, hallucination 47%, net 1.5** (AA — knows more, guesses more vs K2 18%/26%)
- AIME 2026: **97.7–97.8%** (Reflection)
- AA-Briefcase: **976 Elo** (AA — weak lane)

Coding:

- SWE-bench Verified: **80.9–81.6%** (Reflection blog 80.9%, card BF16 81.6%)
- SWE-bench Pro v1: **65.5–66.1%** (Reflection); Pro v2-Hard: **76.5–77.2%** (Reflection)
- SWE Multilingual: **78.0–78.3%** (Reflection)
- LiveCodeBench: **88.3% BF16** (model card)
- SciCode: **49.2–49.7%** (Reflection)
- DeepSWE v1.1: **43.3–44.4%** (Reflection)
- SWE Atlas Codebase QnA: **31.8–34.6%** (Reflection)
- AA Coding Agent Index (Mirror harness): **28** (AA — 15 behind Qwen3.8-Max setup, frugal on tokens)
- Vibe Code Bench: **no verified public score found**

Long context:

- **1M native verified (256K served beta); context-mgmt lanes (BrowseComp 77.4%, DeepSearch 80.1%) support long-agent use; no standalone MRCR/RULER absolute found**

### Normalized scores (1–100)

- **Tool use: 86/100.** TB2.1 ~80% plus MCP Atlas 78.7%, AutomationBench-AA 48.5%, BrowseComp 77.4%, DeepSearch 80.1%, Index 30 (#2 US open); capped by TB4.0 3.0% and no Claw absolute.
- **Reasoning: 86/100.** GPQA ~90.5% plus HLE-tools 51.1%, AIME ~97.7%, CritPt 2x peers, Omniscience accuracy 33%; capped by HLE-no-tools ~36% and hallucination 47%.
- **Context window: 90/100.** 1M native verified but 256K served on beta (128K out); below full-native 1M-served tier.
- **Multimodal: 15/100.** Text in/out only; no image/video/audio (model card confirms text-only).
- **Coding: 88/100.** SWE-Verified ~81% plus Pro v2-Hard ~77%, Multilingual ~78%, LiveCode 88.3%, SciCode ~49%; capped by DeepSWE ~43% and SWE-Atlas ~32%.
- **Cost efficiency: 100/100.** Free Zen tier + Apache 2.0 self-host free ($0).
- **Overall Score: 73/100.** Mean (86+86+90+15+88)/5 = 73.0 → 73; best-fit open-weight text-only coding-agent pick where the multimodal 15 caps the mean.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3)** — 2026-10-17
- Method: public internet research (Reflection Beam announcement + model card, AA Beam article 2026-10-16); normalized interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
