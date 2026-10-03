# GLM 5.3 — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / GLM 5.3
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3
- **Short description:** Z.ai's open-weights coding/agentic flagship — same base model as GLM-5.2 with every gain from post-training; "most capable open-weights model for coding" per Z.ai, with emergent cyber capabilities (SOTA on CyberGym).
- **Provider / access:** Z.ai (Zhipu AI) — Z.ai Zen API (paid; no Free ID); open weights on Hugging Face (zai-org/GLM-5.3) and ModelScope under a custom "glm-5.3" license (near-MIT; adds a security-review clause for Model-as-a-Service providers with >$10B aggregate revenue over 12 consecutive months — not OSI open source). GLM-5.3-Flash (320B-A18B) ships under plain MIT.
- **Release / knowledge:** Launched 2026-08-14; open weights released 2026-08-25 (three days ahead of Z.ai's self-imposed two-week deadline; NIST dates it "two weeks later"; HF repo created 2026-08-27). Knowledge cutoff not stated in captured sources.
- **IDs:** `opencode/glm-5.3` (repo meta.json); `GLM-5.3` (HF/ModelScope); arXiv 2602.15763 technical report ("GLM-5: from Vibe Coding to Agentic Engineering").
- **Context window:** 1M tokens (exercised at 1M across the ALE, FrontierSWE, PostTrainBench, SWE-Marathon and NL2Repo evaluations).
- **Modalities:** Text in; text out (reasoning model; `reasoning_effort` accepts low/high/max, default max; `clear_thinking` defaults to false).
- **Pricing (as of 2026-10):** Zen paid $1.40 input / $4.40 output per 1M; cached read $0.26 per 1M.
- **Architecture:** Sparse MoE — 744B total / 40B active (official README; repo meta.json says 753B/40B — discrepancy noted), FP8 and BF16 checkpoints; local deployment via SGLang, vLLM, TokenSpeed, Transformers, KTransformers, Unsloth, and Ascend NPU frameworks.

### Raw benchmarks found

Z.ai launch table (z.ai/blog/glm-5.3 + zai-org/GLM-5.3 HF README). Columns: GLM-5.3 | GLM-5.2 | Kimi K3 | DeepSeek-V4 Pro-0813 | Qwen3.8-Max | Opus 4.8 | Fable 5 (w/ fallback) | GPT-5.6 Sol:

Coding / agentic:

- Terminal-Bench 2.1 (Claude Code 2.1.207, temp 1.0, top_p 1, 65536 max output, 6h timeout): **88.2** | 81.0 | 88.3 | 87.9 | 86.6 | 85.0 | 88.0 | 88.8.
- Terminal-Bench 3.0 (Claude Code 2.1.207, reasoning effort=max, 400K ctx, 128K output, avg@3, 600-turn cap, 10h timeout, Tool Search disabled): **28.3** | 4.6 | 17.4 | – | – | 21.1 | 33.7 | 34.6 — open-weights SOTA.
- DeepSWE v1.1 (mini-swe-agent, temp 0.95, top_p 1.0, 6h timeout, 400K ctx): **66.9** | 46.2 | 67.5 | 62.7 | 56.6 | 58.0 | 69.7 | 72.7.
- NL2Repo (temp 1.0, top_p 1.0, 64K max output, 1M ctx, anti-hack judging): **58.0** | 48.9 | 58.0 | 61.1 | 55.9 | 69.7 | – | –.
- ProgramBench Almost Solved: **19.0** | 9.5 | 17.5 | – | 10.5 | 15.5 | 33.0 | 23.0.
- FrontierSWE (Proximal, 1M ctx, max effort, 128K output, dominance score as of 2026-08-14): **78.1** | 67.5 | – | – | – | 66.5 | 88.2 | –.
- SWE-Marathon v1.1 (Claude Code 2.1.207, max effort, temp 1.0, top_p 0.95, 128K output, 1M ctx): **42.5** | 19.4 | 48.1 | – | – | 48.8 | 33.1 | 42.5.
- PostTrainBench (Claude Code 2.1.207, max effort, temp 1.0, top_p 1.0, 128K output, 1M ctx, weighted avg of 3 runs, zero-shot base fallback): **39.8** | 31.7 | 32.0 | – | – | 32.9 | 41.8 | 36.2.
- Z.ai Code Bench (in-house): **+50% vs GLM-5.2** (no absolute score published).

Tool use / agentic:

- Toolathlon Verified (official service, pass@1 averaged over 3 runs): **73.0** | 59.9 | 76.5 | 74.1 | 72.5 | 76.2 | 74.7 | 74.9.
- AutomationBench v1.0.6: **48.2** | 26.2 | 46.7 | 43.2 | 39.8 | 41.0 | 46.2 | 45.8 — best in table.
- Agents' Last Exam ALE-CLI (official protocol, Claude Code harness, reasoning effort=max, 1M ctx, 64K output, 105 tasks in isolated Docker, default 4h timeout up to 8h, Tool Search disabled): **28.5** | 23.8 | 27.6 | 25.7 | 27.0 | 25.7 | 23.8 | 28.6.
- GDPval-AA v2 (evaluated by Artificial Analysis): **1769** | 1508 | 1682 | 1590 | 1739 | 1588 | 1743 | 1730 — best in table.

Reasoning:

- HLE w/ Tools (temp 1.0, top_p 0.95, 163,840 max generation, 300K max context with context management, GPT-5.6-luna (medium) judge): **62.5** | 54.7 | 59.8 | 60.0 | 56.2 | 57.9 | 63.9 | 64.5.
- GPQA Diamond, HLE no-tools, AIME, AA Intelligence Index: no verified public score found.

Cyber (Z.ai table + independent assessments):

- CyberGym (Claude Code 2.1.207, max reasoning, no web tools, temp 1.0, top_p 1.0, 128K max output, unlimited timeout, single-run Pass@1 over 1,507 tasks, agent inside task container, git info removed, domain whitelist): **84.5** | 77.2 | 80.0 | 83.3 | 78.5 | 78.1 | 83.8 | 83.6 — SOTA.
- ExploitGym (same harness; single-run Pass@1 on 869 tasks; 2h/6h budgets are API inference time rescaled by per-model TPS — GLM-5.3 at 115 TPS, Kimi K3 40, Qwen3.8-Max 47 — plus non-API overhead; domain whitelist): **105 / 130** | 29 / 39 | 36 / 70 | – | 14 / 26 | 80 / 120 | 181 / 247 | 216 / 293. (Z.ai measured only GLM-5.3, Kimi K3 and Qwen3.8-Max; the Fable 5 and GPT-5.6 Sol figures in the row come from elsewhere.)
- ExploitBench (Claude Code 2.1.207, max effort, same sampling; ≤300 interaction rounds; average coverage over 41 tasks × 3 revisions): **54.4** | 24.4 | 32.2 | – | 28.8 | 40.0 | 78.0 | 76.5.
- NIST CAISI assessment (2026-09-17): SEC-Bench Pro **40.4%** (74/183; US frontier best 90.2%, PRC frontier best 27.3%); ExploitBench **61.1%** (9.8/16, best of three attempts; US frontier 100%); ExploitGym Userspace **9.4%** (47/498; US frontier 44.4%, PRC 2.6%). CAISI: "the most cyber-capable open-weight model released to date", lagging the US frontier by ~4 months on its aggregate cyber index.
- Anthropic analysis (2026-09-29): ExploitBench (V8 engine) end-to-end exploits **50/410** (Claude Mythos Preview: 56/410); internal Binary Exploitation benchmark (OSS-Fuzz projects, full control-flow hijack): **4%** of 100 tasks (Mythos Preview 6%; Opus 4.6 and GLM-5.2: 0%). Anthropic also found GLM-5.3's safeguards bypassable 64–100% of the time with simple techniques, and that ablating the model (~2,200 GPU-hours, ~$4,400) cut refusal rates from >90% to ~3%/2%/12% on JailbreakBench/HarmBench/StrongREJECT with no GPQA-Diamond capability loss.

### Normalized scores (1–100)

- **Tool use: 75/100.** GDPval-AA v2 1769 is the best score in Z.ai's table (ahead of Fable 5's 1743), AutomationBench 48.2% leads, Toolathlon Verified 73.0% is mid-frontier (Kimi K3 76.5%), ALE-CLI 28.5 is second only to GPT-5.6 Sol.
- **Reasoning: 72/100.** HLE with tools 62.5% is frontier-tier (Fable 5: 63.9%; GPT-5.6 Sol: 64.5%), but no GPQA, HLE-no-tools or AIME score is published, so the reasoning picture rests on a single tool-assisted benchmark.
- **Context window: 95/100.** 1M context, exercised at 1M in five separate evaluations (ALE, FrontierSWE, PostTrainBench, SWE-Marathon, NL2Repo).
- **Multimodal: 15/100.** Text-only model — no image/video/audio input.
- **Coding: 75/100.** Terminal-Bench 2.1 88.2% and FrontierSWE 78.1% are second-only-to-GPT-5.6-Sol/Fable-5 class; TB 3.0 28.3% is open-weights SOTA; DeepSWE 66.9%, SWE-Marathon 42.5% and PostTrainBench 39.8% are third in table; Z.ai claims +50% on its in-house Code Bench vs GLM-5.2.
- **Cost efficiency: 88/100.** $1.40/$4.40 per 1M (cached read $0.26) undercuts every closed frontier model; open weights (custom license) allow zero-license-cost self-hosting at 744B/40B scale.
- **Overall Score: 66.4/100.** Mean of the five quality dimensions. The text-only Multimodal floor (15) and single-source reasoning evidence are the main drags; the folder's peer average (74.3) is higher.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03
- Method: public internet research (web search and direct model-card/page fetches); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
