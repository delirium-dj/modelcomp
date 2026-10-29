# GLM 4.5 Flash — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Z.ai / Zhipu AI (`glm-4.5-flash`), modelcomp.vercel.app, docs.z.ai, z.ai/blog, arxiv.org (2508.06471), huggingface.co/zai-org/GLM-4.5, anotherwrapper.com, freellm.net, empiriolabs.ai, models.opencode.ai
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 4.5 Flash
- **Short description:** Z.ai's free lightweight GLM-4.5 variant — MoE architecture with hybrid reasoning (thinking/non-thinking modes), 128K context, optimized for agent development, code generation, and complex reasoning. MIT open weights. Deprecated on BigModel as of 2026-01-30 (traffic rerouted to GLM-4.7-Flash).
- **Provider / access:** Z.ai API (`glm-4.5-flash`, `zai/glm-4.5-flash`, `zhipuai/glm-4.5-flash`), BigModel platform, Hugging Face (`zai-org/GLM-4.5`). OpenAI-compatible Chat Completions. Free tier; MIT open weights — free to self-host.
- **Release / knowledge:** Released 2025-07-28; knowledge cutoff 2025-04; deprecated 2026-01-30 on BigModel (rerouted to GLM-4.7-Flash).
- **IDs:** `glm-4.5-flash` (Z.ai API ID); `zai/glm-4.5-flash` (OpenRouter ID); `zhipuai/glm-4.5-flash` (alternate ID). Free route confirmed.
- **Context window:** 128,000 total tokens (official docs.z.ai); some third-party listings show 131,072 or 200,000 (EmpirioLabs). Max output 96K-98,304 tokens (varies by provider).
- **Modalities:** Text in/out. Reasoning: yes (hybrid: thinking mode enabled by default, toggleable via `thinking.type`). Tool calls: yes (function calling, web browsing, Python execution). JSON mode: yes (structured output / JSON response_format). No vision/audio.
- **Pricing (as of 2026-10-29):** Free on Z.ai Flash tier ($0/$0/$0 per 1M); MIT open weights free to self-host. BigModel deprecated the model 2026-01-30.
- **Architecture:** MoE (parameter count not separately published for Flash; GLM-4.5 base is 355B total / 32B active); MIT open-weights license.

### Raw benchmarks found

GLM-4.5-Flash specific (AnotherWrapper, freellm.net):
- HLE: **5.4%** (anotherwrapper.com)
- GPQA: **69.5%** (anotherwrapper.com); GPQA Diamond: **68.7%**
- SWE-bench Verified: **38%** (anotherwrapper.com)
- MMLU: **90.8%** (anotherwrapper.com)
- MMLU Pro: **77.2%** (anotherwrapper.com)
- AIME 2025: **37.8%**; AIME 2024: **36.7%**
- LiveCodeBench: **58.2%** (anotherwrapper.com)
- IFEval: **88.2%** (anotherwrapper.com)
- MathVista: **72.3%** (anotherwrapper.com)
- Tau-Bench Retail: **68.4%** (anotherwrapper.com)
- SimpleQA: **62.5%** (anotherwrapper.com)
- AA Coding Index: **26.3** (freellm.net); SciCode: **34.8%**; Terminal-Bench Hard: **22%**

GLM-4.5 (base, 355B/32B active — vendor benchmark, not Flash-specific):
- SWE-bench Verified: **64.2%** (z.ai blog, arxiv 2508.06471)
- TAU-Bench Retail: **79.7%**; TAU-Bench Airline: **60.4%**
- MMLU Pro: **84.6%**; AIME24: **91.0%**; GPQA: **79.1%**; HLE: **14.4%**
- LiveCodeBench: **72.9%**; Terminal-Bench: **37.5%**

Conflicts noted: Multiple context window figures (128K official vs 131K/200K third-party); AnotherWrapper benchmarks attributed to GLM-4.5-Flash may conflate with base GLM-4.5 numbers; modelcomp lists 55.7 Overall from agent reports with no agreed benchmark figures (0 figures with agreement).

### Normalized scores (1–100)

- **Tool use: 68/100.** Tau-Bench Retail 68.4%, native function calling + web browsing + Python execution; optimized for Claude Code/Roo Code integration; capped by low Terminal-Bench Hard 22% and lack of OSWorld figures.
- **Reasoning: 63/100.** MMLU 90.8%, MMLU Pro 77.2%, GPQA 69.5%, AIME 37.8% show mid-tier reasoning; HLE 5.4% is very low; capped below frontier models.
- **Context window: 70/100.** 128K context verified from official docs; good but below 256K+ newer models.
- **Multimodal: 15/100.** Text in/out only — no image, audio, or video input or output.
- **Coding: 62/100.** SWE-bench Verified 38%, LiveCodeBench 58.2%, HumanEval 88% (anotherwrapper); decent but not leading; capped by lack of SWE-bench Pro/DeepSWE figures and Flash-specific coding verification.
- **Cost efficiency: 100/100.** Free on Z.ai Flash tier; MIT open weights free to self-host; $0 per 1M tokens.
- **Overall Score: 56/100.** Mean of (68+63+70+15+62)/5 = 55.6 → 56; aligns with modelcomp's 55.7 agent aggregate from 5 reports; best-fit recommendation: free, open-weight agentic model for lightweight coding and reasoning tasks on Z.ai; text-only, deprecated on BigModel in favor of GLM-4.7-Flash.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-29
- Method: public internet research (3+ independent searches: modelcomp.vercel.app, docs.z.ai + z.ai/blog, arxiv 2508.06471, huggingface.co/zai-org/GLM-4.5, anotherwrapper.com, freellm.net, empiriolabs.ai, models.opencode.ai); scores are normalized 1–100 interpretations, not official vendor scores. Benchmarks attributed to GLM-4.5-Flash (AnotherWrapper) may partially conflate with base GLM-4.5 (355B vendor numbers from z.ai blog/arxiv) — cited separately. Deprecation notice: BigModel retired GLM-4.5-Flash on 2026-01-30, rerouting to GLM-4.7-Flash.
- Future sources: add a new file next to this one using the same headings.
