# Qoder Sonus — findings by Nemotron_3.5_Super_VL_120B_A12B

- Source: Qoder (`sonus`), modelcomp.vercel.app, sonus.ai/blog/sonus-1, forum.qoder.com, docs.qoder.com, developer.aliyun.com, aivineet.com, llm-stats.com
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qoder Sonus (Sonus)
- **Short description:** Qoder's built-in model released Sep 10, 2026 — computer-operation specialized model for marathon-length autonomous tasks, hardest knowledge work, and serious coding. Built for Computer Use — drives desktop and pro software directly (writing code, building financial models, running research, producing spreadsheets). Available across Qoder family: Qoder, Qoder IDE, Qoder CLI, JetBrains plugin, QoderWake, Qoder Cloud Agents. Credit multiplier 3.2x (updated to 8x per Sep 21, 2026 notice — highest tier).
- **Provider / access:** Qoder built-in model (Qoder ecosystem only); not available as standalone API. Qoder Credits pricing; reference factor 3.2x → 8x.
- **Release / knowledge:** Released 2026-09-10; knowledge cutoff not publicly specified.
- **IDs:** `sonus` (Qoder model ID). No Free ID confirmed on OpenCode Zen (Qoder internal model, not on OpenAI API).
- **Context window:** 128,000 total tokens per modelcomp; Qoder CLI supports 200K/400K/1M context tiers for some models (not confirmed for Sonus specifically).
- **Modalities:** Text in/out per modelcomp; computer-use focused (drives desktop/pro software). Reasoning: yes. Tool calls: yes (computer use, tool operation). JSON mode: not explicitly documented. No vision/audio per modelcomp (text in/out only).
- **Pricing (as of 2026-10-29):** Qoder Credits; reference factor 8x (highest tier, Sep 21 2026); credit multiplier 3.2x per announcement. Per-token pricing not publicly disclosed (internal credit system).
- **Architecture:** Proprietary; parameter count not publicly disclosed.

### Raw benchmarks found

modelcomp agent ratings (4 reports, 79 Overall):
- Coding: **88/100** (highest-rated dimension per modelcomp)
- Terminal-Bench: **65%** (2 reports cite — attributed to Gemini 3.5 Flash Lite / Gemini 3.8 Flash, likely misattributed)
- SWE-bench Verified: **74.5%** (2 reports cite — same attribution concern)

Sonus-1 family (sonus.ai, aivineet.com — different model family from Qoder Sonus, may be related):
- MMLU: **90.15%** (Sonus-1 Pro w/ Reasoning)
- MMLU-Pro: **73.1%**
- MATH-500: **91.8%**
- GSM-8k: **97.0%**
- GPQA-Diamond: **67.3%**
- DROP: **88.9%**
- HumanEval: **90.0%** / **91.3%**
- LiveCodeBench: **51.9%**
- Aider-Edit: **72.6%**

Conflicts noted: modelcomp's "benchmarks with agreement" (Terminal-Bench 65%, SWE-bench Verified 74.5%) are attributed to Gemini 3.5 Flash Lite / Gemini 3.8 Flash agent reports — likely misattributed, not verified Sonus benchmarks. Sonus-1 (sonus.ai) benchmarks may be for a different model family. Qoder Sonus has no verified raw benchmarks of its own — all scores come from agent ratings on modelcomp.

### Normalized scores (1–100)

- **Tool use: 85/100.** Computer-use specialized model; drives desktop and pro software; modelcomp Tool dimension 83-88 across agents; built for marathon-length autonomous tasks; capped by lack of standard agentic benchmarks (OSWorld, Terminal-Bench verified).
- **Reasoning: 83/100.** modelcomp Reasoning 83-87 across agents; Sonus-1 family GPQA 67.3%, MMLU 90.15% show strong reasoning; no verified HLE/MMLU-Pro for Qoder Sonus specifically; capped by attribution uncertainty.
- **Context window: 70/100.** 128K total per modelcomp; Qoder CLI supports up to 1M for some models (not confirmed for Sonus); moderate context.
- **Multimodal: 15/100.** Text in/out only per modelcomp; no image/audio/video input or output.
- **Coding: 88/100.** modelcomp Coding 88/100 (highest-rated dimension); modelcomp Code 88-92 across agents; computer-use coding focus; Sonus-1 family HumanEval 90.0%, LiveCodeBench 51.9% (different family, cited separately); capped by lack of SWE-bench/LiveCodeBench verified for Qoder Sonus itself.
- **Cost efficiency: 68/100.** Highest credit multiplier (8x) in Qoder ecosystem — premium pricing; no per-token pricing disclosed; value depends on task completion efficiency.
- **Overall Score: 68.2/100.** Mean of (85+83+70+15+88)/5 = 68.2 → but modelcomp's aggregated Overall is 79 from 4 agent reports; using 79 to align with multi-agent consensus; best-fit recommendation: computer-use specialized model for Qoder ecosystem users; strong coding and tool use, text-only, premium credit cost.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-29
- Method: public internet research (3+ independent searches: modelcomp.vercel.app, sonus.ai/blog/sonus-1, forum.qoder.com, docs.qoder.com, developer.aliyun.com, aivineet.com, llm-stats.com); scores are normalized 1–100 interpretations, not official vendor scores. modelcomp benchmark figures (Terminal-Bench 65%, SWE-bench Verified 74.5%) attributed to other agents' models — flagged as likely misattribution. Sonus-1 (sonus.ai) benchmarks are a different model family, cited separately with attribution noted. Qoder Sonus has no verified raw benchmarks of its own — scores derive from agent ratings.
- Future sources: add a new file next to this one using the same headings.
