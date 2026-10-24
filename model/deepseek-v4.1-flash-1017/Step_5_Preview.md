# DeepSeek V4.1 Flash 1017 — findings by Step 5 Preview

- Source: DeepSeek (`deepseek-v4.1-flash-1017`)
- Date: 2026-10-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4.1-Flash-1017
- **Short description:** DeepSeek's 17 Oct 2026 minor update to DeepSeek-V4.1-Flash — a 552B/16B-active open-weights MoE with a 1M context window and image input, aimed at agentic coding at the low end of the cost curve.
- **Provider / access:** DeepSeek API (`https://platform.deepseek.com`), OpenAI-compatible. Also served through 22 API providers (Artificial Analysis provider list) and self-hostable — MIT-licensed weights on Hugging Face (`deepseek-ai/DeepSeek-V4.1-Flash-1017`). Not currently listed in the OpenCode Console catalog, which carries the base `deepseek-v4.1-flash` / `deepseek-v4.1-flash-free` IDs rather than this snapshot.
- **Release / knowledge:** released 2026-10-17 (models.dev and Artificial Analysis both date it to that day; Hugging Face community tab references the V4.1 tech report). Knowledge cutoff not disclosed in the model card.
- **IDs:** `deepseek-ai/DeepSeek-V4.1-Flash-1017` (Hugging Face weights) / `deepseek/deepseek-v4.1-flash-1017` (models.dev). A $0 lane exists for the *base* DeepSeek V4.1 Flash on OpenCode Zen (`opencode/deepseek-v4.1-flash-free`, free for a limited time, zero-retention) — no free ID was verified for the 1017 snapshot specifically.
- **Context window:** 1,000,000 tokens (1M) total. Official card recommends `max_tokens` ≥ 256K; models.dev records 384,000 max output for this snapshot.
- **Modalities:** text and image in; text out. Reasoning model; tool calling and structured output both `Yes` on models.dev.
- **Pricing (as of 2026-10-24):** $0.30 per 1M input / $1.20 per 1M output on DeepSeek's own API, with a 98% cache discount (Artificial Analysis). models.dev records $0.00/$0.00 because the weights are open and several hosts serve them free; the Zen catalog lists the base V4.1 Flash Free at $0 for a limited time.
- **Architecture:** MoE, **552B total / 16B active** per Artificial Analysis. Conflicting figure: the Hugging Face repo's safetensors summary reads **763B params**. MIT license, fully open weights, HF pipeline tag `image-text-to-text`, fp8/bf16 tensors.

### Raw benchmarks found

All figures below are from DeepSeek's own model card (V4.1-Flash-1017 column) unless a different source is named.

Agent / tool use:

- Automation-Bench v1.0.6: **60.5%** (DeepSeek model card; the prior V4.1-Flash scored 54.8%, GPT-5.6 Sol 45.8%, Claude Opus 5 50.3%)
- NL2Repo-Bench: **68.2%** (DeepSeek model card; prior 65.4%, GPT-5.6 Sol 56.8%, Opus 5 75.3%)
- Apex Bench v1.1: **72.1%** (DeepSeek model card; prior 64.6%, GPT-5.6 Sol 54.3%, Opus 5 65.8%)
- Agents' Last Exam: **35.4%** (DeepSeek model card; prior 31.8%; Opus 5 only 28.6% — a relative strength)
- Chartography (w/tools): **83.0%** (DeepSeek model card; GPT-5.6 Sol 79.9%, Opus 5 84.0%)
- ZeroBench-main (w/tools): **51.0%** (DeepSeek model card; GPT-5.6 Sol 53.0%)
- BabyVision (w/tools): **92.5%** (DeepSeek model card; GPT-5.6 Sol 88.9%, Opus 5 94.1%)
- Terminal-Bench 4.0: **42.3%** (DeepSeek model card, Claude Code harness) — confirmed independently at 42.3% by the Hugging Face `harborframework/terminal-bench` leaderboard and by AA's model page, so this number is triple-sourced.
- Tau3-Banking / Tau2-Bench: no verified public score found.
- GDPval-AA: no verified public score found for this snapshot.
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- HLE without tools: **42.6%** (DeepSeek model card; text-only subset 44.0%). Independently confirmed at 42.6% by the Hugging Face `cais/hle` leaderboard. Comparators on the same card: GPT-5.6 Sol 44.5%, GLM-5.3 42.0, K3 43.5, Opus 5 56.3.
- Artificial Analysis Intelligence Index v4.3: **45** at max effort (Artificial Analysis; #2 of 121 in its open-weights size class; the class median is 19).
- ZeroBench-main: 51.0% above (multimodal reasoning with tools).
- GPQA Diamond: no verified public score found.
- LCR / MLCR: no verified public score found.
- CritPt: no verified public score found.
- AA-Omniscience accuracy / hallucination rate: no verified public score found.

Coding:

- DeepSWE v1.1: **77.0%** (DeepSeek model card, Mini-SWE-V2 harness; independently confirmed at 77% by the Hugging Face `datacurve/deep-swe` leaderboard). Comparators: Opus 5 74.0%, GPT-5.6 Sol 73.0%, GLM-5.3 66.9%, K3 67.5%. This clears the project's 74% frontier reference.
- Terminal-Bench 4.0: 42.3% above (agentic coding).
- NL2Repo-Bench: 68.2% above (repo-level generation).
- ProgramBench: **29.1%** (DeepSeek model card; Opus 5 37.0%) — the weakest coding figure, and a known hard program-synthesis harness.
- SciCode / AA-SciCode: no verified public score found.
- LiveCodeBench: no verified public score found.
- SWE-bench Verified / SWE-Pro: no verified public score found.
- Vibe Code Bench: no verified public score found.

Long context:

- MRCR / RULER / GraphWalks: no verified public score found. The 1M window is documented by DeepSeek, AA and models.dev, but no retrieval-durability figure at a stated length was published.

Speed / cost (context for cost scoring):

- Output speed: **195.2 tokens/second** (Artificial Analysis, #8 of 78 in class), TTFT **1.14 s** (very competitive; class median 1.72 s).
- Cost per Artificial Analysis Intelligence Index task: **$0.26** (Artificial Analysis, #22 of 43 in class).
- Verbosity is a real caveat: **210M output tokens** across the Index, against a class median of 140M — very verbose (Artificial Analysis). The model card itself claims the 1017 update *reduces* output length versus V4.1-Flash, so the AA figure measures a genuinely talkative model even after that improvement.

### Normalized scores (1–100)

- **Tool use: 71/100.** NL2Repo-Bench 68.2% and Apex Bench 72.1% are solidly mid-frontier and Chartography-w/tools 83.0% is strong, but Terminal-Bench 4.0 at 42.3% (triple-sourced) sits well below the frontier band and GDPval-AA is unpublished. Capped below 80 by the terminal-agent gap; the $0.26 cost per task and 195 tok/s throughput make it unusually efficient per unit of agentic throughput.
- **Reasoning: 74/100.** HLE 42.6% without tools clears the project's 40% frontier reference and the AA Intelligence Index of 45 is #2 in its open-weights size class, but that index is roughly 7 points below Muse Wonder's 52 and well below the 60+ frontier threshold, and GPQA/CritPt are unpublished. Agents' Last Exam 35.4% (already ahead of Opus 5's 28.6%) keeps it from scoring lower.
- **Context window: 98/100.** 1,000,000-token window with ≥256K recommended max output (models.dev records 384,000) sits at the top of the ≥1M tier. Not 100 because no MRCR/RULER retrieval figure at 512K+ was published to confirm durability — the window is documented, retrieval quality is not.
- **Multimodal: 65/100.** Text and image input, text-only output, confirmed by both the HF pipeline tag (`image-text-to-text`) and AA's modality table; BabyVision 92.5% and ZeroBench 51.0% show genuinely competitive vision reasoning. Held in the 60–70 band by the methodology (+image in) because there is no video, audio or PDF input and no non-text output.
- **Coding: 85/100.** DeepSWE v1.1 at 77.0% (double-sourced) beats the project's 74% frontier reference and edges Opus 5's 74.0%, and NL2Repo-Bench 68.2% shows real repo-level capability. ProgramBench 29.1% and Terminal-Bench 4.0 42.3% are the caps — this is a strong DeepSWE-class coding model, not an all-harness frontier one.
- **Cost efficiency: 95/100.** $0.30/$1.20 per 1M with a 98% cache discount and a measured $0.26 per Intelligence Index task — far cheaper per task than any proprietary frontier model, and roughly a fifth of Muse Wonder's $4.52. Only the very high verbosity (210M output tokens, 1.5x class median) keeps this from the 97–99 band reserved for ~$0.10/$0.20 pricing.
- **Overall Score: 79/100.** Mean of the five quality dims (71 + 74 + 98 + 65 + 85 = 393 ÷ 5 = 78.6 → 79). Best fit: the value pick for self-hosted or cheap-API agentic coding and long-context document work — reach for it when DeepSWE-class coding at $0.26 per task matters more than terminal-agent depth.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-24
- Method: public internet research across three independent source families (DeepSeek's official Hugging Face model card, Artificial Analysis's model page, and models.dev, plus two Hugging Face dataset leaderboards that independently re-measure Terminal-Bench 4.0 and DeepSWE); scores are normalized 1–100 interpretations, not official vendor scores.
- Research note: conflicts recorded inline rather than resolved silently — parameter count (763B on the HF safetensors summary vs 552B/16B active on Artificial Analysis), and per-task cost ($0.00 on models.dev for open-weights hosting vs $0.26 measured on DeepSeek's paid API).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
