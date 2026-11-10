# DeepSeek V4 Pro — findings by Iceman

- Source: DeepSeek/DeepSeek V4 Pro (0813)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro (DeepSeek-V4-Pro-0813)
- **Short description:** DeepSeek V4 Pro is an open-weights frontier-scale MoE model (MIT license) optimized for agentic coding, software engineering, and reasoning, with 1M context and large output capacity.
- **Provider / access:** DeepSeek API (`deepseek-v4-pro`) and open weights (Hugging Face `deepseek-ai/DeepSeek-V4-Pro-0813`, MIT). Local metadata lists `opencode/deepseek-v4-pro` and `noFreeId`.
- **Release / knowledge:** Hugging Face model card/release reviewed 2026-11-10 (DeepSeek-V4-Pro-0813). Knowledge cutoff not explicitly stated in reviewed sources.
- **IDs:** `deepseek-v4-pro`, `DeepSeek-V4-Pro-0813`, `deepseek-ai/DeepSeek-V4-Pro-0813`.
- **Context window:** 1,000,000 tokens context; up to 384K max output (DeepSeek API docs / Hugging Face card). Local metadata states 1M total (up to 384K out).
- **Modalities:** Text input/output (DeepSeek API docs: V4 Pro not listed as vision-supported in pricing/features table; HF card is text-generation oriented). Local metadata states text in/out.
- **Pricing (as of 2026-11-10):** DeepSeek API (per 1M tokens): input cache hit $0.022 off-peak / $0.044 peak, input cache miss $0.66 / $1.32, output $1.98 / $3.96 (peak hours 01:00–04:00 and 06:00–10:00 UTC Mon–Fri excluding Chinese public holidays). Open weights self-hosting free under MIT.
- **Architecture:** Frontier MoE model; proprietary internal details not fully enumerated in extracted text, but HF card describes DSpark speculative decoding support and large-scale deployment. Local metadata states 1.6T/49B active (not independently verified from reviewed pages).

### Raw benchmarks found

> Verified figures below are from the Hugging Face model card for `deepseek-ai/DeepSeek-V4-Pro-0813` benchmark table unless noted. Evaluation conditions noted in card (e.g. DeepSeek Harness minimal mode, `max` reasoning effort for some code-agent tasks).

Agent / tool use:

- HLE (w tools): **60.0** (wo tools: **42.7**)
- Terminal Bench 2.1: **87.9**
- Toolathlon-Verified: **74.1**
- Agents' Last Exam: **25.7**
- AutomationBench (Public): **31.8**
- NL2Repo: **61.5**
- Cybergym: **83.3**

Reasoning / knowledge:

- HLE (wo tools): **42.7** (w tools: **60.0**)
- GPQA Diamond: **no verified public score found** in reviewed sources
- AIME 2025: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**

Coding:

- DeepSWE: **62.7**
- DSBench-FullStack †: **71.1**
- DSBench-Hard †: **67.2**
- Terminal Bench 2.1: **87.9** (agentic coding/terminal)
- NL2Repo: **61.5**
- SWE-bench Verified / SWE-Pro: **no verified public score found**

Long context:

- 1M context window and 384K max output documented (DeepSeek API/HF). No standalone MRCR/RULER/GraphWalks numeric long-context retrieval benchmark score extracted.

Multimodal:

- Text-only API model in reviewed specs (vision not supported for V4 Pro per DeepSeek pricing/features table).

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded).

- **Tool use: 90/100.** Strong verified agentic/tool-use results (HLE w/ tools 60.0, Terminal Bench 2.1 87.9, Toolathlon-Verified 74.1, Cybergym 83.3, NL2Repo 61.5) indicate high capability in coding agents and tool-mediated workflows; Agents' Last Exam/AutomationBench are more moderate.
- **Reasoning: 88/100.** Verified HLE performance (42.7 no tools / 60.0 with tools) is strong for difficult reasoning, but broader canonical reasoning benchmark coverage (GPQA/AIME/AA Index) was not extracted from reviewed sources.
- **Context window: 97/100.** 1M context with 384K max output is excellent for long-horizon coding, analysis, and agent workflows.
- **Multimodal: 40/100.** Reviewed official specs indicate text-only model (no image/video/audio input support documented for V4 Pro), limiting multimodal capability.
- **Coding: 93/100.** Excellent verified coding/agentic coding results (Terminal Bench 2.1 87.9, DeepSWE 62.7, DSBench-FullStack 71.1, DSBench-Hard 67.2, NL2Repo 61.5) support top-tier coding performance.
- **Cost efficiency: 88/100.** Open weights (MIT) enable free self-hosting; API pricing is moderate with off-peak discounts, though peak rates and infrastructure requirements for self-hosting affect effective cost.
- **Overall Score: 82/100.** Mean of the five non-cost dims (90, 88, 97, 40, 93) = 81.6 → 82. Best fit for long-context agentic coding, software engineering, and text-only reasoning workflows where multimodal input is not required.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to DeepSeek API docs and Hugging Face model card; scores are normalized 1–100 interpretations from verified benchmark figures, not official vendor scores.
- Reference URLs:
  - [DeepSeek V4 Pro 0813 model card (Hugging Face)](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813)
  - [DeepSeek API models & pricing](https://api-docs.deepseek.com/quick_start/pricing)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
