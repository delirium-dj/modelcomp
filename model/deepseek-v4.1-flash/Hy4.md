- Source: DeepSeek/DeepSeek-V4.1 Flash
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4.1 Flash
- **Short description:** DeepSeek's 2026-09-10 smallest model in its new model-structure series, with native multimodal vision and dramatically reduced KV-cache requirements. A distinct model; **V4.1-Flash-1017** (2026-10-17) is a later in-place version update, and the older V4 Flash / V4 Flash Vision Exp / V4 Pro IDs are routed here for compatibility. `deepseek-v4.1-flash-1017` is a separately tracked folder in this dataset.
- **Provider / access:** DeepSeek API (model name `deepseek-flash`), DeepSeek web/App (unified "smart mode" auto-detects query complexity and enables vision on image input), National Supercomputing Internet (API + downloadable weights), DeepSeek Harness v0.1.5; official partners Tencent WorkBuddy / CodeBuddy and OpenCode.
- **Release / knowledge:** 2026-09-10 (1017 update 2026-10-17); knowledge cutoff: no verified public score found.
- **IDs:** `deepseek-flash` (API); legacy `deepseek-v4-flash`, `deepseek-v4-flash-vision-exp`, `deepseek-v4-pro` route here. No free Zen ID verified.
- **Context window:** no verified token figure in the retrieved page — no verified public score found. The article documents long-context research (MRCR-style phase sensitivity) but not a model window spec.
- **Modalities:** text and image in, text out; **native multimodal visual understanding without an external vision module**; agent/tool use with caching, file upload and sidebar preview via Harness v0.1.5. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** **peak/off-peak (峰谷) pricing**, off-peak = half of peak; from 2026-09-10 12:00 the **off-peak** rates are **¥0.02 / 1M input tokens (cache hit), ¥1 / 1M input (cache miss), ¥4 / 1M output**. Peak rates are double those figures. A SuperCLUE evaluation recorded ¥1.86 per task. Open weights available for local deployment.
- **Architecture:** **552B total MoE** with an asymmetric **Causal-Encoder-Decoder** structure — **8B active on input, 16B active on output**; new pretraining method and larger-scale RL post-training. KV-cache reduction: HBM need down to **1/4**, SSD need to **1/8** of the previous generation, and **437x smaller** than the first-generation model. Runs on gaming GPUs per internal tests.

### Raw benchmarks found

Agent / tool use:

- SuperCLUE agentic terminal-programming Chinese evaluation (Claude Code harness fixed): **50.51** at **¥1.86/task**, with standout time efficiency across the full task flow
- Terminal-Bench 3.0: **30.0** — below Claude Opus 5's 43.3 and GPT-5.6 Sol's 34.4
- DeepSWE v1.1, CyberGym and Automation-Bench: tests reported (no exact figures in the retrieved page)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.9**
- Artificial Analysis Intelligence Index: **39** — above GPT-6 Luna's 37
- HLE / LCR / MLCR / CritPt / Omniscience: no verified public score found

Coding:

- Terminal-Bench 3.0 **30.0** and SuperCLUE **50.51** as above; launch coverage reports agentic benchmarks surpassing DeepSeek V4 Pro, GLM-5.3 and Kimi-K3 (directional; no per-benchmark numbers)
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench / FrontierSWE: no verified public score found

Long context:

- A ByteDance Seed arXiv preprint (arXiv:2609.36322, late Sep 2026) found that chunked KV-cache compression introduces a "token phase" positional coordinate, causing **phase sensitivity**: retrieval accuracy for identical information can differ by up to **40 percentage points** between compression-window stages, so average benchmark scores can mask periodic weaknesses — a documented long-context caveat, not a model score
- MRCR / RULER / GraphWalks: no verified public score found

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong time efficiency and a 50.51 SuperCLUE agentic-terminal score at ¥1.86/task, native tool use with caching and broad partner integration; capped by a weak 30.0 Terminal-Bench 3.0 and no τ-bench/OSWorld/GDPval figure.
- **Reasoning: 87/100.** GPQA Diamond 90.9 with a 552B MoE at 8B/16B active params; capped by a low AA Intelligence Index 39 and no HLE/LCR numbers.
- **Context window: 84/100.** A 437x KV-cache reduction that materially lowers long-context serving cost; capped by no verified token window and the documented phase-sensitivity weakness (up to 40-point retrieval swings).
- **Multimodal: 85/100.** Native (no add-on module) visual understanding automatically activated on image input; capped by text-only output, no verified audio/video input, and no published multimodal benchmark score.
- **Coding: 85/100.** Launch claims of beating V4 Pro / GLM-5.3 / Kimi-K3 on agentic benchmarks and a solid SuperCLUE terminal result; capped by 30.0 Terminal-Bench 3.0 and no SWE-bench figure.
- **Cost efficiency: 96/100.** Off-peak ¥0.02 cache-hit / ¥1 miss / ¥4 output per 1M with half-price idle windows, a 20% price cut, open weights, gaming-GPU inference and tiny KV cache — exceptional economics. Excluded from Overall.
- **Overall Score: 85/100.** Half-up mean of 85, 87, 84, 85, 85 = 85.2 → 85. Best fit: extremely high-volume, cost-sensitive agentic workloads and self-hosted deployments; verify long-context retrieval per compression stage before relying on it.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike DeepSeek-V4.1 Flash article (full peak/off-peak CNY pricing, 552B/8B/16B Causal-Encoder-Decoder architecture, KV-cache reductions, GPQA 90.9, AA 39, Terminal-Bench 3.0 30.0, SuperCLUE 50.51, 1017 version, phase-sensitivity preprint). The 1017 version is a separate tracked folder here and is not merged into this report. Directional launch claims without numbers are labelled as such; missing rows are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [DeepSeek-V4.1 Flash — 百度百科 (pricing, architecture, benchmarks, 1017 update)](https://baike.baidu.com/item/DeepSeek-V4.1%20Flash/68957496)
