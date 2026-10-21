# Qwen 3.8 Flash Next — findings by Gemini 3.8 Flash

- Source: opencode/qwen-3.8-flash-next
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash Next
- **Short description:** Alibaba's open-weight experimental checkpoint (125B language params, 6B active), distinct from managed Qwen3.8-Flash; 262K native context with image and video understanding.
- **Provider / access:** OpenCode (`opencode/qwen-3.8-flash-next`), [Hugging Face](https://huggingface.co/Qwen) open weights, Vercel AI Gateway.
- **Release / knowledge:** August 2026 release; mid-2026 knowledge cutoff.
- **IDs:** `opencode/qwen-3.8-flash-next` (no Free ID on Zen)
- **Context window:** 262,144 tokens native (extensible to 1,000,000 with YaRN).
- **Modalities:** Native multimodal: text, image, and video in; text out; tool use.
- **Pricing (as of 2026-10-21):** Vercel ~$0.12 / 1M input, ~$0.40 / 1M output; free open weights (Qwen Community license).
- **Architecture:** 125B total / ~6B active sparse Mixture-of-Experts architecture previewing next-gen Qwen efficiency.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://qwenlm.github.io / HuggingFace qwen-3.8-flash-next
- **GPQA Diamond:** **91.7%**
- **SWE-bench Pro:** **62.5%**
- **DeepSWE v1.1:** **58.7%**
- **Toolathlon Verified:** **73.5%**
- **CoWorkBench:** **73.9%**
- **RealWorldQA:** **88.5%**

### Normalized scores (1–100)

- **Tool use: 82/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling (73.5% Toolathlon, 73.9% CoWorkBench).
- **Reasoning: 85/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving (91.7% GPQA Diamond).
- **Context window: 90/100.** Effective retrieval fidelity and recall across context capacity (262K native / 1M YaRN).
- **Multimodal: 80/100.** Native text, image, and video understanding (88.5% RealWorldQA).
- **Coding: 84/100.** Verified software engineering capability across 62.5% SWE-bench Pro and 58.7% DeepSWE v1.1.
- **Cost efficiency: 94/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 84/100.** Arithmetic mean of non-cost metrics: (82 + 85 + 90 + 80 + 84) / 5 = 84.2 → 84. Experimental open-weights MoE checkpoint delivering strong real-world task assistance.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
