# DeepSeek-V4-Flash-Vision-Exp — findings by GLM 5.3 Flash

- Source: DeepSeek (`deepseek-v4-vision-exp` — official HF checkpoint `deepseek-ai/DeepSeek-V4-Flash-Vision-Exp`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4-Flash-Vision-Exp
- **Short description:** DeepSeek's first experimental multimodal model in the V4 family — the text-only DeepSeek-V4-Flash architecture with visual modules bolted on and continued training to unlock vision. The model card claims "substantial improvements on multimodal agent capabilities while maintaining comparable performance on text-only agent tasks" vs the DeepSeek-V4-Flash-0731 baseline, and its official table shows it beating Claude Opus 4.8 on two of four multimodal agent benchmarks. Successor: DeepSeek-V4.1-Flash (HF, 2026-09-10) carries the line forward.
- **Provider / access:** self-host open weights (MIT). Not listed on OpenCode Zen; no Zen Free ID found. Served via vLLM (`vllm/vllm-openai:deepseekv4-flash-vision`, OpenAI-compatible Chat Completions with `--tool-call-parser deepseek_v4 --enable-auto-tool-choice --reasoning-parser deepseek_v4`) or SGLang (`--speculative-algorithm DSPARK` self-draft); single 4×GB300 node recipe published. No verified public API route or pricing found for the Exp checkpoint.
- **Release / knowledge:** HF repo created 2026-08-31 (API metadata); knowledge cutoff not stated in the card.
- **IDs:** `deepseek-ai/DeepSeek-V4-Flash-Vision-Exp` (Hugging Face). **No Free ID exists on OpenCode Zen.** OpenCode Zen folder slug `deepseek-v4-vision-exp` maps to this HF checkpoint.
- **Context window:** **1,048,576 tokens (1M)** — verified in `config.json`: `max_position_embeddings: 1048576` with YaRN (`factor: 16`, `original_max_position_embeddings: 65536`); KV-side compression fields (`compress_rope_theta: 160000`, per-layer `compress_ratios` cycling 4/128, `index_topk: 512` sparse-attention index) indicate the family's KV-cache-compression line (the 2026-09-17 Glonce story reports V4.1-Flash compressing KV cache 4× with a CED architecture). Max output / input split: not stated.
- **Modalities:** image + text in (`pipeline_tag: image-text-to-text`; vision encoder: 32 layers, dim 1024, 16 heads, patch 14, `vision_max_n_token: 384`, downsample ratio 3, `vision_max_wh_ratio: 8`), text out; reasoning yes (`reasoning-parser deepseek_v4`); tool calls yes; no audio/video/PDF-in mentioned. Vision token budget (≤384) is modest for a multimodal agent.
- **Pricing (as of 2026-09-17):** no verified public price — no DeepSeek API listing found for the Exp checkpoint; economics are self-host (weights MIT = no license fee; vLLM recipe targets a 4×GB300 node; FP8 activations + FP4 expert dtype cut VRAM).
- **Architecture:** MoE (`n_routed_experts: 256`, 6 active + 1 shared per token, `moe_intermediate_size: 2048`, hidden 4096, 43 layers + 3 hash + 3 nextn/MTP layers), DFlash attention + Hyper-Connections + DSpark speculative path (self-draft, block 5), native FP8 (`quant_method: fp8`, e4m3 dynamic) with FP4 experts; **MIT license**. Total/active parameter counts: not disclosed in config or card.

### Raw benchmarks found

> All numbers below are from DeepSeek's official model-card table (DeepSeek Harness, minimal mode, `max` reasoning effort, temp 1.0 / top_p 0.95) compared against DeepSeek-V4-Flash-0731 and Claude Opus 4.8 on the same card.

Agent / tool use:

- Terminal-Bench 2.1: **83.9%** (V4-Flash-0731: 82.7 / Opus-4.8: 85.0 — within 1.1 pts of Opus)
- Toolathlon-Verified: **75.9%** (70.3 / 76.2)
- Cybergym: **75.3%** (76.7 / 78.3)
- DSBench-Hard: **63.6%** (59.6 / 71.7 — largest agentic gap to Opus)
- NL2Repo: **57.7%** (54.2 / 69.7 — clearly behind Opus)
- AutomationBench (Public): **25.7%** (25.1 / 27.2)
- Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval / ClawProBench / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- ZeroBench (Pass@5, extreme visual reasoning): **35.0%** (baseline `-` / Opus-4.8: 34.0 — beats Opus)
- GPQA Diamond / HLE / LCR / MLCR / CritPt / AA Intelligence Index / BenchLM overall: no verified public score found — classic reasoning suites absent from the card and no third-party tracker coverage located
- Cybergym 75.3 (security/verification reasoning) is the closest text-side proxy

Coding:

- DeepSWE: **59.3%** (54.4 / 58.0 — beats Opus 4.8)
- NL2Repo: **57.7%** (54.2 / 69.7)
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found

Long context:

- MRCR / RULER / GraphWalks: no long-context retrieval reported — 1M window is config-verified but no published retrieval benchmark was found

Multimodal agent (the headline section):

- ApexBench (Pass@1): **36.5%** (0731: 26.2† / Opus-4.8: 39.4) — †0731 ignores multimodal inputs
- Agents' Last Exam: **27.3%** (25.2† / 25.7 — beats Opus 4.8)
- Chartography: **64.3%** (`-` / 65.0)
- ZeroBench (Pass@5): **35.0%** (`-` / 34.0 — beats Opus 4.8)

### Normalized scores (1–100)

> Independent derivation per the methodology in `../../model-comparison.md`; Overall = mean of the six.

- **Tool use: 92/100.** Official table puts it within ~1–4 pts of Claude Opus 4.8 on TB2.1 (83.9 vs 85.0), Toolathlon (75.9 vs 76.2) and AutomationBench, with native tool-call parsing; capped by DSBench-Hard 63.6 (−8.1 vs Opus) and NL2Repo 57.7 (−12.0).
- **Reasoning: 78/100.** Beats Opus 4.8 on ZeroBench Pass@5 (35.0 vs 34.0) and holds Cybergym 75.3, but GPQA/HLE/LCR are "no verified public score found" — the reasoning profile rests on agentic + visual-reasoning proxies only.
- **Context window: 90/100.** 1M tokens verified in `config.json` (`max_position_embeddings: 1048576`, YaRN 64K→1M) plus a KV-compression lineage; capped one tier below the 100s because no MRCR/RULER/GraphWalks-style retrieval evidence exists.
- **Multimodal: 85/100.** Real image-input model with four multimodal agent benchmarks, beating Opus 4.8 on two (Agents' Last Exam 27.3, ZeroBench 35.0); capped by the ≤384-token vision budget, no PDF/audio/video input, and text-only output.
- **Coding: 86/100.** DeepSWE 59.3 beats Opus 4.8 (58.0) and TB2.1 83.9 is elite, but NL2Repo 57.7 (Opus: 69.7) and missing SWE-bench Verified/LiveCodeBench coverage cap it below the SWE-V-verified elite.
- **Cost efficiency: 82/100.** MIT open weights (no license fee) with FP8/FP4 serving paths and self-draft DSpark; no $0 hosted tier and no verified API price — self-host GPU cost (4×GB300-class recipe) and the Exp-checkpoint uncertainty keep it off 90+.
- **Overall Score: 86/100.** Mean: (92 + 78 + 90 + 85 + 86 + 82) / 6 = 513/6 = 85.5 → **86**. Best fit: the best self-hostable multimodal *agent* of its moment — text-agent strength of V4-Flash plus genuinely competitive vision, ideal for MIT-licensed multimodal automation; not for teams that need a hosted API or verified classic reasoning benchmarks.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-09-17
- Method: fresh public internet research from zero (DeepSeek API docs and release notes, official V4-Flash-Vision-Exp launch comparison table, Hugging Face checkpoint/config.json, BenchmarkList, DataLearner benchmark pages, ai-tldr model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
