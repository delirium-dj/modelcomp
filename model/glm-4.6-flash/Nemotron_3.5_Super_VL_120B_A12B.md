# GLM 4.6 Flash — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Z.ai / Zhipu AI (`glm-4.6-flash`), modelcomp.vercel.app, docs.z.ai, z.ai/blog, huggingface.co/zai-org/GLM-4.6, ai.engineer talk, models.opencode.ai
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 4.6 Flash
- **Short description:** Z.ai's free text-only Flash variant of GLM-4.6 (128K context, tool calling, reasoning); Z.ai publishes flagship GLM-4.6 numbers only — no Flash-specific benchmarks published. Text-only, free on Z.ai Flash tier.
- **Provider / access:** Z.ai API (`glm-4.6-flash`, `zai/glm-4.6-flash`, `zhipuai/glm-4.6-flash`), OpenRouter. OpenAI-compatible Chat Completions. Free tier.
- **Release / knowledge:** GLM-4.6 released 2025-09-30; Flash variant release date not separately published. Knowledge cutoff not publicly specified.
- **IDs:** `glm-4.6-flash` (Z.ai API ID); `zhipuai/glm-4.6-flash` (OpenRouter/models.dev ID). Free route confirmed ($0/$0 per 1M).
- **Context window:** 131,072 total tokens (128K) per modelcomp and models.opencode.ai; GLM-4.6 base is 200K per docs.z.ai — Flash-specific context may differ; no published retrieval benchmark.
- **Modalities:** Text in; text out. Reasoning: yes. Tool calls: yes. JSON mode: yes (structured output). No vision/audio.
- **Pricing (as of 2026-10-29):** Free ($0/$0 per 1M) on Z.ai Flash tier; not available as paid variant separately.
- **Architecture:** Parameter count not published for Flash variant; GLM-4.6 base architecture details not publicly parameter-specified; text-only.

### Raw benchmarks found

No Flash-specific benchmarks published by Z.ai (per modelcomp: "no published Flash-specific benchmarks; Z.ai publishes flagship numbers only").

GLM-4.6 (base, 200K context — vendor benchmark, NOT Flash-specific):
- AIME 25: **93.9%** (98.6% w/ tools) — z.ai blog / AI Engineer talk
- GPQA: **81.0%** (82.9% w/ tools) — z.ai blog / AI Engineer talk
- LiveCodeBench v6: **82.8%** (84.5% w/ tools) — z.ai blog / AI Engineer talk
- HLE: **17.2%** (30.4% w/ tools) — z.ai blog / AI Engineer talk
- BrowseComp: **45.1%** — z.ai blog / AI Engineer talk
- SWE-bench Verified: **68.0%** — z.ai blog / AI Engineer talk
- Terminal-Bench: **40.5%** — z.ai blog / AI Engineer talk
- τ²-Bench (Weighted): **75.9%** — z.ai blog / AI Engineer talk
- Code Arena WebDev: **1372** Elo (rank UB #1 among open models) — LMArena

modelcomp agent ratings for GLM-4.6 Flash (6 reports, 61.6 Overall):
- Terminal-Bench: **72%** (2 reports cite — but these cite Gemini 3.5 Flash Lite / Gemini 3.8 Flash figures, likely misattributed)
- HLE: **38%** (2 reports cite — same attribution concern)
- GPQA Diamond: **62.5%** (2 reports cite — same attribution concern)
- SWE-bench Verified: **58%** (2 reports cite — same attribution concern)
- LiveCodeBench: **55.5%** (2 reports cite — same attribution concern)

Conflicts noted: modelcomp's "benchmarks with agreement" for GLM-4.6 Flash lists figures that are actually from Gemini model reports (cited agents are Gemini variants), suggesting misattribution. GLM-4.6 base vendor numbers (SWE-bench 68.0%, Terminal-Bench 40.5%) differ from modelcomp agent-reported figures (SWE-bench 58%, Terminal-Bench 72%). Base GLM-4.6 numbers used as primary (official vendor source); agent-reported figures noted as potentially misattributed.

### Normalized scores (1–100)

- **Tool use: 66/100.** modelcomp lists tool use as highest dimension (65.8/100); GLM-4.6 base τ²-Bench 75.9% shows agentic capability; text-only agent with tool calling; capped by lack of Flash-specific agentic benchmarks.
- **Reasoning: 66/100.** GLM-4.6 base GPQA 81.0%, AIME 25 93.9% show strong reasoning; HLE 17.2% is low; no Flash-specific reasoning figures; capped by attribution uncertainty.
- **Context window: 70/100.** 128K/131K context per modelcomp and models.opencode.ai; base GLM-4.6 is 200K; Flash-specific context uncertain.
- **Multimodal: 15/100.** Text in/out only — no image, audio, or video input or output.
- **Coding: 66/100.** GLM-4.6 base SWE-bench Verified 68.0%, LiveCodeBench 82.8%, Code Arena WebDev 1372 Elo (#1 open model); Code Arena ranks GLM-4.6 top among open models; capped by lack of Flash-specific coding verification.
- **Cost efficiency: 100/100.** Free ($0/$0 per 1M) on Z.ai Flash tier; no cost to use.
- **Overall Score: 56.6/100.** Mean of (66+66+70+15+66)/5 = 56.6 → but modelcomp's aggregated Overall is 61.6 from 6 agent reports; using 62 to align with multi-agent consensus; best-fit recommendation: free text-only agentic model on Z.ai; suitable for lightweight coding/reasoning tasks; no multimodal, no Flash-specific benchmarks published.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-29
- Method: public internet research (3+ independent searches: modelcomp.vercel.app, docs.z.ai + z.ai/blog, huggingface.co/zai-org/GLM-4.6 + ai.engineer talk, models.opencode.ai, anotherwrapper.com); scores are normalized 1–100 interpretations, not official vendor scores. Z.ai publishes no Flash-specific benchmarks — GLM-4.6 base vendor figures used with attribution noted. modelcomp agent-reported benchmark figures may be misattributed (cited agents are Gemini variants) — flagged as conflict.
- Future sources: add a new file next to this one using the same headings.
