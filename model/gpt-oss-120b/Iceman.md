# GPT-OSS 120B — findings by Iceman

- Source: OpenAI/gpt-oss-120b
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** gpt-oss-120b
- **Short description:** OpenAI’s gpt-oss-120b is an Apache 2.0 open-weight MoE reasoning model (117B total / 5.1B active) with configurable reasoning effort, Harmony response format, and MXFP4 quantization for single-80GB-GPU deployment.
- **Provider / access:** Open weights on Hugging Face (`openai/gpt-oss-120b`, Apache 2.0) and hosted providers (Groq, OpenRouter, Together, etc.). Local metadata lists `openai/gpt-oss-120b`, pricing ~$0.15/$0.60 per 1M, and `noFreeId`.
- **Release / knowledge:** Released August 2025 (model card/arXiv 2508.10925). Knowledge cutoff not explicitly stated in reviewed HF page.
- **IDs:** `gpt-oss-120b`, `openai/gpt-oss-120b`.
- **Context window:** 131,072 tokens total (local metadata/HF context).
- **Modalities:** Text input/output (text-only).
- **Pricing (as of 2026-11-10):** Open weights free to self-host (Apache 2.0, MXFP4 fits one 80GB GPU). Hosted ~$0.15/$0.60 per 1M in/out, $0.075 cached (local metadata).
- **Architecture:** Sparse MoE transformer, 117B parameters with 5.1B active, MXFP4 quantization of MoE weights, Harmony response format, configurable reasoning (low/medium/high), native tool-use/function-calling capabilities (HF card/blog).

### Raw benchmarks found

> Verified figures below are from the Hugging Face model page/evaluation results snippets for `openai/gpt-oss-120b` and the OpenAI model card context visible in reviewed sources, interpreted conservatively. Some results are reported under specific reasoning/tool settings.

Agent / tool use:

- Native agentic capabilities for function calling, web browsing, Python code execution, and structured outputs (HF card).
- Terminal-Bench 2.1: **26.2%** (cited in local metadata as a known weakness; not independently text-extracted from HF page in this pass)
- Tool-use benchmark numerics otherwise not clearly extracted as a comprehensive set.

Reasoning / knowledge:

- GPQA Diamond: **80.81%** (HF evaluation result snippet shown on page) / **73.1%** reasoning medium / **73.5%** reasoning medium with tools (HF eval snippets)
- AIME 2025: **92.5%** (cited in local metadata/model card context; not independently extracted as clear HF-page text in this pass)
- Strong reasoning model positioning with configurable effort levels.

Coding:

- SWE-bench Verified (resolved): **70%** shown in HF evaluation results snippet (marked with source asterisk in page context) / **62.4%** cited in local metadata (different evaluations/settings may apply)
- Coding proficiency emphasized for agentic and tool-use tasks.

Long context:

- 131K context window; no standalone MRCR/RULER/AA-LCR numeric score extracted.

Multimodal:

- Text-only model.

### Normalized scores (1–100)

> Derived from partially verified/mixed-setting evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded). Conservative due to setting-dependent and partially extracted benchmark figures.

- **Tool use: 70/100.** Strong native tool-calling/function-calling/agentic capabilities, but practical terminal-agent performance is limited (Terminal-Bench 2.1 ~26.2% per metadata) and Harmony-format integration adds friction.
- **Reasoning: 84/100.** Strong open reasoning performance (GPQA Diamond up to ~80.8% depending on setting, AIME 2025 92.5% cited) with configurable reasoning effort.
- **Context window: 78/100.** 131K context is useful but below current 256K-1M long-context leaders.
- **Multimodal: 40/100.** Text-only model; no multimodal input capability.
- **Coding: 82/100.** Good coding capability for an open model (SWE-bench Verified ~62–70% depending on evaluation/setting), suitable for many engineering tasks though not top-tier on hardest agentic coding.
- **Cost efficiency: 93/100.** Apache 2.0 open weights, MXFP4 single-80GB-GPU deployment, and low hosted pricing (~$0.15/$0.60 per 1M) provide excellent value.
- **Overall Score: 71/100.** Mean of the five non-cost dims (70, 84, 78, 40, 82) = 70.8 → 71. Best fit as a cost-efficient open reasoning model for tool-augmented workflows where self-hosting and controllable reasoning matter, with weaker terminal-agent reliability.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Hugging Face model page/eval snippets and local metadata; scores are conservative normalized 1–100 interpretations from partially setting-dependent figures, not official vendor scores.
- Reference URLs:
  - [gpt-oss-120b model card (Hugging Face)](https://huggingface.co/openai/gpt-oss-120b)
  - [gpt-oss-120b & gpt-oss-20b Model Card (arXiv:2508.10925)](https://arxiv.org/abs/2508.10925)
  - Local repository metadata consulted: `model/gpt-oss-120b/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
